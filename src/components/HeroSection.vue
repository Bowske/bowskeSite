<template>
  <div class="hero-section">
    <hero-header />

    <hero-navigation />
    <div class="hero-section__content-wrapper">
      <div class="hero-section__svg-wrapper">
        <h1 class="hero-section__heading" ref="headingRef">
          Hej, jestem <span ref="colorRef">Adam</span>
        </h1>
        <hero-svg />
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
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
  mounted() {
    const tl = gsap.timeline();
    const headingRef = this.$refs.headingRef;
    const colorRef = this.$refs.colorRef;
    tl.fromTo(
      headingRef,
      { width: "0" },
      { duration: "4", width: "8.78em", ease: "steps(16)" }
    )
      .to(headingRef, { duration: "1", width: "6.55em", ease: "steps(4)" })
      .to(colorRef, { duration: "0", color: "#6c63ff" })
      .to(headingRef, { duration: "1", width: "8.78em", ease: "steps(4)" });

    gsap.fromTo(
      headingRef,
      { "border-right-color": "rgba(138, 123, 123, 0.2)" },
      {
        "border-right-color": "black",
        duration: "0.5",
        // ease: "steps(24)",
        repeat: "-1",
      }
    );
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
        border-right: 2px solid black;
        margin: 0 auto 30px;
        font-size: 30px;
        width: 100%;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
}
</style>