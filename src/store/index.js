import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import favorites from './modules/favorites';

Vue.use(Vuex);

export default new Vuex.Store({
  // mutations: {
  //   SOCKET_CONNECT: (state, status ) => {
  //     state.connect = true;
  //   },

  //   SOCKET_USER_MESSAGE: (state, message) => {
  //     state.message = message;
  //   }
  // },
  // actions: {
  //   socket_userMessage: (context, message) => {
  //     context.dispatch('newMessage', message);
  //     context.commit('NEW_MESSAGE_RECEIVED', message);

  //     if (message.is_important) {
  //       context.dispatch('alertImportantMessage', message);
  //     }
  //   }
  // },
  getters,
  actions,
  mutations,
  modules: {
    favorites,
  },
});
