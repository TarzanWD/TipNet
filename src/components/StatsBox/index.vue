<template>
  <div :class="{
    'card': true,
    'statsbox': true,
    'statsbox--transparent': transparent,
    'statsbox--info': info
  }">
    <div class="card-body">
      <span class="statsbox__title">
        <slot name="header" />
      </span>
      <h3 v-if="!withoutTitle" class="statsbox__value">
        <slot />
      </h3>
      <slot v-else />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    withoutTitle: {
      type: Boolean,
      default: () => false
    },
    transparent: {
      type: Boolean,
      default: () => false
    },
    info: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>


<style lang="less" scoped>
@import '../../../public/css/config.less';

.statsbox {
  width: 100%;
}

.statsbox--transparent {
  background: transparent;
  border: 0;
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

.statsbox--info {
  background: #0e1924;
  color: @white;
  width: 20rem;
  border-color: var(--cl-lighten);
  border-radius: 1rem;
}
</style>
