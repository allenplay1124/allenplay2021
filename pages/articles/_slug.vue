<template>
  <div id="article">
    <blogHeader></blogHeader>
    <div class="container-fluid">
      <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2">
        <div class="col">
          <div
            class="article-cover"
            :style="{
              background: 'url(' + post.img + ')',
              'background-position': 'center',
              'background-repeat': 'no-repeat',
              'background-size': 'cover'
            }"
          ></div>
        </div>
        <div class="col">
          <div class="article-post">
            <h1>{{ post.title }}</h1>
            <hr />
            <div class="post-meta">
              發佈時間： {{ post.createdAt }} / 最後更新時間：
              {{ post.updatedAt }}
            </div>
            <div class="post-content">
              <nuxt-content :document="post"></nuxt-content>
            </div>
            <div class="post-tags">
              <ul>
                <li v-for="(tag, index) in tags" :key="index">
                  <nuxt-link :to="tag.path">
                    {{ tag.name }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <div class="clearfix"></div>
            <div class="post-footer">
              <div class="post-prev" v-if="perv != null">
                <nuxt-link :to="perv.path"> 👈 {{ perv.title }} </nuxt-link>
              </div>
              <div class="post-next" v-if="next != null">
                <nuxt-link :to="next.path"> {{ next.title }} 👉 </nuxt-link>
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
import blogHeader from "~/components/BlogHeader";
import moment from "moment";
export default {
  components: {
    blogHeader
  },
  async asyncData({ $content, params }) {
    const post = await $content("articles", params.slug).fetch();
    const [perv, next] = await $content("articles")
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    post.img = process.env.baseUrl + "/" + post.img;

    post.createdAt = moment(post.createdAt).format("YYYY-MM-DD hh:mm:ss");
    post.updatedAt = moment(post.updatedAt).format("YYYY-MM-DD hh:mm:ss");

    const tags = await $content("tags")
      .where({ slug: { $in: post.tags } })
      .fetch();

    console.log(tags);
    return {
      post,
      perv,
      next,
      tags
    };
  },
  methods: {
    formatDate(date) {
      return moment(date).format("YYYY-MM-DD HH:mm:ss");
    }
  }
};
</script>
