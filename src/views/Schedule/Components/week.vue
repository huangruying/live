<template>
  <div class="mouth">
    <div class="week_wrap">
      <div v-for="(item,index) in weekList[i]" :key="index" :class="{'week_active':item.week==currentWeek}" @click="cutWeek(item.week)">
        <p>{{item.week}}</p>
        <p>{{item.day}}</p>
      </div>
      <span class="week_left" @click="preve"></span>
      <span class="week_right" @click="next"></span>
    </div>

    <table class="table"  border="1" cellspacing="0">
      <tr v-for="(item,index) in mouthList" :key="index">
        <div class="time">
          <p>{{item.title}}</p>
          <p>{{item.time}}</p>
        </div>
        <td v-for="(ele,index) in item.list" :key="index" :class="{'no_active':!ele.isActive,'active':ele.courseList.length>0}">
          <p v-for="(item,index) in ele.courseList" :key="index">{{item}}</p>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        weekList:[[
          {week:'1 周日',day:'一月一'},
          {week:'2 周一',day:'一月二'},
          {week:'3 周二',day:'一月三'},
          {week:'4 周三',day:'一月四'},
          {week:'5 周四',day:'一月五'},
          {week:'6 周五',day:'一月六'},
          {week:'7 周六',day:'一月七'}],
          [
          {week:'8 周日',day:'一月八'},
          {week:'9 周一',day:'一月九'},
          {week:'10 周二',day:'一月十'},
          {week:'11 周三',day:'一月十一'},
          {week:'12 周四',day:'一月十二'},
          {week:'13 周五',day:'一月十三'},
          {week:'14 周六',day:'一月十四'}],
          [
          {week:'15 周日',day:'一月十五'},
          {week:'16 周一',day:'一月十六'},
          {week:'17 周二',day:'一月十七'},
          {week:'18 周三',day:'一月十八'},
          {week:'19 周四',day:'一月十九'},
          {week:'20 周五',day:'一月二十'},
          {week:'21 周六',day:'一月廿一'}],
          [
          {week:'22 周日',day:'一月廿二'},
          {week:'23 周一',day:'一月廿三'},
          {week:'24 周二',day:'一月廿四'},
          {week:'25 周三',day:'一月廿五'},
          {week:'26 周四',day:'一月廿六'},
          {week:'27 周五',day:'一月廿七'},
          {week:'28 周六',day:'一月廿八'}],
          [
          {week:'29 周日',day:'一月廿九'},
          {week:'30 周一',day:'一月三十'},
          {week:'31 周二',day:'一月叁一'},
          {week:'1 周三',day:'二月一'},
          {week:'2 周四',day:'二月二'},
          {week:'3 周五',day:'二月三'},
          {week:'4 周六',day:'二月四'}],
        ],
        currentWeek:'16 周一',
        mouthList:[
          {
            title:'凌晨',
            time:'00:00~06:00',
            list:[
              {
                num:29,
                text:'十五',
                isActive:false,
                courseList:[]
              },
              {
                num:30,
                text:'十五',
                isActive:false,
                courseList:[]
              },
              {
                num:1,
                text:'十五',
                isActive:true,
                courseList:[]
              },
              {
                num:2,
                text:'十五',
                isActive:true,
                courseList:[]
              },
              {
                num:3,
                text:'十五',
                isActive:true,
                courseList:[]
              },
              {
                num:4,
                text:'十五',
                isActive:true,
                courseList:[]
              },
              {
                num:5,
                text:'十五',
                isActive:true,
                courseList:[]
              },
            ]
          },
          {
            title:'上午',
            time:'06:00~12:00',
            list:[
              {
                num:6,
                text:'十五',
                isActive:true,
                courseList:[]
              },
              {
                num:7,
                text:'十五',
                isActive:true,
                courseList:['UI课']
              },
              {
                num:8,
                text:'十五',
                isActive:true,
                courseList:[]
              },
              {
                num:9,
                text:'廿五',
                isActive:true,
                courseList:[]
              },
              {
                num:10,
                text:'十五',
                isActive:true,
                courseList:[]
              },
              {
                num:11,
                text:'廿七',
                isActive:true,
                courseList:['直播课']
              },
              {
                num:12,
                text:'十五',
                isActive:true,
                courseList:[]
              },
            ]
          },
          {
            title:'下午',
            time:'12:00~18:00',
            list:[
              {
                num:13,
                text:'十五',
                isActive:true,
                courseList:[]
              },
              {
                num:14,
                text:'十五',
                isActive:true,
                courseList:['3D投影大赛','截稿日期']
              },
              {
                num:15,
                text:'十五',
                isActive:true,
                courseList:[]
              },
              {
                num:16,
                text:'十五',
                isActive:true,
                courseList:['3D投影大赛','比赛日']
              },
              {
                num:17,
                text:'十五',
                isActive:true,
                courseList:[]
              },
              {
                num:18,
                text:'十五',
                isActive:true,
                courseList:[]
              },
              {
                num:19,
                text:'十五',
                isActive:true,
                courseList:[]
              },
            ]
            },
          {
            title:'晚上',
            time:'18:00~00:00',
            list:[
              {
                num:20,
                text:'十五',
                isActive:true,
                courseList:[]
              },
              {
                num:21,
                text:'十五',
                isActive:true,
                courseList:[]
              },
              {
                num:22,
                text:'十五',
                isActive:true,
                courseList:[]
              },
              {
                num:23,
                text:'十五',
                isActive:true,
                courseList:[]
              },
              {
                num:24,
                text:'十五',
                isActive:true,
                courseList:[]
              },
              {
                num:25,
                text:'十五',
                isActive:true,
                courseList:[]
              },
              {
                num:26,
                text:'十五',
                isActive:true,
                courseList:[]
              },
            ]
          },
        ],
        i:2
      }
    },
    methods:{
      cutWeek(name){
        this.currentWeek = name;
      },
      preve(){
        this.i>0?this.i--:this.i=4;
      },
      next(){
        this.i>0&&this.i<4?this.i++:this.i=1;
        console.log(this.i);
      },
    }
  }
</script>

<style lang="scss" scoped>
  .mouth{
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #66CCFF;
    .week_wrap{
      position: relative;
      padding: 14px 239px 19px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #66CCFF;
      box-sizing: border-box;
      
      >div{
        flex: 1;
        height: 82px;
        text-align: center;
        font-size: 26px;
        color:#66CCFF;
        cursor: pointer;
        opacity: 0.5;

        >p:first-child{
          margin-top: 11px;
        }

        >p:last-child{
          font-size: 16px;
          margin-top: 16px;
        }
      }

      .week_active{
        position: relative;
        opacity: 1;
        text-shadow: 3px 3px 3px rgba($color:#66CCFF, $alpha: 0.5);

        &::before{
          content: '';
          display: block;
          position: absolute;
          left: 50%;
          bottom: -22px;
          transform: translateX(-50%);
          width: 32px;
          height: 30px;
          background: url('~@/assets/images/b4.png') no-repeat;
          background-size: 100% 100%;
        }
      }

      .week_left{
        display: inline-block;
        width: 30px;
        height: 82px;
        position: absolute;
        left: 239px;
        top: 50%;
        transform: translateY(-50%);
        background: url('~@/assets/images/week_left.png') no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
        &:hover{
          width: 30px;
          height: 82px;
          position: absolute;
          left: 239px;
          top: 50%;
          transform: translateY(-50%) rotateY(180deg);
          background: url('~@/assets/images/week_right.png') no-repeat;
          background-size: 100% 100%;
        }
      }
      .week_right{
        display: inline-block;
        width: 30px;
        height: 82px;
        position: absolute;
        position: absolute;
        right: 239px;
        top: 50%;
        transform: translateY(-50%) rotateY(180deg);
        background: url('~@/assets/images/week_left.png') no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
        &:hover{
          width: 30px;
          height: 82px;
          position: absolute;
          right: 239px;
          top: 50%;
          transform: translateY(-50%) ;
          background: url('~@/assets/images/week_right.png') no-repeat;
          background-size: 100% 100%;
        }
      }
    }

    .table{
      width: 1467px;
      margin: 0 239px 5px;
      box-sizing: border-box;
      >tr{
        height: 151px;
        border-bottom: 4px solid #6d6e70;
        position: relative;
        overflow: hidden;

        .time{
          position: absolute;
          left: 140px;
          margin-top: 70px;
          text-align: center;
          color: #999999;
          font-size: 16px;
          >p:first-child{
            font-size: 24px;
          }
        }

        >td{
          height: 151px;
          width: 210px;
          padding: 23px 18px 0;
          box-sizing: border-box;
          border-left: 1px solid#6d6e70;
          font-size: 26px;
          color: #CCCCCC;
          overflow: hidden;
          >span{
            font-size: 18px;
          }
        }
        >td:last-child{
          border-right: 2px solid#6d6e70;
        }

        .no_active{
          color: #666666 !important;
        }

        .active{
          font-size: 18px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          >p{
            line-height: 32px;
            margin-left: -15px;
            color: #FFFFFF;
          }
          &::before{
            content: '';
            display: block;
            position: absolute;
            left: 0;
            top: 57%;
            transform: translateY(-50%);
            width: 210px;
            height: 75px;
            background: url('./../../../assets/images/bottom.png') no-repeat;
            background-size: 100% 100%;
            border-radius: 10px;
          }
        }
        >td:last-child{
          border-right: 1px solid #6d6e70;
        }

        &::after{
          content: '';
          display: block;
          position: absolute;
          left: 240px;
          width: 30px;
          height: 135px;
          margin-top: 15px;
          background: url('~@/assets/images/left_.png') no-repeat;
          background-size: auto 90%;
        }
      }
    }
  }
</style>