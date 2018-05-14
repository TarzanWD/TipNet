<template>
  <div class="grid-hub">
    <div class="events-area">
      <h2 class="header-m events-area__main-heading">
        Akce
      </h2>
      <h5 class="header-m">
        Otevřené
      </h5>
      <div class="event-list">
        <event></event>
        <event></event>
      </div>
      <h5 class="header-m">
        Již uzavřené
      </h5>
      <div class="event-list">
        <event></event>
      </div>
    </div>
    <div class="profile-area">
      <h2 class="header-m">
        Profil
      </h2>
      <div class="card profile">
        <div class="card-body">
          <h5 class="header-m">
            Junior
          </h5>
          <img src="../../public/img/unknown.jpg" class="profile__pic">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppHeader from '@/layout/AppHeader.vue'
import Event from '@/components/hub/Event.vue'
export default {
    components: {
        'app-header': AppHeader,
        'event': Event
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
    grid-template-areas: 
      ". events-area profile-area .";
    background: @background-gray-darker;
  }
  .events-area{
    grid-area: events-area;
    &__main-heading{
      margin-bottom: @spacer * 4;
    }
    .event-list{
      display: flex;
      flex-flow: wrap row;
      margin: @spacer * 4 0;
    }
  }
  .profile-area{
    grid-area: profile-area;
  }
  .profile{
    margin-top: @spacer * 6;
    .card-body{
      display: flex;
      flex-flow: column wrap;
      align-items: center;
    }
    &__pic{
      order: -1;
      max-width: @spacer * 14;
      max-height: @spacer * 14;
      border-radius: 100%;
      margin-top: -@spacer * 6;
      margin-bottom: @spacer * 2;
      border: 5px solid @white;
    }
  }
</style>

