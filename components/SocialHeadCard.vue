<template>
  <span v-if="false" />
</template>

<script>
export default {
  head: {
    meta: [
      { property: "og:title", content: "Página personal de Alexandre Argibay" },
      { property: "og:description", content: "Soy un desarrollador web con estancia en Torrevieja, Alicante especializado en la creación de aplicaciones web intuitivas con personalidad e integrados en back-ends modernos y eficientes." },
      { property: "og:site_name", content: "Alexandre Argibay | Desarrollador Web" },
      { property: "og:image", content: process.env.baseUrl + "/page_preview.png" },
      { property: "og:url", content: process.env.baseUrl },
      { name: "twitter:image:alt", content: "Page preview image" },
      { name: "twitter:site", content: "@AlexARGM" },
      { name: "twitter:card", content: "summary_large_image" }
    ]
  }
}
</script>
