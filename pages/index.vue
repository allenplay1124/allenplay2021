<template>
  <div class="container-fluid p-0">
    <HomeHeader></HomeHeader>
    <div class="container main">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        <div v-for="(post, index) in articles" :key="index" class="card p-0">
          <div
            class="post-cover"
            :style="{
              background: 'url(' + post.img + ')',
              'background-repeat': 'no-repeat',
              'background-position': 'center',
              'background-attachment': 'cover',
              'background-size': '100% 300px'
            }"
          ></div>
          <div class="post-content">
            <h4 class="post-title">
              <nuxt-link :to="'/' + post.slug">
                {{ post.title }}
              </nuxt-link>
            </h4>
            <div class="post-summary">
              {{ post.summary }}
            </div>
            <div class="post-tag">
              <span class="badge rounded-pill bg-info text-dark" 
                v-for="(tag, index) in post.tags" :key="index">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeader from "~/components/HomeHeader";
export default {
  components: {
    HomeHeader
  },
  async asyncData({ $content }) {
    const articles = await $content("articles")
      .only(["title", "summary", "img", "slug", "author", "tags", "category"])
      .sortBy("createdAt", "desc")
      .fetch();
    console.log(articles);
    return {
      articles
    };
  }
};
</script>

<style>
.main {
  margin-top: 20px;
}

.post-title a:link {
  text-decoration: none;
}

.post-cover {
  width: 100%;
  height: 300px;
  background-size: 100% 300px;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: cover;
}

.post-content {
  height: 150px;
  padding: 10px;
}
</style>
