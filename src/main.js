import Vue from 'vue'
import app from './app.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// Styles
import "../src/style/styles.scss";

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')
