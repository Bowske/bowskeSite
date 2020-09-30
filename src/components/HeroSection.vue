<template>
  <div class="hero-section">
    <hero-header />

    <hero-navigation />
    <div class="hero-section__content-wrapper">
      <div class="hero-section__svg-wrapper">
        <h1 class="hero-section__heading">Hej, jestem <span>Adam</span></h1>
        <hero-svg />
      </div>
    </div>
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .hero-section__svg-wrapper {
      width: 80vw; // tu bedzie trzeba duzo ogarniania z mobilka i desktopem responisvness
      height: auto;

      .hero-section__heading {
        margin-bottom: 30px;

        span {
          color: $secondary-font-color;
        }
      }
    }
  }
}
</style>