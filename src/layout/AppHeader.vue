<template>
<header
  class="poster"
  role="banner"
>
  <navbar class="navbar-dark" />
</header>
</template>
<script>
import Navbar from '@/layout/Navbar.vue'
export default {
  components: {
    'navbar': Navbar
  }
}
</script>
<style lang="less" scoped>
@import '../../public/css/config.less';
.poster {
  grid-area: poster;
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  background-image: url('../../public/img/cl-poster.jpg');
  background-size: cover;
  background-position: center bottom;
  z-index: 0;
}
</style>
