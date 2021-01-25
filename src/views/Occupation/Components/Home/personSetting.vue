<template>
  <div class="person_setting">
    <div class="person_style">
      <div>个人主页风格</div>
      <div>
        <p v-for="(item,index) in personStyle" :key="index" @click="cutStyle(index)" :class="{'active':item.isActive}">{{item.sex}}</p>
      </div>
    </div>

    <div class="show_dianzang">
      <div>是否展示点赞记录</div>
      <div>
        <p v-for="(item,index) in showDianzang" :key="index" @click="cutDianzang(index)" :class="{'active':item.isActive}">{{item.sex}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        personStyle:[
          {sex:'社交风格',isActive:true},
          {sex:'销售风格',isActive:false},
        ],
        showDianzang:[
          {sex:'是',isActive:true},
          {sex:'否',isActive:false},
        ],
      }
    },
    methods:{
      cutStyle(idx){
        this.personStyle.forEach((ele,index) => {
          this.personStyle[index].isActive = false;
          this.personStyle[idx].isActive = true;
        });
      },
      cutDianzang(idx){
        this.showDianzang.forEach((ele,index) => {
          this.showDianzang[index].isActive = false;
          this.showDianzang[idx].isActive = true;
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .person_setting{
    width: 100%;
    height: 100%;
    padding: 107px 47px;
    font-size: 26px;
    color: #D6E9FF;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;

    >div{
      display: flex;
      align-items: center;
      height: 54px;
      >div{
        display: flex;
      }
      >div:last-child{
        margin-left: 105px;
        width: 298px;
        height: 54px;
        background: #0A1C33;
        border-radius: 4px;
        display: flex;
        align-items: center;
        >p{
          flex: 1;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
        .active{
          color: #fff;
          background: url('~@/assets/images/sex_bg.png') no-repeat ;
          background-size: 100% 100% ;
        }
      }
    }

    .show_dianzang{
      >div:last-child{
        margin-left: 54px;
      }
    }
  }
</style>