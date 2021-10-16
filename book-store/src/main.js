import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false
// router.beforeEach((to, from, next) => {
//   if (to.name == 'iframe') {
//     document.title = to.query.title || '书城'
//   } else {
//     document.title = (to.meta ? to.mata.title : to.name) || '书城'
//   }

//   if (to.matched.length === 0) {
//     from.name ? next({ name: from.name }) : next('/index')
//   } else {
//     next()
//   }
// })
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
