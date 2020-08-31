<template>
  <div class="home">
    <el-container>
      <el-header>
        <my-nav></my-nav>
      </el-header>
      <el-main>
        <my-main></my-main>
      </el-main>
      <el-footer>
        <my-floot></my-floot>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MyMain from "@/components/home/main";
export default {
  name: "home",
  components: {
    MyMain,
  },
};
</script>
<style lang="scss">
    .el-header{
        background-color: #8080FF;
        display: flex;
        align-items: center;
        box-shadow: 0 2px 1px 1px
    }
</style>