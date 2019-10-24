<template>
  <span v-if="false" />
</template>

<script>
export default {
  head: {
    meta: [
      { name: "og:title", content: "Página personal de Alexandre Argibay" },
      { name: "og:description", content: "Soy un desarrollador web con estancia en Torrevieja, Alicante especializado en la creación de aplicaciones web intuitivas con personalidad e integrados en back-ends modernos y eficientes." },
      { name: "og:site_name", content: "Alexandre Argibay | Desarrollador Web" },
      { name: "og:image", content: process.env.baseUrl + "/page_preview.png" },
      { name: "og:url", content: process.env.baseUrl },
      { name: "twitter:image:alt", content: "Page preview image" },
      { name: "twitter:site", content: "@AlexARGM" },
      { name: "twitter:card", content: "summary_large_image" }
    ]
  }
}
</script>
