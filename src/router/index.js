import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import menu from './menu.js';

let router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: '/',
            component: () =>
                import ('@/views/layout/layout'),
            children: [
                ...menu
            ]
        },
        {
            path: '/404',
            name: 'noFound',
            component: () =>
                import ('@/views/errorPage/404')
        }
    ]
});

export default router;