<template>
  <div id="lazyLoad">
    <el-table
      ref="multipleTable"
      :data="categoryList"
      style="width: 100%; margin-bottom: 20px"
      lazy
      :load="loadTree"
      :indent="40"
      row-key="id"
      :default-expand-all="false"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
    </el-table>

    <el-date-picker
      v-model="value"
      type="daterange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      change="handleDateChange"
    >
    </el-date-picker>
  </div>
</template>
<script>
export default {
  name: "lazyLoad",
  data () {
    return {
      maps: new Map()
    }
  },
  methods: {
    loadTree (tree, treeNode, resolve) {
      // 将当前选中节点数据存储到map中
      this.maps.set(tree.id, { tree, treeNode, resolve })
      /** 其他操作 */

    },
    // 当新增或者修改完成之后，调用重新触发树形表格的loadTree函数
    refreshLoadTree (parentId) {
      // 根据父级id取出对应节点数据
      const { tree, treeNode, resolve } = this.maps.get(parentId)
      this.$set(this.$refs.multipleTable.store.states.lazyTreeNodeMap, parentId, [])
      if (tree) {
        this.loadTree(tree, treeNode, resolve)
      }
    }

  },
}
</script>