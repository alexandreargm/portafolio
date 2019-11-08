<!-- AboutMe.vue -->
<template>
  <section class="about-me">
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
        <ul class="skills-list about-me__skills-list text--m">
          <li class="skills-list__item">
            JavaScript (ES6)
          </li>
          <li class="skills-list__item">
            HTML y (S)CSS
          </li>
          <li class="skills-list__item">
            JQuery
          </li>
          <li class="skills-list__item">
            Node.js
          </li>
          <li class="skills-list__item">
            Vue.js
          </li>
          <li class="skills-list__item">
            Laravel (PHP)
          </li>
          <li class="skills-list__item">
            Java
          </li>
          <li class="skills-list__item">
            SQL
          </li>
        </ul>
      </div>
      <div class="photo about-me__media">
        <div class="photo__wrapper">
          <img src="/foto_perfil.jpg" alt="Foto de perfil" class="photo__image">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
/* AboutMe.vue */
.about-me {
  display: flex;
  align-items: center;
  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    @media screen and (min-width: $tablet-landscape ) {
      flex-direction: row;
    }
  }
  &__head {
    flex: 1 0 100%;
  }
  &__body {
    max-width: 50em;
  }
  &__title {
    margin-bottom: 1.3em;
  }
  &__description {
    margin-bottom: 1.4rem;
  }
  &__skills-list {
    padding-top: 1.5rem;
  }
  &__media {
    width: 70%;
    max-width: 30rem;
    margin: 4rem auto 0;
    @media screen and (min-width: $tablet-landscape ) {
      margin-top: 0;
    }
  }
}

.skills-list {
  column-count: 2;
  &__item {
    margin-bottom: 1rem;
  }
}

.photo {
  &__wrapper {
    border-radius: 0.2rem;
    background: var(--color-contrast-medium);
  }
  &__image {
    border-radius: 0.2rem;
    width: 100%;
    height: auto;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  }
}

</style>
