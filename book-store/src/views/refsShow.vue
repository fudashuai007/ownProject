<!--
 * @Descripttion: 
 * @Author: voanit
 * @Date: 2021-09-21 19:39:19
 * @LastEditors: voanit
 * @LastEditTime: 2021-10-03 17:05:47
-->
<template>
  <div class="home">
    <!-- <button @click="handleNumIncrease">+</button>
    <HelloWorld :parentNum="num" /> -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">
        <About ref="About" :msg="parentMsg" @methodA="parentMethod" />
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">
        <Second ref="Second" />
      </el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import About from './About'
import Second from './Second'
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data () {
    return {
      activeName: "first",
      num: 0,
      parentMsg: "this is parent msg"
    }
  },
  components: {
    About,
    Second
    // HelloWorld,
  },
  methods: {
    handleNumIncrease () {
      this.num++
    },
    parentMethod () {
      console.log(this.parentMsg);
    },
    handleClick (e) {
      console.log(e.name);
      if (e.name == 'second') {
        this.$refs.Second.secondChildMethod()
      }
    }
  },
};
</script>
