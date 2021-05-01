<template>
    <main>
    <section class="section-about">
      <div class="container">
        <h2 style="display: none;">section title</h2>
        <div class="about">
          <div class="about-image">
            <div class="image-wrapper">
              <img class="image-wrapper__top" src="../images//star.png" alt="star-top">
              <img class="image-wrapper__main" src="../images/about-image.jpg" alt="about-image">
               
              <div class="image-wrapper__bottom">
                <img class="star-bottom" src="../images//star.png" alt="star-bottom">
                <img class="star-bottom" src="../images//star.png" alt="star-bottom">
              </div>
            </div>
           
          </div>
          <div class="about-text">
            <p>Привет! Меня зовут Дарима, я графический дизайнер. 
              Создаю логотипы и фирменный стиль для уникальных брендов.</p>
            <p>Мой подход в работе состоит в детальном изучении, анализе бренда, миссии, создание платформы бренда, аналитике целевой аудитории, конкурентов, сферы рынка. Благодаря такому подходу, мы с заказчиком погружаемся в проект, ставим задачу и решаем ее. </p>
            <p>Моя стратегия - создание смыслов. Я ищу идеи и обыгрываю их, создавая осмысленные образы в своих логотипах. </p>
            <p>В постоянном общении, мы вместе ищем, создаем и выбираем        лучшие решения для вашего бизнеса. Тщательное обдумывание концепций и идей логотипа, элементов брендинга, уделение внимания деталям позволяет достичь поставленных задач. </p>
            <p>После завершения проекта, я с удовольствием поддерживаю 
              связь, отвечаю на вопросы и открыта для новых предложений.</p>
          </div>
          
          <div class="about-btns">
            <button class="about-btns__btn btn" @click="$router.push('/portfolio')">проекты</button>
            <button class="about-btns__btn btn" @click="$router.push('/contact')">контакты</button>
          </div>

        </div>
      </div>
    </section>

  </main>
  
</template>