<template>
        <div class="card table-card">
            <div class="card-body">
                <table class="table user-table">
                    <tbody>
                        <tr v-for="n in 10">
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
                <a class="more">
                    Celé pořadí
                </a>
            </div>
        </div>                            
  
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
    @import '../../public/css/config.less';
    .table-card{
        margin: @spacer @spacer * 0.5;

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

