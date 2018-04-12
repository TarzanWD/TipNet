<template>
    <div class="grid">
        <div class="poster">
            <app-header></app-header>
        </div>
        <div class="content">
            <div class="container-fluid">
                <hub-header></hub-header>
                <div class="row">
                    <div class="col">
                        <h5 class="section-header">
                            Nadcházející zápasy
                        </h5>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <match-card></match-card>
                        <match-card></match-card>
                    </div>
                    <div class="col-md-4">
                        <match-card></match-card>
                        <match-card></match-card>
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
export default {
  components: {
    'app-header' : AppHeader,
    'hub-header' : HubHeader,
    'match-card' : MatchCard
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
        grid-template-rows: 33rem auto;
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

