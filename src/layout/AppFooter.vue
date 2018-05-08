<template>
  <footer class="app-footer" role="contentinfo">
      <h5 class="brand">
        TIPNET
      </h5>
      <div class="social">
          <a href="#">
              <i class="fa fa-lg fa-facebook"></i>
          </a>
      </div>
  </footer>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
@import '../../public/css/config.less';
    .app-footer{
        grid-area: footer;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: (@spacer * 4) (@spacer*10);
        background: @black;
        color: @white;
        .brand{
            .header-m;
        }
        .social{
            a{
                color: @white;
                &:hover{
                    color: @background-gray;
                }
            }
        }
    }
</style>
