<template>
  <StatsBox withoutTitle>
    <template slot="header">
      Tipy na umístění
    </template>
    <slot>
      <ul class="teams">
        <li
          v-for="team in teams"
          :key="team.id"
          class="teams__team"
        >
          <span>
            <TeamBadge
              :path="team.logo"
              :alt="team.name"
              size="md"
              class="mr-3"
            />
              {{ team.name }}
          </span>
          <i :class="{
            'fa': true,
            'team__status': true,
            'fa-times': team.status === 0,
            'fa-check': team.status === 1,
            'fa-question': team.status === 2,
            'fa-lg': true
          }" />
        </li>
      </ul>
    </slot>
  </StatsBox>
</template>
<script>
import TeamBadge from '@/components/TeamBadge'
import StatsBox from '@/components/StatsBox'
export default {
  components: {
    TeamBadge,
    StatsBox
  },
  data () {
    return {
      teams: [
        {
          id: 0,
          name: 'FC Barcelona',
          logo: 'http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/FC-Barcelona-icon.png',
          status: 0
        },
        {
          id: 1,
          name: 'Real Madrid CF',
          logo: 'http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/Real-Madrid-icon.png',
          status: 1
        },
        {
          id: 2,
          name: 'Paris Saint Germain',
          logo: 'http://icons.iconarchive.com/icons/giannis-zographos/french-football-club/256/Paris-Saint-Germain-icon.png',
          status: 2
        },
        {
          id: 3,
          name: 'Bayern Munchen',
          logo: 'https://i.pinimg.com/originals/e1/a7/a1/e1a7a13125f91bf8415667eea829e44e.png',
          status: 2
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../public/css/config.less';
.card__heading {
  .header-m;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: @spacer * 3;
  font-size: 1.15rem;
}

.teams {
  .header-m;
  list-style: none;
  padding: @spacer @spacer * 3;
}

.teams__team {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: @spacer * 2 0;

  &:first-child {
    border-bottom: 1px solid @background-gray;
  }
}

.team__status {
  &.fa-times {
    color: red;
  }

  &.fa-check {
    color: green;
  }

  &.fa-question {
    color: orange;
  }
}
</style>
