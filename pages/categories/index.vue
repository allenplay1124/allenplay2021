<template>
    <div id="categories">
        <BlogHeader></BlogHeader>
        <div class="wrapper">
            <div class="container content">
                <div class="row page-header">
                    <h1><fa :icon="['fas', 'atlas']" /> 分類</h1>
                </div>
                <div class="row gx-3 categories-block">
                    <div
                        v-for="(cate, index) in categories"
                        :key="index"
                        class="col-12 col-sm-6 col-md-4 col-lg-3 mt-3"
                    >
                        <div
                            class="d-flex align-items-center justify-content-center categories-item shadow"
                            :style="{
                                background: 'url(' + cate.icon + ')',
                                'background-repeat': 'no-repeat',
                                'background-size': 'cover',
                            }"
                        >
                            <nuxt-link :to="cate.path">
                                {{ cate.name }}
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BlogHeader from '~/components/BlogHeader'
import Footerbar from '~/components/Footerbar'
export default {
    components: {
        BlogHeader,
        Footerbar,
    },
    async asyncData({ $content }) {
        const categories = await $content('categories')
            .sortBy('sort', 'asc')
            .fetch()
        console.log(categories)
        return {
            categories,
        }
    },
}
</script>
