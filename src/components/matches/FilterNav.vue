<template>
    <nav class="nav" role="navigation">
        <div class="btn-group match-select" role="group">
            <button type="button" class="btn btn-outline-secondary" @click="filterFixturesBy('played')">Odehrané</button>
            <button type="button" class="btn btn-outline-secondary" @click="filterFixturesBy('unplayed')">Neodehrané</button>
        </div>
        <div class="btn-group match-select" role="group">
            <button type="button" class="btn btn-outline-secondary">Tipované</button>
            <button type="button" class="btn btn-outline-secondary">Nenatipované</button>
        </div>
        <div class="match-select collapse-lg">
            <label>
                Skupina:
            </label>
            <select class="form-control">
                <option>
                    Všechny
                </option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>
            </select>
        </div>
        <div class="match-select collapse-lg">
            <label>
                Bodů:
            </label>
            <select class="form-control">
                <option>
                    Všechno
                </option>
                <option>0</option>
                <option>3–4</option>
                <option>6</option>
            </select>
        </div>
    </nav>
</template>
<script>
export default {
  methods: {
    filterFixturesBy (rule) {
      this.$store.commit('filterFixturesByRule', {
        rule: rule
      })
    }
  }
}
</script>
<style lang="less" scoped>
    @import '../../../public/css/config.less';
    .nav{
        height: 5rem;
        display: flex;
        flex-flow: nowrap row;
        justify-content: flex-start;
        align-items: center;
        overflow-x: auto;
        .match-select{
            display: flex;
            align-items: center;
            padding-left: @spacer;
            &:first-child{
                padding-left: @spacer * 4;
            }
            &:last-child{
                padding-right: @spacer * 4;
            }
            label{
                margin-bottom: 0;
                padding: @spacer * 2;
                .header-m;
            }
            select{
                min-width: 120px;
            }
        }
    }
</style>
