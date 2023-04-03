import VueAwesomeSwiper from "vue-awesome-swiper";
// import "swiper/swiper.css";
import "swiper/swiper-bundle.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueAwesomeSwiper);
});
