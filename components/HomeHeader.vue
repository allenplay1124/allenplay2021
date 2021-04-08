<template>
    <header class="home-header">
        <div class="avatar"></div>
        <h1>{{ this.$nuxt.$options.head.title }}</h1>
        <ul class="menu">
            <li>
                <nuxt-link to="/">
                    首頁
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/tags">
                    Tags
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/category">
                    分類
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/about">
                    關於我
                </nuxt-link>
            </li>
        </ul>
    </header>
</template>
<script>
export default {
    mounted() {
        
    }
}
</script>
<style scoped>
.home-header {
    width: 100%;
    height: 400px;
    background: url('/themes/images/home_header_bg.jpeg');
    background-size: 100% 700px;
    background-repeat: no-repeat;
    background-attachment: cover;
    margin: 0 auto;
    padding-top: 43pt;
}

.home-header h1 {
    text-align: center;
    color: #FFF;
    margin-top: 10px;
}

.avatar {
    width: 150px;
    height: 150px;
    background: gray;
    margin: 0 auto;
    border-radius: 150px;
    border: 5px solid #FFF;
}

.menu {
    margin: 0 auto;
    width: 300px;
    height: 60px;
    margin-top: 20px;
    background: rgba(0, 0, 0, 0.3);
    padding-top: 20px;
    padding-bottom: 0px;
    border-radius: 20px;
    border-radius: 20px;
    position: relative;
    bottom: 0;
}

.menu li {
    float: left;
    margin-left: 20px;
    list-style: none;
}

.menu li a:link {
    color: #FFF;
    text-decoration: none;
}

.menu li a:hover {
    font-weight: bolder;
}

.menu li a:visited {
    color: #FFF;
}
</style>