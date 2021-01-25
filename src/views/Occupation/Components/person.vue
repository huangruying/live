<template>
  <div class="occupation">
    <div class="left">
      <div class="btn btn1" @click="cutComPage('role')">设置角色</div>
      <div>
        <p><img src="@/assets/images/renwu_bo.png" alt=""></p>
      </div>
      <div class="btn" @click="cutComPage('setting')">个人设置</div>
    </div>

    <div class="right">
      <div class="user_name">用户昵称</div>

      <div class="bottom">

        <div class="line"></div>

        <div class="zhiye">职业</div>

        <div class="module">
          <div>
            <p>UI设计师</p>
            <p>初级插画师</p>
          </div>
          <div></div>
        </div>

        <div class="zhuanbei">装备</div>

        <div class="module2">
          <div>
            <p>XX手绘板</p>
            <p>Macbook pro</p>
          </div>
          <div></div>
        </div>

        <div class="jineng">技能</div>

        <div class="module3">
          <div>
            <p>Ps</p>
            <p>LV.1</p>
          </div>
          <div>
            <p>Ai</p>
            <p>LV.1</p>
          </div>
          <div>
            <p>C4D</p>
            <p>LV.1</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      cutComPage(name){
        this.$emit('cutPage',name)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .occupation{
    width: 100%;
    height: 960px;
    background: url('~@/assets/images/zhiye_bg.png') no-repeat ;
    background-size: 150% 100% ;
    background-position: -500px -20px;
    display: flex;

    .left{
      width: 1355px;
      height: 960px;
      display: flex;
      
      >div:nth-child(2){
        width: 677px;
        height: 100%;
        >p{
          width: 100%;
          height: 307px;
          margin-top: 653px;
          >img{
            width: 100%;
            height: 100%;
          }
        }
      }
      .btn{
        width: 230px;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 732px;
        font-size: 30px;
        background: url('~@/assets/images/btn1.png') no-repeat ;
        background-size: 100% 100% ;
        color: #E6F3F9;
        cursor: pointer;
        &:hover{
          background: url('~@/assets/images/btn2.png') no-repeat ;
          background-size: 100% 100% ;
          color: #FFFFFF;
        }
        &:active{
          background: #006899;
          color: rgba($color: #fff, $alpha: 0.5);
          border-radius: 4px;
        }
      }

      .btn1{
        margin-left: 129px;
      }
    }

    .right{
      width: 488px;
      height: 100%;
      margin-right: 77px;
      >div{
        box-sizing: border-box;
      }
      .user_name{
        width: 100%;
        height: 100px;
        line-height: 100px;
        font-size: 38px;
        padding-left: 16px;
        color: #FFFFFF;
        background: url('~@/assets/images/userbg.png') no-repeat ;
        background-size: 100% 100% ;
      }

      .bottom{
        width: 100%;
        height: 790px;
        background-color: rgba($color: #1B2A55, $alpha: 0.68);
        >div{
          box-sizing: border-box;
        }
      }
      .line{
        height: 50px;
        width: 100%;
        background: url('~@/assets/images/xian1.png') no-repeat ;
        background-size: 100% 100% ;
      }
      .zhiye,.zhuanbei,.jineng{
        width: 488px;
        height: 34px;
        line-height: 34px;
        font-size: 22px;
        padding-left: 16px;
        color: #66CCFF;
        background: rgba($color: #235A7B, $alpha: 0.6);
      }
      .module,.module2{
        min-height: 74px;
        padding: 17px;
        display: flex;
        justify-content: space-between;

        >div:first-child{
          display: flex;
          >p{
            height: 32px;
            line-height: 32px;
            text-align: center;
            font-size: 18px;
            padding: 0 22px;
            border: 1px solid #66CCFF;
            color: #66CCFF;
            border-radius: 16px;
            margin-right: 30px;
            cursor: pointer;
            &:hover{
              border: 1px solid #FFFFFF;
              color: #FFFFFF;
            }
          }
        } 
        >div:last-child{
          width: 36px;
          height: 36px;
          background: url('~@/assets/images/renwu_j.png') no-repeat ;
          background-size: 100% 100% ;
          cursor: pointer;
          &:hover,&:active{
            background: url('~@/assets/images/renwu_j1.png') no-repeat ;
            background-size: 100% 100% ;
          }
        }
      }

      .module3{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 12px 26px;
        >div{
          width: 82px;
          height: 82px;
          margin-right: 24px;
          background: url('~@/assets/images/kuan1.png') no-repeat ;
          background-size: 100% 100% ;
          text-align: center;
          color: #CCFFFF;
          
          >p:first-child{
            margin-top: 20px;
            margin-bottom: 5px;
            font-weight: bold;
          }
        }
      }
    }
  }
</style>