<template>
  <header class="card-header">
    <img
      :src="homeTeam.logo"
      :alt="homeTeam.name"
      class="logo"
    >
    <div class="card-header__heading">
      <h4>
        {{ homeTeam.name }}
          -
        {{ awayTeam.name }}
      </h4>
      <small>
        {{ date | localeDateString }}
      </small>
    </div>
    <img
      :src="awayTeam.logo"
      :alt="awayTeam.name"
      class="logo"
    >
  </header>
</template>

<script>
export default {
  props: {
    awayTeam: {
      type: Object,
      required: true
    },
    homeTeam: {
      type: Object,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
  filters: {
    localeDateString (value) {
      return new Date(value).toLocaleDateString('cz-CZ', { hour: '2-digit', minute: '2-digit'})
    }
  }
}
</script>


<style lang="less" scoped>
@import '../../../public/css/config.less';

.card-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: @spacer * 2;
}

.card-header__heading {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  
  h4 {
    display: inline-block;
    margin-bottom:0;
    padding: @spacer;
    font-size: 1.25rem;
  }

  small {
    font-size: 0.95rem;
  }
}

.logo {
  max-width: @spacer * 4;
}

@media (max-width: @md) {
  .card-header__heading h4 {
    font-size: 1.2rem;
  }
}

@media (max-width: @sm) {
  .card-header {
    justify-content: center;
  }

  .logo {
    display: none;
  }
}
</style>

