<template>
  <main class="grid">
    <Navbar class="navbar-light" backOption />
    <SearchBar />
    <div class="room-list">
      <RoomCard
        v-for="room in rooms.filter(room => !room.isClosed)"
        :key="room.id"
        :room="room"
        :event="events[room.eventId]"
        :onClick="() => $router.push({ name: 'room-detail', params: { id: 1 } })"
        addButton
      />
    </div>
  </main>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import Navbar from '@/layout/Navbar'
import RoomCard from '@/components/RoomCard'
export default {
  components: {
    SearchBar,
    Navbar,
    RoomCard
  },
  data () {
    return {
      rooms: [
        {
          id: 0,
          name: 'Benefit CZ',
          eventId: 0,
          isClosed: true
        },
        {
          id: 1,
          name: 'Benefit CZ',
          eventId: 1,
          isClosed: false
        },
        {
          id: 2,
          name: 'Benefit CZ',
          eventId: 1,
          isClosed: false
        }
      ],
      events: {
        0: {
          name: 'Champions League 2018 / 19'
        },
        1: {
          name: 'Champions League 2019 / 20'
        }
      }
    }
  }
}
</script>


<style lang="less" scoped>
@import '../../public/css/config.less';

.grid {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: nowrap column;
  align-items: stretch;
  padding: @spacer * 8 @spacer * 20;
  background: @white;
}

.room-list {
  display: flex;
  flex-flow: wrap row;
}

</style>

