import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Blogs from '../views/Blogs.vue'
import BlogEdit from '../views/BlogEdit.vue'
import BlogDetail from '../views/BlogDetail.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: {name: "Login"}
    },
    // {
    //   path: '/blogs',
    //   name: 'Blogs',
    //   component: Blogs
    // },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/blogedit',
      name: 'BlogEdit',
      component: BlogEdit
    },
    {
      path: '/blogdetail',
      name: 'BlogDetail',
      component: BlogDetail
    },
    
    
  ]
})
