<!-- index.vue -->
<template>
  <div class="siteframe" data-theme="default">
    <!-- Header and navigation -->
    <header class="header siteframe__header">
      <navbar class="header__navbar" />
    </header>
    <!-- main -->
    <main class="main siteframe__main">
      <HeroLanding class="main__herolanding" />
    </main>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import HeroLanding from '~/components/HeroLanding.vue'

const vh100 = document.documentElement.clientHeight
document.documentElement.style.setProperty('--vh100', `${vh100}px`)

export default {
  components: {
    Navbar,
    HeroLanding
  }
}
</script>

<style lang="scss">
/* index.vue */

.siteframe {
  //align-items: stretch;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  position: relative;
}
.siteframe__header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--color-bg);
  z-index: 10;
}
.siteframe__main {
  @media screen and (min-width: 75em ) {
    margin-top: var(--navbar-height);
  }
}
.main__herolanding {
  min-height: 100vh;
  @media screen and (min-width: 75em ) {
    min-height: calc(100vh - var(--navbar-height) );
  }
}
</style>
