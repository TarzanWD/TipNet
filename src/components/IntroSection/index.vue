<template>
  <section class="intro">
    <h1 class="intro__heading">
      Vítej!
    </h1>
    <p class="intro__text">
      Trošku jsme to změnili.
      Tohle je&nbsp;hlavní menu nového TipNetu.
      Pokud jsi nový můžeš přejít na&nbsp;video, ve&nbsp;kterém ti vysvětlíme základy fungování této hry.
      Jestliže jsi už&nbsp;zaběhnutý hráč, můžeš se&nbsp;podívat co přibylo nového v&nbsp;nové verzi webu, anebo jít rovnou na&nbsp;věc a&nbsp;prozkoumat věci za&nbsp;chodu.
    </p>
    <footer class="intro__footer">
      <Button primary>
        Přejít na video
      </Button>
      <Button primary>
        Přejít na souhrn změn
      </Button>
      <Button>
        Zavřít
      </Button>
    </footer>
  </section>
</template>

<script>
import Button from '@/components/Button'
export default {
  components: {
    Button
  }
}
</script>


<style lang="less" scoped>
@import '../../../public/css/config.less';

.intro {
  padding-top: @spacer * 15;
  border-bottom: 1px solid @background-gray;
  padding-bottom: @spacer * 15;
}

.intro__heading {
  .header-m;
  margin-bottom: @spacer * 6;
}

.intro__text {
  font-size: 1rem;
  width: 80%;
  text-align: justify;
  margin-bottom: @spacer * 6;
}

.intro__footer button:first-child {
  margin-left: 0;
}
</style>
