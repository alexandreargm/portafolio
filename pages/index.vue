<!-- index.vue -->
<template>
  <div class="siteframe" data-theme="default">
    <header class="siteframe__header">
      <navbar />
    </header>
    <main class="siteframe__main">
      <div class="main__hero container">
        <div class="text--h2">
          Hola, me llamo
        </div>
        <div class="text--title">
          Alexandre Argibay M.
        </div>
        <div class="text--title text--color-contrast-medium">
          Desarrollo aplicaciones web.
        </div>
        <div class="text--m">
          Soy un Desarrollador Web con estancia en Torrevieja, Alicante que crea aplicaciones web atractivas, modernas, y con una experiencia de usuario excelente.
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
/* index.vue */

.siteframe {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  position: relative;
}

.siteframe__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-bg);
  z-index: 10;
}

</style>
