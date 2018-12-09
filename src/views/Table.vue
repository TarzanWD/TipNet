<template>
  <div class="grid">
    <app-header></app-header>
    <main class="content" role="main">
        <hub-header></hub-header>
        <h5 class="ut-heading section-header">
          Tabulka
        </h5>
        <div class="card user-table">
          <div class="card-body">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th></th>
                  <th>
                    Jméno
                  </th>
                  <th>
                    Tipů
                  </th>
                  <th>
                    PT
                  </th>
                  <th>
                    V
                  </th>
                  <th>
                    R
                  </th>
                  <th>
                    S
                  </th>
                  <th>
                    UM
                  </th>
                  <th>
                    <i class="fa fa-chevron-up"></i>
                    Bodů
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="n in 42" :key="n">
                  <td>
                    {{n}}.
                  </td>
                  <td>
                    junior
                  </td>
                  <td>
                    123
                  </td>
                  <td>
                    20
                  </td>
                  <td>
                    43
                  </td>
                  <td>
                    27
                  </td>
                  <td>
                    40
                  </td>
                  <td>
                    0
                  </td>
                  <td>
                    222
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="user-stats">
          <stats-box>
            <template slot="header">
              Legenda
            </template>
            <slot>
              <ul>
                <li>
                  <span class="header-m">PT</span> – Počet přesných tipů výsledku <span class="badge badge--cl">6b</span>
                </li>
                <li>
                  <span class="header-m">V</span> – Počet správných tipů vítěze <span class="badge badge--cl">3b</span>
                </li>
                <li>
                  <span class="header-m">R</span> – Počet správných remízových tipů <span class="badge badge--cl">4b</span>
                </li>
                <li>
                  <span class="header-m">S</span> – Počet bonusů za rozdíl ve skore <span class="badge badge--cl">1b</span>
                </li>
                <li>
                  <span class="header-m">UM</span> – Počet bodů za celkové umístění
                </li>
              </ul>
            </slot>
          </stats-box>
          <stats-box>
            <template slot="header">
              Nej
            </template>
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
export default {
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter,
    'hub-header': HubHeader,
    'stats-box': StatsBox
  }
}
</script>
<style lang="less" scoped>
    @import '../../public/css/config.less';
    .content{
      grid-template-rows: 5rem 3rem auto 3rem;
      grid-template-columns: (@spacer * 4) 7fr 3fr (@spacer * 4);
      grid-template-areas:
        " . hub-header hub-header . "
        " . ut-heading ut-heading ."
        " . user-table user-stats ."
        ". . . .";
      .user-table{
        grid-area: user-table;
        overflow-x: auto;
      }
      .ut-heading{
        grid-area: ut-heading;
      }
      .user-stats{
        grid-area:user-stats;
        ul{
          list-style: none;
          padding-top: @spacer * 2;
          .badge{
            margin-left: @spacer;
          }
        }
      }
    }
    @media (max-width: @xxl) {
      .content{
        grid-template-columns: 5rem 2fr 1fr 5rem;
        grid-template-areas:
          " . hub-header hub-header . "
          " . ut-heading ut-heading . "
          " . user-table user-stats . "
          " . .";
      }
    }
    @media (max-width: @xl) {
      .content{
        grid-template-rows: 5rem 3rem auto auto 3rem;
        grid-template-columns: @spacer*4  1fr @spacer*4;
        grid-template-areas:
          " . hub-header . "
          " . ut-heading . "
          " . user-table . "
          " . user-stats ."
          " . . .";
      }
    }
    @media (max-width: @sm) {
      .content{
        grid-template-rows: 5rem 3rem auto auto 3rem;
        grid-template-columns: 1fr;
        grid-template-areas:
          " hub-header "
          " ut-heading "
          " user-table "
          " user-stats "
          " . ";
      }
    }
</style>
