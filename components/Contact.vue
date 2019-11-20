<!-- Contact.vue -->
<template>
  <section id="contacto" class="contact">
    <div class="contact__wrapper container">
      <div class="contact__head">
        <h1 class="contact__title text--h1">
          Contacto
        </h1>
      </div>
      <div class="contact__body">
        <h2 class="contact__titleh2 text--h2">
          ¡Busco trabajo!
        </h2>
        <div class="contact__description text--l">
          Actualmente estoy en busca de un puesto de trabajo o proyecto al que pueda unirme, preferiblemente en Torrevieja, Alicante.
        </div>
        <p class="contact__description text--l">
          Lo mejor que puedes hacer para contactar conmigo es escribirme a mi correo. ¡Intentaré responder lo más pronto posible!
        </p>
      </div>
      <div class="buttons contact__buttons">
        <div class="buttons__button">
          <a href="mailto:alexandreargm@gmail.com" role="button" class="button text--m text--color-primary">
            Email alexandreargm@gmail.com
          </a>
        </div>
        <div class="buttons__button">
          <a href="mailto:+34653020231" role="button" class="button text--m text--color-primary">
            Llamar 653 020 231
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
/* Contact.vue */
.contact {
  &__title {
    margin-bottom: 1.3em;
  }
  &__description {
    max-width: 21em;
    margin-bottom: 2rem;
  }
  &__buttons {
    margin-top: 8rem;
  }
  .buttons {
    &__button {
      margin-bottom: 2em;
    }
  }
}

</style>
