<template>
  <div class="tab-bar-item" @click="togglePage">
    <div v-if="!isActive" class="item_icon"><slot name='item_icon'></slot></div>
    <div v-else class="item_icon"><slot name='item_icon_active'></slot></div>
    <div :style="activeStyle" class="item_text"><slot name='item_text'></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#a00000'
    }
  },
  data(){
    return {

    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods: {
    togglePage(){
      this.$router.replace(this.path)
    }
  },
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
}

.item_icon{
  width: 100%;
  height: 24px;
}
.item_text{
  width: 100%;
  height: 25px;
}
</style>
