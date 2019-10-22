<!-- HeroLanding.vue -->
<template>
  <div class="herolanding">
    <div class="herolading__wrapper container">
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

<style scoped>
/* HeroLanding.vue */
.herolanding {
  display: flex;
  align-items: center;
}
.herolanding__hello {
  margin-bottom: 1.2rem;
}
.herolanding__name {
  margin-bottom: 0;
}
.herolanding__role {
  margin-bottom: 4rem;
}
.herolanding__description {
  max-width: 26em;
  margin-bottom: 8rem;
}

</style>
