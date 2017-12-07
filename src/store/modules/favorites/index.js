import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const favorites = {
  state: {
    favorites: [
      '#ff0000',
      '#ffff00',
      '#ffffff',
      '#00ff00',
      '#00ffff',
      '#0000ff',
    ],
  },
  actions,
  getters,
  mutations,
};

export default favorites;
