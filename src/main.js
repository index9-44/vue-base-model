// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//在这里导入你要的库，如路由vue-router或者element-ui
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import VueRouter from 'vue-router'
import router from './router'
import App from './App'

//显式声明使用，即可全局使用
Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(VueRouter)
// Vue.use(Router)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
