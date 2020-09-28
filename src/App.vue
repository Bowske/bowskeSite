<template>
  <div id="app">
    <hero-section />
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";

export default {
  name: "App",
  components: {
    HeroSection,
  },
  created() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  },
  destroyed() {
    window.removeEventListener("resize");
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
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    color: $primary-font-color;
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100vw;
  }
}
@media (min-width: 600px) {
  #app {
    height: 100vh;
    color: $primary-font-color;
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100vw;
  }
}
</style>
