<template>
  <ul class="nav">
    <li class="nav-item">
        <router-link class="home-btn d-flex" to="/">
            <i class="fa fa-home fa-2x"></i>
        </router-link>
    </li>
    <li class="nav-item">
        <router-link class="nav-link" to="/matches">Zápasy</router-link>
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
    <button class="collapse-btn home-btn">
        MENU
    </button>
  </ul>
</template>

<style lang="less" scoped>
    @import '../../public/css/config.less';
    .nav{
        grid-area: hub-header;
        align-items: center;
        font-family: @heading-font;
        background: @background-gray;
        .collapse-btn{
            display: none;
            .header-m;
        }
        .home-btn{
            height: 5rem;
            width: 5rem;
            justify-content: center;
            align-items: center;
            border: 0;
            color: @background-gray;
            background: @cl-color;
            cursor: pointer;
            text-decoration: none;
            &:hover{
                background: @cl-color-lighten;
            }
        }

        li{
            padding-left: 5 * @spacer;
            &:first-child{
                padding-left:0;
                margin-left: @spacer * 0.5;
            }

            a{
                color: @text;
                &.active{
                    font-weight: 600;
                }
            }
        }
    }
    @media (max-width: @md) {
        .nav-item{
            display: none;
        }
        .nav{
           justify-content: flex-end; 
            .collapse-btn{
                display: flex;
                margin-right: @spacer * 0.5;
            }
        }
    }
</style>

<script>
export default {

}
</script>
