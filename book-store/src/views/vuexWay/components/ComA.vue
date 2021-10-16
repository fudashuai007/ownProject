<template>
  <div id="ComA" style="height: 100px; background-color: #fafafa">
    组件A
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "ComA",
  computed: {
    ...mapState({
      msg: state => state.test.msg
    })
  },
  mounted () {

  },
}
</script>