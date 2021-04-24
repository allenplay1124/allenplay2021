<template>
    <div id="article">
        <blogHeader></blogHeader>
        <div class="container-fluid">
            <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2">
                <div class="col">
                    <div class="article-cover"
                        :style="{
                            background: 'url(' + post.img + ')',
                            'background-position': 'center',
                            'background-repeat': 'no-repeat',
                            'background-size': 'cover'
                        }"
                        >
                    </div>
                </div>
                <div class="col">
                    <div class="article-post">
                        <h1>{{ post.title }}</h1>
                        <hr />
                        <div class="post-meta">
                            發佈時間： {{ formatDate(post.createdAt) }} /
                            最後更新時間： {{ formatDate(post.updatedAt ) }}
                        </div>
                        <div class="post-content">
                            <nuxt-content :document="post"></nuxt-content>
                        </div>
                        <div class="post-tags">
                            <ul>
                                <li v-for="(tag, index) in post.tags" :key="index">
                                    <nuxt-link :to="'/tag/' + tag">
                                        {{ tag }}
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>
                        <div class="clearfix"></div>
                        <div class="post-footer">
                            <div class="post-prev" v-if="perv != null">
                                <nuxt-link :to="'/blog/' + perv.slug">
                                    👈 {{ perv.title }}
                                </nuxt-link>
                            </div>
                            <div class="post-next" v-if="next != null">
                                <nuxt-link :to="'/blog/' + next.slug">
                                    {{ next.title }} 👉
                                </nuxt-link>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="post-comments">
                            <Disqus />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import blogHeader from '~/components/BlogHeader'
import moment from 'moment'
export default {
    components: {
        blogHeader
    },
    async asyncData({ $content, params }) {
        const post = await $content('articles', params.slug).fetch()
        const [perv, next] =  await $content('articles')
            .only(['title', 'slug'])
            .sortBy('createdAt', 'asc')
            .surround(params.slug)
            .fetch()

        post.img = process.env.baseUrl + '/' + post.img 
        console.log(perv, next)
        return {
            post,
            perv,
            next
        }
    },
    methods: {
        formatDate(date) {
            return moment(date).format("YYYY-MM-DD HH:mm:ss")
        }
    }
}
</script>