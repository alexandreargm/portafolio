<!-- AboutMe.vue -->
<template>
  <transition
    appear
    appear-class="custom-appear-class"
  >
    <section id="sobre-mi" class="about-me">
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
            Estas son algunas de las tecnologías con las que he estado trabajando últimamente:
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
      </div>
    </section>
  </transition>
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
    max-width: 45em;
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
  .skills-list {
    column-count: 2;
    &__item {
      margin-bottom: 1rem;
    }
  }
}

</style>
