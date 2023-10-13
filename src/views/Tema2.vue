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
              .titulo-sexto.color-acento-contenido
                h5 Figura 3
                span #[em Paso 1]
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema2/2.svg', alt='Pasta de soya 40%, Sorgo 10% y  17% de proteína cruda.')
              .col-md-4.mb-4.mb-md-0
                p.text-small Se trazan dos flechas, una desde cada uno de los ingredientes hacia el valor buscado, con el fin de poder hacer una resta en el sentido que indiquen las flechas. Los resultados deben ponerse con signo positivo.
              .col-md-4.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema2/3.svg', alt='Se resta 40 - 17 = 23 y 10-17= 7.')

          .row.justify-content-center(numero="2" titulo="Paso")
            .col-md-12.mb-4.mb-md-0
              p.text-small.mb-4 Se deben sumar los dos resultados producto de la resta, 23 + 7 = 30. Posteriormente, se toma cada uno de estos 3 datos y se expresa en porcentaje mediante una regla de tres.
            .row.justify-content-center.align-items-center.mb-5
              .col-md-8.mb-4.mb-md-0
                .titulo-sexto.color-acento-contenido
                  h5 Figura 4
                  span #[em Paso 2]
                figure
                  img(src='@/assets/curso/temas/tema2/5.svg', alt='La formula es la siguiente: Si 30=100, 7=X Donde X = 100+7/30 = 23,33 y si 30 = 100, 23=Y Y = 100+23/30 = 23,33')

          .row.justify-content-center(numero="3" titulo="Paso")
            .col-md-12.mb-4.mb-md-0
              p.text-small.mb-4 El cuadro deberá quedar ahora de la siguiente manera: 
            .row.justify-content-center.align-items-center.mb-5
              .titulo-sexto.color-acento-contenido
                h5 Figura 5
                span #[em Paso 3]
              .col-md-8.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema2/6.svg', alt='Pasta de soya igual a 40, se tiene 7 igual a 23,33 %, para sorgo igual 10, se tiene 23 igual a 76,67 %, para un total del 100%')

          .row.justify-content-center(numero="4" titulo="Paso")
            .col-md-12.mb-4.mb-md-0
              p.text-small.mb-4 Esto indica finalmente que la fórmula de la ración deberá llevar #[b 23,33 % de pasta de soya y 76,67 % de grano (sorgo)]. Esta formulación se puede comprobar y se hace multiplicando los porcentajes obtenidos por el contenido de proteína de cada ingrediente y se finaliza dividiendo el total entre 100:
            .row.justify-content-center.align-items-center.mb-5
              .titulo-sexto.color-acento-contenido
                h5 Figura 6
                span #[em Paso 4]
              .col-md-8.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema2/7.svg', alt='Pasta de soya igual a (23,33 por 40) dividido 100 igual a 9,333, Sorgo igual a (76,67 por 10) dividido 100 igual a 7,667')

          .row.justify-content-center(numero="5" titulo="Paso")
            .col-md-12.mb-4.mb-md-0
              p.text-small.mb-4 Al sumar estos 2 resultados #[b 9,333 + 7,667 = 17,0] el resultado es el porcentaje de proteína requerido en la porción al iniciar el ejercicio. En algunos casos, se hace necesario emplear algunos ingredientes fijos. Para este caso, se deberá suponer que a la ración se #[b le debe incluir 3 % de harina de hueso o 4 % de vitaminas y 0,1 % minerales de traza], el total de los ingredientes fijos será de #[b 4 %, por lo que con el 9 % restante se deberá cubrir el 17 % de proteína] necesario en la ración. En este momento, se debe dividir #[b 17 sobre 96], se multiplica el resultado #[b por 100, el resultado es 17.708], lo que indica la cantidad de proteína que se debe aportar con #[b 96 %] de la dieta para compensar el 4 % de los ingredientes fijos que no proporcionan ninguna cantidad de proteína.
            .row.justify-content-center.align-items-center.mb-5
              .titulo-sexto.color-acento-contenido
                h5 Figura 7
                span #[em Paso 5]
              .col-md-8.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/tema2/8.svg', alt='Se tiene 40 17.708, igualmente se tiene 10 a 17.708, luego 17.708 a 7,708 y 17.708 a 22,292 sobre 30. Luego se tiene Pasta de soya igual a 96 por 7,708 sobre 30, es igual a 24,67 Para Sorgo igual a 96 por 22,292 sobre 30, es igual a 71,33.')

          .row.justify-content-center(numero="6" titulo="Paso")
            .col-md-12.mb-4.mb-md-0
              p.text-small.mb-4 Con estos resultados, se indica que finalmente la fórmula debe llevar 71,33 % de sorgo y 24,67 % de pasta de soya; la manera de comprobarlo es multiplicando los valores de la fórmula por los datos de proteína de cada ingrediente de esta.
            .row.justify-content-center.align-items-center.mb-5
              .col-md-8.mb-4.mb-md-0
              .titulo-sexto.color-acento-contenido.offset-2
                h5 Tabla 1
                span #[em Información nutricional de proteína]

              .tabla-a.mb-5 
                table
                  caption Nota. Tomada de Shimada (2007).
                  thead.text-white(style="background-color:#1B3F5E")
                    tr
                      th Ingrediente
                      th Fórmula (%)
                      th Proteína (%)del ingrediente 
                      th Proteína (%) de la fórmula 
                  tbody
                    tr
                      td #[b Sorgo]
                      td.text-center 71,33
                      td.text-center 10
                      td.text-center 7,14
                    tr
                      td #[b Pasta de soya]
                      td.text-center 24,67
                      td.text-center 40
                      td.text-center 9,86
                    tr
                      td #[b Fijos]
                      td.text-center 4,00
                      td.text-center 0
                      td.text-center 0,00
                    tr
                      td 
                      td.text-center 100,00
                      td.text-center 
                      td.text-center 17,00
      .col-md-3.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/tema2/4.svg', alt='Texto que describa la imagen')
        
    h4.titulo-cuarto.mt-5 Cuadro compuesto
    p.mb-5(data-aos="fade-left") Es necesario reconocer que no siempre se trabaja con 2 ingredientes, por ello, se realizará este ejemplo con 4 ingredientes diferentes.

    TabsA.color-acento-botones.mb-5
      .tarjeta.color-primario--borde.p-4(titulo="PASO 1")
        .row.justify-content-center 
          .col-md-12
            p Con 4 ingredientes: #[b sorgo (10 % proteína), avena (15 %), gluten (25 %), pasta de soya (45 %)], para formular una dieta con #[b 20 % de proteína]. En este método, lo primero que se debe hacer es listar los ingredientes en orden ascendente o descendente de contenidos proteicos y, en frente, se debe poner el valor proteico buscado.
          .col-md-8
            .titulo-sexto.color-acento-contenido
              h5 Figura 8
              span #[em Paso 1]
            figure
              img(src='@/assets/curso/temas/tema2/10.svg', alt='Sorgo igual a 10, avena igual a 15, luego se tiene 20, gluten 25 y soya 45')
      .tarjeta.color-primario--borde.p-4(titulo="PASO 2")
        .row.justify-content-center 
          .col-md-12
            p Se deberán hacer las restas como en la explicación del método anterior del cuadrado simple:
          .col-md-8
            .titulo-sexto.color-acento-contenido
              h5 Figura 9
              span #[em Paso 2]
            figure
              img(src='@/assets/curso/temas/tema2/9.svg', alt='Se tiene que 10, 15 apuntan a 20, igualmente 25, 45 apuntan a 20, luego de 20 sale 25 y 5, posteriormente sale de 20 a 5 y 10.')

      .tarjeta.color-primario--borde.p-4(titulo="PASO 3")
        .row.justify-content-center 
          .col-md-12
            p Se suman los resultados parciales 25 +5 +5 + 10 = 45 y se aplica la regla de tres
          .col-md-8
            .titulo-sexto.color-acento-contenido
              h5 Figura 10
              span #[em Paso 3]
            figure
              img(src='@/assets/curso/temas/tema2/11.svg', alt='Se tiene que 100 por 10 sobre 45 es igual a 22,2. También se tiene que 100 por 5 sobre 45 es igual a 11,1. Posteriormente se tiene que 100 por 25 sobre 45 es igual a 55,6.')

      .tarjeta.color-primario--borde.p-4(titulo="PASO 4")
        .row.justify-content-center 
          .col-md-12
            p Se suman los resultados parciales 25 +5 +5 + 10 = 45 y se aplica la regla de tres
          .col-md-8
            .titulo-sexto.color-acento-contenido
              h5 Figura 11
              span #[em Paso 4]
            figure
              img(src='@/assets/curso/temas/tema2/12.svg', alt='Se tiene que sorgo 10, avena 15 a 20, da como resultado 25 igual a 55,6 %, y 5 igual a 11,1 %. También se tiene que gluten 25, soya 45 a 20 se tiene 5 igual a 11,1 %, y 10 igual a 22,2 %.')

      .tarjeta.color-primario--borde.p-4(titulo="PASO 5")
        .row.justify-content-center 
          .col-md-12
            p Estos resultados indican que se requiere de sorgo 55,6, gluten y avena 11,1 y soya 22,2 en la dieta a formular; se comprueba multiplicando los valores obtenidos por su contenido de proteína correspondiente y dividido en 100, #[b los resultados son sorgo 5,560, avena 1,665, gluten 2,775 y soya 2,290]; al sumar estos resultados, se tiene como resultado #[b 19,99] que, en otras palabras, es el 20 % requerido al iniciar la formulación.
    
    h4.titulo-cuarto.mt-5 Método de sustitución

    p.mb-5(data-aos="fade-left") Este método se encarga de definir la cantidad de proteína que se aumenta o disminuye en la fórmula sustituyendo un ingrediente por otro.

    TabsC.color-primario
      .py-3.py-md-4(titulo="Paso 1")
        .row.justify-content-center
          .col-md-12.mb-4.mb-md-0
            p Para explicarlo, se tomarán los siguientes datos, donde se pretende formular una ración con 15 % de proteína en los ingredientes de sorgo y pasta de soya, a partir de un 9 % y 45 % de proteína, respectivamente. Se debe razonar cada kilogramo de sorgo que sustituya por una cantidad igual de pasta de soya; equivaldrá a una ganancia neta de 360 g de proteína.
            p 450 g de proteína en 1 kg de pasta de soya
            p -90 g de proteína en 1 kg de sorgo
            p 390 diferencia neta
          .col-md-12
            figure
              img(src='@/assets/curso/temas/tema2/13.png', alt='imagen decorativa')
      
      .py-3.py-md-4(titulo="Paso 2")
        .row.justify-content-center.align-items-center
          //- .col-md-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/15.jpg', alt='imagen decorativa')
          .col-md-9
            p La sustitución de ingredientes se da de la siguiente manera:
            .titulo-sexto.color-acento-contenido
              h5 Tabla 2
              span #[em Sustitución de ingredientes]
            .tabla-a.color-acento-contenido.mb-5 
              table
                caption Nota. Tomada de Shimada (2007).
                thead
                  tr
                    th Norma
                    th Año
                    th Componente
                tbody.text-center
                  tr
                    td 100,0
                    td N/A
                    td 9,00
                  tr
                    td 99,0
                    td 1,00
                    td 9,36
                  tr
                    td 98,00
                    td 2,00
                    td 9,72
                  tr
                    td 97,00
                    td 3,00
                    td 10,08
                  tr
                    td 96,00
                    td 4,00
                    td 10,44
                  tr
                    td 84,00
                    td 16,00
                    td 14,76
                  tr
                    td 83,33
                    td 17,00
                    td 15,00
                    

      .py-3.py-md-4(titulo="Paso 3")
        .row.justify-content-center
          .col-md-12.mb-4.mb-md-0
            p La fórmula correcta debe contener 83,33 % de sorgo y 16,67 % de pasta de soya, lo que muestra que es igual al resultado del método del cuadrado de Pearson.
          .col-md-12
            figure
              img(src='@/assets/curso/temas/tema2/14.png', alt='imagen decorativa')

    h4.titulo-cuarto.mt-5 Métodos con aplicaciones de tecnología
    
    p(data-aos="fade-left") Los métodos mencionados anteriormente son útiles para los técnicos que deban #[b formular raciones] con pocos ingredientes, esto se da normalmente en organizaciones pecuarias pequeñas. Cuando se debe emplear un número mayor de raciones, con mayor número de materias primas y nutrientes adicionales, como #[b aminoácidos, vitaminas y minerales], y reducir costos, se recomienda utilizar software y tecnologías diseñadas para esta tarea; estas herramientas son normalmente usadas por empresas que se dedican a la fabricación de alimentos. 

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
