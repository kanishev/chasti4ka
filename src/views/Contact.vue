<template>
  <main>
    <section class="section-contacts">
      <div class="container">
        <h2 style="display: none">section title</h2>
        <div class="contacts">
          <div class="contacts-info">
            <p class="contacts-info__text">связаться со мной:</p>
            <p class="contacts-info__text">
              <a href="tel:+79148465850">+7(914)-846-58-50</a>
            </p>
            <p class="contacts-info__text contacts-info__mail">
              <a href="mailto:darima.boltyrova@gmail.com">darima.boltyrova@gmail.com</a>
            </p>
            <img
              class="contacts-info__img"
              src="../images/star.png"
              alt="star"
            />
          </div>
          <div class="contacts-form">
            <form @submit.prevent="sendEmail">
              <label for="mail"></label>
              <input
                class="contacts-form__input"
                :style="{ border: errors.mail ? '2px solid gold' : 'none' }"
                id="mail"
                type="text"
                placeholder="email*:"
                name="email"
                v-model="mail"
              />
              <transition name="fade">
                <small class="error-message" v-if="errors.mail">{{
                  errors.mail
                }}</small>
              </transition>
              <label for="phone"></label>
              <input
                class="contacts-form__input"
                :style="{ border: errors.phone ? '2px solid gold' : 'none' }"
                id="phone"
                type="text"
                placeholder="phone*:"
                name="phone"
                v-model="phone"
              />
              <transition name="fade">
                <small class="error-message" v-if="errors.phone">{{
                  errors.phone
                }}</small>
              </transition>
              <textarea
                class="contacts-form__input contacts-form__area"
                draggable="false"
                placeholder="сообщение:"
                name="text"
                v-model="text"
              ></textarea>
              <transition name="fade">
                <small class="error-message" v-if="success"
                  >Заявка успешно отправлена</small
                >
              </transition>
              <button class="contacts-form__btn btn" :disabled="isDisabled" :style="{'background-color': isDisabled ? '#efefef' : ''}">отправить</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      errors: {
        name: null,
        mail: null,
        phone: null,
      },
      success: false,
      isDisabled: false,
      mail: "",
      phone: "",
      text: "",
    };
  },
  methods: {
    validForm() {
      this.errors = {};
      let res = true;

      if (!this.mail) {
        this.errors.mail = "Необходимо указать почту";
      } else if (!this.validEmail(this.mail)) {
        this.errors.mail = "Укажите корректный адрес электронной почты";
      }

      if (!this.phone) {
        this.errors.phone = "Необходимо указать телефон";
      }

      Object.keys(this.errors).forEach((k) => {
        if (!this.errors[k]) {
          res = true;
        } else {
          res = false;
        }
      });

      return res;
    },
    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    sendEmail(e) {
      if (this.validForm()) {
        this.isDisabled = true;

        emailjs
          .sendForm(
            "service_wxgfq3v",
            "template_wblycg4",
            e.target,
            "user_Kh6biLDZTBtYMhuE9i7jZ"
          )
          .then(() => {
            this.success = true;
            (this.mail = ""), (this.phone = ""), (this.text = "");

            setTimeout(() => {
              this.success = false;
              this.isDisabled = false
            }, 5000);
          });
      } else {
        setTimeout(() => {
          this.errors = {};
        }, 5000);
      }
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
