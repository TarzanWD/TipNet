<template>
  <div>
    <div class="card" v-if="!childrenOnly">
      <slot />
    </div>
    <slot v-else />
  </div>
</template>

<script>
export default {
  props: {
    childrenOnly: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>


<style lang="less" scoped>
@import '../../../public/css/config.less';
.card {
  margin: @spacer * 0.5 @spacer * 0.5 0 @spacer * 0.5;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}
</style>
