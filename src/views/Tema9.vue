<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Producto no conforme
    p(data-aos="fade-left") Los productos no conformes en la alimentación animal son aquellos que no cumplen con los requerimientos de inocuidad para poder ser ingeridos por los animales, estos pueden:

    .row.justify-content-center.mb-3
      .col-10
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.p-5(style="background-color:#E3E7DF")
            .row.justify-content-center.mb-4
              .col-6.mb-3
                figure
                  img(src='@/assets/curso/temas/tema9/1.svg', alt='Texto que describa la imagen')
              p.text-center Tener fechas de vencimiento pasadas

          .col-md.tarjeta.p-5(style="background-color:#FFFBE5")
            .row.justify-content-center.mb-4
              .col-6.mb-3
                figure
                  img(src='@/assets/curso/temas/tema9/2.svg', alt='Texto que describa la imagen')
              p.text-center Contaminación microbiológica

          .col-md.tarjeta.p-5(style="background-color:#E3E7DF")
            .row.justify-content-center.mb-4
              .col-6.mb-3
                figure
                  img(src='@/assets/curso/temas/tema9/3.svg', alt='Texto que describa la imagen')
              p.text-center Mal etiquetado

    .row.justify-content-center 
      .col-md-10
        p.mb-5(data-aos="fade-left") Un producto no conforme puede causar graves daños en los sistemas del animal si se tiene en cuenta que estos deben seguir una dieta específica, que aporte los nutrientes requeridos para garantizar la calidad de producción y reproducción que tiene planteada la empresa.
        figure
          img(src='@/assets/curso/temas/tema9/4.jpg', alt='Texto que describa la imagen')
        p.mt-5(data-aos="fade-left") De esta manera, será el proveedor o el encargado de la alimentación quienes deben asumir la responsabilidad en caso de entregar un producto no conforme en cuanto a calidad; deberán hacer el proceso de cambio para garantizar que la ración de alimento cumpla con el fin que está diseñado en la dieta.  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
