<template>
  <div class="tab-bar">
    <slot name='tab-bar'></slot>  
  </div>
</template>

<style scoped>
.tab-bar{
  display: flex;
  height: 49px;
  background-color: #f8f8f8;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -3px 1px rgba(248, 248, 248, 0.5);
}

</style>