import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 自定义的共享状态
    isTabbarShow: true,
    nowList: [],
    cinemaList: []
  },
  getters: {
    // 通过getters过滤原始数据,得到想要的数量的电影院
    cinemaListGetter(state) {
      return state.cinemaList.filter((item, index) => index < 50)
    }
  },
  mutations: {
    HideTabbar(state, data) {
      state.isTabbarShow = data
    },
    ShowTabbar(state, data) {
      state.isTabbarShow = data
    },
    nowListMUtation(state, data) {
      state.nowList = data
    },
    cinemaListMutation(state, data) {
      state.cinemaList = data
    }
  },
  actions: {
    // 异步处理

    getNowListAction(store) {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=5943850',
        headers: {
          'X-Client-Info':
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"16235800592731328617316353","bc":"440300"}',
          'X-Host': 'mall.film-ticket.film.list',
        },
      })
        .then((res) => {
          // console.log(res.data)
          store.commit('nowListMUtation', res.data.data.films)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // getCinemaListAction(store) {
    //   var id = localStorage.getItem('cityId')
    //   axios({
    //     url: `https://m.maizuo.com/gateway?cityId=${id}&ticketFlag=1&k=4242166`,
    //     headers: {
    //       'X-Client-Info':
    //         '{"a":"3000","ch":"1002","v":"5.0.4","e":"16235800592731328617316353","bc":"430100"}',
    //       'X-Host': 'mall.film-ticket.cinema.list',
    //     },
    //   })
    //     .then((res) => {
    //       // console.log(res.data.data)
    //       // this.datalist = res.data.data.cinemas
    //       store.commit('cinemaListMutation', res.data.data.cinemas)
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    // }
  },
  modules: {
  }
})
