<!-- Navbar.vue -->
<template>
  <nav class="navbar">
    <ul class="navbar___menu container">
      <li class="navbar___logo">
        <a class="logo" href="/">
          <svg role="img" class="logo__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.4 85.1">
            <polygon class="logo__path" points="17.8 49.4 39.5 75.4 34.7 85 0 85 17.8 49.4" />
            <polygon class="logo__path" points="72.1 35.5 24.8 35.5 42.5 0 72.1 35.5" />
            <polygon class="logo__path" points="55.9 42.5 43 68.5 42.9 68.6 35.8 59.9 21.3 42.5 55.9 42.5" />
            <polygon class="logo__path logo__path--alt-color" points="90.1 85 56.7 85 47.8 74.4 53.3 63.4 54.3 61.5 58.5 53.2 60.4 49.4 60.4 49.4 90.1 85" />
          </svg>
        </a>
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
        <a href="/" role="button" class="navbar___button navbar__menu-link button text--m text--color-primary">
          Descargar CV
        </a>
      </li>
    </ul>
  </nav>
</template>

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
.logo {
  &__svg {
    height: 5rem;
    width: auto;
  }
  &__path {
    fill: var(--color-primary);
  }
  &__path--alt-color {
    fill: var(--color-contrast-low);
  }
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
