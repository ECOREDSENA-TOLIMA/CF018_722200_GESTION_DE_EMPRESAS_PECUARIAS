<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Formulación de raciones para animales
    p.mb-5(data-aos="fade-left") La ración animal es el conjunto de alimentos que deben ser suministrados a los animales en un periodo de #[b 24 horas], esta puede ser dividida en varias porciones durante este tiempo o ser una sola. Las raciones varían según el tipo de animal al que se le suministra, y su #[b tamaño total está determinado] para un alimento, de allí se deben tomar las porciones que sean definidas según la clase de animal. En este orden de ideas, para definir la porción, se toma una parte de la ración.

    .row.justify-content-center 
      .col-md-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-3
            p.mb-0 Para que la producción animal pueda tener éxito, es importante tener en cuenta el factor fundamental: #[b la alimentación], por ello se debe hacer énfasis en su #[b eficiencia y costo], ya que generar el cálculo de manera errada o no identificar las necesidades exactas del animal genera efectos negativos con el tiempo y limita la #[b genética y productividad de los animales definidos para la producción]. 
              br
              br

    .row.justify-content-center 
      .col-md-10
        p(data-aos="fade-left") Dicho lo anterior, es importante comprender que la formulación de raciones requiere de ajustar las cantidades de cada uno de los ingredientes que, según los requerimientos de cada animal, conformarán la porción, con el fin de que los nutrientes que la conformen por unidad de peso sean los necesarios. Por ello, se debe tener en cuenta el cálculo de raciones balanceadas, ya que gracias a ellas se pueden generar impactos positivos como los siguientes:

    .titulo-sexto.color-acento-contenido.offset-2
      h5 Figura 1
      span #[em Impactos positivos con el cálculo de raciones balanceadas]

    .row.justify-content-center 
      .col-md-10
        figure.mb-5.desktop(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema1/2.svg', alt='En la figura se representa los impactos con la aplicación del cálculo de raciones balanceadas, como: lograr producciones acordes con el potencial genético, y por último, si los animales están bien alimentados, se obtienen todo el provecho de las mejoras genéticas que se realicen.')

    .row.justify-content-center 
      .col-md-10
        figure.mb-5.movil(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema1/3.svg', alt='En la figura se representa los impactos con la aplicación del cálculo de raciones balanceadas, como: lograr producciones acordes con el potencial genético, y por último, si los animales están bien alimentados, se obtienen todo el provecho de las mejoras genéticas que se realicen.')

    .row.justify-content-center.mt-3 
      .col-md-10
        p(data-aos="fade-left") Finalmente, se debe tener en cuenta que, para iniciar un programa de formulación de raciones, se debe contar con una información básica, como: #[b necesidades nutricionales, alimentos, tipos de ración y consumo esperado].

    h4.titulo-cuarto.mt-5 Clases

    p.mb-5(data-aos="fade-left") La ración animal varía dependiendo del animal que se desee alimentar y los propósitos que se tiene con cada uno de ellos. A continuación, se profundizará al respecto:

    .row.justify-content-center 
      AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
        .row.justify-content-center.align-items-center(titulo="Formulación de raciones vacuno")
          .col-md-6.mb-4.mb-md-0
            p La alimentación del ganado vacuno es muy importante para el sistema de #[b producción de carne], se debe ser cuidadoso y aplicar de manera correcta los principios de #[b fisiología, bioquímica y nutrición], para definir cuáles son los insumos a utilizar. 
            p Para alimentar esta clase de animales, se requiere conocer la #[b fisiología digestiva] y la manera como se #[b regula su funcionamiento], esto con el fin de definir insumos y cantidades necesarias para garantizar los nutrientes que a su vez tienen impacto en la calidad de la carne, los más relevantes son: #[b agua, energía, proteínas, vitaminas y minerales].
          .col-md-6.mb-5
            .titulo-sexto.color-acento-contenido
              h5 Figura 2
              span #[em Sistema digestivo]
            figure
              img(src='@/assets/curso/temas/tema1/4.png', alt='En la figura se representa la fisiología digestiva y la manera como se regula su funcionamiento.')
          .row.justify-content-center
            .col-md-6 
              p Los insumos que se utilizan con mayor frecuencia son los siguientes:
          .row.justify-content-center
            .tarjeta--container.row.mb-5
              .col-md.tarjeta.color-primario.p-5
                .row.justify-content-center.mb-4
                  .col-3
                    figure
                      img(src='@/assets/curso/temas/tema1/5.svg', alt='Texto que describa la imagen')
                  
                h2.text-center Insumos energéticos
                p Melaza de caña, afrecho de trigo, granos de cereales.

              .col-md.tarjeta.color-acento-contenido.p-5
                .row.justify-content-center.mb-4
                  .col-3
                    figure
                      img(src='@/assets/curso/temas/tema1/6.svg', alt='Texto que describa la imagen')
                  
                h2.text-center Insumos proteicos
                p Pasta de algodón, torta de soya, soya integral.

              .col-md.tarjeta.color-primario.p-5
                .row.justify-content-center.mb-4
                  .col-3
                    figure
                      img(src='@/assets/curso/temas/tema1/7.svg', alt='Texto que describa la imagen')
                  
                h2.text-center Insumos no proteicos, los más usados son:
                p Forraje seco de maíz, tara molida, urea.

        .row.justify-content-center.align-items-center(titulo="Formulación de raciones para cerdo ")
          .col-md-6.mb-4.mb-md-0
            p En la producción de cerdo, la alimentación puede representar casi el #[b 70 % de los gastos de producción], por ello, es de sumo cuidado proyectar muy bien este rubro en cualquier organización que se dedique a la producción de porcinos.
            p Los métodos de formulación deben combinar todos los factores, para poder balancear de manera #[b científica, económica y productiva la ración]. El avance y desarrollo de las tecnologías en el ámbito de la formulación de raciones han aportado grandes beneficios en los cálculos y rapidez de estos. 
          .col-md-6.mb-5
            figure
              img(src='@/assets/curso/temas/tema1/8.jpg', alt='En la figura se representa la fisiología digestiva y la manera como se regula su funcionamiento.')

        .row.justify-content-center.align-items-center(titulo="Formulación de raciones para aves")
          .col-md-6.mb-4.mb-md-0
            p Los costos de alimentación representan entre el #[b 70 % y 80 %] de los costos de producción animal; en el caso de las aves, puede utilizarse #[b gran variedad de insumos para ser alimentados], lo ideal es hacer una elección según la disponibilidad que exista en las granjas, o de precio, en caso de hacer compras de alimento.
            p Es necesario identificar los insumos existentes que permitan generar las raciones de alimento para las aves, estos pueden ser:
          .col-md-6.mb-5
            figure
              img(src='@/assets/curso/temas/tema1/9.png', alt='En la figura se representa la fisiología digestiva y la manera como se regula su funcionamiento.')
          
          .row.justify-content-center
            .tarjeta--container.row.mb-5
              .col-md.tarjeta.color-primario.p-5
                .row.justify-content-center.mb-4
                  .col-3
                    figure
                      img(src='@/assets/curso/temas/tema1/10.svg', alt='Texto que describa la imagen')
                  
                h2.text-center Fuentes de energía
                p Los alimentos que proporcionan energía son los granos de cereales, como maíz blanco o amarillo, sorgo, arroz, trigo o cebada; los cereales combinados con harina de yuca se pueden convertir en una buena fuente de energía; la melaza de caña puede utilizarse, pero de manera controlada, máximo 10 %.

              .col-md.tarjeta.color-acento-contenido.p-5
                .row.justify-content-center.mb-4
                  .col-3
                    figure
                      img(src='@/assets/curso/temas/tema1/11.svg', alt='Texto que describa la imagen')
                  
                h2.text-center Fuentes de proteínas
                p Los alimentos que generan mayor fuente de proteína siempre serán los de origen animal, como harina de pescado, de carne o de hueso; otras fuentes valiosas de energía son las pastas de soya, algodón, ajonjolí y girasol.

    h4.titulo-cuarto.mt-5 Funciones
    p.mb-3(data-aos="fade-left") La nutrición animal se encarga de la alimentación de los animales, garantizando que esta tenga los nutrientes necesarios para alimentarse y sobrevivir. Ahora bien, los organismos de todos los animales no se comportan de la misma manera, por ello tiene como objetivo identificar las necesidades nutricionales específicas de cada grupo de animales y poder aprovechar al máximo las capacidades productivas y reproductivas de cada uno de estos.
    p.mb-5(data-aos="fade-left") Dentro de las funciones de la nutrición animal y la formulación de raciones, se deben cubrir las necesidades y nutrientes básicos que necesitan los animales: #[b proteínas, minerales, vitaminas y agua]; de la misma manera, la nutrición animal debe garantizar el funcionamiento adecuado de los cuatro aparatos que hacen parte de los animales, estos son:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color.p-4(style="background-color:#E3E7DF")(data-aos="flip-up")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/12.svg' alt='AvatarTop')
        h4.text-center SISTEMA DIGESTIVO
        p Garantiza que el alimento pueda llegar al interior del cuerpo, ingiriéndolo, digiriéndolo y absorbiéndolo.

      .tarjeta.color.p-4(style="background-color:#E3E7DF")(data-aos="flip-up")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/13.svg' alt='AvatarTop')
        h4.text-center SISTEMA CIRCULATORIO
        p Este aparato se encarga de que los nutrientes requeridos sean absorbidos por el estómago y el aparato digestivo, en general, de que puedan llegar hasta la sangre; esta función se hace a través de la sangre, transportando los nutrientes y desechando lo que no se necesite.

      .tarjeta.color.p-4(style="background-color:#E3E7DF")(data-aos="flip-up")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/14.svg' alt='AvatarTop')
        h4.text-center SISTEMA RESPIRATORIO
        p Se encarga de tomar el oxígeno que necesita el cuerpo y de expulsar el C02 que el cuerpo no necesita.

      .tarjeta.color.p-4(style="background-color:#E3E7DF")(data-aos="flip-up")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/15.svg' alt='AvatarTop')
        h4.text-center SISTEMA EXCRETOR
        p Es el último aparato en entrar en función, elimina los desechos que el cuerpo no requiere y son el resultado del proceso de nutrición; elimina las sustancias tóxicas del cuerpo.
    
    h4.titulo-cuarto.mt-5 Responsabilidad del profesional
    
    p.mb-5(data-aos="fade-left") Para complementar el tema sobre preparación de raciones animales, se invita a ver el siguiente vídeo del Centro Agropecuario La Granja, del SENA, el cual tiene una planta productora de alimentos concentrados: 

    .row.justify-content-center.align-items-center
      .col-md-6
        p La salud y el bienestar animal, así como la vigilancia de posibles enfermedades, deben estar a cargo del #[b médico veterinario]. La tarea principal enfocada en la nutrición animal debe estar proyectada en asegurar que la alimentación animal cumpla con los requisitos de seguridad e inocuidad.     
        p El médico veterinario debe velar por la salud de los animales y evitar posibles enfermedades transmitidas por la alimentación, teniendo en cuenta que existe un consumidor final de leche, huevos o carne, y puede ver afectada su salud por la mala manipulación que se le dé a estos. 
      .col-md-6
        figure
          img(src='@/assets/curso/temas/tema1/16.png', alt='Texto que describa la imagen')

    .row.mt-5
      figure(data-aos="flip-up")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/Jn0SiBNs5yI?si=YNxBV-WVL85p6LPm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
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
