<!-- Navbar.vue -->
<template>
  <div
    :class="{ 'navbar__wrapper--hidden': !showNavbar, 'navbar__wrapper--reduced': reducedNavbar }"
    class="navbar__wrapper"
  >
    <nav class="navbar container" data-theme="default">
      <Logo class="logo" />
      <div
        :class="{ 'menu__wrapper--hidden': !showMobileMenu }"
        class="menu__wrapper"
      >
        <div
          :class="{ 'menu__overlay--hidden': !showMobileMenu }"
          class="menu__overlay"
          @click="toggleMobileMenu"
        />
        <ul
          v-scroll-lock="showMobileMenu"
          :class="{ 'menu--hidden': !showMobileMenu }"
          class="menu"
          data-theme="default"
        >
          <li class="menu__item">
            <a href="#sobre-mi" class="menu__link text--m" @click="closeMobileMenu(), hideNavbar()">Sobre mi</a>
          </li>
          <li class="menu__item">
            <a href="#experiencia" class="menu__link text--m" @click="closeMobileMenu(), hideNavbar()">Experiencia</a>
          </li>
          <li class="menu__item">
            <a href="#contacto" class="menu__link text--m" @click="closeMobileMenu(), hideNavbar()">Contacto</a>
          </li>
          <li class="menu__item">
            <a href="/cv.pdf" download="CV Alexandre Argibay.pdf" class="menu__link button text--m">
              Descargar CV
            </a>
          </li>
        </ul>
      </div>
      <div class="menu-toggle">
        <transition name="menu-toggle">
          <button
            v-if="showMobileMenu"
            key="open"
            class="menu-toggle__button"
            aria-label="open menu"
            @click="toggleMobileMenu"
          >
            <svg class="menu-toggle__svg" viewBox="0 0 24 24">
              <path class="menu-toggle__path" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          </button>
          <button
            v-else
            key="close"
            class="menu-toggle__button"
            aria-label="close menu"
            @click="toggleMobileMenu"
          >
            <svg class="menu-toggle__svg" viewBox="0 0 24 24">
              <path class="menu-toggle__path" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </button>
        </transition>
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
    },
    closeMobileMenu () {
      this.showMobileMenu = false
    },
    hideNavbar () {
      this.showNavbar = false
      this.lastScrollPosition = 0 // Prevent navbar from showing
    }
  }
}
</script>

<style scoped lang="scss">
/* Navbar.vue */
$button-size: 5rem;
$mobile-transition-speed: 0.2s;
$menu-item-count: 4;
$menu-enter-delay: 1500;

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
    @include animation(fadeIn);
    @media screen {
      @include animation(fadeIn, 1000ms);
    }
  }
  .menu {
    z-index: 1030;
    height: 100vh;
    display: inline-block;
    padding: var(--navbar-height) 8rem;
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    margin: 0;
    margin-left: auto;
    list-style: none;
    align-items: center;
    transition: transform $mobile-transition-speed ease-in-out;
    &--hidden {
      transform: translate3d(100%, 0, 0);
    }
    @media screen and (min-width: $tablet-landscape) {
      display: flex;
      padding: 0;
      height: 4rem;
      box-shadow: none;
      transform: translate3d(0, 0, 0);
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
      background-color: rgba(0, 0, 0, 0.2);
      &--hidden {
        transform: translate3d(100%, 0, 0);
      }
      @media screen and (min-width: $tablet-landscape) {
        display: flex;
        position: unset;
        justify-content: flex-start;
        height: auto;
        background: none;
        transform: translate3d(0, 0, 0);
      }
    }
    &__overlay {
      height: 100%;
      width: 100%;
      &--hidden {
        display: none;
      }
    }
    &__item {
      flex: 0 0 auto;
      margin-bottom: 4rem;
      font-weight: 500;
      white-space: nowrap;
      @media screen and (min-width: $tablet-landscape) {
        margin-bottom: 0;
        margin-left: 5rem;
      }
    }
    &__link {
      color: var(--color-primary);
      &:hover, &:focus, &:active {
        color: var(--color-contrast-high);
      }
    }
    .menu__item {
      @media screen and (min-width: $tablet-landscape) {
        @for $i from 0 through $menu-item-count {
          &:nth-child(#{$i}) {
            @include animation((fadeIn, enterDown), 300ms, #{$i * 100}ms);
          }
        }
        &:last-child {
          @include animation((fadeIn,enterDown), 400ms, #{ 100 + $menu-item-count * 100}ms);
        }
      }
    }
  }
  .menu-toggle {
    z-index: 1040;
    position: relative;
    padding: 0;
    height: $button-size;
    width: $button-size;
    display: flex;
    align-items: center;
    justify-content: center;
    @include animation(fadeIn, 600ms);
    @media screen and (min-width: $tablet-landscape) {
      display: none;
    }
    &-enter-active {
      transition: all 0.15s ease-in $mobile-transition-speed;
    }
    &-leave-active {
      transition: all 0s linear $mobile-transition-speed;
    }
    &-enter, &-leave-to {
      opacity: 0;
    }
    &__button {
      fill: var(--color-contrast-medium);
      background: none;
      outline: none;
      position: absolute;
      top: 0;
      left: 0;
      padding: 0;
      height: $button-size;
      width: $button-size;
      display: flex;
      justify-content: center;
      align-items: center;
      &:active {
        fill: var(--color-primary);
      }
    }
    &__svg {
      height: 4rem;
      width: 4rem;
    }
    &--hidden {
      display: none;
    }
  }
}

</style>
