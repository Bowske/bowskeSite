<template>
  <div class="hero-section">
    <hero-header />

    <hero-navigation />
    <div class="hero-section__content-wrapper">
      <div class="hero-section__svg-wrapper">
        <h1 class="hero-section__heading" ref="headingRef">
          Hej, jestem <span ref="colorRef">Adam</span>
        </h1>
        <div ref="sceneWrapper">
          <hero-svg />
        </div>
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
  methods: {
    typeWriterAnimation() {
      const tl = gsap.timeline();
      const headingRef = this.$refs.headingRef;
      const colorRef = this.$refs.colorRef;
      tl.fromTo(
        headingRef,
        { width: "0" },
        { duration: "2", width: "9.78em", ease: "steps(16)" }
      )
        .to(headingRef, { duration: "0.5", width: "7.25em", ease: "steps(4)" })
        .to(colorRef, { duration: "0", color: "#6c63ff" })
        .to(headingRef, { duration: "0.5", width: "9.78em", ease: "steps(4)" }); //8.78 i 6.55

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
    svgHeroImageAnimation() {
      const [elements] = this.$refs.sceneWrapper.children;

      const desk = elements.getElementById("desk");
      const character = elements.getElementById("character");
      const setup = elements.getElementById("setup");
      const particles = elements.getElementById("particles");

      gsap.set([desk, character, setup, particles], { autoAlpha: 0 });

      const tlHero = gsap.timeline({ defaults: { ease: "power3.inOut" } });

      tlHero
        .fromTo(
          desk,
          { x: "-100%" },
          { duration: 1, x: "+=100%", autoAlpha: 1 }
        )
        .fromTo(
          setup,
          { x: "-100%" },
          { duration: 1, x: "+=100%", autoAlpha: 1 }
        )
        .fromTo(
          particles,
          { opacity: "0" },
          { duration: 1, opacity: "1", autoAlpha: 1 }
        );
      gsap.fromTo(
        character,
        { opacity: "0" },
        { duration: 1, delay: 2.5, x: "1", autoAlpha: 1 }
      );
    },
  },
  mounted() {
    this.typeWriterAnimation();
    this.svgHeroImageAnimation();
  },
};
</script>

<style lang="scss" scoped>
.hero-section {
  height: 100%;
  width: 100%;
  background: $hero-background;
  position: relative;

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