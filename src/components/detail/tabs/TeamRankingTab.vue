<template>
  <section class="team-ranking">
    <table class="table">
      <thead>
        <tr>
          <th />
          <th>
            Tým
          </th>
          <th>
            V
          </th>
          <th>
            R
          </th>
          <th>
            P
          </th>
          <th>
            Body
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(team, index) in group"
          :key="team.id"
        >
          <td>
            {{ index + 1 }}.
          </td>
          <td>
            <img
              :src="team.logo"
              :alt="team.name"
              class="logo"
            >
            <span class="team-name">
              {{ team.name }}
            </span>
          </td>
          <td>
            {{ team.wins }}
          </td>
          <td>
            {{ team.draws }}
          </td>
          <td>
            {{ team.loses }}
          </td>
          <td>
            {{ team.points}}b.
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  data () {
    return {
      group: [
        {
          id: 0,
          name: 'FC Barcelona',
          logo: 'http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/FC-Barcelona-icon.png',
          wins: 2,
          draws: 1,
          loses: 0,
          points: 7
        },
        {
          id: 1,
          name: 'Real Madrid CF',
          logo: 'http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/Real-Madrid-icon.png',
          wins: 2,
          draws: 1,
          loses: 0,
          points: 7
        },
        {
          id: 2,
          name: 'Manchester United',
          logo: 'http://icons.iconarchive.com/icons/giannis-zographos/english-football-club/256/Manchester-United-icon.png',
          wins: 0,
          draws: 1,
          loses: 2,
          points: 1
        },
        {
          id: 3,
          name: 'Paris Saint Germain',
          logo: 'http://icons.iconarchive.com/icons/giannis-zographos/french-football-club/256/Paris-Saint-Germain-icon.png',
          wins: 0,
          draws: 1,
          loses: 2,
          points: 1
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../../public/css/config.less';

.team-ranking {
  padding: @spacer * 2 @spacer * 3;
}

.logo {
  max-width: 2rem;
}

.team-name {
  display: inline-block;
  text-align: left;
  width: 10rem;
  margin-left: @spacer * 2;
}
</style>
