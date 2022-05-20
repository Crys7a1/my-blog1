const Mock = require("mockjs");

const banners = {
  banners: [
    {
      imgsrc: "static/红宝书.jpg",
      linkhref: "https://www.baidu.com"
    },
    {
      imgsrc: "static/你不知道的JS.jpg",
      linkhref: "https://www.baidu.com"
    },
    {
      imgsrc: "static/阮一峰ES6.jpg",
      linkhref: "https://www.baidu.com"
    },
    {
      imgsrc: "static/NETWORK.jpg",
      linkhref: "https://www.baidu.com"
    }
  ]
};
Mock.mock("/home/banners", "get", banners);

// 核心标签库c，cif
// Tomcat端口号 监听端口
// el表达式 对象
// mvc设计模式
// jdbc
// svlet 声明周期 监听事件作用 写转发，重定向代码/概念，区别
// jdbc连接步骤 代码 封装类basejdbc
// 九大域对象 九个内置对象
// cookie session对比
// 过滤器代码
const articles = {
  articles: [
    {
      content: `第一种方法：Object.assign([],arr)/Object.assign({}.obj)
        第二种方法：ES6中的 [...arr] / {...obj}   称为硬拷贝？与Object.assign()不同
        let arr = [1,2,3]
        let arrCopy = [...arr]修改初始数组arr不会改变arrCopylet
        obj = { a:1, b:2, c:3 }let objCopy = { ...obj }修改初始对象obj不会改变objCop`,
      title: "浅拷贝数组或对象",
      time: "2022.5.1",
      tag: "JavaScript"
    },
    {
      content: `对象属性，除value外，还有三个特殊的'标志'
      创建属性时他们默认为true

      ● writable 控制值是否可以修改
      ● enumerable控制是否可以在循环中列出
      ● configurable控制属性是否可以被删除，这些'标志'是否可以被修改`,
      title: "对象属性配置",
      time: "2022.5.1",
      tag: "JavaScript"
    },
    {
      content: ` "nodemon": "^2.0.15"
      ^表示接受补丁和次要版本

      查看版本是否过时
      npm outdated
      安装特定版本
      npm install slugify@1.0.0

      只接受补丁版本
      ~

      更新版本
      npm update slugify

      使用所有版本
      *

      删除包
      npm uninstall express
      不建议吧依赖文件加复制到其他地方 或者上传到GitHub
      读取json文件中的依赖项 npm install重新下载依赖

      共享package.json和package-lock.json文件和其他开发者同共享码`,
      title: "包版本控制、更新、删除",
      time: "2022.5.1",
      tag: "Npm"
    },
    {
      content: `FROM CALLBACK HELL TO PROMISE
      返回一个promise
      链接then方法->处理成功的案例
      链接catch方法->处理错误的被promise拒绝的案例


      Buliding Promise
      只接受文件名 没有回调

      创建一个读取文件函数，
      传入一个文件名 返回一个promise

      使用Promise构造函数 es6
      promise接受一个executor函数(两个参数resolve，reject) ，创建promise时立即调用它`,
      title: "Promise 处理回调地狱",
      time: "2022.5.1",
      tag: "JavaScript"
    },
    {
      content: `最常用的api架构

      1. 将API分成逻辑资源  资源：是一个对象或某物的表示
      2. 提供基于结构化URL的数据    这样客户端可以向其发送请求
      3. api使用正确的http方法而不是url
      4. 使用JSON数据格式
      5. Be stateless`,
      title: "REST架构构建api",
      time: "2022.5.1",
      tag: "API"
    }
  ]
};
Mock.mock("/home/articles?page=1", "get", articles);

const goodsinfos = {
  goodsinfos: [
    {
      id: "MDN",
      info:
        "MDN Web Docs 站点提供有关开放 Web 技术的信息" + "包括用于 Web 站点和渐进式 Web 应用程序的 HTML、CSS 和 API ",
      price: "前端学习",
      plusprice: "社区",
      imgsrc: "static/mdn.png",
      linkhref: "https://developer.mozilla.org/zh-CN/"
    },
    {
      id: "StackOverflow",
      info:
        "一个与程序相关的IT技术问答网站。用户可以在网站免费提交问题，浏览问题，索引相关内容，在创建主页的时候使用简单的HTML",
      price: "前端学习",
      plusprice: "社区",
      imgsrc: "static/stackoverflow.png",
      linkhref: "https://www.baidu.com"
    },
    {
      id: "Runoob",
      info:
        "菜鸟教程(www.runoob.com)提供了编程的基础技术教程, 介绍了HTML、CSS、Javascript、Python，Java，Ruby，C，PHP , MySQL等各种编程语言的基础知识。 " +
        "同时本站中也提供了大量的在线实例，通过实例，您可以更好的学习编程",
      price: "前端学习",
      plusprice: "综合",
      imgsrc: "static/runoob.jpeg",
      linkhref: "https://www.runoob.com/"
    },
    {
      id: "JavaScriptInfo",
      info: "以最新的 JavaScript 标准为基准。通过简单但足够详细的内容，为你讲解从基础到高阶的 JavaScript 相关知识。",
      price: "前端学习",
      plusprice: "书籍",
      imgsrc: "static/javascriptInfo.png",
      linkhref: "https://zh.javascript.info/"
    },
    {
      id: "Can I Use",
      info: "这是一个极好的网站，查询你使用的属性方法在浏览器中的兼容",
      price: "开发工具",
      plusprice: "兼容性",
      imgsrc: "static/caniuse.png",
      linkhref: "https://caniuse.com/"
    }
  ]
};

Mock.mock("/home/goodsinfos?page=1", "get", goodsinfos);
