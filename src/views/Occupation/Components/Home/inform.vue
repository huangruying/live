<template>
  <div class="inform">
    <div class="title">勾选后会收到对应的站内通知</div>
    <div>
      <span>吴咯乎</span>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="被评论1"></el-checkbox>
        <el-checkbox label="被转载1"></el-checkbox>
        <el-checkbox label="被喜欢1"></el-checkbox>
        <el-checkbox label="被推荐1" ></el-checkbox>
        <el-checkbox label="被@" ></el-checkbox>
      </el-checkbox-group>
    </div>
    <div>
      <span>推荐的文章</span>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="被评论2"></el-checkbox>
        <el-checkbox label="被转载2"></el-checkbox>
        <el-checkbox label="被喜欢2"></el-checkbox>
        <el-checkbox label="被推荐2" ></el-checkbox>
      </el-checkbox-group>
    </div>
    <div>
      <span>话题</span>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="被推荐"></el-checkbox>
        <el-checkbox label="被参与" ></el-checkbox>
        <el-checkbox label="向我推荐话题" ></el-checkbox>
      </el-checkbox-group>
    </div>
    <div>
      <span>ART</span>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="关注的人发布新商品" ></el-checkbox>
      </el-checkbox-group>
    </div>
    <div>
      <span>标签</span>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="向我推荐标签"></el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        checkList: ['选中且禁用','复选框 A']
      }
    }
  }
</script>

<style lang="scss" scoped>

  .inform{
    width: 100%;
    height: 100%;
    padding: 48px 47px;
    font-size: 24px;
    box-sizing: border-box;
    .title{
      margin-bottom: 49px;
      color: #A0BFEB;
    }
    >div{
      display: flex;
      align-items: flex-start;
      margin-bottom: 40px;
      flex-wrap: nowrap;
      >span{
        display: block;
        width: 166px;
        font-size: 26px;
        color: #D6E9FF;
      }
    }
  }
</style>