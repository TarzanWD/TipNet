<template>
  <div class="grid">
    <app-header></app-header>
    <main class="content" role="main">
        <hub-header></hub-header>
        <h5 class="section-header fn-heading">
            Filter
        </h5>
        <div class="card filter-nav">
            <filter-nav>
            </filter-nav>
        </div>
        <div class="card match-table">
            <div class="card-body">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th class="date">
                                Datum
                            </th>
                            <th colspan="3"></th>
                            <th>
                                Tip
                            </th>
                            <th>
                                <span class="longer">
                                    Výsledek
                                </span>
                                <span class="shorter">
                                    Výs.
                                </span>
                            </th>
                            <th>
                                <span class="longer">
                                    Body
                                </span>
                                <span class="shorter">
                                    b.
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(match) in rendered" :key="match.id" :item="match">
                            <td class="date">
                                {{match.date | formatDate}}
                            </td>
                            <td class="team">
                                {{match.homeTeamName}}
                                <img src="http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/FC-Barcelona-icon.png" alt="fc-barcelona-badge" class="team-badge">
                            </td>
                            <td class="separator">
                                vs.
                            </td>
                            <td class="team">
                                <img src="http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/Real-Madrid-icon.png" alt="real-madrid-badge" class="team-badge">
                                {{match.awayTeamName}}
                            </td>
                            <td class="tip">
                                -
                            </td>
                            <td class="result">
                                {{match.result.goalsHomeTeam}}&nbsp;:&nbsp;{{match.result.goalsAwayTeam}}
                            </td>
                            <td class="points">
                                0
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button class="btn btn-lg btn-block btn-outline-secondary more more--cl" @click="renderMoreFixtures()">Více</button>
            </div>
        </div>
        <div class="finalists">
            <stats-box>
                <template slot="header">
                    Tipy na vítěze
                </template>
                <slot>
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
                </slot>
            </stats-box>
        </div>
    </main>
    <app-footer></app-footer>
  </div>
</template>
<script>
import AppHeader from '@/layout/AppHeader.vue'
import AppFooter from '@/layout/AppFooter.vue'
import HubHeader from '@/layout/HubHeader.vue'
import StatsBox from '@/components/StatsBox.vue'
import FilterNav from '@/components/matches/FilterNav.vue'
//
export default {
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter,
    'hub-header': HubHeader,
    'stats-box': StatsBox,
    'filter-nav': FilterNav
  },
  methods: {
    renderMoreFixtures () {
      this.$store.commit('renderFixtures')
    }
  },
  computed: {
    fixtures () {
      return this.$store.state.fixtures
    },
    rendered () {
      return this.$store.state.renderedFixtures
    }
  },
  created () {
    this.$store.dispatch('getFixtures')
  },
  filters: {
    formatDate (value) {
      let d = new Date(value)
      let date = d.getDate()
      let month = d.getMonth()
      let year = d.getFullYear()
      let hour = d.getHours()
      let minutes = d.getMinutes() === 0 ? '00' : d.getMinutes()
      return `${date}.${month}.${year} ${hour}:${minutes}`
    }
  }
}
</script>
<style lang="less" scoped>
    @import '../../public/css/config.less';
    .content{
        grid-template-rows: 5rem 3rem 5rem auto 3rem;
        grid-template-columns: (@spacer * 4) 7fr 3fr (@spacer * 4);
        grid-template-areas:
            ". hub-header hub-header ."
            ". fn-heading fn-heading ."
            ". filter-nav filter-nav ."
            ". match-table finalists ."
            ". . . .";
        .fn-heading{
            grid-area: fn-heading;
        }
        .match-table{
            grid-area: match-table;
            overflow-x: auto;
            white-space: nowrap;
            .table td:nth-child(7n + 4){
               text-align: left;
            }
        }
        .finalists{
            grid-area: finalists;
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
        }
        .filter-nav{
            grid-area: filter-nav;
        }
    }
    @media (max-width: @xxl) {
        .content{
            grid-template-rows: 5rem 3rem 5rem auto auto 3rem;
            grid-template-columns: (@spacer * 4) 1fr 1fr (@spacer * 4);
            grid-template-areas:
                " . hub-header hub-header . "
                " . fn-heading fn-heading . "
                " . filter-nav filter-nav . "
                " . match-table match-table ."
                " . finalists . ."
                " . . . .";
            .finalists{
                .team-badge{
                    max-height: @spacer * 4;
                    margin: @spacer;
                }
            }
        }
    }
    @media (max-width: @lg) {
        .content{
            grid-template-areas:
                " . hub-header hub-header . "
                " . fn-heading fn-heading . "
                " . filter-nav filter-nav . "
                " . match-table match-table . "
                " . finalists finalists . "
                " . . . . ";
        }
        .match-table .group{
            display: none;
        }
    }
    @media (max-width: @md) {
        .content{
            grid-template-rows: 3rem 3rem 5rem auto auto 3rem;
        }
    }
    @media (max-width: @sm) {
        .content{
            grid-template-columns: @spacer 1fr 1fr @spacer;
        }
        .finalists {
            li{
                padding: @spacer * 2 0;
            }
            .team-badge{
                display: none;
            }
        }
    }
</style>
