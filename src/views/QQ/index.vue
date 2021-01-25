<template>
  <div class="qq_login">
    <div class="header_wrap">
      <div>QQ登录</div>
      <div>QQ登录丨授权管理丨申请接入</div>
    </div>

    <div class="content">
      <div class="con_left">
        <p>快速安全登录</p>
        <p>请用<span>QQ手机版</span>扫二维码,</p>
        <p>安全登录，防止盗号。</p>
        <p><img src="@/assets/images/qrcode.png" alt=""></p>
        <p>账号密码登录丨注册新账号丨意见反馈</p>
      </div>

      <div class="con_right">
        <p><span>XXXXXQQ登录</span>，将获得以下权限：</p>
        <p @click="cutIcon">
          <span class="xuanze"><img src="@/assets/images/login2.png" alt="">
        </span>全选</p>
        <p @click="cutIcon">
          <span class="xuanze"><img src="@/assets/images/login1.png" alt="">
        </span>获得您的昵称、头像、性别</p>

        <p>授权后表面你已同意<span>QQ登录服务协议</span></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

  .qq_login{
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    overflow: hidden;
    .header_wrap{
      width: 100%;
      height: 100px;
      padding: 0 360px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #51B7EC;
      color: #FFFFFF;
      box-sizing: border-box;

      >div:first-child{
        font-size: 28.43px;
        position: relative;
        cursor: pointer;

        &::before{
          content: '';
          display: inline-block;
          width: 81px;
          height: 90px;
          background: url('./../../assets/images/qq.png') no-repeat;
          background-size: cover;
          position: absolute;
          left: -81px;
          top: 50%;
          transform: translateY(-50%);
        }
      }

      >div:last-child{
        font-size: 26px;
        position: relative;
        cursor: pointer;

        &::after{
          content: '';
          display: inline-block;
          width: 30px;
          height: 30px;
          background: url('./../../assets/images/qq.png') no-repeat;
          background-size: cover;
          position: absolute;
          left: -45px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }

    .content{
      display: flex;
      justify-content: center;
      padding: 37px 0px;

      .con_left{
        width: 475px;
        height: 894.5px;
        padding-right: 84px;
        border-right: 1px dashed #666666;
        >p{
          width: 480px;
          text-align: center;
          line-height: 48px;
          >span{
            color: #0099CC;
            cursor: pointer;
          }
        }
        >p:nth-child(1){
          font-size: 48px;
          line-height: 90px;
          margin-top: 4px;
        }
        >p:nth-child(2){
          font-size: 40px;
          color: #666666;
          margin-top: 20px;
        }
        >p:nth-child(3){
          font-size: 40px;
          color: #666666;
        }
        >p:nth-child(4){
          width: 288px;
          height: 289px;
          margin: 74px auto;
          >img{
            width: 100%;
            height: 100%;
          }
        }
        >p:nth-child(5){
          font-size: 28px;
          line-height: 28px;
          color: #666666;
          cursor: pointer;
        }
      }

      .con_right{
        margin-left: 84px;
        margin-top: 32px;
        >p{
          width: 494.1px;
          height: 78px;
          border-top: 1px dashed #666666;
          display: flex;
          align-items: center;
          font-size: 28px;
          color: #666666;
          >span{
            color: #66CCFF;
          }

          .xuanze{
            display: inline-block;
            width: 34px;
            height: 34px;
            line-height: 34px;
            margin-top: 10px;
            margin-right: 15px;
            background-color:  #66CCFF;
            >img{
              width: 100%;
              height: 100%;
            }
          }
        }
        >p:last-child{
          border-top: none;
          margin-top: 78px;
        }
      }
    }
  }
</style>