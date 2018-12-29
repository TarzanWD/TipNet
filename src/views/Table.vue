<template>
  <EventLayout>
    <SectionHeader>
      Tabulka
    </SectionHeader>
    <UserTable fullTable />
  </EventLayout>
</template>
<script>
import EventLayout from '@/layout/EventLayout'
import StatsBox from '@/components/StatsBox'
import SectionHeader from '@/components/SectionHeader'
import UserTable from '@/components/UserTable'
export default {
  components: {
    StatsBox,
    EventLayout,
    SectionHeader,
    UserTable
  }
}
</script>
<style lang="less" scoped>
    @import '../../public/css/config.less';
    .content{
      grid-template-rows: 5rem 3rem auto 3rem;
      grid-template-columns: (@spacer * 4) 7fr 3fr (@spacer * 4);
      grid-template-areas:
        " . hub-header hub-header . "
        " . ut-heading ut-heading ."
        " . user-table user-stats ."
        ". . . .";
      .user-table{
        grid-area: user-table;
        overflow-x: auto;
      }
      .ut-heading{
        grid-area: ut-heading;
      }
      .user-stats{
        grid-area:user-stats;
        ul{
          list-style: none;
          padding-top: @spacer * 2;
          .badge{
            margin-left: @spacer;
          }
        }
      }
    }
</style>
