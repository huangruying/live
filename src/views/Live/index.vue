<template>
  <div :class="`live ${isSousuo?'live_sousuo':''} ${workIsSousuo?'live_sousuo1':''} ${workIsSousuo&&isSousuo?'live_sousuo2':''}`">
      <div class="live_left">
          <div class="teach_video"  v-if="!isLookStudent">
            <img src="@/assets/images/img1.png" alt="">
            <div class="my_video"><img src="@/assets/images/teach.png" alt=""></div>
          </div>

          <div class="look_student" v-if="isLookStudent">
            <ul>
              <li v-for="item in 6" :key="item"></li>
            </ul>
            <div>
              <el-pagination
                background
                :pager-count='5'
                layout="prev, pager, next"
                :total="60">
              </el-pagination>
              <div class="go_back" @click="goBack">返回</div>
            </div>
          </div>

          <div class="study_work_list">
            <div @click="workSousuo">
              <span>作业展示：共66份</span>
              <span>
                <i :class="`iconfont icon-fenye-shangyiye1`"></i>
              </span>
            </div>
            <ul class="rests_video_wrap">
              <li class="one"><img src="@/assets/images/img2.png" alt=""></li>
              <li><img src="@/assets/images/img3.png" alt=""></li>
              <li><img src="@/assets/images/img4.png" alt=""></li>
              <li><img src="@/assets/images/img5.png" alt=""></li>
              <li><img src="@/assets/images/img6.png" alt=""></li>
              <li><img src="@/assets/images/img7.png" alt=""></li>
              <li><img src="@/assets/images/img7.png" alt=""></li>
              <li><img src="@/assets/images/img7.png" alt=""></li>
            </ul>
          </div>

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
      </div>

      <div class="live_right">
        <div>
          <ul>
            <li v-for="item in 30" :key="item">
              <span><img src="./../../assets/images/study_head.png" alt=""></span>
              学生昵称
            </li>
          </ul>
          <div class="look_study" @click="lookAllStudent">查看学员</div>
          <div class="sousuo_icon" @click="sousuoList"><img src="@/assets/images/sousuo.png" alt=""></div>
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
        sendHome:false,
        settting:false,
        isSousuo:false,
        workIsSousuo:false,
        isLookStudent:false,
        showDownload:false,
        showSubmitHomework:false
      }
    },
    methods:{
      Settting(){
        this.settting = true;
      },
      SendHome(){
        this.sendHome = true;
      },
      goback(){
        this.$router.go(-1);
      },
      sousuoList(){
        this.isSousuo=!this.isSousuo;
      },
      workSousuo(){
        this.workIsSousuo=!this.workIsSousuo;
      },
      goBack(){
        this.isLookStudent = false;
      },
      lookAllStudent(){
        this.isLookStudent = true;
      },
      submitHome(){
        this.showDownload = true;
      },
      downloadHome(){
        this.showSubmitHomework = true;
      },
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
@function h($px){
  @return ($px/1080px)*100vh;
}

  .live{
    width: 100%;
    min-height: 100vh;
    overflow: auto;
    background: #1b2838;
    display: flex;
    justify-content: space-between;
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
        width: 1224px;
        height: h(750px);
        margin: 14px auto;
        position: relative;
        >img{
          width:100%;
          height: 100%;
        }
      }

      .look_student{
        width:100%;
        height: h(767px);
        padding: h(87px) 50px 0;
        margin: auto;
        box-sizing: border-box;

        >ul{
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          >li{
            width: 439px;
            height: h(247px);
            margin-bottom: h(18px);
            background-color:#395372;
          }
        }
        >div{
          width: 100%;
          height: h(60px);
          margin-top: h(25px);
          font-size: 18px;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          color: rgba($color: #fff, $alpha: 0.5);

          .go_back{
            width: 110px;
            height: h(60px);
            line-height: h(60px);
            font-size: 18px;
            color: #fff;
            background: linear-gradient(180deg, #027BB4, #0E98D7);
            border: 1px solid #27AEED;
            border-radius: 4px;
          }
        }
      }

      .study_work_list{
        margin: h(11px) 14px;
        background-color: #000C21;
        >div{
          height: h(50px);
          line-height: h(50px);
          margin-left: 10px;
          padding-left: 24px;
          font-size: 18px;
          color: #FFFFFF;
          >span{
            position: relative;
            >i{
              position: absolute;
              font-size: 22px;
              margin-left: 15px;
            }
          }
        }

        .rests_video_wrap{
          height: h(170px);
          width:auto;
          overflow: hidden;
          white-space: nowrap;
          >li{
            width: 230px;
            height: h(170px);
            margin-left: 7px;
            float: left;
            cursor: pointer;
            >img{
              width:100%;
              height: 100%;
            }
          }
          >li:nth-child(1){
            margin-left: 0px;
          }
        }
      }


      .video_btn_wrap{
        width: 1415px;
        margin: h(12px) 14px 0;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        >ul{
          display: flex;
          >li{
            height: h(54px);
            font-size: 24px;
            padding: 0 18px;
            margin-right: 18px;
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
            height: h(54px);
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 17px;
            border-radius: 4px;
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
            height: h(54px);
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
        height: h(231px);
        >img{
          width:100%;
          height: 100%;
        }
      }
    }

    .live_right{
      width: 466px;
      height: 100%;
      padding: h(13px) 0 0 24px;
      background-color: #121A24; 
      >div:first-child{
        height: h(795px);
        position: relative;
        
        >ul{
          height: h(755px);
          overflow: auto;

          &::-webkit-scrollbar {
            /*滚动条整体样式*/
            width : 12px;  /*高宽分别对应横竖滚动条的尺寸*/
            height: h(1px);
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

          >li{
            width: 208px;
            height: h(70px);
            margin-top: 7px;
            margin-right: 7px;
            font-size: 22px;
            display: flex;
            align-items: center;
            cursor: pointer;
            color: #FFFFFF;
            padding-left: 20px;
            >span{
              display: inline-block;
              width: 46px;
              height: h(46px);
              margin-right: 9px;
              >img{
                width:100%;
                height: 100%;
              }
            }
          }
        }
        .look_study{
          width: 438px;
          height: h(54px);
          font-size: 24px;
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          left: 0;
          bottom: 0;
          color: #FFFFFF;
          background-color: #0A8ECB;
          visibility: hidden;
          cursor: pointer;
          &:hover{
            background-color:#33BCFC;
          }
          &:active{
            color: rgba($color: #fff, $alpha: 0.5);
            background-color:#006899;
          }
        }
        .sousuo_icon{
          position: absolute;
          top: 50%;
          left: -25px;
          transform: translateY(-50%);
          width: 40px;
          height: h(74px);
          z-index: 9999;
          cursor: pointer;
          >img{
            width:100%;
            height: 100%;
          }
        }
      }

      .eval_list{
        width: 438px;
        height: h(218px);
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
          height: h(42px);
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
          height: h(42px);
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
  .live_sousuo{
    .live_left{
      width: 100%;
      .teach_video{
        width: 1347px;
      }

      .look_student{
        padding: 26px 184px 0;
        >ul{
          >li{
            width: 504px !important;
            height: h(283px) !important;
            margin-bottom: 20px !important;
          }
        }
      }

      .rests_video_wrap{
        width: 1892px !important;
      }

      .video_btn_wrap{
        width: 1892px !important;
      }
    }


    .live_right{
      width: 0px;
      padding: 0;
      .sousuo_icon{
        position: absolute !important;
        top: 45% !important;
        left: -25px !important;
        transform: translateY(-50%) !important;
        transform: rotateZ(-180deg) !important;
      }
    }
  }

  .live_sousuo1{
    .teach_video{
      height: h(920px) !important;
    }

    .look_student{
      height: h(920px) !important;
      padding: 100px 104px 0 !important;
      >ul{
        >li{
            width: 400px !important;
            height: h(303px) !important;
          margin-bottom: 20px !important;
        }
      }
    }

    .study_work_list{
      >div{
        >span{
          >i{
            color: #66CCFF;
            transform: rotateZ(180deg);
          }
        }
      }
      .rests_video_wrap{
        height: 0px !important;
      }
    }
  }

  .live_sousuo2{
    .look_student{
      height: h(920px) !important;
      padding: h(120px) 180px 0 !important;
    }
  }

  /deep/.el-pagination{
    color: red;
    .btn-prev,.btn-next{
      width: 142px;
      height: h(60px);
      margin: 0 12px;
      background-color: #121A24;
      >i{
        font-size: 25px;
      }
      &:hover{
        color: #fff;
      }
    }
    .el-pager{
      >li{
        width: 60px;
        height: h(60px);
        line-height: h(60px);
        background-color: #121A24;
        margin: 0 12px;
        &:hover{
          color: #fff !important;
        }
      }
      .active{
        color: #66CCFF !important;
        background: #121A24 !important;
        border: 1px solid #66CCFF;
      }
    }
  }
</style>