<template>
  <main class="grid" role="main">
    <Navbar class="navbar-light" />
    <IntroSection class="intro" />
    <RoomsList class="rooms" />
    <Notifications class="notifications" />
  </main>
</template>

<script>
import Navbar from '@/layout/Navbar'
import IntroSection from '@/components/IntroSection'
import RoomsList from '@/components/RoomsList'
import Notifications from '@/components/Notifications'
export default {
  components: {
    Navbar,
    IntroSection,
    RoomsList,
    Notifications
  },
  created () {
    this.$store.dispatch('events/loadEvents')
    console.log(this.$store.getters['events/getState'])
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
    "rooms notifications";
  grid-column-gap: 5vw;
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

.notifications {
  grid-area: notifications;
}
</style>
