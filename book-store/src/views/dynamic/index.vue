<template>
  <div class="container">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="审批人">
        <el-input
          v-model="formInline.user"
          placeholder="审批人"
          disabled
        ></el-input>
      </el-form-item>
      <el-form-item label="活动区域" disabled>
        <el-select v-model="formInline.region" placeholder="活动区域" disabled>
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native="check">查看</el-button>
        <el-button type="primary" @click.native="onSubmit">设置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {

  data () {
    return {
      formInline: {
        user: 'admin',
        region: 'shanghai'
      }
    }
  },

  components: {
  },
  methods: {
    onSubmit () {
      this.formInline.user = 'zhangSan' //
      // this.$set(this.formInline,'user','zhangsan')
    }
  },
  mounted () {

  },
};
</script>
