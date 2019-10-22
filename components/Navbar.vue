<!-- Navbar.vue -->
<template>
  <nav class="navbar container">
    <Logo class="navbar__logo" />
    <ul class="navbar__menu">
      <li class="navbar__menu-link">
        <a href="#" class="navbar__menu-link text--m">Sobre mi</a>
      </li>
      <li class="navbar__menu-link">
        <a href="#" class="navbar__menu-link text--m">Experiencia</a>
      </li>
      <li class="navbar__menu-link">
        <a href="#" class="navbar__menu-link text--m">Contacto</a>
      </li>
      <li class="navbar__menu-link">
        <a href="/cv.pdf" download="CV Alexandre Argibay.pdf" class="navbar__button navbar__menu-link button text--m text--color-primary">
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

.navbar__menu {
  margin: inherit;
  padding: 0;
  height: 4rem;
  list-style: none;
  align-items: center;
  display: none;

  @media screen and (min-width: 48em /* 768px */) {
    display: flex;
  }
}
.navbar__logo {
  flex: 0 0 auto;
  width: auto;
  margin-right: auto;
}
.navbar__menu:nth-child(2) {
  margin: 0;
}
.navbar__menu-link {
  flex: 0 0 auto;
  margin-left: 5rem;
}
.navbar__menu-link:first-of-type {
  margin: 0 !important;
}
.navbar__menu-link {
  font-weight: 500;
}
.navbar__button {
  font-weight: 400;
}
</style>
