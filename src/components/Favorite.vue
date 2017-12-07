<template>
  <li class="favorite" :style="{ background: colour }" v-on:click="onClick">

  </li>
</template>

<script>
// emit event back to Favorites to call store.action to change the colour

export default {
  name: 'Favorites',
  props: [
    'colour',
  ],
  methods: {
    onClick() {
      this.$emit('favoriteClick', this.colour);
    },
  },
};
</script>

<style lang="scss">
  .favorite {
    display: block;
    padding-top: 33.33%;
    flex-basis: 33.33%;
    flex-shrink: 0;
  }
</style>
