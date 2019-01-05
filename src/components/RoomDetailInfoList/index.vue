<template>
  <section class="info-list">
    <SectionHeader flatLeft>
      Základní info
    </SectionHeader>
    <div class="list">
      <div class="list__item" v-for="item in info" :key="item.id">
        <span>
          {{ item.label }}
        </span>
        <span>
          {{ item.value }}
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader'
export default {
  components: {
    SectionHeader,
  },
  data () {
    return {
      info: [
        {
          id: 0,
          label: 'Vstupní částka',
          value: '200 CZK'
        },
        {
          id: 1,
          label: 'Členové',
          value: '20/34'
        },
        {
          id: 2,
          label: 'Lokalizace',
          value: 'Česká'
        },
        {
          id: 3,
          label: 'Admin',
          value: 'test_user_1'
        },
        {
          id: 4,
          label: 'Datum uzavreni',
          value: '12.12.2020'
        },
        {
          id: 5,
          label: 'Datum splatnosti vkladu',
          value: '20.12.2020'
        },
        {
          id: 6,
          label: 'Celkem tipů',
          value: '20'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../public/css/config.less';

.info-list {
  color: @black;
  margin: @spacer * 4 0;
}

.list {
  margin: @spacer * 2 0;
}

.list__item {
  display: flex;
  justify-content: space-between;
  padding-bottom: @spacer / 2.5;

  span:last-child {
    .header-m;
  }
}

</style>

