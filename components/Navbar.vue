<!-- Navbar.vue -->
<template>
  <nav class="nav container">
    <ul class="nav__menu">
      <li class="nav__logo">
        <a class="logo" href="#">Logo</a>
      </li>
      <li class="nav__menu-item">
        <a href="#" class="text--l">Sobre mi</a>
      </li>
      <li class="nav__menu-item">
        <a href="#" class="text--l">Experiencia</a>
      </li>
      <li class="nav__menu-item">
        <a href="#" class="text--l">Contacto</a>
      </li>
      <li class="nav__menu-item">
        <a href="#" class="nav__button">
          <span class="text--l text--color-primary">
            Descargar CV
          </span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style>
/* Navbar.vue */
.nav {
  height: var(--nav-height);
  flex: 1 100%;
  width: 100%;
  max-width: var(--container-max-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: var(--color-bg);
}

.nav__menu {
  padding: 0;
  height: 4em;
  flex: 1 100%;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
}
.nav__menu:nth-child(2) {
  margin: 0;
}
.nav__menu-item {
  flex: 0 0 auto;
  margin-left: 7em;
}
.nav__menu-item:first-of-type {
  margin: 0 !important;
}
.nav__logo {
  flex: 1 100%;
  margin-right: auto;
}
.nav__button {
  appearance: button;
  text-decoration: none;
  height: 4em;
  padding: 0 1.6em;
  background: none;
  border: var(--button-border);
  border-radius: var(--button-radius);
}
</style>
