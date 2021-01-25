<template>
  <div>
    <compoments :is="pageName" @cutPage="cutShowPage"></compoments>
  </div>
</template>

<script>
import person from './Components/person.vue';
import role from './Components/role.vue';
import setting from './Components/setting.vue';

  export default {
    components:{person,role,setting},
    data(){
      return{
        pageName:'person'
      }
    },
    methods:{
      cutShowPage(path){
        this.pageName = path;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>