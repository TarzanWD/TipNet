<template>
  <footer class="app-footer" role="contentinfo">
    <h5 class="header-m">
      TIPNET
    </h5>
    <div class="social">
      <a
        class="social__link"
        href="#"
      >
        <i class="fa fa-lg fa-facebook" />
      </a>
    </div>
  </footer>
</template>
<style lang="less" scoped>
@import '../../public/css/config.less';

.app-footer {
  grid-area: footer;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: (@spacer * 3) (@spacer*10);
  background: @black;
  color: @white;
}

.social__link {
  color: @white;

  &:hover {
    color: @background-gray;
  }
}
</style>
