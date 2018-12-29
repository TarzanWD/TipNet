<template>
  <main class="grid-profile">
      <navbar class="navbar-light"></navbar>
      <div class="profile-name">
        <img src="../../public/img/unknown.jpg" alt="profile-pic" class="profile-name__pic">
        <div class="info">
            <h5 class="header-m info__caption">
                Profil
            </h5>
            <h2 class="header-m info__header">
                Junior
            </h2>
        </div>
      </div>
      <div class="events-history">
        <h5 class="header-m">
            Stats
        </h5>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>
                        Název akce
                    </th>
                    <th>
                        Pořadí
                    </th>
                    <th>
                        Detail
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="event in 3" :key="event">
                    <td>
                        Champions League 2017/2018
                    </td>
                    <td>
                        3 z 25
                    </td>
                    <td>
                        <button class="button button--primary">
                            Detail
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
      <div class="events-stats">
          <h5 class="header-m">
              Detail Akce
          </h5>
          <div class="stats-section">
            <ul class="stats">
                <li>
                    Pořadí v žebříčku: <span class="badge badge--primary">3</span>
                </li>
                <li>
                    Celkový počet bodů: <span class="badge badge--primary">262</span>
                </li>
                <li>
                    Natipovaných zápasů: <span class="badge badge--primary">124</span>
                </li>
                <li>
                    Nenatipované zápasy: <span class="badge badge--primary">1</span>
                </li>
            </ul>
            <ul class="stats">
                <li>
                    Přesný tip: <span class="badge badge--primary">14x</span>
                </li>
                <li>
                    Správný tip vítěze: <span class="badge badge--primary">53x</span>
                </li>
                <li>
                    Správný remízový tip: <span class="badge badge--primary">3x</span>
                </li>
                <li>
                    Bonus za rozdíl ve skóre: <span class="badge badge--primary">7x</span>
                </li>
            </ul>
          </div>
        <ul class="teams">
            <li>
                <span>
                    <img src="http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/FC-Barcelona-icon.png" alt="barcelona-badge" class="team-badge">
                    FC Barcelona
                </span>
                <i class="fa fa-times fa-lg"></i>
            </li>
            <li>
                <span>
                    <img src="http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/Real-Madrid-icon.png" alt="barcelona-badge" class="team-badge">
                    Real Madrid
                </span>
                <i class="fa fa-check fa-lg"></i>
            </li>
            <li>
                <span>
                    <img src="http://icons.iconarchive.com/icons/giannis-zographos/french-football-club/256/Paris-Saint-Germain-icon.png" alt="barcelona-badge" class="team-badge">
                    Paris Saint Germain
                </span>
                <i class="fa fa-question fa-lg"></i>
            </li>
            <li>
                <span>
                    <img src="https://i.pinimg.com/originals/e1/a7/a1/e1a7a13125f91bf8415667eea829e44e.png" alt="barcelona-badge" class="team-badge">
                    Bayern Munchen
                </span>
                <i class="fa fa-question fa-lg"></i>
            </li>
        </ul>
        <button class="btn btn-lg btn-block btn-outline-secondary more more--primary">
            Přejít na akci
        </button>
      </div>
  </main>
</template>
<script>
import Navbar from '@/layout/Navbar.vue'
import StatsBox from '@/components/StatsBox'
export default {
  components: {
    'navbar': Navbar,
    'stats-box': StatsBox
  }
}
</script>
<style lang="less" scoped>
    @import '../../public/css/config.less';
    .grid-profile{
        min-height: 100vh;
        width: 100%;
        display: grid;
        grid-template-columns: 4rem 3fr 2fr 4rem;
        grid-template-rows: @spacer * 10 @spacer * 20 auto;
        grid-column-gap: @spacer * 2;
        grid-template-areas:
        "navbar navbar navbar navbar"
        ". profile-name events-stats ."
        ". events-history events-stats .";
        background: @background-gray;
    }
    .profile-name{
        grid-area: profile-name;
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-start;
        &__pic{
            max-width: 15 * @spacer;
            border-radius: 100%;
            border: 3px solid @background-gray-darker;
        }
        .info{
            padding-top: @spacer * 2;
            margin-left: @spacer * 4;
            &__caption{
                color: var(--theme);
            }
        }
    }
    .stats-section{
        display: flex;
        flex-flow: row wrap;
        margin-top: @spacer * 2;
        justify-content: space-between;
        .stats{
            list-style: none;
            li{
                .header-m;
                padding: @spacer 0;
            }
        }
    }
    .events-history{
        grid-area: events-history;
    }
    .events-stats{
        grid-area: events-stats;
    }
    .teams{
        list-style: none;
        padding: @spacer;
        .header-m;
        li{
            display: flex;
            justify-content: space-between;
            align-items: center;
            &:first-child{
                border-bottom: 1px solid @background-gray;
            }
        }
        .team-badge{
            max-height: @spacer * 6;
            margin: @spacer * 2;
        }
        i{
            &.fa-times{
                color: red;
            }
            &.fa-check{
                color: green;
            }
            &.fa-question{
                color: orange;
            }
        }
    }
</style>
