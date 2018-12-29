<template>
  <img
    :src="path"
    :alt="alt"
    :class="{
      'team-badge': true,
      'team-badge--sm': size === 'sm',
      'team-badge--md': size === 'md',
      'team-badge--lg': size === 'lg'
    }"
  >
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: () => 'sm'
    },
    alt: {
      type: String,
      default: () => 'teams badge'
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../public/css/config.less';
.team-badge {
  &--sm {
    height: @spacer * 3;
    width: @spacer * 3;
  }

  &--md {
    height: @spacer * 5;
    width: @spacer * 5;
  }

  &--lg {
    height: @spacer * 7;
    width: @spacer * 7;
  }
}
</style>
