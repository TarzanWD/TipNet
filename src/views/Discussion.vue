<template>
  <EventLayout>
    <SectionHeader>
      Diskuze
    </SectionHeader>
    <DiscussionCard fullDiscussion />
  </EventLayout>
</template>
<script>
import EventLayout from '@/layout/EventLayout'
import DiscussionCard from '@/components/DiscussionCard'
import SectionHeader from '@/components/SectionHeader'
export default {
  components: {
    EventLayout,
    DiscussionCard,
    SectionHeader
  }
}
</script>
<style lang="less" scoped>
  @import '../../public/css/config.less';
</style>
