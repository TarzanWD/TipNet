<template>
  <Card>
    <nav
      class="nav"
      role="navigation"
    >
      <ButtonGroup>
        <Button
          cl
          outline
          @click="filterFixturesBy('played')"
        >
          Odehrané
        </Button>
        <Button
          cl
          outline
          @click="filterFixturesBy('unplayed')"
        >
          Neodehrané
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          cl
          outline
        >
          Tipované
        </Button>
        <Button
          cl
          outline
        >
          Nenatipované
        </Button>
      </ButtonGroup>
      <div class="match-select collapse-lg">
        <label>
          Skupina:
        </label>
        <select class="form-control select">
          <option>
            Všechny
          </option>
          <option>A</option>
        </select>
      </div>
      <div class="match-select collapse-lg">
        <label>
          Bodů:
        </label>
        <select class="form-control select">
          <option>
            Všechno
          </option>
        </select>
      </div>
    </nav>
  </Card>
</template>
<script>
import Button from '@/components/Button'
import ButtonGroup from '@/components/ButtonGroup'
import Card from '@/components/Card'
export default {
  components: {
    Button,
    ButtonGroup,
    Card
  },
  methods: {
    filterFixturesBy (rule) {
      alert('works')
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../../public/css/config.less';
.nav {
    height: 5rem;
    display: flex;
    flex-flow: nowrap row;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
    margin: 0 @spacer * 2;
}

.match-select {
  display: flex;
  align-items: center;
  padding-left: @spacer;

  &:first-child {
    padding-left: @spacer * 4;
  }

  &:last-child {
    padding-right: @spacer * 4;
  }

  label {
    .header-m;
    margin-bottom: 0;
    padding: @spacer * 2;
  }

  select {
    min-width: 120px;
    border-radius: 25px;
  }
}
</style>
