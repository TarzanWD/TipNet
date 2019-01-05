<template>
  <header class="room-intro">
    <h5 class="room-intro__heading">
      Benefit CZ
    </h5>
    <h1 class="room-intro__heading">
      Champion's League 2018/19
    </h1>
    <h6 class="room-intro__heading">
      20.12.2018 - 15.7.2019
    </h6>
  </header>
</template>

<style lang="less" scoped>
@import '../../../public/css/config.less';

.room-intro {
  background: linear-gradient(-45deg, var(--cl), var(--cl-lighten));
  padding: @spacer * 13 0;
}

.room-intro__heading {
  .header-m;
  text-align: center;
  color: @white;
}
</style>


