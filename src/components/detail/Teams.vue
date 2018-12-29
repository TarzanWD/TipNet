<template>
  <section class="teams-grid">
    <team-card
      :team="teams[0]"
      themeColor="#a50044"
    />
    <team-card
      :team="teams[1]"
      themeColor="#00529f"
    />
  </section>
</template>

<script>
import TeamCard from './TeamCard'
export default {
  components: {
    'team-card': TeamCard
  },
  data () {
    return {
      teams: [
        {
          id: 0,
          name: 'FC Barcelona',
          logo: 'http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/FC-Barcelona-icon.png'
        },
        {
          id: 1,
          name: 'Real Madrid CF',
          logo: 'http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/Real-Madrid-icon.png'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../public/css/config.less';
.teams-grid {
  margin-top: @spacer * 3;
  width: 100%;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 1rem;
}
</style>
