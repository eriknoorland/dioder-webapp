import http from '../http';

const actions = {
  changeColour(context, colour) {
    const postData = { colour };

    http
      .post('/v1/colour', postData)
      .then(response => context.commit('changeColour', {
        colour: response.data.colour,
      }));
  },
};

export default actions;
