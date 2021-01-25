<template>
  <div class="login">

    <div class="seek_password">重置密码</div>

    <div class="input_password one_input"  :class="`${pasd1Blur?'blur':''}`">
      请输入密码： <input type="text" v-model="pasd1"  @blur="pasd1Blur=false" @focus="pasd1Blur=true">
    </div>

    <div class="input_password" :class="`${pasd2Blur?'blur':''}`">
      再次输入密码： <input type="text" v-model="pasd2"  @blur="pasd2Blur=false" @focus="pasd2Blur=true">
    </div>
    
    <p class="go_login">已有账号？<span @click="goLogin">马上登录</span></p>

    <div class="verification_code_err">
      <div v-show="errHintShow">
        <span><img src="@/assets/images/login_err.png" alt=""></span>
        {{errHint}}
      </div>
    </div>

    <p class="register" @click="next" :class="pasd1!=''&&pasd2!=''?'login_active':''">下一步</p>

    <p class="register_protocol">
      点击“注册”，即表示您同意并愿意遵守xxxx和<span>《用户 协议》</span><span>《隐私政策》</span>
    </p>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        pasd1Blur:false,
        pasd2Blur:false,
        pasd1:'',
        pasd2:'',
        errHint:'',
        errHintShow:false,
      }
    },
    methods:{
      goLogin(){
        this.$emit('cutPage','login');
      },
      next(){
        if(this.pasd1 == ''){
          this.errHintShow = true;
          this.errHint = '密码不正确，请确认。';
        }else if(this.pasd2 == ''){
          this.errHintShow = true;
          this.errHint = '密码不正确，请确认。';
        }else{
          this.$emit('cutPage','reset3');
        }
      }
    },
    watch:{
      pasd1(newVal){
        this.errHintShow = false;
        this.errHint = '';
      },
      pasd2(newVal){
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
    padding: 123px 53px 0;
    box-sizing: border-box;
    -webkit-user-select: none;

    .seek_password{
      font-size: 30px;
      margin-bottom: 28px;
      font-weight: 500;
      color: #FFFFFF;
      text-align: center;
    }


    .input_password{
      width: 100%;
      height: 45px;
      margin-bottom: 35px;
      margin-top: 31px;
      padding-left: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(7, 18, 28, 0.6);
      border: 1px solid#666666;
      border-radius: 4px;
      font-size: 18px;
      color: #999999;
      box-sizing: border-box;
      white-space: nowrap;

      >input{
        width: 66%;
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
      &:hover{
        border: 1px solid #999999;
      }
    }

    .blur{
      border: 1px solid#00AEFF;
      &:hover{
        border: 1px solid #00AEFF;
      }
    }

    .one_input{
      >input{
        width: 71%;
      }
    }

    .go_login{
      font-size: 18.4px;
      margin-bottom: 28px;
      text-align: right;
      color: #CCCCCC;
      >span{
        color: #0099CC;
        cursor: pointer;
        &:hover{
          color: #fff;
        }
      }
    }

    .verification_code_err{
      width: 100%;
      height: 45px;
      margin-top: 20px;
      margin-bottom: 40px;
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

    .register_protocol{
      line-height: 25px;
      font-size: 16px;
      font-weight: 400;
      color: #999999;
      >span{
        color: #0099CC;
      }
    }
  }
</style>