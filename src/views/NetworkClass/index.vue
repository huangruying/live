<template>
  <div class="network_class">
    <div class="nav">
      <div class="my_course">我的课程</div>
      <ul class="nav_wrap">
        <li v-for="(item,index) in className" @click="cutClassName(item)" :class="{'active':liName==item}" :key="index">
          <span><img src="@/assets/images/ps.png" alt=""></span>
          {{item}}
        </li>
      </ul>
    </div>
    
    <components :is="pageName" @cutPage="cutPageName"></components>

  </div>
</template>

<script>
  import index from './Components/index.vue';
  import lookHomeWork from './Components/lookHomeWork.vue';
  import SelectCourse from './Components/SelectCourse.vue';

  export default {
    components:{index,lookHomeWork,SelectCourse},
    data(){
      return{
        pageName:'index',
        liName:'课程A',
        className:['课程A','课程B','课程C','课程D']
      }
    },
    methods:{
      cutClassName(name){
        this.liName = name;
      },
      lookLive(){
        this.$router.push({name:'Live'});
      },
      cutPageName(name){
        this.pageName = name;
      },
    }
  }
</script>

<style lang="scss" scoped>
  .network_class{
    width: 100%;
    overflow: auto;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;

    .nav{
      width: 294px;
      min-height: 100vh;
      background: #000B1F;
      border: 1px solid #333333;
      box-sizing: border-box;
      overflow: hidden;
      .my_course{
        color: #FFFFFF;
        opacity: 0.3;
        font-size: 24px;  
        font-weight: 500;
        line-height: 90px;
        text-align: center;
      }
      .nav_wrap{
        color: rosybrown;
        padding: 0 0 78px 0;

        >li{
          width: 294px;
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
          background: #141D30;
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
    }

  }
</style>