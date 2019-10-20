<!-- Navbar.vue -->
<template>
  <nav class="navbar">
    <ul class="navbar___menu container">
      <li class="navbar___logo">
        <a class="logo" href="/">
          <svg role="img" class="logo__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.7 128.8">
            <title>Logo</title>
            <path class="logo__path" d="M93.8,70H123L65,0,35.9,57.5,29.5,70,.4,127.5H57.9l9.3-18.2,15,18.2h59.2Zm-27-53.8L104,61.1H44.1ZM77,70,65.4,93.1,46.3,70ZM52.4,118.6H14.9L37.7,73.7l23.2,28.1Zm19.2-18L85.2,73.7l37.2,44.9h-36Z" />
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
