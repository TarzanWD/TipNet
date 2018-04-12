<template>
  <div class="card">
    <div class="card-header">
      <img src="http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/FC-Barcelona-icon.png" alt="Fc Barcelona" class="logo">
      <h4> 
        <span>
            FC Barcelona    
        </span>
        <span v-if="played === false" class="divider">
            -
        </span>
        <span v-else-if="played === true" class="divider">
            0 : 3
        </span>
        <span>
            Real Madrid
        </span>
      </h4>
      <img src="http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/Real-Madrid-icon.png" alt="Real Madrid" class="logo">
    </div>
    <div class="card-body">
      <div v-if="played === false">
        <div class="heading">
            TIP
        </div>
        <h4>
            2 : 2
        </h4>
      </div>
      <div v-else-if="played === true">
        
      </div>
    </div>
    <div class="card-footer">
        <div v-if="played">
            <a href="#">Detail</a>
        </div>
        <div v-else>
            <a href="#">Změnit</a>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
      "played"
  ]
}
</script>
<style lang="less" scoped>
    @import '../../public/css/config.less';
    .card{
        display: inline-block;
        margin: @spacer @spacer * 0.5;
        font-family: @font;
        width: 49.2%;
        float: left;
        .card-header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #fff;
            padding: @spacer * 2;

            .logo{
                max-width: @spacer * 4;
            }

            h4{
                display: inline-block;
                margin-bottom:0;
                padding: @spacer;
                
                .divider{
                    margin: 0 @spacer*2;
                }
            }
        }

        .card-body{
            .tip{
                display: inline-block;
                width: 80%;
            }
            .points{
                display: inline-block;
                width:20%;
                background: red;
            }
            .heading{
                font-family: @heading-font;
                font-weight: 600;
                display: inline-block;
                width:100%;
            }

            h4{
                text-align: center;
            }
        }

        .card-footer{
            display: flex;
            justify-content: center;
            align-items: center;
            background:@cl-color;
            cursor: pointer;

            a{
                color: @background-gray;
                text-transform: uppercase;
                text-decoration: none;   
            }

            &:hover{
                background: @cl-color-lighten;  
            }
        }
    }
    @media (max-width: @xxl) {
       .card .card-header h3{
          font-size: 1.5rem;
       } 
    }
</style>

