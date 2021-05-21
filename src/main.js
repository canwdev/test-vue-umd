import App from './App.vue'
import AllComponents from './index'

const Vue = window.Vue
Vue.config.productionTip = false
Vue.use(AllComponents)
new Vue({
  render: h => h(App),
}).$mount('#app')
