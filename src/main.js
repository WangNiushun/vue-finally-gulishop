import Vue from 'vue'
import App from '@/App.vue'

Vue.config.productionTip = false
// 在入口文件中引入 路由器对象
import router from '@/router'

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
