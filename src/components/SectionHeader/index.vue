<template>
  <div class="section-header__area">
    <h5
      :class="{
        'section-header': true,
        'section-header--flat-left': flatLeft,
        'section-header--center': center
      }"
    >
      <slot />
    </h5>
    <div>
      <slot name="special" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    flatLeft: {
      type: Boolean,
      default: () => false
    },
    center: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>


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
  color: @black;
}

.section-header--flat-left {
  margin-left: 0;
}

.section-header--center {
  justify-content: center;
  width: 100%;
}

.section-header__area {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
</style>
