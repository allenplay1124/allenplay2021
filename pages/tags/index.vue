<template>
  <div id="tags">
    <BlogHeader></BlogHeader>
    <div class="wrapper">
      <div class="container content">
        <div class="row page-header">
          <h1><fa :icon="['fa', 'tags']" /> 標籤</h1>
        </div>
        <div class="row tag-block gx-3">
          <div
            v-for="(tag, index) in tags"
            :key="index"
            class="col-12 col-sm-6 col-md-4 col-lg-3 mt-3"
          >
            <div
              class="d-flex align-items-center justify-content-center tag-item shadow"
              :style="{
                background: 'url(' + tag.icon + ')',
                'background-repeat': 'no-repeat',
                'background-size': 'cover',
              }"
            >
              <nuxt-link :to="tag.path">
                {{ tag.name }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footerbar></Footerbar>
  </div>
</template>
<script>
import BlogHeader from "~/components/BlogHeader";
import Footerbar from "~/components/Footerbar";
export default {
  components: {
    BlogHeader,
    Footerbar,
  },
  async asyncData({ $content }) {
    const tags = await $content("tags").sortBy("sort", "asc").fetch();

    return {
      tags,
    };
  },
};
</script>