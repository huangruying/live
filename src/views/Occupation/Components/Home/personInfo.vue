<template>
  <div class="person_info">
    <div class="person_info_account">账号：12345678900</div>

    <div class="person_info_sex">
      <div>性别</div>
      <div>
        <p v-for="(item,index) in sexList" :key="index" @click="cutSex(index)" :class="{'sex_active':item.isActive}">{{item.sex}}</p>
      </div>
    </div>

    <div class="person_info_region">
      <div>地区</div>
      <el-select v-model="value" placeholder="选择国家">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-select v-model="value1" placeholder="选择省份">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-select v-model="value2" placeholder="选择城市">
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <div class="person_info_relation">
      <div>
        <div>联系方式</div>
        <div class="QQ">
          <span>QQ</span>

          <el-input class="input" v-model="input" placeholder=""></el-input>

          <el-select v-model="value3" placeholder="">
            <el-option
              v-for="item in options3"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="WeChart">
        <span>微信</span>

          <el-input class="input2" v-model="input" placeholder=""></el-input>
          
          <el-select v-model="value4" placeholder="">
            <el-option
              v-for="item in options4"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        sexList:[
          {sex:'男',isActive:true},
          {sex:'女',isActive:false},
          {sex:'保密',isActive:false},
        ],
        options: [{
          value: '中国',
          label: '中国'
        },],
        options1: [{
          value: '广东',
          label: '广东'
        },],
        options2: [{
          value: '深圳',
          label: '深圳'
        },{
          value: '广州',
          label: '广州'
        },],
        options3: [{
          value: '仅自己可见',
          label: '仅自己可见'
        },{
          value: '对被关注的人可见',
          label: '对被关注的人可见'
        },{
          value: '对所有人可见',
          label: '对所有人可见'
        }],
        options4: [{
          value: '仅自己可见',
          label: '仅自己可见'
        },{
          value: '对被关注的人可见',
          label: '对被关注的人可见'
        },{
          value: '对所有人可见',
          label: '对所有人可见'
        },],
        value: '',
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        input:''
      }
    },
    methods:{
      cutSex(idx){
        this.sexList.forEach((ele,index) => {
          this.sexList[index].isActive = false;
          this.sexList[idx].isActive = true;
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .person_info{
    width: 100%;
    height: 100%;
    padding: 49px 47px;
    font-size: 26px;
    color: #D6E9FF;
    box-sizing: border-box;

    .person_info_account{
      font-size: 30px;
      margin-bottom: 47px;
    }
    .person_info_sex{
      height: 54px;
      display: flex;
      align-items: center;
      margin-bottom: 57px;
      >div{
        display: flex;
        margin-right: 117px;
      }
      >div:last-child{
        width: 448px;
        height: 54px;
        border-radius: 4px;
        background: #0A1C33;
        justify-content: space-between;
        >p{
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 24px;
          color: #4F6A95;
          cursor: pointer;
          &:hover{
            color: #FFFFFF;
          }
        }
        .sex_active{
          color: #fff;
          background: url('~@/assets/images/sex_bg.png') no-repeat ;
          background-size: 100% 100% ;
        }
      }
    }

    .person_info_region{
      height: 54px;
      display: flex;
      align-items: center;
      margin-bottom: 57px;
      >div{
        display: flex;
        margin-right: 117px;
      }
    }

    .person_info_relation{
      align-items: center;
      >div:first-child{
        display: flex;
        >div{
          display: flex;
          align-items: center;
          margin-right: 117px;
        }

        .QQ,.WeChart{
          color: #A0BFEB;
            >span{
              margin-right: 32px;
            }
            .input{
              margin-right: 10px;
            }
        }
      }
      .WeChart{
        display: flex;
        align-items: center;
        margin-top: 24px;
        margin-left: 212px;
        color: #A0BFEB;
        >span{
          margin-right: 32px;
        }
        .input2{
          width: 400px;
          margin-right: 10px;
        }
      }
    }
  }
</style>