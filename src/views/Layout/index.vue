<template>
  <div class="layout" >
    <div>
      <LayoutHeader />
      <LayoutMian />
    </div>
  </div>
</template>

<script>
import LayoutMian from './Components/Main.vue';
import LayoutHeader from './Components/Header.vue';

  export default {
    name:'layout',
    components:{ LayoutMian , LayoutHeader },
  }
</script>

<style lang="scss" scoped>
  .layout{
    width: 100%;
    box-sizing: border-box;
    background-color: #010A0F;
    height: 100vh;
    overflow: hidden;
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
    -ms-overflow-style: none; /* IE 10+ */
    scrollbar-width: none; /* Firefox */

    >div{
      width: 100%;
      min-height: 100vh;
      background: url('~@/assets/images/home_bg1.png') no-repeat;
      background-size: 100% 100%;
      // background: url('~@/assets/images/home_bg.png') no-repeat;
      // background-size: 100% 100%;
      box-sizing: border-box;
      overflow: hidden;

      -webkit-user-select :none;
      &::-webkit-scrollbar {
        display: none; /* Chrome Safari */
      }
      -ms-overflow-style: none; /* IE 10+ */
      scrollbar-width: none; /* Firefox */
      }
  }
</style>