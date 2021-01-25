<template>
  <div class="download">
    <div class="download_wrap">
      <div class="download_head">
        <p>设置</p>
        <p @click="closePage">x</p>
      </div>

      <div class="download_content">
        <div>音视频通话：</div>
        <div class="maikefeng">
          <p>麦克风：</p>
          <el-select v-model="value" placeholder="选择国家">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="yinliang">
          <p>音量：</p>
          <p><span></span><span></span></p>
        </div>
        <div class="zidongtiaojie">
          <p></p>
          <p>
            <span>
              <el-checkbox></el-checkbox>
            </span>
            <span>自动调节麦克风音量</span>
          </p>
        </div>
        <div class="maikefengwenzi">
          <p></p>
          <p>请点击麦克风测试，对着麦克风说话进行试听</p>
        </div>

        <div class="maikefengyinliao">
          <p></p>
          <div>
            <p>麦克风测试</p>
            <ul>
              <li v-for="item in 12" :key="item" :class="{'li_avtive':item<item1}" @click="liClick1(item)"></li>
            </ul>
          </div>
        </div>
        
        <div class="maikefeng">
          <p>扬声器：</p>
          <!-- <p>Windows默认设备</p> -->
          <el-select v-model="value1" placehol  der="选择国家">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="yinliang">
          <p>音量：</p>
          <p><span></span><span></span></p>
        </div>

        <div class="maikefengwenzi">
          <p></p>
          <p>请点击播放测试，试试能否听到声音</p>
        </div>
        
        <div class="maikefengyinliao">
          <p></p>
          <div>
            <p>播放测试音量</p>
            <ul>
              <li v-for="item in 12" :key="item" :class="{'li_avtive':item<item2}" @click="liClick2(item)"></li>
            </ul>
          </div>
        </div>

        <div class="maikefeng">
          <p>摄像头：</p>
          <!-- <p>Lenovo Easy Camera</p> -->
          <el-select v-model="value2" placeholder="选择国家">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>

        <div class="tupian">
          <p></p>
          <p>
            <img src="@/assets/images/img1.png" alt="">
          </p>
        </div>
      </div>

      <div class="download_btn">
        <p @click="closePage">取消</p>
        <p>保存</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      settting:{
        type:Boolean
      }
    },
    data(){
      return{
        kejianArr:['课件1','课件2','课件3','课件4','课件5'],
        kejianName:'课件1',
        item1:3,
        item2:3,
        options: [{
          value: 'Windows默认设备',
          label: 'Windows默认设备'
        },{
          value: 'Windows默认设备1',
          label: 'Windows默认设备1'
        },],
        options1: [{
          value: 'Windows默认设备',
          label: 'Windows默认设备'
        },{
          value: 'Windows默认设备1',
          label: 'Windows默认设备1'
        },],
        options2: [{
          value: 'Lenovo Easy Camera',
          label: 'Lenovo Easy Camera'
        },{
          value: 'Windows默认设备',
          label: 'Windows默认设备'
        },],
        value: 'Windows默认设备',
        value1: 'Windows默认设备',
        value2: 'Lenovo Easy Camera',
        checkList:['']
      }
    },
    methods:{
      cutKejian(name){
        this.kejianName = name;
      },
      closePage(){
        this.$emit('update:settting',false);
      },
      liClick1(index){
        this.item1 = index+1;
      },
      liClick2(index){
        this.item2 = index+1;
      },
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
      height: 1032px;
      position: fixed;
      left: 50%;
      top: 0;
      transform: translateX(-50%) ;
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
        width: 615px;
        height: 778px;
        overflow: auto;
        margin: 30px auto 0;
        padding: 14px 8px;
        border: 2px solid #283A51;
        border-radius: 4px;
        box-sizing: border-box;

        -webkit-user-select :none;
        &::-webkit-scrollbar {
          display: none; /* Chrome Safari */
        }
        -ms-overflow-style: none; /* IE 10+ */
        scrollbar-width: none; /* Firefox */

        >div:nth-child(1){
          font-size: 23px;
          line-height: 36px;
          margin-bottom: 21px;
          color: #FFFFFF;
        }

        >div:nth-child(n+2){
          display: flex;
          align-items: center;
          >p:first-child{
            width: 100px;
            font-size: 18px;
            color: #FFFFFF;
            text-align: right;
            margin-right: 20px;
          }
        }

        .maikefeng{
          display: flex;
          align-items: center;
          >p:first-child{
            width: 100px;
            font-size: 18px;
            color: #FFFFFF;
            text-align: right;
            margin-right: 20px;
          }

          /deep/.el-select{
            .el-input{
              .el-input__inner{
                height: 46px;
                width: 409px;
                font-size: 18px;
                color: #fff;
                background-color: #283A51;
                border: 1px solid transparent;
                border-radius: 4px;
                &::placeholder{
                  color: #fff;
                }
              }
            }

            .el-select__caret{
              &::before{
                color: #fff;
                font-size: 20px;
                content: '\e78f';
              }
            }
            .is-reverse{
              &::before{
                color: #00AEFF !important;
                font-size: 20px;
                content: '\e78f';
              }
            }
          }
        }

        .yinliang{
          display: flex;
          align-items: center;
          margin-top: 22px;
          margin-bottom: 7px;
          >p:first-child{
            font-size: 18px;
            color: #FFFFFF;
          }
          >p:last-child{
            width: 408px;
            height: 12px;
            background: #333333;
            border: 1px solid #666666;
            border-radius: 5px;
            position: relative;
            >span:first-child{
              position: absolute;
              top: 0;
              display: inline-block;
              width: 141px;
              height: 12px;
              background: #CCCCCC;
              border-radius: 5px;
            }
            >span:last-child{
              position: absolute;
              top: -2px;
              left: 130px;
              width: 16px;
              height: 16px;
              background:#CCCCCC;
              box-shadow: 0px 4px 5px 0px rgba(0, 0, 51, 0.2);
              border-radius: 50%;
            }
          }
        }

        .zidongtiaojie{
          display: flex;
          align-items: center;
          margin-top: 15px;
          margin-bottom: 15px;
          >p:first-child{
            font-size: 18px;
            color: #FFFFFF;
          }
          
          >p:last-child{
            display: flex;
            align-items: center;
            >span:first-child{
              display: inline-block;
              width: 31px;
              height: 31px;
              margin-right: 12px;
              >img{
                width: 100%;
                height: 100%;
              }
            }
            >span:last-child{
              font-size: 18px;
              color: #FFFFFF;
            }
          }
        }

        .maikefengwenzi{
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          >p:first-child{
            font-size: 18px;
            color: #FFFFFF;
          }
          
          >p:last-child{
            font-size: 18px;
            color: #FFFFFF;
            margin-left: 41px;
          }
        }

        .maikefengyinliao{
          display: flex;
          align-items: center;
          margin-bottom: 30px;
          >p:first-child{
            font-size: 18px;
            color: #FFFFFF;
          }
          
          >div{
            display: flex;
            >p{
              width: 134px;
              height: 38px;
              font-size: 18px;
              border-radius: 4px;
              display: flex;
              justify-content: center;
              align-items: center;
              color: #FFFFFF;
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
            }
            >ul{
              display: flex;
              padding-left: 14px;
              >li{
                width: 18px;
                height: 38px;
                margin-right: 7px;
                background: #333333;
                border: 1px solid #666666;
                border-radius: 4px;
                cursor: pointer;
              }
              .li_avtive{
                background: #CCCCCC;
                border: 1px solid #666666;
                border-radius: 4px;
              }
            }
          }
        }

        .tupian{
          margin-top: 21px;
          >p:last-child{
            width: 292px;
            height: 164px;
            >img{
              width: 100%;
              height: 100%;
            }
          }
        }

      }

      .download_btn{
        padding: 42px 20px;
        display: flex;
        justify-content: space-between;
        >p{
          width: 168px;
          height: 60px;
          line-height: 60px;
          border-radius: 4px;
          font-size: 24px;
          text-align: center;
          color: #66CCFF;
          background: #283A51;
          cursor: pointer;
        }
        >p:last-child{
          color: #FFFFFF;
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
        }
        >p:first-child{
          color: #FFFFFF;
          background: #283A51;
          border-radius: 4px;
          box-sizing: border-box;
          border: 1px solid transparent;
          &:hover{
            background: #283A51;
            border: 1px solid #00AEFF;
            border-radius: 4px;
          }
        }
      }
    }
  }

  .el-popper{
    .popper__arrow{
      display: none !important;
    }
    .el-select-dropdown__list{
      padding: 0 0 !important;
      box-sizing: border-box;
      >li{
        height: 46px;
        line-height: 46px;
        font-size: 24px;
        background: #283A51;
        border: 1px solid transparent;
        border-top: none;
        border-radius: 4px;
        // box-sizing: border-box !important;
        &:hover{
          border: 1px solid #00AEFF;
          color:#FFFFFF;
        }
      }
      .selected{
        font-weight: 200;
        background: #283A51;
        color:#FFFFFF;
        border: 1px solid #00AEFF;
      }
    }
  }

  /deep/.el-checkbox{
    margin: 5px 0 0 8px;
    .el-checkbox__input{
      
      .el-checkbox__inner{
        width: 20px !important;
        height: 20px !important;
        background: #0A182F;
        border: 1px solid #FFFFFF;
        border-radius: 4px;
      }
    }
  }
  /deep/.is-checked{
    .el-checkbox__inner{
      width: 20px !important;
      height: 20px !important;
      position: relative;
      &::before{
        content: '';
        width: 30px;
        height: 30px;
        display: block;
        position: absolute;
        left: -35%;
        top: -40%;
        background: url('~@/assets/images/gouA.png') no-repeat;
        background-size: 100% 100%;
      }
      &::after{
        display: none;
      }
    }
  }

</style>