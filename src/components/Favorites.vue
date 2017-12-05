<template>
  <div>
    <ul class="favorites__list">
      <li class="favorites__item" v-for="(colour, index) in colours" v-bind:style="{ background: colour }"></li>
    </ul>
  </div>
</template>

<script>
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
  .favorites__list {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex-wrap: wrap;
  }

  .favorites__item {
    display: block;
    padding-top: 33%;
    flex-basis: 33%;
    flex-shrink: 0;
  }
</style>
