<template>
  <div class="team">
    <ul
      class="nav"
      :style="{ background: themeColor }"
    >
      <li
        v-for="tab in tabs"
        :key="tab.id"
        :class="{
          'nav__item': true,
          'nav__item--active': activeTab === tab.id
        }"
        @click="activeTab = tab.id"
      >
        {{ tab.name }}
      </li>
    </ul>
    <component :is="tabs[activeTab].component" />
  </div>
</template>

<script>
import TeamMatchesTab from './tabs/TeamMatchesTab'
import TeamLineUpTab from './tabs/TeamLineUpTab'
import TeamRankingTab from './tabs/TeamRankingTab'
import TeamStatsTab from './tabs/TeamStatsTab'
export default {
  props: {
    themeColor: {
      type: Number,
      required: true
    },
    team: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      activeTab: 0,
      tabs: [
        {
          id: 0,
          name: 'Zápasy',
          component: TeamMatchesTab
        },
        {
          id: 1,
          name: 'Soupisky',
          component: TeamLineUpTab
        },
        {
          id: 2,
          name: 'Statistiky',
          component: TeamStatsTab
        },
        {
          id: 3,
          name: 'Pořadí',
          component: TeamRankingTab
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../public/css/config.less';
.team {
  display: flex;
  flex-flow: column nowrap;
  background: @white;
  border-radius: 3px;

  &__logo {
    max-height: 3rem;
    margin-right: 1rem;
  }
}

.nav {
  height: 4.5rem;
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-around;
  align-items: stretch;
  color: @white;
  box-shadow: 0 0.1rem 1rem 0 @background-gray-darker;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.nav__item {
  .header-m;
  padding: 0 1.25rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  &--active {
    color: @black;
    background: @white;
  }

  &:hover {
    color: @black;
    background: @white;
  }
}
</style>
