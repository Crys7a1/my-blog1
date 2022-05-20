<template>
  <el-container>
    <el-header> <Header /></el-header>
    <section class="info">
      <h1>CoderCs</h1>
      <h3>一个啥也不会的切图仔</h3>
      <!-- <el-button>开始</el-button> -->

      <router-link :to="{ name: 'BlogDetail' }">
        <el-button>开始</el-button>
      </router-link>
    </section>
    <section>
      <div class="tips">
        <div class="function">
          <img class="tips-img" src="static/1.svg" alt="" />
          <h3>技术博客</h3>
        </div>
        <div class="function">
          <img class="tips-img" src="static/1.svg" alt="" />
          <h3>安装教程</h3>
        </div>
        <div class="function">
          <img class="tips-img" src="static/1.svg" alt="" />
          <h3>资源分享</h3>
        </div>
      </div>
      <div class="content">
        <div class="about">
          <h4>
            青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪
          </h4>

          <img src="static/2.jpg" alt="" />
        </div>
        <div class="about">
          <h4>
            头上一片晴天，心中一个想念
          </h4>

          <img src="static/4.jpg" alt="" />
        </div>
        <div class="about">
          <h4>
            少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉
          </h4>

          <img src="static/3.jpg" alt="" />
        </div>
      </div>
    </section>
    <backTop />
    <Footer />
  </el-container>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import backTop from "../components/backTop.vue";
export default {
  name: "Login",
  components: { Header, Footer, backTop },
  data() {
    return {
      drawer: false,
      direction: "rtl",
      images: [
        { url: require("../../public/5.jpg") },
        { url: require("../../public/博客.jpg") },
        { url: require("../../public/博客2.jpg") },
        { url: require("../../public/官网博客.jpg") }
      ]
    };
  }
};
</script>

<style scoped>
/* .el-header,
.el-footer {
  /* background-color: #b3c0d1; */
/* color: #333; */
/* text-align: center;
  line-height: 60px;
} */
/* body {
  background-image: linear-gradient(
    to Bottom,
    #eafbff 0%,
    #eafbff 50%,
    #5290f9,
    #5290f9 100%
  );
} */

.el-aside {
  /* background-color: #d3dce6; */
  color: #333;
  text-align: center;
  line-height: 200px;
}
.info {
  width: 100%;
  height: 300px;
  margin-top: 10px;
  margin-bottom: 50px;
  color: white;
  background-color: #1098ad;
  text-align: center;
}
h1 {
  font-size: 50px;
}
h3 {
  text-align: center;
}
h4 {
  color: white;
  font-size: 16.5px;
}
.tips-img {
  width: 200px;
  height: 200px;
  padding: 0px 100px;
}
img {
  height: 70px;
  width: 70px;
  padding: 72px 10px;
}

.el-button {
  width: 100px;
  font-weight: 700;
  margin-top: 10px;
}
.tips {
  display: flex;
}
.function {
  width: 400px;
  height: 200px;
  margin: 50px;
  margin-bottom: 100px;
  text-align: center;
}
.content {
  display: flex;
}

.about {
  width: 400px;
  height: 210px;
  background-color: gray;
  margin: 50px;
  border: 1px #303846 solid;
  border-radius: 20px 20px;
  background-image: linear-gradient(to Bottom, #1098ad 0%, #1098ad 65%, #1098ad, white 0%);
}

.el-main {
  /* background-color: #e9eef3; */
  color: #333;
  text-align: center;
  line-height: 160px;
  /* background-image: linear-gradient(to Bottom,#eafbff 0%,
    #eafbff 50%,#5290f9,#5290f9 100%
    ); */
  background-image: linear-gradient(to Bottom, #eafbff 0%, #eafbff 25%, #5290f9, #5290f9 75%, #eafbff, #eafbff 100%);
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
/*
.el-carousel__item h3 {
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
} */

/* .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } */

/* .nav {
  margin: auto;
  margin-top: 80px;
} */
</style>
