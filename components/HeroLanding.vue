<!-- HeroLanding.vue -->
<template>
  <section class="herolanding">
    <div class="herolanding__wrapper container">
      <div class="herolanding__hello text--h2 text--color-primary fadein-enterup animation-delay-1200">
        Hola, me llamo
      </div>
      <h1 class="herolanding__name text--title fadein-enterup animation-delay-1300">
        Alexandre Argibay.
      </h1>
      <h2 class="herolanding__role text--title text--color-contrast-medium fadein-enterup animation-delay-1400">
        Desarrollo aplicaciones web.
      </h2>
      <p class="herolanding__description text--l fadein-enterup animation-delay-1500">
        Soy un Desarrollador Web con estancia en Torrevieja, Alicante que crea aplicaciones web modernas, atractivas, y con una experiencia de usuario excelente.
      </p>
      <a href="#contacto" role="button" class="herolanding__call-to-action button button--big text--l fadein-enterup animation-delay-1600">
        Contactar
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroLanding'
}
</script>

<style scoped lang="scss">
/* HeroLanding.vue */
$herolanding-enter-delay: 500;
$herolanding-desktop-enter-delay: 1100;
$herolanding-element-count: 5;

.herolanding {
  display: flex;
  align-items: center;
  @media screen and (min-width: 48em){
    padding-top: 0;
  }
  &__wrapper {
    padding-top: 4rem;
    @for $i from 0 through $herolanding-element-count {
      & :nth-child(#{$i}) {
        @include animation((fadeIn,enterUp), 300ms, #{$i * 100 + $herolanding-enter-delay}ms);
      }
    }
    & :last-child {
      @include animation((fadeIn,enterUp), 400ms, #{ 200 + $herolanding-element-count * 100 + $herolanding-enter-delay}ms);
    }
    @media screen and (min-width: $tablet-landscape){
      @for $i from 0 through $herolanding-element-count {
        & :nth-child(#{$i}) {
          @include animation((fadeIn,enterUp), 300ms, #{$i * 100 + $herolanding-desktop-enter-delay}ms);
        }
      }
      & :last-child {
        @include animation((fadeIn,enterUp), 400ms, #{ 200 + $herolanding-element-count * 100 + $herolanding-desktop-enter-delay}ms);
      }
    }
  }
  &__hello {
    margin-bottom: 1.4rem;
  }
  &__name {
    margin-bottom: 0;
  }
  &__role {
    margin-bottom: 0;
  }
  &__role:after {
    content: " ";
    display: block;
    width: 0.8em;
    border-bottom: 0.14em solid var(--color-primary);
    margin-top: 0.6em;
    margin-bottom: 0.4em;
  }
  &__description {
    max-width: 26em;
  }
  &__call-to-action {
    margin-top: 8rem;
    color: var(--color-primary);
    &:hover, &:focus, &:active {
      color: var(--color-contrast-high);
    }
  }
}

</style>
