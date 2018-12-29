<template>
  <div class="card statsbox">
    <div class="card-body">
      <span class="statsbox__title">
        <slot name="header" />
      </span>
      <h3 v-if="withTitle" class="statsbox__value">
        <slot />
      </h3>
      <slot v-else />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    withTitle: {
      type: Boolean,
      default: () => true
    }
  }
}
</script>


<style lang="less" scoped>
@import '../../../public/css/config.less';

.statsbox {
  width: 100%;
}

.statsbox__title {
  .header-m;
  display: inline-block;
  width:100%;
  text-align: center;
}

.statsbox__value {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: @spacer * 8;
  height: @spacer * 16;
}
</style>
