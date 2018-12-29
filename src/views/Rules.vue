<template>
  <EventLayout>
    <h2 class="header-m about-h">
                O co jde?
            </h2>
            <section class="about" role="region">
                <p>
                    TipNet je&nbsp;tipovací soutěž pořádaná k&nbsp;různým akcím mající charakter turnaje&nbsp;/&nbsp;šampionátu. Je založena na tom, že bank (vstupní poplateky hráčů) si&nbsp;rozdělí prvních X&nbsp;hráčů v&nbsp;celkovém pořadí. Množství odměněných závisí na&nbsp;počtů hráčů (viz.&nbsp;tabulka níže).
                    <br>
                    Tipuje se na&nbsp;jednotlivé zápasy (výsledek po&nbsp;základní hrací době) a&nbsp;celkové pořadí (vítěz&nbsp;+&nbsp;semifinalisté). Na zápas se dá tipovat kdykoliv před jeho zahájením, na pořadí jen před zahájením šampionátu.
                    <br>
                    <i class="thanks">Přejeme hodně štěstí při tipování&nbsp;-&nbsp;provozovatelé.</i>
                </p>
            </section>
            <h2 class="header-m rules-h">
                Pravidla
            </h2>
            <h4 class="header-m account-subh">
                Hrací účet
            </h4>
            <section class="account" role="region">
                <ol>
                    <li>
                        Hráč může tipovat na všechny vypsané zápasy, a to od okamžiku vypsání jednotlivých utkání až do oficiálního zahájení utkání
                    </li>
                    <li>
                        Hráč může zadaný tip kdykoliv změnit, a to až do doby oficiálního zahájení daného utkání
                    </li>
                    <li>
                        Tipy na pořadí jsou akceptovány jen před zahájením šampinonátu.
                    </li>
                    <li>
                        Tipy je nutné zadávat výhradně přes tipovací systém. Jiné způsoby a žádosti o zadání tipu nebudou akceptovány (sms, email poštovní holub,…). Vyjímkou je situace, kdy tato aplikace z nějakého důvodu nefunguje.
                    </li>
                </ol>
            </section>
            <h4 class="header-m points-subh">
                Bodování
            </h4>
            <section class="points" role="region">
                <ol>
                    <li>
                        Pokud hráč uhodne <strong>přesný výsledek</strong> zápasu, získává 6 bodů
                    </li>
                    <li>
                        Pokud hráč uhodne <strong>vítěze zápasu</strong>, získává 3 body
                    </li>
                    <li>
                        Pokud hráč uhodne <strong>remízu</strong>, získává 4 bodů
                    </li>
                    <li>
                        Hráč může získat 1 <strong>bonusový bod</strong>, pokud je rozdíl vstřelených branek odehraného zápasu roven rozdílu vstřelených branek jeho tipu. př.: pokud hráč tipne výsledek zápasu 2:1, avšak zápas skončí výsledkem 3:2, získává hráč jeden bonusový bod za rozdíl ve skore (ke 3 bodům, které již získal za uhodnutí vítěze). Pozor, rozdíl vstřelených branek musí být vždy ve prospěch stejného týmu ! př.: Hráč tipne výsledek zápasu 2:1, avšak zápas skončí 1:2 (nebo 2:3), hráč nezískává žádný bod
                    </li>
                    <li>
                        Pokud hráč uhodne <strong>vítěze turnaje</strong>, získává 10 bodů
                    </li>
                    <li>
                        Pokud hráč uhodne <strong>semifinalistu turnaje</strong>, získává 5 bodů za každého uhodnutého
                    </li>
                </ol>
            </section>
            <h4 class="header-m standings-subh">
                Pořadí hráčů
            </h4>
            <section class="standings" role="region">
                <ol>
                    <li>
                        O pořadí hráčů rozhoduje počet získaných bodů za jednotlivé tipy (včetně bonusových)
                    </li>
                    <li>
                        V případě rovnosti bodů se všichni uživatelé se stejným počtem bodů umístí na stejném pořadí. V případě umístění na finančně ohodnoceném místě bude výhra rozdělena poměrným způsobem dle umístění a počtu uživatelů. Př.: 4 hráči se umístí společně na 2.místě. Sečtou se odměny za 2.-5.místo, tedy 30+20+0+0 procent. Tato suma se rozdělí mezi hráče následně: 50% / 4. Každý z těchto hráčů tedy obdrží 12,5%.
                    </li>
                </ol>
            </section>
  </EventLayout>
</template>
<script>
import EventLayout from '@/layout/EventLayout'
export default {
  components: {
    EventLayout
  }
}
</script>
<style lang="less" scoped>
    @import '../../public/css/config.less';
    .content{
      grid-template-rows: 5rem 5rem 3rem auto 3rem 1rem 3rem auto 3rem auto 3rem auto;
      grid-template-columns: (@spacer * 4) 1fr 4fr 5fr (@spacer * 4);
      grid-template-areas:
        " . hub-header hub-header hub-header . "
        " . . . . . "
        " . . about-h . . "
        " . . about . . "
        " . . rules-h . . "
        " . . . . . "
        " . . account-subh . . "
        " . . account . . "
        " . . points-subh . . "
        " . . points . . "
        " . . standings-subh . ."
        " . . standings . .";
        .about-h{
            grid-area: about-h;
        }
        .about{
            grid-area: about;
        }
        .rules-h{
            grid-area: rules-h;
        }
        .account-subh{
            grid-area: account-subh;
        }
        .account{
            grid-area: account;
        }
        .points-subh{
            grid-area: points-subh;
        }
        .points{
            grid-area: points;
        }
        .standings-subh{
            grid-area: standings-subh;
        }
        .standings{
            grid-area: standings;
        }
        p{
            padding: @spacer * 2 0;
            font-size: ~"calc(0.3vw + 1rem)";
            text-align: justify;
            .thanks{
                font-style: normal;
                display: inline-block;
                width: 100%;
                text-align: right;
                padding-top: @spacer;
            }
        }
        ol{
            padding: @spacer * 2 0;
            padding-left: @spacer * 5;
            font-size: ~"calc(0.1vw + 1rem)";
            li{
                padding-bottom: @spacer * 2;
            }
        }
    }
    @media (max-width: @lg) {
        .content{
            grid-template-columns: (@spacer * 4) 1fr 8fr 3fr (@spacer * 4);
        }
    }
    @media (max-width: @md) {
        .content{
            grid-template-rows: 3rem 5rem 3rem auto 3rem 1rem 3rem auto 3rem auto 3rem auto;
            grid-template-columns: (@spacer * 4) 1fr 15fr 1fr (@spacer * 4);
        }
    }
    @media (max-width: @sm) {
        .content{
            grid-template-rows: 3rem 1rem 3rem auto 3rem 1rem 3rem auto 3rem auto 3rem auto;
            grid-template-columns: (@spacer * 4) 1fr (@spacer * 4);
            grid-template-areas:
                " . hub-header . "
                " . . . "
                " . about-h . "
                " . about . "
                " . rules-h . "
                " . . . "
                " . account-subh . "
                " . account . "
                " . points-subh . "
                " . points . "
                " . standings-subh ."
                " . standings .";
            ol{
                padding: 0;
            }
        }
    }
</style>
