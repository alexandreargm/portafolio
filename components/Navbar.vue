<!-- Navbar.vue -->
<template>
  <nav class="navbar">
    <ul class="navbar___menu container">
      <li class="navbar___logo">
        <a class="logo" href="#">Logo</a>
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
        <a href="#" role="button" class="navbar___button navbar__menu-link button">
          <span class="navbar__menu-link text--m text--color-primary">
            Descargar CV
          </span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style>
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
.navbar___logo {
  flex: 1 100%;
  margin-right: auto;
}
.navbar__menu-link {
}
.navbar___button {
}
</style>
