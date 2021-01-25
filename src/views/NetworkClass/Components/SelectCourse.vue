<template>
  <div class="network_class">
    <div class="network_class_content">
      <div class="select_course_detail">
        <div class="select_item" v-for="(item,index) in selectCourseClassify" :key="index" :class="{'select_active':selectCourse==item}" @click="selectActive(item)">{{item}}</div>
      </div>
      <components :is="pageName" @cutPageName="updatePageName"></components>
    </div> 
  </div>
</template>

<script>
  import index from './Components/index.vue';
  import studentEvaluate from './Components/studentEvaluate.vue';
  export default {
    components:{index,studentEvaluate},
    data(){
      return{
        myCourseName:'课程A',
        myCourse:['课程A','课程B','课程C','课程D'],
        recommendCourse:['推荐课程A','推荐课程B','推荐课程C','推荐课程D'],
        selectCourseClassify:['课程介绍','课程目录','学员评价'],
        selectCourse:'课程目录',
        pageName:'index'
      }
    },
    methods:{
      cutMyCourse(name){
        this.myCourseName = name;
      },
      selectActive(name){
          this.selectCourse = name;
          if(name == '学员评价'){
            this.pageName = 'studentEvaluate';
            return;
          }
          this.pageName = 'index';
      },
      updatePageName(name){
        this.pageName = name;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .network_class{
    width: 1626px;
    height: 970px;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    background: rgba($color: #000000, $alpha: 0.5);

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
      border-radius: 10px;
      background   : transparent;
    }

    .network_class_content{
      width: 100%;
      padding-left: 134px;
      margin: 0 auto;
      box-sizing: border-box;
      position: relative;
    
      .select_course_detail{
        display: flex;
        width: 1364px;
        align-items: flex-end;
        margin: 7px 0px 0 0;
        border-bottom: 8px solid #0E86CA;
        box-sizing: border-box;
        z-index: 999;
        
        .select_item{
          padding:0 80px;
          height: 66px;
          font-size: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: rgba($color: #fff, $alpha: 0.5);
          &:hover{
            color: #fff;
          }
        }
        .select_active{
            border-radius: 4px 4px 0px 0px ;
            color: #fff;
            background: #0E86CA;
        }
      }
    }
  }
</style>