<template>
  <div class="swiper-container filmswiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/swiper.min.css'
export default {
  mounted() {
    new Swiper('.filmswiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    })
  },
}
</script>
<style lang="scss" scoped>
.filmswiper {
  position: relative;
  width: 100%;
  height: 200px;
  img {
    position: absolute;
    top: -100px;
  }
}
</style>