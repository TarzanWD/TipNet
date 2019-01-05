<template>
  <div>
    <div class="card-body" v-if="!childrenOnly">
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

