<template>
  <div class="card">
    <div class="card-header">
      <img src="http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/FC-Barcelona-icon.png" alt="Fc Barcelona" class="logo">
      <div class="heading">
        <h4>
            FC Barcelona
                -
            Real Madrid
        </h4>
        <small>
            20.04.2018 10:45
        </small>
      </div>
      <img src="http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/Real-Madrid-icon.png" alt="Real Madrid" class="logo">
    </div>
    <div class="card-body">
        <div class="card-grid">
            <div class="tip">
                <h5 class="heading">
                    Tip
                </h5>
                <div class="block">
                    0 : 3
                </div>
            </div>
            <div class="result">
                <h5 class="heading">
                    <span class="longer">Výsledek</span>
                    <span class="shorter">Výs</span>
                </h5>
                <div class="block">
                    - : -
                </div>
            </div>
            <div class="points">
                <h5 class="heading">
                    Body
                </h5>
                <div class="block">
                    ?
                </div>
            </div>
        </div>
    </div>
    <div class="card-footer card-footer--cl">
        <div v-if="played">
            <a href="#">Detail</a>
        </div>
        <div v-else>
            <a href="#">Změnit</a>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'played'
  ]
}
</script>
<style lang="less" scoped>
    @import '../../public/css/config.less';
    .card{
        display: block;
        font-family: @font;
        .card-header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #fff;
            padding: @spacer * 2;
            .heading{
                display: flex;
                flex-flow: column nowrap;
                align-items: center;
                h4{
                    display: inline-block;
                    margin-bottom:0;
                    padding: @spacer;
                }
                small{
                    font-size: 0.95rem;
                }
            }
            .logo{
                max-width: @spacer * 4;
            }
        }

        .card-body{
            padding:0;
            .card-grid{
                position: relative;
                width: 100%;
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: center;
                padding: @spacer * 2;
                padding-bottom: @spacer * 3;
                .tip,.result,.points{
                    display: flex;
                    flex-flow: column nowrap;
                    width: 33.3%;
                    .heading{
                        width: 100%;
                        text-align: center;
                        padding: @spacer;
                        font-size: 0.8rem;
                        .header-m;
                    }
                    .block{
                        width: 100%;
                        text-align: center;
                        font-size: 1.3rem;
                    }
                }
            }
        }
    }
    @media (max-width: @md) {
        .heading h4{
           font-size: 1.2rem;
        }
    }
    @media (max-width: @sm) {
        .card .card-header{
            justify-content: center;
            .logo{
                display: none;
            }
        }
    }
</style>
