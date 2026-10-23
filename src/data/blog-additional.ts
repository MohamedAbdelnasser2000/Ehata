import type { BlogPost } from "@/data/blog";

const PUBLISHED_AT = "2026-10-23";

export const ADDITIONAL_BLOG_POSTS: BlogPost[] = [
  {
    slug: "ready-made-erp-vs-custom-software",
    category: { en: "ERP & business software", ar: "أنظمة ERP وبرمجيات الأعمال" },
    title: {
      en: "Off-the-Shelf ERP vs Custom Software: How to Choose",
      ar: "نظام ERP جاهز أم برمجيات مخصصة؟ كيف تختار لشركتك؟",
    },
    excerpt: {
      en: "Choose ready-made ERP when standard workflows fit; consider custom software when essential processes or integrations cannot be handled cleanly without costly workarounds.",
      ar: "اختر نظام ERP جاهزًا عندما تناسبك إجراءاته القياسية، وفكّر في البرمجيات المخصصة عندما تتطلب العمليات الأساسية أو التكاملات حلولًا ملتوية ومكلفة.",
    },
    publishedAt: PUBLISHED_AT,
    readingMinutes: 7,
    serviceId: "erp",
    relatedProjectId: "enterprise-erp",
    sections: [
      {
        heading: {
          en: "The short answer: compare process fit, not labels",
          ar: "الإجابة المختصرة: قارن ملاءمة الإجراءات لا أسماء الحلول",
        },
        paragraphs: [
          {
            en: "A ready-made ERP is usually the better starting point when its standard workflows cover most of your real requirements and the vendor can support the integrations, reporting, and controls you need. Custom software becomes worth evaluating when a small number of business-critical workflows are genuinely distinctive and adapting them would create brittle workarounds.",
            ar: "غالبًا يكون ERP الجاهز نقطة بداية أفضل عندما تغطي إجراءاته القياسية معظم احتياجاتك الفعلية، ويستطيع مزوده دعم التكاملات والتقارير والضوابط المطلوبة. ويستحق البرنامج المخصص الدراسة عندما تكون بعض إجراءات العمل الأساسية مختلفة فعلًا، ويؤدي تكييف النظام الجاهز إلى حلول التفافية هشة.",
          },
          {
            en: "There is also a middle path: configure an existing product, extend it through supported integrations, or build a focused application around it. The right choice depends on total ownership cost, internal capability, risk, and how much the process differentiates the business.",
            ar: "وهناك حل وسط أيضًا: تهيئة منتج موجود، أو توسيعه بتكاملات مدعومة، أو بناء تطبيق محدد حوله. يتوقف الاختيار على التكلفة الكلية للامتلاك والقدرات الداخلية والمخاطر ومدى تميّز الشركة بإجراءاتها.",
          },
        ],
      },
      {
        heading: {
          en: "When ready-made ERP is a practical fit",
          ar: "متى يكون ERP الجاهز خيارًا عمليًا؟",
        },
        paragraphs: [
          {
            en: "A standard ERP can reduce the amount of software your team must design and maintain. It is a strong candidate when your accounting, purchasing, sales, and inventory processes are broadly conventional, the product supports your required language and local business rules, and its release and support model are acceptable.",
            ar: "قد يقلل ERP الجاهز مقدار البرمجيات التي يحتاج فريقك إلى تصميمها وصيانتها. ويكون خيارًا مناسبًا عندما تكون إجراءات المحاسبة والمشتريات والمبيعات والمخزون قريبة من الممارسات المعتادة، ويدعم المنتج اللغة والقواعد المحلية المطلوبة، وتناسبك آلية تحديثه ودعمه.",
          },
        ],
        bullets: [
          {
            en: "Use a scripted demo to test your own common and exception workflows.",
            ar: "استخدم سيناريو عرض مكتوبًا لاختبار إجراءاتك المعتادة والاستثنائية.",
          },
          {
            en: "Price configuration, migration, training, integrations, and recurring fees—not only the license.",
            ar: "احسب التهيئة وترحيل البيانات والتدريب والتكاملات والرسوم المتكررة، لا الترخيص وحده.",
          },
          {
            en: "Confirm how you can export your data and what support is included.",
            ar: "تحقق من طريقة تصدير بياناتك وما يشمله الدعم.",
          },
        ],
      },
      {
        heading: {
          en: "When custom software may be justified",
          ar: "متى قد يكون البرنامج المخصص مبررًا؟",
        },
        paragraphs: [
          {
            en: "Custom development may fit when a distinctive workflow is central to how you deliver value, when essential systems cannot exchange data reliably through supported interfaces, or when a standard product forces repeated manual reconciliation. Document the gap and its operational consequences before deciding that code is the answer.",
            ar: "قد يناسب التطوير المخصص نشاطك عندما تكون هناك عملية مميزة في صميم تقديم القيمة، أو عندما لا تستطيع الأنظمة الأساسية تبادل البيانات بموثوقية عبر واجهات مدعومة، أو عندما يفرض المنتج القياسي مطابقة يدوية متكررة. وثّق الفجوة وأثرها التشغيلي قبل اعتبار البرمجة هي الحل.",
          },
          {
            en: "A custom system also creates ongoing responsibilities: product ownership, security updates, testing, backups, monitoring, documentation, and a plan for the people who maintain it. Include these costs and dependencies in the decision.",
            ar: "ينشئ النظام المخصص مسؤوليات مستمرة أيضًا، منها ملكية المنتج وتحديثات الأمان والاختبارات والنسخ الاحتياطية والمراقبة والتوثيق وخطة صيانة النظام. أدخل هذه التكاليف والاعتماديات في قرارك.",
          },
        ],
      },
      {
        heading: {
          en: "Use a weighted decision checklist",
          ar: "استخدم قائمة قرار بأوزان واضحة",
        },
        paragraphs: [
          {
            en: "Score each option against agreed criteria rather than choosing from a persuasive demo. Give more weight to process fit, integration reliability, data ownership, usability, security, support, and total cost over the period you expect to use the system.",
            ar: "قيّم كل خيار وفق معايير متفق عليها بدل الاختيار بناءً على عرض تقديمي مقنع. أعطِ وزنًا أكبر لملاءمة الإجراءات وموثوقية التكامل وملكية البيانات وسهولة الاستخدام والأمان والدعم والتكلفة الكلية خلال مدة الاستخدام المتوقعة.",
          },
        ],
        bullets: [
          {
            en: "List must-have requirements separately from preferences.",
            ar: "افصل المتطلبات الإلزامية عن التفضيلات.",
          },
          {
            en: "Record every workaround, manual hand-off, and dependency in the demo.",
            ar: "سجّل كل حل التفافي وتسليم يدوي واعتماد ظهر أثناء العرض.",
          },
          {
            en: "Run a limited pilot with representative users and real-shaped sample data.",
            ar: "نفّذ تجربة محدودة بمستخدمين ممثلين وبيانات تجريبية تشبه الواقع.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          en: "Is custom ERP always more expensive than ready-made ERP?",
          ar: "هل ERP المخصص أغلى دائمًا من النظام الجاهز؟",
        },
        answer: {
          en: "Not in every situation, but the license price alone cannot answer the question. Compare configuration, development, integrations, migration, training, support, upgrades, and long-term maintenance over the same time period.",
          ar: "ليس في كل الحالات، لكن سعر الترخيص وحده لا يكفي للمقارنة. قارن التهيئة والتطوير والتكاملات وترحيل البيانات والتدريب والدعم والتحديثات والصيانة طويلة الأجل خلال الفترة نفسها.",
        },
      },
      {
        question: {
          en: "Can a business combine ready-made ERP with custom software?",
          ar: "هل يمكن الجمع بين ERP جاهز وبرمجيات مخصصة؟",
        },
        answer: {
          en: "Yes. A business can keep standard finance or inventory functions in an ERP and connect a focused application for a distinctive workflow, provided ownership, interfaces, and failure handling are clearly designed.",
          ar: "نعم. يمكن للشركة إبقاء الوظائف القياسية للمحاسبة أو المخزون في ERP وربط تطبيق متخصص بإجراء مميز، بشرط تحديد ملكية البيانات والواجهات وطريقة معالجة فشل التكامل.",
        },
      },
      {
        question: {
          en: "What should we test before buying an ERP?",
          ar: "ماذا نختبر قبل شراء نظام ERP؟",
        },
        answer: {
          en: "Test end-to-end workflows with your roles and realistic records, including approvals, returns, corrections, integrations, and reports. Ask the vendor to show how exceptions are handled, not only the ideal path.",
          ar: "اختبر الإجراءات من بدايتها إلى نهايتها باستخدام الأدوار والسجلات الواقعية، بما يشمل الموافقات والمرتجعات والتصحيحات والتكاملات والتقارير. اطلب من المزود توضيح معالجة الحالات الاستثنائية، لا المسار المثالي فقط.",
        },
      },
    ],
  },
  {
    slug: "erp-system-cost-factors",
    category: { en: "ERP planning", ar: "التخطيط لأنظمة ERP" },
    title: {
      en: "How Much Does an ERP System Cost? A Practical Cost Breakdown",
      ar: "كم تكلفة نظام ERP؟ العوامل التي تحدد تكلفة التنفيذ",
    },
    excerpt: {
      en: "There is no reliable one-size-fits-all ERP price. Estimate the full project by separating software, implementation, migration, integrations, training, and ongoing ownership.",
      ar: "لا يوجد سعر موحّد موثوق لكل أنظمة ERP. قدّر التكلفة الكاملة بفصل البرمجيات والتنفيذ وترحيل البيانات والتكاملات والتدريب وتكاليف التشغيل المستمرة.",
    },
    publishedAt: PUBLISHED_AT,
    readingMinutes: 7,
    serviceId: "erp",
    relatedProjectId: "enterprise-erp",
    sections: [
      {
        heading: {
          en: "Why ERP prices vary so much",
          ar: "لماذا تختلف أسعار ERP بهذا الشكل؟",
        },
        paragraphs: [
          {
            en: "The cost of an ERP system depends on the workflows in scope, number and type of users, deployment model, data condition, integrations, reporting, security needs, and the level of configuration or custom development. A quote without those assumptions is not a meaningful comparison.",
            ar: "تعتمد تكلفة نظام ERP على الإجراءات المطلوبة وأنواع المستخدمين وعددهم وطريقة الاستضافة وحالة البيانات والتكاملات والتقارير واحتياجات الأمان وحجم التهيئة أو التطوير المخصص. لا تكون عروض الأسعار قابلة للمقارنة دون توضيح هذه الافتراضات.",
          },
          {
            en: "Ask each supplier to price the same written scope and identify what is excluded. An implementation estimate should distinguish one-time project work from recurring subscription, hosting, support, and maintenance charges.",
            ar: "اطلب من كل مزود تسعير نطاق مكتوب وموحد، مع توضيح البنود المستثناة. وينبغي أن يفصل تقدير التنفيذ بين أعمال المشروع لمرة واحدة ورسوم الاشتراك والاستضافة والدعم والصيانة المتكررة.",
          },
        ],
      },
      {
        heading: {
          en: "Build a complete ERP budget",
          ar: "كوّن ميزانية ERP كاملة",
        },
        paragraphs: [
          {
            en: "A useful budget lists the work required before launch and the costs of operating the system afterward. Include internal staff time as well as supplier invoices: process owners, data cleanup, testing, training, and change management all consume real capacity.",
            ar: "تسرد الميزانية المفيدة الأعمال المطلوبة قبل الإطلاق وتكاليف تشغيل النظام بعده. أدرج وقت موظفي الشركة إلى جانب فواتير المزود؛ فتحديد مسؤولي الإجراءات وتنظيف البيانات والاختبار والتدريب وإدارة التغيير كلها تستهلك وقتًا وموارد.",
          },
        ],
        bullets: [
          {
            en: "Software subscriptions or licenses, hosting, environments, and storage.",
            ar: "اشتراكات البرمجيات أو تراخيصها والاستضافة والبيئات ومساحات التخزين.",
          },
          {
            en: "Discovery, configuration, development, project management, and testing.",
            ar: "تحليل الاحتياجات والتهيئة والتطوير وإدارة المشروع والاختبار.",
          },
          {
            en: "Data cleansing, migration, reconciliation, and archival.",
            ar: "تنظيف البيانات وترحيلها ومطابقتها وأرشفتها.",
          },
          {
            en: "Integrations, user training, support, upgrades, and internal ownership.",
            ar: "التكاملات وتدريب المستخدمين والدعم والتحديثات ومسؤولية التشغيل الداخلية.",
          },
        ],
      },
      {
        heading: {
          en: "The main factors that change implementation effort",
          ar: "أهم العوامل التي تغير جهد التنفيذ",
        },
        paragraphs: [
          {
            en: "Implementation effort increases when processes are undocumented, departments use different definitions for the same records, legacy data is inconsistent, or approvals and exceptions are unclear. Multiple legal entities, branches, warehouses, currencies, and external systems may add requirements that need to be discovered and tested.",
            ar: "يزداد جهد التنفيذ عندما تكون الإجراءات غير موثقة، أو تستخدم الإدارات تعريفات مختلفة للسجلات نفسها، أو تكون البيانات القديمة غير متسقة، أو تكون الموافقات والاستثناءات غير واضحة. وقد تضيف الكيانات والفروع والمخازن والعملات والأنظمة الخارجية متطلبات ينبغي تحليلها واختبارها.",
          },
          {
            en: "Custom features are not automatically bad, but each one should solve a validated need and have a named owner. Ask what can be handled by configuration, what needs an integration, and what genuinely requires new development.",
            ar: "ليست المميزات المخصصة سيئة تلقائيًا، لكن يجب أن تحل كل ميزة حاجة مؤكدة وأن يكون لها مسؤول معروف. اسأل ما الذي تحله التهيئة، وما الذي يحتاج إلى تكامل، وما الذي يتطلب تطويرًا جديدًا فعلًا.",
          },
        ],
      },
      {
        heading: {
          en: "How to compare quotes and reduce uncertainty",
          ar: "كيف تقارن العروض وتقلل الغموض؟",
        },
        paragraphs: [
          {
            en: "Compare proposals against one requirements document, one set of sample scenarios, and the same time horizon. Request a phased plan with acceptance criteria, named deliverables, dependencies, assumptions, change-control rules, and a clear description of post-launch support.",
            ar: "قارن المقترحات باستخدام وثيقة متطلبات واحدة وسيناريوهات تجريبية موحدة وفترة زمنية مشتركة. اطلب خطة مرحلية تتضمن معايير القبول والمخرجات والاعتماديات والافتراضات وآلية ضبط التغيير ووصفًا واضحًا للدعم بعد الإطلاق.",
          },
          {
            en: "A discovery workshop or pilot can expose uncertainty before a full commitment. It should produce concrete outputs such as mapped workflows, data findings, integration boundaries, and a revised estimate—not just a presentation.",
            ar: "قد تكشف ورشة تحليل أو تجربة محدودة الغموض قبل الالتزام بالمشروع كاملًا. ينبغي أن تنتج مخرجات ملموسة مثل خرائط الإجراءات ونتائج فحص البيانات وحدود التكامل وتقدير منقح، لا مجرد عرض تقديمي.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          en: "Can I get an accurate ERP price before requirements are defined?",
          ar: "هل يمكن الحصول على سعر دقيق لنظام ERP قبل تحديد المتطلبات؟",
        },
        answer: {
          en: "You can get an initial range only when its assumptions are explicit; a dependable fixed estimate needs a defined scope, data and integration review, and clear acceptance criteria.",
          ar: "يمكن الحصول على تقدير مبدئي إذا كانت افتراضاته واضحة؛ أما التقدير الثابت الموثوق فيحتاج إلى نطاق محدد ومراجعة للبيانات والتكاملات ومعايير قبول واضحة.",
        },
      },
      {
        question: {
          en: "Which ERP costs are commonly missed?",
          ar: "ما تكاليف ERP التي غالبًا ما تُنسى؟",
        },
        answer: {
          en: "Data cleanup, internal staff time, integrations, training, testing, support, upgrades, and ongoing hosting are often separated from the headline license or implementation price.",
          ar: "غالبًا ما تُفصل أعمال تنظيف البيانات ووقت الموظفين والتكاملات والتدريب والاختبارات والدعم والتحديثات والاستضافة المستمرة عن سعر الترخيص أو التنفيذ المعلن.",
        },
      },
      {
        question: {
          en: "Should ERP implementation be delivered all at once or in phases?",
          ar: "هل يُنفذ ERP دفعة واحدة أم على مراحل؟",
        },
        answer: {
          en: "Phasing can limit the initial scope and let teams validate workflows, but phases need clear dependencies and data ownership to avoid creating disconnected systems or duplicate work.",
          ar: "قد تحد المراحل من النطاق الأولي وتتيح للفرق التحقق من الإجراءات، لكنها تحتاج إلى تحديد الاعتماديات وملكية البيانات حتى لا تنشئ أنظمة منفصلة أو عملًا مكررًا.",
        },
      },
    ],
  },
  {
    slug: "inventory-management-system-selection",
    category: { en: "Inventory & operations", ar: "المخزون والعمليات" },
    title: {
      en: "How to Choose an Inventory Management System for Your Business",
      ar: "كيف تختار نظام إدارة مخزون يناسب شركتك؟ دليل عملي",
    },
    excerpt: {
      en: "Choose inventory software by mapping how stock is received, stored, reserved, moved, counted, and sold—then test the exceptions that cause costly errors.",
      ar: "اختر نظام المخزون بعد رسم طريقة استلام الأصناف وتخزينها وحجزها ونقلها وجردها وبيعها، ثم اختبر الحالات الاستثنائية التي تسبب الأخطاء.",
    },
    publishedAt: PUBLISHED_AT,
    readingMinutes: 7,
    serviceId: "erp",
    relatedProjectId: "enterprise-erp",
    sections: [
      {
        heading: {
          en: "Start by mapping the movement of every item",
          ar: "ابدأ برسم حركة كل صنف",
        },
        paragraphs: [
          {
            en: "An inventory management system records more than the quantity on hand. It should make the path of stock understandable: receiving, inspection, put-away, reservation, picking, dispatch, return, adjustment, and count. Map who performs each step and what evidence or approval is required.",
            ar: "يسجل نظام إدارة المخزون أكثر من الكمية المتاحة. ينبغي أن يوضح مسار الصنف: الاستلام والفحص والتخزين والحجز والالتقاط والتسليم والمرتجع والتسوية والجرد. حدّد من ينفذ كل خطوة وما يلزمها من إثبات أو موافقة.",
          },
          {
            en: "Write down the cases that do not follow the normal path, such as damaged goods, partial receipts, substitutions, transfers, customer returns, and stock held for quality review. These cases are essential acceptance tests, not edge details to postpone.",
            ar: "دوّن الحالات الخارجة عن المسار المعتاد، مثل البضائع التالفة والاستلام الجزئي والبدائل والتحويلات ومرتجعات العملاء والمخزون الموقوف للفحص. هذه الحالات اختبارات قبول أساسية وليست تفاصيل هامشية يمكن تأجيلها.",
          },
        ],
      },
      {
        heading: {
          en: "Match capabilities to your stock and locations",
          ar: "طابق إمكانات النظام مع أصنافك ومواقعك",
        },
        paragraphs: [
          {
            en: "The right feature set depends on what you store. A distributor may need multiple warehouses, bins, units of measure, and replenishment rules. A business dealing with expiry-sensitive goods may need batch or lot tracking and clear handling of near-expiry stock. Serial numbers, variants, kits, and barcode scanning matter only when they support actual processes.",
            ar: "تعتمد المميزات المطلوبة على طبيعة ما تخزنه. فقد يحتاج الموزع إلى عدة مخازن ومواقع تخزين ووحدات قياس وقواعد إعادة توريد. وقد يحتاج النشاط الذي يتعامل مع أصناف ذات صلاحية إلى تتبع الدفعات وتوضيح كيفية التعامل مع الأصناف القريبة من انتهاء الصلاحية. ولا تلزم الأرقام التسلسلية والمتغيرات والتجميعات والباركود إلا عندما تدعم إجراءً فعليًا.",
          },
        ],
        bullets: [
          {
            en: "Check multiple branches, stock ownership, and inter-warehouse transfers.",
            ar: "تحقق من دعم الفروع وملكية المخزون والتحويل بين المخازن.",
          },
          {
            en: "Confirm unit conversions, item variants, batches, expiry dates, or serials where needed.",
            ar: "تحقق من وحدات القياس والمتغيرات والدفعات والصلاحية أو الأرقام التسلسلية عند الحاجة.",
          },
          {
            en: "Define when stock is available, reserved, damaged, or under inspection.",
            ar: "عرّف متى يكون المخزون متاحًا أو محجوزًا أو تالفًا أو قيد الفحص.",
          },
        ],
      },
      {
        heading: {
          en: "Check sales, purchasing, and accounting connections",
          ar: "تحقق من ارتباط المبيعات والمشتريات والمحاسبة",
        },
        paragraphs: [
          {
            en: "Inventory accuracy depends on the events that change stock. Test how the system connects purchase receipts, sales orders, invoices, returns, transfers, and adjustments. Agree which system owns product details and how financial values reconcile with inventory movements.",
            ar: "تعتمد دقة المخزون على الأحداث التي تغير الكميات. اختبر ارتباط النظام باستلامات الشراء وطلبات البيع والفواتير والمرتجعات والتحويلات والتسويات. اتفق على النظام المسؤول عن بيانات الأصناف وكيفية مطابقة القيم المالية مع حركات المخزون.",
          },
          {
            en: "If you sell online or dispatch through a courier, define how order status and available quantities are synchronized, how duplicate messages are handled, and who investigates failed connections.",
            ar: "إذا كنت تبيع عبر الإنترنت أو تسلّم الطلبات لشركة توصيل، فحدّد كيفية مزامنة حالة الطلب والكميات المتاحة، ومعالجة الرسائل المكررة، والجهة المسؤولة عن فحص فشل الاتصال.",
          },
        ],
      },
      {
        heading: {
          en: "Run a warehouse pilot before rollout",
          ar: "نفّذ تجربة في المخزن قبل التعميم",
        },
        paragraphs: [
          {
            en: "Use representative items and users to test receiving, put-away, picking, packing, dispatch, returns, and cycle counts. Compare the system record with a physical count, and confirm that staff can explain a discrepancy and trace who made an adjustment.",
            ar: "استخدم أصنافًا ومستخدمين ممثلين لاختبار الاستلام والتخزين والالتقاط والتعبئة والتسليم والمرتجعات والجرد الدوري. قارن سجل النظام بالعد الفعلي، وتأكد من قدرة الموظفين على تفسير الفرق ومعرفة من أجرى التسوية.",
          },
          {
            en: "Choose operational reports that prompt action: items below an agreed threshold, orders waiting for picking, receipts needing inspection, and unresolved stock differences. Agree on definitions before comparing performance between locations.",
            ar: "اختر تقارير تدفع إلى إجراء، مثل الأصناف دون حد متفق عليه والطلبات المنتظرة للالتقاط والاستلامات التي تحتاج فحصًا وفروقات المخزون غير المحلولة. اتفق على تعريف المؤشرات قبل مقارنة الأداء بين المواقع.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          en: "What is the most important feature in inventory software?",
          ar: "ما أهم ميزة في برنامج إدارة المخزون؟",
        },
        answer: {
          en: "The most important capability is a reliable, traceable record of stock movements that matches your real receiving, storage, picking, sales, returns, and counting workflows.",
          ar: "أهم قدرة هي تسجيل موثوق وقابل للتتبع لحركات المخزون، ومتوافق مع إجراءات الاستلام والتخزين والالتقاط والبيع والمرتجعات والجرد الفعلية.",
        },
      },
      {
        question: {
          en: "Does a small business need barcode inventory software?",
          ar: "هل يحتاج النشاط الصغير إلى نظام مخزون بالباركود؟",
        },
        answer: {
          en: "Barcode scanning can help when manual item identification or entry is a recurring source of errors, but it should be evaluated with the scanning hardware, labels, workflows, and staff training it requires.",
          ar: "قد يساعد مسح الباركود عندما يتسبب التعرف اليدوي على الأصناف أو إدخالها في أخطاء متكررة، لكن ينبغي تقييمه مع أجهزة المسح والملصقات والإجراءات والتدريب اللازم.",
        },
      },
      {
        question: {
          en: "How can we test an inventory management system?",
          ar: "كيف نختبر نظام إدارة المخزون؟",
        },
        answer: {
          en: "Run a pilot using representative products and warehouse users. Test normal movements and exceptions, compare recorded quantities with a physical count, and verify adjustment approvals and traceability.",
          ar: "نفّذ تجربة بأصناف ومستخدمي مخزن ممثلين. اختبر الحركات المعتادة والاستثنائية، وقارن الكميات المسجلة بالجرد الفعلي، وتحقق من موافقات التسوية وإمكانية تتبعها.",
        },
      },
    ],
  },
  {
    slug: "dental-clinic-management-software-checklist",
    category: { en: "Clinic software", ar: "أنظمة إدارة العيادات" },
    title: {
      en: "Dental Clinic Management Software: What to Check Before Choosing",
      ar: "نظام إدارة عيادة الأسنان: ما الذي يجب مراجعته قبل الاختيار؟",
    },
    excerpt: {
      en: "Evaluate dental clinic software against the daily patient journey: appointments, clinical records, treatment plans, billing, inventory, permissions, and privacy.",
      ar: "قيّم نظام عيادة الأسنان وفق رحلة المريض اليومية: المواعيد والسجلات والخطط العلاجية والفوترة والمخزون والصلاحيات والخصوصية.",
    },
    publishedAt: PUBLISHED_AT,
    readingMinutes: 7,
    serviceId: "custom-software",
    relatedProjectId: "dental-clinic",
    sections: [
      {
        heading: {
          en: "Map the patient journey before comparing software",
          ar: "ارسم رحلة المريض قبل مقارنة الأنظمة",
        },
        paragraphs: [
          {
            en: "Dental clinic management software should support the hand-offs from booking to check-in, consultation, treatment planning, payment, and follow-up. Map how reception, clinicians, assistants, and finance staff use information, and identify where double entry or missed hand-offs happen today.",
            ar: "ينبغي أن يدعم نظام إدارة عيادة الأسنان انتقال العمل من الحجز إلى تسجيل الوصول والاستشارة والخطة العلاجية والسداد والمتابعة. ارسم طريقة استخدام الاستقبال والأطباء والمساعدين والمالية للمعلومات، وحدّد مواضع تكرار الإدخال أو تعثر التسليم بين الفرق.",
          },
          {
            en: "Keep clinical decisions with qualified professionals. The software should organize and protect records, not make clinical judgments or replace the clinic's professional and legal responsibilities.",
            ar: "تبقى القرارات السريرية للمختصين المؤهلين. دور النظام تنظيم السجلات وحمايتها، لا اتخاذ قرارات طبية أو استبدال المسؤوليات المهنية والقانونية للعيادة.",
          },
        ],
      },
      {
        heading: {
          en: "Assess the daily workflow features",
          ar: "قيّم مميزات إجراءات العمل اليومية",
        },
        paragraphs: [
          {
            en: "Look for scheduling that reflects your providers, rooms, appointment types, and cancellation rules. Patient profiles should make relevant history accessible to authorized staff, while treatment plans, notes, attachments, and follow-up tasks should be organized around the clinic's actual process.",
            ar: "ابحث عن جدول مواعيد يعكس الأطباء والغرف وأنواع الزيارات وقواعد الإلغاء. ينبغي أن تتيح ملفات المرضى السجل المناسب للموظفين المصرح لهم، وأن تُنظم الخطط والملاحظات والمرفقات ومهام المتابعة وفق إجراءات العيادة الفعلية.",
          },
        ],
        bullets: [
          {
            en: "Appointment calendar, reminders, cancellations, and waiting lists.",
            ar: "جدول المواعيد والتذكيرات والإلغاءات وقوائم الانتظار.",
          },
          {
            en: "Patient history, treatment plans, clinical notes, and attachments.",
            ar: "سجل المريض والخطط العلاجية والملاحظات والمرفقات.",
          },
          {
            en: "Billing, receipts, balances, and authorized financial adjustments.",
            ar: "الفوترة والإيصالات والأرصدة والتسويات المالية المصرح بها.",
          },
          {
            en: "Materials inventory, alerts, and links to purchasing where needed.",
            ar: "مخزون المستلزمات والتنبيهات والربط بالمشتريات عند الحاجة.",
          },
        ],
      },
      {
        heading: {
          en: "Protect access to sensitive patient information",
          ar: "احمِ الوصول إلى معلومات المرضى الحساسة",
        },
        paragraphs: [
          {
            en: "Ask how the system separates roles, records access, backs up data, and restores service after an incident. Confirm how information is exported, retained, and deleted, and review hosting, vendor access, and integrations against the privacy and health-data rules that apply in your jurisdiction.",
            ar: "اسأل كيف يفصل النظام الصلاحيات ويسجل الوصول وينسخ البيانات احتياطيًا ويستعيد الخدمة بعد الحوادث. تحقق من طريقة تصدير المعلومات والاحتفاظ بها وحذفها، وراجع الاستضافة ووصول المزود والتكاملات وفق قواعد الخصوصية والبيانات الصحية المعمول بها في بلدك.",
          },
          {
            en: "Do not assume a product is compliant just because a supplier says it is secure. Ask for the controls and contractual responsibilities that support your clinic's own assessment.",
            ar: "لا تفترض امتثال المنتج لمجرد قول المزود إنه آمن. اطلب الضوابط والمسؤوليات التعاقدية التي تساعد العيادة على إجراء تقييمها.",
          },
        ],
      },
      {
        heading: {
          en: "Test real clinic scenarios and migration",
          ar: "اختبر سيناريوهات العيادة الفعلية وترحيل البيانات",
        },
        paragraphs: [
          {
            en: "Test a new booking, a reschedule, a missed appointment, a multi-visit treatment plan, a payment adjustment, and a staff hand-over. Use sample records and verify that access permissions behave as intended at every step.",
            ar: "اختبر حجزًا جديدًا وتغيير موعد وغياب مريض وخطة علاج متعددة الزيارات وتسوية دفعة وتسليم مهمة بين الموظفين. استخدم سجلات تجريبية وتحقق من عمل الصلاحيات كما هو مطلوب في كل خطوة.",
          },
          {
            en: "Before migrating patient or financial records, agree on the lawful scope, mapping, data quality checks, reconciliation, and fallback plan. Have the clinic's responsible professionals review the migration before relying on the new system.",
            ar: "قبل ترحيل سجلات المرضى أو الحسابات، اتفق على النطاق المسموح به وربط الحقول وفحوص جودة البيانات والمطابقة وخطة التراجع. اطلب من مسؤولي العيادة مراجعة الترحيل قبل الاعتماد على النظام الجديد.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          en: "What should dental clinic management software include?",
          ar: "ماذا ينبغي أن يتضمن نظام إدارة عيادة الأسنان؟",
        },
        answer: {
          en: "It should fit the clinic's appointment, patient-record, treatment-plan, billing, inventory, reporting, and access-control workflows, with privacy and data handling reviewed for local requirements.",
          ar: "ينبغي أن يلائم إجراءات المواعيد وسجلات المرضى والخطط العلاجية والفوترة والمخزون والتقارير والصلاحيات، مع مراجعة الخصوصية والتعامل مع البيانات وفق المتطلبات المحلية.",
        },
      },
      {
        question: {
          en: "Can clinic software migrate existing patient records?",
          ar: "هل يمكن نقل سجلات المرضى الحالية إلى النظام الجديد؟",
        },
        answer: {
          en: "Migration may be possible, but first assess permission, data quality, field mapping, access restrictions, reconciliation, retention, and a rollback plan with the clinic's responsible professionals.",
          ar: "قد يكون الترحيل ممكنًا، لكن يجب أولًا تقييم الصلاحيات وجودة البيانات وربط الحقول وقيود الوصول والمطابقة والاحتفاظ وخطة التراجع بمشاركة مسؤولي العيادة.",
        },
      },
      {
        question: {
          en: "How do we compare dental clinic software safely?",
          ar: "كيف نقارن أنظمة عيادات الأسنان بطريقة آمنة؟",
        },
        answer: {
          en: "Use fictional or properly authorized test data to walk through representative clinic workflows, then review roles, audit records, backups, exports, incident handling, and applicable privacy obligations.",
          ar: "استخدم بيانات تجريبية غير حقيقية أو مصرحًا بها لاختبار إجراءات العيادة، ثم راجع الأدوار وسجلات التدقيق والنسخ الاحتياطية والتصدير ومعالجة الحوادث والتزامات الخصوصية.",
        },
      },
    ],
  },
  {
    slug: "pharmacy-inventory-pos-system-guide",
    category: { en: "Pharmacy systems", ar: "أنظمة الصيدليات" },
    title: {
      en: "Pharmacy Inventory and POS Software: A Practical Buying Guide",
      ar: "نظام إدارة مخزون الصيدلية ونقاط البيع: دليل عملي للاختيار",
    },
    excerpt: {
      en: "Choose pharmacy inventory and point-of-sale software by testing product identification, batches and expiry, purchasing, returns, sales, permissions, and local compliance.",
      ar: "اختر نظام مخزون ونقاط بيع للصيدلية بعد اختبار تعريف الأصناف والدفعات والصلاحية والمشتريات والمرتجعات والمبيعات والصلاحيات والمتطلبات المحلية.",
    },
    publishedAt: PUBLISHED_AT,
    readingMinutes: 7,
    serviceId: "erp",
    relatedProjectId: "pharmacy-ims",
    sections: [
      {
        heading: {
          en: "Treat the pharmacy counter and stockroom as one workflow",
          ar: "تعامل مع الصيدلية والمخزن كإجراء واحد مترابط",
        },
        paragraphs: [
          {
            en: "A pharmacy POS and inventory system should keep sales and stock movements connected. Trace an item from supplier receipt through storage and sale to return or adjustment, and check which records staff need at each step.",
            ar: "ينبغي أن يربط نظام نقاط البيع والمخزون في الصيدلية بين البيع وحركة الصنف. تتبع الصنف من استلامه من المورد مرورًا بالتخزين والبيع وحتى المرتجع أو التسوية، وحدد السجلات التي يحتاجها الموظفون في كل خطوة.",
          },
          {
            en: "Product identification may depend on brand, strength, dosage form, pack size, barcode, batch, and expiry information. Confirm how the system distinguishes similar items and prevents staff from treating different package sizes or variants as interchangeable.",
            ar: "قد يعتمد تعريف الصنف على الاسم التجاري والتركيز والشكل الدوائي وحجم العبوة والباركود والدفعة وتاريخ الصلاحية. تحقق من طريقة تمييز الأصناف المتشابهة ومنع التعامل مع أحجام العبوات أو المتغيرات المختلفة على أنها متطابقة.",
          },
        ],
      },
      {
        heading: {
          en: "Check batch, expiry, and replenishment controls",
          ar: "تحقق من ضوابط الدفعات والصلاحية وإعادة التوريد",
        },
        paragraphs: [
          {
            en: "Ask the vendor to demonstrate receiving stock with batch and expiry data, locating it, transferring it, selling it, and handling a return. Review how near-expiry and expired items are identified and what permissions are required to quarantine, adjust, or dispose of stock.",
            ar: "اطلب من المزود عرض استلام صنف ببيانات الدفعة والصلاحية وتخزينه ونقله وبيعه ومعالجة مرتجعه. راجع طريقة تحديد الأصناف القريبة من انتهاء الصلاحية والمنتهية، والصلاحيات المطلوبة لعزلها أو تسويتها أو التخلص منها.",
          },
          {
            en: "Reorder alerts are useful only when their inputs reflect supplier lead times, purchase units, minimum quantities, seasonality, and the store's replenishment process. Let staff review recommendations rather than assuming an alert is automatically a purchase decision.",
            ar: "لا تفيد تنبيهات إعادة الطلب إلا إذا عكست مدة توريد المورد ووحدات الشراء والحد الأدنى والكميات الموسمية وإجراءات التزويد. أتح للموظفين مراجعة التوصيات بدل اعتبار التنبيه قرار شراء تلقائيًا.",
          },
        ],
      },
      {
        heading: {
          en: "Evaluate point-of-sale, purchasing, and reporting",
          ar: "قيّم نقاط البيع والمشتريات والتقارير",
        },
        paragraphs: [
          {
            en: "Test the checkout path, price and discount permissions, receipt handling, sale cancellation, and returns. Confirm how the system posts each completed or reversed transaction to stock and financial records, and how corrections are traceable.",
            ar: "اختبر خطوات البيع وصلاحيات الأسعار والخصومات والإيصالات وإلغاء البيع والمرتجعات. تحقق من تسجيل كل معاملة مكتملة أو معكوسة في سجلات المخزون والمالية، وإمكانية تتبع التصحيحات.",
          },
          {
            en: "Useful reports answer operational questions: which items need review, which purchase orders are outstanding, where stock differences occurred, and how sales reconcile with the records your accountant or finance process requires.",
            ar: "تجيب التقارير المفيدة عن أسئلة تشغيلية: ما الأصناف التي تحتاج مراجعة؟ وما أوامر الشراء المتأخرة؟ وأين ظهرت فروقات المخزون؟ وكيف تتطابق المبيعات مع السجلات التي تتطلبها المحاسبة أو الإدارة المالية؟",
          },
        ],
      },
      {
        heading: {
          en: "Verify local rules, access, and data protection",
          ar: "تحقق من القواعد المحلية والصلاحيات وحماية البيانات",
        },
        paragraphs: [
          {
            en: "Pharmacy operations and dispensing rules vary by country and product type. Confirm local regulatory, tax, prescription, retention, and reporting requirements with qualified professionals and the relevant authorities; do not assume that a generic software feature establishes compliance.",
            ar: "تختلف قواعد تشغيل الصيدليات وصرف المنتجات باختلاف البلد ونوع المنتج. تحقق من المتطلبات المحلية التنظيمية والضريبية والوصفات والاحتفاظ بالسجلات والتقارير مع المختصين والجهات المعنية؛ فوجود ميزة عامة في النظام لا يثبت الامتثال.",
          },
          {
            en: "Review role permissions, audit trails, backup and recovery, data export, and vendor access. Test the software using representative scenarios and non-sensitive sample records before moving live pharmacy data.",
            ar: "راجع صلاحيات الأدوار وسجلات التدقيق والنسخ الاحتياطية والاستعادة وتصدير البيانات ووصول المزود. اختبر النظام بسيناريوهات ممثلة وبيانات تجريبية غير حساسة قبل نقل بيانات الصيدلية الفعلية.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          en: "What features matter in pharmacy inventory software?",
          ar: "ما المميزات المهمة في برنامج مخزون الصيدلية؟",
        },
        answer: {
          en: "Prioritize accurate product identification, batch and expiry tracking where required, purchasing, sales and returns, traceable adjustments, role permissions, and reports that match your local operations.",
          ar: "أعطِ الأولوية لتعريف دقيق للأصناف وتتبع الدفعات والصلاحية عند الحاجة والمشتريات والمبيعات والمرتجعات والتسويات القابلة للتتبع والصلاحيات والتقارير المناسبة لإجراءاتك المحلية.",
        },
      },
      {
        question: {
          en: "Should pharmacy software automatically reorder medicines?",
          ar: "هل ينبغي أن يعيد نظام الصيدلية طلب الأدوية تلقائيًا؟",
        },
        answer: {
          en: "Reorder suggestions can support staff, but their accuracy depends on current stock, purchasing units, supplier lead times, demand patterns, and approved purchasing rules. Human review should follow the pharmacy's process.",
          ar: "قد تدعم اقتراحات إعادة الطلب الموظفين، لكن دقتها تعتمد على المخزون الحالي ووحدات الشراء ومدة التوريد وأنماط الطلب وقواعد الشراء المعتمدة. ينبغي أن تتبع المراجعة البشرية إجراءات الصيدلية.",
        },
      },
      {
        question: {
          en: "Does pharmacy POS software ensure regulatory compliance?",
          ar: "هل يضمن نظام نقاط بيع الصيدلية الامتثال التنظيمي؟",
        },
        answer: {
          en: "No software alone can establish compliance. Requirements differ by location and product, so qualified pharmacy and compliance professionals should verify the system, configuration, operating procedures, and records.",
          ar: "لا يستطيع النظام وحده إثبات الامتثال. تختلف المتطلبات حسب البلد والمنتج، لذلك ينبغي للمختصين التحقق من النظام وتهيئته وإجراءات التشغيل والسجلات.",
        },
      },
    ],
  },
  {
    slug: "warehouse-courier-integration-guide",
    category: { en: "Warehouse & delivery", ar: "المخازن والتوصيل" },
    title: {
      en: "How to Connect Warehouse Operations with a Courier Delivery System",
      ar: "كيف تربط عمليات المخزن بنظام شركة التوصيل؟",
    },
    excerpt: {
      en: "A reliable warehouse-to-courier integration defines order ownership, picking and hand-off events, status updates, exceptions, returns, and cash reconciliation.",
      ar: "يحدد التكامل الموثوق بين المخزن وشركة التوصيل ملكية الطلب وخطوات التجهيز والتسليم وتحديث الحالة والاستثناءات والمرتجعات ومطابقة التحصيلات.",
    },
    publishedAt: PUBLISHED_AT,
    readingMinutes: 7,
    serviceId: "custom-software",
    relatedProjectId: "abo3mo-delivery",
    sections: [
      {
        heading: {
          en: "Define when an order is ready to leave the warehouse",
          ar: "حدّد متى يصبح الطلب جاهزًا لمغادرة المخزن",
        },
        paragraphs: [
          {
            en: "Connecting warehouse and courier systems starts with shared definitions. Agree what counts as confirmed, allocated, picked, packed, ready for collection, handed over, out for delivery, delivered, and returned. Each status should have a clear owner and a business event that changes it.",
            ar: "يبدأ ربط المخزن بشركة التوصيل بتعريفات مشتركة. اتفق على معنى الطلب المؤكد والمخصص والمُلتقط والمعبأ والجاهز للاستلام والمسلّم للمندوب والخارج للتوصيل والمسلم والمرتجع. ينبغي أن يكون لكل حالة مسؤول وحدث تشغيلي يغيرها.",
          },
          {
            en: "Decide which system owns the order, customer address, parcel identifier, and delivery status. Avoid allowing both systems to make conflicting edits without a reconciliation rule.",
            ar: "حدّد النظام المسؤول عن الطلب وعنوان العميل ورقم الطرد وحالة التوصيل. تجنب السماح للنظامين بتعديلات متعارضة دون قاعدة للمطابقة.",
          },
        ],
      },
      {
        heading: {
          en: "Design the hand-off and exception flow",
          ar: "صمّم التسليم ومسار معالجة الاستثناءات",
        },
        paragraphs: [
          {
            en: "At collection, capture the parcel reference, time, parties, and the quantities or condition that matter to your process. When a delivery fails, record a reason such as unavailable recipient or incorrect address and define the next action, responsible team, and any rescheduling rule.",
            ar: "عند الاستلام، سجّل مرجع الطرد والوقت والأطراف والكميات أو الحالة المهمة لإجراءاتك. وعند تعذر التسليم، سجّل سببًا مثل غياب المستلم أو خطأ العنوان، وحدد الإجراء التالي والفريق المسؤول وقاعدة إعادة الجدولة.",
          },
          {
            en: "Plan for returns, partial deliveries, cancellations after picking, and damaged parcels. An exception should remain visible and actionable rather than being hidden in an unstructured note or overwritten by a later update.",
            ar: "خطط للمرتجعات والتسليم الجزئي والإلغاء بعد الالتقاط والطرود التالفة. ينبغي أن يظل الاستثناء ظاهرًا وقابلًا للمعالجة، لا أن يختفي في ملاحظة غير منظمة أو يُمحى بتحديث لاحق.",
          },
        ],
      },
      {
        heading: {
          en: "Make the integration resilient and traceable",
          ar: "اجعل التكامل مرنًا وقابلًا للتتبع",
        },
        paragraphs: [
          {
            en: "Specify the fields exchanged, when updates are sent, how duplicate messages are recognized, and what happens during an outage. Give each event a stable reference, log delivery attempts, and make failed updates visible to an operations owner for retry or resolution.",
            ar: "حدّد الحقول المتبادلة ووقت إرسال التحديثات وطريقة تمييز الرسائل المكررة وما يحدث أثناء انقطاع الخدمة. امنح كل حدث مرجعًا ثابتًا، وسجّل محاولات الإرسال، وأظهر التحديثات الفاشلة لمسؤول التشغيل لإعادة المحاولة أو المعالجة.",
          },
          {
            en: "Test late, repeated, missing, and out-of-order updates. A success message from one system should not silently erase a newer or more accurate event recorded by another.",
            ar: "اختبر التحديثات المتأخرة والمكررة والمفقودة والواردة بترتيب مختلف. لا ينبغي لرسالة نجاح من نظام أن تمحو بصمت حدثًا أحدث أو أدق سجله نظام آخر.",
          },
        ],
      },
      {
        heading: {
          en: "Reconcile delivery outcomes and cash on delivery",
          ar: "طابق نتائج التوصيل والدفع عند الاستلام",
        },
        paragraphs: [
          {
            en: "For cash-on-delivery orders, connect the amount expected, amount collected, delivery result, and settlement record. Define who reviews differences, what evidence is retained, and how a correction is approved and audited.",
            ar: "في طلبات الدفع عند الاستلام، اربط المبلغ المتوقع بالمبلغ المحصل ونتيجة التوصيل وسجل التسوية. حدّد من يراجع الفروقات وما الإثباتات المحفوظة وكيف تُعتمد التصحيحات وتُراجع.",
          },
          {
            en: "Start with a small operational pilot: follow a representative batch from order confirmation through return or settlement. Measure unresolved exceptions and reconciliation work, then adjust the workflow before expanding to more branches or delivery partners.",
            ar: "ابدأ بتجربة تشغيلية محدودة: تتبع مجموعة طلبات ممثلة من التأكيد حتى المرتجع أو التسوية. راقب الاستثناءات غير المحلولة وأعمال المطابقة، ثم عدّل الإجراء قبل التوسع لفروع أو شركات توصيل أخرى.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          en: "What should a warehouse and courier integration synchronize?",
          ar: "ما البيانات التي ينبغي مزامنتها بين المخزن وشركة التوصيل؟",
        },
        answer: {
          en: "At minimum, define shared order and parcel references, hand-off events, delivery statuses, exception reasons, return outcomes, and any collection or settlement fields required by your process.",
          ar: "حدّد على الأقل مراجع الطلب والطرد المشتركة وأحداث التسليم وحالات التوصيل وأسباب الاستثناء ونتائج المرتجعات وبيانات التحصيل أو التسوية التي تتطلبها إجراءاتك.",
        },
      },
      {
        question: {
          en: "How do we prevent duplicate courier updates from changing an order twice?",
          ar: "كيف نمنع تحديثات شركة التوصيل المكررة من تغيير الطلب مرتين؟",
        },
        answer: {
          en: "Use stable event identifiers, make update handling idempotent, record processing outcomes, and test repeated and out-of-order messages before release.",
          ar: "استخدم معرفات ثابتة للأحداث، واجعل معالجة التحديثات لا تكرر الأثر، وسجّل نتائج المعالجة، واختبر الرسائل المكررة وغير المرتبة قبل الإطلاق.",
        },
      },
      {
        question: {
          en: "How should cash-on-delivery differences be handled?",
          ar: "كيف تُعالج فروقات الدفع عند الاستلام؟",
        },
        answer: {
          en: "Keep expected and collected amounts linked to the delivery and settlement records, assign an owner to review differences, and retain an approval and audit trail for corrections.",
          ar: "اربط المبلغ المتوقع والمحصّل بسجلات التوصيل والتسوية، وعيّن مسؤولًا لمراجعة الفروقات، واحتفظ بموافقة وسجل تدقيق للتصحيحات.",
        },
      },
    ],
  },
  {
    slug: "flutter-vs-native-business-app",
    category: { en: "Mobile app planning", ar: "التخطيط لتطبيقات الموبايل" },
    title: {
      en: "Flutter vs Native App Development: How Should a Business Choose?",
      ar: "Flutter أم التطوير الأصلي؟ كيف تختار شركتك طريقة بناء التطبيق؟",
    },
    excerpt: {
      en: "Flutter can be a good fit for shared iOS and Android product work; native development may suit platform-specific needs. Compare requirements, not slogans.",
      ar: "قد يناسب Flutter بناء منتج مشترك لـ iOS وAndroid، وقد يلائم التطوير الأصلي الاحتياجات الخاصة بكل منصة. قارن المتطلبات لا الشعارات.",
    },
    publishedAt: PUBLISHED_AT,
    readingMinutes: 7,
    serviceId: "custom-software",
    relatedProjectId: "abo3mo-delivery",
    sections: [
      {
        heading: {
          en: "Start with the app's requirements, not the framework",
          ar: "ابدأ بمتطلبات التطبيق لا بإطار العمل",
        },
        paragraphs: [
          {
            en: "Flutter uses Dart and a shared codebase to build applications for multiple platforms. Native development uses each platform's own tools and languages, such as Swift for Apple platforms and Kotlin for Android. Neither approach is automatically faster, cheaper, or better for every product.",
            ar: "يستخدم Flutter لغة Dart وقاعدة كود مشتركة لبناء تطبيقات على منصات متعددة. أما التطوير الأصلي فيستخدم أدوات ولغات كل منصة، مثل Swift لمنصات Apple وKotlin لنظام Android. لا يكون أي من الخيارين أسرع أو أرخص أو أفضل تلقائيًا لكل المنتجات.",
          },
          {
            en: "List the screens, device capabilities, accessibility needs, background work, performance constraints, integrations, and release requirements first. Then verify that the current framework and its maintained dependencies support those needs on the target operating-system versions.",
            ar: "اكتب أولًا الشاشات وإمكانات الجهاز واحتياجات إتاحة الوصول والعمل في الخلفية وقيود الأداء والتكاملات ومتطلبات النشر. ثم تحقق من دعم إطار العمل وحزمه المحدثة لهذه الاحتياجات على إصدارات أنظمة التشغيل المستهدفة.",
          },
        ],
        comparison: {
          headers: [
            { en: "Decision area", ar: "جانب المقارنة" },
            { en: "Flutter", ar: "Flutter" },
            { en: "Native", ar: "التطوير الأصلي" },
          ],
          rows: [
            [
              { en: "Code sharing", ar: "مشاركة الكود" },
              { en: "Shared Dart application code across supported targets.", ar: "مشاركة كود التطبيق بلغة Dart بين المنصات المدعومة." },
              { en: "Separate platform projects; shared business logic may still be possible.", ar: "مشاريع منفصلة للمنصات، مع إمكانية مشاركة بعض منطق العمل." },
            ],
            [
              { en: "Platform-specific APIs", ar: "واجهات المنصة الخاصة" },
              { en: "Use plugins or platform channels; verify coverage and maintenance.", ar: "استخدم الحزم أو قنوات المنصة، وتحقق من التغطية والصيانة." },
              { en: "Direct access to platform SDKs and their conventions.", ar: "وصول مباشر إلى أدوات المنصة وأنماطها." },
            ],
            [
              { en: "Team and delivery", ar: "الفريق والتسليم" },
              { en: "One shared UI implementation can simplify coordinated product changes.", ar: "قد يسهّل تنفيذ واجهة مشتركة تنسيق تغييرات المنتج." },
              { en: "May require platform-specific expertise and parallel release work.", ar: "قد يتطلب خبرة خاصة بكل منصة وعملًا متوازيًا للإصدارات." },
            ],
            [
              { en: "Best decision test", ar: "اختبار القرار الأنسب" },
              { en: "Build a proof of concept for the most demanding required features.", ar: "أنشئ نموذجًا أوليًا لأكثر المتطلبات تحديًا." },
              { en: "Prototype the platform behavior or integration with the highest risk.", ar: "اختبر سلوك المنصة أو التكامل الأعلى مخاطرة." },
            ],
          ],
        },
      },
      {
        heading: {
          en: "When Flutter is a good candidate",
          ar: "متى يكون Flutter خيارًا مناسبًا؟",
        },
        paragraphs: [
          {
            en: "Consider Flutter when the product needs a closely coordinated experience across iOS and Android, the required platform APIs have dependable support, and the team can maintain the shared codebase. A shared implementation does not remove the need to test on real devices, validate platform conventions, and manage each store release.",
            ar: "فكّر في Flutter عندما يحتاج المنتج إلى تجربة متناسقة على iOS وAndroid، وتتوفر دعم موثوق لواجهات المنصات المطلوبة، ويستطيع الفريق صيانة قاعدة الكود المشتركة. لا تلغي المشاركة ضرورة الاختبار على أجهزة فعلية ومراجعة أنماط كل منصة وإدارة النشر في متاجر التطبيقات.",
          },
          {
            en: "Before committing, prototype device features that carry delivery risk—for example background location, Bluetooth accessories, camera workflows, offline use, or platform-specific authentication. Check plugin ownership, update activity, licensing, and fallback options.",
            ar: "قبل الالتزام، اختبر إمكانات الجهاز التي تحمل مخاطر تنفيذية، مثل الموقع في الخلفية وملحقات Bluetooth واستخدام الكاميرا والعمل دون اتصال أو المصادقة الخاصة بالمنصة. راجع مسؤولية الحزمة ونشاط تحديثها وترخيصها والبدائل المتاحة.",
          },
        ],
      },
      {
        heading: {
          en: "When native development may fit better",
          ar: "متى قد يناسب التطوير الأصلي أكثر؟",
        },
        paragraphs: [
          {
            en: "Native development deserves consideration when the app depends heavily on a new or specialized operating-system API, has strict platform-specific interaction or accessibility needs, or requires deep integration with device hardware and background services. A small native module may also complement a cross-platform application; the decision need not be all-or-nothing.",
            ar: "يستحق التطوير الأصلي الدراسة عندما يعتمد التطبيق بشدة على واجهة حديثة أو متخصصة لنظام التشغيل، أو يحتاج إلى تفاعلات وإتاحة وصول خاصة بالمنصة، أو يتطلب تكاملًا عميقًا مع الأجهزة وخدمات الخلفية. ويمكن لوحدة أصلية صغيرة أن تكمل تطبيقًا متعدد المنصات؛ فالقرار ليس بالضرورة خيارًا واحدًا بالكامل.",
          },
        ],
      },
      {
        heading: {
          en: "Make the decision with a focused prototype",
          ar: "اتخذ القرار بنموذج أولي محدد",
        },
        paragraphs: [
          {
            en: "Run a short technical spike for the highest-risk user journey on each target platform. Measure whether the required behavior works, how much platform-specific code is needed, and how the team will test, secure, release, and maintain it. Record the assumptions and revisit the choice if requirements change.",
            ar: "نفّذ تجربة تقنية قصيرة لأعلى رحلة مستخدم مخاطرة على كل منصة مستهدفة. قيّم عمل السلوك المطلوب ومقدار الكود الخاص بالمنصة وطريقة الاختبار والتأمين والنشر والصيانة. وثّق الافتراضات وأعد النظر في الاختيار عند تغير المتطلبات.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          en: "Is Flutter cheaper than native app development?",
          ar: "هل Flutter أقل تكلفة من تطوير التطبيقات الأصلية؟",
        },
        answer: {
          en: "Not automatically. A shared codebase may reduce duplicated implementation, but total cost still depends on integrations, platform-specific features, testing, team skills, maintenance, and release requirements.",
          ar: "ليس تلقائيًا. قد تقلل قاعدة الكود المشتركة تكرار التنفيذ، لكن التكلفة الكلية تعتمد أيضًا على التكاملات والمميزات الخاصة بالمنصة والاختبارات ومهارات الفريق والصيانة ومتطلبات النشر.",
        },
      },
      {
        question: {
          en: "Can Flutter access native phone features?",
          ar: "هل يستطيع Flutter استخدام إمكانات الهاتف الأصلية؟",
        },
        answer: {
          en: "Flutter apps can use supported plugins and platform channels to work with native capabilities, but each required feature should be verified for platform coverage, maintenance, permissions, and expected behavior.",
          ar: "يمكن لتطبيقات Flutter استخدام الحزم المدعومة وقنوات المنصة للوصول إلى الإمكانات الأصلية، لكن يجب التحقق من دعم كل ميزة وصيانتها وصلاحياتها وسلوكها المتوقع.",
        },
      },
      {
        question: {
          en: "How should a company choose between Flutter and native?",
          ar: "كيف تختار الشركة بين Flutter والتطوير الأصلي؟",
        },
        answer: {
          en: "Document platform requirements and team constraints, then prototype the most technically demanding journey on target devices before committing to an architecture.",
          ar: "وثّق متطلبات المنصات وقيود الفريق، ثم اختبر أصعب رحلة تقنية على الأجهزة المستهدفة قبل اعتماد المعمارية.",
        },
      },
    ],
    sources: [
      {
        label: {
          en: "Flutter documentation: supported deployment platforms",
          ar: "توثيق Flutter: منصات النشر المدعومة",
        },
        url: "https://docs.flutter.dev/reference/supported-platforms",
      },
      {
        label: {
          en: "OWASP Mobile Application Security Verification Standard",
          ar: "معيار OWASP للتحقق من أمان تطبيقات الموبايل",
        },
        url: "https://mas.owasp.org/MASVS/",
      },
    ],
  },
  {
    slug: "when-to-use-ai-in-business",
    category: { en: "AI for business", ar: "الذكاء الاصطناعي للأعمال" },
    title: {
      en: "When Should a Business Use AI—and When Should It Not?",
      ar: "متى يفيد الذكاء الاصطناعي في شركتك، ومتى لا تحتاج إليه؟",
    },
    excerpt: {
      en: "Use AI when a measurable workflow benefits from pattern recognition or language generation and risks can be controlled; prefer simpler automation when rules are clear and outcomes must be exact.",
      ar: "استخدم الذكاء الاصطناعي عندما يستفيد إجراء قابل للقياس من فهم الأنماط أو اللغة ويمكن ضبط مخاطره؛ واختر الأتمتة الأبسط عندما تكون القواعد واضحة والنتائج يجب أن تكون دقيقة.",
    },
    publishedAt: PUBLISHED_AT,
    readingMinutes: 8,
    serviceId: "custom-software",
    sections: [
      {
        heading: {
          en: "Start with the business task, not the AI model",
          ar: "ابدأ بمهمة العمل لا بنموذج الذكاء الاصطناعي",
        },
        paragraphs: [
          {
            en: "A business should consider AI when a specific workflow contains language, images, or patterns that are difficult to handle with fixed rules, and when a human can review uncertain results. Examples may include classifying incoming requests, finding information in approved documents, or drafting a response for staff to approve.",
            ar: "ينبغي للشركة دراسة الذكاء الاصطناعي عندما يتضمن الإجراء لغة أو صورًا أو أنماطًا يصعب التعامل معها بقواعد ثابتة، وعندما يستطيع الإنسان مراجعة النتائج غير المؤكدة. ومن الأمثلة تصنيف الطلبات الواردة أو البحث في مستندات معتمدة أو إعداد مسودة يراجعها الموظف.",
          },
          {
            en: "Do not add AI simply because it is available. If the process is deterministic, a conventional workflow, database query, or rules-based automation is often easier to test, explain, and control.",
            ar: "لا تضف الذكاء الاصطناعي لمجرد توفره. إذا كانت العملية محددة القواعد، فغالبًا ما يكون سير العمل التقليدي أو استعلام قاعدة البيانات أو الأتمتة القائمة على القواعد أسهل في الاختبار والتفسير والضبط.",
          },
        ],
      },
      {
        heading: {
          en: "Check whether the use case is ready",
          ar: "تحقق من جاهزية حالة الاستخدام",
        },
        paragraphs: [
          {
            en: "Before a pilot, define the user, task, current process, expected benefit, acceptable error rate, and who is accountable for the final decision. Check whether the necessary data is available, permitted for this use, representative, and good enough to evaluate the system.",
            ar: "قبل التجربة، حدّد المستخدم والمهمة والإجراء الحالي والمنفعة المتوقعة ومعدل الخطأ المقبول والجهة المسؤولة عن القرار النهائي. تحقق من توفر البيانات اللازمة والسماح باستخدامها وتمثيلها للواقع وجودتها الكافية لتقييم النظام.",
          },
        ],
        bullets: [
          {
            en: "Choose a narrow workflow with a baseline you can measure.",
            ar: "اختر إجراءً محدودًا له مستوى حالي يمكن قياسه.",
          },
          {
            en: "Identify sensitive data, access limits, retention, and vendor handling.",
            ar: "حدّد البيانات الحساسة وقيود الوصول والاحتفاظ وطريقة تعامل المزود.",
          },
          {
            en: "Set a human review path and a safe fallback when confidence is low.",
            ar: "ضع مسارًا للمراجعة البشرية وبديلًا آمنًا عند انخفاض الثقة.",
          },
          {
            en: "Test on representative examples, including unusual and failure cases.",
            ar: "اختبر أمثلة ممثلة، بما فيها الحالات غير المعتادة وحالات الفشل.",
          },
        ],
      },
      {
        heading: {
          en: "Understand the limits and operating risks",
          ar: "افهم الحدود ومخاطر التشغيل",
        },
        paragraphs: [
          {
            en: "AI-generated output can be incorrect, incomplete, inconsistent, or difficult to explain. A pilot should evaluate quality against real examples, measure how often staff must correct it, and test what happens when the input is ambiguous or outside scope.",
            ar: "قد تكون مخرجات الذكاء الاصطناعي خاطئة أو ناقصة أو غير متسقة أو صعبة التفسير. ينبغي أن تقيّم التجربة الجودة بأمثلة فعلية، وتقيس مقدار التصحيح الذي يجريه الموظفون، وتختبر الحالات الغامضة أو الخارجة عن النطاق.",
          },
          {
            en: "Review privacy, security, intellectual property, bias, accessibility, service availability, and usage cost. Keep sensitive actions behind authorization and human approval where the consequences warrant it; maintain logs and a way to disable or roll back the feature.",
            ar: "راجع الخصوصية والأمان والملكية الفكرية والتحيز وإتاحة الوصول وتوفر الخدمة وتكلفة الاستخدام. أبقِ الإجراءات الحساسة خلف الصلاحيات والموافقة البشرية عندما تستدعي العواقب ذلك، واحتفظ بالسجلات وطريقة لتعطيل الميزة أو الرجوع عنها.",
          },
        ],
      },
      {
        heading: {
          en: "Run a measured pilot before expanding",
          ar: "نفّذ تجربة قابلة للقياس قبل التوسع",
        },
        paragraphs: [
          {
            en: "Compare the AI-assisted workflow with the current process using the same kind of cases. Track task completion, correction effort, failure types, user acceptance, and full operating cost—not just response speed or a polished demonstration.",
            ar: "قارن سير العمل المدعوم بالذكاء الاصطناعي بالإجراء الحالي باستخدام حالات من النوع نفسه. تابع إتمام المهام وجهد التصحيح وأنواع الفشل وتقبل المستخدم والتكلفة التشغيلية الكاملة، لا سرعة الاستجابة أو العرض التجريبي فقط.",
          },
          {
            en: "Write down who reviews quality, handles incidents, updates instructions or models, and decides whether to continue. The NIST AI Risk Management Framework is one public reference for organizing AI risk work; it is voluntary guidance, not a substitute for legal or sector-specific advice.",
            ar: "وثّق من يراجع الجودة ويتعامل مع الحوادث ويحدّث التعليمات أو النماذج ويقرر الاستمرار. يوفر إطار NIST لإدارة مخاطر الذكاء الاصطناعي مرجعًا عامًا لتنظيم العمل على المخاطر؛ وهو إرشاد طوعي لا يحل محل المشورة القانونية أو المتخصصة بالقطاع.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          en: "When is AI useful for a business process?",
          ar: "متى يكون الذكاء الاصطناعي مفيدًا لإجراء داخل الشركة؟",
        },
        answer: {
          en: "It may be useful when a measurable task involves language or patterns that are difficult to capture with fixed rules, the data can be used appropriately, and people can review uncertain or consequential outputs.",
          ar: "قد يكون مفيدًا عندما تتضمن المهمة القابلة للقياس لغة أو أنماطًا يصعب ضبطها بقواعد ثابتة، وتكون البيانات صالحة للاستخدام، ويستطيع الأشخاص مراجعة النتائج غير المؤكدة أو المهمة.",
        },
      },
      {
        question: {
          en: "When should a business avoid using AI?",
          ar: "متى ينبغي للشركة تجنب استخدام الذكاء الاصطناعي؟",
        },
        answer: {
          en: "Avoid or defer AI when the task is simpler to solve with reliable rules, required data is unavailable or inappropriate to use, errors have unacceptable consequences, or the organization cannot monitor and govern the feature.",
          ar: "أجّل الذكاء الاصطناعي أو تجنبه عندما يمكن حل المهمة بقواعد موثوقة أبسط، أو لا تتوفر البيانات أو لا يجوز استخدامها، أو تكون عواقب الخطأ غير مقبولة، أو تعجز الشركة عن مراقبة الميزة وإدارتها.",
        },
      },
      {
        question: {
          en: "How can we measure whether an AI pilot is worth continuing?",
          ar: "كيف نعرف إن كانت تجربة الذكاء الاصطناعي تستحق الاستمرار؟",
        },
        answer: {
          en: "Set a baseline and success criteria before the pilot, then compare quality, correction effort, error severity, adoption, risk controls, and total operating cost against the existing process.",
          ar: "حدّد مستوى الأداء الحالي ومعايير النجاح قبل التجربة، ثم قارن الجودة وجهد التصحيح وشدة الأخطاء والاستخدام وضوابط المخاطر والتكلفة التشغيلية بالإجراء الحالي.",
        },
      },
    ],
    sources: [
      {
        label: {
          en: "NIST AI Risk Management Framework",
          ar: "إطار NIST لإدارة مخاطر الذكاء الاصطناعي",
        },
        url: "https://www.nist.gov/itl/ai-risk-management-framework",
      },
    ],
  },
];
