<template>
  <div id="comA">
    {{ info }}
  </div>
</template>

<script>
export default {
  name: "ComA",
  inject: ['msg'],
  data() {
    return {
      info:this.msg
    }
  },
}
</script>