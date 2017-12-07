import http from '../../../http';

const actions = {
  fetchFavorites(context) {
    http
      .get('/v1/favorites')
      .then((response) => {
        context.commit('fetchFavorites', { favorites: response.data });
      });
  },
};

export default actions;
