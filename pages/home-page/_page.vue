<template>
  <div class="container-fluid p-0" id="home">
    <HomeHeader></HomeHeader>
    <div class="container main">
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gx-5 gy-5"
      >
        <div class="col" v-for="(post, index) in articles" :key="index">
          <div class="card p-0 shadow-sm">
            <nuxt-link :to="'/blog/' + post.slug">
              <div
                class="post-cover"
                :style="{
                  background: 'url(' + post.img + ')',
                  'background-repeat': 'no-repeat',
                  'background-position': 'center',
                  'background-attachment': 'cover',
                  'background-size': '100% 300px'
                }"
              >
                <div class="post-date-block">
                  <div class="post-year">{{ post.year }}</div>
                  <div class="post-date">{{ post.date }}</div>
                </div>
              </div>
            </nuxt-link>

            <div class="post-content">
              <h4 class="post-title">
                <nuxt-link :to="'/blog/' + post.slug">
                  {{ post.title }}
                </nuxt-link>
              </h4>

              <div class="post-summary">
                {{ post.summary }}
              </div>

              <div class="post-tag">
                <span
                  class="badge rounded-pill bg-info text-dark"
                  v-for="(tag, index) in post.tags"
                  :key="index"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="page navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item" v-for="p in totalPage" :key="p">
            <nuxt-link :to="'/home-page/' + p" class="page-link">
              {{ p }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import HomeHeader from "~/components/HomeHeader";
export default {
  components: {
    HomeHeader
  },
  async asyncData({ $content, params, env }) {
    const allPost = await $content("articles").fetch();
    const pageLimit = process.env.pageLimit;
    const total = await allPost.length;
    const totalPage = Math.ceil(total / pageLimit);
    const page = parseInt(params.page);
    const skip = (page - 1) * pageLimit;

    const posts = await $content("articles")
      .only([
        "title",
        "summary",
        "img",
        "slug",
        "author",
        "tags",
        "category",
        "createdAt"
      ])
      .sortBy("createdAt", "desc")
      .skip(skip)
      .limit(pageLimit)
      .fetch();

    var articles = [];
    for (var item of posts) {
      var post = new Object();
      post.title = await item.title;
      post.summary = await item.summary;
      post.img = (await env.baseUrl) + "/" + item.img;
      post.slug = await item.slug;
      post.author = await item.author;
      post.tags = await item.tags;
      post.category = await item.category;
      post.createdAt = await item.createdAt;
      post.year = await item.createdAt.substr(0, 4);
      post.date = await item.createdAt.substr(5, 5);

      articles.push(post);
    }

    console.log(articles);

    return {
      articles,
      page: 1,
      total,
      pageLimit,
      totalPage
    };
  }
};
</script>
