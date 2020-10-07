<template>
  <div id="app">
    <hero-section />
    <about-me-section />
  </div>
</template>

<script>
import AboutMeSection from "@/components/AboutMeSection.vue";
import HeroSection from "@/components/HeroSection.vue";
import {
  vhMobile,
  vhMobileRemoveListener,
} from "@/configFunctions/vhMobile.js";

export default {
  name: "App",
  components: {
    HeroSection,
    AboutMeSection,
  },
  created() {
    vhMobile();
  },
  destroyed() {
    vhMobileRemoveListener();
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

@media (max-width: 600px) {
  #app {
    @include app-setup;
    height: calc(var(--vh, 1vh) * 100);
    color: $primary-font-color;
  }
}
@media (min-width: 600px) {
  #app {
    @include app-setup;
    color: $primary-font-color;
  }
}
</style>
