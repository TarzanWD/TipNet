<template>
  <div class="section-header__area">
    <h5 class="section-header">
      <slot />
    </h5>
    <div>
      <slot name="special" />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../../../public/css/config.less';
.section-header {
  .header-m;
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-top: @spacer * 2;
  margin-bottom: @spacer;
  margin-left: @spacer * 3;
}

.section-header__area {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
</style>
