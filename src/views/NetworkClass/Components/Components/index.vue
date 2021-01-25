<template>
  <div class="course_catalog">
    <ul>
        <li v-for="(item,index) in  catalogList" :key="index" :class="{'isShrink':!item.isOpen}">
            <div class="catalog_title" @click="shrinkChapter(item.id)">
                <span>{{item.chapterName}}</span>
                <span><i class="iconfont icon-fenye-shangyiye1"></i></span>
            </div>
            <div class="catalog_chapter" v-for="(ele,idx) in item.chapterNameList" :key="idx"  @click="goLive" >
                <div class="left">
                    <span>
                      <img :src="imgArr[idx]" alt="">
                    </span>
                    <span>【第一节】课程标题设计 </span>
                </div>
                <div class="right">
                    <span>9999人已学习</span>
                    <span :class="idx>1?'active':''">{{idx>1?'未学习':'已学习'}}</span>
                </div>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return{
          catalogList:[
            {   
                id:'A1',
                chapterName:'第一章  课程标题设计教程',
                isOpen:true,
                chapterNameList:[1,2,3,4]
            },
            {   
                id:'A2',
                chapterName:'第一章  课程标题设计教程',
                isOpen:true,
                chapterNameList:[1,2,3,4]
            },
          ],
          imgArr:[
            require('@/assets/images/course1.png'),
            require('@/assets/images/course2.png'),
            require('@/assets/images/course3.png'),
            require('@/assets/images/course4.png')],
          open:require('@/assets/images/open.png'),
          noopen:require('@/assets/images/noopen.png'),

      }
    },
    methods:{
        shrinkChapter(id){
            this.catalogList.forEach((el,idx) => {
                if(el.id == id){
                    console.log(id);
                    this.catalogList[idx].isOpen = !el.isOpen;
                }
            })
        },
        goLive(){
            this.$router.push({name:'Live'});
        }
    }
  }
</script>

<style lang="scss" scoped>
  .course_catalog{
    height: 870px;
    overflow: auto;
    width: 100%;
    box-sizing: border-box;
    padding-right: 158px;
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
    
    >ul{
        >li{
            margin-bottom: 45px;
            >div{
                margin-bottom: 25px;
            }
            .catalog_title{
                width: 100%;
                height: 79px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-radius: 4px;
                background: #16202D;
                font-size: 28px;
                color: #FFFFFF;
                padding-left: 65px;
                box-sizing: border-box;
                cursor: pointer;

                >span:last-of-type{
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    margin-right: 117px;
                    transition: all 0.5s;
                    transform: rotateZ(0deg);
                    transform-origin: center;
                    position: relative;
                    >i{
                        font-size: 35px;
                    }
                }
            }

            .catalog_chapter{
                width: 100%;
                height: 165px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-radius: 4px;
                background: #141D30;
                box-sizing: border-box;
                cursor: pointer;
                &:hover{
                    background: #1E283D;
                }
                .left{
                    display: flex;
                    align-items: center;
                    font-size: 24px;
                    color: #FFFFFF;
                    >span:first-child{
                        display: inline-block;
                        width: 431px;
                        height: 165px;
                        margin-right: 33px;
                        >img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }

                .right{
                    font-size: 18px;
                    color: #999999;
                    margin-right: 95px;
                    >span:last-child{
                        padding-left: 101px;
                        position: relative;
                        &::before{
                          content:'';
                          display: block;
                          width: 24px;
                          height: 24px;
                          background: url('~@/assets/images/study.png') no-repeat;
                          background-size: 100% 100%;
                          position: absolute;
                          top: 0;
                          left: 50px;
                        }
                    }
                    .active{
                      color: #999999;
                      &::before{
                        content:'';
                        display: block;
                        width: 24px;
                        height: 24px;
                        background: url('~@/assets/images/study1.png') no-repeat !important;
                        background-size: 100% 100% !important;
                        position: absolute;
                        top: 0;
                        left: 50px;
                      }
                    }
                }
            }
        }

        .isShrink{
            height: 79px;
            overflow: hidden;
            margin-bottom: 25px;
            .catalog_title{
                >span:last-child{
                    transform: rotateZ(180deg);
                    color: #66CCFF;
                }
            }
        }
    }
  }
</style>