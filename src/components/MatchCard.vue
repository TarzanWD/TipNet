<template>
  <div class="card">
    <div class="card-header">
      <img src="http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/FC-Barcelona-icon.png" alt="Fc Barcelona" class="logo">
      <h3> 
        <span>
            FC Barcelona    
        </span>
        – 
        <span>
            Real Madrid
        </span>
      </h3>
      <img src="http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/256/Real-Madrid-icon.png" alt="Real Madrid" class="logo">
    </div>
    <div class="card-body">
      <b>
        TIP
      </b>
      <h2>
        2 : 2
      </h2>
    </div>
    <div class="card-footer">
            <a href="#">Změnit</a>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
    @import '../../public/css/config.less';
    .card{
        display: inline-block;
        width: 100%;
        margin: @spacer 0;
        font-family: @font;

        .card-header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #fff;
            padding: @spacer * 2;

            .logo{
                max-width: @spacer * 4;
            }

            h3{
                display: inline-block;
                margin-bottom:0;
                padding: @spacer;
            }
        }

        .card-body{
            b{
                font-family: @heading-font;
            }

            h2{
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

