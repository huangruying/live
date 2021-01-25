<template>
  <div class="download">
    <div class="download_wrap">
      <div class="download_head">
        <p>发布作业</p>
        <p @click="closePage">x</p>
      </div>

      <div class="download_content">
        <ul>
          <li>
            <p>作业名称</p>
            <p><input type="text" placeholder="请输入作业名称"></p>
          </li>
          <li>
            <p>时间</p>
            <p><input type="text" placeholder="请输入阿拉伯数字，如15分钟则填写15,1小时则填写60。"></p>
          </li>
          <li>
            <p>作业要求</p>
            <p><input type="text" placeholder="请输入作业要求"></p>
          </li>
          <li class="material_uploading">
            <p>素材上传</p>
            <p>
              <span>点击上传<input type="file"></span>
              <span>从中转站选择<input type="file"></span>
            </p>
          </li>
          <li class="file_demand">
            <p>文件要求：</p>
            <p>
              <span>图片：jpeg、png；不大于10MB </span>
              <span>视频：mp4；不大于500MB </span>
              <span>压缩文件：rar、zip；不大于500MB</span>
            </p>
          </li>
        </ul>
      </div>

      <div class="download_btn">
        <p @click="closePage">取消</p>
        <p>保存</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      sendHome:{
        type:Boolean
      }
    },
    data(){
      return{
        kejianArr:['课件1','课件2','课件3','课件4','课件5'],
        kejianName:'课件1'
      }
    },
    methods:{
      cutKejian(name){
        this.kejianName = name;
      },
      closePage(){
        this.$emit('update:sendHome',false);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .download{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;

    .download_wrap{
      width: 646px;
      height: 701px;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      background-color: #395372;

      .download_head{
        width: 646px;
        height: 54px;
        padding: 0 27px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #FFFFFF;
        font-size: 24px;
        background-color: #333333;
        >p:last-child{
          width: 50px;
          height: 50px;
          line-height: 50px;
          text-align: right;
          cursor: pointer;
        }
      }

      .download_content{
        width: 615px;
        height: 480px;
        overflow: auto;
        margin: 30px auto 0;
        padding: 14px 14px;
        border: 2px solid #283A51;
        border-radius: 4px;
        box-sizing: border-box;
        
        >ul{
          >li{
            display: flex;
            align-items: center;
            margin-bottom: 18px;
            >p:first-child{
              width: 110px;
              text-align: left;
              font-size: 18px;
              color: #fff;
            }
            >p:last-child{
              height: 46px;
              width: 490px;
              position: relative;
              >input{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                outline: none;
                border: none;
                font-size: 18px;
                color: #fff;
                padding-left: 14px;
                background: #283A51;
                border-radius: 4px;
                box-sizing: border-box;
                &::placeholder{
                  color: #999999;
                }
              }
            }
          }

          .material_uploading{
            margin-top: 48px;
            margin-bottom: 55px;
            >p:last-child{
              display: flex;
              >span{
                display: inline-block;
                width: 140px;
                height: 46px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 18px;
                border-radius: 4px;
                color: #FFFFFF;
                position: relative;
                background: url('~@/assets/images/btn2.png') no-repeat;
                background-size: 100% 100%;
                &:hover{
                  background: url('~@/assets/images/btn1.png') no-repeat;
                  background-size: 100% 100%;
                }
                &:active{
                  color: rgba($color: #fff, $alpha: 0.5);
                  background: url('~@/assets/images/btn3.png') no-repeat;
                  background-size: 100% 100%;
                }
                
                >input{
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                  opacity: 0;
                  cursor: pointer;
                }
              }
              >span:first-child{
                margin-right: 127px;
              }
            }
          }

          .file_demand{
            display: flex;
            align-items: flex-start;
            >p:last-child{
              >span{
                display: inline-block;
                font-size: 18px;
                color: rgba($color: #FFFFFF, $alpha: 0.5);
                margin-bottom: 20px;
              }
            }
          } 
        }
      }

      .download_btn{
        padding: 42px 20px;
        display: flex;
        justify-content: space-between;
        >p{
          width: 168px;
          height: 60px;
          line-height: 60px;
          border-radius: 4px;
          font-size: 24px;
          text-align: center;
          color: #FFFFFF;
          cursor: pointer;
          background: url('~@/assets/images/btn2.png') no-repeat;
          background-size: 100% 100%;
          &:hover{
            background: url('~@/assets/images/btn1.png') no-repeat;
            background-size: 100% 100%;
          }
          &:active{
            color: rgba($color: #fff, $alpha: 0.5);
            background: url('~@/assets/images/btn3.png') no-repeat;
            background-size: 100% 100%;
          }
        }
        >p:first-child{
          color: #FFFFFF;
          background: #283A51;
          border-radius: 4px;
          box-sizing: border-box;
          border: 1px solid transparent;
          &:hover{
            background: #283A51;
            border: 1px solid #00AEFF;
            border-radius: 4px;
          }
        }
      }
    }
  }
</style>