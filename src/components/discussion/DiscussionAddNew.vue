<template>
  <div class="add-post">
    <span class="add-post__heading">
      Váš příspěvek
    </span>
    <textarea
      class="add-post__textarea"
      rows="5"
      placeholder="..."
    />
    <button
      :class="{
        'button--submit': true,
        'button': true,
        'button--link': true
      }">
        Přidat
    </button>             
  </div>
</template>

<style lang="less" scoped>
@import '../../../public/css/config.less';

.add-post {
  display: flex;
  flex-flow: column nowrap;
  border-bottom: 1px solid @background-gray;
  width: 100%;
  margin-top: @spacer * 4;
  border-top: 1px solid @background-gray;
  padding-top: @spacer * 2;
}

.add-post__heading {
  .header-m;
  font-size: 0.95rem;
}

.add-post__textarea {
  width: 100%;
  padding-top: @spacer * 1;
  padding-right: 7rem;
  border: 0;
  transition: all .5s;
  resize: none;
}
</style>
