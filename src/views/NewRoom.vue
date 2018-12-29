<template>
  <main class="new-room-grid" role="main">
    <navbar class="navbar navbar-light"/>
    <section class="room-form">
      <h3 class="header-m">
        Přidat novou místnost
      </h3>
      <label class="room-form__label">
        Vyber akci
      </label>
      <div class="search-events">
        <img
          src="../../public/img/cl-event-logo.jpg"
          alt="alt"
          class="search-events__image"
        >
        <div class="search-events__body">
          <span class="header-m">
            Champion's League 2018/19
          </span>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Navbar from '@/layout/Navbar'
export default {
  components: {
    'navbar': Navbar
  }
}
</script>

<style lang="less" scoped>
@import '../../public/css/config.less';
.new-room-grid {
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: @spacer * 10 1fr 1fr @spacer * 10;
  grid-template-rows: @spacer * 10 auto;
  grid-template-areas:
    " navbar navbar navbar navbar "
    ". room-form . . ";
}

.room-form {
  grid-area: room-form;
}

.room-form__label {
  .header-m;
  margin: @spacer * 2 0;
  font-size: 1.15rem;
}

.search-events {
  display: flex;
  align-items: flex-start;
  width: 100%;
  background: @white;
  border-radius: 3px;
  margin-top: 1rem;

  &__image {
    max-width: 6.5rem;
    margin:0.5rem;
    margin-top: -0.75rem;
    border-radius: 3px;
  }

  &__body {
    display: inline-block;
    padding: 0.75rem;
  }
}

.navbar {
  grid-area: navbar;
}
</style>
