<template>
    <nav class="navbar navbar-expand" id="app-navbar">
        <router-link class="navbar-brand" to="/">TIPNET</router-link>
        <div class="collapse navbar-collapse justify-content-end">
            <ul class="navbar-nav">
                <li class="nav-item nickname">
                    <a class="nav-link" href="#">junior</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="fa fa-cog fa-lg"></i>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
  
}
</script>

<style lang="less" scoped>
    @import '../../public/css/config.less';
    .navbar{
      grid-area: navbar;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      .navbar-brand{
        .header-m;
      }
      .nickname{
        padding: 0 @spacer * 2;
      }
    }
    @media (max-width: @md) {
      .collapse ul{
        display: none;
      }
    }
</style>
