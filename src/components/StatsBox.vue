<template>
  <div class="card statsbox">
    <div class="card-body">
      <span class="title">
          <slot name="header"></slot>
      </span>
      <h4 class="points">
          <slot name="points"></slot>
      </h4>
      <div class="teams">
          <slot name="teams"></slot>
      </div>
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
        .points{
            display: flex;
            justify-content: center;
            align-items: center;
            height: @spacer * 19;
            font-size: @spacer * 8;
        }
    }
</style>
