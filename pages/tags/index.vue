<template>
    <div id="tags">
        <BlogHeader></BlogHeader>
        <div class="row tags-block">
            <div class="col-md-8"></div>
            <div v-for="(tag, index) in tags" :key="index" class="tag-item col-md-4">
                <nuxt-link :to="tag.path">{{ tag.name }}</nuxt-link>
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
        const tags = await $content('tags').fetch();

        return {
            tags
        }
    }
}
</script>