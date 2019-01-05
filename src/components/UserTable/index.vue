<template>
  <Card :childrenOnly="onlyTable">
    <CardBody :childrenOnly="onlyTable">
      <div class="input-group" v-show="!onlyTable">
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
        <thead v-show="fullTable">
          <tr>
            <th />
            <th>
              Jméno
            </th>
            <th>
              Tipů
            </th>
            <th>
              PT
            </th>
            <th>
              V
            </th>
            <th>
              R
            </th>
            <th>
              S
            </th>
            <th>
              UM
            </th>
            <th>
              Průměr
            </th>
            <th>
              bodů
            </th>
            <th>
              Předchozí
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in searchedUsers.sort((u1, u2) => u2.points - u1.points)"
            :key="user.id"
            :class="{ 'user-active': isUserHimself(user.id) }"
          >
            <td>
              {{ user.ranking }} .
            </td>
            <td>
              {{ user.name }}
            </td>
            <td v-show="fullTable">
              {{ user.tipsCount }}
            </td>
            <td v-show="fullTable">
              {{ user.tipsExactResult }}
            </td>
            <td v-show="fullTable">
              {{ user.tipsWin }}
            </td>
            <td v-show="fullTable">
              {{ user.tipsDraw }}
            </td>
            <td v-show="fullTable">
              {{ user.tipsScoreDiff }}
            </td>
            <td v-show="fullTable">
              {{ user.pointsSemi }}
            </td>
            <td v-show="fullTable">
              {{ String((user.points - user.pointsSemi) / user.tipsCount, 2).slice(0,3) }}
            </td>
            <td>
              {{ user.points }}b.
            </td>
            <td v-show="fullTable">
              {{ user.rankingPrev }}.
              <i
                :class="{
                  'fa': true,
                  'fa-chevron-up': user.rankingPrev < user.ranking,
                  'fa-chevron-down': user.rankingPrev > user.ranking
                }"
              />
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
        v-show="!fullTable && !onlyTable"
      >
        Celé pořadí
      </router-link>
    </CardBody>
  </Card>
</template>
<script>
import Card from '@/components/Card'
import CardBody from '@/components/CardBody'
export default {
  components: {
    Card,
    CardBody
  },
  props: {
    fullTable: {
      type: Boolean,
      default: () => false
    },
    onlyTable: {
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {
      searchInput: '',
      userId: 1,
      users: [
        {
          "id": 0,
          "name": "andreas",
          "eventId": 1,
          "ranking": 26,
          "paymentDate": "1900-01-01T00:00:00",
          "pointsSemi": 10,
          "points": 141,
          "tipsScoreDiff": 5,
          "tipsDraw": 0,
          "tipsWin": 21,
          "tipsExactResult": 7,
          "tipsCount": 64,
          "rankingPrev": 21
        },
        {
          "id": 1,
          "name": "blažena66",
          "eventId": 1,
          "ranking": 18,
          "paymentDate": "1900-01-01T00:00:00",
          "pointsSemi": 10,
          "points": 151,
          "tipsScoreDiff": 2,
          "tipsDraw": 5,
          "tipsWin": 17,
          "tipsExactResult": 7,
          "tipsCount": 64,
          "rankingPrev": 14
        },
        {
          "id": 2,
          "name": "dedek",
          "eventId": 1,
          "ranking": 29,
          "paymentDate": "1900-01-01T00:00:00",
          "pointsSemi": 10,
          "points": 127,
          "tipsScoreDiff": 3,
          "tipsDraw": 3,
          "tipsWin": 18,
          "tipsExactResult": 5,
          "tipsCount": 60,
          "rankingPrev": 15
        },
        {
          "id": 3,
          "name": "doniphan",
          "eventId": 1,
          "ranking": 20,
          "paymentDate": "1900-01-01T00:00:00",
          "pointsSemi": 10,
          "points": 148,
          "tipsScoreDiff": 5,
          "tipsDraw": 5,
          "tipsWin": 18,
          "tipsExactResult": 6,
          "tipsCount": 60,
          "rankingPrev": 33
        },
        {
          "id": 4,
          "name": "evik",
          "eventId": 1,
          "ranking": 12,
          "paymentDate": "1900-01-01T00:00:00",
          "pointsSemi": 10,
          "points": 166,
          "tipsScoreDiff": 8,
          "tipsDraw": 2,
          "tipsWin": 25,
          "tipsExactResult": 7,
          "tipsCount": 64,
          "rankingPrev": 22
        },
        {
          "id": 5,
          "name": "fastshark",
          "eventId": 1,
          "ranking": 31,
          "paymentDate": "1900-01-01T00:00:00",
          "pointsSemi": 5,
          "points": 119,
          "tipsScoreDiff": 5,
          "tipsDraw": 2,
          "tipsWin": 18,
          "tipsExactResult": 5,
          "tipsCount": 64,
          "rankingPrev": 13
        },
        {
          "id": 6,
          "name": "fifák",
          "eventId": 1,
          "ranking": 1,
          "paymentDate": "1900-01-01T00:00:00",
          "pointsSemi": 15,
          "points": 207,
          "tipsScoreDiff": 6,
          "tipsDraw": 3,
          "tipsWin": 18,
          "tipsExactResult": 13,
          "tipsCount": 64,
          "rankingPrev": 1
        },
        {
          "id": 7,
          "name": "glotz",
          "eventId": 1,
          "ranking": 10,
          "paymentDate": "1900-01-01T00:00:00",
          "pointsSemi": 5,
          "points": 172,
          "tipsScoreDiff": 7,
          "tipsDraw": 5,
          "tipsWin": 21,
          "tipsExactResult": 8,
          "tipsCount": 64,
          "rankingPrev": 10
        }
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
@import '../../../public/css/config.less';
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
  font-size: 0.85rem;
  tr:first-child td {
    border-top: 0;
  }

  th {
    border-top: 0;
    border-bottom-width: 1px;
  }

  i {
    font-size: 0.85rem;
    margin-left: @spacer * 2;

    &.fa-chevron-up {
      color: green;
    }

    &.fa-chevron-down {
      color: red;
    }
  }
}

</style>
