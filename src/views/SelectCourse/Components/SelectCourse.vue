<template>
  <div class="network_class">
    <div class="nav">
      <ul class="nav_wrap">
        <div>我的课程</div>
        <li v-for="(item,index) in myCourse" @click="cutMyCourse(item)" :class="{'active':myCourseName==item}" :key="index">
          <span><img src="@/assets/images/ps.png" alt=""></span>
          {{item}}
        </li>
      </ul>
      <ul class="nav_wrap2">
        <div>推荐课程</div>
        <li v-for="(item,index) in recommendCourse" @click="cutMyCourse(item)" :class="{'active':myCourseName==item}" :key="index">
          <span><img src="@/assets/images/ps.png" alt=""></span>
          {{item}}
        </li>
      </ul>
    </div>
    <div class="network_class_content">
        <div class="classify_wrap">
          <ul>
            <li><span @click="cutName1(ele)" v-for="(ele,idx) in classifyList1" :class="{'active':classifyList1Name==ele}" :key="idx">{{ele}}</span></li>
            <li><span @click="cutName2(ele)" v-for="(ele,idx) in classifyList2" :class="{'active':classifyList2Name==ele}" :key="idx">{{ele}}</span></li>
            <li><span @click="cutName3(ele)" v-for="(ele,idx) in classifyList3" :class="{'active':classifyList3Name==ele}" :key="idx">{{ele}}</span></li>
            <li><span @click="cutName4(ele)" v-for="(ele,idx) in classifyList4" :class="{'active':classifyList4Name==ele}" :key="idx">{{ele}}</span></li>
          </ul>
        </div>
        
        <div class="select_course">
          <div class="select_course_header">
              <div class="select_item" v-for="(item,index) in selectCourseClassify" :key="index" :class="{'select_active':selectCourse==item}" @click="selectActive(item)">{{item}}</div>
              <div class="select_item sort_icon" @click="selectActive('价格')" :class="{'select_active':selectCourse=='价格'}">
              <span>价格</span>
                <span>
                  <i :class="`el-icon-caret-top ${sortTop?selectCourse=='价格'?'icon_active':'':''}`" ></i>
                  <i :class="`el-icon-caret-bottom ${sortTop?'':selectCourse=='价格'?'icon_active':''}`"></i>
                </span>
              </div>
            </div>
            <div class="select_course_content">
                <ul >
                    <li v-for="(item,index) in curList" :key="index" @click="openCourseDetails" >
                      <!-- @click="openCourseDetails" -->
                        <div class="course_img"><img src="@/assets/images/kecheng1.png" alt=""></div>
                        <div class="course_introduce">
                            <p class="course_name">课程标题</p>
                            <p class="course_time">开课时间：12月16日开播</p>
                            <p class="course_price">
                                <span>难度：零基础入门</span>
                                <span>￥3692</span>
                            </p>
                            <p class="course_teacher">
                                <span>想静静 </span>
                                <span>9999人已报名</span>
                            </p>
                        </div>
                        <div class="cur_detail">{{item}}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div> 
  </div>
</template>

<script>
  export default {
    data(){
      return{
        myCourseName:'课程A',
        myCourse:['课程A','课程B','课程C','课程D'],
        recommendCourse:['推荐课程A','推荐课程B','推荐课程C','推荐课程D'],
        classifyList1:['板块分类：','全部','平面设计','绘画插画','电商设计','UI设计','摄影技术'],
        classifyList2:['职业分类：','全部','CG原画师','插画师','UI设计师','数字角色建模师'],
        classifyList3:['软件分类：','全部','PS','AI','C4D','UE4','3Dmax'],
        classifyList4:['学习难度：','全部','零基础','初级','中级','高级'],
        classifyList1Name:'绘画插画',
        classifyList2Name:'数字角色建模师',
        classifyList3Name:'全部',
        classifyList4Name:'零基础',
        selectCourseClassify:['综合','最新课程','最多购买'],
        selectCourse:'综合',
        sortTop:true,
        curList:['直播 + 录播','直播','直播','直播','直播 + 录播','直播','直播','直播','直播 + 录播','直播','直播','直播']
      }
    },
    methods:{
      cutMyCourse(name){
        this.myCourseName = name;
      },
      cutName1(name){
          if(name=='板块分类：'){return;}
          this.classifyList1Name = name;
      },
      cutName2(name){
          if(name=='职业分类：'){return;}
          this.classifyList2Name = name;
      },
      cutName3(name){
          if(name=='软件分类：'){return;}
          this.classifyList3Name = name;
      },
      cutName4(name){
          if(name=='学习难度：'){return;}
          this.classifyList4Name = name;
      },
      selectActive(name){
          this.selectCourse = name;
          if(name == '价格'){
            this.sortTop = !this.sortTop;
            return;
          }
          this.sortTop = true;
      },
      openCourseDetails(){
        this.$router.push({name:'Live'});
        // this.$emit('cutPageName','CourseCatalog');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .network_class{
    width: 100%;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    background: rgba($color: #000000, $alpha: 0.7);

    .nav{
      width: 294px;
      min-height: 100%;
      background: #000B1F;
      border: 1px solid #333333;
      box-sizing: border-box;

      .nav_wrap,.nav_wrap2{
        color: rosybrown;
        >div{
            width: 100%;
            height: 78px;
            border-top: 1px solid #333333;
            border-bottom: 1px solid #333333;
            font-size: 30px;
            font-weight: 500;
            color: #66CCFF;
            background: rgba(8, 19, 29, 0.5);
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        >li{
          width: 100%;
          height: 65px;
          display: flex;
          align-items: center;
          padding-left: 41px;
          font-size: 24px;
          color: #666666;
          box-sizing: border-box;
          position: relative;
          cursor: pointer;
          &:hover{
            color: #FFFFFF;
            background: rgba($color: #141D30, $alpha: 0.5);
          }
          >span{
            display: inline-block;
            width: 46px;
            height: 46px;
            margin-right: 19px;
            >img{
              width: 100%;
              height: 100%;
            }
          }
        }

        .active{
          color: #FFFFFF;
          background: #131F31;
          &::before{
            content: '';
            display: block;
            width: 4px;
            height: 65px;
            background-color: #0686C1;
            position: absolute;
            left: 0;
            top: 0;
          }
        }
      }

      .nav_wrap2{
        margin-top: 51px;
      }
    }

    .network_class_content{
      width: 1626px;
      height: 960px;
      overflow: auto;
      box-sizing: border-box;
      padding: 0 141px;

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
      
      .classify_wrap{
        width: 100%;
        padding-top: 32px;
        box-sizing: border-box;

        >ul{
            >li{
                width: 100%;
                height: 84px;
                border-bottom: 1px solid #336699;
                display: flex;
                align-items: center;
                >span:first-of-type{
                  font-size:24px;
                  color: #FFFFFF;
                  margin-right: 50px;
                }
                >span:nth-of-type(n+2){
                  padding: 0 45px;
                  font-size: 22px;
                  color: #999999;
                  cursor: pointer;
                  &:hover{
                    color: #FFFFFF;
                  }
                }
                .active{
                    height: 50px;
                    color: #FFFFFF !important;
                    background: #0E86CA;
                    border-radius: 4px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    >span{
                      
                    }
                }
            }
        }
      }

      .select_course{
        margin: 58px 0px 0;
        box-sizing: border-box;
        position: relative;
        .select_course_header{
            display: flex;
            align-items: center;
            border-bottom: 8px solid #0E86CA;
            /* position: fixed; */
            .select_item{
                width: 173px;
                height: 66px;
                font-size: 26px;
                color: #999999;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                &:hover{
                  color: #fff;
                }
            }
            .select_active{
                border-radius: 4px 4px 0px 0px ;
                color: #fff;
                background: #0E86CA;
            }
            .sort_icon{
              >span:last-child{
                margin-left: 5px;
                >i{
                  display: block;
                  height: 12px;
                  font-size: 16px;
                  color: #999999;
                  &::before{
                    height: 2px;
                    overflow: hidden;
                  }
                }
                .icon_active{
                  color: #fff;
                }
              }
            }
        }

        .select_course_content{
            margin: 57px 00px;
            >ul{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                >li{
                    width: 306px;
                    height: 346px;
                    margin-bottom: 35px;
                    border-radius: 4px;
                    box-sizing: border-box;
                    background: #16202D;
                    position: relative;
                    cursor: pointer;
                    .course_img{
                        width: 100%;
                        height: 187px;
                        border-radius: 4px;
                        >img{
                          width: 100%;
                          height: 100%;
                        }
                    }

                    .course_introduce{
                        padding: 0 15px;
                        .course_name{
                            font-size: 20.65px;
                            color: #FFFFFF;
                            line-height: 48px;
                        }
                        .course_time,.course_price,.course_teacher{
                            color: #FFFFFF;
                            font-size: 15.89px;
                            line-height: 24px;
                            display: flex;
                            justify-content: space-between;
                            >span:last-child{
                                color: #FF9933;
                            }
                        }
                        .course_teacher{
                            font-size: 14.3px;
                            margin-top: 25px;
                            color: #999999;
                            >span:first-child{
                                padding-left: 31px;
                                position: relative;
                                box-sizing: border-box;
                                &::before{
                                    content:'';
                                    display: block;
                                    width: 41px;
                                    height: 41px;
                                    background: url('~@/assets/images/user_header.png') no-repeat;
                                    background-size: 100% 100%;
                                    position: absolute;
                                    left: -10px;
                                }
                            }

                            >span:last-child{
                                color:#999999;
                            }
                        }
                    }

                    .cur_detail{
                      position: absolute;
                      right: 15px;
                      top: 10px;
                      font-size: 13.92px;
                      height: 23.8px;
                      line-height: 23.8px;
                      padding: 0 10px;
                      border-radius: 4px;
                      text-align: center;
                      color: #FFFFFF;
                      background: rgba($color: #000000, $alpha: 0.3);
                    }
                }
            }
        }
      }
    }
  }
</style>