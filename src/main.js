import Vue from 'vue'
import App from './App.vue'
import AllComponents from './index'
Vue.config.productionTip = false
Vue.use(AllComponents)
new Vue({
  render: h => h(App),
}).$mount('#app')
