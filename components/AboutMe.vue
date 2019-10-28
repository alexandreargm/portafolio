<!-- AboutMe.vue -->
<template>
  <div class="about-me">
    <div class="about-me__wrapper container">
      <div class="about-me__head">
        <h1 class="about-me__title text--h1">
          Sobre mi
        </h1>
      </div>
      <div class="about-me__body">
        <p class="about-me__description text--l">
          <span class="text--h2">¡Hola!</span> <span class="text--color-contrast-high">Me llamo Alex, soy un Desarrollador Web</span> con estancia <span class="text--color-contrast-high">en Torrevieja, Alicante</span> al que le gusta estar al tanto de las últimas tecnologías de informática y electrónica de consumo.
        </p>
        <p class="about-me__description text--l">
          Me dedico al desarrollo de aplicaciones web modernas, atractivas, y con una experiencia de usuario excelente.
        </p>
        <p class="about-me__description text--l">
          Estas son algunas de las tecnologías que he usado ultimamente:
        </p>
      </div>
      <div class="photo about-me__media">
        <div class="photo__wrapper">
          <img src="/foto_perfil.jpg" alt="Foto de perfil" class="photo__image">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* AboutMe.vue */
.about-me {
  display: flex;
  align-items: center;
  @media screen and (min-width: $tablet-portrait){
    padding-top: 0;
  }
  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    @media screen and (min-width: $tablet-portrait) {
      @include indent-container-left(1, var(--column-count), var(--container-padding));
    }
  }
  &__head {
    flex: 1 0 100%;
  }
  &__body {
    max-width: 50em;
    margin-bottom: 6rem;
  }
  &__title {
    margin-bottom: 1.5em;
  }
  &__description {
    margin-bottom: 1.4rem;
  }
  &__media {
    width: 70%;
    max-width: 30rem;
    margin: 0 auto;
  }
}

.photo {
  &__wrapper {
    background-color: var(--color-contrast-low);
  }
  &__image {
    width: 100%;
    height: auto;
  }
}

</style>
