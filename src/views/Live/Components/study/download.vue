<template>
  <div class="download">
    <div class="download_wrap">
      <div class="download_head">
        <p>选择课件</p>
        <p @click="closePage">x</p>
      </div>

      <div class="download_content">
        <ul>
          <li v-for="(item,index) in kejianArr" :key="index" :class="{'li_active':item == kejianName}" @click="cutKejian(item)">{{item}}</li>
        </ul>
      </div>

      <div class="download_btn" @click="closePage">
        <span><img src="@/assets/images/download.png" alt=""></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      showDownload:{
        type:Boolean
      }
    },
    data(){
      return{
        kejianArr:['课件1','课件2','课件3','课件4','课件5'],
        kejianName:'课件1'
      }
    },
    methods:{
      cutKejian(name){
        this.kejianName = name;
      },
      closePage(){
        this.$emit('update:showDownload',false);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .download{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;

    .download_wrap{
      width: 646px;
      height: 701px;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      background-color: #395372;

      .download_head{
        width: 646px;
        height: 54px;
        padding: 0 27px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #FFFFFF;
        font-size: 24px;
        background-color: #333333;
        >p:last-child{
          width: 50px;
          height: 50px;
          line-height: 50px;
          text-align: right;
          cursor: pointer;
        }
      }

      .download_content{
        width: 608px;
        height: 480px;
        overflow: auto;
        margin: 30px auto 0;
        padding: 14px 8px;
        border: 2px solid #283A51;
        border-radius: 4px;
        box-sizing: border-box;
        &::-webkit-scrollbar {
          /*滚动条整体样式*/
          width : 12px;  /*高宽分别对应横竖滚动条的尺寸*/
          height: 1px;
        }
        &::-webkit-scrollbar-thumb {
          /*滚动条里面小方块*/
          border-radius: 10px;
          background   : #6182AB;
        }
        &::-webkit-scrollbar-track {
          /*滚动条里面轨道*/
          // box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
          border-radius: 5px;
          background   : #203143;
        }

        &::-webkit-scrollbar-button:vertical:decrement,::-webkit-scrollbar-button:vertical:increment{
          background: url('~@/assets/images/top1.png') no-repeat;
          background-size: 100% 100%;
        }
        >ul{

          >li{
            height: 46px;
            line-height: 46px;
            padding-left: 23px;
            margin-bottom: 14px;
            border-radius: 4px;
            color: #CCCCCC;
            background: #283A51;
            cursor: pointer;
            &:hover{
              color: #fff;
            }
          }
          .li_active{
            color: #66CCFF;
            position: relative;
            &::before{
              content: '';
              display: block;
              width: 6px;
              height: 46px;
              position: absolute;
              left: 0;
              top: 0;
              border-radius: 3px;
              background-color: #66CCFF;
            }
          }
        }
      }

      .download_btn{
        width: 294px;
        height:70px ;
        margin: 27px auto;
        box-shadow: 0px 4px 5px 0px rgba(4, 23, 34, 0.2);
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background: url('~@/assets/images/btn2.png') no-repeat;
        background-size: 100% 100%;
        &:hover{
          background: url('~@/assets/images/btn1.png') no-repeat;
          background-size: 100% 100%;
        }
        &:active{
          color: rgba($color: #fff, $alpha: 0.5);
          background: url('~@/assets/images/btn3.png') no-repeat;
          background-size: 100% 100%;
        }
        >span{
          display: inline-block;
          width: 31px;
          height: 31px;
          >img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>