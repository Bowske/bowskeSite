<template>
  <div ref="heroNavigation" class="hero-navigation">
    <nav class="hero-navigation__content">
      <ul class="hero-navigation__ul">
        <li
          @click="hideMenu()"
          class="hero-navigation__li"
          v-for="elem in navigationElems"
          :key="elem.name"
        >
          {{ elem.name }}
        </li>
      </ul>
      <div class="hero-navigation__footer">
        <button
          @click="hideMenu()"
          ref="githubButton"
          class="hero-navigation__button"
        >
          <Github />
          <span>Github</span>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
import gsap from "gsap";
import Github from "@/../public/github-link.svg";

export default {
  name: "HeroNavigation",
  components: {
    Github,
  },
  data() {
    return {
      navigationElems: [
        { name: "home", route: "/home" },
        { name: "projekty", route: "/projekty" },
        { name: "o mnie", route: "/o_mnie" },
        { name: "inspiracja", route: "/inspiracja" },
      ],
    };
  },
  methods: {
    hideMenu() {
      this.$store.commit("clickHamburger");
    },
  },
  created() {},
  computed: {
    isHamburgerClicked() {
      return this.$store.state.isHamburgerClicked;
    },
  },
  watch: {
    "$store.state.isHamburgerClicked": function () {
      const hamburgerState = this.$store.state.isHamburgerClicked;
      const heroNavigation = this.$refs.heroNavigation;
      const githubButton = this.$refs.githubButton;

      if (hamburgerState) {
        const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
        gsap.set([heroNavigation, githubButton], { autoAlpha: 0 });
        console.log(hamburgerState);
        tl.fromTo(
          heroNavigation,
          { left: "-100%" },
          { duration: 1, left: "+=100%", autoAlpha: 1 }
        ).fromTo(
          githubButton,
          { x: "0" },
          { duration: 0.5, x: "0", autoAlpha: 1, ease: "power1.in" }
        );
      } else {
        gsap.to(heroNavigation, {
          duration: 1,
          left: "+=100%",
          autoAlpha: 0,
          ease: "power3.inOut",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.hero-navigation {
  z-index: 999;
  position: fixed;
  height: 100vh;
  width: 100%;
  left: -100%;
  background-color: $light-background;
  // transform: translate(-100%, 0);
  // DISPLAY NONE RATUJE SYTUACJE TODO

  &__content {
    display: flex;
    width: 100%;
    height: 90%;
    position: absolute;
    bottom: 0;
    justify-content: center;
    padding: 0px 14px 24px 14px;

    .hero-navigation__ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      position: absolute;
      right: 24px;

      font-size: 25px;

      .hero-navigation__li {
        position: relative;
        padding: 35px 0;
        // border-bottom: 2px solid $secondary-font-color;
        a {
          text-decoration: none;
          color: inherit;
        }
      }
      .hero-navigation__li::after {
        content: "";
        height: 2px;
        background-color: $secondary-font-color;
        position: absolute;
        top: calc(100% - 2px);
        width: 50px;
        right: 0;
      }
    }
    .hero-navigation__footer {
      align-self: flex-end;
      display: flex;
      justify-content: space-around;
      width: 100%;

      .hero-navigation__button {
        display: flex;
        padding: 10px 0;
        width: 25%;
        background-color: transparent;
        border: none;
        align-items: center;
        justify-content: space-around;

        span {
          font-family: $primary-font;
        }
      }
    }
  }
}
</style>