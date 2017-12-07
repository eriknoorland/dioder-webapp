<template>
  <div>
    <ul class="favorite__list">
      <favorite 
        v-for="(colour, index) in colours" 
        :key="index" 
        :colour="colour" 
        @favoriteClick="onFavoriteColourClick" />
    </ul>
  </div>
</template>

<script>
import favorite from './favorite';

export default {
  name: 'Favorites',
  computed: {
    colours() {
      return this.$store.state.favorites.favorites;
    },
  },
  components: {
    favorite,
  },
  methods: {
    onFavoriteColourClick(colour) {
      this.$store.dispatch('changeColour', colour);
    },
  },
  mounted() {
    this.$store.dispatch('fetchFavorites');
  },
};
</script>

<style lang="scss">
  .favorite__list {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex-wrap: wrap;
  }
</style>
