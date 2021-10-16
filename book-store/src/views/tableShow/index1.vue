<template>
  <div id="tableShow">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="mobile" label="联系方式" width="180" v-if="$route.name=='mobile'"> </el-table-column>
      <el-table-column prop="address" label="地址" > </el-table-column>
    </el-table>
  </div>
</template>


<script>
export default {
  data () {
    return {
      tableData: [
        { date: "1111-11-11 11:11:11", name: "张三5", mobile:"1111-1111-1111",address:"test" },
        { date: "1111-11-11 11:11:11", name: "张三6", mobile:"1111-1111-1111",address:"test" },
        { date: "1111-11-11 11:11:11", name: "张三2", mobile:"1111-1111-1111",address:"test" },
        { date: "1111-11-11 11:11:11", name: "张三4", mobile:"1111-1111-1111",address:"test" },
        { date: "1111-11-11 11:11:11", name: "张三3", mobile:"1111-1111-1111",address:"test" },
        // { date: "1111-11-11 11:11:11", name: "张三1", address: "tableTest1" },
      ]
    }
  },
  mounted() {
  },
}
</script>