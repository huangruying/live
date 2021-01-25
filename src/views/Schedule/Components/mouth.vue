<template>
  <div class="mouth">
    <div class="week_wrap">
      <div v-for="(item,index) in weekList" :key="index">{{item}}</div>
      <span class="week_left" @click="preve"></span>
      <span class="week_right" @click="next"></span>
    </div>

    <!-- <table class="table"  border="1" cellspacing="0">
      <tr v-for="(item,index) in mouthList" :key="index">
        <td v-for="(ele,index) in item" :key="index" :class="{'no_active':!ele.isActive,'active':ele.courseList.length>0}">
          {{ele.num}}
          <span>{{ele.text}}</span>
          <p v-for="(item,index) in ele.courseList" :key="index">{{item}}</p>
        </td>
      </tr>
    </table> -->
    <div class="calender">
      <el-calendar v-model="value" id="calendar" >
        <template
          slot="dateCell"
          slot-scope="{data}">
          <p :class="(dealMyDate(data.day)).length>0?'is-selected_bg':''"> <!--这里原本有动态绑定的class，去掉-->
            <span>
              <span>{{ data.day.split('-').slice(2).join('-') }}</span>
              <span>十五</span>
            </span>
            <br>
            <!-- {{dealMyDate(data.day)}} -->
            <span v-for="(item,index) in (dealMyDate(data.day))" :key="index">{{item}}</span>
          </p>
        </template>
      </el-calendar>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        weekList:['周日','周一','周二','周三','周四','周五','周六'],
        mouthList:[
          [
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
            ],[
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
                courseList:[]
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
                courseList:['【早上】UI设计课','【早上】直播课','【下午】3D投影大赛']
              },
              {
                num:12,
                text:'十五',
                isActive:true,
                courseList:[]
              },
            ],
          [
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
                courseList:[]
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
                courseList:[]
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
            ],
          [
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
                courseList:['【早上】UI设计课','【早上】直播课','【更多......】']
              },
              {
                num:25,
                text:'十五',
                isActive:true,
                courseList:['【早上】UI设计课','【早上】直播课']
              },
              {
                num:26,
                text:'十五',
                isActive:true,
                courseList:[]
              },
            ],
          [
              {
                num:27,
                text:'十五',
                isActive:true,
                courseList:[]
              },
              {
                num:28,
                text:'十五',
                isActive:true,
                courseList:[]
              },
              {
                num:29,
                text:'十五',
                isActive:true,
                courseList:[]
              },
              {
                num:30,
                text:'十五',
                isActive:true,
                courseList:[]
              },
              {
                num:31,
                text:'十五',
                isActive:true,
                courseList:[]
              },
              {
                num:1,
                text:'十五',
                isActive:false,
                courseList:[]
              },
              {
                num:2,
                text:'十五',
                isActive:false,
                courseList:[]
              },
            ]
        ],
        value: new Date(),
        resDate: [
          {"date":"2021-01-22","content":['【早上】UI设计课','【早上】直播课','【下午】3D投影大赛']},
          {"date":"2021-01-24","content":['【早上】UI设计课','【早上】直播课','【更多......】']},
          {"date":"2021-01-11","content":['【早上】UI设计课','【早上】直播课']}
        ],
      }
    },
    mounted(){
      this.$emit('cutDate',new Date());
      this.$nextTick(() => {
        // 点击前一个月
        let prevBtn = document.querySelector(
            '.el-calendar__button-group .el-button-group>button:nth-child(1)');
        prevBtn.addEventListener('click', () => {
          this.$emit('cutDate',new Date(this.value));
        })
      })

      this.$nextTick(() => {
        // 点击后一个月
        let prevBtn = document.querySelector(
          '.el-calendar__button-group .el-button-group>button:last-child');
        prevBtn.addEventListener('click', () => {
          this.$emit('cutDate',new Date(this.value));
        })
      })

      this.$nextTick(() => {
        // 点击后一个月
        let prevBtn = document.querySelector(
          '.el-calendar-table__row .prev');
        prevBtn.addEventListener('click', () => {
          console.log(111);
          this.$emit('cutDate',new Date(this.value));
        })
      })
      this.$nextTick(() => {
        // 点击后一个月
        let prevBtn = document.querySelector(
          '.el-calendar-table__row .next');
        prevBtn.addEventListener('click', () => {
          console.log(222);
          this.$emit('cutDate',new Date(this.value));
        })
      })
    },
    methods:{
      dealMyDate(v) {
        // console.log(v)
        let len = this.resDate.length
        let res = ""
        for(let i=0; i<len; i++){
          if(this.resDate[i].date == v) {
            res = this.resDate[i].content
            break
          }
        }
        return res
      },
      preve(){
        let prevBtn = document.querySelector(
            '.el-calendar__button-group .el-button-group>button:nth-child(1)');
        prevBtn.click();
      },
      next(){
        let prevBtn = document.querySelector(
          '.el-calendar__button-group .el-button-group>button:last-child');
        prevBtn.click();
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
        line-height: 82px;
        text-align: center;
        font-size: 26px;
        color: #66CCFF;
        cursor: pointer;
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
        >td{
          height: 151px;
          width: 204px;
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
        .no_active{
          color: #666666 !important;
        }
        .active{
          font-size: 18px;
          position: relative;

          >p{
            line-height: 32px;
            margin-left: -15px;
            color: #FFFFFF;
            &::after{
              content: '';
              display: block;
              position: absolute;
              left: 0;
              top: 0;
              width: 210px;
              height: 4px;
              background: url('./../../../assets/images/b1.png') no-repeat;
              background-size: 100% 100%;
              z-index: 999999;
            }
          }
          &::before{
            content: '';
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 210px;
            height: 155px;
            background: url('./../../../assets/images/bottom.png') no-repeat;
            background-size: 100% 100%;
          }
          &::after{
            content: '';
            display: block;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 210px;
            height: 4px;
            background: url('./../../../assets/images/b1.png') no-repeat;
            background-size: 100% 100%;
            z-index: 999999;
          }
        }
        >td:last-child{
          border-right: 1px solid #6d6e70;
        }
      }
    }

    .calender{
      width: 1467px;
      height: 761px;
      overflow: hidden;
      margin: auto;
    }

    
  }
</style>