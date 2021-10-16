<template>
  <div class="about">
    <span>{{ childMsg }}</span>
  </div>
</template>
<script>
export default {
  name: "About",
  data () {
    return {
      childMsg: "this is second child Msg"
    }
  },
  props: {


  },
  methods: {
    secondChildMethod () {
      console.log(this.childMsg);
    }

  },
}
</script>
