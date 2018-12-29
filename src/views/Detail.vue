<template>
  <EventLayout>
    <Score class="score" />
    <Teams class="teams" />
    <Discussion
      :fullDiscussion="false"
      class="discussion"
    />
  </EventLayout>
</template>

<script>
import EventLayout from '@/layout/EventLayout'
import Score from '@/components/detail/Score.vue'
import Teams from '@/components/detail/Teams.vue'
import Discussion from '@/components/DiscussionCard'
export default {
  components: {
    EventLayout,
    Score,
    Teams,
    Discussion
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
