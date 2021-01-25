<template>
  <div class="download">
    <div class="download_wrap">
      <div class="download_head">
        <p>作业类型</p>
        <p @click="closePage">x</p>
      </div>

      <div class="download_content">
        <div>
          <el-select v-model="value">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div>点击上传 <input type="file"></div>
        <div>文件要求：</div>
        <div>图片：jpeg、png；不大于10MB</div>
        <div>视频：mp4；不大于500MB</div>
        <div>压缩文件：rar、zip；不大于500MB</div>
      </div>

      <div class="download_btn">
        <p @click="closePage">取消</p>
        <p>确认</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      showSubmitHomework:{
        type:Boolean
      }
    },
    data(){
      return{
        kejianArr:['课件1','课件2','课件3','课件4','课件5'],
        kejianName:'课件1',
        options: [{
          value: '图片',
          label: '图片'
        },{
          value: '视频',
          label: '视频'
        },{
          value: '压缩文件',
          label: '视压缩文件频'
        },],
        value: '图片',
      }
    },
    methods:{
      cutKejian(name){
        this.kejianName = name;
      },
      closePage(){
        this.$emit('update:showSubmitHomework',false);
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
      height: 583px;
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
        height: 343px;
        overflow: auto;
        margin: 30px auto 0;
        padding: 14px 8px;
        border: 2px solid #283A51;
        border-radius: 4px;
        box-sizing: border-box;

        -webkit-user-select :none;
        &::-webkit-scrollbar {
          display: none; /* Chrome Safari */
        }
        -ms-overflow-style: none; /* IE 10+ */
        scrollbar-width: none; /* Firefox */

        >div:nth-child(1){
          width: 591px;
          height: 46px;
          line-height: 46px;
          border-radius: 4px;
          color: #66CCFF;
          background: #283A51;
          box-sizing: border-box;
          position: relative;
          cursor: pointer;

          /deep/.el-select{
            .el-input{
              .el-input__inner{
                height: 46px;
                width: 591px;
                font-size: 18px;
                color: #fff;
                background-color: #283A51;
                border: 1px solid transparent;
                border-radius: 4px;
                &::placeholder{
                  color: #fff;
                }
              }
            }

            .el-select__caret{
              &::before{
                color: #fff;
                font-size: 20px;
                content: '\e78f';
              }
            }
            .is-reverse{
              &::before{
                color: #00AEFF !important;
                font-size: 20px;
                content: '\e78f';
              }
            }
          }
        }
        >div:nth-child(2){
          width: 130px;
          height: 48px;
          line-height: 48px;
          margin: 15px 0 35px;
          border-radius: 4px;
          font-size: 22px;
          text-align: center;
          color: #FFFFFF;
          position: relative;
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

          >input{
            opacity: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            cursor: pointer;
          }
        }
        >div:nth-child(n+3){
          font-size: 18px;
          color: #FFFFFF;
          opacity: 0.5;
          margin-bottom: 15px;
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
          color: #66CCFF;
          background: #283A51;
          cursor: pointer;
        }
        >p:last-child{
          color: #FFFFFF;
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