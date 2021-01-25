<template>
  <div class="login">
    <div :class="`phone ${phoneBlur?'blur':''}`">
      <span><img src="@/assets/images/login.png" alt=""></span>
      <input placeholder="请输入手机号码" type="text" v-model="phone"  @blur="phoneBlur=false" @focus="phoneBlur=true">
    </div>
    
    <div :class="`password ${psdBlur?'blur':''}`">
      <span><img src="@/assets/images/login_passwork.png" alt=""></span>
      <input placeholder="密码" :type="passwordType" v-model="pasw"  @blur="psdBlur=false" @focus="psdBlur=true">
      <span @click="lookPassword">
        <img src="@/assets/images/ck1.png" alt="" v-show="passwordType=='password'">
        <img src="@/assets/images/ck.png" alt="" v-show="passwordType=='text'">
      </span>
    </div>

    <div class="account">
      <!-- <span><img src="@/assets/images/login2.png" alt=""></span> -->
      <p @click="cutAccount" :class="account?'cancle_remember':''">记住账号</p> 
      <p><span @click="forgetPassword">忘记密码</span></p>
    </div>

    <div class="protocol">
      <!-- <span><img src="@/assets/images/login2.png" alt=""></span> -->
      <p  @click="cutReadProtocol" :class="readProtocol?'cancle_remember':''">已阅读并同意<span>《用户协议》</span></p>
    </div>

    <div class="verification_code_err">
      <div v-show="errHintShow">
        <span><img src="@/assets/images/login_err.png" alt=""></span>
        {{errHint}}
      </div>
    </div>

    <p class="logon1" @click="login" :class="phone!=''&&pasw!=''?'login_active':''">登 录</p>
    <p class="register1" @click="register">注 册</p>

    <div class="rests">
      <p>其它账号登录</p>
      <p>
        <span></span>
        <span @click="wechartLogin"></span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        passwordType:'password',
        account:false,
        readProtocol:true,
        phone:'',
        pasw:'',
        errHint:'',
        errHintShow:false,
        phoneBlur:false,
        psdBlur:false,
      }
    },
    mounted(){
      let isLogin = localStorage.getItem('account');
      console.log(isLogin);
      if(isLogin == 'true'){
        this.$router.push({name:'Layout'});
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
        if(this.phone == ''){
          this.errHintShow = true;
          this.errHint = '请输入手机号码';
        }else if(this.pasw == ''){
          this.errHintShow = true;
          this.errHint = '请输入密码';
        }else{
          localStorage.setItem('account',this.account);
          this.$router.push({name:'Layout'});
        }
      },
      wechartLogin(){
        this.$emit('cutPage','wechart');
      },
    },
    watch:{
      phone(newVal){
        this.errHintShow = false;
        this.errHint = '';
      },
      pasw(newVal){
        this.errHintShow = false;
        this.errHint = '';
      },
    }
  }
</script>

<style lang="scss" scoped>

  .login{
    width: 100%;
    height: 100%;
    padding: 87px 53px 0;
    box-sizing: border-box;
    -webkit-user-select: none;
    .phone,.password{
      width: 100%;
      height: 45px;
      margin-bottom: 22px;
      padding-left: 8px;
      background: rgba(7, 18, 28, 0.6);
      border: 1px solid#666666;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      &:hover{
        border: 1px solid #999999;
      }
      >span{
        display: inline-block;
        width: 40px;
        height: 40px;
        >img{
          width: 100%;
          height: 100%;
        }
      }
      >span:last-child{
        width: 24px;
        height: 24px;
        >img{
          width: 100%;
          height: 100%;
        }
      }
      >input{
        width:80%;
        height: 95%;
        border: none;
        outline: none;
        background: transparent;
        font-size: 18px;
        color: #999999;
        &::placeholder{
          color: #999999;
        }
      }
    }
    .blur{
      border: 1px solid#00AEFF;
      &:hover{
        border: 1px solid #00AEFF;
      }
    }

    .account,.protocol{
      width: 100%;
      font-size: 18px;
      color: #CCCCCC;
      display: flex;
      justify-content: space-between;
      padding-left: 30px;
      box-sizing: border-box;
      >p{
        line-height: 40px;
        cursor: pointer;
        >span{
          color: #00AEFF;
          &:hover{
            color: #fff;
          }
        }
      }
      >p:first-child{
        position: relative;
        &::before{
          content: '';
          display: inline-block;
          width: 30px;
          height: 30px;
          background: url('~@/assets/images/login1.png') no-repeat;
          background-size: cover;
          position: absolute;
          left: -30px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      .cancle_remember{
        position: relative;
        &::before{
          content: '' !important;
          display: inline-block !important;
          width: 30px !important;
          height: 30px !important;
          background: url('~@/assets/images/login2.png') no-repeat !important;
          background-size: cover !important;
          position: absolute !important;
          left: -28px !important;
          top: 50% !important;
          transform: translateY(-35%) !important;
        }
      }
    }

    .verification_code_err{
      width: 100%;
      height: 45px;
      margin-top: 20px;
      margin-bottom: 20px;
      padding-left: 8px;
      box-sizing: border-box;
      display: flex;
      font-size: 18px;
      align-items: center;
      color: #CCCCCC;
      >div{
        width: 100%;
        height: 100%;
        background: #360E10;
        border: 1px solid #972B31;
        box-shadow: 0px 6px 9px 2px rgba(0, 0, 0, 0.43);
        display: flex;
        align-items: center;
        >span{
          display: inline-block;
          width: 40px;
          height: 40px;
          padding-right: 3px;
          padding-top: 5px;
          >img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .logon1,.register1{
      width: 100%;
      height: 63.9px;
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #FFFFFF;
      background: #999999;
      box-sizing: border-box;
      cursor: pointer;
    }
    .login_active{
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
    }
    .register1{
      margin-top: 26px;
      color: #FFFFFF;
      background: rgba(8, 19, 29, 0.5);
      border: 1px solid #00AEFF;
      &:hover{
        border: 1px solid #fff;
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
          background:url('~@/assets/images/wechart.png') no-repeat;
          background-size: 100% 100%;
          &:hover{
            background:url('~@/assets/images/wechar1.png') no-repeat;
            background-size: 100% 100%;
          }
        }

      }
    }
  }
</style>