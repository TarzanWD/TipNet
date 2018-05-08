<template>
  <div class="card statsbox">
    <div class="card-body">
      <span class="title">
          <slot name="header"></slot>
      </span>
      <slot></slot>
    </div>
  </div>
</template>
<style lang="less" scoped>
    @import '../../public/css/config.less';
    .statsbox{
        .title{
            display: inline-block;
            width:100%;
            text-align: center;
            .header-m;
        }
    }
</style>
<script>
export default {
}
</script>
