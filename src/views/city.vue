<template>
  <div>
    <div class="city">
      <ul>
        <span v-for="data in cityList" :key="data.index">
          {{ data.index }}
          <li
            v-for="city in data.list"
            :key="city.cityId"
            @click="changeCity(city.cityId, city.name)"
          >
            <span>{{ city.name }}</span>
          </li>
        </span>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import BetterScroll from 'better-scroll'

export default {
  data() {
    return {
      cityList: [],
      // mystyle: {
      //   height: '0px',
      // },
    }
  },
  mounted() {
    // this.mystyle.height = document.documentElement.clientHeight - 50 + 'px'

    axios({
      url: 'https://m.maizuo.com/gateway?k=9300905',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"16235800592731328617316353","bc":"110100"}',
        'X-Host': 'mall.film-ticket.city.list',
      },
    })
      .then((res) => {
        // console.log(res.data.data)
        this.cityList = this.handleCity(res.data.data.cities)
        // console.log(this.cityList)
        // this.$nextTick(() => {
        //   new BetterScroll('.city', {
        //     scrollbar: {
        //       fade: true,
        //       interactive: true,
        //     },
        //   })
        // })
      })
      .catch((err) => {
        console.log(err)
      })
  },
  beforeMount() {
    this.$store.commit('HideTabbar', false)
  },
  methods: {
    handleCity(cityList) {
      // console.log(cityList)
      var letterArr = []
      for (var i = 65; i < 91; i++) {
        letterArr.push(String.fromCharCode(i))
      }
      // console.log(letterArr)
      var newList = []
      for (var j = 0; j < letterArr.length; j++) {
        var arr = cityList.filter(
          (item) => item.pinyin.substring(0, 1) === letterArr[j].toLowerCase()
        )
        // console.log(arr)
        if (arr.length > 0) {
          newList.push({
            index: letterArr[j],
            list: arr,
          })
        }
      }
      // console.log(newList)
      return newList
    },
    changeCity(id, name) {
      // console.log(id, name)
      localStorage.setItem('cityId', id)
      localStorage.setItem('cityname', name)
      this.$router.push('/cinema')
    },
  },
  beforeDestroy() {
    this.$store.commit('ShowTabbar', true)
  },
}
</script>
<style lang="scss" scoped>
// .city {
//   overflow: hidden;
//   position: relative;
// }
ul {
  margin-bottom: 50px;
  span {
    color: gray;
    margin-left: 15px;
    line-height: 50px;
  }
  li {
    span {
      color: black;
      margin-left: 25px;
    }

    font-size: 15px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgb(224, 224, 224);
  }
}
</style>