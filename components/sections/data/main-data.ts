export const quinceMainData = {
  hero: {
    name: "Paola Elizabeth",
    subtitle: "¡Mi Bat Mitzvah!",
    backgroundImage: "/images/quince3.jpeg",
    quote:
      "La vida es un viaje mágico, y hoy celebro un capítulo especial lleno de sueños y esperanza.",
    backgroundCarrouselImages: [
      "/images/paola01.jpeg",
      "/images/paola02.jpeg",
      "/images/paola03.jpeg",
      "/images/paola04.jpeg",
    ],
  },
  welcomeSection: {
    message:
      "Con mucha alegría y emoción, te invito a celebrar mi Bat Mitzvah. Será un día muy especial, lleno de significado, amor y momentos inolvidables. ¡Espero contar con tu presencia para compartir esta gran alegría y hacer de este día algo único!",
    backgroundImage: "/images/carruaje.png",
  },
  event: {
    celebrant: "Paola Elizabeth",
    //Oscar Ramírez Capultitla y el mío es Edna Areli Serrano Ortíz
    parents: {
      father: "Oscar Ramírez Capultitla",
      mother: "Edna Areli Serrano Ortíz",
      message: `Hoy, mi corazón rebosa de gratitud. 
      Agradezco a Dios por guiarme y bendecirme en cada paso de mi vida, 
      y a mis padres por su amor, su ejemplo y su apoyo constante. 
      Hace doce años mis padres agradecieron a Dios por mi llegada al mundo. 
      Hoy, yo agradezco por ellos, por su infinito amor, 
      paciencia y por enseñarme el valor de la fe y la familia.`,
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
        "/images/paola01.jpeg",
      "/images/paola02.jpeg",
      "/images/paola03.jpeg",
      "/images/paola04.jpeg",
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
      "/images/paola01.jpeg",
      "/images/paola02.jpeg",
      "/images/paola03.jpeg",
      "/images/paola04.jpeg",
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
      "/images/paola01.jpeg",
      "/images/paola02.jpeg",
      "/images/paola03.jpeg",
      "/images/paola04.jpeg",
    ],
    thankYouMessage:
      "¡Gracias por confirmar tu asistencia! Nos alegra que puedas acompañarnos en este día tan especial.",
  },
  gifts: {
    title: "Lista de Regalos",
    subtitle: "Tu presencia es el mejor regalo, pero si deseas contribuir, aquí tienes algunas ideas.",
    message:
      "Agradezco de corazón tu generosidad y apoyo en este día tan especial. ¡Gracias por ser parte de mi vida!",
    giftsOptions: [
      {
        id: "lluviaSobres",
        name: "Lluvia de Sobres",
        icon: "💌",
        description:
          "Tu presencia es el mejor regalo, pero si deseas contribuir, una lluvia de sobres sería muy apreciada.",
        image: "/images/gifts/envelope.png",
        link: "https://example.com/lluvia-de-sobres",
      },
      {
        id: "transferencia",
        name: "Transferencia Bancaria",
        icon: "🏦",
        description:
          "Si prefieres, puedes hacer una transferencia bancaria como regalo.",
        image: "/images/gifts/bank-transfer.png",
        link: "https://example.com/transferencia-bancaria",
      },
      {
        id: "mesaRegalos",
        name: "Mesa de Regalos",
        icon: "🎁",
        description:
          "Hemos creado una mesa de regalos con opciones que nos encantaría recibir.",
        image: "/images/gifts/gift-box.png",
        link: "https://example.com/mesa-de-regalos",
      }
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
        src: "/images/paola01.jpeg",
        alt: "Paola Elizabeth en sus XV años",
        caption: "Paola Elizabeth radiante en su día especial.",
      },
      {
        id: "image2",
        src: "/images/paola02.jpeg",
        alt: "Baile de Quinceañera",
        caption: "El emotivo primer baile de Paola Elizabeth.",
      },
      {
        id: "image3",
        src: "/images/paola03.jpeg",
        alt: "Corte de Pastel",
        caption: "El dulce momento del corte de pastel.",
      },
      {
        id: "image4",
        src: "/images/paola04.jpeg",
        alt: "Celebración con Familia y Amigos",
        caption: "Paola Elizabeth rodeada de sus seres queridos.",
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
    invitationUrl: "https://quince-vip-new-demo.vercel.app/",
    suggested_messages: [
  "¡Querida amiga! Te invito a celebrar conmigo el día más mágico de mi vida. ¡Espero verte brillar junto a mí!",
  "¡Familia querida! Este día especial no sería lo mismo sin ustedes. ¡Los espero con mucho amor!",
  "¡Hola! Me encantaría que seas parte de mi celebración de XV años. ¡Será una noche inolvidable!",
  "¡Queridos padrinos! Su presencia es fundamental en este momento tan especial. ¡Los espero con cariño!",
  "¡Amigos del alma! Vengan a celebrar conmigo esta nueva etapa. ¡Será una fiesta increíble!",
    ]
  }
};
