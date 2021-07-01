<template>
  <div>
    <ul>
      <router-link to="/film/nowplaying" tag="li" active-class="myactive"
        >正在热映</router-link
      >
      <router-link to="/film/comingsoon" tag="li" active-class="myactive"
        >即将上演</router-link
      >
    </ul>
  </div>
</template>
<style lang="scss" scoped>
ul {
  display: flex;
  li {
    flex: 1;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: rgb(224, 224, 224);
  }
}
.myactive {
  color: #ff5f16;
  border-bottom: 2px solid #ff5f16;
}
.fixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 40px;
  background: white;
}
</style>