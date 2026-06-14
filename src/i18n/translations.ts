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
    formations: string;
    team: string;
    contact: string;
    more: string;
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
  formations: {
    eyebrow: string;
    title: Title;
    subtitle: string;
    cta: string;
    courses: { title: string; description: string; topics: string[] }[];
  };
  team: {
    eyebrow: string;
    title: Title;
    subtitle: string;
    experience: string;
    viewPlan: string;
    planTitle: string;
    frameworkTitle: string;
    deliverablesTitle: string;
    resultTitle: string;
    outcomeLabel: string;
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
      formations: "Formations",
      team: "Équipe",
      contact: "Contact",
      more: "Plus",
      cta: "Nous contacter",
    },
    hero: {
      badge: "Agence Créative & Digitale Premium",
      title: { lead: "Propulser les", accent: "marques algériennes." },
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
          name: "Ayoub Benaid",
          role: "Fondateur",
          company: "Dano",
        },
        t2: {
          quote:
            "Une formation très enrichissante qui m'a permis de développer mes compétences en marketing digital et d'acquérir des outils concrets pour améliorer ma stratégie de communication. Merci pour la qualité des contenus proposés.",
          name: "Sara B",
          role: "Marketing",
          company: "3P Industrie",
        },
        t3: {
          quote:
            "Ils ont livré notre site e-commerce en six semaines, avec un dashboard admin clair. Nos commandes en ligne représentent maintenant 40% du chiffre d'affaires.",
          name: "Abderahman Koussa",
          role: "Gérant",
          company: "Sami Sport",
        },
        t4: {
          quote:
            "Les vidéos produit qu'ils tournent pour TikTok et Instagram ont vraiment boosté notre notoriété locale. On reçoit des messages de clients qu'on ne connaissait pas avant.",
          name: "Khaled",
          role: "Co-fondateur",
          company: "T'as des Frites",
        },
        t5: {
          quote:
            "Une collaboration professionnelle qui a renforcé notre image et notre présence digitale. L'équipe comprend les enjeux du marché algérien et livre un travail de qualité.",
          name: "حمادة العلميين",
          role: "Responsable",
          company: "شركة العلميين",
        },
        t6: {
          quote:
            "L'habillage de notre showroom et les supports print sont d'une qualité rare en Algérie. Chaque détail reflète le positionnement premium qu'on voulait.",
          name: "Younes",
          role: "Directeur Général",
          company: "El Djawda",
        },
      },
    },
    faq: {
      eyebrow: "FAQ",
      title: { lead: "Questions", accent: "fréquentes" },
      subtitle: "Les réponses aux questions que nos clients nous posent le plus souvent.",
      items: [
        {
          q: "Quels sont les tarifs de vos services ?",
          a: "Nos tarifs sont adaptés à chaque projet. Contactez-nous pour obtenir une offre personnalisée en fonction de vos objectifs et de votre budget.",
        },
        {
          q: "Travaillez-vous uniquement à Sétif ?",
          a: "Non. Nous accompagnons des entreprises partout en Algérie et collaborons également à distance avec des clients à l'international.",
        },
        {
          q: "Comment démarrer un projet avec Algeria Marketiva ?",
          a: "Il vous suffit de nous contacter via le formulaire du site, WhatsApp, téléphone ou e-mail. Nous organiserons un premier échange afin de comprendre vos besoins et de vous proposer la solution la plus adaptée.",
        },
        {
          q: "Que signifie le slogan « Propulser les marques algériennes » ?",
          a: "Ce slogan reflète notre vision : combiner créativité, innovation, technologies modernes et stratégies performantes pour propulser les marques algériennes et les aider à grandir avec confiance.",
        },
        {
          q: "Puis-je demander un devis gratuit ?",
          a: "Oui. Nous proposons une consultation initiale ainsi qu'un devis personnalisé entièrement gratuits, adaptés aux besoins de votre projet.",
        },
        {
          q: "Pourquoi choisir Algeria Marketiva ?",
          a: "Parce que nous associons créativité, innovation et stratégie afin d'aider les entreprises à accroître leur visibilité, renforcer leur image de marque et générer davantage d'opportunités commerciales.",
        },
        {
          q: "Fournissez-vous des rapports de performance ?",
          a: "Oui. Nous fournissons des rapports détaillés permettant de suivre les performances des campagnes marketing, des réseaux sociaux et des différentes actions mises en œuvre.",
        },
        {
          q: "Comment obtenez-vous des résultats pour nos campagnes marketing ?",
          a: "Nous analysons votre marché, votre audience cible et vos objectifs afin de concevoir des stratégies sur mesure, mesurables et orientées résultats.",
        },
        {
          q: "Combien de temps faut-il pour réaliser un projet ?",
          a: "La durée dépend de la nature et de la complexité du projet. Après l'analyse de vos besoins, nous vous communiquerons un calendrier clair et précis.",
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
      subtitle: "Dix experts pluridisciplinaires qui transforment les idées ambitieuses en réalité raffinée.",
      experience: "5+ ans d'expérience",
      viewPlan: "Voir le plan métier",
      planTitle: "Plan métier",
      frameworkTitle: "Notre cadre stratégique",
      deliverablesTitle: "Ce que vous recevez",
      resultTitle: "Le résultat",
      outcomeLabel: "Résultat",
      roles: {
        assil: "Développeur Full Stack",
        mohamed: "Media Buying",
        younes: "Manager Commercial & Animateur",
        aladdin: "Infographiste, Designer & Designer 3D",
        zaki: "Vidéaste",
        abdenour: "Montage vidéo & Motion Graphics",
        adem: "Marketing",
        halla: "Community Manager",
        ayoub: "Sponsoring",
        aymen: "Impression",
      },
    },
    formations: {
      eyebrow: "Formations",
      title: { lead: "Montez en compétences avec nos", accent: "formations pro" },
      subtitle:
        "Des parcours pratiques animés par nos experts pour maîtriser les métiers du créatif, du marketing et du digital.",
      cta: "Demander le programme",
      courses: [
        {
          title: "Création visuelle & audiovisuelle",
          description:
            "Maîtrisez la chaîne complète de production — de la prise de vue au montage final.",
          topics: [
            "Photographie commerciale & produit",
            "Vidéographie & tournage pro",
            "Design graphique & identité visuelle",
            "Montage vidéo & post-production",
          ],
        },
        {
          title: "Stratégie marketing",
          description:
            "Apprenez à construire des stratégies marketing data-driven qui génèrent une croissance mesurable.",
          topics: [
            "Analyse marché & concurrence",
            "Personas & parcours client",
            "Stratégie contenu & publicité",
            "KPIs, ROI & optimisation",
          ],
        },
        {
          title: "Développement web & mobile",
          description:
            "De zéro au déploiement — sites, apps et produits digitaux performants.",
          topics: [
            "Sites web & e-commerce",
            "Applications mobiles iOS & Android",
            "APIs & intégrations",
            "Performance, sécurité & déploiement",
          ],
        },
      ],
    },
    contact: {
      eyebrow: "Parlons-en",
      title: { lead: "Prêt à construire quelque chose de", accent: "puissant ?" },
      subtitle: "Parlez-nous de votre projet et notre équipe vous répondra sous 24 heures.",
      cardTitle: "Algeria Marketiva",
      cardTagline: "Propulser les marques algériennes.",
      labels: { phone: "Téléphone", email: "Email", location: "Localisation", locationValue: "Skills Center Sétif" },
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
      formations: "التكوينات",
      team: "الفريق",
      contact: "اتصل بنا",
      more: "المزيد",
      cta: "تواصل معنا",
    },
    hero: {
      badge: "وكالة إبداعية ورقمية متميزة",
      title: { lead: "تمكين", accent: "العلامات التجارية الجزائرية." },
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
          name: "Ayoub Benaid",
          role: "المؤسس",
          company: "Dano",
        },
        t2: {
          quote:
            "تكوين غني جداً سمح لي بتطوير مهاراتي في التسويق الرقمي واكتساب أدوات عملية لتحسين استراتيجية التواصل. شكراً على جودة المحتوى المقدّم.",
          name: "Sara B",
          role: "Marketing",
          company: "3P Industrie",
        },
        t3: {
          quote:
            "سلّموا موقع التجارة الإلكترونية في ستة أسابيع مع لوحة تحكم واضحة. الطلبات أونلاين تمثل الآن 40% من مبيعاتنا.",
          name: "Abderahman Koussa",
          role: "المدير",
          company: "Sami Sport",
        },
        t4: {
          quote:
            "فيديوهات المنتج على TikTok وInstagram رفعت حضورنا المحلي فعلاً. نتلقى رسائل من زبائن لم نكن نعرفهم من قبل.",
          name: "Khaled",
          role: "الشريك المؤسس",
          company: "T'as des Frites",
        },
        t5: {
          quote:
            "تعاون احترافي عزّز صورتنا وحضورنا الرقمي. الفريق يفهم تحديات السوق الجزائري ويقدّم عملاً عالي الجودة.",
          name: "حمادة العلميين",
          role: "مسؤول",
          company: "شركة العلميين",
        },
        t6: {
          quote:
            "تزيين صالة العرض والمواد المطبوعة بجودة نادرة في الجزائر. كل تفصيل يعكس التموضع المتميز الذي نريده.",
          name: "Younes",
          role: "المدير العام",
          company: "El Djawda",
        },
      },
    },
    faq: {
      eyebrow: "الأسئلة الشائعة",
      title: { lead: "أسئلة", accent: "متكررة" },
      subtitle: "إجابات على أكثر الأسئلة التي يطرحها عملاؤنا المحتملون.",
      items: [
        {
          q: "ما هي أسعار خدماتكم؟",
          a: "أسعارنا مخصّصة لكل مشروع. تواصل معنا للحصول على عرض شخصي وفق أهدافك وميزانيتك.",
        },
        {
          q: "هل تعملون فقط في Setif؟",
          a: "لا. نرافق شركات في جميع أنحاء الجزائر ونتعاون عن بُعد مع عملاء دوليين أيضاً.",
        },
        {
          q: "كيف أبدأ مشروعاً مع Algeria Marketiva؟",
          a: "تواصل معنا عبر نموذج الموقع أو WhatsApp أو الهاتف أو البريد الإلكتروني. سننظم جلسة أولى لفهم احتياجاتك واقتراح الحل الأنسب.",
        },
        {
          q: "ماذا يعني شعار «تمكين العلامات التجارية الجزائرية»؟",
          a: "يعكس رؤيتنا: الجمع بين الإبداع والابتكار والتقنيات الحديثة والاستراتيجيات الفعّالة لتمكين العلامات الجزائرية ومساعدتها على النمو بثقة.",
        },
        {
          q: "هل يمكنني طلب عرض سعر مجاني؟",
          a: "نعم. نقدّم استشارة أولية وعرض سعر شخصي مجانيين بالكامل، وفق احتياجات مشروعك.",
        },
        {
          q: "لماذا تختار Algeria Marketiva؟",
          a: "لأننا نجمع بين الإبداع والابتكار والاستراتيجية لمساعدة الشركات على زيادة ظهورها وتعزيز صورتها وتوليد المزيد من الفرص التجارية.",
        },
        {
          q: "هل تقدّمون تقارير أداء؟",
          a: "نعم. نوفر تقارير مفصّلة لمتابعة أداء الحملات التسويقية ووسائل التواصل والإجراءات المختلفة.",
        },
        {
          q: "كيف تحققون نتائج لحملاتنا التسويقية؟",
          a: "نحلّل سوقك وجمهورك المستهدف وأهدافك لصياغة استراتيجيات مخصّصة وقابلة للقياس وموجهة نحو النتائج.",
        },
        {
          q: "كم يستغرق إنجاز مشروع؟",
          a: "تعتمد المدة على طبيعة المشروع وتعقيده. بعد تحليل احتياجاتك، نزوّدك بجدول زمني واضح ودقيق.",
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
      subtitle: "عشرة خبراء متعددو التخصصات يحوّلون الأفكار الطموحة إلى واقع راقٍ.",
      experience: "+5 سنوات خبرة",
      viewPlan: "عرض خطة العمل",
      planTitle: "خطة العمل",
      frameworkTitle: "إطارنا الاستراتيجي",
      deliverablesTitle: "ما ستحصل عليه",
      resultTitle: "النتيجة",
      outcomeLabel: "النتيجة",
      roles: {
        assil: "مطور Full Stack",
        mohamed: "شراء الإعلانات",
        younes: "مدير تجاري ومنشّط",
        aladdin: "مصمم جرافيك ومصمم ثلاثي الأبعاد",
        zaki: "مصوّر فيديو",
        abdenour: "مونتاج فيديو وموشن جرافيك",
        adem: "تسويق",
        halla: "مديرة مجتمع",
        ayoub: "الرعاية",
        aymen: "الطباعة",
      },
    },
    formations: {
      eyebrow: "التكوينات",
      title: { lead: "طوّر مهاراتك مع", accent: "تكويناتنا المهنية" },
      subtitle: "مسارات عملية يقدّمها خبراؤنا لإتقان مهارات الإبداع والتسويق والرقمنة.",
      cta: "طلب البرنامج",
      courses: [
        {
          title: "الإبداع البصري والسمعي البصري",
          description: "أتقن سلسلة الإنتاج الكاملة — من التصوير إلى المونتاج النهائي.",
          topics: ["التصوير التجاري والمنتجات", "التصوير السينمائي والفيديو", "التصميم الجرافيكي والهوية البصرية", "مونتاج الفيديو وما بعد الإنتاج"],
        },
        {
          title: "استراتيجية التسويق",
          description: "تعلّم بناء استراتيجيات تسويقية مبنية على البيانات تحقق نمواً قابلاً للقياس.",
          topics: ["تحليل السوق والمنافسين", "شخصيات المشتري ومسار العميل", "استراتيجية المحتوى والإعلان", "مؤشرات الأداء والعائد والتحسين"],
        },
        {
          title: "تطوير الويب والجوال",
          description: "من الصفر إلى الإطلاق — مواقع وتطبيقات ومنتجات رقمية عالية الأداء.",
          topics: ["مواقع وتجارة إلكترونية", "تطبيقات iOS وAndroid", "APIs وتكاملات", "الأداء والأمان والنشر"],
        },
      ],
    },
    contact: {
      eyebrow: "لنتحدث",
      title: { lead: "مستعد لبناء شيء", accent: "قوي؟" },
      subtitle: "أخبرنا عن مشروعك وسيعاود فريقنا التواصل معك خلال 24 ساعة.",
      cardTitle: "Algeria Marketiva",
      cardTagline: "تمكين العلامات التجارية الجزائرية.",
      labels: { phone: "الهاتف", email: "البريد الإلكتروني", location: "الموقع", locationValue: "Skills Center سطيف" },
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
      formations: "Training",
      team: "Team",
      contact: "Contact",
      more: "More",
      cta: "Get in Touch",
    },
    hero: {
      badge: "Premium Creative & Digital Agency",
      title: { lead: "Empowering", accent: "Algerian Brands." },
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
          name: "Ayoub Benaid",
          role: "Founder",
          company: "Dano",
        },
        t2: {
          quote:
            "A highly enriching training that helped me develop my digital marketing skills and acquire practical tools to improve my communication strategy. Thank you for the quality of the content provided.",
          name: "Sara B",
          role: "Marketing",
          company: "3P Industrie",
        },
        t3: {
          quote:
            "They delivered our e-commerce site in six weeks with a clear admin dashboard. Online orders now represent 40% of our revenue.",
          name: "Abderahman Koussa",
          role: "Manager",
          company: "Sami Sport",
        },
        t4: {
          quote:
            "The product videos they shoot for TikTok and Instagram genuinely boosted our local visibility. We get messages from customers we'd never reached before.",
          name: "Khaled",
          role: "Co-founder",
          company: "T'as des Frites",
        },
        t5: {
          quote:
            "A professional collaboration that strengthened our image and digital presence. The team understands the Algerian market and delivers quality work.",
          name: "حمادة العلميين",
          role: "Manager",
          company: "شركة العلميين",
        },
        t6: {
          quote:
            "Our showroom fit-out and print materials are a quality you rarely find in Algeria. Every detail reflects the premium positioning we wanted.",
          name: "Younes",
          role: "General Manager",
          company: "El Djawda",
        },
      },
    },
    faq: {
      eyebrow: "FAQ",
      title: { lead: "Frequently asked", accent: "questions" },
      subtitle: "Answers to the questions potential clients ask us most often.",
      items: [
        {
          q: "What are your service rates?",
          a: "Our rates are tailored to each project. Contact us for a personalised quote based on your goals and budget.",
        },
        {
          q: "Do you only work in Setif?",
          a: "No. We support businesses across Algeria and also work remotely with international clients.",
        },
        {
          q: "How do I start a project with Algeria Marketiva?",
          a: "Simply contact us via the website form, WhatsApp, phone or email. We'll arrange an initial call to understand your needs and propose the best solution.",
        },
        {
          q: "What does the slogan « Empowering Algerian Brands » mean?",
          a: "It reflects our vision: combining creativity, innovation, modern technology and high-performance strategies to empower Algerian brands and help them grow with confidence.",
        },
        {
          q: "Can I request a free quote?",
          a: "Yes. We offer a free initial consultation and a fully personalised quote tailored to your project's needs.",
        },
        {
          q: "Why choose Algeria Marketiva?",
          a: "Because we combine creativity, innovation and strategy to help businesses increase visibility, strengthen their brand image and generate more commercial opportunities.",
        },
        {
          q: "Do you provide performance reports?",
          a: "Yes. We provide detailed reports to track the performance of marketing campaigns, social media and all actions implemented.",
        },
        {
          q: "How do you deliver results for our marketing campaigns?",
          a: "We analyse your market, target audience and objectives to design bespoke, measurable, results-driven strategies.",
        },
        {
          q: "How long does it take to complete a project?",
          a: "It depends on the nature and complexity of the project. After analysing your needs, we'll provide a clear and precise timeline.",
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
      subtitle: "Ten multidisciplinary experts turning ambitious ideas into polished reality.",
      experience: "5+ years experience",
      viewPlan: "View business plan",
      planTitle: "Business plan",
      frameworkTitle: "Our strategic framework",
      deliverablesTitle: "What you'll receive",
      resultTitle: "The result",
      outcomeLabel: "Outcome",
      roles: {
        assil: "Full Stack Developer",
        mohamed: "Media Buying",
        younes: "Commercial Manager & Animator",
        aladdin: "Infographist, Designer & 3D Designer",
        zaki: "Videographer",
        abdenour: "Video Editing & Motion Graphics",
        adem: "Marketing",
        halla: "Community Manager",
        ayoub: "Sponsoring",
        aymen: "Printing",
      },
    },
    formations: {
      eyebrow: "Training",
      title: { lead: "Level up with our", accent: "pro courses" },
      subtitle:
        "Hands-on programmes led by our experts to master creative, marketing and digital skills.",
      cta: "Request the syllabus",
      courses: [
        {
          title: "Visual & audiovisual creation",
          description: "Master the full production pipeline — from shooting to final edit.",
          topics: ["Commercial & product photography", "Videography & pro filming", "Graphic design & brand identity", "Video editing & post-production"],
        },
        {
          title: "Marketing strategy",
          description: "Learn to build data-driven marketing strategies that deliver measurable growth.",
          topics: ["Market & competitor analysis", "Personas & customer journey", "Content & advertising strategy", "KPIs, ROI & optimization"],
        },
        {
          title: "Web & mobile development",
          description: "From zero to launch — high-performance sites, apps and digital products.",
          topics: ["Websites & e-commerce", "iOS & Android apps", "APIs & integrations", "Performance, security & deployment"],
        },
      ],
    },
    contact: {
      eyebrow: "Let's Talk",
      title: { lead: "Ready to build something", accent: "powerful?" },
      subtitle: "Tell us about your project and our team will get back to you within 24 hours.",
      cardTitle: "Algeria Marketiva",
      cardTagline: "Empowering Algerian Brands.",
      labels: { phone: "Phone", email: "Email", location: "Location", locationValue: "Skills Center Setif" },
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
