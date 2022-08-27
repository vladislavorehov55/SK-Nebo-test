<template>
  <transition name="fade">
    <MyInfo v-if="infoText" :infoText="infoText"/>
  </transition>
  <MyMap/>
</template>

<script>
import MyMap from "@/components/MyMap";
import MyInfo from "@/components/MyInfo";
export default {
  name: 'App',
  components: {
    MyInfo,
    MyMap
  },
  computed: {
    infoText() {
      return this.$store.state.infoText
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
