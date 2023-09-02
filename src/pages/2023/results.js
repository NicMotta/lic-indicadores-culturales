export const RESULTADOS_RESIDENCIA = {
  title: "Resultados de la Residencia",
  description: "Resultados de la Residencia",
  questions:[
    {
      id: 0,
      type: 'average',
      question: '¿Qué cantidad de personas trabajan en forma estable?',
      data: {
        min: 0,
        average: 3,
        max: 10
      }
    },
    {
      id: 1,
      type: 'average',
      question: '¿Cuántas de estas personas reciben algún tipo de remuneración de manera regular?',
      data: {
        min: 0,
        average: 3,
        max: 10
      }
    },
    {
      id: 2,
      type: 'average',
      question: '¿Cuántas de estas personas son voluntarias (sin ningún honorario)?',
      data: {
        min: 0,
        average: 3,
        max: 10
      }
    },
    {
      id: 3,
      type: 'rating',
      question: '¿En qué medida considerás que has alcanzado una gestión eficiente para el funcionamiento de tu residencia?',
      rating: 30,
    },
    {
      id: 4,
      type: 'options',
      question: '¿En que área considerás que la residencia alcanzó un mejor nivel de gestión?',
      options: [
        { name: 'Planificación', value: 3 },
        { name: 'Comunicación', value: 2 },
        { name: 'Administración', value: 4 },
        { name: 'Acompañamiento del residente', value: 2 },
        { name: 'Evaluación / Retroalimentación', value: 4 },
        { name: 'Otra', value: 5}
      ]
    },
    {
      id: 5,
      type: 'average',
      question: '¿Cuántas ediciones o convocatorias se realizan en el año?',
      data: {
        min: 0,
        average: 3,
        max: 10
      }
    },
    {
      id: 6,
      type: 'donut',
      question: 'Si respondiste más de una, ¿son del mismo tipo?',
      data: [
        { name: 'Si', value: 3 },
        { name: 'No', value: 7 }
      ]
    },
    {
      id: 7,
      type: 'options',
      question: 'Si respondiste que no, ¿en qué difieren?',
      options: [
        { name: 'Duración', value: 3 },
        { name: 'Temáticas', value: 2 },
        { name: 'Cantidad de residentes', value: 4 },
      ]
    },
    {
      id: 8,
      type: 'average',
      question: '¿Cuántas semanas de duración en promedio tienen habitualmente tus programas de Residencia?',
      data: {
        min: 0,
        average: 3,
        max: 10
      }
    },
    {
      id: 8,
      type: 'average',
      question: '¿Qué cantidad aproximada de artistas participan habitualmente en una misma edición - convocatoria?',
      data: {
        min: 0,
        average: 3,
        max: 10
      }
    },
    {
      id: 7,
      type: 'options',
      question: '¿Cuál de los siguientes  formatos define a tus programas?',
      options: [
        { name: 'Grupal', value: 3 },
        { name: 'Individual', value: 2 },
        { name: 'Ambas', value: 4 },
      ]
    },
    {
      id: 7,
      type: 'options',
      question: '¿La convocatoria de tu residencia tiene algún tipo de direccionamiento?',
      options: [
        { name: 'Temático', value: 3 },
        { name: 'Técnico', value: 2 },
        { name: 'Disciplinar', value: 4 },
        { name: 'Libre', value: 4 },
        { name: 'Otro', value: 4 },
      ]
    },
  ]
}