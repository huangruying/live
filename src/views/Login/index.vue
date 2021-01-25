<template>
  <div class="login_wrap">
    <div class="input_wrap">
      <components :is="pageName" @cutPage="cutPageName"></components>
    </div>
  </div>
</template>

<script>
import login from './Components/login';
import register from './Components/register';
import reset1 from './Components/reset1';
import reset2 from './Components/reset2';
import reset3 from './Components/reset3';
import wechart from './Components/wechart';
  export default {
    name:'Login',
    components:{ login, register, reset1,  reset2,  reset3, wechart },
    data(){
      return{
        pageName:'login'
      }
    },
    methods:{
      cutPageName(pageName){
        this.pageName = pageName;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login_wrap{
    width: 100%;
    min-height: 100vh;
    background: url('~@/assets/images/login_bg.jpg');
    background-size: 100% 100%;
    position: relative;
    overflow: hidden;
    .input_wrap{
      position: absolute;
      width: 513px;
      height: 719px;
      top: 21%;
      right: 14.64%;
      background: rgba(13, 1, 25, 0.5);
      box-shadow: 0px 11px 6px 0px rgba(0, 0, 0, 0.5);
      border-radius: 4px;
      box-sizing: border-box;
      overflow: hidden;
    }
  }
</style>