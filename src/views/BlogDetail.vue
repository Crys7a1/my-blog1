<template>
  <el-container>
    <el-header><Header /></el-header>

    <el-main>
      <bodyContent />
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="技术博客" name="first">
          <div class="block">
            <el-timeline v-for="(item, index) in articles" :key="index">
              <el-timeline-item :title="item.title" timestamp="2018/4/12" placement="left">
                <el-card>
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.content }}</p>
                  <p>提交于{{ item.time }}</p>
                  <el-tag>{{ item.tag }}</el-tag>
                  <el-button
                    @click="del(index)"
                    type="danger"
                    style="float:right"
                    icon="el-icon-delete"
                    circle
                  ></el-button>
                </el-card>
              </el-timeline-item>
            </el-timeline>

            <el-input v-model="title" placeholder="请输入文章标题"></el-input>
            <el-input v-model="tag" placeholder="请输入类型"></el-input>
            <el-input v-model="time" placeholder="请输入发布日期"></el-input>

            <el-input type="textarea" :rows="6" placeholder="请输入文章内容" v-model="content"> </el-input>
            <el-button type="primary" id="add" @click="add">录入</el-button>
            <aside>
              <ul class="related">
                <li class="related-post">
                  <img src="static/3.jpg" alt="Person programming" width="75" height="75" />
                  <div>
                    <p>The Unknown Powers of CSS</p>

                    <p class="related-author">
                      By Jonas Schmedtmann
                    </p>
                  </div>
                </li>
                <li class="related-post">
                  <img src="static/3.jpg" alt="Lightning" width="75" height="75" />
                  <div>
                    <p>The Unknown Powers of CSS</p>

                    <p class="related-author">
                      By Jim Dillon
                    </p>
                  </div>
                </li>
                <li class="related-post">
                  <img src="static/3.jpg" alt="JavaScript code on a screen" width="75" height="75" />
                  <div>
                    <p>Why JavaScript is Awesome</p>

                    <p class="related-author">By Matilda</p>
                  </div>
                </li>
              </ul>
            </aside>
          </div>
        </el-tab-pane>

        <el-tab-pane label="安装教程" name="second"
          ><el-collapse accordion>
            <el-collapse-item>
              <template slot="title"> -- Vue.js 安装--<i class="header-icon el-icon-info"></i> </template>
              <div>
                <h3>独立版本</h3>
                <p>
                  我们可以在 Vue.js 的官网上直接下载 vue.min.js 并用 script 标签引入。
                </p>
                <h3>使用 CDN 方法</h3>
                <p>
                  以下推荐国外比较稳定的两个 CDN，国内还没发现哪一家比较好，目前还是建议下载到本地。<br />

                  publicfile CDN（国内） : https://cdn.staticfile.org/vue/2.2.2/vue.min.js
                  <br />

                  unpkg：https://unpkg.com/vue@2.6.14/dist/vue.min.js
                  <br />

                  cdnjs : https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.8/vue.min.js
                </p>
                <h3>NPM 方法</h3>
                <p>
                  # 查看版本<br />
                  $ npm -v<br />
                  2.3.0<br />
                  #升级 npm<br />
                  cnpm install npm -g<br />
                  # 升级或安装 cnpm<br />
                  npm install cnpm -g<br />
                </p>
              </div>
            </el-collapse-item>
            <el-collapse-item title="--Vue-cli安装--">
              <p>
                # 全局安装 vue-cli<br />
                $ cnpm install --global vue-cli<br />
                # 创建一个基于 webpack 模板的新项目<br />
                $ vue init webpack my-project<br />
                # 这里需要进行一些配置，默认回车即可<br />
                This will install Vue 2.x version of the template.<br />

                For Vue 1.x use: vue init webpack#1.0 my-project<br />

                ? Project name my-project<br />
                ? Project description A Vue.js project<br />
                ? Author runoob<br />
                ? Vue build standalone<br />
                ? Use ESLint to lint your code? Yes<br />
                ? Pick an ESLint preset Standard<br />
                ? Setup unit tests with Karma + Mocha? Yes<br />
                ? Setup e2e tests with Nightwatch? Yes
              </p>
            </el-collapse-item>
            <el-collapse-item title="--配置 MongoDB--">
              <h3>创建数据目录</h3>
              <p>
                已经在 C 盘安装了 mongodb，现在让我们创建一个 data 的目录然后在 data 目录里创建 db 目录。<br />
                cd C:\<br />
                md "\data\db"<br />
              </p>

              <h3>运行 MongoDB 服务器</h3>
              <p>
                为了从命令提示符下运行 MongoDB 服务器，你必须从 MongoDB 目录的 bin 目录中执行 mongod.exe 文件。<br />

                C:\mongodb\bin\mongod --dbpath c:\data\db<br />
              </p>

              <h3>连接MongoDB</h3>
              <p>
                我们可以在命令窗口中运行 mongo.exe 命令即可连接上 MongoDB，执行如下命令：<br />

                C:\mongodb\bin\mongo.exe<br />
              </p>
              <h3>连接MongoDB</h3>
              <p>
                创建目录，执行下面的语句来创建数据库和日志文件的目录<br />

                mkdir c:\data\db<br />
                mkdir c:\data\log<br />
              </p>

              <h3>MongoDB 后台管理 Shell</h3>
              <p>
                > mongo <br />
                MongoDB shell version: 3.0.6<br />
                connecting to: test<br />
                ……<br />
                由于它是一个JavaScript shell，您可以运行一些简单的算术运算:<br />

                > 2 + 2<br />
                4<br />
                ><br />
                db 命令用于查看当前操作的文档（数据库）：<br />

                > db<br />
                test<br />
                ><br />
                插入一些简单的记录并查找它：<br />

                > db.runoob.insert({x:10})<br />
                WriteResult({ "nInserted" : 1 })<br />
                > db.runoob.find()<br />
                { "_id" : ObjectId("5604ff74a274a611b0c990aa"), "x" : 10 }<br />
                >
              </p>
            </el-collapse-item>
            <el-collapse-item title="--Vue中使用 Highcharts--">
              <h3>下载安装</h3>
              <p>npm install highcharts-vue</p>

              <h3>使用</h3>
              <h3>1. 全局注册</h3>
              <p>
                若想要在应用程序的任何位置使用本插件，请使用全局注册方法。在您的主应用程序文件中导入 Vue 和
                Highcharts-Vue 扩展包<br />

                import Vue from 'vue' import HighchartsVue from 'highcharts-vue' 接下来，您可以将其注册为 Vue
                对象中的插件： Vue.use(HighchartsVue)
              </p>
              <h3>1. 局部注册</h3>
              <p>
                若仅用于特定组件，请使用局部注册方法。首先，您应该从组件文件中的 Highcharts-Vue 包中导入 Chart
                组件对象：<br />

                import {Chart} from 'highcharts-vue'<br />
                然后，您需要在 Vue 实例配置中注册它，即在 components 部分中<br />

                { components: { highcharts: Chart } }
              </p>
              <h3>配置</h3>
              <h3>1. 选项参数</h3>
              <p>
                如果您已经完成上述任务之一（导入和注册组件），它允许您在应用程序中使用 Highcharts-Vue 组件，只需要添加
                highcharts元素，而且必须通过它的 :options 参数传递图表配置对象<br />
                highcharts :options="chartOptions">highcharts<br />
                例如：<br />
                <small
                  >new Vue({<br />
                  data() {<br />
                  return {<br />
                  chartOptions: {<br />
                  series: [{<br />
                  data: [1, 2, 3] // sample data<br />
                  }] } } }
                </small>
                })
              </p>
            </el-collapse-item>
          </el-collapse>
        </el-tab-pane>
        <el-tab-pane label="其他" name="third"><el-calendar v-model="value"> </el-calendar> </el-tab-pane>
        <el-tab-pane label="更多" name="fourth"
          ><el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
              {{ "列表内容 " + o }}
            </div>
          </el-card>
        </el-tab-pane>
      </el-tabs>

      <!-- 标签页 -->
    </el-main>
    <backTop />
    <Footer />
  </el-container>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import bodyContent from "../components/bodyContent.vue";
import backTop from "../components/backTop.vue";
import axios from "axios";

export default {
  name: "BlogsEdit",

  components: { Header, Footer, bodyContent, backTop },

  data() {
    return {
      activeName: "first",
      drawer: false,
      articles: [],
      activeNames: ["1"],
      activeName: "",
      title: "",
      content: "",
      tag: "",
      time: ""
    };
  },
  created() {
    var self = this;
    axios.get("/home/articles?page=1").then(function(res) {
      console.log(res);
      self.articles = res.data.articles;
    });
  },

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },

    add() {
      if (this.title == "" || this.content == "") {
        alert("请输入文章标题或内容");
        return false;
      }
      this.articles.push({
        title: this.title,
        content: this.content,
        tag: this.tag,
        time: this.time
      });
      this.title = "";
      this.content = "";
      (this.tag = ""), (this.time = "");
    },
    del(index) {
      this.articles.splice(index, 1);
    }
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
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-empty {
  height: 2000px;
}
.el-card {
  width: 800px;
  height: 400px;
  line-height: 20px;
  border-left: 5px solid #1098ad;
  border-right: 5px solid #1098ad;
}
.el-collapse-item {
  border-left: 5px solid #1098ad;
  border-right: 5px solid #1098ad;
}
.el-tag {
  float: left;
  border-left: 2px solid #1098ad;
  border-right: 2px solid #1098ad;
}
.el-calendar {
  width: 1000px;
  height: 1000px;
}
aside {
  margin-top: -2010px;
  width: 300px;
  height: 500px;
  float: right;
  background-color: #f7f7f7;
  border-top: 5px solid #1098ad;
  border-bottom: 5px solid #1098ad;
  padding: 50px 40px;
}
.related-post {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}
.related-author {
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  font-style: italic;
}

p {
  text-align: left;
  margin-left: 10px;
  font-size: 15px;
}
</style>
