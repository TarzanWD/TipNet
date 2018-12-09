<template>
  <div class="event card">
    <img src="../../public/img/cl-event-logo.jpg" alt="event-img" class="event__preview">
    <div class="event__content">
      <h5 class="event__header">
        Champions league 2018/19
      </h5>
      <time class="event__time">
        22.10.2017 - 18.6.2018
      </time>
      <router-link to="/event" class="button button--cl btn-block" tag="button">
        Vstoupit
      </router-link>
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style lang="less" scoped>
@import '../../public/css/config.less';
.event{
    width: 47%;
    display: flex;
    flex-flow: nowrap row;
    justify-content: flex-start;
    align-items: flex-start;
    margin: @spacer * 2;
    padding-right: @spacer *2;
    &:nth-child(2n - 1){
      margin-left: 0;
    }
    &__preview{
      height: 250px;
      border-radius: 3px;
      margin: @spacer * -3 @spacer * 2 @spacer * 2 @spacer * 2;
      box-shadow: 0 @spacer @spacer @background-gray;
    }
    &__content{
      display: flex;
      flex-flow: nowrap column;
      justify-content: space-around;
      padding: @spacer * 3 @spacer * 2;
      width: 100%;
      height: 100%;
    }
    &__header{
      .header-m;
    }
    &__time{
      padding: @spacer 0;
    }
}
</style>
