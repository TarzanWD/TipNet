<template>
  <main class="banner" role="banner">
    <h1 class="banner__title">
      404
    </h1>
    <h4 class="banner__subtitle">
        Ztratili jsme se
    </h4>
    <a class="button" href="./landingpage.html">
        Home
    </a>
  </main>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
    @import '../../public/css/config.less';
    .banner{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column wrap;
        height: 100vh;
        width: 100%;
        background: @background-gray;
        &__title{
            display: inline-block;
            .header-m;
            font-size: ~"calc(10vw + 10rem)";
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-image: url('../../public/img/landing-page-bg2.jpg');
            background-position: center;
            background-size: cover;

        }
        .button{
            margin-top: @spacer * 4;
        }
    }
</style>
