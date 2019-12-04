<!-- Tabs.vue -->
<template>
  <div class="tabs">
    <div class="menu__wrapper">
      <ul class="menu tabs__menu">
        <li v-for="(tab, idx) in tabs" :key="idx" :class="{ 'is-active': tab.isActive }" class="menu__item text--m">
          <a :href="tab.href" class="menu__link" @click="selectTab(tab)">{{ tab.name }}</a>
        </li>
        <li class="menu__highlight" aria-hidden="true" role="presentation" />
      </ul>
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
$container-padding: var(--container-padding);
$tab-selector: ".menu__item";
$highlight-height: 0.2rem;
$highlight-selector: ".menu__highlight";

// Move a highlight element between tabs
@mixin tabs-highlight($tab-selector, $highlight-selector) {
@for $i from 1 through $tab-count {
    #{$tab-selector}:nth-of-type(#{$i}).is-active ~ #{$highlight-selector} {
      left: #{ $tab-width * ($i - 1) };
      @media screen and (min-width: $laptop) {
        left: 0;
        top: #{ $tab-height * ($i - 1) };
      }
    }
  }
}

.tabs {
  @media screen and (min-width: $laptop) {
    display: flex;
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
      position: relative;
      display: flex;
      flex-direction: column;
      overflow-x: auto;
      margin: 0 0 2em 0;
      @media screen and (min-width: $laptop) {
        overflow-x: visible;
        flex-direction: row-reverse;
      }
    }
    &__item {
      border-bottom: calc( #{$highlight-height} / 2 ) solid var(--color-contrast-medium);
      @media screen and (min-width: $laptop) {
        border-bottom: none;
        border-left: calc( #{$highlight-height} / 2 ) solid var(--color-contrast-medium);
      }
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
      margin-bottom: $highlight-height;
      height: $tab-height;
      width: $tab-width;
      padding: 0 1.5rem;
      color: var(--color-contrast-medium);
      @media screen and (min-width: $laptop) {
        justify-content: left;
        margin-bottom: 0;
        margin-left: $highlight-height;
      }
      &:hover, &:focus, &:active {
        color: var(--color-primary);
      }
    }
    &__highlight {
      position: absolute;
      left: 0;
      bottom: 0;
      height: $highlight-height;
      width: $tab-width;
      background-color: var(--color-primary);
      transition: left 0.25s;
      @media screen and (min-width: $laptop) {
        height: $tab-height;
        width: $highlight-height;
        top: 0;
        transition: top 0.25s;
      }
    }
  }
}

@include tabs-highlight($tab-selector, $highlight-selector);

</style>
