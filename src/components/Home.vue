<template>
  <div>
    <!-- colour wheel / bar -->
    <!-- current colour -->
    <!-- favorite current colour button -->

    <div class="toggleButton">
      <input type="checkbox" name="" id="ledStatus" class="toggleButton__input">
      <label for="ledStatus" class="toggleButton__label"></label>
    </div>

    <div class="toggleButton">
      <input type="checkbox" name="" id="transitionStatus" class="toggleButton__input">
      <label for="transitionStatus" class="toggleButton__label"></label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
  .toggleButton {

  }

  .toggleButton__input {
    max-height: 0;
    max-width: 0;
    opacity: 0;

    & + .toggleButton__label {
      display: inline-block;
      position: relative;
      box-shadow: inset 0 0 0px 1px #d5d5d5;
      text-indent: -5000px;
      height: 30px;
      width: 47px;
      border-radius: 15px;
    }

    & + .toggleButton__label:before {
      content: "";
      position: absolute;
      display: block;
      height: 30px;
      width: 30px;
      top: 0;
      left: 0;
      border-radius: 15px;
      background: #2080b4;
      transition: .25s ease-in-out;
    }

    & + .toggleButton__label:after {
      content: "";
      position: absolute;
      display: block;
      height: 30px;
      width: 30px;
      top: 0;
      left: 0px;
      border-radius: 15px;
      background: #fff;
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .2), 0 2px 4px rgba(0, 0, 0, .2);
      transition: .25s ease-in-out;
    }

    &:checked + .toggleButton__label:before {
      width: 50px;
      background: #2080b4;
    }

    &:checked + .toggleButton__label:after {
      left: 20px;
      box-shadow: inset 0 0 0 1px #2080b4, 0 2px 4px rgba(0, 0, 0, .2);
    }
  }
</style>
