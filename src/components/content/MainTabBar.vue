<template>
  <tab-bar #tab-bar>
    <tab-bar-item path="/home" activeColor="rgb(0,165,219)">
      <template #item_icon>
        <span id="img_home"></span>
      </template>
      <template #item_icon_active>
        <span id="img_home_active"></span>
      </template>
      <template #item_text>
        <span class="text">主页</span>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/channels" activeColor="rgb(0,165,219)">
      <template #item_icon>
        <span id="img_channels"></span>
      </template>
      <template #item_icon_active>
        <span id="img_channels_active"></span>
      </template>
      <template #item_text>
        <span class="text">频道</span>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/dynamic" activeColor="rgb(0,165,219)">
      <template #item_icon>
        <span id="img_dynamic"></span>
      </template>
      <template #item_icon_active>
        <span id="img_dynamic_active"></span>
      </template>
      <template #item_text>
        <span class="text">动态</span>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/vip" activeColor="rgb(0,165,219)">
      <template #item_icon>
        <span id="img_vip"></span>
      </template>
      <template #item_icon_active>
        <span id="img_vip_active"></span>
      </template>
      <template #item_text>
        <span class="text">会员</span>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/profile" activeColor="rgb(0,165,219)">
      <template #item_icon>
        <span id="img_profile"></span>
      </template>
      <template #item_icon_active>
        <span id="img_profile_active"></span>
      </template>
      <template #item_text>
        <span class="text">我的</span>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>


<script>
import TabBar from '@/components/common/tabBar/TabBar.vue'
import TabBarItem from '@/components/common/tabBar/TabBarItem.vue'

export default {
  name: 'MainTabBar',
  components: {TabBar,TabBarItem}
}
</script>

<style>
span[id^=img]{
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-top: 8px;
}
.text{
  display: inline-block;
  line-height: 25px;
  font-size: 12px;
}

#img_home{
  background: url('../../assets/images/icons/icons.png') no-repeat -278px -918px;
}
#img_home_active{
  background: url('../../assets/images/icons/icons.png') no-repeat -342px -918px;
}
#img_channels{
  background: url('../../assets/images/icons/icons.png') no-repeat -535px -1045px;
}
#img_channels_active{
  background: url('../../assets/images/icons/icons.png') no-repeat -600px -1045px;
}
#img_dynamic{
  background: url('../../assets/images/icons/icons.png') no-repeat -470px -852px;
}
#img_dynamic_active{
  background: url('../../assets/images/icons/icons.png') no-repeat -534px -852px;
}
#img_vip{
  background: url('../../assets/images/icons/icons.png') no-repeat -470px -471px;
}
#img_vip_active{
  background: url('../../assets/images/icons/icons.png') no-repeat -534px -471px;
}
#img_profile{
  background: url('../../assets/images/icons/icons.png') no-repeat -470px -405px;
}
#img_profile_active{
  background: url('../../assets/images/icons/icons.png') no-repeat -534px -405px;
}
</style>
