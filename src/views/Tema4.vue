<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Almacenamiento
    p.mb-3(data-aos="fade-left") Según la Resolución 061252 del 3 de febrero de 2020, se deben cumplir las siguientes disposiciones para el almacenamiento.
    p.mb-5(data-aos="fade-left") Artículo 19. Almacenamiento. Se deben seguir las siguientes indicaciones: 

    .row.justify-content-center.mb-5
      .col.mb-5
        SlyderB.mb-5(:datos="datosSlyder")
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: '',
        texto:
          'El almacenamiento de las materias primas, insumos y productos terminados se debe realizar de manera que se minimice su deterioro y que no se presenten condiciones que puedan afectar la integridad de los mismos.',
        imagen: require('@/assets/curso/temas/tema4/1.png'),
      },
      {
        titulo: '',
        texto:
          'El almacenamiento de materias primas perecederas debe contar con control de las variables que aseguren su conservación.',
        imagen: require('@/assets/curso/temas/tema4/2.png'),
      },
      {
        titulo: '',
        texto:
          'El almacenamiento de las materias primas, insumos y productos terminados debe permitir la circulación del aire, la inspección y las labores de limpieza; por lo tanto, los productos deben estar separados físicamente de las paredes, pisos y techos.',
        imagen: require('@/assets/curso/temas/tema4/3.png'),
      },
      {
        titulo: '',
        texto:
          'Los lugares destinados al almacenamiento de materias primas, insumos, envases y productos terminados no pueden utilizarse para actividades diferentes a estas.',
        imagen: require('@/assets/curso/temas/tema4/4.png'),
      },
      {
        titulo: '',
        texto:
          'El almacenamiento de los alimentos para animales debe hacerse en un área exclusiva, estar identificada, contar con controles y registros de manejo de inventarios y disposición y/ o uso del producto.',
        imagen: require('@/assets/curso/temas/tema4/5.png'),
      },
      {
        titulo: '',
        texto:
          'El almacenamiento de las devoluciones debe hacerse en un área exclusiva para dicho fin y estar identificada. Se deben llevar registros que consignen la fecha, la cantidad de producto devuelto y la disposición final.',
        imagen: require('@/assets/curso/temas/tema4/6.png'),
      },
      {
        titulo: '',
        texto:
          'Los plaguicidas, detergentes, desinfectantes y otras sustancias potencialmente peligrosas deben almacenarse en áreas exclusivas y su manipulación sólo podrá hacerse por personal capacitado. Estos productos deben estar identificados y contar con información sobre su empleo y toxicidad.',
        imagen: require('@/assets/curso/temas/tema4/7.png'),
      },
    ],
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
