<template>
  <div class="hero-section">
    <hero-header />
    <hero-navigation />
  </div>
</template>

<script>
import HeroHeader from "@/components/HeroHeader.vue";
import HeroNavigation from "@/components/HeroNavigation.vue";
export default {
  name: "HeroSection",
  components: {
    HeroHeader,
    HeroNavigation,
  },
};
</script>

<style lang="scss" scoped>
.hero-section {
  height: 100vh;
  width: 100%;
  background: $hero-background;
}
</style>