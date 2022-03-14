<template>
  <main>
    <section class="section-portfolio">
      <div class="container portfolio-container">
        <figcaption style="display: none">section title</figcaption>
        <div class="portfolio">
          <figure
            tabindex="0"
            @keypress="$router.push(`/portfolio/paporotnik`)"
            class="portfolio-item animate__animated animate__fadeInUp"
            @click="$router.push(`/portfolio/paporotnik`)"
          >
            <picture>
              <source
                srcset="../images/portfolio/paporotnik-cover.webp"
                type="image/webp"
              />
              <img
                class="portfolio-item__img"
                v-lazy
                src="../images/lazy-small.jpeg"
                :data-src="require('../images/portfolio/paporotnik-cover.jpg')"
                alt="paporotnik"
                height="400"
              />
            </picture>
            <figcaption class="portfolio-item__text">
              paporotnik - эко-пространство
            </figcaption>
          </figure>
          <figure
            tabindex="0"
            @keypress="$router.push(`/portfolio/kerkemeli`)"
            class="portfolio-item animate__animated animate__fadeInUp"
            @click="$router.push(`/portfolio/kerkemeli`)"
          >
            <picture>
              <source
                srcset="../images/portfolio/kerkemeli-cover.webp"
                type="image/webp"
              />
              <img
                class="portfolio-item__img"
                v-lazy
                src="../images/lazy-small.jpeg"
                :data-src="require('../images/portfolio/kerkemeli-cover.jpg')"
                alt="kerkemeli"
                height="400"
              />
            </picture>
            <figcaption class="portfolio-item__text">
              kerkemeli - мастерская украшений
            </figcaption>
          </figure>
          <figure
            tabindex="0"
            @keypress="$router.push(`/portfolio/swag`)"
            class="portfolio-item animate__animated animate__fadeInUp"
            @click="$router.push(`/portfolio/swag`)"
          >
            <picture>
              <source
                srcset="../images/portfolio/swag-cover.webp"
                type="image/webp"
              />
              <img
                class="portfolio-item__img"
                v-lazy
                src="../images/lazy-small.jpeg"
                :data-src="require('../images/portfolio/swag-cover.jpg')"
                alt="swagAir"
                height="400"
              />
            </picture>
            <figcaption class="portfolio-item__text">
              swag air - студия детейлинга
            </figcaption>
          </figure>
          <figure
            tabindex="0"
            @keypress="$router.push(`/portfolio/orduk`)"
            class="portfolio-item animate__animated animate__fadeInUp"
            @click="$router.push(`/portfolio/orduk`)"
          >
            <picture>
              <source
                srcset="../images/portfolio/orduk-cover.webp"
                type="image/webp"
              />
            </picture>
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
            tabindex="0"
            @keypress="$router.push(`/portfolio/visota`)"
            class="portfolio-item animate__animated animate__fadeInUp"
            @click="$router.push(`/portfolio/visota`)"
          >
            <picture>
              <source
                srcset="../images/portfolio/visota-cover.webp"
                type="image/webp"
              />
              <img
                class="portfolio-item__img"
                v-lazy
                src="../images/lazy-small.jpeg"
                :data-src="require('../images/portfolio/visota-cover.jpg')"
                alt="visota"
                height="400"
              />
            </picture>
            <figcaption class="portfolio-item__text">
              Высота - туристический глемпинг
            </figcaption>
          </figure>
          <figure
            tabindex="0"
            @keypress="$router.push(`/portfolio/altai`)"
            class="portfolio-item animate__animated animate__fadeInUp"
            @click="$router.push(`/portfolio/altai`)"
          >
            <picture>
              <source
                srcset="../images/portfolio/altai-cover.webp"
                type="image/webp"
              />
              <img
                v-lazy
                src="../images/lazy-small.jpeg"
                class="portfolio-item__img"
                :data-src="require('../images/portfolio/altai-cover.jpg')"
                alt="altai"
                height="400"
              />
            </picture>
            <figcaption class="portfolio-item__text">
              Ару Алтай - туристический комплекс
            </figcaption>
          </figure>

          <figure
            tabindex="0"
            @keypress="$router.push(`/portfolio/luka`)"
            class="portfolio-item animate__animated animate__fadeInUp"
            @click="$router.push(`/portfolio/luka`)"
          >
            <picture>
              <source
                srcset="../images/portfolio/luka-cover.webp"
                type="image/webp"
              />
              <img
                v-lazy
                src="../images/lazy-small.jpeg"
                class="portfolio-item__img"
                :data-src="require('../images/portfolio/luka-cover.jpg')"
                alt="altai"
                height="400"
              />
            </picture>
            <figcaption class="portfolio-item__text">
              Святой Лука - византийский хор
            </figcaption>
          </figure>
        </div>
        <button class="btn portfolio__btn" @click="$router.push('/contact')">
          связаться со мной
        </button>
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
