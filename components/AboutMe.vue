<!-- AboutMe.vue -->
<template>
  <div class="about-me">
  </div>
</template>

<style scoped lang="scss">
/* AboutMe.vue */
.about-me {
  display: flex;
  align-items: center;
  @media screen and (min-width: 48em){
    padding-top: 0;
  }
  &__wrapper {
    padding-top: 4rem;
    @media screen and (min-width: $tablet-portrait) {
      @include indent-container-left(1, var(--column-count), var(--container-padding));
    }
  }
  &__hello {
    margin-bottom: 1.2rem;
  }
  &__name {
    margin-bottom: 0;
  }
  &__role {
    margin-bottom: 0;
  }
  &__role:after {
    content: " ";
    display: block;
    width: 0.8em;
    border-bottom: 0.14em solid var(--color-primary);
    margin-top: 0.5em;
    margin-bottom: 0.3em;
  }
  &__description {
    max-width: 26em;
    margin-bottom: 8rem;
  }
}

</style>
