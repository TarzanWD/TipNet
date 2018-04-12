<template>
    <div class="grid">
        <div class="poster">
            <app-header></app-header>
        </div>
        <div class="content">
            <div class="container-fluid">
                <div v-show="hideNav === false">
                    <hub-header></hub-header>
                </div>
                <div class="row">
                    <div class="col-8">
                        <h5 class="section-header">
                            Nadcházející zápasy
                        </h5>
                    </div>
                    <div class="col-4">
                        <h5 class="section-header">
                            Statistiky
                        </h5>
                    </div>
                    <div class="col-md-8">
                        <match-card :played="false"></match-card>
                        <match-card :played="false"></match-card>
                        <match-card :played="false"></match-card>
                        <match-card :played="false"></match-card>
                        <a class="more">
                            Všechny zápasy
                        </a>
                    </div>
                    <div class="col-md-2">
                        <stats-box>
                            <template slot="header">
                                Vaše umístění
                            </template>
                            <slot>
                                27.
                            </slot>
                        </stats-box>
                    </div>
                    <div class="col-md-2">
                        <stats-box>
                            <template slot="header">
                                Poslední hrací den
                            </template>
                            <slot>
                                5b.
                            </slot>
                        </stats-box>
                    </div>
                    <div class="col-8">
                        <h5 class="section-header">
                            Poslední odehrané
                        </h5>
                    </div>
                    <div class="col-md-4">
                        <h5 class="section-header">
                            Tabulka
                        </h5>
                    </div>
                    <div class="col-md-8">
                        <match-card :played="true"></match-card>
                        <match-card :played="true"></match-card>
                        <match-card :played="true"></match-card>
                        <match-card :played="true"></match-card>
                    </div>
                    <div class="col-md-4">
                        <user-table></user-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AppHeader from '@/components/AppHeader.vue'
import HubHeader from '@/components/HubHeader.vue'
import MatchCard from '@/components/MatchCard.vue'
import UserTable from '@/components/UserTable.vue'
import StatsBox from '@/components/StatsBox.vue'
export default {
  components: {
    'app-header' : AppHeader,
    'hub-header' : HubHeader,
    'match-card' : MatchCard,
    'user-table' : UserTable,
    'stats-box' : StatsBox
  },
  computed: {
    hideNav () {
        let content = document.getElementsByClassName("content")
        return content.offsetTop <= window.scrollY ? true : false
    }
  }
}
</script>
<style lang="less">
    @import '../../public/css/config.less';
    body{
        background: @background-gray-darker;
    }

    .grid{
        display: grid;
        grid-template-rows: 25rem auto;
        grid-template-columns: (@spacer*10) auto (@spacer*10);
        grid-template-areas: 
            "poster poster poster"
            ". content .";
        width:100%;
        .poster{
            grid-area: poster;
            box-sizing: border-box;
            position: relative;
            display: inline-block;
            background-image: url('../../public/img/cl-poster.jpg');
            background-size: cover;
            background-position: center bottom;
        }

        .content{
            grid-area: content;
            z-index: 10;
            background: @background-gray;
            margin-top: -10 * @spacer;
            .section-header{
                .header-m;
                font-size: 1rem;
                margin-left: @spacer;
            }
            .more{
                display: flex;
                width: 100%;
                height: @spacer * 5;
                justify-content: center;
                align-items: center;
                font-weight: 500;
                text-decoration: underline;
                color: @cl-color;
                cursor: pointer;
                &:hover{
                    color: @cl-color-lighten;
                }
            }
        }
    }
    @media (max-width: @xxl) {
        .grid{
            grid-template-areas: 
            "poster poster poster"
            "content content content";  
        }
    }
</style>

