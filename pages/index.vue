<!-- index.vue -->
<template>
  <div class="siteframe" data-theme="default">
    <SocialMetaTags />
    <!-- header -->
    <header
      class="header siteframe__header"
      :class="{ 'header--hidden': !showHeader, 'header--reduced': reducedHeader }"
    >
      <Navbar class="header__navbar" />
    </header>
    <!-- main -->
    <main class="main siteframe__main">
      <HeroLanding class="main__herolanding" />
      <AboutMe class="main__about-me" />
      <Experience class="main__experience" />
      <Contact class="main__contact" />
    </main>
    <!-- footer -->
    <Footer class="siteframe__footer" />
  </div>
</template>

<script>
import SocialMetaTags from '~/components/SocialMetaTags.vue'
import Navbar from '~/components/Navbar.vue'
import HeroLanding from '~/components/HeroLanding.vue'
import AboutMe from '~/components/AboutMe.vue'
import Experience from '~/components/Experience.vue'
import Contact from '~/components/Contact.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    SocialMetaTags,
    Navbar,
    HeroLanding,
    AboutMe,
    Experience,
    Contact,
    Footer
  },
  data () {
    return {
      showHeader: true,
      reducedHeader: false,
      lastScrollPosition: 0
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
      // Here we determine whether we need to show or hide the navbar
      this.showHeader = currentScrollPosition < this.lastScrollPosition
      // Here we determine whether the navbar should be reduced
      this.reducedHeader = currentScrollPosition > 0
      // Set the current scroll position as the last scroll position
      this.lastScrollPosition = currentScrollPosition
    }
  }
}
</script>

<style scoped lang="scss">
/* index.vue */

$section-y-padding: 8rem;
$section-bottom-margin: 12rem;

.siteframe {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  position: relative;
  &__main {
    @media screen and (min-width: $laptop ) {
      margin-top: var(--navbar-height);
    }
  }
}

.header  {
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
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  &--hidden {
    transform: translate3d(0, -100%, 0);
    box-shadow: none;
  }
}

.main {
  &__herolanding {
    min-height: 100vh;
    padding-top: $section-y-padding;
    padding-bottom: $section-y-padding;
    @media screen and (min-width: $mobile-landscape) {
        @include indent(1, var(--column-count), $mobile-landscape-rem, var(--container-padding));
    }
    @media screen and (min-width: $tablet-portrait) {
        @include indent(1, var(--column-count), $tablet-portrait-rem, var(--container-padding));
    }
    @media screen and (min-width: $laptop ) {
      @include indent(2, var(--column-count), $laptop-rem, var(--container-padding));
      min-height: calc(100vh - var(--navbar-height) );
      margin-bottom: $section-bottom-margin;
    }
  }
  &__about-me {
    padding-top: $section-y-padding;
    padding-bottom: $section-y-padding;
    @media screen and (min-width: $mobile-landscape) {
        @include indent(1, var(--column-count), $mobile-landscape-rem, var(--container-padding));
    }
    @media screen and (min-width: $tablet-portrait) {
        @include indent(2, var(--column-count), $tablet-portrait-rem, var(--container-padding));
    }
    @media screen and (min-width: $laptop ) {
      @include indent(2, var(--column-count), $laptop-rem, var(--container-padding));
      margin-bottom: $section-bottom-margin;
    }
  }
  &__experience {
    padding-top: $section-y-padding;
    padding-bottom: $section-y-padding;
    @media screen and (min-width: $mobile-landscape) {
        @include indent(1, var(--column-count), $mobile-landscape-rem, var(--container-padding));
    }
    @media screen and (min-width: $tablet-portrait) {
        @include indent(1, var(--column-count), $tablet-portrait-rem, var(--container-padding));
    }
    @media screen and (min-width: $laptop ) {
      @include indent(2, var(--column-count), $laptop-rem, var(--container-padding));
      margin-bottom: $section-bottom-margin;
    }
  }
  &__contact {
    padding-top: $section-y-padding;
    padding-bottom: $section-y-padding;
    @media screen and (min-width: $mobile-landscape) {
        @include indent(2, var(--column-count), $mobile-landscape-rem, var(--container-padding));
    }
    @media screen and (min-width: $tablet-portrait) {
        @include indent(3, var(--column-count), $tablet-portrait-rem, var(--container-padding));
    }
    @media screen and (min-width: $laptop ) {
      @include indent(3, var(--column-count), $laptop-rem, var(--container-padding));
      margin-bottom: $section-bottom-margin;
    }
  }
}

.footer {
  @media screen and (min-width: $mobile-landscape) {
      @include indent(2, var(--column-count), $mobile-landscape-rem, var(--container-padding));
  }
  @media screen and (min-width: $tablet-portrait) {
      @include indent(3, var(--column-count), $tablet-portrait-rem, var(--container-padding));
  }
  @media screen and (min-width: $laptop ) {
    @include indent(3, var(--column-count), $laptop-rem, var(--container-padding));
  }
}

</style>
