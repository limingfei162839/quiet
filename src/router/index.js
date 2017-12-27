import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/public/main' //主架构

import CBanner from '@/components/page/c_banner'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Main',
        component: Main,
        children: [{
            path: '/CBanner',
            component: CBanner
        }, ]
    }]
})