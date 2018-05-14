<template>
  <div class="grid-hub">
    <div class="events">
      <h2 class="events__header">
        Akce
      </h2>
      <div class="event-list">
        <div class="event card">
          <img src="../../public/img/cl-event-logo.jpg" alt="event-img" class="event__preview">
          <div class="event__content">
            <h5 class="event__header">
              Champions league
            </h5>
            <button class="button button--cl btn-block">
              Vstoupit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppHeader from '@/layout/AppHeader.vue'
export default {
    components: {
        'app-header': AppHeader
    }
}
</script>
<style lang="less" scoped>
  @import '../../public/css/config.less';
  .grid-hub{
    min-height: 100vh;
    width: 100%;
    display: grid;
    padding: @spacer * 10 0;
    grid-template-columns: 1fr 16fr 8fr 1fr;
    grid-template-rows: auto;
    grid-column-gap: 25px;
    grid-template-areas: 
      ". events-area you-area .";
    background: @background-gray-darker;
  }
  .events{
    grid-area: events-area;
    &__header{
      .header-m;
    }
    .event-list{
      display: flex;
      flex-flow: wrap row;
      margin-top: @spacer * 8;
    }
  }
  .event{
    width: 48%;
    display: flex;
    flex-flow: nowrap row;
    justify-content: flex-start;
    align-items: flex-start;
    &__preview{
      width: 200px;
      border-radius: 3px;
      margin: @spacer * -3 @spacer * 2 @spacer * 2 @spacer * 2;
      box-shadow: 0 @spacer @spacer @background-gray;
    }
    &__content{
      padding: @spacer * 3 @spacer * 2;
      width: auto;
    }
    &__header{
      .header-m;
    }
  }
</style>

