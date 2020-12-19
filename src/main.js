import Vue from 'vue'
import App from './App'
import router from './router'
// import Video from 'video'
// import jquery from './lib'
// import 'video.js/dist/video-js.css'
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


