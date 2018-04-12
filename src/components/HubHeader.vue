<template>
  <ul class="nav justify-content-start">
    <li class="nav-item">
        <button class="home-btn">
            <i class="fa fa-home fa-2x"></i>
        </button>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Zápasy</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Pořadí</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Pravidla</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Diskuze</a>
    </li>

  </ul>
</template>

<style lang="less" scoped>
    @import '../../public/css/config.less';
    .nav{
        height: 5rem;
        align-items: center;
        margin-bottom: @spacer * 5;
        font-family: @heading-font;
        background: @background-gray;
        
        .home-btn{
            height: 5rem;
            width: 5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 0;
            color: @background-gray;
            background: @cl-color;
            cursor: pointer;

            &:hover{
                background: @cl-color-lighten;
            }
        }

        li{
            padding-left: 5 * @spacer;
            
            &:first-child{
                padding-left:0;
            }

            &.active{
                font-weight: 600;
                color: @cl-color;
            }

            a{
                color: @text;
            }
        }
    }
</style>

<script>
export default {
  
}
</script>
