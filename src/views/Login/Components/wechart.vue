<template>
  <div class="login">
    <div class="go_back" @click="goBack"></div>

    <div class="wechart_scan">微信扫一扫登录</div>

    <div class="qrcode_wrap"><img src="@/assets/images/qrcode.png" alt=""></div>

    <div class="rests">
      <p>其它账号登录</p>
      <p>
        <span></span>
        <span></span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        passwordType:'password',
        account:true,
        readProtocol:false
      }
    },
    methods:{
      lookPassword(){
        this.passwordType=='password'?this.passwordType='text':this.passwordType='password';
      },
      cutAccount(){
        this.account = !this.account;
      },
      cutReadProtocol(){
        this.readProtocol = !this.readProtocol;
      },
      register(){
        this.$emit('cutPage','register');
      },
      forgetPassword(){
        this.$emit('cutPage','reset1');
      },
      login(){
        this.$router.push({name:'Layout'});
      },
      goBack(){
        this.$emit('cutPage','login');
      }
    }
  }
</script>

<style lang="scss" scoped>

  .login{
    width: 100%;
    height: 100%;
    padding: 187px 53px 0;
    box-sizing: border-box;
    -webkit-user-select: none;
    position: relative;

    .go_back{
      position: absolute;
      width: 22px;
      height: 36px;
      left: 32px;
      top: 36px;
      background: url('~@/assets/images/left_nomal.png') no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
      &:hover{
        background: url('~@/assets/images/left1.png') no-repeat;
        background-size: 100% 100%;
      }
    }
    
    .wechart_scan{
        color: #fff;
        font-size: 30px;
        text-align: center;
        margin: 0 0 47px;
    }

    .qrcode_wrap{
        width: 200px;
        height: 200px;
        margin: auto;
        margin-bottom: 104px;
        >img{
            width: 100%;
            height: 100%;
        }
    }


    .rests{
      margin-top: 54px;
      text-align: center;
      >p{
        line-height: 38px;
        font-size: 18px;
        color: #999999;

        >span{
          display: inline-block;
          width: 50px;
          height: 50px;
          cursor: pointer;
          >img{
            width: 100%;
            height: 100%;
          }
        }
        >span:first-child{
          margin-right: 69px;
        }
      }
      >p:first-child{
        position: relative;
        &::before{
          content: '';
          display: inline-block;
          width: 125px;
          height: 1px;
          background-color: #999999;
          position: absolute;
          left: 0px;
          top: 50%;
          transform: translateY(-50%);
        }
        &::after{
          content: '';
          display: inline-block;
          width: 125px;
          height: 1px;
          background-color: #999999;
          position: absolute;
          right: 0px;
          top: 50%; 
          transform: translateY(-50%);
        }
      }

      >p:last-child{
        >span:first-child{
          background:url('~@/assets/images/qq.png') no-repeat;
          background-size: 100% 100%;
          &:hover{
            background:url('~@/assets/images/qq1.png') no-repeat;
            background-size: 100% 100%;
          }
        }
        >span:last-child{
          background:url('~@/assets/images/wechart_active.png') no-repeat;
          background-size: 100% 100%;
          cursor:not-allowed;
        }

      }
    }
  }
</style>