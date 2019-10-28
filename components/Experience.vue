<!-- AboutMe.vue -->
<template>
  <section class="experience">
    <div class="experience__wrapper container">
      <div class="experience__head">
        <h1 class="experience__title text--h1">
          Experiencia
        </h1>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
/* AboutMe.vue */
.experience {
  display: flex;
  align-items: center;
  @media screen and (min-width: $tablet-portrait){
    padding-top: 0;
  }
  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    @media screen and (min-width: $tablet-portrait) {
      @include indent-container-left(1, var(--column-count), var(--container-padding));
    }
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
    margin-bottom: 1.5em;
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
