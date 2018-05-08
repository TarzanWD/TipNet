<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style lang="less">
  @import '../public/css/config.less';
  :root{
    --theme: #0C2F54;
    --theme-lighten:lighten(#0C2F54, 5%);
  }
  #app{
    font-family: @font;
    background: @background-gray-darker;
  }
  .grid{
      display: grid;
      grid-template-rows: (@spacer*50) auto (@spacer*10);
      grid-template-columns: (@spacer*10) auto (@spacer*10);
      width:100%;
      grid-template-areas:
              "poster poster poster"
              ". content ."
              "footer footer footer";
  }
  .content{
      grid-area: content;
      position: relative;
      z-index: 10;
      background: @background-gray;
      margin-top: -10 * @spacer;
      display: grid;
      .input{
          position: relative;
          width: 100%;
          box-sizing: border-box;
          border: 0;
          border-bottom: 1px solid @background-gray;
          padding: @spacer;
          transition: all .5s;
          &:focus{
              outline: 0;
              border-bottom: 1px solid @black;
          }
      }
      .card{
          margin: @spacer * 0.5 @spacer * 0.5 0 @spacer * 0.5;
          display: flex;
          flex-flow: column nowrap;
          justify-content: space-between;
      }
      .card-list{
          display: flex;
          flex-flow: row wrap;
          .card{
              width: 49%;
          }
      }
      .section-header{
          .header-m;
          display: flex;
          align-items: center;
          font-size: 1rem;
          margin-top: @spacer;
          margin-bottom: 0;
          margin-left: @spacer * 3;
      }
      .more{
          grid-area: more-btn;
          display: inline-block;
          width: 99%;
          border-top: 0;
          border-color: var(--theme);
          color: var(--theme);
          margin: @spacer * 2 @spacer * 0.5;
          border-radius: 0 0 3px 3px;
          &:hover{
              background: var(--theme);
              color: @white;
          }
          &.inverted{
              border-radius: 3px 3px 0 0 ;
              border-top: 1px solid var(--theme);
              border-bottom: 0;
              margin-top: @spacer * 0.5;
          }
      }
      .badge{
          border: 1px solid @background-gray;
          font-size: 1rem;
          background: var(--theme);
          color: @background-gray;
          .header-m;
      }
      .table{
          width: 100%;
          th{
              text-align: center;
              .header-m;
              font-size: 0.9rem;
              border-bottom: 1px solid @background-gray;
              border-top: 0;
              &:first-child{
                  text-align: left;
              }
          }
          td{
              vertical-align: middle;
              text-align: center;
          }
          tr{
              cursor: pointer;
          }
          .date{
              text-align: center;
          }
          .team{
              text-align: right;
              .team-badge{
                  display: inline-block;
                  max-width: @spacer * 4;
                  margin: 0 @spacer * 2;
              }
          }
          .separator{
              text-align: center;
          }
          .points{
              text-align: center;
              font-size: 1.3rem;
              &.green{
                  background: @green;
                  color: @background-gray;

              }
              &.orange{
                  background: @orange;
                  color: @background-gray;
              }
          }
      }
  }
  @media (max-width: @xxl) {
      .grid{
          grid-template-areas:
              "poster poster poster"
              "content content content"
              "footer footer footer";
      }
      .card-list .card{
          //its 11:32 PM
          width: 100% !important;
      }
  }
  @media (max-width: @lg) {
      .grid{
          grid-template-rows: @spacer * 35 auto @spacer * 10;
      }
  }
  @media (max-width: @sm) {
      .grid{
          grid-template-rows: @spacer * 17 auto @spacer * 10;
      }
  }
</style>
