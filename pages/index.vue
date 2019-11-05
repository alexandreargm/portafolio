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
      <Experience class="main__experience" />
    </main>
  </div>
</template>

<script>
import Experience from '~/components/Experience.vue'
import SocialMetaTags from '~/components/SocialMetaTags.vue'
import Navbar from '~/components/Navbar.vue'
import HeroLanding from '~/components/HeroLanding.vue'
import AboutMe from '~/components/AboutMe.vue'

export default {
  components: {
    SocialMetaTags,
    Navbar,
    HeroLanding,
    AboutMe,
    Experience
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
    @media screen and (min-width: $laptop ) {
      margin-top: var(--navbar-height);
    }
  }
}

.main {
  &__herolanding {
    min-height: 100vh;
    padding-top: 8rem;
    padding-bottom: 8rem;
    @media screen and (min-width: $laptop ) {
      min-height: calc(100vh - var(--navbar-height) );
      padding: 0;
      margin-bottom: 12rem;
    }
  }
  &__about-me {
    padding-top: 8rem;
    padding-bottom: 8rem;
    @media screen and (min-width: $laptop ) {
      padding: 0;
      margin-bottom: 12rem;
    }
  }
  &__experience {
    padding-top: 8rem;
    padding-bottom: 8rem;
    @media screen and (min-width: $laptop ) {
      padding: 0;
      margin-bottom: 12rem;
    }
  }
}

</style>
