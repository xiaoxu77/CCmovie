<template>
  <div class="swiper-container filmswiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/swiper.min.css'
export default {
  props: ['preview', 'myclassname'],
  mounted() {
    new Swiper('.' + this.myclassname, {
      slidesPerView: this.preview,
      spaceBetween: this.myclassname==="actorswiper"?10:30,
      freeMode: true,
    })
  },
}
</script>
<style lang="scss" scoped>
.swiper-slide {
  width: 85px;
}
.swiper-slide img {
  width: 100%;
  margin-top: -15%;
}
</style>