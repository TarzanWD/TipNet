<template>
  <section class="rooms-list">
    <header class="rooms-list__header">
      <h5 class="rooms-list__heading">
        Vaše místnosti
      </h5>
      <div>
        <Button primary :click="() => $router.push('find-room')">
          Přidej se k akci
        </Button>
        <Button primary>
          Založ akci
        </Button>
      </div>
    </header>
    <div class="rooms-list__list">
      <RoomCard
        v-for="room in rooms.filter(room => !room.isClosed)"
        :key="room.id"
        :room="room"
        :event="events[room.eventId]"
        :onClick="() => $router.push({ name: 'event', params: { id: 0 } })"
      />
    </div>
    <h5 class="rooms-list__heading">
      Již dohrané
    </h5>
    <div class="rooms-list__list">
      <RoomCard
        v-for="room in rooms.filter(room => room.isClosed)"
        :key="room.id"
        :room="room"
        :event="events[room.eventId]"
      />
    </div>
  </section>
</template>

<script>
import RoomCard from '@/components/RoomCard'
import Button from '@/components/Button'
export default {
  components: {
    RoomCard,
    Button
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
          name: 'Champions League 2018/19'
        },
        1: {
          name: 'Champions League 2019/20'
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../public/css/config.less';

.rooms-list {
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  width: 100%;
  padding-top: @spacer * 12;
  padding-bottom: @spacer * 15;
}

.rooms-list__list {
  display: flex;
  width: 100%;
  flex-flow: wrap row;
}

.rooms-list__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rooms-list__heading {
  .header-m;
  margin: @spacer * 3 0;
}

</style>
