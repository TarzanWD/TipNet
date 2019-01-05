<template>
  <textarea
    class="textarea"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: () => ''
    }
  }
}
</script>


<style lang="less" scoped>
@import '../../../public/css/config.less';

.textarea {
  width: 100%;
  padding: @spacer @spacer * 2;
  border: 0;
  transition: all .5s;
  resize: none;
  border-radius: 1rem;
  min-height: 8rem;
}
</style>
