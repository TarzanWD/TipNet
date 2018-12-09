<template>
  <div class="card discussion">
    <div class="card-body">
      <discussion-post :post="{ owner: 'junior', text: 'Hello world'}"/>
      <discussion-add-new />   
      <router-link
        type="button"
        class="btn btn-outline-secondary btn-lg btn-block more more--cl"
        to="/discussion"
        tag="button"
        v-show="!fullDiscussion"
      >
        Celá diskuze
      </router-link>
    </div>
  </div>
</template>

<script>
import DiscussionPost from './discussion/DiscussionPost'
import DiscussionAddNew from './discussion/DiscussionAddNew'
export default {
  components: {
    'discussion-post': DiscussionPost,
    'discussion-add-new': DiscussionAddNew
  },
  props: [
    'fullDiscussion'
  ],
  computed: {
    commentsToRender () {
      return this.fullDiscussion ? 5 : 3
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../public/css/config.less';

.discussion{
  grid-area: discussion;
}

.button--submit {
  color: var(--cl);
}
</style>
