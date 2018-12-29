<template>
  <footer
    :class="{
      'card-footer': true,
      'card-footer--primary': primary,
      'card-footer--cl': cl
    }"
  >
    <slot />
  </footer>
</template>

<script>
export default {
  props: {
    primary: {
      type: Boolean,
      default: () => false
    },
    cl: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../public/css/config.less';
.card-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &--primary {
    background:var(--theme);

    &:hover {
      background: var(--theme-lighten);
    }
  }

  &--cl {
    background:var(--cl);

    &:hover {
      background: var(--cl-lighten);
    }
  }

  & > a {
    .header-m;
    width: 100%;
    text-align: center;
    color: @background-gray;
    text-transform: uppercase;
    text-decoration: none;
  }
}
</style>
