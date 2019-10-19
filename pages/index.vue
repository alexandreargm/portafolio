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
  min-height: 100vh;
  position: relative;
}

.siteframe__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-bg);
  z-index: 10;
}

</style>
