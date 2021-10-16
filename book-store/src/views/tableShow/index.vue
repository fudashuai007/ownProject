<template>
  <div id="tableShow">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>


<script>
export default {
  data () {
    return {
      tableData: [
        { date: "1111-11-11 11:11:11", name: "张三3", address: "tableTest3" },
        { date: "1111-11-11 11:11:11", name: "张三4", address: "tableTest4" },
        { date: "1111-11-11 11:11:11", name: "张三5", address: "tableTest5" },
        { date: "1111-11-11 11:11:11", name: "张三6", address: "tableTest6" },
        { date: "1111-11-11 11:11:11", name: "张三2", address: "tableTest2" },
        { date: "1111-11-11 11:11:11", name: "张三1", address: "tableTest1" },
      ]
    }
  },
}
</script>