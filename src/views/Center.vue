<template>
  <div>
    <div class="login">
      <div class="logins">
        <div @click="login()" class="photo">
          <img src="../assets/logo.png" alt="图片呢" />
        </div>
        <span @click="login()">立即登录</span>
      </div>
    </div>
    <div>
      <ul>
        <li @click="login()"><i class="iconfont icon-dingdan"></i>订单</li>
        <li @click="login()"><i class="iconfont icon-yue"></i>余额</li>
        <li @click="login()"><i class="iconfont icon-shezhi"></i>设置</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    login() {
      this.$router.push('login')
    },
  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    if (true) {
      next()
    } else {
      next('/login')
    }
  },
}
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 10rem;
  background: #ff5f16;
}
.logins {
  img {
    position: relative;
    top: 15px;
    left: 11px;
    width: 60px;
  }
  clear: both;
  span {
    color: white;
    height: 80px;
    line-height: 80px;
    position: relative;
    top: 30px;
    left: 45px;
  }
}
.photo {
  position: relative;
  top: 30px;
  left: 30px;
  float: left;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  border: 3px solid #ff5100;
  // background: gray;
  // filter: blur(1px);
}
ul {
  li {
    i {
      font-size: 20px;
      margin-right: 10px;
    }
    font-size: 20px;
    padding-left: 20px;
    height: 70px;
    line-height: 70px;
    border-bottom: 1px solid rgb(224, 224, 224);
    background: white;
  }
}
</style>