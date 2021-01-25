<template>
  <div class="network_class_content">
    <div class="content_title"> UI设计课程-作业详情 </div>

    <ul class="content_list">
      <li :class="{'is_open':!item.isOpen}" v-for="(item,index) in workList" :key="index">
        <div class="list_title" @click="isOpenItem(index)">
          <div class="title_text">
            <div>{{item.workName}}</div>
            <div  v-if="!item.isAccomplish" class="title_progress">
              <p>截止时间：2021-02-26   12:00</p>
              <p>
                <span></span>
              </p>
            </div>
            <div class="is_ccomplish" v-if="item.isAccomplish">已完成</div>
          </div>
          <div class="title_icon"><i class="iconfont icon-fenye-shangyiye1"></i></div>
        </div>
        <div class="list_content">
          <div class="list_content_input_wrap">
            <span>作业要求:</span>
            <textarea v-model="textareaText" class="input_wrap" placeholder="请发表您对课程的评价或疑问，至少5个字哦！" cols="30" rows="10"></textarea>
          </div>

          <div class="list_content_btn_wrap">
            <div class="btn_left">
              <p><i class="iconfont icon-tijiao_Submit"></i><span>提交作业</span></p>
            </div>
            <div class="btn_right">
              <p :class="isShow?'avtive':''" @click="isShow = !isShow"><span>时间排序</span><i class="iconfont icon-paixu"></i></p>
              <p :class="isShow?'':'avtive'" @click="isShow = !isShow"><span>人气排序</span><i class="iconfont icon-paixu"></i></p>
            </div>
          </div>

          <div class="border"></div>

          <ul class="list_content_ranking_wrap">
            <li v-for="(item,index) in paihangList" :key="index">
              <div class="ranking_head">
                <span><img :src="item.picUrl" alt=""></span>
                <span>{{item.slogan}}</span>
              </div>
              <div class="ranking_title">作品标题</div>
              <div class="ranking_bottom">

                <div class="ranking_head_icon"><img src="@/assets/images/h1.png" alt=""></div>

                <div class="ranking_time">
                  <p>想静静 </p>
                  <p>02月14日    11：56</p>
                </div>
                <div class="ranking_eval">
                  <p @click="dianzang(index,item.isDianzang)">
                    <span><i :class="`iconfont icon-dianzan ${item.isDianzang?'dianzang_active':''}`"></i></span>
                    <span>{{item.dianzangNum}}</span>
                  </p>
                  <p @click="shoucang(index,item.isCouchang)">
                    <span><i :class="`iconfont icon-shoucang1 ${item.isCouchang?'shoucang_active':''}`"></i></span>
                    <span>收藏</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div> 
</template>

<script>
  export default {
    data(){
      return{
        textareaText:`选择作业包中原图，为灰色的画面填充适合的颜色。使用色彩的基础知识，考虑同类色、邻近色、对比色、互补色的使用法则进行填色。选择作业包中原图，为灰色的画面填充适合的颜色。使用色彩的基础知识，考虑同类色、邻近色、对比色、互补色的使用法则进行填色。选择作业包中原图，为灰色的画面填充适合的颜色。使用色彩的基础知识，考虑同类色、互补色的使用法则进行填色。`
        ,paihangList:[
          {
            picUrl:require('@/assets/images/zuoping1.png'),
            headUrl:require('@/assets/images/h1.png'),
            isDianzang:true,
            dianzangNum:99,
            isCouchang:true,
            slogan:''
          },
          {
            picUrl:require('@/assets/images/zuoping2.png'),
            headUrl:require('@/assets/images/h1.png'),
            isDianzang:false,
            dianzangNum:70,
            isCouchang:false,
            slogan:''
          },
          {
            picUrl:require('@/assets/images/zuoping3.png'),
            headUrl:require('@/assets/images/h1.png'),
            isDianzang:false,
            dianzangNum:99,
            isCouchang:false,
            slogan:''
          },
          {
            picUrl:require('@/assets/images/zuoping4.png'),
            headUrl:require('@/assets/images/h1.png'),
            isDianzang:false,
            dianzangNum:99,
            isCouchang:false,
            slogan:''
          }
        ],
        workList:[
          {
            isAccomplish:false,
            isOpen:true,
            workName:'【第三节】XXXX课作业（4/20）',
          },
          {
            isAccomplish:true,
            isOpen:false,
            workName:'【第三节】XXXX课作业（4/20）',
          },
          {
            isAccomplish:true,
            isOpen:false,
            workName:'【第三节】XXXX课作业（4/20）',
          }
        ],
        isShow:true
      }
    },
    methods:{
      dianzang(idx,bool){
        this.paihangList[idx].isDianzang = !this.paihangList[idx].isDianzang;
        
        if(bool){
          this.paihangList[idx].dianzangNum--;
        }else{
          this.paihangList[idx].dianzangNum++;
        }
      },

      shoucang(idx,bool){
        this.paihangList[idx].isCouchang = !this.paihangList[idx].isCouchang;
      },

      isOpenItem(idx){
        this.workList[idx].isOpen = !this.workList[idx].isOpen;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .network_class_content{
    width: 1626px;
    height: 960px;
    margin: 0px 0px 37px 0px;
    box-sizing: border-box;
    padding-left: 104px;
    padding-top: 28px;
    background: rgba($color: #000000, $alpha: 0.5);
    // background: url('~@/assets/images/home_bg1.png') no-repeat;
    // background-size: 100% 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      /*滚动条整体样式*/
      width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
      height: 1px;
    }
    &::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 10px;
      background   : #3A404E;
      
    }
    &::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      // box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      background   : transparent;
    }
    
    .content_title{
      font-size: 24px;
      color: #fff;
      padding-left: 32px;
    }

    .content_list{
      >li{
        width: 1417px;
        height: 718px;
        background: #212633;
        border-radius: 4px;
        margin-top: 19px;
        box-sizing: border-box;

        .list_title{
          height: 65px;
          background-color: #16202D;
          border-radius: 4px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #FFFFFF;
          cursor: pointer;

          .title_text{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-left: 32px;

            .title_progress{
              margin-left: 56px;
              color: #66CCFF;
              font-size: 14px;
              >p:last-child{
                width: 333px;
                height: 12px;
                margin-top: 4px;
                border-radius: 2px;
                background: #19304F;
                >span{
                  display: inline-block;
                  width: 255px;
                  height: 12px;
                  background: linear-gradient(270deg, #24BCE9, #C0F2F6);
                  border-radius: 2px;
                }
              }
            }

            .is_ccomplish{
              margin-left: 56px;
              color: #66CCFF;
              font-size: 20px;
            }
          }

          .title_icon{
            width: 44px;
            height: 44px;
            position: relative;
            right: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.5s;
            transform: rotateZ(0deg);
            transform-origin: center;
            cursor: pointer;
            >i{
              font-size: 35px;
            }
            // &:hover{
            //   color: #66CCFF;
            //   transform: rotateZ(180deg);
            // }
          }
        }

        .list_content{
          padding: 17px 30px 0;
          .list_content_input_wrap{
            width: 1359px;
            height: 143px;
            padding: 25px 36px;
            border-radius: 4px;
            font-size: 20px;
            box-sizing: border-box;
            color: #fff;
            background: #1E1F24;
            display: flex;
            >span{
              padding-top: 3px;
            }
            .input_wrap{
              width: 1200px;
              height: 90px;
              border: none;
              outline: none;
              padding: 0 10px;
              font-size: 20px;
              line-height: 30px;
              text-align: left;
              box-sizing: border-box;
              background-color: transparent;
              color: #999;
              resize: none;
              -webkit-user-select :none;
              &::-webkit-scrollbar {
                display: none; /* Chrome Safari */
              }
              -ms-overflow-style: none; /* IE 10+ */
              scrollbar-width: none; /* Firefox */
            }
          }

          .list_content_btn_wrap{
            display: flex;
            justify-content: space-between;
            >div{
              display: flex;
              margin: 27px 0px;
              box-sizing: border-box;
              background: #0F1722;
              p{
                width: 160px;
                height: 50px;
                border-radius: 4px;
                font-size: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                box-sizing: border-box;
                cursor: pointer;
                >i{
                  font-size: 22px;
                  margin-left:5px;
                }
                &:hover{
                  >i{
                    color:  #27AEED;
                  }
                }
              }
              .avtive{
                >i{
                  color: #27AEED;
                }
                border: 1px solid #27AEED;
              }
            }

            .btn_left{
              border: none;
              background: transparent;
              >p{
                background: linear-gradient(180deg, #35BEFE, #017AB2);
                >i{
                  font-size: 27px;
                  margin-left:0px;
                  margin-right:10px;
                }
                &:hover{
                background: linear-gradient(180deg, #027BB4, #0E98D7);
                  >i{
                    color: #fff;
                  }
                }
                &:active{
                  background: #006899;
                  border: 1px solid #27AEED;
                  box-shadow: 0px 4px 2px 0px rgba(9, 22, 40, 0.35);
                  color: rgba($color: #ffffff, $alpha: 0.5);
                  box-sizing: border-box;
                  >i{
                    color: rgba($color: #ffffff, $alpha: 0.5);
                  }
                }
              }
            }
          }

          .border{
            width: 1356px;
            height: 1px;
            background: #0C101A;
            border-radius: 1px;
          }

          .list_content_ranking_wrap{
            display: flex;
            justify-content: space-between;
            margin-top: 34px;
            >li{
              width: 306px;
              height: 306px;
              background: #16202D;
              border: 1px solid rgba($color: #66CCFF, $alpha: 0.7);
              border-radius: 4px;

              .ranking_head{
                width: 306px;
                height: 186px;
                background: #3399CC;
                border-radius: 4px 4px 0px 0px;
                position: relative;
                >span:first-child{
                  position: absolute;
                  left: -12px;
                  top: -6px;
                  display: block;
                  width: 330px;
                  height: 210px;
                  >img{
                    width: 100%;
                    height: 100%;
                  }
                }

                >span:last-child{
                  position: absolute;
                  left: -4px;
                  top: 11px;
                  display: block;
                  width: 112px;
                  height: 34px;
                }
              }

              .ranking_title{
                margin: 15px 14px 12px;
                font-size: 20px;
                color: #fff;
              }

              .ranking_bottom{
                display: flex;
                .ranking_head_icon{
                  width: 53px;
                  height: 53px;
                  >img{
                    width: 100%;
                    height: 100%;
                  }
                }
                .ranking_time{
                  font-size: 14px;
                  color: #fff;
                  >p:first-child{
                    margin: 10px 0 14px;
                  }
                }

                .ranking_eval{
                  display: flex;
                  margin-top: 10px;
                  margin-left: 20px;
                  >p{
                    width: 44px;
                    height: 44px;
                    cursor: pointer;
                    >span{
                      display: block;
                      font-size: 14px;
                      text-align: center;
                      color: #999999;
                      margin-bottom: 7px;
                      >i{
                        font-size: 23px;
                      }
                      .dianzang_active{
                        color: #66CCFF;
                      }

                      .shoucang_active{
                        color:  #F2890F;
                      }
                    }
                  }
                }
              }
            }

            >li:nth-child(1){
              .ranking_head{
                >span:last-child{
                  background: url('~@/assets/images/zuoping1_.png');
                  background-size: 100% 100%;
                }
              }
            }
            >li:nth-child(2){
              .ranking_head{
                >span:last-child{
                  background: url('~@/assets/images/zuoping2_.png');
                  background-size: 100% 100%;
                }
              }
            }
            >li:nth-child(3){
              .ranking_head{
                >span:last-child{
                  background: url('~@/assets/images/zuoping3_.png');
                  background-size: 100% 100%;
                }
              }
            }
          }

        }
      }

      .is_open{
        height: 65px;
        overflow: hidden;

        .list_title{
          .title_icon{
            transform: rotateZ(180deg);
            color: #66CCFF;
          }
        }
      }
    }
  }
</style>