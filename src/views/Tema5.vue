<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Normatividad ambiental de alimentación animal aplicada
    p.mb-5(data-aos="fade-left") Según el Instituto Colombiano Agropecuario y la Resolución 061252 de 2020, se plantea como normatividad en el Título VI:

    .row.justify-content-center.mb-5
      .col-10
        .tarjeta--container.row.mb-5(data-aos="flip-up")
          .col-md.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-4
              .col-3.mb-3
                figure
                  img(src='@/assets/curso/temas/tema5/1.svg', alt='Texto que describa la imagen')
              h5 Articulo 35
              p La inspección, vigilancia y control se da para garantizar la inocuidad de los alimentos para animales, se debe aplicar vigilancia y control a los actores de la cadena y se debe enfocar el trabajo en la mitigación y prevención de riesgos sanitarios.

          .col-md.tarjeta.color-acento-contenido.p-5
            .row.justify-content-center.mb-4
              .col-3.mb-3
                figure
                  img(src='@/assets/curso/temas/tema5/2.svg', alt='Texto que describa la imagen')
              h5 Los artículos 36, 37 y 38 
              p Dan cuenta de las visitas técnicas, controles oficiales y el anexo de las Buenas Prácticas en la Manufactura de Alimentos para Animales, en las cuales se establece la prevención de las posibles contaminaciones cruzadas de micro ingredientes, el almacenamiento que se debe tener para los aditivos y medicamentos, limpieza de insumos y herramientas, reducción y mitigación de contaminación microbiológica.

      
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
