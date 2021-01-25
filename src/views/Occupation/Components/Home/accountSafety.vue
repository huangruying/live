<template>
  <div class="accountSafety">
    <div class="phone">
      <p>绑定手机</p>
      <p>+86 156XXXXXX</p>
      <p>修改绑定手机</p>
    </div>
    <div class="email">
      <p>绑定邮箱</p>
      <p>无</p>
      <p>前往绑定邮箱</p>
    </div>
    <div class="weixin">
      <p>绑定微信</p>
      <p><i class="iconfont icon-weixin1"></i>(未绑定)</p>
      <p>点击绑定</p>
    </div>
    <div class="qq">
      <p>绑定 QQ</p>
      <p><i class="iconfont icon-QQ"></i>12345678900</p>
      <p class="isActive">取消绑定</p>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.accountSafety{
  width: 100%;
  height: 100%;
  padding: 108px 47px;
  font-size: 26px;
  color: #D6E9FF;
  box-sizing: border-box;
  
  >div{
    display: flex;
    align-items: center;
    height: 54px;
    font-size: 24px;
    margin-bottom: 49px;
    >p{
      height: 100%;
      display: flex;
      align-items: center;
    }
    >p:first-child{
      width: 250px;
      font-size: 26px;
    }
    >p:nth-child(2){
      width: 300px;
      color: #A0BFEB;
    }
    >p:last-child{
      width: 260px;
      height: 54px;
      background: linear-gradient(0deg, #1D588A, #3F8AC3);
      border: 2px solid #66CCFF;
      border-radius: 4px;
      justify-content: center;
      cursor: pointer;
    }
    .isActive{
      border: 1px solid #999999 !important;
      color: #CCCCCC;
      background: #0A1C33 !important;
      &:hover{
        color: #fff;
      }
    }
  }
  .weixin,.qq{
    >p{
      >i{
        font-size: 35px;
        margin-right:15px;
      }
    }
  }

  .qq{

  }
}
</style>