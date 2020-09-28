<template>
  <button
    class="hamburger"
    :class="{ 'hamburger--active': isActive }"
    @click="isActive = !isActive"
  >
    <span class="hamburger__box">
      <span class="hamburger__inner"></span>
    </span>
  </button>
</template>

<script>
export default {
  name: "Hamburger",
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.hamburger {
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  border: 0;

  &__box {
    width: 28px;
    height: 22px;
    display: inline-block;
    position: relative;

    .hamburger__inner {
      @include hamburger-line;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      transition: background-color 0.3s 0.1s ease-in-out;
    }
    .hamburger__inner::before,
    .hamburger__inner::after {
      content: "";
      @include hamburger-line;
      left: 0;
      transition: transform 0.3s 0.2s ease-in-out;
    }
    .hamburger__inner::before {
      top: -8px;
    }
    .hamburger__inner::after {
      top: 8px;
    }
  }
  &--active &__inner {
    background-color: transparent;
  }
  &--active &__inner::before {
    transform: translateY(8px) rotate(45deg);
  }
  &--active &__inner::after {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>