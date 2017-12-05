<template>
  <div id="app">
    <router-view/>

    <div class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link to="/" class="nav__link">
            Home
          </router-link>
        </li>

        <li class="nav__item">
          <router-link to="/favorites" class="nav__link">
            Favorites
          </router-link>
        </li>

        <li class="nav__item">
          <router-link to="/options" class="nav__link">
            Options
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
  html, body {
    margin: 0;
    height: 100%;
  }

  body {
    font-family: Helvetica, Arial, sans-serif;
    color: #303030;
  }

  #app {
    height: 100%;
  }

  .nav {
    position: fixed;
    top: auto;
    right: 0;
    bottom: 0;
    left: 0;
    height: 60px;
    background: #f2f2f2;
    border-top: 1px solid #dedede;
  }

  .nav__list {
    display: flex;
    margin: 0;
    padding: 0;
    height: 100%;
    list-style-type: none;
    justify-content: space-between;
  }

  .nav__item {
    display: block;
    flex-grow: 1;
  }

  .nav__link {
    display: block;
    line-height: 60px;
    text-align: center;
    text-decoration: none;
    color: inherit;
    transition: background .2s;

    &.router-link-exact-active {
      background: #ddf;
    }
  }
</style>
