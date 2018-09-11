import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import BootstrapVue from 'bootstrap-vue'
var VueTruncate = require('vue-truncate-filter')

Vue.use(VueTruncate)
Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contact
    }
  ]
})
