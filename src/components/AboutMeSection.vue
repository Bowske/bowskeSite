<template>
  <div class="aboutMeSection">
    <div class="aboutMeSection__backBar"></div>
    <div class="aboutMeSection__wrapper">
      <p class="aboutMeSection__text">
        Jestem studentem 3 roku informatyki na Uniwersytecie Adama Mickiewicza.
        Kluczowe elementy mojej pracy - dbanie o szczegóły, testowanie nowych
        rozwiązań, zamiłowanie do UI/UX'u.
      </p>
      <button class="aboutMeSection__button">
        <Cv />
        <p class="aboutMeSection__cvText">wgląd do mojego CV</p>
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
    width: 20vw;
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
    font-size: 1rem;
    font-family: $mono-font;
  }

  &__item {
    height: 40px;
    width: 40px;
    display: grid;
    place-items: center;
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
    font-size: 1.16rem;
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