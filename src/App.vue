<template>
  <div class="main">
    <AppHeader @toggleMenu="toggleMenu" :showMenu="this.showMenu" />

    <transition name="route" mode="out-in">
      <router-view />
    </transition>

    <div
      v-if="this.showMenu"
      class="pop-up__background"
      @click="toggleMenu(false)"
    ></div>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "Home",
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu(value) {
      this.showMenu = value;
    },
  },
  components: { AppHeader, AppFooter },
};
</script>
