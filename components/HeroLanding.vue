<!-- HeroLanding.vue -->
<template>
  <div class="herolanding">
    <div class="herolanding__wrapper container container--indent-1">
      <div class="herolanding__hello text--h2 text--color-primary">
        Hola, me llamo
      </div>
      <h1 class="herolanding__name text--title">
        Alexandre Argibay.
      </h1>
      <h2 class="herolanding__role text--title text--color-contrast-medium">
        Desarrollo aplicaciones web.
      </h2>
      <p class="herolanding__description text--l">
        Soy un Desarrollador Web con estancia en Torrevieja, Alicante que crea aplicaciones web modernas, atractivas, y con una experiencia de usuario excelente.
      </p>
      <a href="#" role="button" class="herolanding__call-to-action button button--big text--l text--color-primary">
        Contactar
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* HeroLanding.vue */
.herolanding {
  display: flex;
  align-items: center;
  @media screen and (min-width: 48em){
    padding-top: 0;
  }
  &__wrapper {
    padding-top: 4rem;
    @media screen and (max-width: calc(#{$tablet-portrait} - 0.0625em)) {
      padding-left: var(--container-padding) !important;
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
