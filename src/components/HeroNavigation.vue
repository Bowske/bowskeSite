<template>
  <transition name="hero-nav">
    <div class="hero-navigation" v-show="isHamburgerClicked">
      <nav class="hero-navigation__content">
        <ul class="hero-navigation__ul">
          <li
            class="hero-navigation__li"
            v-for="elem in navigationElems"
            :key="elem.name"
          >
            {{ elem.name }}
          </li>
        </ul>
      </nav>
    </div>
  </transition>
</template>

<script>
export default {
  name: "HeroNavigation",
  data() {
    return {
      navigationElems: [
        { name: "O mnie", route: "/o_mnie" },
        { name: "Projekty", route: "/projekty" },
        { name: "Inspiracja", route: "/inspiracja" },
      ],
    };
  },
  computed: {
    isHamburgerClicked() {
      return this.$store.state.isHamburgerClicked;
    },
  },
};
</script>

<style lang="scss" scoped>
.hero-navigation {
  z-index: 2;
  height: 100%;
  width: 100%;
  background-color: $light-background;

  &__content {
    display: flex;
    width: 100%;
    height: 90%;
    position: absolute;
    bottom: 0;
    justify-content: center;
    padding: 24px 0;

    .hero-navigation__ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;

      .hero-navigation__li {
      }
    }
  }
}
// OPACITY TEXT ANIMATION
.hero-nav-enter-active .hero-navigation__li {
  transition: opacity 1s ease-in;
}
.hero-nav-leave-active .hero-navigation__li {
  transition: opacity 1s ease-out;
}

.hero-nav-enter .hero-navigation__li {
  opacity: 0;
}
.hero-nav-enter-to .hero-navigation__li {
  opacity: 1;
}
.hero-nav-leave-to .hero-navigation__li {
  opacity: 0;
}
//

//SLIDING IN NAVIGATION ANIMATION
.hero-nav-enter-active,
.hero-nav-leave-active {
  transition: transform 1s ease 0.1s;
}
.hero-nav-enter {
  transform: translate(-100%, 0);
}
.hero-nav-enter-to {
  transform: translate(0, 0);
}
.hero-nav-leave-to {
  transform: translate(100%, 0);
}
//
</style>