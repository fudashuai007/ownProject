<template>
  <div class="container">
    <el-button type="primary" size="small" @click.native="changeMsg"
      >页面跳转</el-button
    >
  </div>
</template>

<script>
export default {

  data () {
    return {
      msg: "this is router msg"
    }
  },

  components: {
  },
  methods: {
    changeMsg () {
      this.$router.push({
        path: '/routerIndex',
        query: {
          msg: this.msg
        }
      })
    }
  },
  mounted () {

  },
};
</script>
