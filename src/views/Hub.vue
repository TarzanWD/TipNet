<template>
  <main class="grid" role="main">
    <Navbar class="navbar-light" />
    <IntroSection class="intro" />
    <RoomsList class="rooms" />
  </main>
</template>

<script>
import Navbar from '@/layout/Navbar'
import IntroSection from '@/components/IntroSection'
import RoomsList from '@/components/RoomsList'
export default {
  components: {
    Navbar,
    IntroSection,
    RoomsList
  }
}
</script>

<style lang="less" scoped>
@import '../../public/css/config.less';
.grid {
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: auto;
  grid-template-areas:
    "intro ."
    "rooms .";
  width: 100%;
  min-height: 100vh;
  background: @white;
  padding: 0 @spacer * 20;
}

.intro {
  grid-area: intro;
}

.rooms {
  grid-area: rooms;
}
</style>
