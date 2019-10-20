<!-- Navbar.vue -->
<template>
  <nav class="navbar">
    <ul class="navbar___menu container">
      <li class="navbar___logo">
        <a class="logo" href="/">
          <svg role="img" class="logo__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.7 128.8">
            <title>Logo</title>
            <!-- <path class="logo__path" d="M92.4,69.3h30.3L65.3,0,30.2,69.3,0,128.8H57L67.1,109l16.4,19.8h58.2ZM66.7,12.6l41.2,49.7H41.5ZM52.8,121.9H11.3L36.6,72.1l25.7,31.1ZM65.7,96.4,43.2,69.3H79.4Zm4.8,5.9L85.8,72.1,127,121.9H86.7Z" />-->
            <polygon class="logo__path" points="1.7 127.5 48.5 127.5 59.1 106.6 30.1 71.6 1.7 127.5" />
            <polygon class="logo__path" points="66.4 0 38 55.9 112.7 55.9 66.4 0" />
            <polygon class="logo__path" points="40.8 67 64.5 95.8 79.1 67 40.8 67" />
            <polygon class="logo__path-dark" points="89.3 71.6 72.3 105.1 90.8 127.5 135.6 127.5 89.3 71.6" />
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
        <a href="#" role="button" class="navbar___button navbar__menu-link button text--m text--color-primary">
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
  &__path-dark {
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
