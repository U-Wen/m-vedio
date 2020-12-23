<template>
  <div id="nav">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
  <main-tab-bar/>
</template>

<script>
import MainTabBar from '@/components/content/MainTabBar.vue'
export default {
  name: 'App',
  components: {MainTabBar}
}
</script>

<style lang="less">
@import './assets/css/base.css';
</style>
