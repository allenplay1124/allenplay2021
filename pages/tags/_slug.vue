<template>
    <div id="tag">
        <div
            :style="{
                background: 'url(/' + tag.cover + ')',
                'background-repeat': 'no-repeat',
                'background-size': 'cover',
                height: '50vh',
            }"
        >
            <BlogHeader></BlogHeader>
            <div class="tag-name">
                {{ tag.name }}
            </div>
        </div>
        <div class="wrapper">
            <div class="container content">
                <div
                    class="row mt-5 gx-5 shadow"
                    v-for="(item, index) in articles"
                    :key="index"
                >
                    <div
                        class="col-12 col-sm-12 col-md-4 col-lg-4 post-img p-3"
                    >
                        <nuxt-link :to="item.path">
                            <div
                                :style="{
                                    background: 'url(' + item.img + ')',
                                    'background-position': 'center',
                                    'background-attachment': 'cover',
                                    'background-size': '100% 300px',
                                    height: '300px',
                                }"
                            ></div>
                        </nuxt-link>
                    </div>

                    <div class="col-12 col-sm-12 col-md-8 col-lg-8 p-3">
                        <h1 class="post-title">
                            <nuxt-link :to="item.path">
                                {{ item.title }}
                            </nuxt-link>
                        </h1>

                        <div class="post-time">
                            <fa :icon="['fas', 'clock']" /> {{ item.createdAt }}
                        </div>

                        <div class="post-categories mt-1">
                            <fa :icon="['fas', 'atlas']" />
                            <span
                                v-for="(cateItem, key) in item.categories"
                                :key="key"
                            >
                                <nuxt-link :to="cateItem.path">
                                    {{ cateItem.name }}
                                </nuxt-link>
                            </span>
                        </div>

                        <div class="post-tags mt-1">
                            <fa :icon="['fa', 'tags']" />
                            <span
                                v-for="(tagItem, key) in item.tags"
                                :key="key"
                            >
                                <nuxt-link :to="tagItem.path">
                                    {{ tagItem.name }}
                                </nuxt-link>
                            </span>
                        </div>

                        <div class="clearfix"></div>

                        <div class="post-summary mt-3">{{ item.summary }}</div>
                    </div>
                </div>
            </div>
        </div>

        <Footerbar></Footerbar>
    </div>
</template>
<script>
import moment from 'moment'
import BlogHeader from '~/components/BlogHeader'
import Footerbar from '~/components/Footerbar'
export default {
    components: {
        BlogHeader,
        Footerbar,
    },
    async asyncData({ $content, params, env }) {
        const tag = await $content('tags', params.slug).fetch()

        const posts = await $content('articles')
            .where({ tags: { $contains: params.slug } })
            .sortBy('createAt', 'desc')
            .fetch()

        const articles = []
        for (let item of posts) {
            let post = new Object()
            post.title = await item.title
            post.summary = await item.summary
            post.img = (await env.baseUrl) + '/' + item.img
            post.slug = await item.slug
            post.author = await item.author

            post.tags = []
            for (let t of item.tags) {
                const tagItem = await $content('tags', t)
                    .fetch()
                    .catch(err => {})

                post.tags.push(tagItem)
            }

            post.categories = []
            for (let cate of item.category) {
                const cateItem = await $content('categories', cate)
                    .fetch()
                    .catch(err => {})

                post.categories.push(cateItem)
            }

            post.path = await item.path

            post.createdAt = await moment(item.createdAt).format(
                'YYYY-MM-DD hh:mm:ss'
            )

            articles.push(post)
        }

        return {
            tag,
            articles,
        }
    },
}
</script>
