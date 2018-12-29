<template>
  <EventLayout>
    <SectionHeader>
      Filter
    </SectionHeader>
    <FilterNav />
    <div class="card match-table">
      <div class="card-body">
        <MatchTable />
        <button class="btn btn-lg btn-block btn-outline-secondary more more--cl" @click="renderMoreFixtures()">Více</button>
      </div>
    </div>
    <FinalistsCard />
  </EventLayout>
</template>
<script>
import EventLayout from '@/layout/EventLayout'
import StatsBox from '@/components/StatsBox'
import FinalistsCard from '@/components/FinalistsCard'
import FilterNav from '@/components/FilterNav'
import SectionHeader from '@/components/SectionHeader'
import MatchTable from '@/components/MatchTable'
//
export default {
  components: {
    EventLayout,
    FinalistsCard,
    SectionHeader,
    StatsBox,
    FilterNav,
    MatchTable
  },
  methods: {
    renderMoreFixtures () {
      this.$store.commit('renderFixtures')
    }
  },
  computed: {
    fixtures () {
      return this.$store.state.fixtures
    },
    rendered () {
      return this.$store.state.renderedFixtures
    }
  },
  created () {
    this.$store.dispatch('getFixtures')
  },
  filters: {
    formatDate (value) {
      let d = new Date(value)
      let date = d.getDate()
      let month = d.getMonth()
      let year = d.getFullYear()
      let hour = d.getHours()
      let minutes = d.getMinutes() === 0 ? '00' : d.getMinutes()
      return `${date}.${month}.${year} ${hour}:${minutes}`
    }
  }
}
</script>
<style lang="less" scoped>
    @import '../../public/css/config.less';

</style>
