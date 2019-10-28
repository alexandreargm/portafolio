<!-- index.vue -->
<template>
  <div class="siteframe" data-theme="default">
    <SocialMetaTags />
    <!-- header -->
    <header class="header siteframe__header">
      <Navbar class="header__navbar" />
    </header>
    <!-- main -->
    <main class="main siteframe__main">
      <HeroLanding class="main__herolanding" />
      <AboutMe class="main__about-me" />
    </main>
  </div>
</template>

<script>
import SocialMetaTags from '~/components/SocialMetaTags.vue'
import Navbar from '~/components/Navbar.vue'
import HeroLanding from '~/components/HeroLanding.vue'
import AboutMe from '~/components/AboutMe.vue'

export default {
  components: {
    SocialMetaTags,
    Navbar,
    HeroLanding,
    AboutMe
  }
}
</script>

<style scoped lang="scss">
/* index.vue */

.siteframe {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  position: relative;

  &__header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--color-bg);
    z-index: 10;
  }
  &__main {
    @media screen and (min-width: 75em ) {
      margin-top: var(--navbar-height);
    }
  }
}

.main {
  &__herolanding {
    min-height: 100vh;
    /*padding-top: 6rem;
    padding-bottom: 10rem;*/
    @media screen and (min-width: 75em ) {
      min-height: calc(100vh - var(--navbar-height) );
    }
  }
  &__about-me {
    min-height: 100vh;
    /*padding-top: 10rem;
    padding-bottom: 10rem;*/
    @media screen and (min-width: 75em ) {
      min-height: calc(100vh - var(--navbar-height) );
    }
  }
}

</style>
