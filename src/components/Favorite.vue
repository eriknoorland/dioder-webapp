<template>
  <li class="favorite" v-bind:style="{ background: colour }">

  </li>
</template>

<script>
// emit event back to Favorites to call store.action to change the colour

export default {
  name: 'Favorites',
  props: [
    'colour'
  ],
};
</script>

<style lang="scss">
  .favorite__item {
    display: block;
    padding-top: 33%;
    flex-basis: 33%;
    flex-shrink: 0;
  }
</style>
