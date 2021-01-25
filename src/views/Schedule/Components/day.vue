<template>
  <div class="day">
    <div class="day_wrap">
      <div v-for="(item,index) in weekList" :key="index" :class="{'week_active':item.week==currentWeek}" @click="cutWeek(item.week)">
        <p>{{item.week}}</p>
        <p>{{item.day}}</p>
      </div>
      <span class="week_left"></span>
      <span class="week_right"></span>
    </div>
    
    <div class="day_bottom">
      <ul class="day_lefy">
        <li>
          <div>
            <p>凌晨</p>
            <p>00:00~06:00</p>
          </div>
          <div>
            <p></p>
          </div>
        </li>
        <li>
          <div>
            <p>早上</p>
            <p>06:00~12:00</p>
          </div>
          <div>
            <p class="dat_left_active">UI设计课</p>
          </div>
        </li>
        <li>
          <div>
            <p>下午</p>
            <p>12:00~18:00</p>
          </div>
          <div>
            <p></p>
          </div>
        </li>
        <li>
          <div>
            <p>晚上</p>
            <p>18:00~00:00</p>
          </div>
          <div>
            <p></p>
          </div>
        </li>
      </ul>
      <ul class="day_right">
        <li>
          <p>UI设计课</p>
          <div>
            <p class="date_a">2020年12月11日</p>
            <p class="week_a">星期五</p>
            <p class="time_a">08:30-11:30</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        weekList:[
          {week:'6 周日',day:'十月廿二'},
          {week:'7 周一',day:'十月廿二'},
          {week:'8 周二',day:'十月廿二'},
          {week:'9 周三',day:'十月廿二'},
          {week:'10 周四',day:'十月廿二'},
          {week:'11 周五',day:'十月廿二'},
          {week:'12 周六',day:'十月廿二'}
        ],
        currentWeek:'11 周五',
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
        ]
      }
    },
    methods:{
      cutWeek(name){
        this.currentWeek = name;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .day{
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #66CCFF;
    .day_wrap{
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

    .day_bottom{
      width: 100%;
      display: flex;
      .day_lefy{
        width: 1192px;
        >li{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 27px;
          border-right: 2px solid #66CCFF;
          overflow: hidden;
          >div:first-child{
            margin-left: 171px;
            margin-right: 19px;
            text-align: center;
            font-size: 16px;
            color: #999999;
            >p:first-child{
              font-size: 24px;
              margin-bottom: 10px;
            }
          }
          >div:last-child{
            width: 896px;
            height: 191px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #999999;
            border-right: none;
            box-sizing: border-box;
            position: relative;
            >p{
              width: 896px;
              height: 68px;
              font-size:30px;
              color: #FFFFFF;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .dat_left_active{
              background: url('~@/assets/images/b3.png') no-repeat;
              background-size: 100% 100%;
            }

            &::after{
              content: '';
              display: block;
              position: absolute;
              left: 0px;
              top: 20px;
              width: 30px;
              height: 100%;
              background: url('~@/assets/images/left_.png') no-repeat;
              background-size: auto 80%;
            }
          }
        }
      }

      .day_right{
        padding: 37px 28px;
        >li{
          width: 625px;
          border-bottom: 2px solid #66CCFF;
          >p{
            font-size: 26px;
            color: #FFFFFF;
          }
          >div{
            margin: 12px 0 13px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;

            .date_a,.week_a{
              font-size: 20px;
              color: #999999;
            }

            .time_a{
              font-size: 36px;
              color: #66CCFF;
            }
          }
        }
      }
    }
  }
</style>