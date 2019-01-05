<template>
  <section>
    <SectionHeader flatLeft>
      Uživatelé v této místnosti
    </SectionHeader>
    <UserTable onlyTable class="mt-3" />    
  </section>
</template>

<script>
import UserTable from '@/components/UserTable'
import SectionHeader from '@/components/SectionHeader'
export default {
  components: {
    UserTable,
    SectionHeader
  }
}
</script>
