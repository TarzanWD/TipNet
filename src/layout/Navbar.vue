<template>
  <nav class="navbar navbar-expand">
    <span
      class="navbar-brand header-m"
      @click="$router.go(-1)"
      v-if="backOption"
    >
      <i class="fa fa-arrow-left mr-3" />
      Zpět
    </span>
    <router-link
      class="navbar-brand header-m"
      to="/"
      v-else
    >
      TIPNET
    </router-link>
    <div class="collapse navbar-collapse justify-content-end">
      <ul class="navbar-nav">
        <li class="nav-item navbar__name">
          <router-link
            class="nav-link"
            to="/profile"
          >
            junior
          </router-link>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="#"
          >
            <i class="fa fa-cog fa-lg" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    backOption: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>


<style lang="less" scoped>
@import '../../public/css/config.less';

.navbar {
  grid-area: navbar;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.navbar__name {
  padding: 0 @spacer * 2;
}

@media (max-width: @md) {
  .navbar-nav {
    display: none;
  }
}
</style>
