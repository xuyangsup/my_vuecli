import Vue from 'vue'

import 'normalize.css/normalize.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import {Button} from 'element-ui'
// import './styles/element-variables.scss'
import '@/styles/index.scss' // global css

Vue.use(ElementUI);
// Vue.use(Element);
// Vue.component(Button.name, Button) // 或Vue.use(Button)

import App from './App.vue'
import router from './router'
import store from './store'

import api from './api' // 导入api接口
Vue.prototype.$api = api; // 将api挂载到vue的原型上
import 'amfe-flexible' // 引入amfe-flexible

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
