<template>
  <div class="room-card">
    <div class="room-card__image">
      <header class="room-card__header">
        <span class="room-card__heading">
          {{ room.card }}
        </span>
        <i
          class="fa fa-cogs"
        />
      </header>
      <div class="room-card__body">
        <h5 class="room-card__heading">
          {{ event.name }}
        </h5>
        <i
          class="fa fa-plus mr-1"
          v-if="addButton"
          @click="onClick"
        />
        <i
          class="fa fa-chevron-right mr-1"
          v-else
          @click="onClick"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'
export default {
  components: {
    Button
  },
  props: {
    room: {
      type: Object,
      required: true
    },
    event: {
      type: Object,
      required: true
    },
    addButton: {
      type: Boolean,
      default: () => false
    },
    onClick: {
      type: Function,
      default: () => false
    }
  },
}
</script>

<style lang="less" scoped>
@import '../../../public/css/config.less';

.room-card {
  height: 19.5rem;
  width: 13rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: @white;
  margin-right: @spacer * 3;
}

.room-card__header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.room-card__image {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  padding: @spacer * 3;
  background: url('../../../public/img/cl-poster.jpg');
  background-position: center;
  border-radius: 1rem;
  box-shadow: 0.05rem 0 1rem 0rem #999;
}

.room-card__body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.room-card__body i {
  cursor: pointer;
}

.room-card__heading {
  .header-m;
  color: @white;
  font-size: 0.8rem;
  margin-bottom: 0;
  max-width: 70%;
}


</style>
