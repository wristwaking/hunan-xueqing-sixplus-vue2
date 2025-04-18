import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: () => import('@/pages/Mobile')
    },
    {
        path: "/manage",
        component: () => import('@/pages/Manage')
    },
]
const router = new VueRouter({
    routes,
    mode: "history"
})

router.beforeEach((to, from, next) => {
    if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
        if (to.path == '/manage') {
            next({ path: '/' })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router