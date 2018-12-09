<template>
  <ul class="nav" role="navigation">
    <li class="nav-item">
        <router-link class="nav-link" to="/event">Domov</router-link>
    </li>
    <li class="nav-item">
        <router-link class="nav-link" to="/matches">Zápasy</router-link>
    </li>
    <li class="nav-item">
        <router-link class="nav-link" to="/table">Pořadí</router-link>
    </li>
    <li class="nav-item">
        <router-link class="nav-link" to="/rules">Pravidla</router-link>
    </li>
    <li class="nav-item">
        <router-link class="nav-link" to="/discussion">Diskuze</router-link>
    </li>
    <button class="collapse-btn home-btn" id="collapse-menu-btn" @click="toggleCollapseMenu()">
        <i class="fa fa-bars fa-lg"></i>
    </button>
    <div id="collapse-menu">
        <ul class="nav" role="navigation">
            <li>
                <router-link class="nav-link" to="/event">
                    Akce
                </router-link>
            </li>
            <li>
                <router-link class="nav-link" to="/matches">
                    Zápasy
                </router-link>
            </li>
            <li>
                <router-link class="nav-link" to="/table">
                    Pořadí
                </router-link>
            </li>
            <li>
                <router-link class="nav-link" to="/rules">
                    Pravidla
                </router-link>
            </li>
            <li>
                <router-link class="nav-link" to="/discussion">
                    Diskuze
                </router-link>
            </li>
        </ul>
    </div>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      collapseMenuToggled: false
    }
  },
  methods: {
    toggleCollapseMenu () {
      let collapseMenu = document.getElementById('collapse-menu')
      this.collapseMenuToggled ? collapseMenu.style.display = 'none' : collapseMenu.style.display = 'flex'
      this.collapseMenuToggled = !this.collapseMenuToggled
    }
  }
}
</script>
<style lang="less" scoped>
    @import '../../public/css/config.less';
    .nav{
        grid-area: hub-header;
        align-items: center;
        font-family: @heading-font;
        background: @background-gray;
        .nav-item{
            padding-left: 5 * @spacer;
            &:first-child{
                padding-left:0;
                margin-left: @spacer * 0.5;
            }
            a {
                color: @text;
                &.active{
                    font-weight: 600;
                }
            }
        }
        .collapse-btn{
            display: none;
            position: relative;
            top: -@spacer * 3;
            border-radius: 100%;
            .header-m;
            &:focus{
                outline: 0;
            }
        }
        .home-btn{
            height: 5rem;
            width: 5rem;
            justify-content: center;
            align-items: center;
            border: 0;
            cursor: pointer;
            text-decoration: none;
            i{
                color: @background-gray;
            }
            &.cl{
                background: var(--cl);
                &:hover{
                    background: var(--cl-lighten);
                }
            }
            &.primary{
                background: var(--theme);
                &:hover{
                    background: var(--theme-lighten);
                }
            }
        }
        #collapse-menu{
            display: none;
            justify-content: center;
            align-items: center;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1000;
            background: @black;
            ul{
                display: flex;
                flex-flow: column nowrap;
                background: transparent;
                .active{
                    display: none;
                }
                a {
                    color: @white;
                    font-size: 1.3rem;
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
                height: 4rem;
                width: 4rem;
            }
        }
    }
    @media (max-width: @sm) {
        .nav .collapse-btn{
            margin-right: 0;
        }
    }
</style>
