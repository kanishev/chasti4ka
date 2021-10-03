<template>
  <div class="main">
    <header class="header">
      <div class="container">
        <div class="header-navigate">
          <div class="logo">
            <a href="/">
              <img
                src="./images/logo.png"
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
                  >Projects</router-link
                >
              </li>
              <li class="navbar-list__item">
                <router-link class="navbar-list__link" to="/about"
                  >About</router-link
                >
              </li>
              <li class="navbar-list__item">
                <router-link class="navbar-list__link" to="/service"
                  >Service</router-link
                >
              </li>
              <li class="navbar-list__item">
                <router-link class="navbar-list__link" to="/contact"
                  >Contacts</router-link
                >
              </li>
            </ul>
          </nav>

          <div class="hamburger-menu">
            <div class="menu-btn" @click="showMenu = true" v-show="!showMenu">
              <div class="menu-btn__burger"></div>
            </div>

            <ul
              class="hamburger-menu__box"
              :class="
                showMenu
                  ? 'hamburger-menu__box-opened'
                  : 'hamburger-menu__box-closed'
              "
            >
              <li @click="showMenu = false">
                <router-link class="hamburger-menu__box-item" to="/portfolio"
                  >Projects</router-link
                >
              </li>
              <li @click="showMenu = false">
                <router-link class="hamburger-menu__box-item" to="/about"
                  >About</router-link
                >
              </li>
              <li @click="showMenu = false">
                <router-link class="hamburger-menu__box-item" to="/service"
                  >Service</router-link
                >
              </li>
              <li @click="showMenu = false">
                <router-link class="hamburger-menu__box-item" to="/contact"
                  >Contact</router-link
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
                  @click="showMenu = false"
                  >&times;</span
                >
              </button>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <transition name="route" mode="out-in">
      <router-view />
    </transition>

    <div
      v-if="showMenu"
      class="pop-up__background"
      @click="showMenu = false"
    ></div>

    <footer class="footer">
      <div class="container">
        <div class="footer-navigate">
          <div class="copyright">
            <a class="copyright__link" href="mailto:darima.boltyrova@gmail.com"
              >darima.boltyrova@gmail.com</a
            >
          </div>
          <div class="socials">
            <ul class="socials-list">
              <li class="socials-list__item">
                <a
                  class="socials-list__link"
                  href="https://www.behance.net/darimabolte6f1"
                  target="_blank"
                  rel="noopener"
                  aria-label="behance"
                >
                  <!-- <?xml version="1.0" encoding="iso-8859-1"> -->
                  <img src="./images/behance.svg" alt="behance" />
                </a>
              </li>
              <li class="socials-list__item">
                <a
                  class="socials-list__link"
                  href="https://www.instagram.com/chastichka_designer"
                  target="_blank"
                  rel="noopener"
                  aria-label="instagram"
                >
                  <img src="./images/instagram.svg" alt="instagram" />
                </a>
              </li>
              <li class="socials-list__item">
                <a
                  class="socials-list__link"
                  href="https://t.me/chasti4ka"
                  target="_blank"
                  rel="noopener"
                  aria-label="telegram"
                >
                  <img src="./images/telegram.svg" alt="telegram" />
                </a>
              </li>
              <li class="socials-list__item">
                <a
                  class="socials-list__link"
                  href="https://wa.me/79148465850"
                  target="_blank"
                  rel="noopener"
                  aria-label="whatsapp"
                >
                  <img src="./images/whatsapp.svg" alt="wp" />
                </a>
              </li>
            </ul>
          </div>
          <div class="copyright copyright-reserved">
            <img src="./images/copyright.svg" alt="copyright" />

            <p class="copyright__link copyright__link-reserved">
              2021 All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>
