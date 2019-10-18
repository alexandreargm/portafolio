<template>
  <nav class="nav">
    <a class="nav__logo" href="#">Logo</a>

    <ol class="nav__menu">
      <li class="nav__item">
        <a href="#">Sobre mi</a>
      </li>
      <li class="nav__item">
        <a href="#">Experiencia</a>
      </li>
      <li class="nav__item">
        <a href="#">Contacto</a>
      </li>
    </ol>

    <button class="nav__button">
      Descargar CV
    </button>
  </nav>
</template>

<style>

.nav {
  height: 100px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  background-color: var(--color-bg);
}

.nav__logo {
}

.nav__menu {
  height: 40px;
  list-style: none;
  display: flex;
  align-items: center;
}
.nav__item {
  font-size: 1rem;
}
</style>
