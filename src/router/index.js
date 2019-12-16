import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Common from '../views/Common.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Common,
        children: [{
            path: '',
            name: 'home',
            component: Home,
        }]
    },
    {
        path: '/detail',
        component: Common,
        children: [{
            path: '',
            name: 'detail',
            component: () =>
                import ("../views/Detali.vue")
        }]
    },
    {
        path: '/sign',
        name: 'sign',
        component: () =>
            import ("../components/content/sign.vue")
    },

    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router