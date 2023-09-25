<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Registros y formatos
    .row.justify-content-center.align-items-center 
      .col-md-7 
        p(data-aos="fade-lef") Cuando se hace referencia al registro y los formatos que se deben llevar para la alimentación, se debe iniciar hablando del registro de los animales con los que se cuenta; la idea es empezar a organizar las unidades de negocio independientemente de su tamaño y generar conciencia para que estas inicien su proceso de empresa. Por ello, es necesario que se inicie la implementación de los registros, para ir corrigiendo errores y poder crear fincas más productivas; los registros son formatos que capturan información y pueden ayudar en la toma de decisiones para mejorar la producción de los animales.
        p(data-aos="fade-lef") Los registros se deben hacer por cada uno de los animales y deben tener información de la raza (en caso de ser necesario), genealogía, sexo, fecha de nacimiento y origen, si no es nacido en la finca; estos se pueden llevar en cuadernos, tarjetas, hojas individuales, hojas de cálculo, registros computarizados y programas o software de registros.
      .col-md-5
        figure
          img(src='@/assets/curso/temas/tema10/1.png', alt='Texto que describa la imagen')

    .titulo-sexto.color-acento-contenido
      h5 Tabla 4
      span #[em Ejemplo formato control de peso]

    .row.justify-content-center 
      .col 
        .tabla-a.mb-5 
          table
            thead.text-white(style="background-color:#1B3F5E")
              tr
                th N°
                th Fecha
                th N° Registro
                th Tendencia racial
                th Peso en kg
                th N°
                th Fecha
                th N° Registro
                th Tendencia racial
                th Peso en kg
            tbody
              tr
                th 1 
                td 
                td 
                td
                td
                td
                td
                td
                td
                td
              tr
                th 2 
                td 
                td 
                td
                td
                td
                td
                td
                td
                td
              tr
                th 3 
                td 
                td 
                td
                td
                td
                td
                td
                td
                td
    
    .titulo-sexto.color-acento-contenido
      h5 Tabla 5
      span #[em Ejemplo formato compra de alimentos]

    .row.justify-content-center 
      .col 
        .tabla-a.mb-5 
          table
            thead.text-white(style="background-color:#1B3F5E")
              tr
                th N°
                th Categoría animal
                th N° Registro
                th Alimento usado
                th Ración (kg/animal)
                th Dónde se compró
                th Fecha de compra
                th Fecha inicio de suministro
                th Fecha final de suministro
                th Tiempo de suministro del alimento
            tbody
              tr
                th 1 
                td 
                td 
                td
                td
                td
                td
                td
                td
                td
              tr
                th 2 
                td 
                td 
                td
                td
                td
                td
                td
                td
                td
              tr
                th 3 
                td 
                td 
                td
                td
                td
                td
                td
                td
                td
    .titulo-sexto.color-acento-contenido
      h5 Tabla 6
      span #[em Ejemplo formato uso y manejo de alimentos]

    .row.justify-content-center 
      .col 
        .tabla-a.mb-5 
          table
            thead.text-white(style="background-color:#1B3F5E")
              tr
                th N° de Registro
                th Tipo de animal
                th Categoría animal
                th Ración (Kg/animal)
                th Enero
                th Febrero
                th Marzo
                th Abril
                th Mayo
            tbody
              tr
                th 1 
                td 
                td 
                td
                td.text-center.text-bold N° días
                td.text-center.text-bold N° días
                td.text-center.text-bold N° días
                td.text-center.text-bold N° días
                td.text-center.text-bold N° días
              tr
                th 2 
                td 
                td 
                td
                td 
                td 
                td 
                td 
                td 
              tr
                th 3 
                td 
                td 
                td
                td
                td
                td
                td
                td
              tr
                th 4 
                td 
                td 
                td
                td
                td
                td
                td
                td
              tr
                th 5  
                td 
                td 
                td
                td
                td
                td
                td
                td
      
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
