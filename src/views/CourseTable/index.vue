<template>
  <div class="network_class">
    <div class="nav">
      <ul class="nav_wrap">
        <li v-for="(item,index) in className" @click="cutClassName(item)" :class="{'active':liName==item}" :key="index">
          <span><img src="@/assets/images/ps.png" alt=""></span>
          {{item}}
        </li>
      </ul>
    </div>
    <div class="network_class_content">
      <ul class="network_class_item">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div class="network_class_introduce">
        <div class="network_class_countdown">开课倒计时：<span>12：05</span></div>
        <div>
          <span>立即上课</span>
          <span>查看作业</span>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
  export default {
    data(){
      return{
        liName:'课程A',
        className:['课程A','课程B','课程C','课程D']
      }
    },
    methods:{
      cutClassName(name){
        this.liName = name;
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
      min-height: 100%;
      background: #000B1F;
      border: 1px solid #333333;
      box-sizing: border-box;

      .nav_wrap{
        color: rosybrown;
        padding: 78px 0;

        >li{
          width: 378px;
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
    }

    .network_class_content{
      width: 1534px;
      margin: 42px 50px 37px;
      box-sizing: border-box;
      background: rgb(86, 89, 104);
      
      .network_class_item{
        width: 100%;
        margin-top: 336px;
        display: flex;
        justify-content: space-between;
        >li{
          width: 260px;
          height: 324px;
          background: rgb(167, 206, 184);
          cursor: pointer;
        }
        >li:first-of-type{
          width:530px;
        }
      }

      .network_class_introduce{
        margin: 40px 0 0 30px;
        color: #CCCCCC;
        font-size: 20px;

        .network_class_countdown{
          >span{
            color: #0E86CA;
          }
        }
        >div:last-child{
          margin-top: 22px;
          span{
            display: inline-block;
            width: 195px;
            height: 57px;
            line-height: 57px;
            margin-right: 21px;
            font-size: 24px;
            border-radius: 4px;
            text-align: center;
            color: #FFFFFF;
            background: #0E86CA;
          }
          >span:last-of-type{
            color: #6EE3F5;
            background: rgba(8, 19, 29, 0.5);
            border: 1px solid #0E86CA;
          }
        }
      }

    }
  }
</style>