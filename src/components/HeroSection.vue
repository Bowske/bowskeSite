<template>
  <div class="hero-section">
    <hero-header />
    <div class="hero-section__svg-wrapper">
      <hero-svg />
    </div>
    <hero-navigation />
  </div>
</template>

<script>
import HeroSvg from "@/../public/scene.svg";
import HeroHeader from "@/components/HeroHeader.vue";
import HeroNavigation from "@/components/HeroNavigation.vue";
export default {
  name: "HeroSection",
  components: {
    HeroHeader,
    HeroNavigation,
    HeroSvg,
  },
};
</script>

<style lang="scss" scoped>
.hero-section {
  height: 100%;
  width: 100%;
  background: $hero-background;
  &__content-wrapper {
    position: absolute;
    .hero-section__svg-wrapper {
      width: 80vw; // tu bedzie trzeba duzo ogarniania z mobilka i desktopem responisvness
      height: auto;
    }
  }
}
</style>