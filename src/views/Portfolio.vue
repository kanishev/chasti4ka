<template>
 <main>
    <section class="section-portfolio">
      <div class="container portfolio-container">
        <h2 style="display: none;">section title</h2>
        <div class="portfolio">
          <div class="portfolio-item animate__animated animate__fadeInUp" @click="$router.push(`/portfolio/paporotnik`)">
            <img class="portfolio-item__img" src="../images/portfolio/paporotnik-cover.jpg" alt="paporotnik" height="400">
            <h2 class="portfolio-item__text">paporotnik - эко-пространство</h2>
          </div>
          <div class="portfolio-item animate__animated animate__fadeInUp" @click="$router.push(`/portfolio/kerkemeli`)">
            <img class="portfolio-item__img" src="../images/portfolio/kerkemeli-cover.jpg" alt="kerkemeli" height="400">
            <h2 class="portfolio-item__text">kerkemeli - мастерская украшений</h2>
          </div>
          <div class="portfolio-item animate__animated animate__fadeInUp" @click="$router.push(`/portfolio/swag`)">
            <img  class="portfolio-item__img" src="../images/portfolio/swag-cover.jpg" alt="swagAir" height="400">
            <h2 class="portfolio-item__text">swag air - студия детейлинга</h2>
          </div>
          <div class="portfolio-item animate__animated animate__fadeInUp" @click="$router.push(`/portfolio/orduk`)">
            <img class="portfolio-item__img" src="../images/portfolio/orduk-cover.jpg" alt="swagAir" height="400">
            <h2 class="portfolio-item__text">orduk - камуфляжные костюмы</h2>
          </div>
        </div>
      </div>
      </section>
  </main>
</template>
