import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/common.css"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Nav from '@/components/common/nav.vue'
import Floot from '@/components/common/floot.vue'

Vue.component(Nav.name,Nav)
Vue.component(Floot.name,Floot)
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
