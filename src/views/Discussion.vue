<template>
    <div class="grid">
        <app-header></app-header>
        <main role="main" class="content">
            <hub-header></hub-header>
            <h5 class="section-header discussion-h">
                Diskuze
            </h5>
            <discussion :fullDiscussion="true"></discussion>
        </main>
        <app-footer></app-footer>
    </div>
</template>
<script>
import AppHeader from '@/layout/AppHeader.vue'
import AppFooter from '@/layout/AppFooter.vue'
import HubHeader from '@/layout/HubHeader.vue'
import DiscussCard from '@/components/DiscussCard.vue'
export default {
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter,
    'hub-header': HubHeader,
    'discussion': DiscussCard
  }
}
</script>
<style lang="less" scoped>
    @import '../../public/css/config.less';
    .content{
        grid-template-rows: 5rem 3rem auto 3rem;
        grid-template-columns: @spacer * 4 1fr @spacer * 4;
        grid-template-areas:
            ". hub-header ."
            ". discussion-h ."
            ". discussion ."
            ". . .";
        .discussion-h{
            grid-area: discussion-h;
        }
    }
    @media (max-width: @md) {
        .content{
            grid-template-rows: 3rem 3rem auto 3rem;
        }
    }
    @media (max-width: @sm) {
        .content{
            grid-template-columns: @spacer 1fr @spacer;
        }
    }
</style>
