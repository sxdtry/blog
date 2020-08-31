<template>
  <div class="my-nav">
    <div class="left">
      <h1>
        <img src="@/assets/logo.png" alt="" />
      </h1>
      <h3>呱呱博客</h3>
      <div>
        <el-input
          prefix-icon="el-icon-search"
          placeholder="请输入内容"
          v-model="search"
          clearable
        >
        </el-input>
      </div>
    </div>
    <div class="center">
      <el-menu
        background-color="#8080FF"
        text-color="#ffffff"
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="select"
      >
        <el-submenu
          v-for="item in submenu"
          :key="item.index"
          :index="item.index"
        >
          <template slot="title">{{ item.title }}</template>
          <el-menu-item
            v-for="value in item.children"
            :key="value.index"
            :index="value.index"
            >{{ value.title }}</el-menu-item
          >
        </el-submenu>
        <el-menu-item
          v-for="item in menuItem"
          :key="item.index"
          :index="item.index"
          >{{ item.title }}</el-menu-item
        >
      </el-menu>
    </div>
    <!-- <div class="right">
      123
    </div> -->
  </div>
</template>

<script>
export default {
  name: "my-nav",
  data() {
    return {
      activeIndex: "1",
      search: "",
      nav: [
        {
          title: "前端",
          index: "1",
          children: [
            {
              title: "HTML+CSS",
              index: "1-1",
            },
            {
              title: "JavaScript",
              index: "1-2",
            },
            {
              title: "Vue",
              index: "1-3",
            },
          ],
        },
        {
          title: "后端",
          index: "2",
          children: [
            {
              title: "node",
              index: "2-1",
            },
            {
              title: "Java",
              index: "2-2",
            },
          ],
        },
        {
          title: "数据库",
          index: "3",
          children: [
            {
              title: "MongoDB",
              index: "3-1",
            },
          ],
        },
        {
          title: "案例",
          index: "4",
        },
        {
          title: "工具",
          index: "5",
        },
      ],
    };
  },
  methods:{
    select(index){
      //跳转路由
      console.log(index)
    }
  },
  computed: {
    submenu() {
      return this.nav.filter((item) => {
        return !!item.children;
      });
    },
    menuItem() {
      return this.nav.filter((item) => {
        return !item.children;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.my-nav {
  display: flex;
  position: relative;
  align-items: center;
  width: 1220px;
  margin: auto;
  min-width: 1200px;
  height: 100%;
}
.left {
  display: flex;
  align-items: center;
  // background-color: #f60;
  img {
    width: 61px;
  }
  h3,
  h1 {
    margin-right: 10px;
    cursor: pointer;
  }
}
.center {
  height: 100%;
  .el-menu,
  .el-menu-item {
    border-bottom: none;
  }
}
// .right {
//     background-color: #666;
//     position: absolute;
//     top:0;
//     right: 0;
// }
</style>
