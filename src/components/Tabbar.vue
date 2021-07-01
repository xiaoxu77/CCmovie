<template>
  <nav>
    <ul>
      <router-link to="/film" tag="li" active-class="myactive">
        <i class="iconfont icon-dianying sp1"></i>电影
      </router-link>
      <router-link to="/cinema" tag="li" active-class="myactive"
        ><i class="iconfont icon-dianyingdianshi sp1"></i>影院</router-link
      >
      <router-link to="/center" tag="li" active-class="myactive"
        ><i class="iconfont icon-gerenzhongxin sp1"></i>我的</router-link
      >
    </ul>
  </nav>
</template>
<style lang="scss" scoped>
.myactive {
  color: #ff5f16;
}
nav {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  background: rgb(224, 224, 224);
  ul {
    display: flex;
    li {
      position: relative;
      .sp1 {
        position: absolute;
        right: 45%;
        top: -20px;
      }
      flex: 1;
      line-height: 70px;
      text-align: center;
    }
  }
}
</style>