<template>
  <a class="logo" href="/" aria-label="Link to landing page">
    <svg role="img" class="logo__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.4 85.1">
      <polygon class="logo__path" points="17.8 49.4 39.5 75.4 34.7 85 0 85 17.8 49.4" />
      <polygon class="logo__path" points="72.1 35.5 24.8 35.5 42.5 0 72.1 35.5" />
      <polygon class="logo__path" points="55.9 42.5 43 68.5 42.9 68.6 35.8 59.9 21.3 42.5 55.9 42.5" />
      <polygon class="logo__path logo__path--alt-color" points="90.1 85 56.7 85 47.8 74.4 53.3 63.4 54.3 61.5 58.5 53.2 60.4 49.4 60.4 49.4 90.1 85" />
    </svg>
  </a>
</template>

<style scoped lang="scss">
.logo {
  &__svg {
    height: 4rem;
    width: auto;
  }
  &__path {
    fill: var(--color-primary);
  }
  &__path--alt-color {
    fill: var(--color-contrast-medium);
  }
}
</style>
