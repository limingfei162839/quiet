import Vue from 'vue'
import Router from 'vue-router'
import Banner from '@/components/public/banner'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Banner',
      component: Banner
    }
  ]
})
