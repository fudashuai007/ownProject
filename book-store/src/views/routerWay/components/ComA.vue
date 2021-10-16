<template>
  <div id="ComA" style="height: 100px; background-color: #fafafa">
    组件A
    <h1>{{ this.$route.query.msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: "ComA",
  data() {
    return {
      // msg:this.$route.query.msg
    }
  },
  mounted () {
  },
}
</script>