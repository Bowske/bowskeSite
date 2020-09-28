import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isHamburgerClicked: false,
  },
  mutations: {
    clickHamburger(state) {
      state.isHamburgerClicked = !state.isHamburgerClicked;
    },
  },
});
