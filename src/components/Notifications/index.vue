<template>
  <section class="notifications">
    <h5 class="notifications__heading">
      Upozornění
    </h5>
    <div class="notifications-list">
      <div
        class="notification"
        v-for="notification in notifications"
        :key="notification.id"
      >
        <header class="notification__header">
          {{ notification.title }}
        </header>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      notifications: [
        {
          id: 0,
          title: 'Platba v BenefitCZ Champion\'s League'
        },
        {
          id: 1,
          title: 'Nová akce - Hokejové mistrovství světa 2019'
        }
      ]
    }
  }
}
</script>


<style lang="less" scoped>
@import '../../../public/css/config.less';

.notifications {
  padding-top: @spacer * 15;
}

.notifications__heading {
  .header-m;
  margin-bottom: @spacer * 3;
}

.notification {
  margin-top: @spacer * 2;
}

.notification::after {
  content: '';
  display: block;
  width: 30%;
  height: 2px;
  background: @background-gray-darker;
}

.notification__header {
  .header-m;
  font-weight: 400;
  width: 100%;
  font-size: 0.9rem;
  display: flex;
  flex-flow: nowrap row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: @spacer * 2;
}

.notification__color {
  display: inline-block;
  height: 0.75rem;
  width: 0.75rem;
  margin-right: @spacer * 2;
  border-radius: 100%;
  background: red;
}

</style>

