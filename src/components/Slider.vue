<template>
    <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="(page, idx) in pageList" :key="idx">
              <router-link
                tag="img"
                :to="page"
                @click="$router.push('/portfolio/' + page)"
                class="example-another__one"
                :src="require(`../images/portfolio/${page}-1.jpg`)" 
                alt="nextPage"></router-link>
          </swiper-slide>

        
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>   
   
        </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
  props: ['pageList'],
  data(){
    return{
       swiperOption: {
          slidesPerView: 1,
          autoplay: {
            delay: 2000
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
            600: {
              slidesPerView: 2,
              spaceBetween: 20
            }
          }
        } 
    }
  },
  components: {
      Swiper,
      SwiperSlide,
  }
}
</script>

<style>
.swiper-button-next, .swiper-button-prev{
  color: #fdcc21;
  font-size: 30px;
}
</style>