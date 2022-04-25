import Vue from 'vue'
import App from './App.vue'
import router  from './router/router.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import 'font-awesome/css/font-awesome.min.css'
import fontawesomeUI from './utils/fontawesome.js'
Vue.component('font-awesome-icon', fontawesomeUI);
// import 'lib-flexible/flexible'
// import './lib/flexible.js'
Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
