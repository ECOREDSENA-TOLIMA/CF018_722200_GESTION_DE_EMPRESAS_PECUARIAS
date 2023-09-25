<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Presentación de productos
    .row.justify-content-center.align-items-center
      .col-md-6.mb-3
        p Actualmente, la industria de alimentación para animales ha trabajado en generar diferentes presentaciones de los alimentos para cubrir las necesidades del sector, algunas presentaciones tienen un menor precio, pero esto no significa que tenga una baja calidad; a través del tiempo, se ha evolucionado y las empresas trabajan para mejorar los procesos de elaboración de alimentos para animales, con el fin de ayudar con esto a obtener un peso apropiado en un menor tiempo, siempre la mejor dieta será aquella que presente la mejor eficiencia y más bajos costos.
      .col-md-6
        figure
          img(src='@/assets/curso/temas/tema7/1.jpg', alt='')

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_7_1 7.1  Características
    p.mb-3(data-aos="fade-left") Lo más importante en la elaboración de alimentos cuyo destino es la alimentación animal, sin duda, es la calidad que deben tener estos, tratando de reducir al máximo los riesgos potenciales que puedan afectarlos. El primer paso es hacer un minucioso control de calidad de las materias primas, hasta la obtención final del alimento. 
    p.mb-3(data-aos="fade-left") Las características y pasos para tener en cuenta en la elaboración del alimento son las siguientes:

    .row.justify-content-center
      .col-12
        .cajon.p-4.mb-3(style="background-color:#DBF9BD")
          .row.justify-content-center.align-items-center
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema7/2.svg', alt='')
            .col-md-7
              <li type="disc">Un óptimo sistema de seguimiento (vigilar el producto en las diferentes etapas del sistema productivo, recaudando información importante de este en las diferentes etapas que este cumple) y rastreo (controlar el producto final, con el fin de ver los problemas superados y desviaciones que pudieron haber tenido las materias primas durante la elaboración del alimento).</li>
              <li type="disc">Prevenir las influencias nocivas (medioambientales y del molino).</li>
              <li type="disc">Eliminar los productos críticos o sospechosos de mala calidad (aislamiento o eliminación de estos).</li>
              <li type="disc">Detectar áreas del proceso vulnerables a la contaminación.</li>
              <li type="disc">Controlar la higiene del proceso.</li>

    .row.mb-5.mt-5
      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#E3E7DF")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema7/3.svg' alt='AvatarTop')
        p.text-center Contaminación microbacteriana o intoxicación.

      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#FFFAD0")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema7/4.svg' alt='AvatarTop')
        p.text-center Sustancias nocivas, tales como químicos (pesticidas).

      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#E3E7DF")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema7/5.svg' alt='AvatarTop')
        p.text-center Hongos y micotoxinas.

      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#FFFAD0")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema7/6.svg' alt='AvatarTop')
        p.text-center Contaminación física: piedras, cadáveres animales, etc.

      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#E3E7DF")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema7/7.svg' alt='AvatarTop')
        p.text-center Materias primas utilizadas en la producción de alimentos para animales.

    .titulo-sexto.color-acento-contenido.offset-1
      h5 Tabla 1
      span #[em Información nutricional de proteína]
    .row.justify-content-center
      .col-md-10
        .tabla-a.mb-5 
          table
            thead.text-white(style="background-color:#1B3F5E")
              tr
                th Subproducto
                th Materias primas
            tbody
              tr
                td.text-bold Subproductos cárnicos
                td <li>Harina de carne</li>
                   <li>Harina de hueso</li>
                   <li>Harina de sangre</li>
                   <li>Harina de hígado y vísceras</li>
              tr
                td.text-bold Subproductos aceite
                td <li>Derivados de harina de lino</li>
                   <li>Derivados de harina de girasol</li>
                   <li>Derivados de harina de soya</li>
              tr
                td.text-bold Subproductos de la industria molinera
                td Derivados del trigo (afrecho)
              tr
                td.text-bold Subproductos de la industria cervecera
                td Germen de malta
              tr
                td.text-bold Subproductos de la industria de almidón de maíz
                td Gluten #[i feed], Gluten mea
              tr
                td.text-bold Suplementos cálcicos y magnésicos
                td CaCO3, dolomita, conchillas fósiles e industriales
                
    separador
    .titulo-segundo.color-acento-contenido
      h2#t_7_1 7.2  Método
    p.mb-5(data-aos="fade-left") Los métodos comunes para la elaboración de alimentación para animales son los siguientes: molido, peletizado y extruido. A continuación, se realizará un acercamiento en la definición de cada método:

    h4.titulo-cuarto.mt-5 Molido
    p.mb-5(data-aos="fade-left") Se conoce como un método físico cuya finalidad es reducir el tamaño de la materia prima (granos) para aumentar la superficie de ataque de las enzimas digestivas; estos procesos se realizan en molinos diseñados para ello; existen dos tipos de molinos:
    
    .titulo-sexto.color-acento-contenido.offset-1.mt-5
      h5 Figura 15
      span #[em Molido para reducir tamaño de materia prima]
    .row.justify-content-center
      .col-md-10.desktop
        figure
          img(src='@/assets/curso/temas/tema7/8.svg', alt='En la figura se tiene que los rodillos son menos utilizados, como también que los martillos son comúnmente más usados, el tipo de molido con el cual será procesada la materia prima se define dependiendo de la especie animal que va a ingerir el alimento.')
    .row.justify-content-center
      .col-md-10.movil
        figure
          img(src='@/assets/curso/temas/tema7/9.svg', alt='En la figura se tiene que los rodillos son menos utilizados, como también que los martillos son comúnmente más usados, el tipo de molido con el cual será procesada la materia prima se define dependiendo de la especie animal que va a ingerir el alimento.')

    .row.justify-content-center.mt-5
      .col-10
        .row.justify-content-center
          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema7/10.svg' alt='AvatarTop')
              .tarjeta.tarjeta(style="background-color:#E3E7DF") 
                .p-4
                  h2 
                  p En porcinos, produce un efecto negativo, generando úlceras gástricas.

          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema7/11.svg' alt='AvatarTop')
              .tarjeta(style="background-color:#E3E7DF") 
                .p-4
                  h2 
                  p Las aves también se ven afectadas, pero en menor grado. 

    .row.mb-5
      p(data-aos="fade-left") Para obtener una buena molienda, se debe tener la menor cantidad de estaciones en el diseño del proceso, para evitar una eventual contaminación del material. 

    .row.justify-content-center.align-items-center 
      .col-md-3.mb-3
        figure
            img(src='@/assets/curso/temas/tema7/12.svg', alt='')
      .col-md-9
        <li>Se debe contar con un mezclador, para que las premezclas destinadas no sean desviadas succionadas por los filtros del molino.</li>
        <li>Para no tener estos problemas, se cuenta con válvulas herméticas de alta automatización.</li>
        <li>Los productos de la mezcla pueden presentarse húmedos o secos. Estos últimos toman más tiempo en alcanzar una máxima homogeneización, sin embargo, los líquidos presentan riesgos de contaminación en el mezclador, por lo que se han diseñado nuevos modelos de mezcladores en serie: uno para componentes secos, seguido de uno al cual se le agregarán los líquidos.</li>
        <li>Este tipo de modelo es caro, pero se ahorra la utilización de dispositivos anexos (mezclador continuo de melaza).</li>

    h4.titulo-cuarto.mt-5 Peletizado
    p.mb-5(data-aos="fade-left") También llamado comprimido, se utiliza para la obtención de alimentos completos. Antes de realizar este proceso:

    .row.justify-content-center.mb-3
      .col-12
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-4
              .col-7.mb-3
                figure
                  img(src='@/assets/curso/temas/tema7/13.svg', alt='Texto que describa la imagen')
              p Se debe realizar la molienda de los ingredientes.

          .col-md.tarjeta.color-acento-contenido.p-5
            .row.justify-content-center.mb-4
              .col-7.mb-3
                figure
                  img(src='@/assets/curso/temas/tema7/14.svg', alt='Texto que describa la imagen')
              p Luego, pasan a un mezclador; y finalmente, a una peletizadora.

          .col-md.tarjeta.p-5(style="background-color:#5B5959")
            .row.justify-content-center.mb-4
              .col-7.mb-3
                figure
                  img(src='@/assets/curso/temas/tema7/15.svg', alt='Texto que describa la imagen')
              p.text-white En esta cámara, se les trata con vapor húmedo, obteniendo una harina húmeda y caliente, la que a su vez es pasada a presión por un dado con muchos orificios dándole forma de churritos, los cuales son cortados, según el tamaño deseado, por una navaja, obteniendo así finalmente el pellet.

    .row.justify-content-center 
      p.mb-3(data-aos="fade-left") Este método tiene un alto costo de producción, pero tiene la ventaja de obtener un producto denso, homogéneo (evitando que el animal discrimine el alimento), y el hecho de aplicar calor en el proceso, en cierto grado, mejora la digestión. Para obtener un buen rendimiento y calidad de #[i pellet], se recomiendan recipientes de proceso pequeños, que permitan llevar a cabo un mejor seguimiento en la elaboración de estos y uno para el agregado de medicamentos.
      p(data-aos="fade-left") En este proceso, también son necesario elevadores, generalmente de tipo neumático, a pesar de su mayor costo, para transportar el pellet obtenido libre de contaminantes, el que será destinado hasta un tamiz o colador, teniendo la precaución de que acá solo se combinen los productos que tengan la misma fórmula (sean homogéneos en calidad y composición nutritiva).

    h4.titulo-cuarto.mt-5 Extrusión
    p.mb(data-aos="fade-left") Este proceso es el más empleado en la elaboración de alimentos para mascotas. Se hace de manera física; la materia es sometida a fuerzas de presión y cizalla, transformando su estructura para obtener múltiples formas.
    p.mb-5(data-aos="fade-left") Las más comunes son las croquetas, con formas alternativas tales como huesitos, pescaditos, etc. Similar al peletizado (debe tener como primera etapa la molienda y mezclado, luego el amasado, cizalla y finalmente la formación), la mezcla es derivada a un extrusor, consistente en una larga cámara sellada de forma cilíndrica, en cuyo interior corre uno o dos grandes tornillos. 
      
    .row.justify-content-center 
      .col-md-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/16.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Se inyecta vapor húmedo (se desnaturalizan proteínas, se inactivan enzimas destructivas, se destruyen compuestos antinutricionales, disminuye carga microbiana) a medida que el material circula al girar el (los) tornillo(s) interno(s). También puede ejecutarse en frío (sin expansión). Luego, esta masa caliente es llevada a un molde (troquel) que posee la forma y tamaño deseado. Este tipo de alimento es costoso, pero el alimento extruido mejora la homogeneidad, densidad y digestión.
            br
            br
            p.mb-0 La materia prima a utilizar le brindará al producto final algunas características de ella (textura, color, calidad nutricional, etc.), cuidando que debe existir un equilibrio entre proteínas, carbohidratos y lípidos.
              br
              br
    p.mb-5(data-aos="fade-left") Entre las materias primas destacan:

    .titulo-sexto.color-acento-contenido.mt-5
      h5 Figura 16
      span #[em Materias primas]
    .row.desktop
      .col-md-12
        figure
          img(src='@/assets/curso/temas/tema7/17.svg', alt='Oleaginosas, soya, lupino, poroto, garbanzo, maíz, arroz, sorgo, grasas animales y por ultimo aceites vegetales y marinos.')

    .row.movil
      .col-md-12
        figure
          img(src='@/assets/curso/temas/tema7/18.svg', alt='Oleaginosas, soya, lupino, poroto, garbanzo, maíz, arroz, sorgo, grasas animales y por ultimo aceites vegetales y marinos.')

    .row 
      p.mb-5(data-aos="fade-left") Este método de elaboración tiene características específicas, a continuación, se listarán:

    .row.justify-content-center 
      .col-md-3
        figure
          img(src="@/assets/curso/temas/tema7/19.svg", alt="Texto que describa la imagen")
      .col-md-9
        <li>Alta calidad, tanto en la elaboración como en el producto final.</li>
        <li>Mejora el valor nutritivo energético.</li>
        <li>Mejora la apariencia (formas, colores), palatabilidad (texturas, sabores) y digestión.</li>
        <li>Adaptabilidad a los cambios de formulación.</li>
        <li>No producción (o muy mínima) de desperdicios.</li>
        <li>No necesita aglutinantes (tiene características de aglomeración y gelatinización).</li>
        <li>Altamente digestible y energético (en peces, disminuye la tasa de alimentación frente al peletizado tradicional).</li>

      
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
