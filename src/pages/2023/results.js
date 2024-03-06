export const RESULTADOS_RESIDENCIA = {
  questions: [
    {
      type: "title",
      title: "GESTIÓN DE LA RESIDENCIA",
      subtitle:
        "Esta sección tiene como objetivo indagar sobre aquellas variables a partir de las cuales se desempeña la residencia, para relevar a partir de qué recursos se organiza, se gestiona y administra.",
    },
    {
      type: "options",
      question:
        "¿Cuál de las siguientes categorías define la organización de tu residencia?",
      options: [
        { name: "Asosiación Civil", value: 3 },
        { name: "Fundación", value: 2 },
        { name: "Cooperativa", value: 0 },
        { name: "Proyecto independiente", value: 12 },
        { name: "Casa Cultural", value: 0 },
        { name: "Centro Cultural", value: 0 },
        { name: "En proceso de formalización", value: 2 },
      ],
    },
    {
      type: "rating-list",
      question: "¿Cómo se sustenta principalmente la residencia?",
      options: [
        { name: "Becas y subsidios públicos", value: 3 },
        { name: "Becas y subsidios privados", value: 2 },
        { name: "Convenios y aportes institucionales", value: 3 },
        { name: "Donaciones (aportes privados)", value: 1 },
        { name: "Aportes propios", value: 3 },
        { name: "Pago de participantes", value: 3 },
        { name: "Venta de productos y/o servicios", value: 2 },
        { name: "Canje", value: 2 },
        { name: "Otros", value: 0 },
      ],
    },
    {
      type: "donut",
      question:
        "El lugar donde se realiza habitualmente la residencia u organización, ¿es una sede permanente?",
      data: [
        { name: "Si", value: 16 },
        { name: "No", value: 3 },
      ],
    },
    {
      type: "options",
      question: "En cualquier caso, esta sede es:",
      options: [
        { name: "Propia", value: 8 },
        { name: "Prestada", value: 2 },
        { name: "Alquilada", value: 9 },
        { name: "Otra", value: 0 },
      ],
    },
    {
      type: "options",
      question:
        "¿Qué canal de comunicación utilizás para difundir tu proyecto?",
      options: [
        { name: "Boca a boca", value: 13 },
        { name: "Instagram", value: 17 },
        { name: "Twitter / X", value: 0 },
        { name: "Whatsapp", value: 9 },
        { name: "Facebook", value: 4 },
        { name: "Trabajo en red", value: 10 },
        { name: "Medios especializados", value: 7 },
        { name: "Radio", value: 1 },
        { name: "TV", value: 0 },
        { name: "Diario", value: 3 },
        { name: "Otros", value: 7 },
      ],
    },
    {
      type: "donut",
      question:
        "¿Realizas habitualmente publicaciones que documenten tu residencia por fuera de las redes sociales?",
      data: [
        { name: "Si", value: 9 },
        { name: "No", value: 10 },
      ],
    },
    {
      type: "options",
      question: "En caso de que se realicen publicaciones, ¿en qué formato?",
      options: [
        { name: "Impresa", value: 3 },
        { name: "Digital", value: 4 },
        { name: "Ambas", value: 2 },
      ],
    },
    {
      type: "donut",
      question:
        "Para gestionar la residencia, ¿Contás con un equipo de trabajo estable?",
      data: [
        { name: "Si", value: 11 },
        { name: "No", value: 8 },
      ],
    },
    {
      type: "average",
      question: "¿Qué cantidad de personas trabajan en forma estable?",
      data: {
        min: 0,
        average: 3,
        max: 4,
      },
    },
    {
      type: "average",
      question:
        "¿Cuántas de estas personas reciben algún tipo de remuneración de manera regular?",
      data: {
        min: 0,
        average: 2,
        max: 4,
      },
    },
    {
      type: "average",
      question:
        "¿Cuántas de estas personas son voluntarias (sin ningún honorario)?",
      data: {
        min: 0,
        average: 0,
        max: 1,
      },
    },
    {
      type: "average",
      question:
        "¿En qué medida considerás que has alcanzado una gestión eficiente para el funcionamiento de tu residencia?",
      data: {
        min: 2,
        average: 3,
        max: 5,
      },
    },
    {
      type: "rating-list",
      question:
        "¿En que área considerás que la residencia alcanzó un mejor nivel de gestión?",
      options: [
        { name: "Planificación", value: 4 },
        { name: "Comunicación", value: 3 },
        { name: "Administración", value: 3 },
        { name: "Acompañamiento del residente", value: 5 },
        { name: "Evaluación / Retroalimentación", value: 4 },
        { name: "Otra", value: 0 },
      ],
    },
    {
      type: "title",
      title: "PERFORMANCE DE LA RESIDENCIA",
      subtitle:
        "Esta sección tiene como objetivo indagar el formato de tu residencia, con énfasis en sus características, programas, tipos de residentes y lo que refiere a su identidad. Conocer estos datos nos permitirá relevar información sobre el abanico de residencias existentes, sus incidencias en el territorio y sus alcances.",
    },
    {
      type: "average",
      question: "¿Cuántas ediciones o convocatorias se realizan en el año?",
      data: {
        min: 1,
        average: 4,
        max: 10,
      },
    },
    {
      type: "donut",
      question: "Si respondiste más de una, ¿son del mismo tipo?",
      data: [
        { name: "Si", value: 8 },
        { name: "No", value: 8 },
      ],
    },
    {
      type: "options",
      question: "Si respondiste que no, ¿en qué difieren?",
      options: [
        { name: "Duración", value: 0 },
        { name: "Temáticas", value: 0 },
        { name: "Cantidad de residentes", value: 0 },
      ],
    },
    {
      type: "average",
      question:
        "¿Cuántas semanas de duración en promedio tienen habitualmente tus programas de Residencia?",
      data: {
        min: 1,
        average: 5,
        max: 30,
      },
    },
    {
      type: "average",
      question:
        "¿Qué cantidad aproximada de artistas participan habitualmente en una misma edición - convocatoria?",
      data: {
        min: 1,
        average: 7,
        max: 50,
      },
    },
    {
      type: "options",
      question: "¿Cuál de los siguientes  formatos define a tus programas?",
      options: [
        { name: "Grupal", value: 7 },
        { name: "Individual", value: 4 },
        { name: "Ambas", value: 8 },
      ],
    },
    {
      type: "options",
      question:
        "¿La convocatoria de tu residencia tiene algún tipo de direccionamiento?",
      options: [
        { name: "Temático", value: 7 },
        { name: "Técnico", value: 0 },
        { name: "Disciplinar", value: 1 },
        { name: "Libre", value: 7 },
        { name: "Otro", value: 4 },
      ],
    },
    {
      type: "options",
      question:
        "En caso de que sea temático, seleccioná las opciones que corresponda:",
      options: [
        { name: "Ambiente y ecología", value: 0 },
        { name: "Niñez y adolescencia", value: 0 },
        { name: "Género", value: 0 },
        { name: "Vulnerabilidad social", value: 0 },
        { name: "Pueblos originarios", value: 0 },
        { name: "Historia local", value: 0 },
        { name: "Otros", value: 0 },
      ],
    },
    {
      type: "options",
      question: "¿Cuál es la disciplina “principal” que aborda tu residencia?",
      options: [
        { name: "Artes Visuales", value: 16 },
        { name: "Música", value: 0 },
        { name: "Artes escénicas", value: 0 },
        { name: "Literatura", value: 0 },
        { name: "Nuevas tecnologías", value: 0 },
        { name: "Audiovisuales", value: 0 },
        { name: "Danza", value: 0 },
        { name: "Otros", value: 3 },
      ],
    },
    {
      type: "options",
      question:
        "En caso de que la residencia trabaje principalmente artes visuales, seleccioná las opciones que corresponda:",
      options: [
        { name: "Pintura", value: 0 },
        { name: "Dibujo", value: 0 },
        { name: "Fotografía", value: 0 },
        { name: "Performance", value: 1 },
        { name: "Grabado", value: 0 },
        { name: "Instalación", value: 1 },
        { name: "Textil", value: 0 },
        { name: "Electro-digital", value: 0 },
        { name: "Arte público", value: 0 },
        { name: "Artivismo", value: 1 },
        { name: "Arte relacional", value: 1 },
        { name: "Todas", value: 12 },
        { name: "Otros", value: 0 },
      ],
    },
    {
      type: "options",
      question:
        "Durante tu último año ¿De qué origen han sido lxs residentes que recibiste?",
      options: [
        { name: "Argentina", value: 3 },
        { name: "Otros países de Latinoamérica", value: 2 },
        { name: "EEUU y Canadá", value: 2 },
        { name: "Europa", value: 3 },
        { name: "Asia", value: 1 },
        { name: "África", value: 1 },
        { name: "Oceanía", value: 2 },
      ],
    },
    // {
    //   type: "rating-list",
    //   question: "¿De qué provincia?",
    //   options: [
    //     { name: "Buenos Aires", value: 3 },
    //     { name: "Catamarca", value: 3 },
    //     { name: "Chaco", value: 3 },
    //     { name: "Chubut", value: 3 },
    //     { name: "Córdoba", value: 3 },
    //     { name: "Corrientes", value: 3 },
    //     { name: "Entre Ríos", value: 3 },
    //     { name: "Formosa", value: 3 },
    //     { name: "Jujuy", value: 3 },
    //     { name: "La Pampa", value: 3 },
    //     { name: "La Rioja", value: 3 },
    //     { name: "Mendoza", value: 3 },
    //     { name: "Misiones", value: 3 },
    //     { name: "Neuquén", value: 3 },
    //     { name: "Río Negro", value: 3 },
    //     { name: "Salta", value: 3 },
    //     { name: "San Juan", value: 2 },
    //     { name: "San Luis", value: 4 },
    //     { name: "Santa Cruz", value: 4 },
    //     { name: "Santa Fe", value: 4 },
    //     { name: "Santiago del Estero", value: 3 },
    //     { name: "Tierra del Fuego", value: 3 },
    //     { name: "Tucumán", value: 3 },
    //   ],
    // },
    {
      type: "options",
      question:
        "El perfil de las y los participantes al cual se orienta principalmente la residencia es:",
      options: [
        { name: "Artistas", value: 10 },
        { name: "Curadores", value: 0 },
        { name: "Investigadores", value: 0 },
        { name: "Críticos", value: 0 },
        { name: "Gestores", value: 0 },
        { name: "Todas", value: 9 },
        { name: "Otros", value: 0 },
      ],
    },
    {
      type: "rating",
      question:
        "¿Cuán significativo considerás que es el aporte que tu programa realiza en la carrera del artista residente?",
      rating: 30,
    },
    {
      type: "donut",
      question:
        "¿Mantenés vinculación con residentes una vez que ya terminaron su programa?",
      data: [
        { name: "Si", value: 18 },
        { name: "No", value: 1 },
      ],
    },
    {
      type: "title",
      title: "RELACIÓN CON LA COMUNIDAD Y EL AMBIENTE",
      subtitle:
        "Esta sección tiene como objetivo mapear las relaciones y los impactos que genera la residencia con su contexto, en particular con algunas poblaciones específicas, y considerando a la temática ambiental como un eje transversal a relevar.",
    },
    {
      type: "donut",
      question:
        "Por fuera de la residencia, ¿tu proyecto realiza otras actividades?",
      data: [
        { name: "Si", value: 19 },
        { name: "No", value: 0 },
      ],
    },
    {
      type: "options",
      question: "Si contestaste que sí, ¿cuáles?",
      options: [
        { name: "Talleres - capacitaciones", value: 10 },
        { name: "Investigación cultural", value: 2 },
        { name: "Conversatorios", value: 1 },
        { name: "Exhibiciones", value: 2 },
        { name: "Conciertos", value: 0 },
        { name: "Otros", value: 4 },
      ],
    },
    {
      type: "donut",
      question:
        "¿Realizan actividades orientadas a públicos específicos, como ser la población LGTBIQ+, jóvenes, niños, docentes, tercera edad, otrxs?",
      data: [
        { name: "Si", value: 11 },
        { name: "No", value: 8 },
      ],
    },
    {
      type: "options",
      question: "No, ¿por qué?",
      options: [
        { name: "Las desconozco", value: 0 },
        { name: "Faltan herramientas", value: 1 },
        { name: "No forma parte de nuestra propuesta", value: 4 },
        { name: "No se me ocurrió", value: 0 },
        { name: "Otros", value: 3 },
      ],
    },
    {
      type: "rating-list",
      question:
        "En caso de que lo hagan, ¿qué grado de implicancia percibís que tiene tu residencia en relación a estos grupos y sus problemáticas?",
      options: [
        { name: "Personas de la tercera edad", value: 2 },
        { name: "Madres solteras", value: 4 },
        { name: "LGBTIQ", value: 3 },
        { name: "Jóvenes", value: 4 },
        { name: "Niñeces", value: 3 },
        { name: "Personas con discapacidad", value: 3 },
        { name: "Comunidad científica", value: 4 },
      ],
    },
    {
      type: "options",
      question: "¿Desde qué prácticas te vinculas con estos grupos?",
      options: [
        { name: "Visitas", value: 7 },
        { name: "Talleres", value: 12 },
        { name: "Actividades lúdicas", value: 5 },
        { name: "Eventos abiertos / públicos", value: 11 },
        { name: "Otros", value: 6 },
      ],
    },
    {
      type: "donut",
      question:
        "¿Realizan actividades frecuentemente en asociación con otros espacios y/o actores del territorio?",
      data: [
        { name: "Si", value: 18 },
        { name: "No", value: 1 },
      ],
    },
    {
      type: "options",
      question: "Si contestaste que sí, ¿con cuáles?",
      options: [
        { name: "Centros Culturales", value: 3 },
        { name: "Casa o talleres de artistas", value: 1 },
        { name: "Escuelas y universidades", value: 6 },
        { name: "Museos", value: 1 },
        { name: "Galerías de arte", value: 0 },
        { name: "Fundaciones o Asociaciones", value: 2 },
        { name: "Otras residencias", value: 0 },
        { name: "Otros", value: 5 },
      ],
    },
    {
      type: "donut",
      question:
        "¿Es de interés para tu proyecto trabajar con niñeces y/o juventudes del territorio en donde estás situado?",
      data: [
        { name: "Si", value: 13 },
        { name: "No", value: 6 },
      ],
    },
    {
      type: "options",
      question: "En el caso de que sí, ¿Qué necesitarías?",
      options: [
        { name: "Recursos Humanos", value: 6 },
        { name: "Recursos Materiales", value: 5 },
        { name: "Espacio físico", value: 0 },
        { name: "Otros", value: 1 },
      ],
    },
    {
      type: "donut",
      question:
        "Si no trabajas con niñeces y/o adolescentes ¿Te interesaría llevar adelante propuestas para estos públicos?",
      data: [
        { name: "Si", value: 3 },
        { name: "No", value: 3 },
      ],
    },
    {
      type: "options",
      question: "En el caso de que sí, ¿Qué necesitarías?",
      options: [
        { name: "Recursos Humanos", value: 2 },
        { name: "Recursos Materiales", value: 3 },
        { name: "Espacio físico", value: 0 },
        { name: "Financiamiento", value: 11 },
        { name: "Otros", value: 3 },
      ],
    },
    {
      type: "donut",
      question:
        "¿Estás al tanto de las instituciones (formales, no formales) que trabajan con niñeces y/o juventudes en el territorio en donde se sitúa tu proyecto?",
      data: [
        { name: "Si", value: 15 },
        { name: "No", value: 4 },
      ],
    },
    {
      type: "donut",
      question:
        "¿El programa está preparado para recibir residentes con hijes u otros familiares?",
      data: [
        { name: "Si", value: 9 },
        { name: "No", value: 10 },
      ],
    },
    {
      type: "donut",
      question:
        "¿Desarrollan habitualmente acciones relacionadas directamente con la temática ambiental?",
      data: [
        { name: "Si", value: 14 },
        { name: "No", value: 5 },
      ],
    },
    {
      type: "options",
      question:
        "¿Cuáles son los motivos por los cuales no desarrollan actividades con la temática ambiental?",
      options: [
        { name: "No forma parte de nuestra propuesta", value: 1 },
        { name: "Las desconozco", value: 1 },
        { name: "Faltan herramientas", value: 1 },
        { name: "No se me ocurrió", value: 0 },
        { name: "Otros", value: 2 },
      ],
    },
    {
      type: "options",
      question: "¿Qué acciones realizan dentro de esta temática?",
      options: [
        { name: "Separación de residuos", value: 1 },
        { name: "Uso de materiales no contaminantes", value: 2 },
        { name: "Uso eficiente de energía", value: 0 },
        { name: "Capacitaciones o convocatorias", value: 3 },
        {
          name: "Consumo de alimentos ecológicos de producción local y/o sustentable",
          value: 0,
        },
        {
          name: "Utilización de medios no motorizados para las actividades",
          value: 0,
        },
        {
          name: "Articulación con empresas, ONGs u organismos públicos que se dedican en forma específica a la cuestión ambiental",
          value: 4,
        },
        {
          name: "Tratamiento sobre los sobrantes / borradores de la producción artística",
          value: 0,
        },
        { name: "Otros", value: 4 },
      ],
    },
    {
      type: "donut",
      question:
        "¿Pudieron los participantes de la residencia incorporar dicho sistema?",
      data: [
        { name: "Si", value: 17 },
        { name: "No", value: 2 },
      ],
    },
    {
      type: "donut",
      question:
        "¿El programa está vinculado con empresas u organizaciones interesadas en la cuestión ambiental (la reducción de la huella hídrica y/o de carbono, etc)?",
      data: [
        { name: "Si", value: 5 },
        { name: "No", value: 14 },
      ],
    },
  ],
};

export const RESULTADOS_RESIDENTES = {
  questions: [
    {
      type: "title",
      title: "",
      subtitle:
        "Esta encuesta tiene como propósito relevar los alcances del proceso creativo ocurrido en diferentes organizaciones/residencias de la Red Quincho, a través de la mirada de los residentes que participaron de las mismas. Servirá para cotejar a futuro las transformaciones de quienes conforman la red y para obtener información acerca de las diferentes experiencias artísticas que realizan.",
    },
    {
      type: "average",
      question: "¿Cuál es tu edad?",
      data: {
        min: 0,
        average: 3,
        max: 10,
      },
    },
    {
      type: "options",
      question: "¿Cuál es tu género?",
      options: [
        { name: "Femenino", value: 3 },
        { name: "Masculino", value: 3 },
        { name: "Transgénero", value: 3 },
        { name: "No binarie", value: 3 },
        { name: "Pangénero", value: 3 },
        { name: "Otros", value: 3 },
      ],
    },
    {
      type: "options",
      question: "¿Cuál es tu nivel de estudios alcanzados?",
      options: [
        { name: "Primario", value: 3 },
        { name: "Secundario", value: 3 },
        { name: "Universitario", value: 3 },
        { name: "Posgrados", value: 3 },
        { name: "Doctorados", value: 3 },
        { name: "Autodidacta", value: 3 },
        { name: "Otros", value: 3 },
      ],
    },
    {
      type: "title",
      title: "EN RELACIÓN A LA CONVOCATORIA",
      subtitle: "",
    },
    {
      type: "rating",
      question:
        "¿Qué consideración general haces de tu paso por la residencia?",
      rating: 30,
    },
    {
      type: "donut",
      question:
        "¿Tuviste que postergar actividades o tuviste algún inconveniente para poder participar de la residencia?",
      data: [
        { name: "Si", value: 3 },
        { name: "No", value: 7 },
      ],
    },
    {
      type: "options",
      question: "¿Qué tipo?",
      options: [
        { name: "Laboral / Profesional", value: 3 },
        { name: "Familiar", value: 3 },
        { name: "Económico", value: 3 },
        { name: "Otros", value: 3 },
      ],
    },
    {
      type: "title",
      title: "EN RELACIÓN A LOS LENGUAJES",
      subtitle: "",
    },
    {
      type: "options",
      question:
        "¿Qué tipo de producción realizaste durante tu estadía en la residencia?",
      options: [
        { name: "Sonora", value: 3 },
        { name: "Visual", value: 3 },
        { name: "Audiovisual", value: 3 },
        { name: "Verbal", value: 3 },
        { name: "Corporal", value: 3 },
        { name: "Escritura", value: 3 },
        { name: "Procesual", value: 3 },
        { name: "Comunitaria", value: 3 },
        { name: "Otra", value: 3 },
      ],
    },
    {
      type: "options",
      question: "¿Con qué disciplinas se relaciona?",
      options: [
        { name: "Artes Visuales", value: 3 },
        { name: "Música", value: 3 },
        { name: "Artes Escénicas", value: 3 },
        { name: "Literatura", value: 3 },
        { name: "Nuevas tecnologías", value: 3 },
        { name: "Audiovisuales", value: 3 },
        { name: "Danza", value: 3 },
        { name: "Otros", value: 3 },
      ],
    },
    {
      type: "options",
      question:
        "En caso de que trabajes principalmente artes visuales, seleccioná las opciones que corresponda:",
      options: [
        { name: "Pintura", value: 3 },
        { name: "Dibujo", value: 2 },
        { name: "Fotografía", value: 4 },
        { name: "Performance", value: 4 },
        { name: "Grabado", value: 4 },
        { name: "Instalación", value: 4 },
        { name: "Textil", value: 4 },
        { name: "Electro-digital", value: 4 },
        { name: "Arte público", value: 4 },
        { name: "Artivismo", value: 4 },
        { name: "Arte relacional", value: 4 },
        { name: "Todas", value: 4 },
        { name: "Otros", value: 4 },
      ],
    },
    {
      type: "title",
      title: "EN RELACIÓN AL PROCESO DE TRABAJO",
      subtitle: "",
    },
    {
      type: "options",
      question: "En caso de haber respondido que sí, ¿cuáles?",
      options: [
        { name: "Proveedores y servicios", value: 3 },
        { name: "Instituciones", value: 2 },
        { name: "Consulta a personas", value: 4 },
        { name: "Artistas", value: 4 },
        { name: "Otros", value: 4 },
      ],
    },
    {
      type: "donut",
      question: "¿Trabajaste con asistentes?",
      data: [
        { name: "Si", value: 3 },
        { name: "No", value: 7 },
      ],
    },
    {
      type: "title",
      title: "EN RELACIÓN A LOS MATERIALES Y/O PRODUCCIÓN",
      subtitle: "",
    },
    {
      type: "donut",
      question: "¿Usaste materiales del lugar donde se ubica la residencia?",
      data: [
        { name: "Si", value: 3 },
        { name: "No", value: 7 },
      ],
    },
    {
      type: "options",
      question: "¿Cuáles eran los componentes del material?",
      options: [
        { name: "Naturales no orgánicos", value: 3 },
        { name: "Orgánicos", value: 2 },
        { name: "Industriales", value: 4 },
        { name: "Electrónicos", value: 4 },
        { name: "Reciclados", value: 4 },
        { name: "Otros", value: 4 },
      ],
    },
    {
      type: "donut",
      question: "¿Utilizaste materiales propios?",
      data: [
        { name: "Si", value: 3 },
        { name: "No", value: 7 },
      ],
    },
    {
      type: "donut",
      question: "¿Combinaste materiales?",
      data: [
        { name: "Si", value: 3 },
        { name: "No", value: 7 },
      ],
    },
    {
      type: "donut",
      question: "¿La producción tuvo componentes efímeros? Biodegradables",
      data: [
        { name: "Si", value: 3 },
        { name: "No", value: 7 },
      ],
    },
    {
      type: "options",
      question: "En caso de responder que sí, señalar que tipo:",
      options: [
        { name: "Performáticos", value: 3 },
        { name: "Orgánicos", value: 2 },
        { name: "Experimentales", value: 4 },
        { name: "Lumínicos", value: 4 },
        { name: "Otros", value: 4 },
      ],
    },
    {
      type: "options",
      question:
        "En caso de responder que sí utilizaste dispositivos electrónicos, estos fueron:",
      options: [
        { name: "Antiguos", value: 3 },
        { name: "Actuales", value: 2 },
        { name: "Ambos", value: 4 },
        { name: "Otros", value: 4 },
      ],
    },
    {
      type: "title",
      title: "EN RELACIÓN A LAS TEMÁTICAS",
      subtitle: "",
    },
    {
      type: "options",
      question:
        "¿Tu trabajo en la residencia se relaciona con alguno de estos temas?",
      options: [
        { name: "Ambiente y ecología", value: 3 },
        { name: "Niñez y adolescencia", value: 2 },
        { name: "Diversidad sexual", value: 4 },
        { name: "Vulnerabilidad / marginalidad social", value: 4 },
        { name: "Historia local", value: 4 },
        { name: "Otros", value: 4 },
      ],
    },
    {
      type: "donut",
      question:
        "¿Tu trabajo durante la residencia incluyó aspectos ligados a las niñeces / juventudes?",
      data: [
        { name: "Si", value: 3 },
        { name: "No", value: 7 },
      ],
    },
    {
      type: "options",
      question: "¿Desde qué prácticas?",
      options: [
        { name: "Actividades", value: 3 },
        { name: "Talleres", value: 2 },
        { name: "Temática de tu proyecto artístico", value: 4 },
        { name: "Otras", value: 4 },
      ],
    },
    {
      type: "donut",
      question:
        "Si no trabajas con niñeces y/o adolescentes ¿Te interesaría participar de las residencias en las cuales se puede concurrir con hijes?",
      data: [
        { name: "Si", value: 3 },
        { name: "No", value: 7 },
      ],
    },
    {
      type: "donut",
      question:
        "¿Te interesaría llevar adelante una propuesta para niñeces / juventudes?",
      data: [
        { name: "Si", value: 3 },
        { name: "No", value: 7 },
      ],
    },
    {
      type: "options",
      question: "En caso de que te interese, ¿Qué necesitarías?",
      options: [
        { name: "Recursos humanos", value: 3 },
        { name: "Recursos materiales", value: 2 },
        { name: "Espacio físico", value: 4 },
        { name: "Financiamiento", value: 4 },
        { name: "Otras", value: 4 },
      ],
    },
    {
      type: "donut",
      question:
        "¿Tu trabajo durante la residencia incluyó aspectos ligados a problemáticas ambientales?",
      data: [
        { name: "Si", value: 3 },
        { name: "No", value: 7 },
      ],
    },
    {
      type: "options",
      question: "¿Desde qué prácticas?",
      options: [
        { name: "Actividades", value: 3 },
        { name: "Talleres", value: 2 },
        { name: "Temática de tu proyecto artístico", value: 4 },
        { name: "Financiamiento", value: 4 },
        { name: "Otra", value: 4 },
      ],
    },
    {
      type: "donut",
      question:
        "Si no trabajas con problemáticas ambientales, ¿Te interesaría hacerlo?",
      data: [
        { name: "Si", value: 3 },
        { name: "No", value: 7 },
      ],
    },
    {
      type: "options",
      question: "En caso de que te interese, ¿Qué necesitarías?",
      options: [
        { name: "Recursos humanos", value: 3 },
        { name: "Recursos materiales", value: 2 },
        { name: "Espacio físico", value: 4 },
        { name: "Financiamiento", value: 4 },
        { name: "Otras", value: 4 },
      ],
    },
    {
      type: "title",
      title:
        "EN RELACIÓN A LOS CIRCUITOS DE COMUNICACIÓN Y REPERCUSIONES, Y EN RELACIÓN AL NIVEL EXPANSIVO",
      subtitle: "",
    },
    {
      type: "donut",
      question:
        "¿Finalizó la obra / proyecto que se había propuesto durante la estadía de la residencia?",
      data: [
        { name: "Si", value: 3 },
        { name: "No", value: 7 },
      ],
    },
    {
      type: "options",
      question:
        "En caso de que no la hayas finalizado, ¿En qué situación se encuentra actualmente?",
      options: [
        { name: "La finalicé después", value: 3 },
        { name: "Sigue en desarrollo", value: 2 },
        { name: "No la continué", value: 4 },
      ],
    },
    {
      type: "options",
      question:
        "¿Qué ocurrió con la obra producida a partir de su paso por la residencia?",
      options: [
        {
          name: "Se expone o estuvo expuesta en otros espacios / circuitos",
          value: 3,
        },
        { name: "Fue vendida", value: 2 },
        { name: "La conservo", value: 4 },
        { name: "Otras", value: 4 },
      ],
    },
    {
      type: "donut",
      question:
        "En caso de que estuvo o está expuesta en otros espacios, ¿La residencia colaboró a que la obra / proyecto encuentre un espacio de exposición?",
      data: [
        { name: "Si", value: 3 },
        { name: "No", value: 7 },
      ],
    },
    {
      type: "donut",
      question:
        "En caso de que no haya circulado en otros espacios o haya sido vendida, ¿Recibiste invitaciones de curadores, galerías, escuelas relacionadas a la producción?",
      data: [
        { name: "Si", value: 3 },
        { name: "No", value: 7 },
      ],
    },
    {
      type: "donut",
      question:
        "¿Consideras que sigue activo el proceso artístico en la residencia?",
      data: [
        { name: "Si", value: 3 },
        { name: "No", value: 7 },
      ],
    },
    {
      type: "donut",
      question:
        "¿El proceso creativo tuvo continuidad en otros espacios, residencias o becas?",
      data: [
        { name: "Si", value: 3 },
        { name: "No", value: 7 },
      ],
    },
    {
      type: "donut",
      question:
        "¿Generaste nuevas obras relacionadas a partir de la residencia?",
      data: [
        { name: "Si", value: 3 },
        { name: "No", value: 7 },
      ],
    },
    {
      type: "donut",
      question:
        "¿Tus producciones fueron reseñadas o aparecieron en catálogos y/o publicaciones?",
      data: [
        { name: "Si", value: 3 },
        { name: "No", value: 7 },
      ],
    },
    {
      type: "donut",
      question:
        "¿Mantiene contacto con otros residentes y/o agentes locales después de la experiencia?",
      data: [
        { name: "Si", value: 3 },
        { name: "No", value: 7 },
      ],
    },
    {
      type: "donut",
      question:
        "¿Regresó al lugar (locación, ciudad, región, país) de la residencia?",
      data: [
        { name: "Si", value: 3 },
        { name: "No", value: 7 },
      ],
    },
  ],
};
