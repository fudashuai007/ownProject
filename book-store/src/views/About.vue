<template>
  <div class="about">
    <span>{{msg}}</span>-----<span>{{childMsg}}</span>
  </div>
</template>
<script>
export default {
  name: "About",
  data () {
    return {
      childMsg: "this is child Msg"
    }
  },
  props: {
    msg: {
      type: String
    },

  },
  methods: {
    childMethod () {
      this.$emit('methodA', this.childMsg)
    }

  },
}
</script>
