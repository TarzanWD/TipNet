<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style lang="less" scoped>
  @import '../public/css/config.less';
  .navbar{
    background: transparent;
    position: relative;
  }
  #app{
    font-family: @font;
    background: @background-gray-darker;
  }
</style>
