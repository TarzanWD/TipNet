<template>
  <div class="grid">
    <app-header></app-header>
    <div class="content">
        <hub-header></hub-header>
        <h5 class="section-header fn-heading">
            Filter
        </h5>
        <div class="card filter-nav">
            <nav class="nav">
                
            </nav>
        </div>
        <div class="card match-table">
            <div class="card-body">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>
                                Datum
                            </th>
                            <th>
                                Skupina
                            </th>
                            <th colspan="3"></th>
                            <th>
                                Tip
                            </th>
                            <th>
                                Výsledek
                            </th>
                            <th>
                                Body
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="n in 12">
                            <td class="date">
                                20. 04. 2019
                            </td>
                            <td class="group">
                                A
                            </td>
                            <td class="team">
                                FC Barcelona
                                <img src="http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/FC-Barcelona-icon.png" alt="fc-barcelona-badge" class="team-badge">
                            </td>
                            <td class="separator">
                                vs.
                            </td>
                            <td class="team">
                                <img src="http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/Real-Madrid-icon.png" alt="real-madrid-badge" class="team-badge">
                                Real Madrid
                            </td>
                            <td class="tip">
                                3 : 0
                            </td>
                            <td class="result">
                                2 : 2
                            </td>
                            <td class="points">
                                0
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="finalists">
            <stats-box>
                <template slot="header">
                    Tipy na vítěze
                </template>
                <template slot="teams">
                    <ul class="teams">
                        <li>
                            FC Barcelona
                        </li>
                        <li>
                            Real Madrid
                        </li>
                        <li>
                            Paris Saint Germain
                        </li>
                        <li>
                            Bayern Munich
                        </li>
                    </ul> 
                </template>
            </stats-box>
        </div>
    </div>
  </div>
</template>
<script>
import AppHeader from '@/components/layout/AppHeader.vue'
import HubHeader from '@/components/HubHeader.vue'
import StatsBox from '@/components/StatsBox.vue'
export default {
  components: {
      'app-header' : AppHeader,
      'hub-header' : HubHeader,
      'stats-box'  : StatsBox
  }
}
</script>
<style lang="less" scoped>
    @import '../../public/css/config.less';
    .content{
        grid-template-rows: 5rem 3rem 5rem auto 3rem;
        grid-template-columns: (@spacer * 4) 7fr 3fr (@spacer * 4);
        grid-template-areas: 
            ". hub-header hub-header."
            ". fn-heading fn-heading ."
            ". filter-nav filter-nav ."
            ". match-table finalists ."
            ". . . .";
        .fn-heading{
            grid-area: fn-heading;
        }
        .match-table{
            grid-area: match-table;
        }
        .finalists{
            grid-area: finalists;
        }
        .filter-nav{
            grid-area: filter-nav;
        }
    }
</style>
