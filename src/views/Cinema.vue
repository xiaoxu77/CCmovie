<template>
  <div>
    <div class="city">
      <div class="left">
        <router-link to="/city" tag="div"> {{ cityname }} </router-link>
      </div>
      <div class="center">影院</div>
    </div>
    <div class="cinema" :style="mystyle">
      <ul>
        <li v-for="data in datalist" :key="data.cinemaId">
          <span class="sp1">{{ data.name }}</span>
          <font class="sp2">￥{{ data.lowPrice / 100 }}起</font>
          <p>{{ data.address }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import BetterScroll from 'better-scroll'
import axios from 'axios'
export default {
  data() {
    return {
      cityname: '',
      datalist: [],
      mystyle: {
        height: '0px',
      },
    }
  },
  // beforeMount() {
  // localStorage.setItem('cityId', '110100')
  // localStorage.setItem('cityname', '北京')
  // },
  mounted() {
    this.mystyle.height = document.documentElement.clientHeight - 100 + 'px'

    // if (this.$store.state.cinemaList.length === 0) {
    //   this.$store.dispatch('getCinemaListAction')
    // } else {
    //   // console.log('影院模块已使用缓存数据，提高用户体验')
    // }
    // localStorage.setItem('cityId', '110100')
    // localStorage.setItem('cityname', '北京')
    var id = localStorage.getItem('cityId')
    var name = localStorage.getItem('cityname')
    this.cityname = name
    // console.log(name)
    if (id === null) {
      axios({
        url: `https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=4242166`,
        headers: {
          'X-Client-Info':
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"16235800592731328617316353","bc":"430100"}',
          'X-Host': 'mall.film-ticket.cinema.list',
        },
      })
        .then((res) => {
          // console.log(res.data.data)
          this.datalist = res.data.data.cinemas
          this.cityname = '北京'
          this.$nextTick(() => {
            new BetterScroll('.cinema', {
              scrollbar: {
                fade: true,
                interactive: true,
              },
            })
          })
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      axios({
        url: `https://m.maizuo.com/gateway?cityId=${id}&ticketFlag=1&k=4242166`,
        headers: {
          'X-Client-Info':
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"16235800592731328617316353","bc":"430100"}',
          'X-Host': 'mall.film-ticket.cinema.list',
        },
      })
        .then((res) => {
          // console.log(res.data.data)
          this.datalist = res.data.data.cinemas
          this.$nextTick(() => {
            new BetterScroll('.cinema', {
              scrollbar: {
                fade: true,
                interactive: true,
              },
            })
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
}
</script>
<style lang="scss" scoped>
.city {
  position: relative;

  .left {
    color: #ff5f16;
    left: 10px;
    position: absolute;
  }
  .center {
    color: black;
    font-size: 18px;
    background: rgb(224, 224, 224);
    text-align: center;
  }
  line-height: 50px;
  height: 50px;
  background: whitesmoke;
}
.cinema {
  // height: 700px;
  overflow: hidden;
  position: relative;
}
ul {
  li {
    position: relative;
    height: 50px;
    margin: 15px;
    .sp1 {
      font-size: 15px;
    }
    .sp2 {
      font-size: 14px;
      position: absolute;
      right: 0;
      color: #ff5f16;
    }
    p {
      font-size: 10px;
      color: gray;
    }
  }
}
</style>