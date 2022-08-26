<template>
  <div class="info">
    <div>{{infoText}}</div>
    <span class="close" @click="$emit('defineInfoText', '')">&times;</span>
  </div>
</template>

<script>
  export default {
    name: 'MyInfo',
    props: {
      infoText: String,
    }
  }
</script>

<style>
.info {
  position: absolute;
  background: #fff;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 5px 10px;
}
.close {
  cursor: pointer;
}
</style>