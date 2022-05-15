<template>
  <!-- tab-bar-item组件负责定义每个导航栏中的内容, 但是对于多个导航块来说, 他们的样式都是相同的, 只有图片和文字不同, 我们希望能够复用这个组件, 所以
   该组件只负责定义导航块, 对于可变元素: 图片、文字 使用插槽代替, 由使用则传递进来即可, 改组件只负责定义导航块-->
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{active : !isActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  props: {
    path : String
  },
  data () {
    return {
      // isActive : true
    }
  },
  computed : {
    isActive() {
      /*this.$route 指当前活跃的路由对象, 同一时间只存在一个活跃的, this.$router 指我们创建的router 插件*/
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods : {
    itemClick() {
      this.$router.replace(this.path);
    }
  }
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item > div > img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

  .active {
    color: red;
  }
</style>
