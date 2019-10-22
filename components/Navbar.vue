<!-- Navbar.vue -->
<template>
  <nav class="navbar">
    <ul class="navbar___menu container">
      <li class="navbar___logo">
        <Logo />
      </li>
      <li class="navbar___menu-item">
        <a href="#" class="navbar__menu-link text--m">Sobre mi</a>
      </li>
      <li class="navbar___menu-item">
        <a href="#" class="navbar__menu-link text--m">Experiencia</a>
      </li>
      <li class="navbar___menu-item">
        <a href="#" class="navbar__menu-link text--m">Contacto</a>
      </li>
      <li class="navbar___menu-item">
        <a href="/cv.pdf" download="CV Alexandre Argibay.pdf" class="navbar___button navbar__menu-link button text--m text--color-primary">
          Descargar CV
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
/* Navbar.vue */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  height: var(--navbar-height);
  flex: 1 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: var(--color-bg);
}

.navbar___menu {
  margin: inherit;
  height: 4rem;
  list-style: none;
  display: flex;
  align-items: center;
}
.navbar___logo {
  flex: 0 0 auto;
  width: auto;
  margin-right: auto;
}
.navbar___menu:nth-child(2) {
  margin: 0;
}
.navbar___menu-item {
  flex: 0 0 auto;
  margin-left: 5rem;
}
.navbar___menu-item:first-of-type {
  margin: 0 !important;
}
.navbar__menu-link {
  font-weight: 500;
}
.navbar___button {
  font-weight: 400;
}
</style>
