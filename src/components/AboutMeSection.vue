<template>
  <div class="aboutMeSection">
    <div class="aboutMeSection__backBar"></div>
    <div class="aboutMeSection__wrapper">
      <p class="aboutMeSection__text">
        Jestem studentem 3 roku informatyki na Uniwersytecie Adama Mickiewicza.
        <span class="aboutMeSection__innerSpan"
          >Dbam o szczegóły, testuję nowe rozwiązania</span
        >, posiadam duże zamiłowanie do UI/UX'u.
      </p>
      <button class="aboutMeSection__button">
        <Cv />
        <p class="aboutMeSection__cvText" ref="cvText">wgląd do mojego CV</p>
      </button>
      <div class="aboutMeSection__logos">
        <div class="aboutMeSection__item"><vuelogo /></div>
        <div class="aboutMeSection__item"><npmlogo /></div>
        <div class="aboutMeSection__item"><sasslogo /></div>
        <div class="aboutMeSection__item"><typescriptlogo /></div>
        <div class="aboutMeSection__item"><vuetifylogo /></div>

        <div class="aboutMeSection__item"><jslogo /></div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import jslogo from "@/../public/jslogo.svg";
import npmlogo from "@/../public/npmlogo.svg";
import sasslogo from "@/../public/sasslogo.svg";
import typescriptlogo from "@/../public/typescriptlogo.svg";
import vuetifylogo from "@/../public/vuetifylogo.svg";
import vuelogo from "@/../public/vuelogo.svg";

import Cv from "@/../public/cv.svg";
export default {
  name: "AboutMeSection",
  components: {
    Cv,
    jslogo,
    npmlogo,
    sasslogo,
    typescriptlogo,
    vuetifylogo,
    vuelogo,
  },
  methods: {
    settingAutoAlpha() {
      gsap.set(
        [
          ".aboutMeSection__backBar",
          ".aboutMeSection__text",
          ".aboutMeSection__innerSpan",
          ".aboutMeSection__item",
        ],
        {
          autoAlpha: 0,
        }
      );
    },
    textAnimation() {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".aboutMeSection__text",
          start: "center bottom",
        },
      });

      tl.fromTo(
        ".aboutMeSection__text",
        { x: "-100%" },
        { duration: 1, x: "+=100%", autoAlpha: 1 }
      )
        .to(".aboutMeSection__innerSpan", { autoAlpha: 1, duration: 1 })
        .fromTo(
          ".aboutMeSection__innerSpan",
          {
            backgroundSize: "0% 2px;",
          },
          { backgroundSize: "100% 2px", duration: 1.1 }
        );
    },
    backBarAnimation() {
      gsap.fromTo(
        ".aboutMeSection__backBar",
        { height: "0" },
        {
          autoAlpha: 1,
          duration: 2,
          height: "+=100%",
          scrollTrigger: {
            trigger: ".aboutMeSection__backBar",
            start: "center bottom",
          },
        }
      );
    },
    logosAnimation() {
      gsap.fromTo(
        ".aboutMeSection__item",
        { height: "-200px" },
        {
          autoAlpha: 1,
          duration: 2,
          stagger: 0.2,
          height: "+=200px",
          scrollTrigger: {
            trigger: ".aboutMeSection__logos",
          },
        }
      );
    },
    aboutMeAllAnimations() {
      this.backBarAnimation();
      this.textAnimation();
      this.logosAnimation();
    },
  },
  created() {},
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    this.settingAutoAlpha();
    this.aboutMeAllAnimations();
  },
};
</script>

<style lang="scss" scoped>
.aboutMeSection {
  height: 100vh;
  display: grid;
  place-items: center;
  position: relative;

  &__backBar {
    position: absolute;
    top: 0;
    left: 0;
    width: 28vw;
    height: 100%;
    z-index: -1;
    background-color: #f7f7f7;
  }
  &__button {
    display: flex;
    align-items: center;
    background-color: inherit;
    border: none;
  }
  &__button:focus {
    outline: none;
  }
  &__cvText {
    padding-left: 10px;
    font-weight: bold;
    font-size: 0.8rem;
    font-family: $mono-font;
  }

  &__item {
    height: 40px;
    width: 40px;
    display: grid;
    place-items: center;
  }
  &__innerSpan {
    text-decoration: none;

    background-image: linear-gradient(
      $secondary-font-color,
      $secondary-font-color
    );

    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;

    // &:after {
    //   content: "";
    //   width: 100%;
    //   height: 2px;
    //   background-color: $secondary-font-color;
    //   position: absolute;
    //   left: 0;
    // }
  }

  &__logos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 50px);
    place-items: center;
    gap: 30px 50px;
    width: 80%;
    height: auto;
    margin-top: 5vh;
  }

  &__text {
    font-weight: 600;
    line-height: 1.5;
    font-size: 1.25rem;
    margin: 20px 0;
  }

  &__wrapper {
    max-width: 70%;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>