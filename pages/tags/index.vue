<template>
    <div id="tags">
        <BlogHeader></BlogHeader>
        <div class="container">
            <div class="row tag-block gx-3">
                <div v-for="(tag, index) in tags" :key="index"
                    class="col-12 col-sm-6 col-md-4 col-lg-3 mt-3">
                    
                    <div class="d-flex align-items-center justify-content-center tag-item"
                        :style="{
                            background: 'url(' + tag.icon + ')',
                            'background-repeat': 'no-repeat',
                            'background-size': 'cover',
                        }">
                        <nuxt-link :to="tag.path">
                            {{ tag.name }}
                        </nuxt-link>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BlogHeader from '~/components/BlogHeader'
export default {
    components: {
        BlogHeader
    },
    async asyncData({$content}) {
        const tags = await $content('tags').sortBy('sort', 'asc').fetch();
        console.log(tags)
        return {
            tags
        }
    }
}
</script>