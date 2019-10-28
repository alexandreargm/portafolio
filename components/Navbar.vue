<!-- Navbar.vue -->
<template>
  <nav class="navbar container">
    <Logo class="logo" />
    <ul class="menu">
      <li class="menu__item">
        <a href="#" class="menu__link text--m">Sobre mi</a>
      </li>
      <li class="menu__item">
        <a href="#" class="menu__link text--m">Experiencia</a>
      </li>
      <li class="menu__item">
        <a href="#" class="menu__link text--m">Contacto</a>
      </li>
      <li class="menu__item">
        <a href="/cv.pdf" download="CV Alexandre Argibay.pdf" class="menu__button button text--m text--color-primary">
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

<style scoped lang="scss">
/* Navbar.vue */
.navbar {
  display: flex;
  height: var(--navbar-height);
  flex: 1 100%;
  align-items: center;
  background-color: var(--color-bg);
}
.logo {
  flex: 0 0 auto;
  width: auto;
  margin-right: auto;
}
.menu {
  margin: inherit;
  padding: 0;
  height: 4rem;
  list-style: none;
  align-items: center;
  display: none;

  @media screen and (min-width: 48em /* 768px */) {
    display: flex;
  }
  &__item {
    flex: 0 0 auto;
    margin-left: 5rem;
    font-weight: 500;
  }
  &__item:first-of-type {
    margin: 0 !important;
  }
  &__button {
    font-weight: 400;
  }
}
.menu:nth-child(2) {
  margin: 0;
}

</style>
