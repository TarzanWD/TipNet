<template>
  <div class="bar">
    <div class="team">
      <img
        :alt="teams[0].name"
        :src="teams[0].logo"
        class="logo"
      >
      {{ teams[0].name }}
    </div>
    <div class="score-area">
      <div class="result">
        ? : ?
      </div>
    </div>
    <div class="team">
      {{ teams[1].name }}
      <img
        :src="teams[1].logo"
        :alt="teams[1].name"
        class="logo"
      >
    </div>
  </div>
</template>

<script>
export default {
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
.bar {
  .header-m;

  border-radius: 3px;
  background: @white;
  width: 100%;
  margin-top: 1.5rem;
  padding: @spacer * 3 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5rem;
}

.result {
  font-size: 2.25rem;
  padding: 1rem 2.25rem;
  letter-spacing: 0.5rem;
}

.team {
  width: 30%;
  display: flex;
  align-items: center;

  &:last-child {
    justify-content: flex-end;
  }
}

.score-area {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.tip {
  margin-top: @spacer * 2;

  & input {
    width: 5rem;
    border: 0;
    border-bottom: 1px solid @black;
    background: transparent;
    text-align: center;
  }
}

.logo {
  max-width: 3rem;
  margin: 0 1rem;
}
</style>
