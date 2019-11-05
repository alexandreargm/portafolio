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

.tabs {
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
    width: auto;
    white-space: nowrap;
    overflow-x: scroll;
    margin: 0 0 2em 0;
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
    height: 4.2rem;
    min-width: 20rem;
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
  background-color: var(--color-contrast-medium);
  &__indicator {
    height: inherit;
    background-color: var(--color-primary);
    width: #{100%/$tab-count};
  }
}

</style>
