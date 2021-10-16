<template>
  <div class="container">
    <ComA />
    <el-button type="primary" size="small" @click.native="changeMsg">按钮</el-button>
  </div>
</template>

<script>
import ComA from './components/comA.vue'
export default {

  data () {
    return {

    }
  },
  provide: {
    msg: "msg from Provide mainIndex"
  },
  components: {
    ComA
  },
  methods: {
    changeMsg () {
      this.msg = "msg changed!",
      console.log(this.msg);
    }
  },
};
</script>
