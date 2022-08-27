<template>
  <div class="info">
    <div>{{infoText}}</div>
    <span class="close" @click="defineInfoText">&times;</span>
  </div>
</template>


<script>
  export default {
    name: 'MyInfo',
    props: ['infoText'],
    methods: {
      defineInfoText() {
        this.$store.commit('defineInfoText', '')
      }
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
  justify-content: space-between;
  padding: 5px 10px;
  width: 100%;
  min-height: 50px;
}
.close {
  cursor: pointer;
  margin-left: 10px;
}
</style>