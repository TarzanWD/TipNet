<template>
  <table class="table table-hover">
    <MatchTableHead />
    <tbody>
      <tr
        v-for="match in rendered"
        :key="match.id"
      >
        <td class="date">
          {{ match.date | formatDate }}
        </td>
        <td class="team">
          {{ match.homeTeamName }}
          <img src="http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/FC-Barcelona-icon.png" alt="fc-barcelona-badge" class="team-badge">
        </td>
        <td class="separator">
          vs.
        </td>
        <td class="team">
          <img src="http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/Real-Madrid-icon.png" alt="real-madrid-badge" class="team-badge">
          {{ match.awayTeamName }}
        </td>
        <td class="tip">
          -
        </td>
        <td class="result">
          {{ match.result.goalsHomeTeam }}&nbsp;:&nbsp;{{ match.result.goalsAwayTeam }}
        </td>
        <td class="points">
          0
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import MatchTableHead from './components/MatchTableHead'
export default {
  components: {
    MatchTableHead
  }
}
</script>

<style lang="less" scoped>
@import '../../../public/css/config.less';
.table td:nth-child(7n + 4) {
  text-align: left;
}
</style>
