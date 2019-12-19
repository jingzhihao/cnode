import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import dayjs from 'dayjs'
import service from "./http"
// import "./assets/reset.css"


Vue.use(ElementUI)
Vue.prototype.$axios = service
Vue.prototype.$dayjs = dayjs
=======
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
>>>>>>> 7c7bddcc27b2ff73396f71f07b77b5f893e00c04
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')