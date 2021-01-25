<template>
  <div class="main-wrap">
    <div class="mian-content">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'mian'
  }
</script>

<style lang="scss" scoped>
  .main-wrap{
    width: 100%;
    -webkit-user-select :none;
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
    -ms-overflow-style: none; /* IE 10+ */
    scrollbar-width: none; /* Firefox */
  }
</style>