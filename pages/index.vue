<template>
  <div class="container" data-theme="default">
    <header>
      <navbar />
    </header>
    <main>
      <div class="hero">
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

<style>
.container {
  display: block;
  min-height: 100vh;
}

header {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
}

.main {
  width: 1080px;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
