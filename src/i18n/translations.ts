export type Lang = "fr" | "ar" | "en";

export const LANGS: { code: Lang; label: string; native: string }[] = [
  { code: "fr", label: "French", native: "Français" },
  { code: "ar", label: "Arabic", native: "العربية" },
  { code: "en", label: "English", native: "English" },
];

export const dirOf = (lang: Lang): "rtl" | "ltr" =>
  lang === "ar" ? "rtl" : "ltr";

type Title = { lead: string; accent: string; tail?: string };

type ServiceText = { title: string; description: string; highlights?: string[] };
type Pillar = { title: string; text: string };
type FaqItem = { q: string; a: string };
type TestimonialItem = { quote: string; name: string; role: string; company: string };

export type Dict = {
  nav: {
    about: string;
    services: string;
    clients: string;
    testimonials: string;
    faq: string;
    team: string;
    contact: string;
    cta: string;
  };
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
    tapHint: string;
    items: Record<string, ServiceText>;
  };
  testimonials: {
    eyebrow: string;
    title: Title;
    subtitle: string;
    items: Record<string, TestimonialItem>;
  };
  faq: {
    eyebrow: string;
    title: Title;
    subtitle: string;
    items: FaqItem[];
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
  footer: { rights: string; madeBy: string };
};

export const translations: Record<Lang, Dict> = {
  fr: {
    nav: {
      about: "À propos",
      services: "Services",
      clients: "Clients",
      testimonials: "Témoignages",
      faq: "FAQ",
      team: "Équipe",
      contact: "Contact",
      cta: "Nous contacter",
    },
    hero: {
      badge: "Agence Créative & Digitale Premium",
      title: { lead: "Là où l'innovation construit des", accent: "marques puissantes." },
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
      subtitle:
        "Une agence à spectre complet — cliquez sur une carte pour explorer chaque expertise en détail.",
      tapHint: "Cliquez pour explorer",
      items: {
        media: {
          title: "Media Buying & Performance Marketing",
          description:
            "Stratégies paid media pilotées par la data pour une croissance e-commerce mesurable et rentable.",
          highlights: [
            "Stratégies de croissance e-commerce",
            "Analyse marché & concurrence",
            "Meta Ads, Google Ads, TikTok Ads",
            "Tracking (GTM, GA4, Looker Studio)",
            "Copywriting & psychologie de conversion",
            "CRO & optimisation de funnels",
            "Retargeting & stratégies de scaling",
            "Décisions orientées performance",
          ],
        },
        brand: {
          title: "Design",
          description:
            "Des identités visuelles percutantes qui se démarquent, inspirent confiance et convertissent.",
          highlights: [
            "Identité de marque",
            "Logo Design",
            "Design réseaux sociaux",
            "Créations publicitaires",
            "Packaging Design",
            "UI/UX Design",
            "Design print",
            "Systèmes visuels créatifs",
          ],
        },
        content: {
          title: "Production Vidéo & Création de Contenu",
          description:
            "Production vidéo premium avec workflows professionnels et équipements de pointe.",
          highlights: [
            "Production vidéo & montage professionnel",
            "Publicités commerciales & contenu social",
            "Reels, short-form & vidéos corporate",
            "Motion graphics & voice-overs",
            "Smartphones, caméras pro, DSLR & drones",
            "Logiciels professionnels & workflows industry-standard",
          ],
        },
        photography: {
          title: "Photographie",
          description:
            "Des visuels haute conversion qui valorisent vos produits et renforcent votre image de marque.",
          highlights: [
            "Photographie produit & commerciale",
            "Shootings branding & corporate",
            "Photographie réseaux sociaux",
            "Couverture événementielle",
            "Assets visuels optimisés pour la conversion",
          ],
        },
        platforms: {
          title: "Publicités Sponsorisées & Réseaux Sociaux",
          description:
            "Croissance, engagement et conversions sur toutes les plateformes qui comptent.",
          highlights: [
            "Instagram, Facebook, TikTok",
            "LinkedIn, YouTube, Snapchat",
            "Croissance d'audience & notoriété",
            "Engagement & conversions",
            "Stratégies sponsorisées sur mesure",
          ],
        },
        web: {
          title: "Développement Full Stack & Apps Mobiles",
          description:
            "Digitisez et scalez votre activité avec des solutions web et mobile sur mesure.",
          highlights: [
            "Sites web & plateformes e-commerce sur mesure",
            "SaaS, applications web & mobile (iOS & Android)",
            "Dashboards admin & intégrations API",
            "Infrastructure scalable & haute performance",
          ],
        },
        community: {
          title: "Community Management",
          description:
            "Construisez des communautés fidèles et une communication de marque cohérente.",
          highlights: [
            "Croissance de communauté",
            "Gestion réseaux sociaux & planification de contenu",
            "Interaction client & engagement d'audience",
            "Gestion de réputation & communication de marque",
          ],
        },
        print: {
          title: "Impression & Supports de Branding",
          description:
            "Une solution complète d'impression et de branding pour une présence physique premium.",
          highlights: [
            "Cartes de visite, flyers, brochures, catalogues",
            "Carnets, pochettes, stylos & badges personnalisés",
            "Packaging & branding de magasin",
            "Habillage vitrine & enseignes Alucobond",
            "Supports corporate & branding complet",
          ],
        },
        sponsor: {
          title: "Sponsoring",
          description:
            "Partenariats et sponsorings stratégiques qui amplifient la portée et élèvent le prestige de la marque.",
          highlights: [
            "Partenariats stratégiques sur mesure",
            "Sponsoring événementiel & médiatique",
            "Amplification de portée & prestige de marque",
          ],
        },
      },
    },
    testimonials: {
      eyebrow: "Témoignages",
      title: { lead: "Ce que disent nos", accent: "partenaires" },
      subtitle: "Des retours authentiques de marques algériennes qui nous font confiance au quotidien.",
      items: {
        t1: {
          quote:
            "On vendait bien en boutique, mais nos campagnes Meta ne convertissaient pas. En trois mois, l'équipe a restructuré nos funnels et notre ROAS a doublé — sans augmenter le budget de façon folle.",
          name: "Karim Bensaid",
          role: "Fondateur",
          company: "Dano Nuts",
        },
        t2: {
          quote:
            "Le rebranding complet — logo, packaging, réseaux — a changé la perception de notre marque à Sétif. Les clients nous disent qu'on a l'air d'une enseigne internationale maintenant.",
          name: "Nadia Cherifi",
          role: "Directrice Marketing",
          company: "Prestige Setif 19",
        },
        t3: {
          quote:
            "Ils ont livré notre site e-commerce en six semaines, avec un dashboard admin clair. Nos commandes en ligne représentent maintenant 40% du chiffre d'affaires.",
          name: "Yacine Hamidi",
          role: "Gérant",
          company: "Sami Sport",
        },
        t4: {
          quote:
            "Les vidéos produit qu'ils tournent pour TikTok et Instagram ont vraiment boosté notre notoriété locale. On reçoit des messages de clients qu'on ne connaissait pas avant.",
          name: "Sofiane Meziane",
          role: "Co-fondateur",
          company: "T'as la Frites",
        },
        t5: {
          quote:
            "Pour une startup, avoir une équipe qui gère à la fois le site, les ads et le community management, c'est un game-changer. On a pu se concentrer sur le produit.",
          name: "Amira Khelifi",
          role: "CEO",
          company: "AK Agency",
        },
        t6: {
          quote:
            "L'habillage de notre showroom et les supports print sont d'une qualité rare en Algérie. Chaque détail reflète le positionnement premium qu'on voulait.",
          name: "Rachid El Djaouda",
          role: "Directeur Général",
          company: "El Djaouda Doors Setif",
        },
      },
    },
    faq: {
      eyebrow: "FAQ",
      title: { lead: "Questions", accent: "fréquentes" },
      subtitle: "Les réponses aux questions que nos clients nous posent le plus souvent.",
      items: [
        {
          q: "Combien de temps faut-il pour lancer une campagne ?",
          a: "Pour une campagne paid media, comptez 1 à 2 semaines pour l'audit, la stratégie et la mise en place du tracking. Les premières optimisations arrivent dès les 7 à 14 premiers jours de diffusion.",
        },
        {
          q: "Quelles plateformes sont les meilleures pour mon activité ?",
          a: "Cela dépend de votre audience et de votre objectif. Meta convient souvent au B2C et à l'e-commerce, Google au search intent, TikTok aux marques visuelles et jeunes audiences. Nous recommandons après analyse de votre marché.",
        },
        {
          q: "Proposez-vous la création de contenu ?",
          a: "Oui — photo, vidéo, motion design, copywriting et créations publicitaires. Nous produisons des contenus adaptés à chaque plateforme et à chaque étape du funnel.",
        },
        {
          q: "Gérez-vous les budgets publicitaires ?",
          a: "Nous structurons, optimisons et pilotons vos campagnes. Le budget reste sur votre compte publicitaire — vous gardez le contrôle total des dépenses.",
        },
        {
          q: "Pouvez-vous créer des sites web et applications mobiles ?",
          a: "Absolument. Sites vitrine, e-commerce, SaaS, apps iOS/Android, dashboards admin et intégrations API — conçus pour performer et évoluer avec votre business.",
        },
        {
          q: "Comment mesurez-vous la performance des campagnes ?",
          a: "Via GA4, GTM, pixels Meta/TikTok/Google et tableaux de bord Looker Studio. Nous suivons ROAS, CPA, CTR, taux de conversion et les KPIs alignés sur vos objectifs business.",
        },
        {
          q: "Proposez-vous des packages sur mesure ?",
          a: "Chaque projet est unique. Nous construisons des offres modulaires selon vos besoins — créatif seul, performance seule, ou accompagnement 360°.",
        },
      ],
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
      cardTagline: "Là où l'innovation construit des marques puissantes.",
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
    footer: { rights: "Tous droits réservés.", madeBy: "Réalisé par" },
  },

  ar: {
    nav: {
      about: "من نحن",
      services: "الخدمات",
      clients: "العملاء",
      testimonials: "آراء العملاء",
      faq: "الأسئلة",
      team: "الفريق",
      contact: "اتصل بنا",
      cta: "تواصل معنا",
    },
    hero: {
      badge: "وكالة إبداعية ورقمية متميزة",
      title: { lead: "حيث يبني الابتكار", accent: "علامات تجارية قوية." },
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
      subtitle: "وكالة متكاملة — انقر على أي بطاقة لاستكشاف كل خدمة بالتفصيل.",
      tapHint: "انقر للاستكشاف",
      items: {
        media: {
          title: "شراء الإعلانات والتسويق بالأداء",
          description: "استراتيجيات إعلانية قائمة على البيانات لنمو تجارة إلكترونية قابل للقياس.",
          highlights: [
            "استراتيجيات نمو التجارة الإلكترونية",
            "تحليل السوق والمنافسين",
            "Meta Ads وGoogle Ads وTikTok Ads",
            "التتبع (GTM, GA4, Looker Studio)",
            "كتابة إعلانية وعلم نفس التحويل",
            "CRO وتحسين مسارات الشراء",
            "إعادة الاستهداف واستراتيجيات التوسع",
            "قرارات مبنية على الأداء",
          ],
        },
        brand: {
          title: "التصميم",
          description: "هويات بصرية قوية تبرز علامتك وتبني الثقة وتحقق التحويل.",
          highlights: [
            "تصميم الهوية البصرية",
            "تصميم الشعار",
            "تصميم وسائل التواصل",
            "إبداعات إعلانية",
            "تصميم التغليف",
            "UI/UX Design",
            "تصميم مطبوعات",
            "أنظمة بصرية إبداعية",
          ],
        },
        content: {
          title: "إنتاج الفيديو وصناعة المحتوى",
          description: "إنتاج فيديو متميز بمعدات احترافية وسير عمل معياري.",
          highlights: [
            "إنتاج فيديو ومونتاج احترافي",
            "إعلانات تجارية ومحتوى اجتماعي",
            "Reels ومحتوى قصير وفيديوهات مؤسسية",
            "موشن جرافيك وتعليق صوتي",
            "هواتف ذكية، كاميرات احترافية، DSLR وطائرات بدون طيار",
            "برمجيات احترافية وسير عمل معياري",
          ],
        },
        photography: {
          title: "التصوير الفوتوغرافي",
          description: "صور عالية التحويل تعزز منتجاتك وصورة علامتك.",
          highlights: [
            "تصوير منتجات وتجاري",
            "جلسات branding ومؤسسية",
            "تصوير لوسائل التواصل",
            "تغطية فعاليات",
            "أصول بصرية محسّنة للتحويل",
          ],
        },
        platforms: {
          title: "الإعلانات الممولة ومنصات التواصل",
          description: "نمو وتفاعل وتحويلات على كل المنصات المؤثرة.",
          highlights: [
            "Instagram وFacebook وTikTok",
            "LinkedIn وYouTube وSnapchat",
            "نمو الجمهور والوعي بالعلامة",
            "التفاعل والتحويلات",
            "استراتيجيات ممولة مخصصة",
          ],
        },
        web: {
          title: "تطوير Full Stack وتطبيقات الجوال",
          description: "رقمنة وتوسيع أعمالك بحلول ويب وموبايل مخصصة.",
          highlights: [
            "مواقع ومنصات تجارة إلكترونية مخصصة",
            "SaaS وتطبيقات ويب وجوال (iOS & Android)",
            "لوحات تحكم وتكاملات API",
            "بنية تحتية قابلة للتوسع",
          ],
        },
        community: {
          title: "إدارة المجتمع",
          description: "بناء مجتمعات مخلصة وتواصل علامة متسق.",
          highlights: [
            "نمو المجتمع",
            "إدارة وسائل التواصل وتخطيط المحتوى",
            "تفاعل العملاء وإشراك الجمهور",
            "إدارة السمعة وتواصل العلامة",
          ],
        },
        print: {
          title: "الطباعة ومواد العلامة التجارية",
          description: "حل متكامل للطباعة والعلامة في الفضاء المادي.",
          highlights: [
            "بطاقات عمل، منشورات، مطويات، كتالوجات",
            "دفاتر، ملفات، أقلام وشارات مخصصة",
            "تغليف وعلامة المتاجر",
            "تزيين الواجهات ولافتات Alucobond",
            "مواد مؤسسية وعلامة متكاملة",
          ],
        },
        sponsor: {
          title: "الرعاية",
          description: "رعايات وشراكات استراتيجية تضاعف الوصول وترفع مكانة العلامة.",
          highlights: [
            "شراكات استراتيجية مخصصة",
            "رعاية فعاليات وإعلامية",
            "توسيع الوصول ورفع قيمة العلامة",
          ],
        },
      },
    },
    testimonials: {
      eyebrow: "آراء العملاء",
      title: { lead: "ماذا يقول", accent: "شركاؤنا" },
      subtitle: "تجارب حقيقية من علامات جزائرية تثق بنا يومياً.",
      items: {
        t1: {
          quote:
            "كنا نبيع جيداً في المتجر لكن حملات Meta لا تحوّل. خلال ثلاثة أشهر، أعاد الفريق بناء مساراتنا وتضاعف ROAS دون زيادة مفرطة في الميزانية.",
          name: "Karim Bensaid",
          role: "المؤسس",
          company: "Dano Nuts",
        },
        t2: {
          quote:
            "إعادة الهوية الكاملة — الشعار، التغليف، السوشيال — غيّرت صورة علامتنا في Setif. العملاء يقولون إننا نبدو كعلامة دولية الآن.",
          name: "Nadia Cherifi",
          role: "مديرة التسويق",
          company: "Prestige Setif 19",
        },
        t3: {
          quote:
            "سلّموا موقع التجارة الإلكترونية في ستة أسابيع مع لوحة تحكم واضحة. الطلبات أونلاين تمثل الآن 40% من مبيعاتنا.",
          name: "Yacine Hamidi",
          role: "المدير",
          company: "Sami Sport",
        },
        t4: {
          quote:
            "فيديوهات المنتج على TikTok وInstagram رفعت حضورنا المحلي فعلاً. نتلقى رسائل من زبائن لم نكن نعرفهم من قبل.",
          name: "Sofiane Meziane",
          role: "الشريك المؤسس",
          company: "T'as la Frites",
        },
        t5: {
          quote:
            "للشركة الناشئة، وجود فريق يدير الموقع والإعلانات والمجتمع في آن واحد ميزة حاسمة. استطعنا التركيز على المنتج.",
          name: "Amira Khelifi",
          role: "المديرة التنفيذية",
          company: "AK Agency",
        },
        t6: {
          quote:
            "تزيين صالة العرض والمواد المطبوعة بجودة نادرة في الجزائر. كل تفصيل يعكس التموضع المتميز الذي نريده.",
          name: "Rachid El Djaouda",
          role: "المدير العام",
          company: "El Djaouda Doors Setif",
        },
      },
    },
    faq: {
      eyebrow: "الأسئلة الشائعة",
      title: { lead: "أسئلة", accent: "متكررة" },
      subtitle: "إجابات على أكثر الأسئلة التي يطرحها عملاؤنا المحتملون.",
      items: [
        {
          q: "كم يستغرق إطلاق حملة إعلانية؟",
          a: "لحملة paid media، احسب 1–2 أسبوع للتدقيق والاستراتيجية وإعداد التتبع. أولى التحسينات تبدأ خلال 7–14 يوماً من الإطلاق.",
        },
        {
          q: "ما أفضل المنصات لنشاطي؟",
          a: "يعتمد على جمهورك وهدفك. Meta غالباً للB2C والتجارة الإلكترونية، Google للنية الشرائية، TikTok للعلامات البصرية والجمهور الشاب. نوصي بعد تحليل سوقك.",
        },
        {
          q: "هل تقدمون صناعة المحتوى؟",
          a: "نعم — تصوير، فيديو، موشن، كتابة إعلانية وإبداعات. ننتج محتوى مناسباً لكل منصة ومرحلة في مسار الشراء.",
        },
        {
          q: "هل تديرون ميزانيات الإعلانات؟",
          a: "نبني ونحسّن وندير حملاتك. الميزانية تبقى في حسابك الإعلاني — تحتفظ بالسيطرة الكاملة على الإنفاق.",
        },
        {
          q: "هل يمكنكم بناء مواقع وتطبيقات جوال؟",
          a: "بالتأكيد. مواقع، تجارة إلكترونية، SaaS، تطبيقات iOS/Android، لوحات تحكم وتكاملات API — مصممة للأداء والنمو.",
        },
        {
          q: "كيف تقيسون أداء الحملات؟",
          a: "عبر GA4 وGTM وبكسل Meta/TikTok/Google ولوحات Looker Studio. نتابع ROAS وCPA وCTR ومعدلات التحويل ومؤشرات أعمالك.",
        },
        {
          q: "هل تقدمون باقات مخصصة؟",
          a: "كل مشروع فريد. نبني عروضاً مرنة حسب احتياجاتك — إبداع فقط، أداء فقط، أو مرافقة 360°.",
        },
      ],
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
      cardTagline: "حيث يبني الابتكار علامات تجارية قوية.",
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
    footer: { rights: "جميع الحقوق محفوظة.", madeBy: "صنع بواسطة" },
  },

  en: {
    nav: {
      about: "About",
      services: "Services",
      clients: "Clients",
      testimonials: "Testimonials",
      faq: "FAQ",
      team: "Team",
      contact: "Contact",
      cta: "Get in Touch",
    },
    hero: {
      badge: "Premium Creative & Digital Agency",
      title: { lead: "Where Innovation Builds", accent: "Powerful Brands." },
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
      subtitle:
        "A full-spectrum agency — click any card to explore each expertise in detail.",
      tapHint: "Click to explore",
      items: {
        media: {
          title: "Media Buying & Performance Marketing",
          description:
            "Data-driven paid media engineered for measurable, profitable e-commerce growth.",
          highlights: [
            "E-commerce growth strategies",
            "Market & competitor analysis",
            "Meta Ads, Google Ads, TikTok Ads",
            "Tracking (GTM, GA4, Looker Studio)",
            "Copywriting & conversion psychology",
            "CRO & funnel optimization",
            "Retargeting & scaling strategies",
            "Performance-driven decision making",
          ],
        },
        brand: {
          title: "Design",
          description:
            "Visually powerful brand identities that stand out, build trust, and convert.",
          highlights: [
            "Brand Identity Design",
            "Logo Design",
            "Social Media Design",
            "Advertising Creatives",
            "Packaging Design",
            "UI/UX Design",
            "Print Design",
            "Creative Visual Systems",
          ],
        },
        content: {
          title: "Video Production & Content Creation",
          description:
            "Premium video production with professional workflows and industry-standard tools.",
          highlights: [
            "Video production & professional editing",
            "Commercial ads & social content",
            "Reels, short-form & corporate videos",
            "Motion graphics & voice-overs",
            "Smartphones, pro cameras, DSLR & drones",
            "Industry-standard software & professional workflows",
          ],
        },
        photography: {
          title: "Photography",
          description:
            "High-converting visual assets that elevate your products and brand image.",
          highlights: [
            "Product & commercial photography",
            "Branding & corporate shoots",
            "Social media photography",
            "Event coverage",
            "Conversion-optimised visual assets",
          ],
        },
        platforms: {
          title: "Sponsored Ads & Social Platforms",
          description:
            "Audience growth, engagement, and conversions across every platform that matters.",
          highlights: [
            "Instagram, Facebook, TikTok",
            "LinkedIn, YouTube, Snapchat",
            "Audience growth & brand awareness",
            "Engagement & conversions",
            "Tailored sponsored strategies",
          ],
        },
        web: {
          title: "Full Stack Development & Mobile Apps",
          description:
            "Digitise and scale your business with bespoke web and mobile solutions.",
          highlights: [
            "Custom websites & e-commerce platforms",
            "SaaS, web apps & mobile apps (iOS & Android)",
            "Admin dashboards & API integrations",
            "Scalable, high-performance infrastructure",
          ],
        },
        community: {
          title: "Community Management",
          description:
            "Build loyal communities and consistent brand communication.",
          highlights: [
            "Community growth",
            "Social media management & content planning",
            "Customer interaction & audience engagement",
            "Reputation management & brand communication",
          ],
        },
        print: {
          title: "Printing & Branding Materials",
          description:
            "A complete printing and branding solution for a premium physical presence.",
          highlights: [
            "Business cards, flyers, brochures, catalogs",
            "Notebooks, folders, pens & custom badges",
            "Packaging & store branding",
            "Window branding & Alucobond signage",
            "Corporate materials & complete branding",
          ],
        },
        sponsor: {
          title: "Sponsoring",
          description:
            "Strategic sponsorships and partnerships that amplify reach and elevate brand prestige.",
          highlights: [
            "Tailored strategic partnerships",
            "Event & media sponsorship",
            "Reach amplification & brand prestige",
          ],
        },
      },
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: { lead: "What our", accent: "partners say" },
      subtitle: "Authentic feedback from Algerian brands who trust us every day.",
      items: {
        t1: {
          quote:
            "We sold well in-store, but our Meta campaigns weren't converting. In three months, the team rebuilt our funnels and our ROAS doubled — without blowing up the budget.",
          name: "Karim Bensaid",
          role: "Founder",
          company: "Dano Nuts",
        },
        t2: {
          quote:
            "The full rebrand — logo, packaging, social — changed how our brand is perceived in Setif. Clients tell us we look like an international brand now.",
          name: "Nadia Cherifi",
          role: "Marketing Director",
          company: "Prestige Setif 19",
        },
        t3: {
          quote:
            "They delivered our e-commerce site in six weeks with a clear admin dashboard. Online orders now represent 40% of our revenue.",
          name: "Yacine Hamidi",
          role: "Manager",
          company: "Sami Sport",
        },
        t4: {
          quote:
            "The product videos they shoot for TikTok and Instagram genuinely boosted our local visibility. We get messages from customers we'd never reached before.",
          name: "Sofiane Meziane",
          role: "Co-founder",
          company: "T'as la Frites",
        },
        t5: {
          quote:
            "For a startup, having one team handle the site, ads, and community management is a game-changer. We could focus on the product.",
          name: "Amira Khelifi",
          role: "CEO",
          company: "AK Agency",
        },
        t6: {
          quote:
            "Our showroom fit-out and print materials are a quality you rarely find in Algeria. Every detail reflects the premium positioning we wanted.",
          name: "Rachid El Djaouda",
          role: "General Manager",
          company: "El Djaouda Doors Setif",
        },
      },
    },
    faq: {
      eyebrow: "FAQ",
      title: { lead: "Frequently asked", accent: "questions" },
      subtitle: "Answers to the questions potential clients ask us most often.",
      items: [
        {
          q: "How long does it take to launch a campaign?",
          a: "For a paid media campaign, expect 1–2 weeks for audit, strategy, and tracking setup. First optimisations typically begin within the first 7–14 days of going live.",
        },
        {
          q: "Which platforms are best for my business?",
          a: "It depends on your audience and goals. Meta suits B2C and e-commerce, Google captures search intent, TikTok works for visual brands and younger audiences. We recommend after analysing your market.",
        },
        {
          q: "Do you provide content creation?",
          a: "Yes — photography, video, motion design, copywriting, and ad creatives. We produce content tailored to each platform and funnel stage.",
        },
        {
          q: "Do you handle advertising budgets?",
          a: "We structure, optimise, and manage your campaigns. Budget stays in your ad account — you retain full control of spend.",
        },
        {
          q: "Can you build websites and mobile apps?",
          a: "Absolutely. Showcase sites, e-commerce, SaaS, iOS/Android apps, admin dashboards, and API integrations — built to perform and scale with your business.",
        },
        {
          q: "How do you measure campaign performance?",
          a: "Through GA4, GTM, Meta/TikTok/Google pixels, and Looker Studio dashboards. We track ROAS, CPA, CTR, conversion rates, and KPIs aligned with your business goals.",
        },
        {
          q: "Do you offer custom packages?",
          a: "Every project is unique. We build modular offers based on your needs — creative only, performance only, or full 360° support.",
        },
      ],
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
      cardTagline: "Where Innovation Builds Powerful Brands.",
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
    footer: { rights: "All rights reserved.", madeBy: "Made by" },
  },
};
