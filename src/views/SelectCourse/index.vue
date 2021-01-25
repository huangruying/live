<template>
  <div class="">
      <components :is="pageName" @cutPageName="updatePageName"></components>
  </div>
</template>

<script>
    import CourseCatalog from './Components/CourseCatalog';
    import SelectCourse from './Components/SelectCourse.vue';
  export default {
      components:{CourseCatalog,SelectCourse},
    data(){
      return{
          pageName:'SelectCourse'
      }
    },
    methods:{
        updatePageName(name){
            this.pageName = name;
        }
    }
  }
</script>

<style lang="scss" scoped>
  .network_class{
    width: 100%;
    height: 100%;
  }
</style>