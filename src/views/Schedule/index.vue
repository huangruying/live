<template>
  <div class="schedule">
      <div class="date_wrap">
        <div class="date_btn">
          <div @click="clickMouth" :class="{'date_active':pageName=='mounth'}">月</div>
          <span></span>
          <div @click="clickWeek" :class="{'date_active':pageName=='week'}">周</div>
          <span></span>
          <div @click="clickDay" :class="{'date_active':pageName=='day'}">日</div>
        </div>
        <div class="yead_mouth">{{currenTime.getFullYear()}}年{{currenTime.getMonth()+1}}月</div>
      </div>
      <components :is="pageName" @cutPageName="updatePageName" @cutDate="cutCurrentTime"></components>
  </div>
</template>

<script>
    import mounth from './Components/mouth.vue';
    import week from './Components/week.vue';
    import day from './Components/day.vue';
  export default {
      components:{ mounth, week, day },
    data(){
      return{
        pageName:'mounth',
        currenTime:new Date()
      }
    },
    methods:{
        updatePageName(name){
            this.pageName = name;
        },
        clickMouth(){
          this.pageName = 'mounth';
        },
        clickWeek(){
          this.pageName = 'week';
        },
        clickDay(){
          this.pageName = 'day';
        },
        cutCurrentTime(e){
          this.currenTime = e;
          console.log(e);
        }
    }
  }
</script>

<style lang="scss" scoped>
  .schedule{
    width: 100%;
    height: 100%;
    background: rgba(29, 31, 36, 0.9);

    .date_wrap{
      padding: 47px 239px 0;
      position: relative;

      .date_btn{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 617px;
        height: 80px;
        margin: auto;
        padding: 10px 0;
        font-size: 24px;
        border-radius: 4px;
        box-sizing: border-box;
        color: #999999;
        background-color: #24272E;
        >div{
          width: 184px;
          height: 60px;
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
        .date_active{
          color: #FFFFFF;
          background-color: #25B0D7;
        }
        >span{
          display: inline-block;
          width: 4px;
          height: 60px;
          margin: 0 8px;
          border-radius: 2px;
          background-color: #66CCFF;
        }
      }

      .yead_mouth{
        position: absolute;
        top: 59px;
        left: 239px;
        font-size: 36px;
        color: #FEFEFE;
      }

    }
  }
</style>