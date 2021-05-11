<template>
    <div id="tags">
        <BlogHeader></BlogHeader>
        <div class="row tags-block">
            <div class="col-md-6"></div>
            <div class="col-md-6">
                <div class="container-fluid">
                    <div class="row g-5 p-3">
                        <div 
                            v-for="(tag, index) in tags" 
                            :key="index" 
                            class="tag-item col-md-3 col-12 m-3"
                            :style="{
                                background: 'url(' + tag.icon + ')',
                                'background-repeat': 'no-repeat',
                                'background-size': 'cover',
                            }">
                            <div class="tag-border">
                                <nuxt-link :to="tag.path">{{ tag.name }}</nuxt-link>
                            </div>
                        </div>
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