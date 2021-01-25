<template>
  <div id="app">
    <div id="nav">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  body::-webkit-scrollbar {
    display: none;
  }
  #app,.nav{
    -webkit-user-select :none;
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
    -ms-overflow-style: none; /* IE 10+ */
    scrollbar-width: none; /* Firefox */
  }
</style>
