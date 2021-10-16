<template>
  <div class="container">
    <ComA />
    <el-button type="primary" size="small" @click.native="changeMsg">按钮</el-button>
  </div>
</template>

<script>
import ComA from './components/ComA'
export default {

  data () {
    return {
      msg:"this is vuex msg"
    }
  },

  components: {
    ComA
  },
  methods: {
    changeMsg () {
      this.msg = "msg changed!",
      this.$store.commit('test/SET_vuexway',this.msg)
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.$store.commit('test/SET_vuexway',this.msg)
    })
  },
};
</script>
