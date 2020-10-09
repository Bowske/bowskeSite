<template>
  <div id="app">
    <hero-section />
    <about-me-section />
  </div>
</template>

<script>
const bodyScrollLock = require("body-scroll-lock");
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
      const disableBodyScroll = bodyScrollLock.disableBodyScroll;
      const enableBodyScroll = bodyScrollLock.enableBodyScroll;
      const targetElement = document.querySelector("#app");
      if (this.$store.state.isHamburgerClicked) {
        disableBodyScroll(targetElement);
      } else {
        enableBodyScroll(targetElement);
      }
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
</style>
