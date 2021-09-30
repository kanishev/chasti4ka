<template>
  <main>
    <div class="container">
      <section class="section-home">
        <div class="h2" style="display: none">section title</div>
        <div class="home">
          <div class="home-image animate__animated animate__rotateInDownLeft">
            <img src="../images/star.png" alt="star" />
          </div>
          <div class="home-title">
            <div
              style="display: inline-block; --animate-duration: 1s"
              class="home-title__letter animate__animated animate__flipInX"
            >
              Ч
            </div>
            <span
              style="display: inline-block; --animate-duration: 1.4s"
              class="home-title__letter animate__animated animate__flipInX"
              >А</span
            >
            <span
              style="display: inline-block; --animate-duration: 1.8s"
              class="home-title__letter animate__animated animate__flipInX"
              >С</span
            >
            <span
              style="display: inline-block; --animate-duration: 2.4s"
              class="home-title__letter animate__animated animate__flipInX"
              >Т</span
            >
            <span
              style="display: inline-block; --animate-duration: 2.8s"
              class="home-title__letter animate__animated animate__flipInX"
              >И</span
            >
            <span
              style="display: inline-block; --animate-duration: 3.2s"
              class="home-title__letter animate__animated animate__flipInX"
              >Ч</span
            >
            <span
              style="display: inline-block; --animate-duration: 3.6s"
              class="home-title__letter animate__animated animate__flipInX"
              >К</span
            >
            <span
              style="display: inline-block; --animate-duration: 3.8s"
              class="home-title__letter animate__animated animate__flipInX"
              >А</span
            >
          </div>

          <div class="home-subtitle animate__animated animate__zoomInRight">
            Логотипы со смыслом
          </div>

          <div class="home-btn animate__animated animate__zoomIn">
            <button
              class="btn home-btn__one"
              @click="$router.push('/portfolio')"
            >
              Смотреть проекты
            </button>
            <button class="btn home-btn__one" @click="$router.push('/contact')">
              Связаться со мной
            </button>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import animateLetter from "../utlis/animations";

export default {
  name: "Home",
  mounted() {
    animateLetter();
  },
};
</script>
