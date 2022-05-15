<template>
  <!-- tab-bar组件只负责定义一个导航栏, 对应导航栏中的内容是什么并不关心, 使用插槽代替, 需要使用导航栏时, 由负责使用组件将内容传递进来即可 -->
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar"
}
</script>

<style scoped>
  .tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgb(1001, 100, 100, 0.2);
  }
</style>
