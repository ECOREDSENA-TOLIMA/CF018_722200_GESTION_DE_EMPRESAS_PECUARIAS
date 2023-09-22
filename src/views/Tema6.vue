<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Condiciones medioambientales
    figure
      img(src='@/assets/curso/temas/tema6/1.jpg', alt='Texto que describa la imagen')    
    p.mb-5.mt-5(data-aos="fade-left") Las condiciones ambientales deben estar dadas para que la inocuidad de los alimentos utilizados, para realizar las raciones de los animales no se vea afectada, por ende, evitar que pueda generar un impacto negativo en la calidad de producción y reproducción animal. Por ello, se debe tener mucho cuidado con los factores que puedan influir en afectar estos alimentos. 

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_6_1 6.1  Características
    p.mb-5(data-aos="fade-left") Existen tres #[b tipos de factores] que pueden afectar los alimentos, estos son: el #[b biológico, el químico y el físico, siendo el biológico] el factor que por lo general representa un riesgo mayor, ya que estos riesgos de origen alimentario incluyen diferentes organismos, como #[b bacterias, virus y parásitos].

    .row.justify-content-center 
      .col-md-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Se debe tener en cuenta que los peligros biológicos normalmente se dan o son asociados con las personas que son responsables, ya que no tienen en cuenta las prácticas adecuadas #[b de manipulación y almacenaje de los insumos y alimentos (higiene, temperatura y tiempo)]. Otra de las causas más comunes es la contaminación que se da con los alimentos crudos en el lugar de almacenamiento. Muchos de los microorganismos están presentes en el ambiente de manera natural, donde se producen, mezclan o preparan las raciones, y muchos otros son activados en procesos de cocción.
              br
              br

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_6_2 6.2  Parámetros técnicos
    p.mb-5(data-aos="fade-left") Dentro de los factores que afectan de manera directa la inocuidad de los alimentos, se encuentran unos parámetros técnicos que los clasifican en factores #[b intrínsecos y extrínsecos]. A continuación, se evidencia una relación de los factores que integran cada uno de estos grupos.

    h4.titulo-cuarto.mt-5 Factores Intrínsecos 

    p.mb-3(data-aos="fade-left") Se refieren a las propiedades físicas y a la composición química del propio alimento: actividad de agua, pH, nutrientes, potencial de oxidación y estructura del producto alimentario.

    h5 Actividad del agua
    p.mb-5(data-aos="fade-left") El agua es uno de los factores de mayor cuidado en las granjas u organizaciones que se dedican a la producción pecuaria, ya que los micro organismos necesitan de agua para poder crecer; se hace referencia al término de actividad de agua (Aw), dado que hace referencia a la disponibilidad de agua donde se puede presentar el desarrollo y crecimiento microbiano:

      
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
