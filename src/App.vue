<template>
  <MyInfo :infoText="infoText" v-if="infoText"
          @defineInfoText="defineInfoText"/>
  <MyMap @defineInfoText="defineInfoText"/>
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
  data() {
    return {
      infoText: ''
    }
  },
  methods: {
    defineInfoText(text) {
      this.infoText = text;
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
</style>
