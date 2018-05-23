<template>
  <main class="grid-hub" role="main">
    <navbar class="navbar-light"></navbar>
    <div class="events-area">
      <h2 class="header-m events-area__header">
        Akce
      </h2>
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
      <h2 class="header-m profile-area__header">
        Profil
      </h2>
      <div class="card profile">
        <div class="card-body">
          <img src="../../public/img/unknown.jpg" class="profile__pic">
          <h5 class="header-m profile__header">
            Junior
          </h5>
          <h5 class="header-m profile__caption">
            Umístění
          </h5>
          <div class="profile__trophies">
            <div class="trophy">
              <i class="fa fa-trophy"></i>
              <h6 class="trophy__caption">
                3x
              </h6>
            </div>
            <div class="trophy">
              <i class="fa fa-trophy"></i>
              <h6 class="trophy__caption">
                3x
              </h6>
            </div>
            <div class="trophy">
              <i class="fa fa-trophy"></i>
              <h6 class="trophy__caption">
                3x
              </h6>
            </div>
          </div>
          <h5 class="header-m profile__caption">
            Výsledky z minulých akcí
          </h5>
          <table class="table">
            <tbody>
              <tr>
                <td>
                  Liga mistrů 2016/17
                </td>
                <td>
                  3 z 44
                </td>
              </tr>
              <tr>
                <td>
                  Liga mistrů 2016/17
                </td>
                <td>
                  3 z 44
                </td>
              </tr>
              <tr>
                <td>
                  Liga mistrů 2016/17
                </td>
                <td>
                  3 z 44
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer card-footer--primary">
          <router-link to="/profile">
            Celý profil
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import Navbar from '@/layout/Navbar.vue'
import EventCard from '@/components/EventCard.vue'
export default {
    components: {
        'navbar': Navbar,
        'event': EventCard
    }
}
</script>
<style lang="less" scoped>
  @import '../../public/css/config.less';
  .grid-hub{
    min-height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 5rem 5fr 2fr 5rem;
    grid-template-rows: @spacer * 10 auto;
    grid-template-areas: 
      "navbar navbar navbar navbar"
      ". events-area profile-area .";
    background: @background-gray;
  }
  .events-area{
    grid-area: events-area;
    &__header{
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
    &__header{
      margin-bottom: @spacer * 4;
    }
  }
  .profile{
    margin-top: @spacer * 6;
    .card-body{
      display: flex;
      flex-flow: column wrap;
      align-items: center;
    }
    &__header{
      width:50%;
      text-align: center;
      padding-bottom: @spacer * 2;
      border-bottom: 1px solid @background-gray;
    }
    &__caption{
      padding: @spacer;
      font-size: 0.9rem;
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
    &__trophies{
      display: flex;
      width: 100%;
      flex-flow: row nowrap;
      justify-content: space-evenly;
      padding: @spacer*2 0;
      .trophy{
        i{
          font-size: 1.7rem;
          display: block;
        }
        &__caption{
          padding: @spacer 0;
          text-align: center;
        }
        &:first-child{
          i{
            color: @golden;
          }
        }
        &:nth-child(2){
          i{
            color: @silver;
          }
        }
        &:nth-child(3){
          i{
            color: @bronze;
          }
        }
      }
    }
  }
</style>

