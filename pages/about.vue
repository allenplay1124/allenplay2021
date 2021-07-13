<template>
    <div id="about">
        <BlogHeader></BlogHeader>
        <div class="container">
            <div class="bg">
                <img src="/themes/images/profit-bg.png" alt="" />
            </div>
            <div class="abount-box">
                <h2>關於我</h2>
                <div class="abount-content">
                    一個網頁程式設計師，擅長 PHP
                    網頁程式開發，目前在南部一家接案公司，擔任網頁程式設計師，主要負責前後端程式開發。平時喜歡帶著<s>相機</s>(手機)到處趴趴走，紀錄每座城市的美好。
                </div>
                <h2>技能樹</h2>
                <div class="row row-col-1 row-col-sm-2 row-col-md-4 skill-tree-box">
                    <div class="col">
                        <div class="card skill-tree" tree-item="backend">
                            <div class="card-title">
                                後端程式與框架
                            </div>
                            <div class="card-body">
                                <ul>
                                    <li>php</li>
                                    <li>laravel</li>
                                    <li>slim</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card skill-tree" tree-item="frontend">
                            <div class="card-title">
                                前端程式與框架
                            </div>
                            <div class="card-body">
                                <ul>
                                    <li>html + js + css</li>
                                    <li>vue.js / nuxt.js</li>
                                    <li>bootstrap</li>
                                    <li>element-UI</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card skill-tree" tree-item="database">
                            <div class="card-title">
                                資料庫
                            </div>
                            <div class="card-body">
                                <ul>
                                    <li>Mysql</li>
                                    <li>PostgresSQL</li>
                                    <li>Redis</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card skill-tree" tree-item="os">
                            <div class="card-title">
                                作業系統
                            </div>
                            <div class="card-body">
                                <ul>
                                    <li>MacOS (主要開發作業統)</li>
                                    <li>Linux / Ubunt / CentOS</li>
                                    <li>Windows</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <h2>關於本站</h2>
                <div class="abount-content">
                    關於這個站主要是為了紀錄技術筆記，及一些我覺得好用的軟體工具。本站是由 <code>nuxt.js</code> 所建置而成。
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
}
</script>
