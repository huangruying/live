<template>
  <div class="role">
    <div class="title_item">
      <div><span class="active" @click="cutComPage">切换职业</span></div>
      <div><span>能力参考</span></div>
      <div><span>专业能力</span></div>
      <div><span>综合技能</span></div>
    </div>
    <ul>
      <li>
        <div>
          <p><img src="@/assets/images/d.png" alt=""></p>
          <p>初级绘图师</p>
          <p>3K-6K</p>
        </div>

        <div class="text">根据卡通形象制作qq微 信表情</div>

        <div class="two">
          <div class="guanlian">
            <p>Ps</p>
            <p>LV.1</p>
          </div>
          <div class="guanlian">
            <p>Ai</p>
            <p>LV.1</p>
          </div>
          <div>
            <p>C4D</p>
            <p>LV.1</p>
          </div>
        </div>

        <div class="threee">
          <div class="guanlian">
            <p><img src="@/assets/images/bb2.png" alt=""></p>
            <p>LV.1</p>
          </div>
          <div class="guanlian">
            <p><img src="@/assets/images/h3.png" alt=""></p>
            <p>LV.1</p>
          </div>
        </div>
      </li>
      <li>
        <div>
          <p><img src="@/assets/images/b.png" alt=""></p>
          <p>初级绘图师</p>
          <p>3K-6K</p>
        </div>

        <div class="text">独立完成一套SG(风格指 引系统)、LOGO、插画、 海报、画册设计</div>

        <div class="two">
          <div class="guanzhu">
            <p>Ps</p>
            <p>LV.1</p>
          </div>
          <div class="guanzhu">
            <p>Ai</p>
            <p>LV.1</p>
          </div>
          <div class="guanzhu">
            <p>C4D</p>
            <p>LV.1</p>
          </div>
        </div>

        <div class="threee">
          <div class="guanzhu">
            <p><img src="@/assets/images/bb1.png" alt=""></p>
            <p>LV.1</p>
          </div>
          <div class="guanzhu">
            <p><img src="@/assets/images/h2.png" alt=""></p>
            <p>LV.1</p>
          </div>
        </div>
      </li>
      <li>
        <div>
          <p><img src="@/assets/images/c.png" alt=""></p>
          <p>初级绘图师</p>
          <p>3K-6K</p>
        </div>

        <div class="text">独立完成全案类电商页面 设计，网页设计，创意广 告海报，H5等“新零售新 视觉”设计和</div>

        <div class="two">
          <div class="hiddent">
            <p>Ps</p>
            <p>LV.1</p>
          </div>
          <div class="hiddent">
            <p>Ps</p>
            <p>LV.1</p>
          </div>
          <div class="hiddent">
            <p>Ps</p>
            <p>LV.1</p>
          </div>
        </div>

        <div class="threee">
          <div class="guanzhu">
            <p><img src="@/assets/images/bb1.png" alt=""></p>
            <p>LV.1</p>
          </div>
          <div>
            <p><img src="@/assets/images/xx1.png" alt=""></p>
            <p>LV.1</p>
          </div>
          <div>
            <p><img src="@/assets/images/dp.png" alt=""></p>
            <p>LV.1</p>
          </div>
        </div>
      </li>
      <li>
        <div>
          <p><img src="@/assets/images/d.png" alt=""></p>
          <p>初级绘图师</p>
          <p>3K-6K</p>
        </div>

        <div class="text">根据影视CG脚本或者美宣 方案，设计角色、场景、 道具、关键帧、氛围图等</div>

        <div class="two">
          <div class="hiddent">
            <p>Ps</p>
            <p>LV.1</p>
          </div>
          <div class="hiddent">
            <p>Ps</p>
            <p>LV.1</p>
          </div>
          <div class="hiddent">
            <p>Ps</p>
            <p>LV.1</p>
          </div>
        </div>

        <div class="threee">
          <div class="guanzhu hiddent">
            <p><img src="@/assets/images/bb1.png" alt=""></p>
            <p>LV.1</p>
          </div>
          <div class="guanzhu">
            <p><img src="@/assets/images/xx1.png" alt=""></p>
            <p>LV.1</p>
          </div>
          <div class="guanzhu">
            <p><img src="@/assets/images/dp.png" alt=""></p>
            <p>LV.1</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    methods:{
      cutComPage(){
        this.$emit('cutPage','person')
      }
    }
  }
</script>

<style lang="scss" scoped>
.role{
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: #182C4C;

  .title_item{
    height: 83px;
    width: 100%;
    display: flex;
    background-color: #172B4B;

    >div{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      >span{
        width: 160px;
        height: 60px;
        line-height: 60px;
        font-size: 30px;
        color: #FFFFFF;
        text-align: center;
        display: block;
        cursor: pointer;
      }
      .active{
        width: 160px;
        height: 60px;
        font-size: 24px;
        background: url('~@/assets/images/btn3.png') no-repeat ;
        background-size: 100% 100% ;
      }
    }
    >div:nth-child(n+3){
      flex: 2;
    }
  }

  >ul{
    >li{
      width: 100%;
      height: 221px;
      display: flex;
      align-items: center;
      background: url('~@/assets/images/1bg.png') no-repeat ;
      background-size: 100% 100% ;
      >div:first-child{
        text-align: center;
        margin-left: 54px;
        >p:nth-child(1){
          width: 190px;
          height: 150px;
          >img{
            width: 100%;
            height: 100%;
          }
        }
        >p:nth-child(2){
          font-size: 18px;
          color: #99CCFF;
        }
        >p:nth-child(3){
          margin-top: 2px;
          font-size: 14px;
          color: #99CCFF;
        }
      }

      .text{
        width: 224px;
        font-size: 22px;
        line-height: 35px;
        color: #99CCFF;
        margin-left: 180px;
      }

      .two,.threee{
        margin-left: 144px;
        display: flex;

        >div{
          width: 110px;
          height: 110px;
          margin-right: 65px;
          background: url('~@/assets/images/wu.png') no-repeat ;
          background-size: 100% 100% ;
          text-align: center;
          color: #999999;
          
          >p:first-child{
            margin-top: 30px;
            margin-bottom: 5px;
            font-weight: bold;
          }
        }
        >div:last-child{
          margin-right: 0px;
        }
        .guanlian{
          color: #CCFFFF;
          background: url('~@/assets/images/you.png') no-repeat ;
          background-size: 100% 100% ;
        }
        .guanzhu{
          position: relative;
          &::before{
            content: '';
            display: block;
            width: 36px;
            height: 138px;
            position: absolute;
            left: 50%;
            top: -113%;
            transform: translateX(-50%);
            background: url('~@/assets/images/lj.png') no-repeat ;
            background-size: 100% 100% ;
          }
        }
        .hiddent{
          visibility: hidden;
        }
      }
      .threee{
        >div{
          >p:first-child{
            width: 34px;
            height: 34px;
            margin: 22px auto auto;
            >img{
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    >li:nth-child(n+2){
      background: url('~@/assets/images/2bg.png') no-repeat ;
      background-size: 100% 100% ;
    }
  }
}
</style>