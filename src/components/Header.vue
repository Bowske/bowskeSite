<template>
  <div class="header">
    <Avatar />
    <Hamburger />
  </div>
</template>

<script>
import Avatar from "@/../public/avatar.svg";
import Hamburger from "@/components/Hamburger.vue";

export default {
  name: "Header",
  components: {
    Avatar,
    Hamburger,
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;

  &__avatar {
  }
}
</style>
