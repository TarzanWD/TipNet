<template>
  <article class="post">
    <div class="post__side">
      {{ post.owner }}
    </div>
    <div class="post__text">
      {{ post.text }}
    </div>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../../../public/css/config.less';

.post {
  display: flex;
  flex-flow: nowrap row;
  padding-bottom: @spacer * 4;
}

.post__side {
  .header-m;
  font-size: 1rem;
  order: 0;
  display: flex;
  width: 25%;
  border-right: 1px solid @background-gray;
}

.post__text {
  order: 1;
  width: 75%;
  padding-left: @spacer * 2;
}

@media (max-width: @sm) {
  .post {
    flex-direction: column;
  }

  .post__side{
    border-right: 0;
  }
}
</style>
