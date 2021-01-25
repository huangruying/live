<template>
  <div class="login">

    <div class="phone_register">手机号注册</div>

    <div :class="`phone ${phoneBlur?'blur':''}`">
      <span><img src="@/assets/images/login.png" alt=""></span>
      <input placeholder="请输入手机号码" type="text" v-model="phone"  @blur="phoneBlur=false" @focus="phoneBlur=true">
    </div>
    
    <div :class="`password ${psdBlur?'blur':''}`">
      <span><img src="@/assets/images/login_passwork.png" alt=""></span>
      <input placeholder="请输入密码" :type="passwordType" v-model="pasw"  @blur="psdBlur=false" @focus="psdBlur=true">
      <span @click="lookPassword">
        <img src="@/assets/images/ck1.png" alt="" v-show="passwordType=='password'">
        <img src="@/assets/images/ck.png" alt="" v-show="passwordType=='text'">
      </span>
    </div>

    <div class="verification_code">
      <div :class="capBlur?'cap_blur':''"> 验证码： <input type="text" v-model="captcha"  @blur="capBlur=false" @focus="capBlur=true"></div>
      <div>获取验证码</div>
    </div>

    <p class="go_login">已有账号？<span @click="goLogin1">马上登录</span></p>

    <div class="verification_code_err">
      <div v-show="errHintShow">
        <span><img src="@/assets/images/login_err.png" alt=""></span>
        {{errHint}}
      </div>
    </div>

    <p class="register" @click="goLogin" :class="phone!=''&&pasw!=''&&captcha!=''?'login_active':''">注册</p>

    <p class="register_protocol">
      点击“注册”，即表示您同意并愿意遵守xxxx<span>《用户 协议》</span>和<span>《隐私政策》</span>
    </p>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        passwordType:'password',
        phone:'',
        pasw:'',
        phoneBlur:false,
        psdBlur:false,
        capBlur:false,
        captcha:'',
        errHint:'',
        errHintShow:false,
      }
    },
    methods:{
      lookPassword(){
        this.passwordType=='password'?this.passwordType='text':this.passwordType='password';
      },
      goLogin(){
        if(this.phone == ''){
          this.errHintShow = true;
          this.errHint = '手机号码错误，请重新输入';
        }else if(this.pasw == ''){
          this.errHintShow = true;
          this.errHint = '密码错误，请重新输入';
        }else if(this.captcha == ''){
          this.errHintShow = true;
          this.errHint = '验证码错误，请重新输入';
        }else{
          this.$emit('cutPage','login');
        }
      },
      goLogin1(){
        this.$emit('cutPage','login');
      }
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
      captcha(newVal){
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

    .phone_register{
      font-size: 30px;
      margin-bottom: 28px;
      font-weight: 500;
      color: #FFFFFF;
      text-align: center;
    }

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

    .verification_code{
      width: 100%;
      height: 45px;
      margin-bottom: 22px;
      margin-top: 31px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      >div{
        background: rgba(7, 18, 28, 0.6);
        border: 1px solid#666666;
        border-radius: 4px;
        font-size: 18px;
        color: #999999;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
          border: 1px solid #999999;
        }
      }

      >div:first-child{
        width: 265px;
        height: 100%;
        
        >input{
          width: 60%;
          height: 100%;
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
      >div:last-child{
        width: 137px;
        height: 100%;
        color: #FEFEFE;
        cursor: pointer;
        &:hover{
          color: #999999;
          border: 1px solid rgba($color: #fff, $alpha: 0.6);
        }
      }

      .cap_blur{
        border: 1px solid #00AEFF;
        &:hover{
          border: 1px solid #00AEFF;
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
      align-items: center;
      color: #CCCCCC;
      >div{
        width: 100%;
        height: 100%;
        background: #360E10;
        border: 1px solid #972B31;
        box-shadow: 0px 6px 9px 2px rgba(0, 0, 0, 0.43);
        border-radius: 4px;
        display: flex;
        align-items: center;
        >span{
          display: inline-block;
          width: 40px;
          height: 40px;
          padding-right: 3px;
          >img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .go_login{
      font-size: 18.4px;
      // margin-bottom: 84px;
      text-align: right;
      color: #CCCCCC;
      cursor: pointer;
      >span{
        color: #0099CC;
        &:hover{
          color: #FFFFFF;
        }
      }
    }

    .register{
      width: 307px;
      height: 64px;
      border-radius: 4px;
      margin: auto;
      margin-bottom: 61px;
      color: #FFFFFF;
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #999999;
      cursor: pointer;
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
    .login_active{
      background: url('~@/assets/images/btn2.png') no-repeat;
      background-size: 100% 100%;
    }

    .register_protocol{
      line-height: 25px;
      font-size: 16px;
      font-weight: 400;
      color: #999999;
      cursor: pointer;
      >span{
        color: #0099CC;
        &:hover{
          color: #fff;
        }
      }
    }
  }
</style>