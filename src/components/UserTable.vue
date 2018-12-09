<template>
  <div class="card table-card">
    <div class="card-body">
      <div class="input-group">
        <label
          for="user-search-box"
          class="header-m"
        >
          Hledej:
        </label>
        <input
          v-model="searchInput"
          type="text"
          class="input"
          placeholder="Jméno hráče..."
          name="user-search-box"
        >
      </div>
      <table class="table table-card__table table-hover">
        <tbody>
          <tr
            v-for="(user, index) in searchedUsers.sort((u1, u2) => u2.points - u1.points)"
            :key="user.id"
            :class="{ 'user-active': isUserHimself(user.id) }"
          >
            <td>
              {{ index + 1 }} .
            </td>
            <td>
              {{ user.name }}
            </td>
            <td>
              {{ user.points }}b.
            </td>
          </tr>
        </tbody>
      </table>
      <div
        v-show="searchedUsers.length === 0"
        class="user-not-found"
      >
        <h4 class="user-not-found__heading">
          Zkuste něco jiného
        </h4>
        <small>
          Nemohli jsme daného uživatele najít.
        </small>
      </div>
      <router-link
        type="button"
        class="btn btn-outline-secondary btn-lg btn-block more more--cl"
        to="/table"
        tag="button"
      >
        Celé pořadí
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      searchInput: '',
      userId: 1,
      users: [
        { id: 0, name: 'junior1', points: 100 },
        { id: 1, name: 'junior2', points: 90 },
        { id: 2, name: 'junior3', points: 70 },
        { id: 3, name: 'junior4', points: 80 },
        { id: 4, name: 'junior5', points: 50 },
        { id: 5, name: 'junior6', points: 60 },
        { id: 6, name: 'junior7', points: 30 },
        { id: 7, name: 'junior8', points: 40 },
        { id: 8, name: 'junior9', points: 10 },
        { id: 9, name: 'junior10', points: 20 }
      ]
    }
  },
  computed: {
    searchedUsers () {
      return this.users.filter((user) => user.name.includes(this.searchInput))
    }
  },
  methods: {
    isUserHimself (id) {
      return this.userId === id
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../public/css/config.less';

.table-card {
  margin-top: @spacer;
}

.user-active {
  .header-m;
  color: var(--cl);
}

.user-not-found {
  display: flex;
  height: 10rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-flow: nowrap column;

  &__heading {
    .header-m;
    color: @black;
  }
}

.table-card__table {
  tr:first-child td {
    border-top: 0;
  }

  th {
    border-top: 0;
    border-bottom-width: 1px;
  }
}

</style>
