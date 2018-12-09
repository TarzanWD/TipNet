<template>
  <div class="grid">
    <app-header />
    <main role="main" class="content">
      <hub-header />
      <score class="score" />
      <tip class="tip" />
      <teams class="teams" />
      <discussion :fullDiscussion="true" class="discussion" />
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/layout/AppHeader.vue'
import AppFooter from '@/layout/AppFooter.vue'
import HubHeader from '@/layout/HubHeader.vue'
import Score from '@/components/detail/Score.vue'
import Teams from '@/components/detail/Teams.vue'
import Discussion from '@/components/DiscussCard.vue'
export default {
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter,
    'hub-header': HubHeader,
    'score': Score,
    'teams': Teams,
    'discussion': Discussion
  }
}
</script>

<style lang="less" scoped>
  @import '../../public/css/config.less';

  .content {
    grid-template-rows: 5rem auto auto auto 3rem;
    grid-template-columns: @spacer * 4 1fr @spacer * 4;
    grid-template-areas:
      ". hub-header ."
      ". score ."
      ". teams ."
      ". discussion ."
      ". . .";
  }

  .score{
    grid-area: score;
  }

  .teams {
    grid-area: teams;
  }

  .discussion {
    grid-area: discussion;
    border: 0;
    margin: 0;
    border-radius: 3px;
    margin-top: @spacer * 2;
  }
</style>
