<template>
  <div class="network_class_content">
    <ul class="network_class_item">
      <li><img src="@/assets/images/home_bg2.png" alt=""></li>
      <li><img src="@/assets/images/home_bg3.png" alt=""></li>
      <li><img src="@/assets/images/home_bg4.png" alt=""></li>
      <li><img src="@/assets/images/home_bg5.png" alt=""></li>
    </ul>
    <div class="network_class_introduce">
      <div class="network_class_countdown">开课倒计时：<span>12：05</span></div>
      <div>
        <span @click="lookLive">立即上课</span>
        <span @click="lookHomework">查看作业</span>
        <span @click="cursorCatalog">课程目录</span>
      </div> 
    </div>
  </div> 
</template>

<script>
  export default {
    data(){
      return{
      }
    },
    methods:{
      cutClassName(name){
        this.liName = name;
      },
      lookLive(){
        this.$router.push({name:'Live'});
      },
      lookHomework(){
        this.$emit('cutPage','lookHomeWork')
      },
      cursorCatalog(){
        this.$emit('cutPage','SelectCourse')
      }
    }
  }
</script>

<style lang="scss" scoped>

    .network_class_content{
      width: 1534px;
      height: 960px;
      margin: 42px 50px 37px;
      box-sizing: border-box;
      -webkit-user-select :none;
      overflow: hidden;
      &::-webkit-scrollbar {
        display: none; /* Chrome Safari */
      }
      -ms-overflow-style: none; /* IE 10+ */
      scrollbar-width: none; /* Firefox */
      
      .network_class_item{
        width: 100%;
        margin-top: 336px;
        display: flex;
        justify-content: space-between;
        >li{
          width: 260px;
          height: 324px;
          background: #141D30;
          border: 1px solid #0E86CA;
          box-shadow: 0px 0px 6px 4px rgba(4, 18, 44, 0.35);
          border-radius: 4px;
          cursor: pointer;
          >img{
            width: 100%;
            height: 100%;
          }
        }
        >li:first-of-type{
          width:530px;
        }
      }

      .network_class_introduce{
        margin: 40px 0 136px 30px;
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
          }
        }
      }

    }
</style>