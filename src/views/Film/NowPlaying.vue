<template>
  <div>
    <ul>
      <li
        v-for="data in this.$store.state.nowList"
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
export default {
  data() {
    return {}
  },
  mounted() {
    if (this.$store.state.nowList.length === 0) {
      this.$store.dispatch('getNowListAction')
    } else {
      // console.log('热映模块已使用缓存数据，提高用户体验')
    }
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