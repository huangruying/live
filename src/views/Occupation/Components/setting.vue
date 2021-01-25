<template>
  <div class="occupation">
    <div class="nav">
      <ul class="nav_wrap">
        <li v-for="(item,index) in navList" @click="cutClassName(item.path,item.text)" :class="{'active':item.active}" :key="index">
          <span><i :class="`iconfont ${item.icon}`"></i></span>
          {{item.text}}
        </li>
      </ul>
    </div>

    <div class="content">
      <components :is="pageName"></components>
    </div>
  </div>
</template>

<script>
import accountSafety from './Home/accountSafety.vue';
import inform from './Home/inform.vue';
import personInfo from './Home/personInfo.vue';
import personSetting from './Home/personSetting.vue';
  export default {
    components:{ accountSafety, inform, personInfo, personSetting },
    data(){
      return{
        navList:[
          {
            icon:'icon-renwu',
            text:'个人资料',
            active:true,
            path:'personInfo'
          },
          {
            icon:'icon-Admin',
            text:'站内通知',
            active:false,
            path:'inform'
          },
          {
            icon:'icon-shezhi',
            text:'个人设置',
            active:false,
            path:'personSetting'
          },
          {
            icon:'icon-anquan',
            text:'账户安全',
            active:false,
            path:'accountSafety'
          }
        ],
        liName:'个人资料',
        pageName:'personInfo'
      }
    },
    methods:{
      cutClassName(path,name){
        this.pageName = path;
        this.navList.forEach((ele,idx) => {
          this.navList[idx].active = false
          if(ele.text == name){
            this.navList[idx].active = true;
          }
        });
      }
    }
  }
</script>

<style lang="scss">
  // .layout{
  //   background-color: #0f1b2c !important;
  //   >div{
  //     width: 100%;
  //     background: url('~@/assets/images/zhiye_bg.png') no-repeat !important;
  //     background-size: 100% 100% !important;
  //   }
  // }
</style>

<style lang="scss" scoped>

.occupation{
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: rgba($color: #172945, $alpha: 0.9);
  position: relative;

  .nav{
    width: 388px;
    min-height: 100%;
    background: #000B1F;
    box-shadow: 0px 0px 23px 6px rgba(4, 21, 43, 0.46);
    opacity: 0.9;

    .nav_wrap{
      padding-top: 40px;
      >li{
        width: 387px;
        height: 90px;
        line-height: 90px;
        margin-bottom: 8px;
        font-size: 26px;
        padding-left: 54px;
        color: rgba($color: #FFFFFF, $alpha: 0.5);
        background-color: rgba($color: #13253F, $alpha: 0.5);
        box-sizing: border-box;
        border-radius: 4px;
        cursor: pointer;
        >span{
          position: relative;
          top: 4px;
          margin-right: 10px;
          >i{
            font-size: 35px;
          }
        }

        &:hover{
          color: #FFFFFF;
          background-color: #13253F;
        }
      }

      .active{
        color: #FFFFFF;
        background-color: rgba($color: #66CCFF, $alpha: 0.5);
        &:hover{
          color: #FFFFFF;
          background-color: rgba($color: #66CCFF, $alpha: 0.5);
        }
      }
    }
  }

  .content{
    width: 1415px;
    min-height: 870px; 
    margin: 38px 77px 52px 0;
    border-radius: 4px;
    background: rgba($color: #0E1F35, $alpha: 0.5);
    overflow: hidden;

  }
}
</style>