import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css"
import SwiperCore, { Navigation, Pagination, Autoplay} from 'swiper/core';

  // configure Swiper to use modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

Vue.config.productionTip = false;


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
