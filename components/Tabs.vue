<!-- Tabs.vue -->
<template>
  <div class="tabs">
    <div class="menu__wrapper">
      <ul class="menu tabs__menu">
        <li v-for="tab in tabs" :key="tab" :class="{ 'is-active': tab.isActive }" class="menu__item text--m">
          <a :href="tab.href" class="menu__link" @click="selectTab(tab)">{{ tab.name }}</a>
        </li>
      </ul>
      <div class="slider menu__slider">
        <div class="slider__indicator" />
      </div>
    </div>
    <div class="tabs__content text--l">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: []
    }
  },
  created () {
    this.tabs = this.$children
  },
  methods: {
    selectTab (selectedTab) {
      this.tabs.forEach((tab) => { tab.isActive = (tab.name === selectedTab.name) })
    }
  }
}
</script>

<style scoped lang="scss">
/* Tabs.vue */
$tab-count: 3;
$tab-height: 4.2rem;
$tab-width: 20rem;
$tab-selector: ".menu__item";
$indicator-selector: ".slider__indicator";

@mixin tabs($tab-selector, $indicator-selector) {
  @for $i from 1 through $tab-count {
    @at-root #{$tab-selector}:nth-of-type(#{$i}).is-active {
      #{$indicator-selector} {
        transform: translateX(#{ 100% * ($i - 1) });
        content: $i;
      }
    }
  }
}

.tabs {
  @media screen and (min-width: $laptop) {
    display: flex;
  }
}

.menu {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;
  margin: 0;
  @media screen and (min-width: $laptop) {
    flex-direction: column;
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
    margin: 0 0 2em 0;
    @media screen and (min-width: $laptop) {
      overflow-x: visible;
      flex-direction: row-reverse;
    }
  }
  &__item {
    &.is-active {
      .menu__link {
        color: var(--color-primary);
      }
    }
  }
  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    height: $tab-height;
    width: $tab-width;
    padding: 0 1.5rem;
    color: var(--color-contrast-medium);
    @media screen and (min-width: $laptop) {
      justify-content: left;
    }
    &:hover, &:focus, &:active {
      color: var(--color-primary);
    }
  }
}

.slider {
  height: 0.2rem;
  width: #{$tab-width * $tab-count};
  background-color: var(--color-contrast-medium);
  @media screen and (min-width: $laptop) {
    height: #{$tab-height * $tab-count};
    width: 0.2rem;
  }
  &__indicator {
    height: inherit;
    background-color: var(--color-primary);
    width: #{100%/$tab-count};
    @media screen and (min-width: $laptop) {
      height: $tab-height;
      width: 0.2rem;
    }
  }
}

.menu__item:nth-of-type(1).is-active {
  background: red;
  .slider__indicator {
    transform: translateX(#{ 100% * (1 - 1) });
  }
}
.menu__item:nth-of-type(2).is-active {
  background: red;
  .slider__indicator {
    transform: translateX(#{ 100% * (2 - 1) });
  }
}
.menu__item:nth-of-type(3).is-active {
  background: red;
  .slider__indicator {
    transform: translateX(#{ 100% * (3 - 1) });
  }
}

//@include tabs ($tab-selector, $indicator-selector);

</style>
