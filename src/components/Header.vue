<template>
  <div>
    <el-header>
      <!-- <img class="img-head" src="static/7.jpg" alt=""/> -->
      <router-link :to="{ name: 'Login' }">
        <img class="img-head" src="static/7.jpg" alt="" />
        <b class="coderName">Coder-Cs</b>
      </router-link>

      <nav id="nav" :class="{ active: active1 }">
        <ul>
          <li>
            <router-link :to="{ name: 'Login' }">首页</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'BlogDetail' }">内容</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'BlogEdit' }">管理</router-link>
          </li>
          <!-- <li><a href="">About</a></li> -->
        </ul>

        <button type="button" class="icon" id="toggle" @click="toggle">
          <div class="line line1"></div>
          <div class="line line2"></div>
        </button>
      </nav>
      <div class="git">
        <a href="https://github.com/Crys7a1" target="_blank"><img id="github" src="static/github.png" alt=""/></a>
      </div>
    </el-header>
  </div>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      isActive: true,
      active1: true
    };
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
      if (this.isActive) {
        this.active1 = true;
      } else {
        this.active1 = false;
      }
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration-line: none;
}
/* body {
  background-image: linear-gradient(
    to Bottom,
    #eafbff 0%,
    #eafbff 50%,
    #5290f9 0%,
    #5290f9 100%
  );

  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
} */
.el-header {
  width: 1403px;
}
.img-head {
  width: 60px;
  height: 60px;
  float: left;
}
.git {
  width: 60px;
  height: 60px;
  right: 10px;
  margin-top: -25px;
  float: right;
}
#github {
  width: 30px;
  height: 30px;
}
.coderName {
  color: #1098ad;
  display: flex;
  width: 100px;
  height: 100px;
  padding-top: 18px;
}
nav {
  background-color: #fff;
  width: 80px;
  margin: auto;
  margin-top: -90px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.6s linear;
  border-radius: 3px;
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); */
  /* position: relative; */
  overflow-x: hidden;
}

nav.active {
  width: 350px;
}

nav ul {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  width: 0;
  transition: width 0.6s linear;
}

nav.active ul {
  width: 100%;
}

nav ul li {
  opacity: 0;
  transition: all 0.6s linear;
}

nav.active ul li {
  opacity: 1;
  transform: rotateY(360deg);
}

nav ul li a {
  text-decoration: none;
  color: #1098ad;
  margin: 0 10px;
}

nav .icon {
  background-color: #fff;
  width: 30px;
  height: 30px;
  cursor: pointer;
  border: 0;
  position: relative;
}

.icon .line {
  background-color: #5290f9;
  width: 20px;
  height: 2px;
  position: absolute;
  top: 10px;
  left: 5px;
  transition: transform 0.6s linear;
}

.icon .line2 {
  top: 18px;
}
nav.active .icon .line1 {
  transform: rotate(-765deg) translateY(5.5px);
}
nav.active .icon .line2 {
  transform: rotate(765deg) translateY(-5.5px);
}
</style>
