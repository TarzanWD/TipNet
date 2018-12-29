<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="less" scoped>
@import '../../../public/css/config.less';
.card {
  margin: @spacer * 0.5 @spacer * 0.5 0 @spacer * 0.5;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}
</style>
