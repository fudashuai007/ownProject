<!--
 * @Descripttion: 
 * @Author: voanit
 * @Date: 2021-09-21 19:39:19
 * @LastEditors: voanit
 * @LastEditTime: 2021-10-03 17:11:53
-->

<template>
  <div id="templateDetail">
    <slot name="prefix"></slot>
    <div class="title" v-if="detailData && detailData.title">
      {{ detailData.title }}
    </div>

    <span>{{ parentNum }}</span>
    <div @click="getParentMsg">子组件内容</div>

    <slot name="content"></slot>
    <slot name="suffix"></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWord',
  props: {
    detailData: {
      type: Object,
      default () {
        return {}
      },
    },
    parentNum: Number
  },
  // props: ['detailData'],
  methods: {
    getParentMsg () {
      console.log('child', this.parentNum);
      console.log('parent', this.$parent.num);
      this.$parent.parentMethod()
    },
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
