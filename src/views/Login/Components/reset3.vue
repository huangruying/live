<template>
  <div class="login">
    <div class="seek_password">重置成功</div>

    <div class="countdown_icon"><img src="@/assets/images/login_countdown.png" alt=""></div>

    <p class="countdown_num">倒数<span>{{ countdownNum }}秒</span></p>

    <p class="go_login" @click="goLogin">返回登录页面</p>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        countdownTimer:null,
        countdownNum:10
      }
    },
    created(){
      this.countdownNum = 10;

      this.countdownTimer = setInterval(() => {
        this.countdownNum--;
        if(this.countdownNum <=0 ){
          this.goLogin();
          this.countdownNum = 10;

          clearInterval(this.countdownTimer);
          this.countdownTimer = null;
        }
      }, 1000);
    },
    methods:{
      goLogin(){
        this.$emit('cutPage','login');
      },
    },
    destroyed(){
      clearInterval(this.countdownTimer);
      this.countdownTimer = null;
    }
  }
</script>

<style lang="scss" scoped>

  .login{
    width: 100%;
    height: 100%;
    padding: 174px 53px 0;
    box-sizing: border-box;
    -webkit-user-select: none;

    .seek_password{
      font-size: 36px;
      margin-bottom: 28px;
      font-weight: 500;
      color: #FFFFFF;
      text-align: center;
    }

    .countdown_icon{
      width: 80px;
      height: 80px;
      margin: 63px auto 0;
      >img{
        width: 100%;
        height: 100%;
      }
    }

    .countdown_num,.go_login{
      font-size: 30px;
      margin-top: 25px;
      text-align: center;
      color: #999999;
    }

    .go_login{
      font-size: 30px;
      color: #00AEFF;
      cursor: pointer;
      &:hover{
        color: #fff;
      }
    }
  }
</style>