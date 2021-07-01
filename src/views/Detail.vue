<template>
  <div v-if="filminfo">
    <div class="swiperimg">
      <img :src="filminfo.poster" alt="图片呢" class="poster" />
    </div>
    <div class="name m">
      {{ filminfo.name }}
    </div>
    <div class="category m">
      {{ filminfo.category }}
    </div>
    <div class="synopsis m">
      {{ filminfo.synopsis }}
    </div>
    <div class="cast m">演职人员</div>
    <!-- <div class="castSwiper"></div> -->
    <!-- {{ filminfo.actors | actorfilter }} -->
    <swiper class="actorswiper" preview="4" myclassname="actorswiper">
      <div
        class="swiper-slide"
        v-for="data in filminfo.actors"
        :key="data.name"
      >
        <img :src="data.avatarAddress" alt="图片呢" />
        <p class="name2 b">
          {{ data.name }}
        </p>
        <p class="role a">
          {{ data.role }}
        </p>
      </div>
    </swiper>
    <div class="cast n">剧照</div>
    <swiper class="photoswiper" preview="3" myclassname="photoswiper">
      <div
        class="swiper-slide"
        v-for="(data, index) in filminfo.photos"
        :key="index"
      >
        <img :src="data" alt="图片呢" />
      </div>
    </swiper>
  </div>
</template>
<script>
import axios from 'axios'
import swiper from '@/views/Detail/DetailSwiper'
import Vue from 'vue'
import Swiper from './Film/Swiper.vue'
// import bus from '@/bus'

Vue.filter('actorfilter', (data) => {
  var actorlist = data.map((item) => item.name)
  return actorlist.join(' ')
})
export default {
  data() {
    return {
      filminfo: null,
    }
  },
  props: ['id'],
  beforeMount() {
    // console.log('hidentabbar')
    // bus.$emit('tabbar', false)
    // this.$store.state.isTabbarShow = false
    this.$store.commit('HideTabbar', false)
  },
  mounted() {
    // console.log('要id获取详情信息', this.$route.params.id, this.id)
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=5930048`,
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"16235800592731328617316353","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.info',
      },
    })
      .then((res) => {
        // console.log(res.data)
        this.filminfo = res.data.data.film
      })
      .catch((err) => {
        console.log(err)
      })
  },
  beforeDestroy() {
    // console.log('showtabbar')
    // bus.$emit('tabbar', true)
    // this.$store.state.isTabbarShow = true
    this.$store.commit('ShowTabbar', true)
  },
  components: {
    swiper,
  },
}
Swiper
</script>
<style lang="scss" scoped>
.m {
  margin: 10px;
}
.n {
  margin: 50px 0px 10px 10px;
}
.b {
  text-align: center;
  font-size: 12px;
  color: balck;
}
.name {
  margin: 10px;
}
.category {
  color: gray;
  font-size: 15px;
}
.synopsis {
  color: gray;
  font-size: 13px;
  margin-bottom: 50px;
}
.cast {
  font-size: 15px;
}
.poster {
  width: 100%;
  top: -70%;
  position: absolute;
}
.swiperimg {
  height: 56vw;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.a {
  text-align: center;
  font-size: 8px;
  color: gray;
}
</style>