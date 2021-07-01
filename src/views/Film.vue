<template>
  <div>
    <swiper :key="looplist.length" ref="myscroll">
      <div
        class="swiper-slide"
        v-for="data in looplist.films"
        :key="data.bannerId"
      >
        <img :src="data.poster" alt="图片呢" />
      </div>
    </swiper>

    <!-- 有banner图的时候下端注释放进filmheader里面实现吸顶效果 -->
    <!-- :class="isFixed ? 'fixed' : ''" -->
    <filmheader :class="isFixed ? 'fixed' : ''"></filmheader>
    <router-view></router-view>
  </div>
</template>
// <script>
import swiper from '@/views/Film/Swiper'
import axios from 'axios'
import filmheader from '@/views/Film/FilmHeader'
export default {
  data() {
    return {
      looplist: [],
      isFixed: false,
    }
  },
  components: {
    swiper,
    filmheader,
  },
  mounted() {
    axios({
      url:
        'https://m.maizuo.com/gateway?cityId=430100&pageNum=1&pageSize=10&type=1&k=2972189',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"16235800592731328617316353","bc":"430100"}',
        'X-Host': 'mall.film-ticket.film.list',
      },
    })
      .then((res) => {
        this.looplist = res.data.data
        // console.log(this.looplist.films)
      })
      .catch((err) => {
        console.log(err)
      })
    window.onscroll = this.handlescroll
  },
  beforeDestroy() {
    window.onscroll = null
  },
  methods: {
    handlescroll() {
      // 判断滚动距离大于轮播图的高度从而实现吸顶效果
      // console.log(this.$refs.myscroll.$el.offsetHeight)
      if (
        document.documentElement.scrollTop >=
        this.$refs.myscroll.$el.offsetHeight
      ) {
        // console.log('fixed')
        this.isFixed = true
      } else {
        // console.log('unfixed')
        this.isFixed = false
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.swiper-wrapper {
  img {
    width: 100%;
  }
}
</style>