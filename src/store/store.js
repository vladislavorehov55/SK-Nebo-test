import {createStore} from "vuex";

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
export default store