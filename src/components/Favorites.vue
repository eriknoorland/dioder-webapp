<template>
  <div>
    <ul class="favorite__list">
      <favorite colour="0000ff" />
      <!-- <li class="favorite__item" v-for="(colour, index) in colours" v-bind:style="{ background: colour }"></li> -->
    </ul>
  </div>
</template>

<script>
import Favorite from './Favorite';

export default {
  name: 'Favorites',
  data() {
    return {
      colours: [],
    };
  },
  mounted() {
    this.$store
      .dispatch('fetchFavorites')
      .then((response) => {
        this.colours = response.data;
      });
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
