<template>
  <div>
    <SectionHeader>
      Hledejte
    </SectionHeader>
    <input
      type="text"
      class="search-bar"
      placeholder="Zadejte název místnosti..."
    />
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader'
export default {
  components: {
    SectionHeader
  }
}
</script>


<style lang="less" scoped>
@import '../../../public/css/config.less';

.search-bar {
  width: 100%;
  border: 0;
  border-radius: 1rem;
  background: @background-gray;
  padding: @spacer @spacer * 3;
  margin-bottom: @spacer * 3;
}
</style>
