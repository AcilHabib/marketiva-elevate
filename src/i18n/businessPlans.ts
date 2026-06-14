import type { Lang } from "./translations";

export type PlanStep = {
  title: string;
  items: string[];
  outcome: string;
};

export type BusinessPlan = {
  intro: string;
  steps: PlanStep[];
  framework: string[];
  deliverables: string[];
  result: string;
};

const mohamedEn: BusinessPlan = {
  intro:
    "We don't just run ads—we build marketing systems designed to generate sustainable business growth.\n\nOur process is structured to help you understand exactly what happens after partnering with us and the value you'll receive at every stage.",
  steps: [
    {
      title: "Business Discovery & Analysis",
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
      items: [
        "Target audience segments",
        "Buyer personas",
        "Customer behaviors",
        "Customer needs and pain points",
        "Purchase motivations",
      ],
      outcome: "A deep understanding of who your customers are and how to communicate with them effectively.",
    },
    {
      title: "Competitor Analysis",
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
  result:
    "Most agencies sell advertising. We build complete growth systems. From market research and customer insights to execution and optimization, every step is designed to help your business attract, convert, and retain more customers while achieving sustainable growth.",
};

const mohamedFr: BusinessPlan = {
  intro:
    "Nous ne faisons pas que lancer des publicités — nous construisons des systèmes marketing conçus pour générer une croissance durable.\n\nNotre processus est structuré pour que vous compreniez exactement ce qui se passe après notre collaboration et la valeur reçue à chaque étape.",
  steps: mohamedEn.steps.map((s, i) => ({
    title: [
      "Analyse & découverte business",
      "Recherche audience cible",
      "Analyse concurrentielle",
      "Développement stratégie marketing",
      "Planification de l'exécution",
      "Lancement campagnes & acquisition",
      "Mesure & optimisation",
    ][i],
    items: s.items,
    outcome: s.outcome,
  })),
  framework: mohamedEn.framework,
  deliverables: mohamedEn.deliverables.map((d) =>
    d
      .replace("Comprehensive Market Research", "Étude de marché complète")
      .replace("Competitor Analysis Report", "Rapport d'analyse concurrentielle")
      .replace("Ideal Customer Profiles", "Profils clients idéaux")
      .replace("Customer Journey Mapping", "Cartographie du parcours client")
      .replace("Customized Marketing Strategy", "Stratégie marketing sur mesure")
      .replace("Content & Advertising Plan", "Plan contenu & publicité")
      .replace("Channel Selection Framework", "Framework de sélection des canaux")
      .replace("KPI & Performance Dashboard", "Dashboard KPI & performance")
      .replace("Ongoing Reporting & Optimization", "Reporting & optimisation continue"),
  ),
  result:
    "La plupart des agences vendent de la publicité. Nous construisons des systèmes de croissance complets — de la recherche marché à l'exécution et l'optimisation, chaque étape vise à attirer, convertir et fidéliser plus de clients.",
};

function adaptPlan(
  intro: string,
  focus: string,
  steps: PlanStep[],
  deliverables: string[],
  result: string,
): BusinessPlan {
  return {
    intro,
    steps,
    framework: mohamedEn.framework,
    deliverables,
    result,
  };
}

/** Role-tailored plans — editable later per member */
const planTemplates: Record<Lang, Record<string, BusinessPlan>> = {
  en: {
    mohamed: mohamedEn,
    assil: adaptPlan(
      "We don't just build websites—we engineer digital products designed for performance, scalability and business impact.",
      "development",
      mohamedEn.steps.map((s, i) => ({
        ...s,
        title: [
          "Product Discovery & Requirements",
          "User & Market Research",
          "Technical Architecture Planning",
          "UX/UI & Product Strategy",
          "Sprint Planning & Roadmap",
          "Development & Integration",
          "Testing, Launch & Optimization",
        ][i],
      })),
      [
        "Technical audit & architecture plan",
        "UX/UI wireframes & prototypes",
        "Full-stack or mobile application",
        "Admin dashboard & API integrations",
        "Performance & security optimization",
        "Documentation & handover",
      ],
      "From idea to production-ready digital products built to scale your business online.",
    ),
    younes: adaptPlan(
      "We don't just sell—we build commercial systems that convert prospects into loyal clients.",
      "commercial",
      mohamedEn.steps,
      ["Sales playbook", "Pitch decks & offers", "Client pipeline framework", "Partnership proposals", "Performance tracking"],
      "A structured commercial approach that drives revenue and long-term client relationships.",
    ),
    aladdin: adaptPlan(
      "We don't just design visuals—we build brand systems that communicate, differentiate and convert.",
      "design",
      mohamedEn.steps,
      ["Brand identity kit", "Logo & visual system", "Social & ad creatives", "3D assets", "Print-ready files"],
      "Distinctive design that elevates your brand across every touchpoint.",
    ),
    zaki: adaptPlan(
      "We don't just film—we produce cinematic content engineered to capture attention and tell your brand story.",
      "video production",
      mohamedEn.steps,
      ["Pre-production planning", "Professional filming", "B-roll & product shots", "Color-graded deliverables", "Multi-format exports"],
      "Premium video content that elevates your brand presence on every platform.",
    ),
    abdenour: adaptPlan(
      "We don't just edit clips—we craft polished video narratives with motion design that drives engagement.",
      "post-production",
      mohamedEn.steps,
      ["Edit timelines & storytelling", "Motion graphics & titles", "Sound design & mixing", "Short-form & long-form cuts", "Platform-optimized exports"],
      "Professional post-production that turns raw footage into high-converting brand content.",
    ),
    adem: adaptPlan(
      "We don't just post content—we build marketing strategies that align brand, audience and measurable growth.",
      "marketing",
      mohamedEn.steps,
      ["Market & brand audit", "Marketing strategy document", "Content calendar", "Campaign frameworks", "Analytics & reporting"],
      "Strategic marketing that connects your brand to the right audience with clear ROI.",
    ),
    halla: adaptPlan(
      "We don't just manage accounts—we build engaged communities and consistent brand voices online.",
      "community",
      mohamedEn.steps,
      ["Community audit", "Content strategy", "Engagement protocols", "Reputation management", "Monthly reporting"],
      "A loyal, active community that amplifies your brand organically.",
    ),
    ayoub: adaptPlan(
      "We don't just find sponsors—we structure partnerships that expand reach and brand prestige.",
      "sponsoring",
      mohamedEn.steps,
      ["Partnership mapping", "Sponsorship proposals", "Activation plans", "Media packages", "ROI tracking"],
      "Strategic sponsorships that open new audiences and elevate brand credibility.",
    ),
    aymen: adaptPlan(
      "We don't just print—we deliver premium physical branding that reflects your brand quality.",
      "print",
      mohamedEn.steps,
      ["Brand asset review", "Print specifications", "Material selection", "Production & quality control", "Delivery & installation support"],
      "High-quality print and signage that makes your brand tangible and memorable.",
    ),
  },
  fr: {
    mohamed: mohamedFr,
    assil: adaptPlan(
      "Nous ne faisons pas que des sites web — nous concevons des produits digitaux performants, scalables et orientés business.",
      "développement",
      mohamedFr.steps.map((s, i) => ({
        ...s,
        title: [
          "Découverte produit & cahier des charges",
          "Recherche utilisateurs & marché",
          "Architecture technique",
          "Stratégie UX/UI & produit",
          "Planification sprints & roadmap",
          "Développement & intégrations",
          "Tests, lancement & optimisation",
        ][i],
      })),
      [
        "Audit technique & plan d'architecture",
        "Wireframes & prototypes UX/UI",
        "Application web ou mobile complète",
        "Dashboard admin & intégrations API",
        "Optimisation performance & sécurité",
        "Documentation & transfert",
      ],
      "Des produits digitaux prêts pour la production, conçus pour faire grandir votre activité en ligne.",
    ),
    younes: adaptPlan(
      "Nous ne vendons pas seulement — nous construisons des systèmes commerciaux qui transforment les prospects en clients fidèles.",
      "commercial",
      mohamedFr.steps,
      ["Playbook commercial", "Pitch decks & offres", "Pipeline clients", "Propositions partenariats", "Suivi performance"],
      "Une approche commerciale structurée qui génère du chiffre d'affaires et des relations durables.",
    ),
    aladdin: adaptPlan(
      "Nous ne faisons pas que du visuel — nous construisons des systèmes de marque qui communiquent, différencient et convertissent.",
      "design",
      mohamedFr.steps,
      ["Kit identité de marque", "Logo & système visuel", "Créations social & ads", "Assets 3D", "Fichiers print-ready"],
      "Un design distinctif qui élève votre marque sur chaque point de contact.",
    ),
    zaki: adaptPlan(
      "Nous ne filmons pas seulement — nous produisons du contenu cinématographique qui capte l'attention et raconte votre marque.",
      "vidéo",
      mohamedFr.steps,
      ["Pré-production", "Tournage professionnel", "B-roll & plans produit", "Étalonnage", "Exports multi-formats"],
      "Du contenu vidéo premium qui renforce votre présence sur toutes les plateformes.",
    ),
    abdenour: adaptPlan(
      "Nous ne montons pas seulement — nous craftons des récits vidéo polis avec motion design orienté engagement.",
      "post-production",
      mohamedFr.steps,
      ["Montage & storytelling", "Motion graphics & titrages", "Sound design", "Formats court & long", "Exports optimisés plateformes"],
      "Une post-production pro qui transforme vos rushs en contenu de marque à forte conversion.",
    ),
    adem: adaptPlan(
      "Nous ne publions pas seulement — nous construisons des stratégies marketing alignées marque, audience et croissance mesurable.",
      "marketing",
      mohamedFr.steps,
      ["Audit marché & marque", "Document stratégie marketing", "Calendrier éditorial", "Frameworks campagnes", "Analytics & reporting"],
      "Un marketing stratégique qui connecte votre marque à la bonne audience avec un ROI clair.",
    ),
    halla: adaptPlan(
      "Nous ne gérons pas seulement des comptes — nous construisons des communautés engagées et une voix de marque cohérente.",
      "community",
      mohamedFr.steps,
      ["Audit communauté", "Stratégie contenu", "Protocoles d'engagement", "Gestion réputation", "Reporting mensuel"],
      "Une communauté fidèle et active qui amplifie votre marque organiquement.",
    ),
    ayoub: adaptPlan(
      "Nous ne trouvons pas seulement des sponsors — nous structurons des partenariats qui étendent la portée et le prestige.",
      "sponsoring",
      mohamedFr.steps,
      ["Cartographie partenaires", "Propositions sponsoring", "Plans d'activation", "Packages média", "Suivi ROI"],
      "Des sponsorings stratégiques qui ouvrent de nouvelles audiences et crédibilisent votre marque.",
    ),
    aymen: adaptPlan(
      "Nous n'imprimons pas seulement — nous livrons un branding physique premium à la hauteur de votre marque.",
      "print",
      mohamedFr.steps,
      ["Revue assets marque", "Spécifications print", "Sélection matériaux", "Production & contrôle qualité", "Livraison & installation"],
      "De l'impression et signalétique de qualité qui rend votre marque tangible et mémorable.",
    ),
  },
  ar: {
    mohamed: {
      ...mohamedEn,
      intro:
        "نحن لا نشغّل إعلانات فقط — بل نبني أنظمة تسويق مصممة لتحقيق نمو مستدام.\n\nعمليتنا منظمة لمساعدتك على فهم ما يحدث بعد الشراكة معنا والقيمة التي تتلقاها في كل مرحلة.",
      result:
        "معظم الوكالات تبيع الإعلانات. نحن نبني أنظمة نمو متكاملة — من بحث السوق إلى التنفيذ والتحسين، كل خطوة مصممة لجذب العملاء وتحويلهم والاحتفاظ بهم.",
    },
    assil: adaptPlan(
      "نحن لا نبني مواقع فقط — بل نطوّر منتجات رقمية عالية الأداء وقابلة للتوسع.",
      "development",
      mohamedEn.steps,
      ["خطة تقنية", "نماذج UX/UI", "تطبيق ويب أو جوال", "لوحة تحكم وتكاملات", "تحسين الأداء", "توثيق وتسليم"],
      "منتجات رقمية جاهزة للإنتاج تدعم نمو نشاطك على الإنترنت.",
    ),
    younes: adaptPlan(
      "نحن لا نبيع فقط — بل نبني أنظمة تجارية تحوّل العملاء المحتملين إلى عملاء أوفياء.",
      "commercial",
      mohamedEn.steps,
      ["دليل مبيعات", "عروض تقديمية", "مسار العملاء", "مقترحات شراكة", "متابعة الأداء"],
      "نهج تجاري منظم يولّد إيرادات وعلاقات طويلة الأمد.",
    ),
    aladdin: adaptPlan(
      "نحن لا نصمم visuals فقط — بل نبني أنظمة marca ت communicate وت differentiate.",
      "design",
      mohamedEn.steps,
      ["هوية بصرية", "شعار ونظام بصري", "تصاميم social", "أصول 3D", "ملفات جاهزة للطباعة"],
      "تصميم مميز يرفع علامتك في كل نقطة تواصل.",
    ),
    zaki: adaptPlan(
      "نحن لا نصور فقط — بل ننتج محتوى سينمائي يلفت الانتباه ويروي قصة علامتك.",
      "video",
      mohamedEn.steps,
      ["تخطيط pre-production", "تصوير احترافي", "لقطات produit", "color grading", "exports متعددة"],
      "محتوى فيديو premium يعزز حضور علامتك.",
    ),
    abdenour: adaptPlan(
      "نحن لا نmontage فقط — بل نصنع سرداً بصرياً مصقولاً مع motion design.",
      "post-production",
      mohamedEn.steps,
      ["montage & storytelling", "motion graphics", "sound design", "formats قصيرة وطويلة", "exports للمنصات"],
      "post-production احترافي يحوّل اللقطات إلى محتوى عالي التأثير.",
    ),
    adem: adaptPlan(
      "نحن لا ننشر فقط — بل نبني استراتيجيات marketing متوافقة مع العلامة والجمهور والنمو.",
      "marketing",
      mohamedEn.steps,
      ["audit السوق", "استرategie marketing", "تقويم محتوى", "frameworks حملات", "تقارير analytics"],
      "marketing استراتيجي يربط علامتك بالجمهور المناسب مع ROI واضح.",
    ),
    halla: adaptPlan(
      "نحن لا ندير حسابات فقط — بل نبني مجتمعات نشطة وصوت marca متسق.",
      "community",
      mohamedEn.steps,
      ["audit المجتمع", "استرategie محتوى", "engagement", "إدارة السمعة", "تقارير شهرية"],
      "مجتمع وفiel يعزّز علامتك organically.",
    ),
    ayoub: adaptPlan(
      "نحن لا نجد رعاة فقط — بل نهيكل شراكات توسّع الوصول وترفع prestige العلامة.",
      "sponsoring",
      mohamedEn.steps,
      ["خريطة شركاء", "مقترحات رعاية", "خطط تفعيل", "حزم media", "ROI"],
      "رعايات استراتيجية تفتح جماهير جديدة.",
    ),
    aymen: adaptPlan(
      "نحن لا نطبع فقط — بل نقدّم branding مادي premium.",
      "print",
      mohamedEn.steps,
      ["مراجعة assets", "مواصفات طباعة", "اختيار مواد", "إنتاج وجودة", "تسليم وتركيب"],
      "طباعة وsignalétique عالية الجودة تجعل علامتك ملموسة.",
    ),
  },
};

export function getBusinessPlan(lang: Lang, memberId: string): BusinessPlan | undefined {
  return planTemplates[lang][memberId] ?? planTemplates.en[memberId];
}
