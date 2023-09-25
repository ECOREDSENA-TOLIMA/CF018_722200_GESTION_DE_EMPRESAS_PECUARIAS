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

    h5 <li type="disc">Actividad del agua</li>
    p.mb-5(data-aos="fade-left") El agua es uno de los factores de mayor cuidado en las granjas u organizaciones que se dedican a la producción pecuaria, ya que los #[b micro organismos necesitan de agua para poder crecer]; se hace referencia al término de actividad de agua (Aw), dado que hace referencia a la disponibilidad de agua donde se puede presentar el desarrollo y crecimiento microbiano:

    .titulo-sexto.color-acento-contenido.offset-1
      h5 Figura 12
      span #[em Desarrollo y crecimiento microbiano]
    .row.justify-content-center
      .col-md-10.desktop
        figure
          img(src='@/assets/curso/temas/tema6/3.svg', alt='En la figura se representa el desarrollo y crecimiento microbiano, con valores nominales de 0 a 1.0, luego con el valor menor de Aw en el cual una bacteria patogénica puede crecer y desarrollarse que es 0,85, y con valores de del cual se destaca que la relación de valores de actividad de agua que favorecen el desarrollo bacteriano están ubicados entre 0,97 y 0,99.')
    .row.justify-content-center
      .col-md-10.movil
        figure
          img(src='@/assets/curso/temas/tema6/4.svg', alt='En la figura se representa el desarrollo y crecimiento microbiano, con valores nominales de 0 a 1.0, luego con el valor menor de Aw en el cual una bacteria patogénica puede crecer y desarrollarse que es 0,85, y con valores de del cual se destaca que la relación de valores de actividad de agua que favorecen el desarrollo bacteriano están ubicados entre 0,97 y 0,99.')    

      p.mb-5.mt-5(data-aos="fade-left") La actividad del agua, la temperatura y la disponibilidad de nutrientes son factores que trabajan de manera interdependiente. Sin importar cuál sea la temperatura, el desarrollo y el crecimiento de los microorganismos va disminuyendo de manera proporcional a la actividad del agua. 

    .row.justify-content-center 
      .col
        .cajon.p-4.mb-3(style="background-color:#FFFAD0")
          .row.justify-content-center.align-items-center
            .col-md-3.mb-4.mt-4
              figure
                img(src='@/assets/curso/temas/tema6/5.svg', alt='')
            .col-md-7
              p <li type="disc">Cuando la temperatura está cerca de ser óptima, el valor de Aw que favorece el desarrollo y crecimiento bacteriano puede ser más limitado.</li>
              p <li type="disc">Cuando hay presencia de nutrientes, estos favorecen de cierta manera la supervivencia y desarrollo de las bacterias, así sea con unos valores de Aw límites para la multiplicación de microorganismos.</li>
              p <li type="disc">Los demás factores que influyen la Aw son pH, potencial de óxido reducción y sustancias antimicrobianas adicionadas o naturales. Por lo general, los mohos son naturalmente un poco más tolerantes a límites más bajos de Aw que las bacterias.</li>

    h5.mt-5 <li type="disc">Acidez y pH</li>
    p.mb-5(data-aos="fade-left") Para los alimentos el pH debe medirse con una escala de 0 (muy ácido) a 14,0 (muy alcalino o básico), siendo 7,0 el pH neutro. Por lo general, las bacterias suelen desarrollarse y crecer con un pH neutro o cercano a él, y en su gran mayoría, aquellos alimentos que se consideran favorables a estos agentes tienen el pH entre 4,6 y 7,0. Teniendo en cuenta el concepto anterior, los alimentos se encuentran divididos en dos grupos: poco ácidos, o de baja acidez, y ácidos; la clasificación o definición de estas categorías se da con base en el desarrollo del #[i Clostridium botulinum].
    
    .titulo-sexto.color-acento-contenido.offset-2.mt-5
      h5 Figura 13
      span #[em Escala pH]

    .row.justify-content-center
      .col-md-8.desktop
        figure
          img(src='@/assets/curso/temas/tema6/6.svg', alt='En la figura se representa la escala del pH, de 0 a 6 acido, 7 neutro, de 8 a 14 alcalino, las bacterias se ubican en el pH igual a 7.')
    .row.justify-content-center
      .col-md-8.movil
        figure
          img(src='@/assets/curso/temas/tema6/7.svg', alt='En la figura se representa la escala del pH, de 0 a 6 acido, 7 neutro, de 8 a 14 alcalino, las bacterias se ubican en el pH igual a 7.')    

    .row.justify-content-center.mt-5 
      .col
        .cajon.p-4.mb-3(style="background-color:#FFFAD0")
          .row.justify-content-center.align-items-center
            .col-md-3.mb-4.mt-4
              figure
                img(src='@/assets/curso/temas/tema6/8.png', alt='')
            .col-md-7
              p <li type="disc">Cuando el ácido se disocia en iones H+, cambia el pH; cuando se encuentran niveles altos de ácido, estos impactan de manera directa e interfieren en el desarrollo de las bacterias.</li>
              p <li type="disc">Un dato interesante que se puede observar es que aquellos productos proteínicos generan bloqueo, es decir, generan resistencia en el cambio de pH; por esta razón, en el caso de la leche, por ejemplo, uno de los parámetros importantes que define la calidad es la acidez (no el pH).</li>
              p <li type="disc">Los mohos y levaduras son generalmente más tolerantes a los factores pH y acidez, pudiendo desarrollarse aún en condiciones que puedan inhibir las bacterias.</li>

    h5.mt-5 <li type="disc">Potencial de óxido reducción</li>
    p.mb-5(data-aos="fade-left") Existen procesos de oxidación y reducción y estos están relacionados con el intercambio de electrones que existe entre las sustancias químicas. El potencial de óxido-reducción se define como la capacidad que tienen determinados sustratos para ganar o perder electrones. Cuando un elemento pierde un electrón, se denomina oxidado, y cuando, al contrario, lo gana, reducido.

    .titulo-sexto.color-acento-contenido.offset-2.mt-5
      h5 Figura 14
      span #[em Oxidación y reducción]

    .row.justify-content-center
      .col-md-8.desktop
        figure
          img(src='@/assets/curso/temas/tema6/9.svg', alt='En la figura se representa como se ganan o pierden electrones, reducido cuando se gana electrones, y oxidado cuando se pierde electrones.')
    .row.justify-content-center
      .col-md-8.movil
        figure
          img(src='@/assets/curso/temas/tema6/10.svg', alt='En la figura se representa como se ganan o pierden electrones, reducido cuando se gana electrones, y oxidado cuando se pierde electrones.')    

    .row.justify-content-center
      .col-md-8
        p.mt-5.mb-5(data-aos="fade-left") Cuando se habla de microorganismos aeróbicos se hace referencia a que estos necesariamente deben contar con valores de potencial de oxidación (Eh) positivos para que se pueda dar su crecimiento. Allí, en este grupo, se encuentran por lo general todos los mohos, levaduras oxidativas y muchas bacterias, principalmente las deteriorantes de alimentos (Pseudomonas, Moraxella, Acinetobacter, Flavobacterium, etc.) y algunas bacterias patogénicas aeróbicas (como Bacilluscereus).

    .row.justify-content-center 
      .col-md-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Asimismo, aquellos microorganismos anaeróbicos requieren valores de #[b  Eh menores]. Dentro de este grupo, se encuentran algunas #[b bacterias patogénicas] #[i (Clostridium botulinum)] y deteriorantes. Algunas bacterias anaeróbicas facultativas crecen de mejor manera en condiciones un poco reducidas y se denominan microaerófilas, como los lactobacilos y #[i Streptococcus].
            br
            br
            p.mb-0 La mayoría de las bacterias suele crecer y desarrollarse bien en cualquier tipo de condición, ya sea con o sin aire, y estas reciben el nombre de #[b bacterias aeróbicas facultativas]; este grupo lo conforman las bacterias de la familia #[i Enterobacteriaceae].
              br
              br

    p.mt-mb-5(data-aos="fade-left") El #[i Campylobacter sp] hace parte del grupo de bacterias microaerófilas, que son aquellas que se desarrollan de mejor manera en bajas concentraciones de oxígeno (entre 3 y 5 %). Los mohos y levaduras importantes para la ciencia de los alimentos son aeróbicos, raramente son facultativos.

    h4.titulo-cuarto.mt-5 Factores extrínsecos
    p.mb-5(data-aos="fade-left") Características del ambiente donde se almacena el alimento: temperatura, humedad y tensión de oxígeno.
    h5.mt-5 <li type="disc">Temperatura</li>
    p.mb-5(data-aos="fade-left") La temperatura es uno de los factores que más influyen en la proliferación de bacterias, conozca más sobre ella:

    .row.justify-content-center
      .tarjeta.tarjeta--gris.p-4.mb-2
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0
              p La temperatura afecta directamente el crecimiento, los requerimientos nutricionales, la composición química y enzimática de las células de los microorganismos. Los impactos que pueden tener el congelamiento y enfriamiento se relacionan directamente con la clase a la que pertenezca el microorganismo y con la manera en que se den respecto a tiempo y temperatura de almacenaje.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/11.svg', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0
              p El factor que hace parte del ambiente y que tiene mayor impacto en el desarrollo y crecimiento de microorganismos es la temperatura. Es importante aclarar que los microorganismos existentes pueden reproducirse en diferentes temperaturas, desde -8° a +90°C (17,6 a 194 °F), sin embargo, la temperatura en la que normalmente más se desarrollan es 35 °C (95 °F).
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/12.svg', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0
              h5 Los microorganismos
              p Teniendo en cuenta el factor de la temperatura, los microorganismos pueden clasificarse genéricamente en:
              p #[b Psicrotróficos:] son los que se desarrollan mejor en temperaturas bajas (inferiores a 100 ºC)
              p #[b Ambientales:] temperatura óptima entre 10-25 ºC
              p #[b Mesófilos:] temperatura óptima alrededor de 35-37 ºC
              p #[b Termófilos:] temperatura óptima superior a 45 ºC.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/13.svg', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0
              p Adicionalmente, a parte de la temperatura óptima, se debe tener en cuenta que existen temperaturas límites, las cuales están directamente relacionadas con el desarrollo de microorganismos. Cuando se presenta temperatura límite, el desarrollo de microorganismos es mucho menor y se tiene un requerimiento de tiempo mayor para que la población bacteriana pueda llegar a tener un mismo número de células viables totales, que solo se puede lograr cuando están expuestas a una temperatura óptima.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/14.svg', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0
              h5 El proceso de multiplicación
              p Finalmente, es importante saber que los microorganismos pueden tener un proceso de multiplicación en temperaturas que normalmente no son consideradas ideales, ya que pueden existir diferentes factores que favorecen el crecimiento y desarrollo de estos.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/15.svg', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0
              p La termorresistencia hace parte también de los microorganismos: los psicrotróficos tienen una menor resistencia que los ambientales, y estos, a su vez, presentan una menor resistencia que los mesófilos, siendo estos últimos menos termorresistentes que los termófilos; las formas esporuladas se consideran como de alta termorresistencia. 
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/16.svg', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0
              h5 Tipo de factores
              p Siempre se debe tener en cuenta y revisar detenidamente que existen otros tipos de factores que pueden tener influencia positiva o negativa respecto a la termorresistencia de un microorganismo. Por ejemplo, la relación dada por la actividad de agua, cuando es más alta, menor es la termorresistencia, ya que el agua facilita la distribución de la temperatura en el alimento. Además de que la actividad de agua, el pH y la acidez no son considerados óptimos o favorables para el microorganismo en cuestión, también potencian la acción del calor.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/17.svg', alt='Texto que describa la imagen')

    h5.mt-5 <li type="disc">Humedad relativa</li>
    p.mb-5(data-aos="fade-left") La humedad relativa es un factor que tiene influencia directa respecto a la actividad de agua del alimento. Si, por ejemplo, se da una condición donde un alimento que tiene baja actividad de agua está almacenado tal vez en un ambiente que maneja un nivel alto de #[b humedad relativa], lo que sucede con la actividad en relación con el agua de este alimento es que tendrá un aumento, facilitando así que los microorganismos sean multiplicados.
    p.mb-5(data-aos="fade-left") La combinación que se da entre #[b humedad relativa] y temperatura no puede pasar desapercibida, ya que esta relación entre estos 2 factores, cuanto mayor es la temperatura de almacenaje, menor la humedad relativa, y viceversa. Modificando el gas de la atmósfera es posible retardar el deterioro sin disminuir la #[b humedad relativa].

    h5.mt-5 <li type="disc">Composición de la atmósfera</li>
    p.mb-5(data-aos="fade-left") La composición atmosférica es un factor que influye en la calidad del alimento. Profundice, a continuación, un poco más: 

    .row.justify-content-center 
      .col-md-10
        ImagenInfografica.color-secundario.mb-5.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema6/18.svg', alt='Texto que describa la imagen')
              
          .tarjeta.color-acento-botones.p-3(x="5.6%" y="30.6%" numero="")
            .h5.mb-2 Influencia del CO2
              p Almacenar los alimentos en atmósferas gaseosas, como CO2, con unas cantidades definidas previamente, se conoce como "atmósfera controlada" y normalmente es utilizada para frutas (como manzana y pera), con el fin de retardar el daño causado por hongos filamentosos.

          .tarjeta.color-acento-botones.p-3(x="5.6%" y="65%" numero="")
            .h5.mb-2 Etileno
              p Este efecto se debe gracias a la limitación de producción de etileno por el gas carbónico, dado que el etileno impacta en las frutas acelerando la madurez; adicionalmente, si se tiene en cuenta que los mohos son microorganismos aeróbicos, la disminución en la concentración de oxígeno en la atmósfera limita su desarrollo.

          .tarjeta.color-acento-botones.p-3(x="50%" y="91.9%" numero="")
            .h5.mb-2 Bacterias
              p Las bacterias Gram-negativas son más sensibles al CO2 que las Gram-positivas. Atmósferas con CO2 y O2 suelen ser más fuertes que aquellas que contienen sólo gas carbónico.

          .tarjeta.color-acento-botones.p-3(x="94.5%" y="30.6%" numero="")
            .h5.mb-2 Influencia del O3
              p Este factor tiene una gran influencia en los alimentos, ya que el ozono, así como el gas carbónico, son los necesarios para poder generar retraso en los daños o alteraciones en las superficies de las carnes que son almacenadas.

          .tarjeta.color-acento-botones.p-3(x="94.5%" y="65.8%" numero="")
            .h5.mb-2 Concentración
              p La concentración de CO2 no debe exceder el 10 %. Las atmósferas de gas carbónico son utilizadas para poder generar un incremento en el tiempo de almacenamiento de carnes.
    .row.justify-content-center
      .col-md-10.movil
        figure
          img(src='@/assets/curso/temas/tema6/19.svg', alt='')

    h5.mt-5 <li type="disc">Composición de la atmósfera</li>
    p.mb-5(data-aos="fade-left") Los organismos indicadores en un alimento no representan un peligro directo para la salud, sin embargo, son grupos o tipos de microorganismos que, por su origen, procedencia, resistencia térmica, temperatura óptima para desarrollo y otras características, pueden indicar exposición, manipulación y conservación inadecuadas del producto alimenticio. Son útiles también para indicar la presencia de un peligro potencial para la salud, cuando se consideran, por ejemplo, el mismo origen o procedencia. Generalmente, estos organismos o pruebas relacionadas pueden indicar:

    .row.mb-5.justify-content-center
      .col-md-8
        .row.justify-content-center
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema6/20.svg' alt='AvatarTop')
              .tarjeta.color(style="background-color:#E3E7DF") 
                .p-4
                  p(style="color>#0000") #[b a)] La posible presencia de patógenos, toxinas.

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema6/21.svg' alt='AvatarTop')
              .tarjeta.color(style="background-color:#E3E7DF")
                .p-4
                  p(style="color>#0000") #[b b)] La posibilidad de prácticas inadecuadas de higiene durante la producción, el procesamiento, el almacenaje y/o la distribución.

    .row.justify-content-center
      .col-10
        p Los organismos indicadores son usados generalmente para definir la contaminación generada por origen fecal o falla en la higiene durante el proceso. Las bacterias coliformes y la Escherichia coli son dos indicadores que se usan con frecuencia para este fin; por ejemplo, la leche pasteurizada no debe contener este tipo de organismos, ya que, al ser positiva su presencia, indica que el proceso se desarrolló de manera inadecuada, que posiblemente se presentó una recontaminación luego del procesamiento, o incluso un número inicial muy elevado en la leche cruda. 

    .row.justify-content-center 
      .col-md-10
        .cajon.p-4.mb-3(style="background-color:#FFFAD0")
          .row.justify-content-center.align-items-center
            .col-md-3.mb-3
              figure
                img(src='@/assets/curso/temas/tema6/22.png', alt='')
            .col-md-9
              p Normalmente, estos microorganismos patogénicos se generan en la misma fuente que los indicadores (ej.: la materia fecal es una fuente potencial de Salmonella spp.), la detección de E. Coli alerta sobre la presencia inminente de un grave peligro para la salud.
              p Los microorganismos indicadores deben ser de detección rápida y fácil; se deben distinguir fácilmente de la microbiota natural de alimentos y del agua; provenir del mismo origen y procedencia que el organismo patogénico; contar con unas características que generan multiplicación y también su muerte similar al micro organismo patogénico para el mismo tipo de alimento; y estar ausente o en cantidad mínima en el alimento cuando el patógeno esté ausente, pero no es una condición que esté dada en cualquier circunstancia, no siempre se encuentran dadas todas estas condiciones nombradas. 
              

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
