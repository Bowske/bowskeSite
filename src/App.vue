<template>
  <div id="app">
    <hero-section />
    <about-me-section />
  </div>
</template>

<script>
import AboutMeSection from "@/components/AboutMeSection.vue";
import HeroSection from "@/components/HeroSection.vue";

export default {
  name: "App",
  components: {
    HeroSection,
    AboutMeSection,
  },
  created() {},
  mounted() {},
  destroyed() {},
  watch: {
    "$store.state.isHamburgerClicked": function () {
      const app = document.getElementById("app");
      app.classList.toggle("lockScroll");
    },
  },
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  @include app-setup;
}
.lockScroll {
  overflow: hidden;
}
</style>
