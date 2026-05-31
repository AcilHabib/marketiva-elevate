export type Lang = "fr" | "ar" | "en";

export const LANGS: { code: Lang; label: string; native: string }[] = [
  { code: "fr", label: "French", native: "Français" },
  { code: "ar", label: "Arabic", native: "العربية" },
  { code: "en", label: "English", native: "English" },
];

export const dirOf = (lang: Lang): "rtl" | "ltr" =>
  lang === "ar" ? "rtl" : "ltr";

type Title = { lead: string; accent: string; tail?: string };

type ServiceText = { title: string; description: string; items?: string[] };
type Pillar = { title: string; text: string };

export type Dict = {
  nav: { about: string; services: string; clients: string; team: string; contact: string; cta: string };
  hero: {
    badge: string;
    title: Title;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { brands: string; specialists: string; scope: string };
  };
  about: {
    eyebrow: string;
    title: Title;
    p1: string;
    p2: string;
    pillars: Pillar[];
  };
  services: {
    eyebrow: string;
    title: Title;
    subtitle: string;
    items: Record<string, ServiceText>;
  };
  clientsSection: { eyebrow: string; title: Title; subtitle: string };
  team: {
    eyebrow: string;
    title: Title;
    subtitle: string;
    roles: Record<string, string>;
  };
  contact: {
    eyebrow: string;
    title: Title;
    subtitle: string;
    cardTitle: string;
    cardTagline: string;
    labels: { phone: string; email: string; location: string; locationValue: string };
    form: {
      name: string;
      email: string;
      message: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      submit: string;
    };
    toast: { success: string };
    errors: { name: string; email: string; message: string };
  };
  footer: { rights: string };
};

export const translations: Record<Lang, Dict> = {
  fr: {
    nav: { about: "À propos", services: "Services", clients: "Clients", team: "Équipe", contact: "Contact", cta: "Nous contacter" },
    hero: {
      badge: "Agence Créative & Digitale Premium",
      title: { lead: "L'innovation au service de", accent: "marques puissantes" },
      subtitle:
        "Nous aidons les entreprises algériennes à évoluer grâce à l'innovation, la stratégie, les médias et la technologie — en créant des solutions créatives et digitales premium qui génèrent une croissance réelle.",
      ctaPrimary: "Nous contacter",
      ctaSecondary: "Voir nos réalisations",
      stats: { brands: "Marques de confiance", specialists: "Spécialistes experts", scope: "Créatif & Digital" },
    },
    about: {
      eyebrow: "Qui sommes-nous",
      title: { lead: "Un partenaire premium pour les", accent: "marques algériennes ambitieuses" },
      p1: "Algeria Marketiva est une agence créative et digitale premium conçue pour aider les entreprises à évoluer. Nous combinons stratégie, design, médias et technologie en une seule force fluide — accompagnant les entreprises dans le branding moderne, la transformation digitale et une croissance durable.",
      p2: "Ancrés dans l'identité nationale et l'expertise du marché local, nous portons une ambition claire : élever l'entreprise algérienne à un standard de classe mondiale avec des solutions aussi raffinées qu'efficaces.",
      pillars: [
        { title: "Innovation", text: "Des idées et technologies avant-gardistes qui maintiennent votre marque en tête." },
        { title: "Stratégie", text: "Chaque décision appuyée par l'analyse, l'intention et des objectifs mesurables." },
        { title: "Créativité", text: "Un design distinctif et un storytelling qui rendent votre marque inoubliable." },
        { title: "Transformation digitale", text: "Moderniser les entreprises algériennes avec les outils pour grandir et rivaliser à l'échelle mondiale." },
      ],
    },
    services: {
      eyebrow: "Ce que nous faisons",
      title: { lead: "Des solutions premium en", accent: "créatif & digital" },
      subtitle: "Une agence à spectre complet — de la stratégie de marque et du développement aux médias, à l'impression et au branding de vitrine.",
      items: {
        web: { title: "Développement Web & Apps", description: "Sites et applications sur mesure, haute performance, conçus pour la vitesse, l'échelle et la conversion." },
        brand: { title: "Identité de marque & Design graphique", description: "Logos distinctifs, systèmes visuels et chartes graphiques qui captent l'attention et inspirent confiance." },
        content: { title: "Création de contenu", description: "Photographie et vidéographie cinématographiques qui racontent votre histoire de marque avec éclat." },
        media: { title: "Media Buying pour l'e-commerce", description: "Campagnes payantes pilotées par la data qui transforment vos investissements en croissance rentable." },
        social: { title: "Gestion des réseaux sociaux", description: "Stratégie, contenu et gestion de communauté pour garder votre audience engagée et croissante." },
        sponsor: { title: "Sponsoring", description: "Partenariats et sponsorings stratégiques qui amplifient la portée et élèvent le prestige de la marque." },
        print: {
          title: "Services d'impression",
          description: "Production d'impression premium avec des finitions raffinées sur tous les formats.",
          items: ["Cartes de visite", "Brochures pliées", "Pochettes", "Flyers", "Catalogues", "Carnets", "T-shirts personnalisés", "Badges", "Stylos personnalisés"],
        },
        storefront: {
          title: "Branding de vitrine",
          description: "Transformez les espaces physiques en expériences de marque emblématiques.",
          items: ["Habillage de vitrine", "Enseignes Alucobond"],
        },
      },
    },
    clientsSection: {
      eyebrow: "Ils nous font confiance",
      title: { lead: "Des marques qui grandissent avec", accent: "Marketiva" },
      subtitle: "Du retail au sport, de la logistique à l'industrie — des entreprises de toute l'Algérie et au-delà nous font confiance.",
    },
    team: {
      eyebrow: "Les talents",
      title: { lead: "Rencontrez l'équipe derrière", accent: "le travail" },
      subtitle: "Une équipe pluridisciplinaire de spécialistes qui transforment les idées ambitieuses en réalité raffinée.",
      roles: {
        assil: "Développeur Full Stack",
        mohamed: "Media Buying",
        younes: "Manager Commercial & Animateur",
        aladdin: "Infographiste, Designer & Designer 3D",
        abdenour: "Montage vidéo & Motion Graphics",
        halla: "Community Manager",
        ayoub: "Sponsoring",
        aymen: "Impression",
      },
    },
    contact: {
      eyebrow: "Parlons-en",
      title: { lead: "Prêt à construire quelque chose de", accent: "puissant ?" },
      subtitle: "Parlez-nous de votre projet et notre équipe vous répondra sous 24 heures.",
      cardTitle: "Algeria Marketiva",
      cardTagline: "L'innovation au service de marques puissantes.",
      labels: { phone: "Téléphone", email: "Email", location: "Localisation", locationValue: "Voir sur Google Maps" },
      form: {
        name: "Nom",
        email: "Email",
        message: "Message",
        namePlaceholder: "Votre nom",
        emailPlaceholder: "vous@entreprise.com",
        messagePlaceholder: "Parlez-nous de votre projet...",
        submit: "Envoyer le message",
      },
      toast: { success: "Merci ! Nous vous recontacterons sous peu." },
      errors: { name: "Veuillez saisir votre nom", email: "Saisissez un email valide", message: "Donnez-nous un peu plus de détails" },
    },
    footer: { rights: "Tous droits réservés." },
  },

  ar: {
    nav: { about: "من نحن", services: "الخدمات", clients: "العملاء", team: "الفريق", contact: "اتصل بنا", cta: "تواصل معنا" },
    hero: {
      badge: "وكالة إبداعية ورقمية متميزة",
      title: { lead: "الابتكار في خدمة", accent: "العلامات القوية" },
      subtitle:
        "نساعد الشركات الجزائرية على التطور من خلال الابتكار والاستراتيجية والإعلام والتكنولوجيا — عبر صياغة حلول إبداعية ورقمية متميزة تحقق نمواً حقيقياً.",
      ctaPrimary: "تواصل معنا",
      ctaSecondary: "اطلع على أعمالنا",
      stats: { brands: "علامات موثوقة", specialists: "خبراء متخصصون", scope: "إبداعي ورقمي" },
    },
    about: {
      eyebrow: "من نحن",
      title: { lead: "شريك متميز للعلامات", accent: "الجزائرية الطموحة" },
      p1: "Algeria Marketiva وكالة إبداعية ورقمية متميزة صُممت لمساعدة الشركات على التطور. نمزج بين الاستراتيجية والتصميم والإعلام والتكنولوجيا في قوة واحدة متناغمة — نرافق الشركات في العلامة التجارية الحديثة والتحول الرقمي والنمو المستدام.",
      p2: "متجذرون في الهوية الوطنية وخبرة السوق المحلي، نحمل طموحاً واضحاً: الارتقاء بالشركة الجزائرية إلى مستوى عالمي بحلول راقية وفعّالة في آنٍ واحد.",
      pillars: [
        { title: "الابتكار", text: "أفكار وتقنيات استشرافية تُبقي علامتك في الصدارة." },
        { title: "الاستراتيجية", text: "كل قرار مدعوم بالرؤية والقصد وأهداف قابلة للقياس." },
        { title: "الإبداع", text: "تصميم مميز وسرد قصصي يجعل علامتك لا تُنسى." },
        { title: "التحول الرقمي", text: "تحديث الشركات الجزائرية بالأدوات اللازمة للنمو والمنافسة عالمياً." },
      ],
    },
    services: {
      eyebrow: "ماذا نقدم",
      title: { lead: "حلول متميزة في", accent: "الإبداع والرقمنة" },
      subtitle: "وكالة متكاملة — من استراتيجية العلامة والتطوير إلى الإعلام والطباعة وعلامات الواجهات.",
      items: {
        web: { title: "تطوير المواقع والتطبيقات", description: "مواقع وتطبيقات مخصصة عالية الأداء، مصممة للسرعة والتوسع والتحويل." },
        brand: { title: "هوية العلامة والتصميم الجرافيكي", description: "شعارات مميزة وأنظمة بصرية وأدلة هوية تلفت الانتباه وتبني الثقة." },
        content: { title: "صناعة المحتوى", description: "تصوير فوتوغرافي وفيديو سينمائي يروي قصة علامتك بلمسة احترافية." },
        media: { title: "شراء الإعلانات للتجارة الإلكترونية", description: "حملات مدفوعة قائمة على البيانات تحوّل الإنفاق الإعلاني إلى نمو مربح وقابل للقياس." },
        social: { title: "إدارة وسائل التواصل", description: "استراتيجية ومحتوى وإدارة مجتمع تُبقي جمهورك متفاعلاً ومتنامياً." },
        sponsor: { title: "الرعاية", description: "رعايات وشراكات استراتيجية تضاعف الوصول وترفع من مكانة العلامة." },
        print: {
          title: "خدمات الطباعة",
          description: "إنتاج طباعي متميز بلمسات نهائية راقية في جميع الأحجام.",
          items: ["بطاقات عمل", "مطويات ثلاثية", "ملفات", "منشورات", "كتالوجات", "دفاتر", "قمصان بعلامتك", "شارات", "أقلام مخصصة"],
        },
        storefront: {
          title: "علامات الواجهات",
          description: "حوّل المساحات المادية إلى تجارب علامة بارزة.",
          items: ["تزيين الواجهات", "لافتات ألوكوبوند"],
        },
      },
    },
    clientsSection: {
      eyebrow: "يثقون بنا",
      title: { lead: "علامات تنمو مع", accent: "Marketiva" },
      subtitle: "من التجزئة والرياضة إلى اللوجستيك والصناعة — شركات من مختلف أنحاء الجزائر وخارجها تعتمد علينا.",
    },
    team: {
      eyebrow: "الأشخاص",
      title: { lead: "تعرّف على الفريق وراء", accent: "العمل" },
      subtitle: "فريق متعدد التخصصات من المختصين يحوّلون الأفكار الطموحة إلى واقع راقٍ.",
      roles: {
        assil: "مطور Full Stack",
        mohamed: "شراء الإعلانات",
        younes: "مدير تجاري ومنشّط",
        aladdin: "مصمم جرافيك ومصمم ثلاثي الأبعاد",
        abdenour: "مونتاج فيديو وموشن جرافيك",
        halla: "مديرة مجتمع",
        ayoub: "الرعاية",
        aymen: "الطباعة",
      },
    },
    contact: {
      eyebrow: "لنتحدث",
      title: { lead: "مستعد لبناء شيء", accent: "قوي؟" },
      subtitle: "أخبرنا عن مشروعك وسيعاود فريقنا التواصل معك خلال 24 ساعة.",
      cardTitle: "Algeria Marketiva",
      cardTagline: "الابتكار في خدمة العلامات القوية.",
      labels: { phone: "الهاتف", email: "البريد الإلكتروني", location: "الموقع", locationValue: "عرض على خرائط Google" },
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        namePlaceholder: "اسمك",
        emailPlaceholder: "you@company.com",
        messagePlaceholder: "أخبرنا عن مشروعك...",
        submit: "إرسال الرسالة",
      },
      toast: { success: "شكراً لك! سنتواصل معك قريباً." },
      errors: { name: "يرجى إدخال اسمك", email: "أدخل بريداً إلكترونياً صحيحاً", message: "أخبرنا بمزيد من التفاصيل" },
    },
    footer: { rights: "جميع الحقوق محفوظة." },
  },

  en: {
    nav: { about: "About", services: "Services", clients: "Clients", team: "Team", contact: "Contact", cta: "Get in Touch" },
    hero: {
      badge: "Premium Creative & Digital Agency",
      title: { lead: "Where Innovation Builds", accent: "Powerful Brands" },
      subtitle:
        "We help Algerian businesses evolve through innovation, strategy, media and technology — crafting premium creative and digital solutions that drive real growth.",
      ctaPrimary: "Get in Touch",
      ctaSecondary: "View Our Work",
      stats: { brands: "Trusted Brands", specialists: "Expert Specialists", scope: "Creative & Digital" },
    },
    about: {
      eyebrow: "Who We Are",
      title: { lead: "A premium partner for", accent: "ambitious Algerian brands" },
      p1: "Algeria Marketiva is a premium creative and digital agency built to help businesses evolve. We blend strategy, design, media and technology into one seamless force — guiding companies through modern branding, digital transformation and sustainable growth.",
      p2: "Rooted in national identity and local market expertise, we carry a clear ambition: to elevate Algerian business to a world-class standard with solutions that feel as refined as they are effective.",
      pillars: [
        { title: "Innovation", text: "Forward-thinking ideas and technology that keep your brand ahead of the curve." },
        { title: "Strategy", text: "Every decision backed by insight, intent and measurable business goals." },
        { title: "Creativity", text: "Distinctive design and storytelling that makes your brand unforgettable." },
        { title: "Digital Transformation", text: "Modernising Algerian businesses with the tools to scale and compete globally." },
      ],
    },
    services: {
      eyebrow: "What We Do",
      title: { lead: "Premium solutions across", accent: "creative & digital" },
      subtitle: "A full-spectrum agency — from brand strategy and development to media, print and storefront branding.",
      items: {
        web: { title: "Web & App Development", description: "Bespoke, high-performance websites and applications engineered for speed, scale and conversion." },
        brand: { title: "Brand Identity & Graphic Design", description: "Distinctive logos, visual systems and brand guidelines that command attention and build trust." },
        content: { title: "Content Creation", description: "Cinematic photography and videography that tells your brand story with cinematic polish." },
        media: { title: "Media Buying for E-commerce", description: "Data-driven paid campaigns that turn ad spend into measurable, profitable growth." },
        social: { title: "Social Media Management", description: "Strategy, content and community management that keeps your audience engaged and growing." },
        sponsor: { title: "Sponsoring", description: "Strategic sponsorships and partnerships that amplify reach and elevate brand prestige." },
        print: {
          title: "Printing Services",
          description: "Premium print production with refined finishing across every format.",
          items: ["Business cards", "Trifold brochures", "Folders", "Flyers", "Catalogs", "Notebooks", "Branded shirts", "Badges", "Custom pens"],
        },
        storefront: {
          title: "Storefront Branding",
          description: "Turn physical spaces into landmark brand experiences.",
          items: ["Window dressing", "Aluco bond signage"],
        },
      },
    },
    clientsSection: {
      eyebrow: "Trusted By",
      title: { lead: "Brands that grow with", accent: "Marketiva" },
      subtitle: "From retail and sports to logistics and manufacturing — businesses across Algeria and beyond rely on us.",
    },
    team: {
      eyebrow: "The People",
      title: { lead: "Meet the team behind", accent: "the work" },
      subtitle: "A multidisciplinary team of specialists turning ambitious ideas into polished reality.",
      roles: {
        assil: "Full Stack Developer",
        mohamed: "Media Buying",
        younes: "Commercial Manager & Animator",
        aladdin: "Infographist, Designer & 3D Designer",
        abdenour: "Video Editing & Motion Graphics",
        halla: "Community Manager",
        ayoub: "Sponsoring",
        aymen: "Printing",
      },
    },
    contact: {
      eyebrow: "Let's Talk",
      title: { lead: "Ready to build something", accent: "powerful?" },
      subtitle: "Tell us about your project and our team will get back to you within 24 hours.",
      cardTitle: "Algeria Marketiva",
      cardTagline: "Where innovation builds powerful brands.",
      labels: { phone: "Phone", email: "Email", location: "Location", locationValue: "View on Google Maps" },
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        namePlaceholder: "Your name",
        emailPlaceholder: "you@company.com",
        messagePlaceholder: "Tell us about your project...",
        submit: "Send Message",
      },
      toast: { success: "Thank you! We'll be in touch shortly." },
      errors: { name: "Please enter your name", email: "Enter a valid email", message: "Tell us a little more" },
    },
    footer: { rights: "All rights reserved." },
  },
};
