<!-- Navbar.vue -->
<template>
  <div
    class="navbar__wrapper"
    :class="{ 'navbar__wrapper--hidden': !showNavbar, 'navbar__wrapper--reduced': reducedNavbar }"
  >
    <nav class="navbar container">
      <Logo class="logo" />
      <div
        class="menu__wrapper"
        :class="{ 'menu__wrapper--hidden': !showMobileMenu }"
        @click="toggleMobileMenu"
      >
        <ul
          class="menu"
          :class="{ 'menu--hidden': !showMobileMenu }"
        >
          <li class="menu__item">
            <a href="#sobre-mi" class="menu__link text--m">Sobre mi</a>
          </li>
          <li class="menu__item">
            <a href="#experiencia" class="menu__link text--m">Experiencia</a>
          </li>
          <li class="menu__item">
            <a href="#contacto" class="menu__link text--m">Contacto</a>
          </li>
          <li class="menu__item">
            <a href="/cv.pdf" download="CV Alexandre Argibay.pdf" class="menu__download button text--m text--color-primary">
              Descargar CV
            </a>
          </li>
        </ul>
      </div>
      <div class="menu-toggle">
        <div
          class="menu-toggle__button"
          :class="{ 'menu-toggle--hidden': !showMobileMenu}"
          @click="toggleMobileMenu"
        >
          <svg class="menu-toggle__svg" viewBox="0 0 24 24">
            <path class="menu-toggle__path" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        </div>
        <div
          class="menu-toggle__button"
          :class="{ 'menu-toggle--hidden': showMobileMenu}"
          @click="toggleMobileMenu"
        >
          <svg class="menu-toggle__svg" viewBox="0 0 24 24">
            <path class="menu-toggle__path" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  name: 'Navbar',
  components: {
    Logo
  },
  data () {
    return {
      showNavbar: true,
      reducedNavbar: false,
      lastScrollPosition: 0,
      showMobileMenu: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      // Get the current scroll position
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return
      }
      this.reducedNavbar = currentScrollPosition > 0
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 80) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    },
    toggleMobileMenu () {
      this.showMobileMenu = !this.showMobileMenu
    }
  }
}
</script>

<style scoped lang="scss">
/* Navbar.vue */
$button-size: 4rem;

.navbar {
  display: flex;
  flex: 1 100%;
  align-items: center;
  &__wrapper {
    width: 100%;
    height: var(--navbar-height);
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: var(--color-bg);
    transition: all 0.3s ease;
    &--reduced {
      height: var(--navbar-height-reduced);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
    &--hidden {
      transform: translate3d(0, -100%, 0);
      box-shadow: none;
    }
  }
  .logo {
    flex: 0 0 auto;
    width: auto;
    margin-right: auto;
  }
  .menu {
    z-index: 1030;
    height: 100vh;
    display: inline-block;
    padding: var(--navbar-height) 6rem;
    background-color: var(--color-bg);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    margin: 0;
    list-style: none;
    align-items: center;
    &--hidden {
      display: none;
    }
    @media screen and (min-width: $tablet-landscape) {
      display: flex;
      padding: 0;
      height: 4rem;
      box-shadow: none;
    }
    &__wrapper {
      z-index: 1020;
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      justify-content: flex-end;
      height: 100vh;
      width: 100vw;
      &--hidden {
        display: none;
      }
      @media screen and (min-width: $tablet-landscape) {
        display: flex;
        position: unset;
        justify-content: flex-start;
        height: auto;
        width: auto;
      }
    }
    &__item {
      flex: 0 0 auto;
      margin-bottom: 3rem;
      font-weight: 500;
      @media screen and (min-width: $tablet-landscape) {
        margin-bottom: 0;
        margin-right: 5rem;
      }
      &:last-of-type {
        margin: 0 !important;
      }
    }
    &__link {
      &:hover, &:focus, &:active {
        color: var(--color-primary);
      }
    }
  }
  .menu-toggle {
    z-index: 1040;
    position: relative;
    height: $button-size;
    width: $button-size;
    padding: 0;
    background: none;
    outline: none;
    fill: var(--color-contrast-medium);
    @media screen and (min-width: $tablet-landscape) {
      display: none;
    }
    &:active {
      fill: var(--color-primary);
    }
    &__button {
      position: absolute;
      top: 0;
      left: 0;
    }
    &__svg {
      height: $button-size;
      width: $button-size;
    }
    &--hidden {
      display: none;
    }
  }
}

</style>
