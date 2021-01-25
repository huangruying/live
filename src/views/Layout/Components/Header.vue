<template>
  <div class="header_wrap">
    <div class="head_border">
      <!-- <img src="@/assets/images/top_.png" alt=""> -->
    </div>

    <div class="header_content">
      <div class="con_left">
        <div>LOGO</div>
        <ul>
          <li v-for="(item,index) in routeList" :key="index" :class="{'active':$route.name==item.name,'forbidden':item.meta.isExploit!=''}"  @click="cutRouter(item.name)">
            <div class="block"></div>
            <div v-if="item.meta.isExploit">{{item.meta.name}}</div> 
            <div>{{item.meta.isExploit}}</div>
          </li>
        </ul>
      </div>
      <div class="con_right">
        <div class="user_icon"><img src="@/assets/images/user.png" alt=""></div>
        <div class="select_wrap">用户昵称</div>
        <div class="info_icon">
          <span></span>
          <!-- <img src="@/assets/images/info.png" alt=""> -->
          <span>99+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        routeList:[]
      }
    },
    methods:{
      cutRouter(name){
        if(name == ''){return;}
        this.$router.push({name});
      },
    },
    created(){
      this.routeList = this.$router.options.routes[3].children;
    }
  }
</script>

<style lang="scss" scoped>
  .header_wrap{
    width: 100%;
    background: url('~@/assets/images/nav_bg.png') no-repeat;
    background-size: 100% 100%;
    .head_border{
      width: 1334px;
      height: 21px;
      margin:  auto;
      position: relative;
      >img{
        width: 100%;
        height: 100%;
      }
    }

    .header_content{
      width: 100%;
      height: 90px;
      padding-top: 20px;
      padding-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 76px;
      box-sizing: border-box;
      border-bottom: 1px solid #66CCFF;        
      overflow: hidden;

      .con_left{
        height: 100%;
        display: flex;
        align-items: center;

        >div{
          font-size: 38px;
          color: #00AEFF;
          font-weight: 500;
        }

        >ul{
          height: 100%;
          margin-left: 40px;
          display: flex;
          align-items: center;
          >li{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            height: 100%;
            padding: 0 34px 10px;
            font-size: 30px;
            font-weight: 200;
            color: rgba($color: #fff, $alpha: 0.5);
            cursor: pointer;
            white-space: nowrap;
            overflow: hidden;
            box-sizing: border-box;
            position: relative;
            &:hover{
              color:#FFFFFF;
            }
            .block{
              display: none;
            }

            >div:last-child{
              height: 22px;
              line-height: 22px;
              font-size: 12px;
              color: #0099CC;
            }
          }
          >li:nth-child(1){
            padding: 0;
            width: 98px;
            height: 68px;
            line-height: 68px;
            background: url('~@/assets/images/sk1.png') no-repeat;
            background-size: 100% 100%;
            overflow: hidden;
            &:hover{
              background: url('~@/assets/images/sk2.png') no-repeat;
              background-size: 100% 100%;
            }
            &:active{
              background: url('~@/assets/images/sk4.png') no-repeat;
              background-size: 100% 100%;
            }
            .block{
              width: 98px;
              height: 68px;
              position: absolute;
              top: 0;
              left: 0;
              background: url('~@/assets/images/sk3.png') no-repeat;
              background-size: 100% 100%;
            }
          }
          >li:nth-child(2){
            padding: 0;
            width: 98px;
            height: 68px;
            line-height: 68px;
            background: url('~@/assets/images/xk1.png') no-repeat;
            background-size: 100% 100%;
            overflow: hidden;
            &:hover{
              background: url('~@/assets/images/xk2.png') no-repeat;
              background-size: 100% 100%;
            }
            &:active{
              background: url('~@/assets/images/xk4.png') no-repeat;
              background-size: 100% 100%;
            }
            .block{
              width: 98px;
              height: 68px;
              position: absolute;
              top: 0;
              left: 0;
              background: url('~@/assets/images/xk3.png') no-repeat;
              background-size: 100% 100%;
            }
          }
          >li:nth-child(3){
            padding: 0;
            width: 124px;
            height: 68px;
            line-height: 68px;
            background: url('~@/assets/images/rcb1.png') no-repeat;
            background-size: 100% 100%;
            overflow: hidden;
            &:hover{
              background: url('~@/assets/images/rcb2.png') no-repeat;
              background-size: 100% 100%;
            }
            &:active{
              background: url('~@/assets/images/rcb4.png') no-repeat;
              background-size: 100% 100%;
            }
            .block{
              width: 124px;
              height: 68px;
              position: absolute;
              top: 0;
              left: 0;
              background: url('~@/assets/images/rcb3.png') no-repeat;
              background-size: 100% 100%;
            }
          }
          >li:nth-child(7){
            padding: 0;
            width: 98px;
            height: 68px;
            line-height: 68px;
            background: url('~@/assets/images/zy1.png') no-repeat;
            background-size: 100% 100%;
            overflow: hidden;
            &:hover{
              background: url('~@/assets/images/zy2.png') no-repeat;
              background-size: 100% 100%;
            }
            &:active{
              background: url('~@/assets/images/zy4.png') no-repeat;
              background-size: 100% 100%;
            }
            .block{
              width: 98px;
              height: 68px;
              position: absolute;
              top: 0;
              left: 0;
              background: url('~@/assets/images/zy3.png') no-repeat;
              background-size: 100% 100%;
            }
          }

          .active{
            color:  #fff;
            text-shadow: 3px 3px 3px #fff;
            background: transparent !important;
            .block{
              display: block;
            }
            &:hover{
              background: transparent !important;
            }
            &:active{
              background: transparent !important;
            }
          }
          .forbidden{
            color: rgba($color: #fff, $alpha: 0.2);
            &:hover{
              color: rgba($color: #fff, $alpha: 0.2);
            }
          }
        }
      }

      .con_right{
        display: flex;
        align-items: center;
        cursor: pointer;

        .user_icon{
          width: 58px;
          height: 58px;
          position: relative;
          >img{
            position: absolute;
            left: 10px;
            width: 100%;
            height: 100%;
          }
        }

        .select_wrap{
          width: 141px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          border: 1px solid #666666;
          color: #CCCCCC;
          &:hover{
            border: 1px solid #FFFFFF;
            color: #FFFFFF;
          }

          >span{
            display: inline-block;
            height: 42px;
            line-height: 50px;
            width: 12px;
            font-size: 20px;
            margin-left: 10px;
            transform: rotate(180deg);
          }
        }

        .info_icon{
          width: 76px;
          height: 42px;
          border: 1px solid #666666; 
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          >span:first-child{
            display: inline-block;
            width: 26px;
            height: 26px;
            background: url('~@/assets/images/info1.png') no-repeat;
            background-size: 100% 100%;
          }
          &:hover{
            border: 1px solid #FFFFFF;
            color: #FFFFFF;
            >span:first-child{
              background: url('~@/assets/images/info.png') no-repeat;
              background-size: 100% 100%;
            }
          }
          >span:last-child{
            display: inline-block;
            width: 27px;
            height: 13px;
            position: absolute;
            bottom: 8px;
            left: 37px;
            border-radius: 7px;
            font-size: 12px;
            text-align: center;
            background: #CC3333;
            color:#FFFFFF;
          }
        }
      }
    }
  }
</style>