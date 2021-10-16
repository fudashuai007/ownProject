<template>
  <div id="home">
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item :index="activeIndex" @click.native="handleTab('1')">
            <i class="el-icon-menu"></i>
            <span slot="title">导航一</span>
          </el-menu-item>
          <el-menu-item :index="activeIndex" @click.native="handleTab('2')">
            <i class="el-icon-setting"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <el-scrollbar style="height:100%">
          <index1 v-if="activeIndex=='1'"></index1>
          <index2 v-if="activeIndex=='2'"></index2>
        </el-scrollbar>
      </el-main>
    </el-container>

  </div>
</template>
<script>
import index1 from './index1'
import index2 from './index2'
export default {
  data () {
    return {
      activeIndex:'1'
    }
  },
  components:{
    index1,
    index2,
  },
  methods: {
    handleOpen () {
      console.log('1');
    },
    handleClose () {
      console.log('2');
    },
    handleTab(val){
      this.activeIndex=val
    }
  },
}
</script>