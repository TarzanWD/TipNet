<template>
  <div class="card discussion">
      <div class="card-body">
          <div class="post">
                <div class="side">
                    <h5>
                        junior
                    </h5>
                </div>
                <div class="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate egestas diam a mollis. Fusce semper ex at suscipit dictum. Nam faucibus non orci sit amet ornare. Curabitur elementum posuere augue, vel hendrerit purus ornare nec. Sed fermentum et arcu quis suscipit. Pellentesque sodales, massa vel semper iaculis, lorem nisi sagittis turpis, non auctor libero elit auctor nulla.
                </div>
          </div>
          <div class="post">
                <div class="side">
                    <h5>
                        junior
                    </h5>
                </div>
                <div class="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
          </div>
          <div class="add-post">
              <span class="title">
                  Váš příspěvek
              </span>
              <textarea rows="5"></textarea>
          </div>
          <button type="button" class="btn btn-outline-secondary btn-lg btn-block more">Celá diskuze</button>
      </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
    @import '../../public/css/config.less';
    .discussion{
        grid-area: discussion;
        .post{
            display: flex;
            flex-flow: nowrap row;
            padding-bottom: @spacer * 4;
            .side{
                order: 0;
                display: flex;
                width: 20%;
                border-right: 1px solid @background-gray;
                h5{
                    .header-m;
                    font-size: 1rem;
                }
            }
            .text{
                order: 1;
                width: 80%;
                padding-left: @spacer * 2;
            }
        }
        .add-post{
            display: inline-block;
            width: 100%;
            margin-top: @spacer * 4;
            border-top: 1px solid @background-gray;
            padding-top: @spacer * 2;
            .title{
                display: block;
                .header-m;
                font-size: 0.8rem;
            }
            textarea{
                width: 100%;
                padding-top: @spacer * 1;
                border: 0;
                border-bottom: 1px solid @background-gray;
                transition: all .5s;
                resize: none;
                &:focus{
                    outline: 0;
                    border-bottom: 1px solid @black;
                }
            }
        }
    }
    @media (max-width: @sm) {
        .discussion .post{
            flex-direction: column;
            .side{
                border-right: 0;
            }
        }
    }
</style>