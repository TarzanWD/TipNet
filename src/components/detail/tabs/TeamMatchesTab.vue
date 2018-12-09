<template>
  <section class="match-list">
    <h5 class="match-list__heading">
      Odehrané
    </h5>
    <div
      v-for="match in matches"
      :key="match.id"
      class="match"
    >
      <div class="match__team">
        <span>
          <img
            :src="match.homeTeam.logo"
            :alt="match.homeTeam.name"
            class="logo"
          >
          {{ match.homeTeam.name }}
        </span>
        <span>
          {{ match.homeTeam.goals }}
        </span>
      </div>
      <div class="match__team">
        <span>
          <img
            :src="match.awayTeam.logo"
            :alt="match.awayTeam.name"
            class="logo"
          >
          {{ match.awayTeam.name }}
        </span>
        <span>
          {{ match.awayTeam.goals }}
        </span>
      </div>
    </div>
    <h5 class="match-list__heading">
      Nadcházející
    </h5>
    <div
      v-for="match in matches"
      :key="match.id"
      class="match"
    >
      <div class="match__team">
        <span>
          <img
            :src="match.homeTeam.logo"
            :alt="match.homeTeam.name"
            class="logo"
          >
          {{ match.homeTeam.name }}
        </span>
        <span>
          ?
        </span>
      </div>
      <div class="match__team">
        <span>
          <img
            :src="match.awayTeam.logo"
            :alt="match.awayTeam.name"
            class="logo"
          >
          {{ match.awayTeam.name }}
        </span>
        <span>
          ?
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      matches: [{
        id: 0,
        homeTeam: {
          logo: 'http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/FC-Barcelona-icon.png',
          name: 'FC Barcelona',
          goals: 2
        },
        awayTeam: {
          logo: 'http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/Real-Madrid-icon.png',
          name: 'Real Madrid CF',
          goals: 2
        }
      },
      {
        id: 0,
        homeTeam: {
          logo: 'http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/FC-Barcelona-icon.png',
          name: 'FC Barcelona',
          goals: 2
        },
        awayTeam: {
          logo: 'http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/Real-Madrid-icon.png',
          name: 'Real Madrid CF',
          goals: 2
        }
      }]
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../../public/css/config.less';
.match-list {
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;

  &__heading {
    .header-m;
    font-size: 1rem;
    padding-top: @spacer * 2;
    padding-left: @spacer * 3;
  }
}

.match {
  display: flex;
  flex-flow: nowrap column;
  align-items: stretch;
  border-bottom: 1px solid @background-gray;
  cursor: pointer;

  &:hover {
    background: @background-gray;
  }

  &__team {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2.5rem;
  }
}

.logo {
  max-height: 2rem;
  margin-right: 1.5rem;
}
</style>
