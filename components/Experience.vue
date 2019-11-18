<!-- AboutMe.vue -->
<template>
  <section id="experiencia" class="experience">
    <div class="experience__wrapper container">
      <h1 class="experience__title text--h1">
        Experiencia
      </h1>
      <tabs class="experience__tabs">
        <tab name="Mi ElectroSalomé" :selected="true" class="tabs__tab">
          <div class="job tabs__job">
            <div class="job__header">
              <h2 class="job__title text--h2">
                Desarrollo web, Diseño y Marketing <span class="text--color-primary">en Mi ElectroSalomé</span>
              </h2>
              <p class="job__when text--m">
                Octubre 2018 - agosto 2019, Torrevieja, España
              </p>
            </div>
            <ul class="task-list job__task-list">
              <li class="task-list__item">
                Diseño, desarrollo y mantenimiento de la página web de empresa y tienda e-commerce con las tecnologías WordPress y PrestaShop.
              </li>
              <li class="task-list__item">
                Diseño, creación y lanzamiento de campañas de publicidad mediante envio de correo electrónico masivo, publicidad en el lugar de venta, flyers y publicaciones en revistas mensuales de publicidad.
              </li>
              <li class="task-list__item">
                Gestión y optimización de la ficha de empresa en Google My Business.
              </li>
            </ul>
          </div>
        </tab>
        <tab name="Intersys IT" class="tabs__tab">
          <div class="job tabs__job">
            <div class="job__header">
              <h2 class="job__title text--h2">
                Desarrollo web y Diseño <span class="text--color-primary">en Intersys IT</span>
              </h2>
              <p class="job__when text--m">
                Septiembre 2018, Londres, Reino Unido
              </p>
            </div>
            <ul class="task-list job__task-list">
              <li class="task-list__item">
                Diseño, desarrollo y mantenimiento de la página web de empresa y tienda e-commerce con las tecnologías WordPress y PrestaShop.
              </li>
              <li class="task-list__item">
                Diseño, creación y lanzamiento de campañas de publicidad mediante envio de correo electrónico masivo, publicidad en el lugar de venta, flyers y publicaciones en revistas mensuales de publicidad.
              </li>
              <li class="task-list__item">
                Gestión y optimización de la ficha de empresa en Google My Business.
              </li>
            </ul>
          </div>
          <div class="job tabs__job">
            <div class="job__header">
              <h2 class="job__title text--h2">
                Desarrollo web y Diseño (prácticas) <span class="text--color-primary">en Intersys IT</span>
              </h2>
              <p class="job__when text--m">
                Mayo 2018 - julio 2018, Londres, Reino Unido
              </p>
            </div>
            <ul class="task-list job__task-list">
              <li class="task-list__item">
                Diseño, desarrollo y mantenimiento de la página web de empresa y tienda e-commerce con las tecnologías WordPress y PrestaShop.
              </li>
              <li class="task-list__item">
                Diseño, creación y lanzamiento de campañas de publicidad mediante envio de correo electrónico masivo, publicidad en el lugar de venta, flyers y publicaciones en revistas mensuales de publicidad.
              </li>
              <li class="task-list__item">
                Gestión y optimización de la ficha de empresa en Google My Business.
              </li>
            </ul>
          </div>
        </tab>
        <tab name="Clínica Virgen del Pilar" class="tabs__tab">
          <div class="job tab__job">
            <div class="job__header">
              <h2 class="job__title text--h2">
                Desarrollo web y Diseño (prácticas) <span class="text--color-primary">en Clínica Virgen del Pilar</span>
              </h2>
              <p class="job__when text--m">
                Abril 2014 - junio 2014, Torrevieja, España
              </p>
            </div>
            <ul class="task-list job__task-list">
              <li class="task-list__item">
                Diseño, desarrollo y mantenimiento de la página web de empresa y tienda e-commerce con las tecnologías WordPress y PrestaShop.
              </li>
              <li class="task-list__item">
                Diseño, creación y lanzamiento de campañas de publicidad mediante envio de correo electrónico masivo, publicidad en el lugar de venta, flyers y publicaciones en revistas mensuales de publicidad.
              </li>
              <li class="task-list__item">
                Gestión y optimización de la ficha de empresa en Google My Business.
              </li>
            </ul>
          </div>
        </tab>
      </tabs>
    </div>
  </section>
</template>

<script>
import Tabs from '~/components/Tabs.vue'
import Tab from '~/components/Tab.vue'

export default {
  components: {
    Tabs,
    Tab
  }
}
</script>

<style scoped lang="scss">
/* AboutMe.vue */
.experience {
  display: flex;
  align-items: center;
  &__title {
    margin-bottom: 1.3em;
  }
  &__tabs {
    .job {
      max-width: 45em;
      margin-bottom: 4em;
      @media screen and (min-width: $laptop) {
        @include indent(1, var(--column-count), var(--container-max-width));
      }
      &__header {
        margin-bottom: 2em;
      }
    }
    .task-list {
      padding-left: 2rem;
      &__item {
        max-width: 40em;
        margin-bottom: 1.4rem;
      }
    }
  }
}

</style>
