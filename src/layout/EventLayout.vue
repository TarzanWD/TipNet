<template>
  <div class="grid">
    <app-header />
    <main class="content" role="main">
      <hub-header />
      <slot />
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/layout/AppHeader.vue'
import HubHeader from '@/layout/HubHeader.vue'
import AppFooter from '@/layout/AppFooter.vue'
export default {
  components: {
    'app-header': AppHeader,
    'hub-header': HubHeader,
    'app-footer': AppFooter
  }
}
</script>

<style lang="less" scoped>
@import '../../public/css/config.less';
.slot {
  grid-area: slot;
}

.hub-header {
  grid-area: hub-header;
}

.grid {
  display: grid;
  grid-template-rows: (@spacer*50) auto (@spacer*10);
  grid-template-columns: (@spacer*5) auto (@spacer*5);
  width: 100%;
  grid-template-areas:
    "poster poster poster"
    ". content ."
    "footer footer footer";
}

.content {
  grid-area: content;
  position: relative;
  display: flex;
  flex-flow: nowrap column;
  background: @background-gray;
  margin: 0 @spacer * 4;
  margin-top: @spacer * -10;
  padding: 0 @spacer * 5;
  padding-bottom: @spacer * 5;
}

@media (max-width: @md) {
  .grid {
    grid-template-rows: 3.5rem auto (@spacer*10);
    grid-template-columns: 0 auto 0;
  }

  .content {
    margin: 0;
    padding: 0 @spacer * 3;
  }
}
</style>
