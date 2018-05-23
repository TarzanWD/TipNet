<template>
        <div class="card table-card">
            <div class="card-body">
                <div class="input-group">
                    <label for="user-search-box" class="header-m">
                        Hledej:
                    </label>
                    <input type="text" class="input" placeholder="Jméno hráče..." name="user-search-box">
                </div>
                <table class="table user-table table-hover">
                    <tbody>
                        <tr v-for="n in 10" :key="n">
                            <td>
                                {{n}} .
                            </td>
                            <td>
                                junior
                            </td>
                            <td>
                                150 b.
                            </td>
                        </tr>
                    </tbody>
                </table>
                <router-link type="button" class="btn btn-outline-secondary btn-lg btn-block more more--cl" to="/table" tag="button">Celé pořadí</router-link>
            </div>
        </div>

</template>
<script>
export default {}
</script>
<style lang="less" scoped>
    @import '../../public/css/config.less';
    .table-card{
        .card-header{
            background: #fff;
            padding: @spacer * 2;
            h4{
                margin-bottom:0;
                padding: @spacer;
            }
        }
        table{
            tr:first-child td{
                border-top: 0;
            }
            th{
                border-top: 0;
                border-bottom-width: 1px;
            }
        }
    }
</style>
