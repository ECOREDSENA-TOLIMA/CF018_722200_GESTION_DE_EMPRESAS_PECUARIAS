<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 Se recapitula el componente formativo: #[b Preparación de raciones para animales], que consiste en el conjunto de alimentos que deben suministrarse a los animales en un periodo de 24 horas; dicha ración depende de la especie animal a la que se va a alimentar, vacuno, cerdos, aves; igualmente, existen diferentes métodos de elaboración, estos dependen de los requerimientos específicos que se deseen cubrir por cada especie. Estos métodos son: cuadro de Pearson simple, cuadro compuesto, método de sustitución, métodos con aplicaciones tecnológicas. De la misma forma, se resalta la importancia del empaque, el rotulado y el almacenamiento de alimentos para animales, los cuales deben cumplir con los requerimientos establecidos por el ICA, con el objetivo de conservar los alimentos de manera inocua, además, se deben tener en cuenta los factores que pueden afectarlos, como factores intrínsecos, entre estos se encuentran la composición del agua, acidez y pH, y potencial de óxido en reducción. De la misma forma se tienen en cuenta factores extrínsecos como temperatura, humedad relativa y composición de la atmósfera.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
