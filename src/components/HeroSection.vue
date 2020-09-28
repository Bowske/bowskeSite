<template>
  <div class="hero-section">
    <hero-header />
  </div>
</template>

<script>
import HeroHeader from "@/components/HeroHeader.vue";
export default {
  name: "HeroSection",
  components: {
    HeroHeader,
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