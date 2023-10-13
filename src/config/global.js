export default {
  global: {
    componenteFormativo: 'Preparación de raciones para animales',
    descripcionCurso:
      'En la producción pecuaria, uno de los aspectos más importantes es la calidad de producción, como también, la reproducción de los animales, por ello, es de vital importancia planear de manera correcta la ración de alimento de los animales, garantizando que estos obtengan las vitaminas, minerales y nutrientes necesarios, para cumplir con las necesidades del mercado. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Formulación de raciones para animales',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Proceso de elaboración de raciones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Empaque y rotulado',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Almacenamiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Normatividad ambiental de alimentación animal aplicada',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Condiciones medioambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Características',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Parámetros técnicos',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Presentación de productos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Características',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Métodos',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Muestras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Métodos toma de muestras',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Técnicas de conservación',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Métodos de embalaje y envío',
            hash: 't_8_3',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Producto no conforme',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Registros y formatos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_18_722200.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Formulación de raciones para animales.',
      referencia: 'FAO. (s. f.). Alimentación animal.',
      tipo: 'Artículo',
      link: 'https://www.fao.org/3/a1564s/a1564s03.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Alimento para animales',
      significado:
        'Mezcla de insumos que contienen nutrientes que se encargan de responder a las necesidades y requerimientos de cada especie, según la edad, tipo y explotación o actividad para la que se destina el animal.',
    },
    {
      termino: 'Contaminación cruzada',
      significado:
        'Contaminación de materia prima, producto intermedio o producto terminado con otro material o producto durante el proceso de elaboración o almacenamiento. ',
    },
    {
      termino: 'Inocuidad',
      significado:
        'Característica o atributo de la calidad de un alimento, que determina que el consumo de este no genera riesgo para la salud animal.',
    },
    {
      termino: 'Ración',
      significado:
        'Es el tamaño real de un alimento que se da al animal, esta puede ser medida en miligramos, piezas, paquetes.',
    },
  ],
  referencias: [
    {
      referencia:
        'McDonald, P. (2007). Nutrición animal. Universidad Estatal a Distancia.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Agricultura y la Alimentación [FAO]. (1989). Manuales para el control de calidad de los alimentos. 9. Introducción a la toma de muestras de alimentos. ',
      link: 'https://www.fao.org/3/S8800S/S8800S.pdf ',
    },
    {
      referencia:
        'Organización Panamericana de la Salud [OPS]. (2015). Peligros biológicos. Inocuidad de Alimentos - Control Sanitario – HACCP.',
      link:
        ' https://www3.paho.org/hq/index.php?option=com_content&view=article&id=10838:2015-peligros-biologicos&Itemid=41432&lang=es',
    },
    {
      referencia:
        'Resolución 061252 de 2020. [Instituto Colombiano Agropecuario]. Por medio de la cual se establecen los requisitos y el procedimiento para el registro de los fabricantes e importadores de alimentos para animales, así como los requisitos y el procedimiento para el registro de alimentos para animales y se dictan otras disposiciones. Febrero 3 de 2020.',
      link:
        'https://www.ica.gov.co/getattachment/f7b59ff6-7bfc-477a-8110-40a14b80bd4e/2020R61252.aspx',
    },
    {
      referencia: 'Shimada, A. (2007). Nutrición animal. Editorial Trillas.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima -Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lina Marcela Ocampo Henao ',
          cargo: 'Experto temático',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza ',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Paola Moya Peralta ',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Carolina Coca Salazar ',
          cargo: 'Metodóloga',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Darío González ',
          cargo: 'Corrección de estilo',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
