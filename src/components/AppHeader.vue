<template>
  <header class="header">
    <div class="container">
      <div class="header-navigate">
        <div class="logo">
          <a href="/">
            <img
              src="../images/logo.png"
              alt="logo"
              width="107"
              height="auto"
            />
          </a>
        </div>

        <nav class="navbar">
          <ul class="navbar-list">
            <li class="navbar-list__item">
              <router-link class="navbar-list__link" to="/portfolio"
                >Проекты</router-link
              >
            </li>
            <li class="navbar-list__item">
              <router-link class="navbar-list__link" to="/about"
                >Обо мне</router-link
              >
            </li>
            <li class="navbar-list__item">
              <router-link class="navbar-list__link" to="/service"
                >Услуги</router-link
              >
            </li>
            <li class="navbar-list__item">
              <router-link class="navbar-list__link" to="/contact"
                >Контакты</router-link
              >
            </li>
          </ul>
        </nav>

        <div class="hamburger-menu">
          <div
            role="button"
            tabindex="0"
            class="menu-btn"
            @click="$emit('toggleMenu', true)"
            @keypress="$emit('toggleMenu', true)"
            v-show="!this.showMenu"
          >
            <div class="menu-btn__burger"></div>
          </div>

          <ul
            class="hamburger-menu__box"
            :class="
              this.showMenu
                ? 'hamburger-menu__box-opened'
                : 'hamburger-menu__box-closed'
            "
          >
            <li @click="$emit('toggleMenu', false)">
              <router-link class="hamburger-menu__box-item" to="/portfolio"
                >Проекты</router-link
              >
            </li>
            <li @click="$emit('toggleMenu', false)">
              <router-link class="hamburger-menu__box-item" to="/about"
                >Обо мне</router-link
              >
            </li>
            <li @click="$emit('toggleMenu', false)">
              <router-link class="hamburger-menu__box-item" to="/service"
                >Услуги</router-link
              >
            </li>
            <li @click="$emit('toggleMenu', false)">
              <router-link class="hamburger-menu__box-item" to="/contact"
                >Контакты</router-link
              >
            </li>
            <button
              type="button"
              class="hamburger-menu__btn-close"
              aria-label="Close"
            >
              <span
                class="close-btn"
                aria-hidden="true"
                @click="$emit('toggleMenu', false)"
                >&times;</span
              >
            </button>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ["showMenu"],
  data() {
    return {};
  },
  methods: {
    go() {
      console.log("go");
      this.$emit("toggleMenu", true);
    },
  },
};
</script>

<style></style>
