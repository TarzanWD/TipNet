<template>
  <footer class="card-footer card-footer--cl">
    <router-link :to="routeToDetail">
      <span v-if="played">
        Detail
      </span>
      <span v-else>
        Změnit
      </span>
    </router-link>
  </footer>
</template>

<script>
export default {
  props: {
    matchId: {
      type: Number,
      required: true
    }
  },
  computed: {
    routeToDetail () {
      return `/detail/${this.matchId}`
    }
  }
}
</script>
