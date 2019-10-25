<!-- index.vue -->
<template>
  <div class="siteframe" data-theme="default">
    <!-- Social meta tags -->
    <SocialHeadCard />
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
import SocialHeadCard from '~/components/SocialHeadCard.vue'
import Navbar from '~/components/Navbar.vue'
import HeroLanding from '~/components/HeroLanding.vue'

export default {
  components: {
    SocialHeadCard,
    Navbar,
    HeroLanding
  }
}
</script>

<style lang="scss">
/* index.vue */

.siteframe {
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
