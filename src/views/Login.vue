<template>
  <div>
    <ul>
      <li>
        <img src="../assets/logo.png" alt="图片呢" />
      </li>
      <li>
        <input
          type="text"
          placeholder="账号"
          style="
            border: none;
            font-size: 18px;
            border-bottom: 2px solid rgb(224, 224, 224);
          "
        />
      </li>
      <li>
        <input
          type="text"
          placeholder="密码"
          style="
            border: none;
            font-size: 18px;
            border-bottom: 2px solid rgb(224, 224, 224);
          "
        />
      </li>
      <li>
        <input
          type="button"
          value="登录"
          style="
            background-color: #ff5f16;
            border: none;
            font-size: 20px;
            color: rgb(224, 224, 224);
            border-radius: 5px;
          "
        />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  beforeMount() {
    this.$store.commit('HideTabbar', false)
  },
  beforeDestroy() {
    this.$store.commit('ShowTabbar', true)
  },
}
</script>
<style lang="scss" scoped>
ul {
  margin-top: 150px;
  li {
    img {
      width: 60px;
    }
    input {
      font-size: 70%;
      outline: none;
      width: 70%;
      height: 50px;
    }
    height: 80px;
    text-align: center;
    // line-height: 80px;
  }
}
</style>