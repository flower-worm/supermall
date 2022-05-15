<template>
  <TabBar> <!--<Tabbar>是一个组件, 组件中定义了一个插槽-->
    <TabBarItem path="/home"> <!--我们在<Tabbar>中的插槽中插入一个组件<TabbarItem>, 他代表每个item, 该组件中也定定义了两个插槽-->
      <!--assets代表在webpack.base.conf.js文件中resolve里定义的文件夹路径别名, 在html标签中使用前面需要加~, 在js中使用不需要-->
      <img slot="item-icon" src="~assets/img/tabbar/shouye.svg" alt=""> <!--在<TabbarItem>组件中, 定义了图片与文字插槽, 我们在使用的时候替换这两个值即可-->
      <img slot="item-icon-active" src="~assets/img/tabbar/shouyefill.svg" alt="">
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/fenlei.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/fenleiActive.svg" alt="">
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/gouwuche.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/gouwucheman.svg" alt="">
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/my.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/myActive.svg" alt="">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from "components/common/tabbar/Tabbar";
import TabBarItem from "components/common/tabbar/TabbarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
