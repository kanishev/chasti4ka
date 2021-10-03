<template>
  <main>
    <section class="section-portfolio">
      <div class="container portfolio-container">
        <figcaption style="display: none">section title</figcaption>
        <div class="portfolio">
          <figure
            class="portfolio-item animate__animated animate__fadeInUp"
            @click="$router.push(`/portfolio/paporotnik`)"
          >
            <img
              class="portfolio-item__img"
              v-lazy
              src="../images/lazy-small.jpeg"
              :data-src="require('../images/portfolio/paporotnik-cover.jpg')"
              alt="paporotnik"
              height="400"
            />
            <figcaption class="portfolio-item__text">
              paporotnik - эко-пространство
            </figcaption>
          </figure>
          <figure
            class="portfolio-item animate__animated animate__fadeInUp"
            @click="$router.push(`/portfolio/kerkemeli`)"
          >
            <img
              class="portfolio-item__img"
              v-lazy
              src="../images/lazy-small.jpeg"
              :data-src="require('../images/portfolio/kerkemeli-cover.jpg')"
              alt="kerkemeli"
              height="400"
            />
            <figcaption class="portfolio-item__text">
              kerkemeli - мастерская украшений
            </figcaption>
          </figure>
          <figure
            class="portfolio-item animate__animated animate__fadeInUp"
            @click="$router.push(`/portfolio/swag`)"
          >
            <img
              class="portfolio-item__img"
              v-lazy
              src="../images/lazy-small.jpeg"
              :data-src="require('../images/portfolio/swag-cover.jpg')"
              alt="swagAir"
              height="400"
            />
            <figcaption class="portfolio-item__text">
              swag air - студия детейлинга
            </figcaption>
          </figure>
          <figure
            class="portfolio-item animate__animated animate__fadeInUp"
            @click="$router.push(`/portfolio/orduk`)"
          >
            <img
              class="portfolio-item__img"
              v-lazy
              src="../images/lazy-small.jpeg"
              :data-src="require('../images/portfolio/orduk-cover.jpg')"
              alt="swagAir"
              height="400"
            />
            <figcaption class="portfolio-item__text">
              orduk - камуфляжные костюмы
            </figcaption>
          </figure>
          <figure
            class="portfolio-item animate__animated animate__fadeInUp"
            @click="$router.push(`/portfolio/visota`)"
          >
            <img
              class="portfolio-item__img"
              v-lazy
              src="../images/lazy-small.jpeg"
              :data-src="require('../images/portfolio/visota-cover.jpg')"
              alt="visota"
              height="400"
            />
            <figcaption class="portfolio-item__text">
              Высота - туристический глемпинг
            </figcaption>
          </figure>
          <figure
            class="portfolio-item animate__animated animate__fadeInUp"
            @click="$router.push(`/portfolio/altai`)"
          >
            <img
              v-lazy
              src="../images/lazy-small.jpeg"
              class="portfolio-item__img"
              :data-src="require('../images/portfolio/altai-cover.jpg')"
              alt="altai"
              height="400"
            />
            <figcaption class="portfolio-item__text">
              Ару Алтай - туристический комплекс
            </figcaption>
          </figure>

          <button class="btn portfolio__btn" @click="$router.push('/contact')">
            связаться со мной
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import lazy from "../directives/lazy";

export default {
  directives: {
    lazy,
  },
};
</script>
