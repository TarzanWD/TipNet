<template>
  <section class="lineup-list">
    <div
      v-for="role in Object.keys(roles)"
      :key="roles[role]"
    >
      <h5 class="lineup-list__heading">
        {{ role }}
      </h5>
      <ul class="players">
        <li
          v-for="player in players.filter((player) => player.position === roles[role])"
          :key="player.id"
          class="player"
        >
          <span class="player__number">
            {{ player.number }}
          </span>
          {{ player.name }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      roles: {
        'Útočníci': 0,
        'Záložníci': 1,
        'Obránci': 2,
        'Brankáři': 3
      },
      players: [
        {
          id: 0,
          name: 'Lio Messi',
          number: 10,
          position: 0
        },
        {
          id: 1,
          name: 'Luis Suarez',
          number: 9,
          position: 0
        },
        {
          id: 2,
          name: 'Ousmane Dembele',
          number: 11,
          position: 0,
        },
        {
          id: 3,
          name: 'Ivan Rakitic',
          number: 4,
          position: 1
        },
        {
          id: 4,
          name: 'Gerard Pique',
          number: 3,
          position: 2
        },
        {
          id: 5,
          name: 'Ter Stegen',
          number: 1,
          position: 3
        }
      ]
    }
  }
}
</script>


<style lang="less" scoped>
@import '../../../../public/css/config.less';
.lineup-list {
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

.players {
  list-style: none;
  padding: 0 @spacer * 3;
  margin: @spacer 0;
}

.player {
  padding: @spacer @spacer * 2;
  border-bottom: 1px solid @background-gray;

  &__number {
    display: inline-block;
    width: 1.5rem;
    margin-right: 1rem;
  }
}
</style>
