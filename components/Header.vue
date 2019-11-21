<template>
  <header class="header">
    <Navbar class="header__navbar" />
  </header>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  name: 'Header',
  components: {
    Navbar
  }
}
</script>

<style scoped lang="scss">
.header  {
  position: relative;
}
</style>
