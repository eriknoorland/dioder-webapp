const mutations = {
  fetchFavorites(state, { favorites }) {
    state.favorites = favorites;
  },
};

export default mutations;
