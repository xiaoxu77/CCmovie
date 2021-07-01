<template>
  <div>
    <ul>
      <li
        v-for="data in datalist"
        :key="data.filmId"
        @click="handleChangePage(data.filmId)"
      >
        <img :src="data.poster" alt="图片呢" />
        <span>{{ data.name }}</span>
        <p>观众评分：{{ data.grade }}</p>
        <p>主演：{{ data.actors | actorfilter }}</p>
        <p>{{ data.nation }} | {{ data.runtime }}分钟</p>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
Vue.filter('actorfilter', (data) => {
  var actorlist = data.map((item) => item.name)
  return actorlist.join(' ')
})
export default {
  data() {
    return {
      datalist: [],
    }
  },
  mounted() {
    // axios
    //   .get(
    //     'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=5943850'
    //   )
    //   .then((res) => {
    //     console.log(res.data)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    axios({
      url:
        'https://m.maizuo.com/gateway?cityId=430100&pageNum=1&pageSize=10&type=2&k=8703621',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"16235800592731328617316353","bc":"430100"}',
        'X-Host': 'mall.film-ticket.film.list',
      },
    })
      .then((res) => {
        // console.log(res.data)
        this.datalist = res.data.data.films
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    handleChangePage(id) {
      // console.log(id)
      // 编程式导航--路径跳转
      // this.$router.push(`/detail/${id}`)
      // 编程式导航--名字跳转
      this.$router.push({ name: 'ccDetail', params: { id } })
    },
  },
}
</script>
<style lang="scss" scoped>
ul {
  padding-bottom: 50px;
  li {
    overflow: hidden;
    margin: 25px;
    img {
      width: 70px;
      float: left;
      padding-right: 10px;
    }
    span {
      font-size: 18px;
    }
    p {
      margin: 3px;
      color: gray;
      font-size: 13px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>