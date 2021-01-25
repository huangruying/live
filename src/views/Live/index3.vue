<template>
  <div class="live">
      <div class="live_left">
          <div class="teach_video"><img src="@/assets/images/img1.png" alt=""></div>
          <ul class="rests_video_wrap">
                <li><img src="@/assets/images/img2.png" alt=""></li>
                <li><img src="@/assets/images/img3.png" alt=""></li>
                <li><img src="@/assets/images/img4.png" alt=""></li>
                <li><img src="@/assets/images/img5.png" alt=""></li>
                <li><img src="@/assets/images/img6.png" alt=""></li>
                <li><img src="@/assets/images/img7.png" alt=""></li>
          </ul>
          <div class="video_btn_wrap">
              <ul>
                  <li><span><img src="@/assets/images/jushou.png" alt=""></span>举手</li>
                  <li @click="downloadHome"><span><img src="@/assets/images/fabu.png" alt=""></span>提交作业</li>
                  <li @click="submitHome"><span><img src="@/assets/images/download.png" alt=""></span> 共享文件下载</li>
              </ul>
              <div>
                <div @click="goback">退出课堂</div>
              </div>
          </div>

          <div class="my_video"><img src="@/assets/images/teach.png" alt=""></div>
      </div>

      <div class="live_right">
        <div>
          <ul>
              <li v-for="item in 30" :key="item">
                <span><img src="./../../assets/images/study_head.png" alt=""></span>
                学生昵称
              </li>
          </ul>
          <div><img src="@/assets/images/suosou.png" alt=""></div>
        </div>

        <div class="eval_list"></div>

        <div class="eval_btn_wrap">
          <div><img src="@/assets/images/@.png" alt=""></div>
          <div><img src="@/assets/images/xiao.png" alt=""></div>
          <div><input v-model="inputValue" placeholder="发送消息框" type="text"></div>
          <div :class="{'send_active':sendBtnState}">发送</div>
        </div>
      </div>

      <download :showDownload.sync="showDownload" v-if="showDownload"></download>
      <submitHomework :showSubmitHomework.sync="showSubmitHomework" v-if="showSubmitHomework"></submitHomework>
  </div>
</template>

<script>
import download from './Components/study/download.vue';
import submitHomework from './Components/study/submitHomework.vue';
  export default {
    components:{download, submitHomework},
    data(){
      return{
        inputValue:'',
        sendBtnState:false,
        showDownload:false,
        showSubmitHomework:false
      }
    },
    methods:{
      submitHome(){
        this.showDownload = true;
      },
      downloadHome(){
        this.showSubmitHomework = true;
      },
      goback(){
        this.$router.go(-1);
      }
    },
    watch:{
      inputValue(newVal){
        if(newVal.length>0){
          this.sendBtnState = true;
        }else{
          this.sendBtnState = false;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .live{
    width: 100%;
    height: 1080px;
    overflow: auto;
    background: #1b2838;
    display: flex;
    justify-content: space-between;
    position: relative;
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
    -ms-overflow-style: none; /* IE 10+ */
    scrollbar-width: none; /* Firefox */

    .live_left{
      width: 1444px;
      box-sizing: border-box;
      position: relative;
      cursor: pointer;

      .teach_video{
        width: 1444px;
        height: 811px;
        >img{
          width:100%;
          height: 100%;
        }
      }

      .rests_video_wrap{
        width: 1444px;
        margin-top: 11px;
        padding-left: 4px;
        display: flex;
        justify-content: flex-start;
        box-sizing: border-box;
        >li{
          width: 230px;
          height: 170px;
          margin-left: 10px;
          cursor: pointer;
          >img{
            width:100%;
            height: 100%;
          }
        }
      }

      .video_btn_wrap{
        width: 1444px;
        margin-top: 12px;
        padding-left: 14px;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        >ul{
          display: flex;
          >li{
            height: 54px;
            font-size: 24px;
            margin-right: 18px;
            padding: 0 18px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
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
            cursor: pointer;
            >span{
              display: inline-block;
              width: 46px;
              height: 46px;
              margin-right: 10px;
              >img{
                width:100%;
                height: 100%;
              }
            }
          }
        }
        >div{
          display: flex;
          >div{
            cursor: pointer;
          }
          >div:first-child{
            width: 54px;
            height: 54px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 17px;
            border-radius: 4px;
            background: #283A51;
            >span{
              display: inline-block;
              width: 46px;
              height: 46px;
              >img{
                width:100%;
                height: 100%;
              }
            }
          }
          >div:last-child{
            width: 186px;
            height: 54px;
            font-size: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            color: #FFFFFF;
            background: #0E86CA;
          }
        }
      }

      .my_video{
        position: absolute;
        left: 0;
        top: 0;
        width: 411px;
        height: 231px;
        >img{
          width:100%;
          height: 100%;
        }
      }
    }

    .live_right{
      width: 466px;
      padding: 13px 0 0 24px;
      background-color: #121A24;
      
      >div:first-child{
        height: 795px;
        position: relative;

        >ul{
          height: 755px;
          overflow: auto;

          &::-webkit-scrollbar {
            /*滚动条整体样式*/
            width : 12px;  /*高宽分别对应横竖滚动条的尺寸*/
            height: 1px;
          }
          &::-webkit-scrollbar-thumb {
            /*滚动条里面小方块*/
            border-radius: 10px;
            background   : #6182AB;
            
          }
          &::-webkit-scrollbar-track {
            /*滚动条里面轨道*/
            // box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
            border-radius: 5px;
            background   : #203143;
          }

          &::-webkit-scrollbar-button:vertical:decrement,::-webkit-scrollbar-button:vertical:increment{
            background: url('./../../assets/images/top1.png') no-repeat;
            background-size: 100% 100%;
          }

          >li{
            width: 208px;
            height: 70px;
            margin-top: 7px;
            margin-right: 7px;
            font-size: 22px;
            display: flex;
            align-items: center;
            cursor: pointer;
            color: #FFFFFF;
            >span{
              display: inline-block;
              width: 46px;
              height: 46px;
              margin-right: 9px;
              >img{
                width:100%;
                height: 100%;
              }
            }
          }
        }
        >div{
          
          position: absolute;
          top: 50%;
          left: -30px;
          transform: translateY(-50%);
          width: 36px;
          height: 36px;
          z-index: 9999;
          >img{
            width:100%;
            height: 100%;
          }
        }
      }

      .eval_list{
        width: 438px;
        height: 218px;
        background-color: #203143;
        border-radius: 4px;
      }

      .eval_btn_wrap{
        display: flex;
        margin-top: 4px;
        >div:nth-child(1){
          width: 40px;
          height: 40px;
          >img{
            width: 100%;
            height: 100%;
          }
        }
        >div:nth-child(2){
          width: 40px;
          height: 40px;
          >img{
            width: 100%;
            height: 100%;
          }
        }
        >div:nth-child(3){
          width: 287px;
          height: 42px;
          >input{
            width: 100%;
            height: 100%;
            font-size: 16px;
            border-radius: 4px;
            padding-left: 14px;
            outline: none;
            border: none;
            color: #fff;
            background-color: #203143;
            box-sizing: border-box;
            &::placeholder{
              color: rgba($color: #fff, $alpha: 0.5);
            }
          }
          
        }
        >div:nth-child(4){
          width: 65px;
          height: 42px;
          border-radius: 4px;
          margin-left: 6px;
          font-size: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #FFFFFF;
          background-color: #999999;
        }
        .send_active{
          background-color: #0E86CA !important;
        }
      }
    }
  }
</style>