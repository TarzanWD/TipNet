<template>
<div class="poster">
  <nav class="navbar navbar-dark navbar-expand">
      <a class="navbar-brand" href="#">TIPNET</a>
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
</div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
  @import '../../../public/css/config.less';
    .navbar{
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
    .poster{
      grid-area: poster;
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      background-image: url('../../../public/img/cl-poster.jpg');
      background-size: cover;
      background-position: center bottom;
    }
</style>
