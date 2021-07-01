<template>
  <div>
    <tabbar v-show="isTabbarShow"></tabbar>
    <router-view></router-view>
  </div>
</template>
<script>
// 引入
// import navbar from './components/NavBar'
// import sidebar from './components/SideBar'
// import axios from 'axios'
import tabbar from '@/components/Tabbar'
import { mapState } from 'vuex'   //ES6导出方式
// import bus from '@/bus'

// 全局注册方式
// import Vue from "vue";
// Vue.component("navbar", navbar);
// Vue.component("sidebar", sidebar);
export default {
  data() {
    return {
      // isShow: true,
    }
  },
  // beforeMount() {
  //   bus.$on('tabbar', (data) => {
  //     // console.log("tongzhimaizuo",data);
  //     this.isShow = data
  //   })
  // },
  methods: {},
  components: {
    // 局部组件注册
    // navbar,
    // sidebar,
    tabbar,
  },
  // computed: {
  //   isShow() {
  //     return this.$store.state.isTabbarShow
  //   },
  // },
  // computed:mapState(['isTabbarShow'])
  computed:{
    ...mapState(['isTabbarShow'])   //ES6展开合并运算符
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
}
ul {
  li {
    list-style: none;
  }
}
</style>