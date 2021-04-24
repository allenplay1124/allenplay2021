<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container-fluid">
      <nuxt-link class="navbar-brand" to="/">{{
        this.$nuxt.$options.head.title
      }}</nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link to="/" class="nav-link">
              首頁
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/tags" class="nav-link">
              Tags
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/category" class="nav-link">
              分類
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="about" class="nav-link">
              關於我
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script></script>
