<template>
    <div class="grid">
        <app-header></app-header>
        <main class="content" role="main">
            <hub-header></hub-header>
            <h5 class="section-header lpc-heading">
                Poslední odehrané
            </h5>
            <div class="card-list last-played">
                <match-card :played="false"></match-card>
                <match-card :played="false"></match-card>
                <match-card :played="false"></match-card>
                <match-card :played="false"></match-card>
                <button class="btn btn-outline-secondary btn-lg btn-block more"> Více </button>
            </div>
            <stats-box class="points-last-day">
                <template slot="header">
                    Poslední den
                </template>
                <slot>
                    <h3>
                        4b.
                    </h3>
                </slot>
            </stats-box>
            <stats-box class="position">
                <template slot="header">
                    Pozice
                </template>
                <slot>
                    <h3>
                        19.
                    </h3>
                </slot>
            </stats-box>
            <div class="user-table">
                <user-table></user-table>
            </div>
            <h5 class="section-header nuc-heading">
                Následující zápasy
            </h5>
            <div class="card-list next-up">
                <match-card :played="true"></match-card>
                <match-card :played="true"></match-card>
                <match-card :played="true"></match-card>
                <match-card :played="true"></match-card>
                <button class="btn btn-outline-secondary btn-lg btn-block more"> Více </button>
            </div>
            <discussion :fullDiscussion="false"></discussion>
        </main>
        <app-footer>
        </app-footer>
    </div>
</template>
<script>
import AppHeader from '@/layout/AppHeader.vue'
import HubHeader from '@/layout/HubHeader.vue'
import AppFooter from '@/layout/AppFooter.vue'
import MatchCard from '@/components/MatchCard.vue'
import UserTable from '@/components/UserTable.vue'
import StatsBox from '@/components/StatsBox.vue'
import Discussion from '@/components/DiscussCard.vue'
//
import appService from '@/app.service'
export default {
  components: {
    'app-header': AppHeader,
    'hub-header': HubHeader,
    'match-card': MatchCard,
    'user-table': UserTable,
    'stats-box': StatsBox,
    'discussion': Discussion,
    'app-footer': AppFooter
  }
}
</script>
<style lang="less">
    @import '../../public/css/config.less';
    .content{
        grid-template-rows: 5rem 3rem auto auto 3rem auto auto auto 3rem;
        grid-template-columns: (@spacer * 4) 2fr 2fr 1fr 1fr (@spacer * 4);
        grid-template-areas:
            " . hub-header hub-header hub-header hub-header . "
            " . lpc-heading lpc-heading . . . "
            " . last-played-cards last-played-cards points-last-day position-box . "
            " . last-played-cards last-played-cards user-table user-table . "
            " . nuc-heading nuc-heading user-table user-table . "
            " . next-up-cards next-up-cards user-table user-table . "
            " . next-up-cards next-up-cards . . . "
            " . discussion discussion . . . "
            " . . . . . . ";
        .lpc-heading{
            grid-area: lpc-heading;
        }
        .nuc-heading{
            grid-area: nuc-heading;
        }
        .last-played{
            grid-area: last-played-cards;
        }
        .next-up{
            grid-area: next-up-cards;
        }
        .points-last-day{
            grid-area: points-last-day;
        }
        .position{
            grid-area: position-box;
        }
        .user-table{
            grid-area: user-table;
        }
        .points-last-day h3, .position h3{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: @spacer * 8;
            height: @spacer * 16;
        }
    }
    @media (max-width: @xxl) {
        .points-last-day .card-body h3, .position .card-body h3{
            font-size: @spacer * 7;
        }
        .content{
            grid-template-columns: (@spacer * 4) 5fr 2fr 2fr (@spacer * 4);
            grid-template-areas:
                " . hub-header hub-header hub-header . "
                " . lpc-heading lpc-heading . . "
                " . last-played-cards points-last-day position-box . "
                " . last-played-cards user-table user-table . "
                " . nuc-heading user-table user-table . "
                " . next-up-cards user-table user-table . "
                " . next-up-cards . . ."
                " . discussion . . . "
                " . . . . . ";
        }
    }
    @media (max-width: @lg) {
        .points-last-day .card-body h3, .position .card-body h3{
            font-size: @spacer * 6;
        }
       .content{
            grid-template-rows: 5rem 1rem auto 3rem auto auto 3rem auto auto auto 3rem;
            grid-template-columns: (@spacer * 4) 1fr 1fr (@spacer * 4);
            grid-template-areas:
                "  . hub-header hub-header . "
                " . . . . "
                " . points-last-day position-box . "
                " . lpc-heading lpc-heading . "
                " . last-played-cards last-played-cards . "
                " . last-played-cards last-played-cards . "
                " . nuc-heading nuc-heading . "
                " . next-up-cards next-up-cards . "
                " . next-up-cards next-up-cards . "
                " . discussion discussion . "
                " . . . . ";
       }
       .table-card{
            display: none !important;
        }
    }
    @media (max-width: @md) {
        .content{
            grid-template-rows: 3rem 1rem auto 3rem auto auto 3rem auto auto auto 3rem;
            grid-template-columns: (@spacer * 4) 1fr 1fr (@spacer * 4);
            grid-template-areas:
                " . hub-header hub-header ."
                " . . . ."
                " . points-last-day position-box . "
                " . lpc-heading lpc-heading . "
                " . last-played-cards last-played-cards . "
                " . last-played-cards last-played-cards . "
                " . nuc-heading nuc-heading . "
                " . next-up-cards next-up-cards . "
                " . next-up-cards next-up-cards . "
                " . discussion discussion . "
                " . . . . ";
        }
    }
    @media (max-width: @sm) {
        .content{
            grid-template-rows: 3rem 1rem auto 3rem auto auto 3rem auto auto auto 3rem;
            grid-template-columns: (@spacer) 1fr 1fr (@spacer);
            grid-template-areas:
                " . hub-header hub-header ."
                " . . . ."
                " . points-last-day position-box . "
                " . lpc-heading lpc-heading . "
                " . last-played-cards last-played-cards . "
                " . last-played-cards last-played-cards . "
                " . nuc-heading nuc-heading . "
                " . next-up-cards next-up-cards . "
                " . next-up-cards next-up-cards . "
                " . discussion discussion . "
                " . . . . ";
        }
        .points-last-day .card-body h3, .position .card-body h3{
            height: auto;
            padding: @spacer * 5;
            font-size: @spacer * 4;
        }
    }
</style>
