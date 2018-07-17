import Vue from 'vue'
import Router from 'vue-router'
import Platform from '../modules/platform/Platform'
import Home from '../modules/platform/home/Home'
import KnowledgeBase from '../modules/knowledgeBase/KnowledgeBase'

Vue.use(Router);

export default new Router({
    routes: [
        // 重定向
        {
            path: '/',
            redirect: '/platform/home'
        },
        {
            path: '/platform',
            name: 'platform',
            component: Platform,
            children: [
                {
                    path: '/platform/home',
                    name: 'home',
                    component: Home
                }
            ]
        },
        {
            path: '/knowledgeBase',
            name: 'knowledgeBase',
            component: KnowledgeBase
        }
    ]
})
