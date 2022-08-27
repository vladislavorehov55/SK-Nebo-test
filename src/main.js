import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
  state () {
    return {
      infoText: ''
    }
  },
  mutations: {
    defineInfoText(state, text) {
      state.infoText = text;
    }
  }
})
const app = createApp(App)
app.use(store)
app.mount('#app')
