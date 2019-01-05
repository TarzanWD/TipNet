<template>
  <main class="grid">
    <Navbar class="navbar-dark" backOption />
    <RoomDetailIntro class="header" />
    <RoomDetailInfoList class="info" />
    <RoomDetailUserTable class="user-table" />
    <RoomDetailJoinSection class="join-room" />
    <AppFooter />
  </main>
</template>

<script>
import Navbar from '@/layout/Navbar'
import AppFooter from '@/layout/AppFooter'
import StatsBox from '@/components/StatsBox'
import RoomDetailIntro from '@/components/RoomDetailIntro'
import RoomDetailInfoList from '@/components/RoomDetailInfoList'
import RoomDetailUserTable from '@/components/RoomDetailUserTable'
import RoomDetailJoinSection from '@/components/RoomDetailJoinSection'
export default {
  components: {
    Navbar,
    StatsBox,
    RoomDetailIntro,
    RoomDetailInfoList,
    RoomDetailUserTable,
    RoomDetailJoinSection,
    AppFooter
  }
}
</script>

<style lang="less" scoped>
@import '../../public/css/config.less';

.grid {
  display: grid;
  grid-template-columns: @spacer * 40 1fr @spacer * 40;
  grid-template-rows: auto auto auto auto auto;
  grid-template-areas:
    "header header header"
    ". info ."
    ". user-table ."
    ". join-room ."
    "footer footer footer";
  min-height: 100vh;
  width: 100%;
  background: @white;
}

.header {
  grid-area: header;
}

.info {
  grid-area: info;
}

.user-table {
  grid-area: user-table;
}

.join-room {
  grid-area: join-room;
}

</style>
