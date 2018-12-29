<template>
  <Card>
    <card-header
      :home-team="match.homeTeam"
      :away-team="match.awayTeam"
      :date="match.date"
    />
    <div class="card__body">
      <div class="card-section">
        <h5 class="card-section__heading">
          Tip
        </h5>
        <div class="card-section__content">
          {{ tip.homeTeamGoals }} : {{ tip.awayTeamGoals }}
        </div>
      </div>
      <div class="card-section">
        <h5 class="card-section__heading">
          <span class="longer">Výsledek</span>
          <span class="shorter">Výs</span>
        </h5>
        <div class="card-section__content">
          {{ match.homeTeam.goals }} : {{ match.awayTeam.goals }}
        </div>
      </div>
      <div class="card-section">
        <h5 class="card-section__heading">
          Body
        </h5>
        <div class="card-section__content">
          {{ tip.points }}
        </div>
      </div>
    </div>
    <card-footer :match-id="match.id" />
  </Card>
</template>
<script>
import Card from '@/components/Card'
import MatchCardHeader from './components/MatchCardHeader.vue'
import MatchCardFooter from './components/MatchCardFooter.vue'
export default {
  components: {
    Card,
    'card-header': MatchCardHeader,
    'card-footer': MatchCardFooter
  },
  props: {
    played: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      tip: {
        homeTeamGoals: 2,
        awayTeamGoals: 2,
        points: 6
      },
      match: {
        id: 125,
        date: 'Sat Dec 08 2018 20:15:30 GMT+0100 (Středoevropský standardní čas)',
        homeTeam: {
          name: 'FC Barcelona',
          goals: 2,
          logo: 'http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/FC-Barcelona-icon.png'
        },
        awayTeam: {
          name: 'Real Madrid CF',
          goals: 2,
          logo: 'http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/Real-Madrid-icon.png'
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../../public/css/config.less';
.card {
  font-family: @font;
  margin-right: @spacer * 2;
  width: 100%;
}

.card__body {
  padding:0;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: @spacer * 2;
  padding-bottom: @spacer * 3;
}

.card-section {
  display: flex;
  flex-flow: column nowrap;
  width: 33.3%;
}

.card-section__heading {
  width: 100%;
  text-align: center;
  padding: @spacer;
  font-size: 0.8rem;
  .header-m;
}

.card-section__content {
  width: 100%;
  text-align: center;
  font-size: 1.3rem;
}
</style>
