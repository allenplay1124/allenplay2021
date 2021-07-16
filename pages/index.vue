<template>
  <div class="container-fluid p-0" id="home">
    <HomeHeader></HomeHeader>
    <div class="container main">
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gx-5 gy-5"
      >
        <div class="col" v-for="(post, index) in articles" :key="index">
          <div class="card p-0 shadow-sm">
            <nuxt-link :to="post.path">
              <div
                class="post-cover"
                :style="{
                  background: 'url(' + post.img + ')',
                  'background-repeat': 'no-repeat',
                  'background-position': 'center',
                  'background-attachment': 'cover',
                  'background-size': '100% 250px'
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
                <nuxt-link :to="post.path">
                  {{ post.title }}
                </nuxt-link>
              </h4>

              <div class="post-summary">
                {{ post.summary }}
              </div>

              <div class="post-tag">
                <span
                  class="badge rounded-pill bg-warning text-dark mx-1"
                  v-for="(tag, index) in post.tags"
                  :key="index"
                >
                  {{ tag.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="page navigation" v-if="totalPage > 1">
        <ul class="pagination justify-content-center">
          <li class="page-item" v-for="p in totalPage" :key="p">
            <nuxt-link :to="'/home-page/' + p" class="page-link">
              {{ p }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="row">
      <FooterBar></FooterBar>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import HomeHeader from "~/components/HomeHeader";
import FooterBar from "~/components/Footerbar"
export default {
  components: {
    HomeHeader,
    FooterBar
  },
  async asyncData({ $content, env }) {
    const allPost = await $content("articles").fetch();
    const pageLimit = process.env.pageLimit;
    const total = await allPost.length;
    const totalPage = Math.ceil(total / pageLimit);

    const posts = await $content("articles")
      .sortBy("createdAt", "desc")
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
      
      post.tags = []

      for (var t of item.tags) {
        const tagItem = await $content('tags', t).fetch() 
        post.tags.push(tagItem)
      }

      post.category = await item.category;
      post.createdAt = await moment(item.createdAt).format('YYYY-MM-DD hh:mm:ss');
      post.year = await moment(item.createdAt).format('YYYY')
      post.date = await moment(item.createdAt).format('MM-DD')
      post.path = await item.path
      articles.push(post);
    }
    
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
