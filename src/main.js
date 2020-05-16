import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import './ml'
import VueRouter from 'vue-router'
import router from './routes'

Vue.use(VueRouter);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
