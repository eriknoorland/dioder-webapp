const actions = {
  fetchFavorites() {
    return new Promise((resolve) => {
      resolve({
        data: [
          '#ff0000',
          '#ffff00',
          '#ffffff',
          '#00ff00',
          '#00ffff',
          '#0000ff',
        ],
      });
    });
  },

  toggleFavorite(context, toggle) {
    return new Promise((resolve) => {
      resolve({
        data: {
          toggle,
        },
      });
    });
  },
};

export default actions;
