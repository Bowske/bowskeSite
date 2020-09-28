<template>
  <div class="hero-header">
    <div class="hero-header__wrapper">
      <avatar />
      <span class="hero-header__span">Adam Borowski</span>
    </div>
    <hamburger />
  </div>
</template>

<script>
import Avatar from "@/../public/avatar.svg";
import Hamburger from "@/components/Hamburger.vue";

export default {
  name: "HeroHeader",
  components: {
    Avatar,
    Hamburger,
  },
};
</script>

<style lang="scss" scoped>
.hero-header {
  z-index: 3;
  position: fixed;
  height: 15%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;

  &__wrapper {
    display: flex;
    align-items: center;
  }
  &__span {
    font-weight: 600;
    padding-left: 10px;
  }
}
</style>
