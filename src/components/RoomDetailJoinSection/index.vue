<template>
  <section class="join-room">
    <SectionHeader flatLeft>
      Přidej se
    </SectionHeader>
    <p class="join-room__subtitle" v-if="open">
      Tato místnost je volně přístupná. Každý se může přidat a začít tipovat.
    </p>
    <p class="join-room__subtitle" v-else>
      Tato místnost je uzavřená. Dostat do ní se lze přijmutím pozvánky od zakladatele nebo přijmutím vaší žádosti zakladatelem.
    </p>
    <Textarea placeholder="Info pro admina navíc..."/>
    <footer class="join-room__footer">
      <Button cl>
        Přidat se
      </Button>
      <Button>
        Zpět
      </Button>
    </footer>
  </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader'
import Button from '@/components/Button'
import Textarea from '@/components/Textarea'
export default {
  components: {
    SectionHeader,
    Button,
    Textarea
  },
  data () {
    return {
      open: false
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../public/css/config.less';

.join-room {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  padding: @spacer * 4;
  background: @background-gray;
  border-radius: 1rem;
  margin-top: @spacer * 4;
  margin-bottom: @spacer * 6;
}

.join-room__subtitle {
  margin: @spacer * 2.5 0;
  text-align: center;
}

.join-room__footer {
  margin-top: @spacer * 2.5;
}

</style>

