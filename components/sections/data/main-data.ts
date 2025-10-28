export const quinceMainData = {
  hero: {
    name: "Paola Elizabeth",
    subtitle: "¡Mi Bat Mitzvah!",
    backgroundImage: "/images/quince3.jpeg",
    quote:
      "La vida es un viaje mágico, y hoy celebro un capítulo especial lleno de sueños y esperanza.",
    backgroundCarrouselImages: [
      "/images/pao16.jpg",
      "/images/pao17.jpg",
      "/images/pao18.jpg",
      "/images/pao19.jpg",
      "/images/pao20.jpg",
    ],
  },
  welcomeSection: {
    message:
      "Con mucha alegría y emoción, te invito a celebrar mi Bat Mitzvah. Será un día muy especial, lleno de significado, amor y momentos inolvidables. ¡Espero contar con tu presencia para compartir esta gran alegría y hacer de este día algo único!",
    backgroundImage: "/images/fondoPaola2.jpg",
  },
  event: {
    celebrant: "Paola Elizabeth",
    //Oscar Ramírez Capultitla y el mío es Edna Areli Serrano Ortíz
    parents: {
      father: "Oscar Ramírez Capultitla",
      mother: "Edna Areli Serrano Ortíz",
      message: `Con la Bendicion de Dios y de`,
      backgroundImage: "/images/fondoPaola1.png",
    },
    /**
     * Saraí Ramírez Reyes
Ángel González Pascual 
Aurora Chávez Capultitla
     */
    godparents: {
      godfather: "Ángel González Pascual",
      godmother: "Saraí Ramírez Reyes",
      additionalGodmother: "Aurora Chávez Capultitla",
    },
    date: {
      full: "Sábado 06 de Diciembre 2025",
      isoDate: "2025-12-06T10:00:00",
      day: "Sábado",
      dayNumber: "06",
      month: "Diciembre",
      year: "2025",
      date: "06 de diciembre 2025",
      mensaje1: "¡La cuenta regresiva ha comenzado!",
      mensaje2: "TAN SOLO FALTAN",
      backgroundCarrouselImages: [
        "/images/pao16.jpg",
      "/images/pao17.jpg",
      "/images/pao18.jpg",
      "/images/pao19.jpg",
      "/images/pao20.jpg",
      ],
    },
    //Misa a la 1pm parroquia Santa fe de Guadalupe, la Sauceda Guanajuato.
    ceremony: {
      time: "10:00 hrs.",
      venue: "Comunidad Am Israel",
      address: "Ayecatl s/n barrio la Asunción, Xochimilco, CDMX C.P 16040",
      type: "Ceremonia de Acción de Gracias",
      ubiLink: "https://maps.app.goo.gl/TsX6SuZoAm48YEfy7",
      ceremonyImage: "/images/paola02.jpeg",
    },
    party: {
      time: "15:00 hrs.",
      venue: "Salon Michmani",
      address: "Antiguo Canal Cuemanco 3, Pista Olímpica Virgilio Uribe, Xochimilco, 16034 Ciudad de México, CDMX",
      type: "Recepción",
      ubiLink: "https://maps.app.goo.gl/2Tm4GjEDhi3CVc5W7",
    },
    dressCode: "Formal - Rosa solo la quinceañera",
    restrictions: "",
  },
  timeline: {
    title: "Itinerario del Evento",
    timelineImage: "/images/paola04.jpeg",
    mensaje: `Cada momento de este día especial ha sido cuidadosamente planeado 
    para crear recuerdos inolvidables. 
    Desde la ceremonia hasta la celebración, cada detalle refleja el amor y 
    la alegría que compartimos. ¡Espero que disfrutes cada instante tanto como yo!`,
    images: [
      "/images/pao16.jpg",
      "/images/pao17.jpg",
      "/images/pao18.jpg",
      "/images/pao19.jpg",
      "/images/pao20.jpg",
    ],
    events: [
      {
        id: "event1",
        time: "10:00 hrs.",
        title: "Ceremonia Bat Mitzvah",
        description: "Ceremonia de Acción de Gracias en Comunidad Am Israel.",
        icon: "⛪",
      },
      {
        id: "event2",
        time: "15:00 hrs.",
        title: "Recepción",
        description: "Comida, fiesta y celebración.",
        icon: "🎉",
      },
      {
        id: "event4",
        time: "18:30 hrs.",
        title: "Vals",
        description: "Primer baile y apertura de la pista de baile.",
        icon: "💃",
      },
      {
        id: "event5",
        time: "20:00 hrs.",
        title: "Fiesta",
        description: "Celebracion y Fiesta.",
        icon: "🍰",
      },
    ],
  },
  dressCode:{
    title: "Código de Vestimenta",
    message: "¡Vístete para impresionar!",
    subtitle: "Código de vestimenta formal",
    restriction: "Restricción: No niños",
    backgroundImage: "/images/dressCode1.png",
  },
  countdown: {
    targetDate: "December 27, 2025 17:00:00",
    backgroundImage: "/images/countdown-bg.jpg",
  },
  attendance: {
    whatsappNumber: "5215567928323", //+52 1 55 6792 8323
    title: "CONFIRMACIÓN DE ASISTENCIA",
    message: "Respetuosamente",
    subtitle: "Confirmar antes del evento.",
    fields: {
      name: "Nombre completo",
      response: "¿Podrás acompañarme?",
      companions: "Nombre(s) de acompañante(s)",
      phone: "Número de celular",
      responseOptions: {
        yes: "¡Claro, ahí estaré!",
        no: "Lo siento, no podré asistir.",
      },
    },
    images:[
      "/images/pao16.jpg",
      "/images/pao17.jpg",
      "/images/pao18.jpg",
      "/images/pao19.jpg",
      "/images/pao20.jpg",
    ],
    thankYouMessage:
      "¡Gracias por confirmar tu asistencia! Nos alegra que puedas acompañarnos en este día tan especial.",
  },
  gifts: {
    title: "Lista de Regalos",
    subtitle: "Tu presencia es el mejor regalo, pero si deseas contribuir, aquí tienes algunas ideas.",
    message:
      "Tu presencia en mi Bat Mitzvah es el mejor regalo que podría recibir. Sin embargo, si deseas contribuir con un detalle especial, lo agradeceré profundamente.",
    giftsOptions: [
      
    ],
  },
  gallery: {
    title: "Recuerdos Especiales",
    subtitle: "Momentos inolvidables",
    description:
      "Cada imagen captura la esencia de este día tan especial. ¡Gracias por ser parte de estos recuerdos inolvidables!",
    images: [
      {
        id: "image1",
        src: "/images/pao01.jpg",
        alt: "Paola Elizabeth en sus XV años",
        caption: "",
      },
      {
        id: "image2",
        src: "/images/pao02.jpg",
        alt: "Baile de Quinceañera",
        caption: "",
      },
      {
        id: "image3",
        src: "/images/pao03.jpg",
        alt: "Corte de Pastel",
        caption: "",
      },
      {
        id: "image4",
        src: "/images/pao04.jpg",
        alt: "Celebración con Familia y Amigos",
        caption: "",
      },
      {
        id: "image6",
        src: "/images/pao06.jpg",
        alt: "Diversión en la Fiesta",
        caption: "",
      },
      {
        id: "image7",
        src: "/images/pao07.jpg",
        alt: "Baile con Padres",
        caption: "",
      },
      {
        id: "image8",
        src: "/images/pao08.jpg",
        alt: "Amigos y Familiares",
        caption: "",
      },  
      {
        id: "image9",
        src: "/images/pao09.jpg",
        alt: "Sonrisas Inolvidables",
        caption: "",
      },
      {
        id: "image10",
        src: "/images/pao10.jpg",
        alt: "Diversión Garantizada",
        caption: "",
      },
      {
        id: "image11",
        src: "/images/pao11.jpg",
        alt: "Celebrando Juntos",
        caption: "",
      },
      {
        id: "image12",
        src: "/images/pao12.jpg",
        alt: "Recuerdos para toda la Vida",
        caption: "",
      },  
      {
        id: "image13",
        src: "/images/pao13.jpg",
        alt: "Momentos de Alegría",
        caption: "",
      },
      {
        id: "image14",
        src: "/images/pao14.jpg",
        alt: "Fiesta y Diversión",
        caption: "",
      },
      {
        id: "image15",
        src: "/images/pao15.jpg",
        alt: "Un Día Inolvidable",
        caption: "",
      },
      {
        id: "image16",
        src: "/images/pao16.jpg",
        alt: "Celebración Especial",
        caption: "",
      },
      {
        id: "image17",
        src: "/images/pao17.jpg",
        alt: "Recuerdos Felices",
        caption: "",
      },
      {
        id: "image18",
        src: "/images/pao18.jpg",
        alt: "Diversión sin Fin",
        caption: "",
      },
      {
        id: "image19",
        src: "/images/pao19.jpg",
        alt: "Momentos para Recordar",
        caption: "",
      },
      {
        id: "image20",
        src: "/images/pao20.jpg",
        alt: "Celebrando la Vida",
        caption: "",
      },
    ],
    imagesUrls: [
      "/images/rapunzel1.jpeg",
      "/images/rapunzel2.jpeg",
      "/images/rapunzel3.jpeg",
      "/images/rapunzel4.jpeg",
      "/images/rapunzel5.jpeg",
      "/images/rapunzel6.jpeg",
      "/images/rapunzel7.jpeg",
      "/images/rapunzel8.jpeg",
    ],
  },
  qrcodeSection:{
    title: "Escanea el Código QR",
    celebrant: "Paola Elizabeth",
    message: "Para acceder fácilmente a la invitación en tu dispositivo móvil.",
    mainImage: "/images/qrcode-bg.jpg",
  },
  music: {
    src: "/music/quinceanera-song.mp3",
    title: "Canción de Quinceañera",
    artist: "Artista Invitado",
  },
  // 🎵 Configuración de audio
  audio: {
    src: "/audio/musica.mp3",
    fallbacks: ["/audio/musica.ogg", "/audio/musica.wav"],
    title: "Música de Fondo de Boda",
    startTime: 10, // 0:13 - Donde empieza la letra
    endTime: 200, // 1:25 - Final del segmento
    volume: 0.7, // 60% de volumen
    loop: true, // Loop en el rango especificado
    preload: "metadata", // Precargar solo metadatos
    enabled: true, // Control habilitado
    position: {
      desktop: { bottom: "2rem", right: "2rem" },
      mobile: { bottom: "1rem", right: "1rem" },
    },
    styling: {
      size: {
        desktop: "60px",
        mobile: "50px",
      },
      colors: {
        primary: "#e3aaaa",
        hover: "#d48c8c",
        background: "rgba(255, 255, 255, 0.8)",
        icon: "#333",
      },
    },
  },
  VIP_COLORS: {
    rosaAurora: '#E91E63',      // Rosa principal
    lavandaAurora: '#9C27B0',   // Púrpura principal
    oroAurora: '#FF9800',       // Naranja dorado
    blancoSeda: '#FFFFFF',      // Blanco puro
    cremaSuave: '#F5F5F5',      // Gris claro
    rosaIntensa: '#C2185B',     // Rosa intenso
    lavandaIntensa: '#7B1FA2',  // Púrpura intenso
    oroIntensio: '#F57C00',     // Naranja intenso
    rosaDelicada: '#F8BBD9'     // Rosa suave
  },
  customInvitations:{
    adminPassword: "admin1234",
    invitationUrl: "https://bat-mitzvah-paola-elizabeth.vercel.app/",
    suggested_messages: [
  "¡Querida amiga! Te invito a celebrar conmigo el día más mágico de mi vida. ¡Espero verte brillar junto a mí!",
  "¡Familia querida! Este día especial no sería lo mismo sin ustedes. ¡Los espero con mucho amor!",
  "¡Hola! Me encantaría que seas parte de mi celebración de XV años. ¡Será una noche inolvidable!",
  "¡Queridos padrinos! Su presencia es fundamental en este momento tan especial. ¡Los espero con cariño!",
  "¡Amigos del alma! Vengan a celebrar conmigo esta nueva etapa. ¡Será una fiesta increíble!",
    ]
  }
};
