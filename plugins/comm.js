import Vue from "vue";
import Vuex from "vuex";

Vue.mixin({
  methods: {
    siteUrl(route) {
      return process.env.baseUrl + "/" + route;
    }
  }
});
