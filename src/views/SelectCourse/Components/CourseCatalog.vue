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
    width: 100%;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;

    .nav{
      width: 386px;
      height: 100%;
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
      width: 1534px;
      box-sizing: border-box;
    
      .select_course_detail{
        display: flex;
        align-items: flex-end;
        margin: 7px 15px;
        border-bottom: 8px solid #0E86CA;
        box-sizing: border-box;
        
        .select_item{
          padding:0 80px;
          height: 66px;
          font-size: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #0099CC;
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