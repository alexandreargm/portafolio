<!-- HeroLanding.vue -->
<template>
  <div class="herolanding container">
    <div class="herolading__wrapper container">
      <div class="herolanding__subtitle1 text--h2 text--color-primary">
        Hola, me llamo
      </div>
      <h1 class="herolanding__title text--title">
        Alexandre Argibay M.
      </h1>
      <h2 class="herolanding__subtitle2 text--title text--color-contrast-medium">
        Desarrollo aplicaciones web.
      </h2>
      <div class="herolanding__description text--l">
        Soy un Desarrollador Web con estancia en Torrevieja, Alicante que crea aplicaciones web atractivas, modernas, y con una experiencia de usuario excelente.
      </div>
    </div>
  </div>
</template>

<style scoped>
/* HeroLanding.vue */
.herolanding {
  min-height: calc(100vh - var(--navbar-height));
  display: flex;
  align-items: center;

}
.herolanding__subtitle1 {
  margin-bottom: 0.8em;
}
.herolanding__title {
  margin: 0;
}

.herolanding__description {
  max-width: 26em;
}
</style>
