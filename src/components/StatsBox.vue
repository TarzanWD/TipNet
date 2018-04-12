<template>
  <div class="card from-last-day">
    <div class="card-body">
      <span class="title">
          <slot name="header"></slot>
      </span>
      <h4 class="points">
          <slot></slot>
      </h4>
    </div>
  </div>
</template>
<style lang="less" scoped>
    @import '../../public/css/config.less';
    .from-last-day{
        margin-top: @spacer;
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

