<template>
  <ul class="nav" role="navigation">
    <li
      v-for="route in routes"
      :key="route.id"
      class="nav__item"
    >
      <router-link
        class="nav__link"
        :to="route.to"
      >
        {{ route.name }}
      </router-link>
    </li>
    <button
      class="collapse-btn home-btn"
      @click="toggleCollapseMenu()"
    >
      <i class="fa fa-bars fa-lg" />
    </button>
    <div
      ref="collapseMenu"
      class="collapse-menu"
    >
      <ul class="nav collapse-menu__nav" role="navigation">
        <li
          v-for="route in routes"
          :key="route.id"
        >
          <router-link class="nav-link collapse-menu__link" :to="route.to">
            {{ route.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      routes: [
        {
          id: 0,
          to: '/event/0/',
          name: 'Domov'
        },
        {
          id: 1,
          to: '/event/0/matches',
          name: 'Zápasy'
        },
        {
          id: 2,
          to: '/event/0/table',
          name: 'Tabulka'
        },
        {
          id: 3,
          to: '/event/0/rules',
          name: 'Pravidla'
        },
        {
          id: 4,
          to: '/event/0/discussion',
          name: 'Diskuze'
        }
      ],
      collapseMenuToggled: false
    }
  },
  methods: {
    toggleCollapseMenu () {
      let collapseMenu = this.$refs.collapseMenu
      this.collapseMenuToggled ? collapseMenu.style.display = 'none' : collapseMenu.style.display = 'flex'
      this.collapseMenuToggled = !this.collapseMenuToggled
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../public/css/config.less';
.nav {
  grid-area: hub-header;
  align-items: center;
  font-family: @heading-font;
  background: @background-gray;
  width: 100%;
  padding: 0 @spacer * 4;
  height: 5rem;
}

.nav__item {
  padding-left: 5 * @spacer;

  &:first-child{
    padding-left: 0;
    margin-left: @spacer * 0.5;
  }
}

.nav__link {
  color: @text;

  &:hover {
    text-decoration: none;
  }

  &.active{
    font-weight: 600;
  }
}

.collapse-btn {
  .header-m;
  display: none;
  position: relative;
  top: -@spacer * 3;
  border-radius: 100%;

  &:focus {
    outline: 0;
  }
}

.home-btn {
  height: 5rem;
  width: 5rem;
  justify-content: center;
  align-items: center;
  border: 0;
  cursor: pointer;
  text-decoration: none;

  i {
    color: @background-gray;
  }

  &.cl{
    background: var(--cl);

    &:hover {
      background: var(--cl-lighten);
    }
  }

  &.primary{
    background: var(--theme);

    &:hover{
      background: var(--theme-lighten);
    }
  }
}

.collapse-menu {
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: @black;
}

.collapse-menu__nav {
  display: flex;
  flex-flow: column nowrap;
  background: transparent;

  .active {
    display: none;
  }
}

.collapse-menu__link {
  color: @white;
  font-size: 1.3rem;
}

@media (max-width: @md) {
  .nav__item {
    display: none;
  }

  .nav {
    justify-content: flex-end;
  }

  .collapse-btn {
    display: flex;
    margin-right: @spacer * 0.5;
    height: 4rem;
    width: 4rem;
    background: var(--cl);
  }
}

@media (max-width: @sm) {
  .nav .collapse-btn {
    margin-right: 0;
  }
}
</style>
