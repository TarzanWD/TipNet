<template>
  <button
    type="button"
    :class="{
      'button': true,
      'button--primary': primary,
      'button--cl': cl,
      'button--link': link,
      'button--outline-cl': outline && cl
    }"
    @click="click"
  >
    <slot />
  </button>
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
    },
    link: {
      type: Boolean,
      default: () => false
    },
    outline: {
      type: Boolean,
      default: () => false
    },
    click: {
      type: Function,
      default: () => () => null
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../public/css/config.less';

.button {
  .header-m;
  font-size: 0.75rem;
  padding: @spacer * 1.25 @spacer * 1.75;
  margin: 0 @spacer;
  border: 1px solid @white;
  border-radius: 25px;
  cursor: pointer;
  background: @background-gray-darker;
  color: @black;
}

.button--cl {
  color: @white;
  background: var(--cl);

  &:hover {
    background: lighten(#0C2F54, 5%);
  }
}

.button--link {
  background: transparent;
  font-size: 0.95rem;
  border: 0;
}

.button--primary {
  background: #d67500;
  color: @white;

  &:hover {
    background:lighten(#d67500, 10%);
  }
}

.button--outline-cl {
  background: transparent;
  color: var(--cl-lighten);
  border-color: var(--cl-lighten);

  &:hover {
    color: @white;
  }
}
</style>
