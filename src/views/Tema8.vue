<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Muestras
    p.mb-5(data-aos="fade-left") Para iniciar, se debe entender qué es una muestra, y en general, una muestra es aquella porción o parte que indica la calidad del todo que ha sido tomado, por ello, se hace necesario implementar este concepto en los alimentos de nutrición animal, ya que estos no son homogéneos en su producción y pueden sufrir alguna alteración; es importante tener en cuenta que una muestra nunca será perfecta. Hacer un muestreo tiene como objetivo tomar una porción, unidades, o recipientes de producto que sean altamente representativos. 

    .row.justify-content-center 
      .col-md-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema8/1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El tamaño de la muestra debe ser representativo para poder obtener los resultados esperados del análisis del laboratorio y para poder hacer una repetición en caso de ser necesario. La muestra debe ser representativa también para poder reflejar todas las condiciones actuales al momento del muestreo. 
              br
              br

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_8_1 8.1  Métodos toma de muestras

    p(data-aos="fade-left") Para que los métodos de la toma de muestras alcancen los resultados esperados, es ideal seleccionar una cantidad representativa del producto y trabajar con el método que más se adecúe a lo que se está buscando.  Existen 2 métodos de muestra reconocidos, que son los siguientes:
    .row.justify-content-center 
      .col-md-10.p-4
        .cajon.p-4.mb-3(style="background-color:#DBF9BD")
          .row.justify-content-center.align-items-center
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema8/2.svg', alt='')
            .col-md-9
              p Cuando el muestreo se debe realizar por incumplimiento de la normativa legal, no se hace necesario seleccionar una muestra que sea en su totalidad representativa, ya que el interés del encargado de la muestra o del inspector es poder tener la probabilidad más alta de encontrar los productos defectuosos. Los procedimientos de toma de muestras selectiva son normalmente utilizados para poder tener mayores posibilidades de encontrar aquellos productos defectuosos o que no están cumpliendo las normas.

      .row.justify-content-center
        .col-10
          p La muestra selectiva se realiza de manera directa, por lo general, se realiza gracias a alguna situación específica; por ejemplo, suele suceder respecto a algún reclamo que realice un cliente por haber encontrado elementos fuera de lo normal en un alimento, o tal vez porque durante alguna visita de inspección se detectó el fácil ingreso a las instalaciones de roedores, etc. En este tipo de muestra, el resultado que se da está directamente relacionado con las observaciones que desarrolla el inspector o de otros factores que llevaron a la necesidad de realizar la toma de una muestra selectiva. 
    
    h4.titulo-cuarto.mt-5 b. Toma de muestra objetiva
    p(data-aos="fade-left") La toma de muestra objetiva puede resultar un poco más compleja, ya que es poco probable que exista objetividad cuando se está tratando de demostrar la calidad de un lote de alimentos que por lo general no es homogéneo. El inspector o el encargado tendrá siempre una duda respecto a si la muestra que fue tomada es muy pequeña, o tal vez demasiado grande, o si la selección realmente fue hecha al azar. 
    p.mb-5(data-aos="fade-left") Las muestras objetivas se vuelven, en algunos casos, tareas rutinarias, para poder supervisar de manera constante la calidad de los alimentos, para poder hacer una recogida de datos con fines específicos, o analizar y definir si el alimento no cumple con los criterios de calidad por cualquier razón. 

    .row.justify-content-center 
      .col-md-12
        .row.justify-content-center.align-items-center 
          .col-md-7
            .cajon.p-4.mb-3(style="background-color:#FFFAD0")
              p Según lo anterior, se sugiere hacerlo de esta manera cuando los encargados de las inspecciones no puedan detectar condiciones insatisfactorias, o cuando estas no puedan hacerse con determinada frecuencia. Por lo general, las muestras objetivas se recogen en el mercado, pero también pueden tomarse incluso si están aún en las instalaciones del productor. Este método es comúnmente utilizado para aquellos alimentos que son importados, ya que no se ha tenido ningún proceso de supervisión en las actividades de fabricación de la empresa ni del país exportador y, como consecuencia, no se cuenta con antecedente para poder realizar las muestras selectivas.
            p El muestreo objetivo define que la persona encargada puede tener acceso ilimitado al total de unidades que conforman el lote definido para el muestreo y que cada unidad puede ser usada y tiene las mismas probabilidades de ser la seleccionada. El proceso se hace tomando pequeñas unidades al azar de varios puntos dentro del lote, estas se combinan, y posteriormente, estas conforman la muestra; en lugar de retirar la muestra completa de un punto, se debe seleccionar al azar.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema8/3.jpg', alt='')
    
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_8_2 8.2  Técnicas de conservación

    p.mb-5(data-aos="fade-left") Para garantizar la conservación de la muestra recolectada, el inspector encargado debe tener conocimiento sobre el tratamiento de la muestra, cualquier mal manejo que se le llegue a dar a esta puede dañar el proceso y los laboratorios no podrán trabajar con ella. Se deben tener en cuenta aspectos generales, como la cantidad de cada una de las muestras, el recipiente recomendado para estas, la temperatura que requiere (refrigerado, congelado, temperatura ambiente) y el tiempo máximo que se puede tardar para llegar al laboratorio, en caso de ser necesario, para iniciar el proceso. 
    .row
      .col-md   
        figure
          img(src='@/assets/curso/temas/tema8/4.jpg', alt='')
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_8_3 8.3  Métodos de embalaje y envío

    p(data-aos="fade-left") Se debe hacer una correcta identificación y descripción del alimento, ya que de esto depende minimizar las probabilidades de que se presente un error a la hora de entregar los resultados de los análisis (por ejemplo, mala identificación del destinatario) y permitir al responsable del laboratorio juzgar si los resultados son razonables. La descripción puede presentar variaciones, según lo que se busque en con cada una de las muestras; sin embargo, es necesario que al menos contenga esta información:

    .row.justify-content-center.mt-5.mb-5 
      .col-md 
        .cajon.p-4.mb-3(style="background-color:#FFFAD0")
          .row.justify-content-center.align-items-center 
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema8/5.svg', alt='')
            .col-md-8
              <li>Nombre del establecimiento y del productor que remite la muestra.</li>
              <li>Fecha del muestreo.</li>
              <li>Potrero (si fue tomada de alguno).</li>
              <li>Composición de la pastura o partida de alimento.</li>
              <li>Estado fenológico de las especies predominantes (si corresponde).</li>
              <li>Partes enviadas y/o altura de corte.</li>
              <li>Condiciones (por ejemplo, silo puente, torta, tapado, bolsa) y tiempo de almacenamiento (si corresponde).</li>
              <li>Sitio de muestreo, silo, bolsa o comedero.</li>
              <li>Lote de alimento (si corresponde).</li>
              <li>Análisis solicitados.</li>

    .row 
      .col 
        p(data-aos="fade-left") Es muy importante, de ser necesario, poder realizar un acercamiento previo con el laboratorio que se encargará de realizar los análisis, poder coordinar el tiempo y forma de recepción de las muestras, para poder disminuir al máximo las demoras que se pueden presentar en el inicio de los análisis. La recomendación se hace especialmente cuando las muestras a analizar son de materiales frescos (forrajes o silajes) y son enviadas por empresas de correo. Además, se hace necesario saber que muchos análisis conllevan más tiempo que otros y en consecuencia no es posible contar con los resultados antes de 7 – 10 días de ingresadas las muestras en el laboratorio.
      
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
