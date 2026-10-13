export type Language = 'en' | 'es';

export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  image: string;
  imageWebp: string;
  badge: string;
  iconName: 'home' | 'building' | 'hotel' | 'truck';
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
}

export interface ContentData {
  lang: Language;
  nav: {
    home: string;
    services: string;
    about: string;
    gallery: string;
    contact: string;
    quoteBtn: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    badgeText: string;
  };
  servicesSection: {
    tag: string;
    title: string;
    subtitle: string;
    items: ServiceItem[];
    ctaText: string;
  };
  aboutSection: {
    tag: string;
    title: string;
    description: string;
    highlightTitle: string;
    highlightDesc: string;
    badgeAustin: string;
  };
  benefitsSection: {
    tag: string;
    title: string;
    subtitle: string;
    items: BenefitItem[];
  };
  gallerySection: {
    tag: string;
    title: string;
    subtitle: string;
    closeModal: string;
  };
  contactSection: {
    tag: string;
    title: string;
    description: string;
    directWhatsAppTitle: string;
    directWhatsAppDesc: string;
    directWhatsAppBtn: string;
    prefilledChoiceTitle: string;
    choices: {
      id: string;
      label: string;
      messageText: string;
    }[];
    info: {
      phoneTitle: string;
      emailTitle: string;
      locationTitle: string;
      locationText: string;
      hoursNote: string;
    };
  };
  ctaBanner: {
    title: string;
    description: string;
    primaryBtn: string;
    callBtn: string;
  };
  footer: {
    tagline: string;
    servicesTitle: string;
    quickLinksTitle: string;
    contactTitle: string;
    copyright: string;
    credit: string;
  };
  whatsapp: {
    tooltip: string;
    prefilledMessage: string;
  };
}

export const contentEn: ContentData = {
  lang: 'en',
  nav: {
    home: 'Home',
    services: 'Services',
    about: 'About Us',
    gallery: 'Gallery',
    contact: 'Contact',
    quoteBtn: 'Chat on WhatsApp'
  },
  hero: {
    eyebrow: 'PROFESSIONAL CLEANING SERVICES IN AUSTIN, TX',
    title: 'Your Trusted Cleaning Partners',
    description: 'Professional cleaning services for homes, businesses, Airbnb properties, and move-in or move-out needs.',
    primaryCta: 'Chat on WhatsApp',
    secondaryCta: 'Call (737) 781-2909',
    badgeText: 'Residential & Commercial Cleaning'
  },
  servicesSection: {
    tag: 'Our Confirmed Services',
    title: 'Tailored Cleaning for Every Need',
    subtitle: 'From private residences to commercial facilities and turn-key rentals, we deliver meticulous care across Austin.',
    ctaText: 'Chat on WhatsApp for this Service',
    items: [
      {
        id: 'residential',
        name: 'Residential Cleaning',
        shortDesc: 'Keep your home feeling fresh, comfortable, and cared for with professional residential cleaning services.',
        image: '/images/residential.jpg',
        imageWebp: '/images/residential.webp',
        badge: 'Home Care',
        iconName: 'home'
      },
      {
        id: 'commercial',
        name: 'Commercial Cleaning',
        shortDesc: 'Maintain a clean, welcoming environment for your business with professional commercial cleaning services.',
        image: '/images/commercial.jpg',
        imageWebp: '/images/commercial.webp',
        badge: 'Workspaces',
        iconName: 'building'
      },
      {
        id: 'airbnb',
        name: 'Airbnb Cleaning',
        shortDesc: 'Prepare your Airbnb property for its next guests with cleaning services focused on a clean, welcoming presentation.',
        image: '/images/airbnb.jpg',
        imageWebp: '/images/airbnb.webp',
        badge: 'Turnover Ready',
        iconName: 'hotel'
      },
      {
        id: 'moveinout',
        name: 'Move In / Move Out Cleaning',
        shortDesc: 'Get your space ready for a move with cleaning services designed for move-in and move-out situations.',
        image: '/images/moveinout.jpg',
        imageWebp: '/images/moveinout.webp',
        badge: 'Smooth Relocation',
        iconName: 'truck'
      }
    ]
  },
  aboutSection: {
    tag: 'About ATX Star Cleaning',
    title: 'Cleaning with Care. Service You Can Trust.',
    description: 'At ATX STAR CLEANING, our focus is professional cleaning services for residential and commercial spaces. Whether you need help with your home, business, Airbnb property, or a move, we invite you to contact us to discuss your cleaning needs.',
    highlightTitle: 'Committed to Austin, TX',
    highlightDesc: 'Built around consistency, clear communication, and pride in every corner we clean.',
    badgeAustin: 'Austin, Texas'
  },
  benefitsSection: {
    tag: 'Why Choose Us',
    title: 'Straightforward, Dedicated Cleaning',
    subtitle: 'Quality service and transparent communication define every interaction.',
    items: [
      {
        id: 'b1',
        title: 'Professional Cleaning Services',
        description: 'Detail-oriented cleaning tailored to the requirements of your specific space.'
      },
      {
        id: 'b2',
        title: 'Residential and Commercial Solutions',
        description: 'Comprehensive cleaning solutions for both private houses and bustling commercial offices.'
      },
      {
        id: 'b3',
        title: 'Cleaning for Different Property Needs',
        description: 'Flexible service options suited for regular maintenance, Airbnb turnovers, or relocations.'
      },
      {
        id: 'b4',
        title: 'Easy Contact and Quote Requests',
        description: 'Reach our team seamlessly via direct phone call, WhatsApp, or our quote form.'
      }
    ]
  },
  gallerySection: {
    tag: 'Visual Showcase',
    title: 'A Closer Look at Clean',
    subtitle: 'High standard presentation and attention to detail across residential and commercial spaces.',
    closeModal: 'Close full view'
  },
  contactSection: {
    tag: 'Get In Touch',
    title: "Let's Talk About Your Cleaning Needs",
    description: 'Get in touch with our team directly via WhatsApp or phone call for immediate assistance with your cleaning service requirements.',
    directWhatsAppTitle: 'Direct WhatsApp Connection',
    directWhatsAppDesc: 'Choose what you need help with below, and start an instant chat directly with our team:',
    directWhatsAppBtn: 'Open WhatsApp Chat Now',
    prefilledChoiceTitle: 'Select your inquiry for a fast quote:',
    choices: [
      {
        id: 'residential',
        label: 'Residential Cleaning Quote',
        messageText: "Hello ATX STAR CLEANING! I'm interested in requesting a quote for Residential Home Cleaning in Austin."
      },
      {
        id: 'commercial',
        label: 'Commercial Office Cleaning',
        messageText: "Hello ATX STAR CLEANING! I'd like to get a quote for Commercial / Office Cleaning in Austin."
      },
      {
        id: 'airbnb',
        label: 'Airbnb Turnover Cleaning',
        messageText: "Hello ATX STAR CLEANING! I'm an Airbnb host in Austin looking for professional turnover cleaning services."
      },
      {
        id: 'moveinout',
        label: 'Move In / Move Out Cleaning',
        messageText: "Hello ATX STAR CLEANING! I need a quote for Move In / Move Out cleaning for a property in Austin."
      },
      {
        id: 'general',
        label: 'General Inquiry / Free Quote',
        messageText: "Hello! I'm interested in your cleaning services. I'd like to request a quote."
      }
    ],
    info: {
      phoneTitle: 'Call or Text',
      emailTitle: 'Email Us',
      locationTitle: 'Primary Service Area',
      locationText: 'Austin, Texas and surrounding areas',
      hoursNote: 'Immediate assistance via WhatsApp and direct call.'
    }
  },
  ctaBanner: {
    title: 'Ready to Talk About Your Cleaning Needs?',
    description: 'Contact ATX STAR CLEANING directly to discuss the right cleaning service for your space.',
    primaryBtn: 'Chat on WhatsApp',
    callBtn: 'Call Now'
  },
  footer: {
    tagline: 'Professional cleaning services in Austin, Texas.',
    servicesTitle: 'Our Services',
    quickLinksTitle: 'Quick Links',
    contactTitle: 'Contact Info',
    copyright: 'ATX STAR CLEANING. All rights reserved.',
    credit: 'Created by Rueda La Rola Media'
  },
  whatsapp: {
    tooltip: 'Chat on WhatsApp',
    prefilledMessage: "Hello! I'm interested in your cleaning services. I'd like to request a quote."
  }
};

export const contentEs: ContentData = {
  lang: 'es',
  nav: {
    home: 'Inicio',
    services: 'Servicios',
    about: 'Nosotros',
    gallery: 'Galería',
    contact: 'Contacto',
    quoteBtn: 'Chatear por WhatsApp'
  },
  hero: {
    eyebrow: 'SERVICIOS PROFESIONALES DE LIMPIEZA EN AUSTIN, TEXAS',
    title: 'Su socio de confianza en limpieza',
    description: 'Servicios profesionales de limpieza para hogares, negocios, propiedades Airbnb y mudanzas.',
    primaryCta: 'Chatear por WhatsApp',
    secondaryCta: 'Llamar al (737) 781-2909',
    badgeText: 'Limpieza residencial y comercial'
  },
  servicesSection: {
    tag: 'Nuestros Servicios Confirmados',
    title: 'Limpieza a Medida para Cada Necesidad',
    subtitle: 'Desde residencias privadas hasta oficinas comerciales y alojamientos turísticos, brindamos máxima atención en Austin.',
    ctaText: 'Chatear por WhatsApp sobre este servicio',
    items: [
      {
        id: 'residential',
        name: 'Residential Cleaning',
        shortDesc: 'Mantenga su hogar limpio, agradable y cuidado con servicios profesionales de limpieza residencial.',
        image: '/images/residential.jpg',
        imageWebp: '/images/residential.webp',
        badge: 'Cuidado del Hogar',
        iconName: 'home'
      },
      {
        id: 'commercial',
        name: 'Commercial Cleaning',
        shortDesc: 'Mantenga un ambiente limpio y agradable para su negocio con servicios profesionales de limpieza comercial.',
        image: '/images/commercial.jpg',
        imageWebp: '/images/commercial.webp',
        badge: 'Espacios de Trabajo',
        iconName: 'building'
      },
      {
        id: 'airbnb',
        name: 'Airbnb Cleaning',
        shortDesc: 'Prepare su propiedad Airbnb para recibir a sus próximos huéspedes con una limpieza enfocada en una presentación agradable y cuidada.',
        image: '/images/airbnb.jpg',
        imageWebp: '/images/airbnb.webp',
        badge: 'Listo para Huéspedes',
        iconName: 'hotel'
      },
      {
        id: 'moveinout',
        name: 'Move In / Move Out Cleaning',
        shortDesc: 'Prepare su espacio para una mudanza con servicios de limpieza para entrar o salir de una vivienda.',
        image: '/images/moveinout.jpg',
        imageWebp: '/images/moveinout.webp',
        badge: 'Mudanza Impecable',
        iconName: 'truck'
      }
    ]
  },
  aboutSection: {
    tag: 'Sobre ATX Star Cleaning',
    title: 'Limpieza con cuidado. Servicio de confianza.',
    description: 'En ATX STAR CLEANING nos enfocamos en ofrecer servicios profesionales de limpieza para espacios residenciales y comerciales. Si necesita ayuda con su hogar, negocio, propiedad Airbnb o una mudanza, contáctenos para conversar sobre sus necesidades de limpieza.',
    highlightTitle: 'Comprometidos con Austin, TX',
    highlightDesc: 'Trabajamos con constancia, comunicación clara y orgullo en cada rincón que limpiamos.',
    badgeAustin: 'Austin, Texas'
  },
  benefitsSection: {
    tag: 'Por Qué Elegirnos',
    title: 'Limpieza Dedicada y Profesional',
    subtitle: 'Calidad en la presentación y comunicación transparente en cada servicio.',
    items: [
      {
        id: 'b1',
        title: 'Servicios profesionales de limpieza',
        description: 'Atención minuciosa al detalle adaptada a las características de su espacio.'
      },
      {
        id: 'b2',
        title: 'Soluciones residenciales y comerciales',
        description: 'Cobertura integral tanto para viviendas particulares como para instalaciones comerciales.'
      },
      {
        id: 'b3',
        title: 'Limpieza para diferentes necesidades inmobiliarias',
        description: 'Opciones versátiles para mantenimiento regular, rotación de huéspedes o cambios de residencia.'
      },
      {
        id: 'b4',
        title: 'Contacto sencillo y solicitudes de cotización',
        description: 'Comuníquese directamente mediante llamada o WhatsApp.'
      }
    ]
  },
  gallerySection: {
    tag: 'Muestra Visual',
    title: 'Un vistazo a la limpieza',
    subtitle: 'Ambientes ordenados y detalles cuidados en espacios residenciales y comerciales.',
    closeModal: 'Cerrar vista completa'
  },
  contactSection: {
    tag: 'Contacto Directo',
    title: 'Hablemos de sus necesidades de limpieza',
    description: 'Comuníquese directamente por WhatsApp o llamada telefónica para conversar con nuestro equipo de inmediato sobre el servicio que requiere.',
    directWhatsAppTitle: 'Conexión Directa por WhatsApp',
    directWhatsAppDesc: 'Seleccione abajo el motivo de su consulta para iniciar un chat instantáneo con nuestro equipo:',
    directWhatsAppBtn: 'Abrir Chat de WhatsApp Ahora',
    prefilledChoiceTitle: 'Seleccione su consulta para una cotización rápida:',
    choices: [
      {
        id: 'residential',
        label: 'Cotización para Limpieza Residencial',
        messageText: '¡Hola ATX STAR CLEANING! Quisiera solicitar una cotización para limpieza de hogar / residencial en Austin.'
      },
      {
        id: 'commercial',
        label: 'Limpieza Comercial / Oficinas',
        messageText: '¡Hola ATX STAR CLEANING! Me gustaría recibir una cotización para limpieza comercial / oficinas en Austin.'
      },
      {
        id: 'airbnb',
        label: 'Limpieza para Propiedades Airbnb',
        messageText: '¡Hola ATX STAR CLEANING! Tengo una propiedad Airbnb en Austin y necesito servicio de limpieza entre estancias.'
      },
      {
        id: 'moveinout',
        label: 'Limpieza de Entrada / Salida (Mudanzas)',
        messageText: '¡Hola ATX STAR CLEANING! Requiero cotización para limpieza profunda por mudanza (Move In / Move Out) en Austin.'
      },
      {
        id: 'general',
        label: 'Consulta General / Cotización Rápida',
        messageText: '¡Hola! Estoy interesado/a en sus servicios de limpieza y quisiera solicitar una cotización.'
      }
    ],
    info: {
      phoneTitle: 'Llamar o escribir',
      emailTitle: 'Enviar correo',
      locationTitle: 'Área de servicio principal',
      locationText: 'Austin, Texas y áreas metropolitanas',
      hoursNote: 'Atención ágil e inmediata por WhatsApp y llamada directa.'
    }
  },
  ctaBanner: {
    title: '¿Listo para hablar sobre sus necesidades de limpieza?',
    description: 'Contacte a ATX STAR CLEANING para conversar sobre el servicio de limpieza que necesita.',
    primaryBtn: 'Chatear por WhatsApp',
    callBtn: 'Llamar ahora'
  },
  footer: {
    tagline: 'Servicios profesionales de limpieza en Austin, Texas.',
    servicesTitle: 'Nuestros Servicios',
    quickLinksTitle: 'Enlaces Rápidos',
    contactTitle: 'Información de Contacto',
    copyright: 'ATX STAR CLEANING. Todos los derechos reservados.',
    credit: 'Creado por Rueda La Rola Media'
  },
  whatsapp: {
    tooltip: 'Chatear por WhatsApp',
    prefilledMessage: '¡Hola! Estoy interesado/a en sus servicios de limpieza y quisiera solicitar una cotización.'
  }
};
