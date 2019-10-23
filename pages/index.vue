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
  align-items: stretch;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}
.siteframe__header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-bg);
  z-index: 10;
}
.siteframe__main {
  margin-top: var(--navbar-height);
}
.main__herolanding {
  min-height: calc(100vh - var(--navbar-height));
}
</style>
