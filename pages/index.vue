<!-- index.vue -->
<template>
  <div class="siteframe" data-theme="default">
    <SocialMetaTags />
    <!-- header -->
    <Header class="siteframe__header" />
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
import Header from '~/components/Header.vue'
import HeroLanding from '~/components/HeroLanding.vue'
import AboutMe from '~/components/AboutMe.vue'
import Experience from '~/components/Experience.vue'
import Contact from '~/components/Contact.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    SocialMetaTags,
    Header,
    HeroLanding,
    AboutMe,
    Experience,
    Contact,
    Footer
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

.main {
  &__herolanding {
    height: 100vh;
    max-height: 102.4rem;
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
      @include indent(1, var(--column-count), $mobile-landscape-rem, var(--container-padding));
  }
  @media screen and (min-width: $tablet-portrait) {
      @include indent(1, var(--column-count), $tablet-portrait-rem, var(--container-padding));
  }
  @media screen and (min-width: $laptop ) {
    @include indent(2, var(--column-count), $laptop-rem, var(--container-padding));
  }
}

</style>
