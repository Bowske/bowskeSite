<template>
  <div
    class="hero-navigation"
    :class="{ 'hero-navigation--active': isHamburgerClicked }"
  >
    <nav class="hero-navigation__content">
      <ul class="hero-navigation__ul">
        <li
          class="hero-navigation__li"
          v-for="elem in navigationElems"
          :key="elem.name"
        >
          {{ elem.name }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeroNavigation",
  data() {
    return {
      navigationElems: [
        { name: "O mnie", route: "/o_mnie" },
        { name: "Projekty", route: "/projekty" },
        { name: "Inspiracja", route: "/inspiracja" },
      ],
    };
  },
  computed: {
    isHamburgerClicked() {
      return this.$store.state.isHamburgerClicked;
    },
  },
};
</script>

<style lang="scss" scoped>
.hero-navigation {
  z-index: 2;
  height: 100vh;
  width: 100%;
  background-color: $light-background;
  transform: translate(-100%, -100%);
  transition: transform 1s 0.1s ease;

  &__content {
    height: 90vh;
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 42px 0;

    .hero-navigation__ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;

      .hero-navigation__li {
      }
    }
  }
}
.hero-navigation--active {
  transform: translate(0, 0);
}
</style>