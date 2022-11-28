const products = [
  {
    _id: "1",
    name: "Electrocardiografo 3 Canales Edan SE-301.",
    image: "/images/1.png",
    description:
      "Pantalla LCD a color plegable, para visualización de ondas. Impresora térmica incorporada de alta resolución. Fuente de alimentación AC / DC. Batería recargable Li-ion, con duración de 6,5 horas. Almacenamiento de datos de paciente: 500 ECG. Filtrado digital.Ajuste automático de línea de base. Modo de trabajo Auto / Manual Detección y alerta de desconexión. Medición e interpretación de ECG automático.",
    price: 4799999,
    countInStock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    _id: "2",
    name: "Succionador O Aspirador de Secreciones",
    image: "/images/2.png",
    description:
      "El aspirador de secreciones ADS100 es una unidad de succión portable diseñada para ser utilizada en la eliminación de fluidos en las vías respiratorias y para eliminar material infeccioso de heridas. Puede ser usado durante cirugía en la sala de operación o en la habitación del paciente.",
    price: 499900,
    countInStock: 10,
    rating: 2,
    numReviews: 2,
  },
  {
    _id: "3",
    name: "Concentrador de oxigeno portátil Inogen",
    image: "/images/3.png",
    description:
      "De los concentradores de oxígeno portátiles disponibles hoy en día en el mercado, Inogen One G5 ofrece la mayor cantidad de oxígeno por kilogramo. Gracias a sus niveles de flujo de 1 a 6, Inogen One G5 está diseñado para aumentar notablemente la independencia de la mayoría de las personas que utilizan suplemento de oxígeno las 24 horas del día, los 7 días de la semana. Se puede cargar en casa o en cualquier lugar al que vaya, lo que brinda a los pacientes la libertad de tener oxígeno en cualquier momento y en cualquier lugar.",
    price: 9277839,
    countInStock: 0,
    rating: 3.7,
    numReviews: 40,
  },
  {
    _id: "4",
    name: "Ventilador SV600/SV800 – Mindray",
    image: "/images/4.png",
    description:
      "Ventilador universal de gama alta Alta resolución de pantalla 1920 x 1080 pixeles. Amplia pantalla de 15.6″ (SV600 y 18.5″ (SV800) con rotación de 360°. Modo de ventilación adaptiva( AMV) e Intellicycle. Solución de primeros auxilios: Modo CPRV para facilitar la reanimación. Visualización gráfica del pulmón( PulmoSight). Interfaz intuitiva que permite fácil adaptabilidad para el usuario. Válvula de exhalación autoclavable e incorporada en el equipo. Módulos Plug n Play que incluyen SpO2 y CO2",
    price: 377899,
    countInStock: 10,
    rating: 5,
    numReviews: 9,
  },
  {
    _id: "5",
    name: "Bomba de Infusión de jeringa HK-400",
    image: "/images/5.png",
    description:
      "Dimensiones: 300x12x300mm. Peso neto: 1.8KG. Nivel impermeable: IP X 3. Presión de oclusión: (40.0-160.0) kPa presión de oclusión ajustable: bajo medio alto. Batería: Batería recargable del polímero de litio, 7.4V, 1900mAh. Tiempo de carga de la batería: 10 horas en funcionamiento. 3 horas apagado. Tiempo de funcionamiento de la batería: > 6 horas a 5 ml / h. Condiciones de operación: Temperatura: 5 ℃ -40 ℃ humedad relativa: 10-95%, presión atmosférica: 86-106kPa. Condiciones de transporte: Temperatura: -20 ℃ -60 ℃, humedad relativa: 10-95%, presión atmosférica: 50-106kPa. Condiciones de almacenaje. Temperatura: -20 ℃ -45 ℃, humedad relativa: 10-95%, presión atmosférica: 50-106kPa",
    price: 5638749,
    countInStock: 7,
    rating: 3,
    numReviews: 2,
  },
  {
    _id: "6",
    name: "Monitor de paciente Mindray",
    image: "/images/6.png",
    description:
      "Rendimiento avanzado, fácil de usar y de alta durabilidad que permiten una confianza en las decisiones clínicas y mayor tiempo en el cuidado del paciente. Rendimiento avanzado: La serie uMEC de monitores sirve a las necesidades médicas ofreciendo una medición precisa y estable de parámetros esenciales. Cuando el monitoreo es fiable, usted puede tener naturalmente más confianza en sus decisiones clínicas. Fácil de usar: uMEC ayuda a simplificar el flujo de trabajo y mejorar la eficiencia proporcionando una interfaz intuitiva para ayudar a aplicaciones más rápidas y fáciles. Los profesionales tienen más tiempo para el cuidado del paciente. Alta durabilidad: Para ser efectivo en ambientes diferentes, uMEC  pasó por pruebas estrictas de seguridad y fiabilidad eléctrica. Obteniendo, de esta manera, un equipo con una larga vida útil.",
    price: 7834729,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: "7",
    name: "Ventilación grado ICU",
    image: "/images/7.png",
    description:
      "Una gama completa de modos de ventilación grado ICU cumple con los requerimientos a través de todas las etapas de la anestesia. El mezclador de gas digital permite establecer de manera más fácil y más precisa el flujo de gas fresco. Con un módulo de CO2 de ranura única mejorada o la capacidad del agente anestésico de ranura doble, los módulos Mindray “Plug-and-Play” Multi-Gas proporcionan un análisis completo de 2, EtO2, CO2, N2O de cada respiración, autodetección de cinco agentes anestésicos, así como BIS y NMT. Predicción de AA, la tendencia muestra la tendencia de flujo de gas fresco de O2 para FiO2 y EtO2.",
    price: 2945521,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: "8",
    name: "Máquina de Anestesia A-7 Mindray",
    image: "/images/8.png",
    description:
      "Una gama completa de modos de ventilación grado ICU cumple con los requerimientos a través de todas las etapas de la anestesia. El mezclador de gas digital permite establecer de manera más fácil y más precisa el flujo de gas fresco. Con un módulo de CO2 de ranura única mejorada o la capacidad del agente anestésico de ranura doble, los módulos Mindray “Plug-and-Play” Multi-Gas proporcionan un análisis completo de 2, EtO2, CO2, N2O de cada respiración, autodetección de cinco agentes anestésicos, así como BIS y NMT. Predicción de AA, la tendencia muestra la tendencia de flujo de gas fresco de O2 para FiO2 y EtO2.",
    price: 24728779,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: "9",
    name: "ULTRASONIDO: Aplio-I Series",
    image: "/images/9.png",
    description:
      "Conéctese con la nueva tecnología iBeam + de Aplio para obtener un nivel completamente nuevo de precisión de diagnóstico y capacidad de imágenes con Aplio i-series / Prism Edition. Cree vías de diagnóstico óptimas con la abundancia de herramientas avanzadas de diagnóstico e intervención proporcionadas en Aplio i-series / Prism Edition. Colabore con otras modalidades, compañeros y expertos para mejorar su productividad y capacidad clínica..",
    price: 757529,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: "10",
    name: "Samsung SonoAce X8 Ultrasound Machine",
    image: "/images/10.png",
    description:
      "El Medison SonoAce X8 es el gemelo mecánico del Philips HD9 con características similares pero una interfaz de usuario y un diseño exterior diferentes. Es una máquina de ultrasonido para la salud de la mujer de rango medio capaz con 4D que ya no está en producción.",
    price: 7587629,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: "11",
    name: "Arco en C General Electric Brivo Essential",
    image: "/images/11.png",
    description:
      "Essential es un arco en C móvil ideal para favorecer la productividad en cirugías y procedimientos quirúrgicos. Con tecnología de avanzada, captura imágenes al vuelo de máxima definición, brindándote detalles excepcionales y alto contraste, aún en modo de baja dosis. De características simples y fácil de maniobrar, produce resultados de gran alcance de principio a fin de la cirugía, ahorrando tiempo y esfuerzo, y permitiendo trabajar con comodidad aún en espacios reducidos. La integración de sistemas y el almacenamiento eficaz de datos completa la performance de OEC Brivo Essential, con amplia conectividad y rápida transferencia de información.",
    price: 285769,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    _id: "12",
    name: "Máquina de IRM TOSHIBA Vantage Titan 3T",
    image: "/images/12.png",
    description:
      "on Vantage Titan 3T, Canon ofrece un sistema de IRM vanguardista que incorpora un amplio calibre sin comprometer la calidad de imagen. El escáner es silencioso gracias a la tecnología Pianissimo que presenta gradientes recubiertos al vacío. La interfaz de usuario gráfica e intuitiva M-Power permite un funcionamiento rápido, sencillo y efectivo del escáner. La serie Vantage Titan de Canon proporciona una comodidad insuperable al paciente combinando un imán corto de 1,6 metros con una abertura ancha de 71 cm para que el paciente sienta menos ansiedad y para permitir explorar el 80% del cuerpo empezando por los pies.",
    price: 277869,
    countInStock: 0,
    rating: 5,
    numReviews: 0,
  },
];

export default products;
