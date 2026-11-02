import type { Lang } from "./translations";

export type PlanStep = {
  title: string;
  preamble?: string;
  listLabel?: string;
  items: string[];
  outcome?: string;
};

export type BusinessPlan = {
  intro?: string;
  steps: PlanStep[];
  framework?: string[];
  frameworkTitle?: string;
  deliverables?: string[];
  deliverablesTitle?: string;
  workflow?: string[];
  workflowTitle?: string;
  result?: string;
  resultTitle?: string;
};

const marketingStrategy: BusinessPlan = {
  intro:
    "We don't just run ads—we build marketing systems designed to generate sustainable business growth.\n\nOur process is structured to help you understand exactly what happens after partnering with us and the value you'll receive at every stage.",
  steps: [
    {
      title: "Business Discovery & Analysis",
      preamble: "🔍 We start by understanding your business.",
      listLabel: "We analyze:",
      items: [
        "Your products or services",
        "Your market and industry",
        "Your competitors",
        "Your strengths and weaknesses",
        "Your business objectives",
      ],
      outcome: "A clear picture of your current business position and growth opportunities.",
    },
    {
      title: "Target Audience Research",
      preamble: "🎯 Who are your ideal customers?",
      listLabel: "We identify:",
      items: [
        "Target audience segments",
        "Buyer personas",
        "Customer behaviors",
        "Customer needs and pain points",
        "Purchase motivations",
      ],
      outcome:
        "A deep understanding of who your customers are and how to communicate with them effectively.",
    },
    {
      title: "Competitor Analysis",
      preamble: "📊 We uncover what your competitors are doing.",
      listLabel: "We analyze:",
      items: [
        "Their offers and positioning",
        "Their marketing strategies",
        "Their content and advertising",
        "Market gaps and opportunities",
        "Potential competitive advantages",
      ],
      outcome: "A strategy that differentiates your business instead of copying competitors.",
    },
    {
      title: "Marketing Strategy Development",
      preamble: "🧠 We create a customized growth strategy for your business.",
      listLabel: "This includes:",
      items: [
        "Marketing objectives",
        "Customer journey mapping",
        "Marketing channels",
        "Content strategy",
        "Advertising strategy",
        "Sales strategy",
      ],
      outcome: "A clear roadmap designed to achieve your business goals.",
    },
    {
      title: "Execution Planning",
      preamble: "⚙️ We transform strategy into actionable steps.",
      listLabel: "We define:",
      items: [
        "Implementation timeline",
        "Required tasks and resources",
        "Recommended budget allocation",
        "Key Performance Indicators (KPIs)",
      ],
      outcome: "A detailed action plan showing exactly what will be done and when.",
    },
    {
      title: "Campaign Launch & Customer Acquisition",
      preamble: "🚀 We begin attracting and converting customers.",
      listLabel: "Activities include:",
      items: [
        "Content creation",
        "Creative design",
        "Advertising campaigns",
        "Funnel implementation",
        "Offer and messaging testing",
      ],
      outcome: "A consistent flow of qualified leads and potential customers.",
    },
    {
      title: "Measurement & Optimization",
      preamble: "📈 We continuously monitor and improve performance.",
      listLabel: "We focus on:",
      items: [
        "Data analysis",
        "ROI measurement",
        "Campaign optimization",
        "Conversion improvements",
        "Strategy refinement",
      ],
      outcome: "Sustainable growth and lower customer acquisition costs.",
    },
  ],
  frameworkTitle: "Our Strategic Growth Framework",
  framework: [
    "WHAT — Understand the Business",
    "WHO — Identify the Customer",
    "WHEN — Map the Customer Journey",
    "WHY — Define Objectives",
    "HOW — Build the Marketing Message",
    "WHERE — Select the Right Channels",
    "Execute, Measure & Optimize",
    "Growth & Scale",
  ],
  deliverablesTitle: "What You'll Receive",
  deliverables: [
    "Comprehensive Market Research",
    "Competitor Analysis Report",
    "Ideal Customer Profiles",
    "Customer Journey Mapping",
    "Customized Marketing Strategy",
    "Content & Advertising Plan",
    "Channel Selection Framework",
    "KPI & Performance Dashboard",
    "Ongoing Reporting & Optimization",
  ],
  resultTitle: "The Result",
  result:
    "Most agencies sell advertising.\n\nWe build complete growth systems.\n\nFrom market research and customer insights to execution and optimization, every step is designed to help your business attract, convert, and retain more customers while achieving sustainable growth.",
};

const mediaBuyingStrategy: BusinessPlan = {
  steps: [
    {
      title: "Gestion Complète de Systèmes E-commerce",
      items: [
        "Étude approfondie du marché avant lancement d'un produit",
        "Analyse détaillée des concurrents et de leurs messages marketing",
        "Étude des angles publicitaires utilisés par les concurrents",
        "Veille constante des tendances du marché pour toujours rester à jour",
        "Positionnement stratégique des offres et publicités selon le niveau du marché",
        "Innovation d'angles marketing afin de gagner des parts de marché",
      ],
    },
    {
      title: "Media Buying & Publicité Digitale",
      items: [
        "Gestion avancée des campagnes Meta Ads (Facebook & Instagram)",
        "Création, optimisation et scaling avancé des campagnes publicitaires",
        "Gestion intelligente des budgets publicitaires",
        "Optimisation continue basée sur les performances",
        "Tests A/B des audiences, hooks, offres et créatives",
      ],
    },
    {
      title: "Analyse Créative & Innovation",
      items: [
        "Étude approfondie des créatives publicitaires du marché",
        "Analyse des hooks, structures vidéo et messages émotionnels",
        "Création d'angles publicitaires innovants",
        "Développement de concepts UGC orientés conversion",
      ],
    },
    {
      title: "Tracking & Analyse de Données",
      items: [
        "Configuration et suivi du tracking avancé",
        "Gestion du tracking via Google Tag Manager (GTM)",
        "Analyse des données via Google Analytics 4 (GA4)",
        "Création de dashboards avec Google Looker Studio",
        "Prise de décision basée sur les données (Data-Driven Decisions)",
      ],
    },
    {
      title: "Copywriting & Psychologie Marketing",
      items: [
        "Création de copies publicitaires orientées conversion",
        "Création de hooks publicitaires performants",
        "Utilisation du neuromarketing et de la psychologie du consommateur",
        "Positionnement des offres selon le niveau de conscience du client",
      ],
    },
    {
      title: "Optimisation & Scaling",
      items: [
        "Scaling avancé des campagnes rentables",
        "Optimisation du CPA, ROAS et coût par achat",
        "Analyse des performances sur plusieurs plateformes",
        "Gestion de stratégies de croissance multi-plateformes",
      ],
    },
    {
      title: "Plateformes Publicitaires",
      items: [
        "Meta Ads (Facebook & Instagram)",
        "Google Ads",
        "TikTok Ads",
        "Autres plateformes publicitaires selon le besoin du client",
      ],
    },
    {
      title: "Performance Marketing & Funnels Haute Conversion",
      items: [
        "Google Ads — Search, Shopping, Display & YouTube Ads avec stratégies d'enchères intelligentes (tCPA, tROAS, Maximize Conversions)",
        "Création et optimisation de campagnes Google Search basées sur l'intention d'achat et les mots-clés à haute conversion",
        "Google Shopping — structuration des flux produits, optimisation des titres et stratégies d'enchères compétitives",
        "YouTube Ads — création de scripts vidéo orientés conversion, ciblage par intention et gestion des audiences in-market",
        "Audit complet des comptes Google Ads existants pour identifier les fuites budgétaires et maximiser le ROI",
        "CRO (Conversion Rate Optimization) — analyse UX, heatmaps, tests A/B sur landing pages et pages produits",
        "Optimisation des pages de destination pour maximiser le taux de conversion à chaque étape du funnel",
        "Amélioration du parcours client de l'annonce jusqu'à la confirmation de commande (zero friction checkout)",
        "Analyse des micro-conversions et KPIs intermédiaires (add-to-cart, initiate checkout, purchase rate)",
        "Retargeting & Remarketing avancé — segmentation comportementale des audiences froides, tièdes et chaudes",
        "Campagnes de remarketing dynamique basées sur les comportements (visiteurs, paniers abandonnés, acheteurs)",
        "Stratégies de retargeting multi-plateformes (Meta, Google, TikTok) pour maximiser les touchpoints clients",
        "Séquences publicitaires personnalisées selon le niveau d'intention et la position dans le tunnel d'achat",
        "Création de Custom Audiences et Lookalike Audiences à haute valeur pour scaler les audiences rentables",
        "Design et déploiement de funnels haute conversion — VSL, quiz funnels, lead funnels et product funnels",
        "Architecture complète du tunnel : publicité → landing page → upsell/downsell → email sequence → fidélisation",
        "Intégration d'offres irrésistibles, garanties et éléments de preuve sociale pour maximiser le taux de closing",
        "Suivi complet de la LTV (Lifetime Value) client pour optimiser l'acquisition et maximiser la rentabilité global",
      ],
    },
  ],
};

const communityStrategy: BusinessPlan = {
  intro:
    "We provide professional social media management services, from content planning and creation to publishing and performance analysis, with the goal of building a strong digital presence that reflects your brand identity and supports your marketing objectives.",
  steps: [
    {
      title: "Account & Audience Analysis",
      items: [
        "Analyze the brand's business and digital presence.",
        "Audit existing social media accounts.",
        "Analyze competitors.",
        "Identify the target audience.",
        "Discover opportunities for growth and improvement.",
      ],
    },
    {
      title: "Content Strategy",
      items: [
        "Define content goals.",
        "Establish key brand messages.",
        "Define the brand's tone of voice.",
        "Select suitable content types for each platform.",
      ],
    },
    {
      title: "Content Planning",
      items: [
        "Develop a monthly or weekly content plan.",
        "Create an editorial calendar.",
        "Plan seasonal campaigns.",
        "Schedule content publishing.",
      ],
    },
    {
      title: "Content Creation",
      items: [
        "Develop creative concepts.",
        "Write content.",
        "Oversee or execute production.",
        "Create Posts, Reels, Stories, Carousel, Educational, Promotional, Interactive and Awareness content.",
      ],
    },
    {
      title: "Social Media Management",
      items: [
        "Schedule and publish content.",
        "Manage social media platforms.",
        "Monitor comments and direct messages (depending on package).",
        "Maintain brand consistency.",
      ],
    },
    {
      title: "Performance Monitoring & Analytics",
      items: [
        "Track content performance.",
        "Analyze KPIs.",
        "Measure engagement, reach and growth.",
        "Identify optimization opportunities.",
      ],
    },
    {
      title: "Reporting & Continuous Improvement",
      items: [
        "Prepare performance reports.",
        "Provide recommendations.",
        "Continuously optimize based on insights.",
      ],
    },
  ],
  deliverablesTitle: "Service Deliverables",
  deliverables: [
    "Professional social media management.",
    "Tailored content strategy.",
    "Structured content plan.",
    "Brand-aligned content.",
    "Publishing & account management.",
    "Performance monitoring.",
    "Periodic reports and recommendations.",
  ],
  workflowTitle: "Service Workflow",
  workflow: [
    "Client briefing.",
    "Brand, market & audience analysis.",
    "Content strategy.",
    "Content planning.",
    "Content production.",
    "Review & approval.",
    "Publishing & management.",
    "Performance reporting.",
    "Continuous optimization.",
  ],
};

function placeholderPlan(intro: string, role: string): BusinessPlan {
  return {
    intro,
    steps: [
      {
        title: "Discovery & Analysis",
        listLabel: "We analyze:",
        items: ["Your objectives", "Your market", "Your audience", "Your competitive landscape"],
        outcome: "A clear foundation for strategic decisions.",
      },
      {
        title: "Strategy Development",
        listLabel: "This includes:",
        items: ["Custom roadmap", "Action plan", "KPIs & milestones"],
        outcome: "A structured plan aligned with your goals.",
      },
      {
        title: "Execution & Optimization",
        listLabel: "We deliver:",
        items: ["Professional execution", "Continuous monitoring", "Performance optimization"],
        outcome: "Measurable results and sustainable growth.",
      },
    ],
    deliverables: ["Strategy document", "Action plan", "Performance reporting"],
    result: `A complete ${role} approach designed to deliver professional results.`,
  };
}

const planTemplates: Record<Lang, Record<string, BusinessPlan>> = {
  en: {
    adem: marketingStrategy,
    mohamed: mediaBuyingStrategy,
    halla: communityStrategy,
    assil: placeholderPlan(
      "We don't just build websites—we engineer digital products designed for performance, scalability and business impact.",
      "development",
    ),
    malik: placeholderPlan(
      "We don't just build apps—we engineer high-performance mobile experiences for iOS and Android that scale with your business.",
      "mobile development",
    ),
    younes: placeholderPlan(
      "We don't just sell—we build commercial systems that convert prospects into loyal clients.",
      "commercial",
    ),
    roua: placeholderPlan(
      "We don't just make calls—we build professional commercial telemarketing that converts prospects into qualified opportunities.",
      "commercial telemarketing",
    ),
    aladdin: placeholderPlan(
      "We don't just design visuals—we build brand systems that communicate, differentiate and convert.",
      "design",
    ),
    zaki: placeholderPlan(
      "We don't just film—we produce cinematic content engineered to capture attention and tell your brand story.",
      "video production",
    ),
    abdenour: placeholderPlan(
      "We don't just film and edit—we craft polished video narratives that capture attention and drive engagement.",
      "videography & montage",
    ),
    amine: placeholderPlan(
      "We don't just animate frames—we craft professional motion graphics and montage that elevate every brand story.",
      "motion graphics & montage",
    ),
    ayoub: placeholderPlan(
      "We don't just find sponsors—we structure partnerships that expand reach and brand prestige.",
      "sponsoring",
    ),
    aymen: placeholderPlan(
      "We don't just print—we deliver premium physical branding that reflects your brand quality.",
      "print",
    ),
    salma: placeholderPlan(
      "We don't just host events—we animate brand experiences that engage audiences and leave a lasting impression.",
      "animation",
    ),
    imene: placeholderPlan(
      "We don't just host events—we animate brand experiences that engage audiences and leave a lasting impression.",
      "animation",
    ),
    sofiane: placeholderPlan(
      "We don't just take photos—we craft visual stories that capture your brand with precision and style.",
      "photography",
    ),
  },
  fr: {
    adem: marketingStrategy,
    mohamed: mediaBuyingStrategy,
    halla: communityStrategy,
    assil: placeholderPlan(
      "Nous ne faisons pas que des sites web — nous concevons des produits digitaux performants, scalables et orientés business.",
      "développement",
    ),
    malik: placeholderPlan(
      "Nous ne faisons pas que des apps — nous concevons des expériences mobiles haute performance pour iOS et Android.",
      "développement mobile",
    ),
    younes: placeholderPlan(
      "Nous ne vendons pas seulement — nous construisons des systèmes commerciaux qui transforment les prospects en clients fidèles.",
      "commercial",
    ),
    roua: placeholderPlan(
      "Nous ne passons pas seulement des appels — nous assurons une téléopération commerciale professionnelle qui convertit les prospects en opportunités qualifiées.",
      "téléopération commerciale",
    ),
    aladdin: placeholderPlan(
      "Nous ne faisons pas que du visuel — nous construisons des systèmes de marque qui communiquent, différencient et convertissent.",
      "design",
    ),
    zaki: placeholderPlan(
      "Nous ne filmons pas seulement — nous produisons du contenu cinématographique qui capte l'attention et raconte votre marque.",
      "vidéo",
    ),
    abdenour: placeholderPlan(
      "Nous ne montons pas seulement — nous filmons et craftons des récits vidéo polis orientés engagement.",
      "vidéographie & montage",
    ),
    amine: placeholderPlan(
      "Nous ne faisons pas que du motion — nous créons des motion graphics et un montage pro qui élèvent chaque histoire de marque.",
      "motion graphics & montage",
    ),
    ayoub: placeholderPlan(
      "Nous ne trouvons pas seulement des sponsors — nous structurons des partenariats qui étendent la portée et le prestige.",
      "sponsoring",
    ),
    aymen: placeholderPlan(
      "Nous n'imprimons pas seulement — nous livrons un branding physique premium à la hauteur de votre marque.",
      "print",
    ),
    salma: placeholderPlan(
      "Nous n'animons pas seulement des événements — nous créons des expériences de marque qui engagent et marquent les esprits.",
      "animation",
    ),
    imene: placeholderPlan(
      "Nous n'animons pas seulement des événements — nous créons des expériences de marque qui engagent et marquent les esprits.",
      "animation",
    ),
    sofiane: placeholderPlan(
      "Nous ne prenons pas seulement des photos — nous créons des récits visuels qui capturent votre marque avec précision et style.",
      "photographie",
    ),
  },
  ar: {
    adem: marketingStrategy,
    mohamed: mediaBuyingStrategy,
    halla: communityStrategy,
    assil: placeholderPlan(
      "نحن لا نبني مواقع فقط — بل نطوّر منتجات رقمية عالية الأداء وقابلة للتوسع.",
      "development",
    ),
    malik: placeholderPlan(
      "نحن لا نبني تطبيقات فقط — بل نطوّر تجارب جوال عالية الأداء لـ iOS وAndroid.",
      "تطوير الجوال",
    ),
    younes: placeholderPlan(
      "نحن لا نبيع فقط — بل نبني أنظمة تجارية تحوّل العملاء المحتملين إلى عملاء أوفياء.",
      "commercial",
    ),
    roua: placeholderPlan(
      "نحن لا نجري مكالمات فقط — بل نقدّم تشغيلاً تجارياً احترافياً يحوّل العملاء المحتملين إلى فرص مؤهلة.",
      "تشغيل تجاري",
    ),
    aladdin: placeholderPlan(
      "نحن لا نصمم visuals فقط — بل نبني أنظمة marca ت communicate وت differentiate.",
      "design",
    ),
    zaki: placeholderPlan(
      "نحن لا نصور فقط — بل ننتج محتوى سينمائي يلفت الانتباه ويروي قصة علامتك.",
      "video",
    ),
    abdenour: placeholderPlan(
      "نحن لا نصوّر ونمونتاج فقط — بل نصنع سرداً بصرياً مصقولاً يرفع التفاعل.",
      "تصوير ومونتاج",
    ),
    amine: placeholderPlan(
      "نحن لا نقدّم موشن فقط — بل نصنع موشن جرافيك ومونتاجاً احترافياً يرفع قصة كل علامة.",
      "موشن جرافيك ومونتاج",
    ),
    ayoub: placeholderPlan(
      "نحن لا نجد رعاة فقط — بل نهيكل شراكات توسّع الوصول وترفع prestige العلامة.",
      "sponsoring",
    ),
    aymen: placeholderPlan("نحن لا نطبع فقط — بل نقدّم branding مادي premium.", "print"),
    salma: placeholderPlan(
      "نحن لا نقدّم فعاليات فقط — بل ننشّط تجارب علامة تجارية تلفت الجمهور وتترك انطباعاً دائماً.",
      "تنشيط",
    ),
    imene: placeholderPlan(
      "نحن لا نقدّم فعاليات فقط — بل ننشّط تجارب علامة تجارية تلفت الجمهور وتترك انطباعاً دائماً.",
      "تنشيط",
    ),
    sofiane: placeholderPlan(
      "نحن لا نلتقط صوراً فقط — بل نصنع سرداً بصرياً يلتقط علامتك بدقة وأناقة.",
      "تصوير",
    ),
  },
};

export function getBusinessPlan(lang: Lang, memberId: string): BusinessPlan | undefined {
  return planTemplates[lang][memberId] ?? planTemplates.en[memberId];
}
