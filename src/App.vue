<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">商品列表</router-link> |
      <router-link to="/car">购物车</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  beforeCreate () {
    // 进入应用后，获取用户的购物车数据
    this.$store.dispatch('car/initialCarGoods')
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
