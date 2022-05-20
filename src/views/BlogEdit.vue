<template>
  <div>
    <el-container>
      <el-header><Header /></el-header>
      <el-main style="margin-top: 80px">
        <!-- <div id="main" :style="{width: '300px', height: '300px'}"></div> -->

        <highcharts :options="chartOptions"></highcharts>

        <div class="content">
          <h2>推荐书籍</h2>

          <div class="book">
            <div class="bookinfo" v-for="(item, id) in banners" :key="id">
              <a :href="item.linkhref">
                <img class="bookimg" :src="item.imgsrc" alt="" />
              </a>
            </div>
          </div>
          <!-- <div class="studyweb">
            <ul>
              <li v-for="item in goodsinfos" v-bind:key="item.id">
                {{ item.id }} -- {{ item.info }} -- {{ item.price }}--
                {{ item.plusprice }}-
                <img :src="item.imgsrc" alt="" />

                <br />
                <hr />
              </li>
            </ul>
          </div> -->
          <h2>推荐网站</h2>

          <el-descriptions
            style="margin-top:100px"
            v-for="item in goodsinfos"
            v-bind:key="item.id"
          >
            <el-descriptions-item label="🔵">
              <img :src="item.imgsrc" alt="" height="50" width="50" />
            </el-descriptions-item>
            <el-descriptions-item label="链接">
              <a :href="item.linkhref" target="_blank">
                {{ item.id }}
              </a>
            </el-descriptions-item>
            <!-- <el-descriptions-item label="">{{
              item.price
            }}</el-descriptions-item> -->
            <el-descriptions-item label="描述">{{
              item.info
            }}</el-descriptions-item>

            <el-descriptions-item label="备注">
              <el-tag size="small">{{ item.plusprice }}</el-tag>
              <el-tag size="small" style="margin-left:10px">{{
                item.plusprice
              }}</el-tag>
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </el-main>
      <backTop />
      <Footer />
    </el-container>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import backTop from "../components/backTop.vue";

import { Chart } from "highcharts-vue";
import axios from "axios";
import Highcharts from "highcharts";
import exportingInit from "highcharts/modules/exporting";

exportingInit(Highcharts);

export default {
  name: "BlogsEdit",

  components: { Header, Footer, backTop },
  highcharts: Chart,

  data() {
    return {
      banners: [],
      goodsinfos: [],

      chartOptions: {
        title: {
          // floating:true,
          text: "2021国内编程语言市场份额"
        },

        series: [
          {
            type: "pie",
            innerSize: "80%",
            name: "市场份额",
            data: [
              {
                name: "Java",
                y: 28.1,
                url: "http://bbs.hcharts.cn"
              },
              ["C++", 25.7],
              {
                name: "JavaScript",
                y: 13.7,
                sliced: true,
                selected: true,
                url: "http://www.hcharts.cn"
              },
              ["C#", 8.3],
              ["Python", 8.2],
              ["Go", 6.5][("其他", 9.5)]
            ]
          }
        ]
      }
    };
  },
  created() {
    var self = this;
    axios.get("/home/banners").then(function(res) {
      console.log(res);
      self.banners = res.data.banners;
    });

    axios.get("/home/goodsinfos?page=1").then(function(res) {
      // var self = this;

      console.log(res);
      self.goodsinfos = res.data.goodsinfos;
    });
  }
};
</script>

<style scoped>
.el-main {
  /* background-color: #e9eef3; */
  color: #333;
  text-align: center;
  line-height: 160px;
  /* background-image: linear-gradient(to Bottom,#eafbff 0%,
    #eafbff 50%,#5290f9,#5290f9 100%
    ); */
  /* background-image: linear-gradient(
    to Bottom,
    #eafbff 0%,
    #eafbff 25%,
    #5290f9,
    #5290f9 75%,
    #eafbff,
    #eafbff 100%
  ); */
}
.book {
  display: flex;
  margin-bottom: 70px;
}
.bookinfo {
  width: 200px;
  height: 210px;
  background-color: gray;
  margin: 80px;
  margin-bottom: 50px;
}
.bookimg {
  width: 200px;
  height: 300px;
}
.el-descriptions {
  border-left: 5px solid #1098ad;
  border-right: 5px solid #1098ad;
}
</style>
