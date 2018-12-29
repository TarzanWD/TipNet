<template>
  <div
    class="button-group"
    role="group"
  >
    <slot />
  </div>
</template>

<style lang="less" scoped>
@import '../../../public/css/config.less';
.button-group {
  margin: 0 @spacer;
}
.button-group button {
  border-radius: 0;
  margin-left: 0;
  margin-right: 0;

  &:first-child {
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  }

  &:last-child {
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }
}
</style>
