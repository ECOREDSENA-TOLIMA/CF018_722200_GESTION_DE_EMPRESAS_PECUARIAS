<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Empaque y rotulado
    p.mb-5(data-aos="fade-left") Según la Resolución 061252 del 3 de febrero de 2020, se deben cumplir las siguientes disposiciones para el empaque y rotulado.
    h4.mb-5.titulo-cuarto.mt-5 Capítulo V: Rotulado alimentos para animales
    p.mb-5(data-aos="fade-left") En el Artículo 27, se habla de los rótulos o etiquetas de los alimentos para animales, que deben cumplir con los siguientes requisitos generales:
    .row.justify-content-center 
      AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
        .row.justify-content-center.align-items-center(titulo="Paso 1")
          .col-md-12.mb-4.mb-md-0
            p Para explicarlo, se tomarán los siguientes datos, donde se pretende formular una ración con 15 % de proteína en los ingredientes de #[b sorgo y pasta de soya], a partir de un #[b 9 % y 45 %] de proteína, respectivamente. Se debe razonar cada kilogramo de sorgo que sustituya por una cantidad igual de pasta de soya; equivaldrá a una ganancia neta de 360 g de proteína.
          .col-md-12.mb-5
            .row.justify-content-center.align-items-center 
              .col-md-5.offset-1
                p 450 g de proteína en 1 kg de pasta de soya
                p -90 g de proteína en 1 kg de sorgo
                p 390 diferencia neta
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema3/1.jpg', alt='')

        .row.justify-content-center.align-items-center(titulo="Paso 2")
          .col-md-12.mb-4.mb-md-0
            p La sustitución de ingredientes se da de la siguiente manera:
            .titulo-sexto.color-acento-contenido
              h5 Tabla 3
              span #[em Sustitución de ingredientes]

            .tabla-a.color-acento-contenido.mb-5 
              table
                caption Nota. Tomada de Shimada (2007).
                thead.text-white(style="background-color:#1B3F5E") 
                  tr
                    th Sorgo, kg
                    th Pasta de soya, kg 
                    th Proteína (%)
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
        
        .row.justify-content-center.align-items-center(titulo="Paso 3")
          .col-md-12.mb-4.mb-md-0
            p La fórmula correcta debe contener 83,33 % de sorgo y 16,67 % de pasta de soya, lo que muestra que es igual al resultado del método del cuadrado de #[i Pearson].
          .col-md-12.mb-5
            figure
              img(src='@/assets/curso/temas/tema3/2.jpg', alt='')

    p.mb-5(data-aos="fade-left") Artículo 28. Rotulado de alimento para animales de venta comercial: el rótulo debe contener la siguiente información:
    p.mb-5(data-aos="fade-left") #[b 1. Nombre o Razón social y dirección del titular del Registro.]

    .row.justify-content-center 
      .col-md-12
        .row.justify-content-center.align-items-center 
          .col-md-6
            ul.lista-ul.mb-3
              li 
                i.lista-ul__vineta
                | Nombre o razón social del fabricante, en el caso en que sea diferente al titular del registro.
              li 
                i.lista-ul__vineta
                | Cuando se trate de un producto elaborado por terceros, deberá figurar el nombre o la razón social de la empresa fabricante, así: Elaborado o Fabricado por (nombre o razón social del fabricante), para (nombre o razón social del titular del registro del producto).
              li  
                i.lista-ul__vineta
                | Cuando el producto surta un proceso de semielaboración por un tercero, debe figurar el nombre de la empresa fabricante, así: Elaborado o Fabricado por (nombre o razón social del fabricante), del semielaborado por (nombre o razón social del semielaborado).
              li  
                i.lista-ul__vineta
                | Para productos importados, se deberá colocar: “importado por” y su razón social.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/3.jpg', alt='')

    p.mb-5.mt-5 #[b 2. Nombre del producto y/o marca]
    
    .row.justify-content-center
      .col-md-10
        figure
          img(src='@/assets/curso/temas/tema3/4.svg', alt='')

    p.mb-5.mt-5 #[b 3. Composición garantizada. En caso de que el tipo de producto no contenga los nutrientes de la lista]

    .row.justify-content-center
      .col-md-10
        figure
          img(src='@/assets/curso/temas/tema3/5.svg', alt='')

    .row.justify-content-center.mb-5
      .col-md-12
        .cajon.p-4.mb-3(style="background-color:#FFFAD0") 
          .row.justify-content-center.align-items-center   
            .col-md-3.mb-2
              figure
                img(src='@/assets/curso/temas/tema3/6.png', alt='')
            .col-md-9
              p #[b 4. Lista de ingredientes:]
              ul.lista-ul.mb-3
                li 
                  i.lista-ul__vineta
                  | La lista de ingredientes deberá figurar en el rótulo.
                li 
                  i.lista-ul__vineta
                  | La lista de ingredientes deberá ir encabezada o precedida por el título “ingredientes” o “lista de ingredientes”.
                li  
                  i.lista-ul__vineta
                  | Todos los ingredientes deberán enunciarse por orden decreciente de inclusión en la fórmula típica cuantitativa.
                li  
                  i.lista-ul__vineta
                  | La lista de ingredientes debe expresarse con la identificación genérica, nombre químico o nombre científico.
                li  
                  i.lista-ul__vineta
                  | Cuando se usen diferentes materias primas o ingredientes con la misma finalidad funcional en un alimento para animales, estas podrán enunciarse usando la expresión “y/o”.

    .row.justify-content-center.mb-5
      .col-md-10
        .row.justify-content-center.align-items-center 
          .col-md-7
            p #[b 5.  Denominación del producto o indicación de uso. Se debe indicar la categoría que debería ser usada para identificar el producto.]
            p #[b 6. Cantidad recomendada o de uso del producto. La cantidad de alimento para animales a suministrar se debe expresar en sistema métrico decimal, y especificarse de acuerdo con la especie. En el caso de las premezclas, la cantidad de uso recomendada.]
            p #[b 7. Presentaciones comerciales o contenido neto.]
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema3/7.jpg', alt='')


    p.mb-5 #[b 8. Lote de fabricación.]

    .row.justify-content-center.mb-5
      .col-10
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-4
              .col-3.mb-3
                figure
                  img(src='@/assets/curso/temas/tema3/8.svg', alt='Texto que describa la imagen')
              p Cada envase deberá llevar grabada o marcada de cualquier modo, pero de forma visible, legible e indeleble, una indicación en clave o en lenguaje claro (numérico, alfanumérico, ranurados, barras, perforaciones, etc.) que permita identificar el lote.

          .col-md.tarjeta.color-acento-contenido.p-5
            .row.justify-content-center.mb-4
              .col-3.mb-3
                figure
                  img(src='@/assets/curso/temas/tema3/9.svg', alt='Texto que describa la imagen')
              p La palabra “Lote”, “No. Lote”, o la letra “L” deberá ir acompañada del código mismo o de una referencia al lugar donde aparece.

    p.mb-3 #[b 9. Fecha de vencimiento o expiración:]
    
    .row.justify-content-center.align-items-center
      .col-md-6
        ul.lista-ul.mb-3
          li 
            i.lista-ul__vineta
            | Las fechas de vencimiento y/o duración mínima se deben indicar: día, mes y año.
          li 
            i.lista-ul__vineta
            | La fecha de vencimiento o fecha límite de utilización deberá declararse con las palabras o abreviaturas: “Fecha límite de consumo recomendada”, sin abreviaturas, “Fecha de caducidad”, sin abreviaturas, “Fecha de vencimiento” o su abreviatura (F. Vto.), “Vence”, o su abreviatura (Ven.), “Expira”, o su abreviatura (Exp.), o cualquier otro equivalente, sin utilizar abreviaturas.
      .col-md-6
        figure
          img(src='@/assets/curso/temas/tema3/10.jpg', alt='Texto que describa la imagen')

          

</template>

<script>
export default {
  name: 'Tema3',
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
