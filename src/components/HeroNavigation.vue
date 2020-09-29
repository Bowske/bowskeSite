<template>
  <div ref="heroNavigation" class="hero-navigation">
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
import gsap from "gsap";

export default {
  name: "HeroNavigation",
  data() {
    return {
      navigationElems: [
        { name: "Home", route: "/home" },
        { name: "Projekty", route: "/projekty" },
        { name: "O mnie", route: "/o_mnie" },
        { name: "Inspiracja", route: "/inspiracja" },
      ],
    };
  },
  created() {},
  computed: {
    isHamburgerClicked() {
      return this.$store.state.isHamburgerClicked;
    },
  },
  watch: {
    "$store.state.isHamburgerClicked": function () {
      const hamburgerState = this.$store.state.isHamburgerClicked;
      const heroNavigation = this.$refs.heroNavigation;

      // const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
      if (hamburgerState) {
        gsap.set([heroNavigation], { autoAlpha: 0 });
        console.log(hamburgerState);
        gsap.fromTo(
          heroNavigation,
          { x: "-100%" },
          { duration: 1, x: "+=100%", autoAlpha: 1 }
        );
      } else {
        gsap.to(heroNavigation, { duration: 1, x: "+=100%", autoAlpha: 0 });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.hero-navigation {
  z-index: 2;
  height: 100%;
  width: 100%;
  background-color: $light-background;
  visibility: hidden;

  &__content {
    display: flex;
    width: 100%;
    height: 90%;
    position: absolute;
    bottom: 0;
    justify-content: center;
    padding: 24px 0;

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
</style>