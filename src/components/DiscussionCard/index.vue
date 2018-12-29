<template>
  <div class="card discussion">
    <div class="card-body">
      <discussion-post
        v-for="post in (fullDiscussion ? posts : posts.slice(-3))"
        :key="post.id"
        :post="{ owner: post.username , text: post.text }"
      />
      <discussion-add-new />
      <router-link
        type="button"
        class="btn btn-outline-secondary btn-lg btn-block more more--cl"
        to="/discussion"
        tag="button"
        v-show="!fullDiscussion"
      >
        Celá diskuze
      </router-link>
    </div>
  </div>
</template>

<script>
import DiscussionPost from './components/DiscussionPost'
import DiscussionAddNew from './components/DiscussionAddNew'
export default {
  components: {
    'discussion-post': DiscussionPost,
    'discussion-add-new': DiscussionAddNew
  },
  props: {
    fullDiscussion: {
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {
      posts: [
        {
          id: 0,
          username: 'test_user_1',
          text: 'jinak já jsem hrdý na naše hodnoty, co si DOKÁZAL ty ty havlomrde JEDEN,kurvo ? ČECHY ČECHŮM!!!! Je to PŘECE UPLNĚ jasné že korporace a MUSLIMÁCI chcou aby jste si to tak misleli . NECHCI zabrušovat, abych nemusel vybrušovat, ale NEJSEM RASISTA,evropa je bíla AFRIKA je černá a asie je ŽLUTÁ'
        },
        {
          id: 1,
          username: 'test_user_2',
          text: 'já nejsem RASISTA............mělo by se OBJASNIT, JAK to VLASTNĚ VŠECHNO bylo..... a MÉDIA a česká televize MLČÍ!!!',
        },
        {
          id: 2,
          username: 'test_user_3',
          text: 'A na NAŠE DŮCHODCE MUSÍME SBÍRAT VIČKA???? TAK S TÍMHLE jděte VÍTE kam..... stejně jako s CHEMTRAILS ZA VŠECHNO MŮŽOU Obama A CIA . S EMANCIPACÍ AŤ si JDOU DEMONSTROVAT DO BRUSELU......!!!!! ŽIDI!!!!',
        },
        {
          id: 3,
          username: 'test_user_4',
          text: 'ZAPALTE OHNĚ PROTOŽE JEDINYM ŘEŠENÍM MIGRAČNÍ KRIZE JE KULOMET... MYMOCHODEM ORTEL ZPÍVA jenom PRAVDU JAKO Kryl A TOHO SLAVÍKA si PŘÍSTĚ SNAD ODNESE A TOHO CIGÁNA BY MĚLI ZAVŘÍT NĚKAM DO ZOO .!!!!! IDIOTI!!!!!!! ZMRRRDE!!!!!!!!!!!!!!!?!!!!!!'
        },
        {
          id: 4,
          username: 'test_user_5',
          text: 'Islám V ČR NECHCEME!! A BĚŽTE S MULTI-KULTI DO PRDELE!! KDYBY DAL KAŽDÝ ČECH TŘEBA JEN 100 VÝČEK,MOHLY bysme POSTAVIT PLOT A CHRÁNIT NAŠE HRANICE,AHA? !!!!! KUNDYYY!!!!!!! PIIIČOO!!!!!!!!!!!!!!!?!!!!!!'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../public/css/config.less';

.discussion {
  grid-area: discussion;
}

.button--submit {
  color: var(--cl);
}
</style>
