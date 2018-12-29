<template>
  <EventLayout>
    <div class="row no-gutters">
      <div class="col-7">
        <div class="stats">
          <StatsBox>
            <template slot="header">
              Poslední den
            </template>
            <slot>
              4b
            </slot>
          </StatsBox>
          <StatsBox>
            <template slot="header">
              Pozice
            </template>
            <slot>
              19
            </slot>
          </StatsBox>
        </div>
        <MatchList />
      </div>
      <div class="col-5">
        <UserTable />
        <Discussion :fullDiscussion="false" />
      </div>
    </div>
  </EventLayout>
</template>
<script>
import EventLayout from '@/layout/EventLayout'
import MatchList from '@/components/MatchList'
import StatsBox from '@/components/StatsBox'
import UserTable from '@/components/UserTable'
import Discussion from '@/components/DiscussionCard'
export default {
  components: {
    EventLayout,
    MatchList,
    StatsBox,
    Discussion,
    UserTable
  }
}
</script>
<style lang="less">
@import '../../public/css/config.less';
.stats {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}

.column {
  width: 100%;
}
</style>
