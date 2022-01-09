<template>
  <main>
    <section class="section-about">
      <div class="container">
        <div class="about">
          <div class="about-image">
            <div class="image-wrapper">
              <img
                class="image-wrapper__top"
                src="../images//star.png"
                alt="star-top"
              />
              <picture>
                <source srcset="../images/about-image.webp" type="image/webp" />
                <img
                  id="hello"
                  class="image-wrapper__main"
                  src="../images/about-image.jpg"
                  alt="about-image"
                />
              </picture>

              <div class="image-wrapper__bottom">
                <img
                  class="star-bottom"
                  src="../images//star.png"
                  alt="star-bottom"
                />
                <img
                  class="star-bottom"
                  src="../images//star.png"
                  alt="star-bottom"
                />
              </div>
            </div>
          </div>
          <div class="about-text">
            <p>
              Привет! Меня зовут Дарима, я графический дизайнер. <br />
              Создаю логотипы и фирменный стиль для брендов.
            </p>
            <p>
              Мой подход в работе состоит в детальном изучении, анализе бренда,
              миссии, создание платформы бренда, аналитике целевой аудитории,
              конкурентов, сферы рынка. <br />
              Благодаря такому подходу, мы с заказчиком погружаемся в проект,
              ставим задачу и решаем ее.
            </p>
            <p>
              Моя стратегия - создание смыслов. Я ищу идеи и обыгрываю их,
              создавая осмысленные образы в своих логотипах.
            </p>
            <p>
              В постоянном общении, мы вместе ищем, создаем и выбираем лучшие
              решения для вашего бизнеса. <br />
              Тщательное обдумывание концепций и идей логотипа, элементов
              брендинга, уделение внимания деталям позволяет достичь
              поставленных задач.
            </p>
            <p>
              После завершения проекта, я с удовольствием поддерживаю связь,
              отвечаю на вопросы и открыта для новых предложений.
            </p>
          </div>

          <div class="about-btns">
            <button
              class="btn about-btns__btn"
              @click="$router.push('/portfolio')"
            >
              проекты
            </button>
            <button
              class="btn about-btns__btn"
              @click="$router.push('/contact')"
            >
              контакты
            </button>
          </div>
        </div>

        <h2 class="section-title">Мой инстаграм</h2>
        <Preloader v-if="preloader" />
        <div id="instafeed"></div>

        <a
          class="btn btn-follow"
          href="https://www.instagram.com/chastichka_designer"
          target="_blank"
          rel="noopener"
          aria-label="instagram"
        >
          follow me
        </a>
      </div>
    </section>
  </main>
</template>

<script>
import Preloader from "../components/Preloader.vue";
import getInstagramPosts from "../utlis/instaposts";

export default {
  async created() {
    this.preloader = true;
    await getInstagramPosts().then(() => {
      this.preloader = false;
    });
  },
  data() {
    return {
      preloader: false,
    };
  },
  components: { Preloader },
};
</script>

<style>
#instafeed {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 30px;
}

.insta-post {
  flex-basis: 30%;
  height: 300px;
  margin-bottom: 30px;
  border-radius: 5px;
}

.insta-post__link {
  position: relative;
  display: inline-block;
  height: 300px;
  overflow: hidden;
  border-radius: 5px;
  margin-bottom: 30px;
}

.insta-post__image {
  max-width: 300px;
}
.insta-post__icon {
  position: absolute;
  right: 10px;
  top: 10px;
}

.insta-post__link:hover:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.4;
}

.insta-post__link:hover .insta-post__image {
  filter: blur(3px);
  transition: 0.3s;
}

.insta-post__text {
  white-space: pre-wrap;
  font-size: 17px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fdcc21;
  text-overflow: ellipsis;
  overflow: hidden;
  display: none;
  word-wrap: break-word;
  box-orient: vertical;
  z-index: 10;
  line-clamp: 5;
  -o-text-overflow: ellipsis;
  -ms-text-overflow: ellipsis;
  -ms-line-clamp: 5;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}

.insta-post__link:hover .insta-post__text {
  display: -webkit-box;
}
</style>
