<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Proceso de elaboración de raciones

    p.mb-5(data-aos="fade-left") Cuando se inician labores en el proceso de nutrición, normalmente se confunden los conceptos de alimentación y formulación, la persona encargada de la #[b formulación puede formular una ración según los requerimientos que se den, sin tener conocimientos de nutrición]. El nutriólogo siempre sabrá hacer una ración a partir de su conocimiento, sin que se le entregue información previa, él puede alimentar de forma adecuada a los animales según sus necesidades nutricionales y los insumos disponibles.

    .row.justify-content-center 
      .col-md-10
        .cajon.p-4.color-secundario
          .row.jusitfy-content-center
            .col-md-4.mb-3
              figure
                img(src='@/assets/curso/temas/tema2/1.svg', alt='Texto que describa la imagen')
            .col-md-8
              p Para formular las raciones, existen diferentes métodos, unos simples y otros mucho más complejos y tecnificados; el nutriólogo asignado a la empresa pecuaria debe tener conocimiento de al menos uno de ellos para poder generar soluciones de manera informal, con papel y lápiz, pero que pueda también manejar la tecnología disponible en cualquier momento.
              p A continuación, se hará una mención de los métodos manuales utilizados para la elaboración de raciones.

    h4.titulo-cuarto.mt-5 Cuadro de #[i Pearson] simple

    p(data-aos="fade-left") Para comprender la manera de utilizar este método de preparación de la ración, se explicará a través de un ejemplo aplicado:

    
    .row.justify-content-center 
      .col-md-9
        LineaTiempoD.color.mb-5
          .row.justify-content-center(numero="1" titulo="Paso")
            .col-md-12.mb-4.mb-md-0
              p.text-small.mb-4 Se debe formular una ración que propone el 17 % de proteína cruda, para lo que se cuenta con 2 ingredientes: sorgo, que cuenta con 10 %, y pasta de soya, con un 40 %; para saber cuál es la cantidad necesaria de cada uno de los ingredientes en la ración solicitada con él % de proteína definido, se debe seguir este proceso: primero, se traza en el cuadro ubicado en el centro el valor que se busca y en los ángulos de la izquierda, los datos de cada insumo que fueron suministrados.
            .row.justify-content-center.align-items-center.mb-5
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema2/2.svg', alt='Texto que describa la imagen')
              .col-md-4.mb-4.mb-md-0
                p.text-small Se trazan dos flechas, una desde cada uno de los ingredientes hacia el valor buscado, con el fin de poder hacer una resta en el sentido que indiquen las flechas. Los resultados deben ponerse con signo positivo.
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema2/3.svg', alt='Texto que describa la imagen')

          .row.justify-content-center(numero="2" titulo="Paso")
            .col-md-12.mb-4.mb-md-0
              p.text-small.mb-4 Se deben sumar los dos resultados producto de la resta, 23 + 7 = 30. Posteriormente, se toma cada uno de estos 3 datos y se expresa en porcentaje mediante una regla de tres.
            .row.justify-content-center.align-items-center.mb-5
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema2/2.svg', alt='Texto que describa la imagen')
              .col-md-4.mb-4.mb-md-0
                p.text-small Se trazan dos flechas, una desde cada uno de los ingredientes hacia el valor buscado, con el fin de poder hacer una resta en el sentido que indiquen las flechas. Los resultados deben ponerse con signo positivo.
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema2/3.svg', alt='Texto que describa la imagen')

      .col-md-3.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/tema2/4.svg', alt='Texto que describa la imagen')
        
          

    h4.titulo-cuarto.mt-5 Cuadro compuesto
    h4.titulo-cuarto.mt-5 Método de sustitución
    h4.titulo-cuarto.mt-5 Métodos con aplicaciones de tecnología

</template>

<script>
export default {
  name: 'Tema2',
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
