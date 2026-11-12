import type { BlogPost } from "@/data/blog";

const PUBLISHED_AT = "2026-10-23";

export const NEXT_TOPIC_BLOG_POSTS: BlogPost[] = [
  {
    slug: "moving-from-excel-to-erp",
    category: { en: "ERP implementation", ar: "تنفيذ أنظمة ERP" },
    title: {
      en: "How to Move from Excel to ERP Without Disrupting Your Business",
      ar: "كيف تنتقل من Excel إلى ERP دون تعطيل عمل شركتك؟",
    },
    excerpt: {
      en: "Plan a controlled move from spreadsheets by mapping ownership, cleaning records, piloting critical workflows, and reconciling results before rollout.",
      ar: "خطط للانتقال من الجداول إلى نظام ERP برسم المسؤوليات وتنظيف السجلات وتجربة الإجراءات الأساسية ومطابقة النتائج قبل التعميم.",
    },
    publishedAt: PUBLISHED_AT,
    readingMinutes: 7,
    serviceId: "erp",
    relatedProjectId: "enterprise-erp",
    sections: [
      {
        heading: {
          en: "Do not migrate spreadsheets before understanding why they exist",
          ar: "لا تنقل الجداول قبل فهم سبب وجودها",
        },
        paragraphs: [
          {
            en: "A safe move from Excel to ERP starts with the decisions and workflows behind the spreadsheets. List each file, its owner, who changes it, which reports depend on it, and what would stop working if it became unavailable. Some sheets may be useful records; others may be temporary workarounds or duplicate data.",
            ar: "يبدأ الانتقال الآمن من Excel إلى ERP بفهم القرارات والإجراءات التي تعتمد على الجداول. اكتب كل ملف ومسؤوله ومن يحدّثه والتقارير المعتمدة عليه وما الذي سيتعطل إذا لم يعد متاحًا. بعض الجداول سجلات مهمة، وبعضها حلول مؤقتة أو بيانات مكررة.",
          },
          {
            en: "Do not reproduce every column in a new system by default. Agree on the business meaning, authoritative owner, and retention need for each important record before designing the target workflow.",
            ar: "لا تنقل كل عمود إلى النظام الجديد تلقائيًا. اتفق على معنى كل سجل مهم والجهة المرجعية المسؤولة عنه والحاجة إلى الاحتفاظ به قبل تصميم الإجراء الجديد.",
          },
        ],
        bullets: [
          {
            en: "Inventory spreadsheets, macros, exports, and recurring reports.",
            ar: "احصر الجداول ووحدات الماكرو والتصديرات والتقارير الدورية.",
          },
          {
            en: "Identify duplicated records and conflicting definitions.",
            ar: "حدّد السجلات المكررة والتعريفات المتعارضة.",
          },
          {
            en: "Separate operational requirements from personal preferences.",
            ar: "افصل متطلبات العمل عن التفضيلات الفردية.",
          },
        ],
      },
      {
        heading: {
          en: "Clean and map the data before loading it",
          ar: "نظّف البيانات واربط حقولها قبل نقلها",
        },
        paragraphs: [
          {
            en: "Create a migration map for customers, suppliers, products, opening balances, and active transactions. Define required fields, formats, identifiers, and how duplicates or incomplete rows will be handled. Keep a copy of the source data and record each transformation so the team can explain differences.",
            ar: "أنشئ خريطة لترحيل العملاء والموردين والأصناف والأرصدة الافتتاحية والمعاملات النشطة. حدّد الحقول المطلوبة وصيغها ومعرفاتها وطريقة التعامل مع الصفوف المكررة أو الناقصة. احتفظ بنسخة من البيانات الأصلية وسجّل كل تحويل لتفسير الفروقات.",
          },
          {
            en: "Use representative samples to test imports and reconcile counts and totals with the source. A successful upload is not proof that relationships, units, balances, or historical context were transferred correctly.",
            ar: "استخدم عينات ممثلة لاختبار الاستيراد ومطابقة الأعداد والإجماليات مع المصدر. نجاح الرفع لا يثبت انتقال العلاقات أو وحدات القياس أو الأرصدة أو السياق التاريخي بشكل صحيح.",
          },
        ],
      },
      {
        heading: {
          en: "Pilot one connected workflow, then expand",
          ar: "جرّب إجراءً مترابطًا واحدًا ثم توسع",
        },
        paragraphs: [
          {
            en: "Choose a contained workflow with a clear owner and manageable dependencies, such as purchase receipt through stock update, or order entry through approval and invoice. Define acceptance criteria before the pilot and let the actual users exercise normal and exception cases.",
            ar: "اختر إجراءً محدودًا له مسؤول واضح واعتماديات يمكن إدارتها، مثل استلام المشتريات وتحديث المخزون، أو تسجيل الطلب واعتماده وإصدار الفاتورة. عرّف معايير القبول قبل التجربة، ودع المستخدمين الفعليين يختبرون الحالات المعتادة والاستثنائية.",
          },
          {
            en: "Set a cutover plan that states when spreadsheet edits stop, who approves the final data load, how open transactions are handled, and how the team returns to a safe process if a critical issue appears.",
            ar: "ضع خطة انتقال توضح موعد إيقاف تحديث الجداول ومن يعتمد تحميل البيانات النهائي وكيفية التعامل مع المعاملات المفتوحة والإجراء البديل الآمن عند ظهور مشكلة أساسية.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          en: "Should we import every Excel file into the ERP?",
          ar: "هل ينبغي استيراد كل ملفات Excel إلى ERP؟",
        },
        answer: {
          en: "No. First identify the purpose, owner, data quality, and retention need for each file. Migrate records that support agreed workflows and archive or retire obsolete duplicates.",
          ar: "لا. حدّد أولًا غرض كل ملف ومسؤوله وجودة بياناته والحاجة إلى الاحتفاظ به. انقل السجلات التي تدعم إجراءات متفقًا عليها، وأرشف أو أوقف النسخ القديمة والمكررة.",
        },
      },
      {
        question: {
          en: "How do we avoid disrupting operations during ERP migration?",
          ar: "كيف نتجنب تعطيل العمل أثناء الانتقال إلى ERP؟",
        },
        answer: {
          en: "Use a tested migration map, reconcile sample and final loads, pilot critical workflows with users, define a cutover owner, and prepare a fallback process for unresolved high-impact issues.",
          ar: "استخدم خريطة ترحيل مختبرة، وطابق عينات البيانات والتحميل النهائي، وجرّب الإجراءات الأساسية مع المستخدمين، وحدد مسؤول الانتقال، وجهّز إجراءً بديلًا للمشكلات المؤثرة غير المحلولة.",
        },
      },
      {
        question: {
          en: "Should we migrate all historical transactions?",
          ar: "هل ينبغي نقل كل المعاملات التاريخية؟",
        },
        answer: {
          en: "Not always. Decide based on reporting, audit, legal, and operational needs. Some history can remain in a controlled archive while the new ERP receives opening balances and active records.",
          ar: "ليس دائمًا. قرر وفق احتياجات التقارير والتدقيق والالتزامات القانونية والتشغيل. يمكن إبقاء بعض السجل في أرشيف منضبط، مع نقل الأرصدة الافتتاحية والسجلات النشطة إلى النظام الجديد.",
        },
      },
    ],
  },
  {
    slug: "erp-implementation-phases",
    category: { en: "ERP implementation", ar: "تنفيذ أنظمة ERP" },
    title: {
      en: "ERP Implementation Phases: From Discovery to Go-Live",
      ar: "مراحل تنفيذ نظام ERP: من تحليل الاحتياج حتى الإطلاق",
    },
    excerpt: {
      en: "A practical ERP implementation plan moves through discovery, process design, configuration, migration, testing, training, launch, and ongoing improvement.",
      ar: "تمر خطة تنفيذ ERP العملية بتحليل الاحتياج وتصميم الإجراءات والتهيئة وترحيل البيانات والاختبار والتدريب والإطلاق والتحسين المستمر.",
    },
    publishedAt: PUBLISHED_AT,
    readingMinutes: 8,
    serviceId: "erp",
    relatedProjectId: "enterprise-erp",
    sections: [
      {
        heading: {
          en: "Phase 1: discovery and scope",
          ar: "المرحلة الأولى: تحليل الاحتياج وتحديد النطاق",
        },
        paragraphs: [
          {
            en: "Discovery documents how work happens today, the problems to solve, the people involved, existing data, and systems that must connect. The output should be a prioritized scope with assumptions, exclusions, dependencies, risks, and measurable acceptance criteria—not only a feature wish list.",
            ar: "يوثق تحليل الاحتياج طريقة العمل الحالية والمشكلات المطلوب حلها والأطراف والبيانات الموجودة والأنظمة المطلوب ربطها. ينبغي أن ينتج نطاقًا مرتب الأولويات يتضمن الافتراضات والاستثناءات والاعتماديات والمخاطر ومعايير قبول قابلة للقياس، لا قائمة أمنيات بالمميزات.",
          },
        ],
      },
      {
        heading: {
          en: "Phase 2: process design and solution decisions",
          ar: "المرحلة الثانية: تصميم الإجراءات وقرارات الحل",
        },
        paragraphs: [
          {
            en: "Map the target workflows and decide which needs are met by standard configuration, which require integration, and which justify custom development. Assign owners to shared records and decisions, and review roles, approvals, reports, and exception paths before build work grows.",
            ar: "ارسم الإجراءات المستهدفة وحدد الاحتياجات التي تحلها التهيئة القياسية أو التكامل أو التطوير المخصص. عيّن مسؤولين للسجلات والقرارات المشتركة، وراجع الأدوار والموافقات والتقارير ومسارات الاستثناء قبل اتساع أعمال التطوير.",
          },
          {
            en: "A phased rollout can reduce the first release scope, but dependencies must be explicit. Avoid moving one module live while another process still depends on uncontrolled spreadsheets without an agreed reconciliation plan.",
            ar: "قد يقلل الإطلاق المرحلي نطاق النسخة الأولى، لكن يجب توضيح الاعتماديات. لا تطلق وحدة بينما تعتمد عملية أخرى على جداول غير منضبطة دون خطة مطابقة متفق عليها.",
          },
        ],
      },
      {
        heading: {
          en: "Phase 3: configuration, migration, and integration",
          ar: "المرحلة الثالثة: التهيئة وترحيل البيانات والتكامل",
        },
        paragraphs: [
          {
            en: "Configure the agreed workflows, roles, and reports; build and test integrations; and prepare data through profiling, cleanup, mapping, and trial loads. Keep configuration decisions and changes documented so business owners can review the result and the team can maintain it.",
            ar: "هيّئ الإجراءات والأدوار والتقارير المتفق عليها، وابنِ التكاملات واختبرها، وجهّز البيانات بالفحص والتنظيف وربط الحقول والتحميل التجريبي. وثّق قرارات التهيئة وتغييراتها ليتمكن مسؤولو العمل من مراجعتها والفريق من صيانتها.",
          },
        ],
      },
      {
        heading: {
          en: "Phase 4: testing, training, launch, and stabilization",
          ar: "المرحلة الرابعة: الاختبار والتدريب والإطلاق والاستقرار",
        },
        paragraphs: [
          {
            en: "Test end-to-end workflows, permissions, reports, integrations, migrated records, and exception handling with representative users. Train people on the tasks they own, not just on where buttons appear. At go-live, name decision-makers, support contacts, monitoring checks, and rollback conditions.",
            ar: "اختبر الإجراءات الكاملة والصلاحيات والتقارير والتكاملات والسجلات المرحّلة ومعالجة الاستثناءات بمشاركة مستخدمين ممثلين. درّب الموظفين على المهام التي يملكونها لا على أماكن الأزرار فقط. عند الإطلاق، حدّد أصحاب القرار والدعم وفحوص المراقبة وشروط التراجع.",
          },
          {
            en: "After launch, track issues by impact, resolve data and workflow gaps, and compare outcomes against the baseline agreed during discovery. Close the project only after ownership, documentation, support, and future changes have a clear home.",
            ar: "بعد الإطلاق، رتّب المشكلات حسب أثرها، وعالج فجوات البيانات والإجراءات، وقارن النتائج بالمستوى الأساسي المتفق عليه في مرحلة التحليل. لا تُنهِ المشروع قبل تحديد مسؤولية النظام وتوثيقه ودعمه وطريقة تطويره لاحقًا.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          en: "How long does ERP implementation take?",
          ar: "كم يستغرق تنفيذ نظام ERP؟",
        },
        answer: {
          en: "There is no dependable duration without a defined scope. The number of workflows, data quality, integrations, approvals, user availability, and rollout approach all affect the schedule; ask for an estimate with assumptions and dependencies.",
          ar: "لا يمكن تحديد مدة موثوقة دون نطاق واضح. يؤثر عدد الإجراءات وجودة البيانات والتكاملات والموافقات وتفرغ المستخدمين وطريقة الإطلاق في الجدول؛ اطلب تقديرًا يوضح افتراضاته واعتمادياته.",
        },
      },
      {
        question: {
          en: "Who should be involved in ERP implementation?",
          ar: "من ينبغي أن يشارك في تنفيذ ERP؟",
        },
        answer: {
          en: "Include an executive sponsor, process owners, representative end users, data and IT owners, and the implementation team. Each group should have defined decisions and responsibilities.",
          ar: "أشرك راعيًا تنفيذيًا ومسؤولي الإجراءات ومستخدمين ممثلين ومسؤولي البيانات وتقنية المعلومات وفريق التنفيذ، مع تحديد قرارات ومسؤوليات كل جهة.",
        },
      },
      {
        question: {
          en: "What must be ready before ERP go-live?",
          ar: "ما الذي يجب أن يكون جاهزًا قبل إطلاق ERP؟",
        },
        answer: {
          en: "Have accepted workflows, reconciled migration, tested integrations and permissions, trained users, a support owner, monitoring checks, and a documented fallback or rollback decision.",
          ar: "تأكد من اعتماد الإجراءات ومطابقة البيانات واختبار التكاملات والصلاحيات وتدريب المستخدمين وتحديد مسؤول الدعم وفحوص المراقبة وقرار موثق للإجراء البديل أو التراجع.",
        },
      },
    ],
  },
  {
    slug: "erp-requirements-checklist",
    category: { en: "ERP planning", ar: "التخطيط لأنظمة ERP" },
    title: {
      en: "ERP Requirements Checklist: Questions to Prepare Before You Contact Vendors",
      ar: "قائمة متطلبات ERP: أسئلة جهّزها قبل التواصل مع الشركات",
    },
    excerpt: {
      en: "Prepare a vendor-ready ERP brief covering workflows, users, records, integrations, controls, reports, migration, and measurable acceptance criteria.",
      ar: "جهّز موجز ERP للمزودين يوضح الإجراءات والمستخدمين والسجلات والتكاملات والضوابط والتقارير والترحيل ومعايير القبول.",
    },
    publishedAt: PUBLISHED_AT,
    readingMinutes: 6,
    serviceId: "erp",
    relatedProjectId: "enterprise-erp",
    sections: [
      {
        heading: {
          en: "Describe the business and the problem to solve",
          ar: "صف النشاط والمشكلة المطلوب حلها",
        },
        paragraphs: [
          {
            en: "Begin with a short description of your business model, locations, teams, customers, suppliers, and the decisions the system should support. State the problems in operational terms—such as duplicate entry, slow approvals, or unclear stock ownership—without prescribing a screen before the cause is understood.",
            ar: "ابدأ بوصف موجز لنموذج العمل والمواقع والفرق والعملاء والموردين والقرارات التي ينبغي أن يدعمها النظام. اذكر المشكلات بصيغة تشغيلية، مثل تكرار الإدخال أو بطء الموافقات أو غموض مسؤولية المخزون، دون فرض تصميم شاشة قبل فهم السبب.",
          },
        ],
        bullets: [
          {
            en: "What work is in scope for the first release?",
            ar: "ما الإجراءات الداخلة في نطاق الإصدار الأول؟",
          },
          {
            en: "Which roles own each step and approve exceptions?",
            ar: "ما الأدوار المسؤولة عن كل خطوة واعتماد الاستثناءات؟",
          },
          {
            en: "How will you know the new process is accepted and usable?",
            ar: "كيف ستعرف أن الإجراء الجديد مقبول وقابل للاستخدام؟",
          },
        ],
      },
      {
        heading: {
          en: "List data, integrations, security, and reporting needs",
          ar: "احصر احتياجات البيانات والتكامل والأمان والتقارير",
        },
        paragraphs: [
          {
            en: "Give vendors a list of current systems, data owners, file formats, expected exchanges, and failure scenarios. Describe the reports and decisions you need, rather than asking for dashboards in the abstract. Document role access, approval trails, data retention, backups, and export expectations.",
            ar: "زوّد الشركات بقائمة الأنظمة الحالية ومسؤولي البيانات وصيغ الملفات والتبادلات المطلوبة وحالات فشل الاتصال. اشرح التقارير والقرارات التي تحتاجها بدل طلب لوحات عامة. وثّق صلاحيات الأدوار ومسارات الاعتماد والاحتفاظ بالبيانات والنسخ الاحتياطية والتصدير.",
          },
        ],
      },
      {
        heading: {
          en: "Separate mandatory requirements from preferences",
          ar: "افصل المتطلبات الإلزامية عن التفضيلات",
        },
        paragraphs: [
          {
            en: "Mark each requirement as mandatory, preferred, or future consideration, and explain why it matters. Ask vendors to identify whether they meet it through standard configuration, an integration, custom work, or a manual process. This makes proposals easier to compare and exposes hidden dependencies.",
            ar: "صنّف كل متطلب إلى إلزامي أو مفضل أو مؤجل، واشرح سبب أهميته. اطلب من المزود توضيح ما إذا كان يحققه بتهيئة قياسية أو تكامل أو تطوير مخصص أو إجراء يدوي. يسهل ذلك مقارنة العروض ويكشف الاعتماديات المخفية.",
          },
        ],
      },
      {
        heading: {
          en: "Request evidence, not only feature claims",
          ar: "اطلب إثباتًا عمليًا لا قائمة مميزات فقط",
        },
        paragraphs: [
          {
            en: "Provide vendors with a small set of realistic scenarios and ask them to demonstrate each from start to finish, including an exception. Request a written scope, assumptions, exclusions, migration approach, acceptance criteria, support model, and ownership of any custom components.",
            ar: "قدّم للمزودين مجموعة سيناريوهات واقعية واطلب تنفيذها أمامك من البداية للنهاية، بما فيها حالة استثنائية. اطلب نطاقًا مكتوبًا وافتراضات واستثناءات وطريقة ترحيل ومعايير قبول ونموذج دعم وملكية المكونات المخصصة.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          en: "What information should an ERP request for proposal include?",
          ar: "ما المعلومات التي يجب أن يتضمنها طلب عرض ERP؟",
        },
        answer: {
          en: "Describe business context, prioritized workflows, users and roles, data and integrations, security and reporting needs, migration constraints, acceptance criteria, and the requested delivery and support model.",
          ar: "اشرح سياق النشاط والإجراءات ذات الأولوية والمستخدمين والأدوار والبيانات والتكاملات واحتياجات الأمان والتقارير وقيود الترحيل ومعايير القبول ونموذج التنفيذ والدعم المطلوب.",
        },
      },
      {
        question: {
          en: "How many ERP requirements should we write?",
          ar: "كم عدد متطلبات ERP التي ينبغي كتابتها؟",
        },
        answer: {
          en: "Write enough to describe critical workflows, decisions, controls, and exceptions, but prioritize them. A short testable requirement is more useful than a long list of vague features.",
          ar: "اكتب ما يكفي لوصف الإجراءات والقرارات والضوابط والاستثناءات الأساسية، مع ترتيبها. المتطلب القصير القابل للاختبار أنفع من قائمة طويلة بمميزات غامضة.",
        },
      },
      {
        question: {
          en: "How can ERP proposals be compared fairly?",
          ar: "كيف نقارن عروض ERP بإنصاف؟",
        },
        answer: {
          en: "Give every vendor the same scope, scenarios, assumptions, and evaluation criteria. Compare total ownership, fit gaps, dependencies, migration, support, and how requirements will be accepted.",
          ar: "قدّم لكل مزود النطاق والسيناريوهات والافتراضات ومعايير التقييم نفسها. قارن التكلفة الكلية وفجوات الملاءمة والاعتماديات والترحيل والدعم وطريقة اعتماد المتطلبات.",
        },
      },
    ],
  },
  {
    slug: "reduce-inventory-errors",
    category: { en: "Inventory operations", ar: "تشغيل المخزون" },
    title: {
      en: "How to Reduce Inventory Errors: Receiving, Picking, Counts, and Adjustments",
      ar: "كيف تقلل أخطاء المخزون؟ من الاستلام إلى الجرد والتسوية",
    },
    excerpt: {
      en: "Reduce recurring stock discrepancies by controlling item identity, recording each movement, separating duties, counting by risk, and investigating root causes.",
      ar: "قلل فروقات المخزون المتكررة بضبط تعريف الأصناف وتسجيل الحركات وفصل المسؤوليات والجرد حسب المخاطر والتحقق من الأسباب الجذرية.",
    },
    publishedAt: PUBLISHED_AT,
    readingMinutes: 7,
    serviceId: "erp",
    relatedProjectId: "enterprise-erp",
    sections: [
      {
        heading: {
          en: "Find the process point where stock records drift",
          ar: "اكتشف نقطة الإجراء التي ينحرف عندها سجل المخزون",
        },
        paragraphs: [
          {
            en: "Inventory errors often begin at a hand-off: an item arrives before the receipt is entered, a pick is substituted without a record, a return goes back to a shelf without inspection, or an adjustment has no reason. Trace a sample discrepancy backward through its events before changing software or setting a new stock target.",
            ar: "تبدأ أخطاء المخزون غالبًا عند تسليم العمل: وصول صنف قبل تسجيل استلامه، أو استبدال صنف أثناء التجهيز دون توثيق، أو إعادة مرتجع إلى الرف قبل فحصه، أو إجراء تسوية بلا سبب. تتبع عينة من الفروقات إلى أحداثها السابقة قبل تغيير البرنامج أو تحديد حد مخزون جديد.",
          },
        ],
      },
      {
        heading: {
          en: "Standardize item identity and movement records",
          ar: "وحّد تعريف الصنف وسجلات الحركة",
        },
        paragraphs: [
          {
            en: "Use consistent identifiers, descriptions, units of measure, and location names. Record receiving, put-away, reservation, picking, dispatch, transfer, return, damage, and adjustment as separate events with a time and responsible role. Barcode scanning can help where manual identification is a proven error source, but labels and scanning procedures must also be maintained.",
            ar: "استخدم معرفات وأوصافًا ووحدات قياس وأسماء مواقع موحدة. سجّل الاستلام والتخزين والحجز والالتقاط والتسليم والتحويل والمرتجع والتالف والتسوية كأحداث منفصلة مع الوقت والدور المسؤول. قد يساعد الباركود عندما يكون التعرف اليدوي سببًا مثبتًا للأخطاء، لكن يجب أيضًا صيانة الملصقات وإجراءات المسح.",
          },
        ],
      },
      {
        heading: {
          en: "Use counts and approvals to investigate, not hide, differences",
          ar: "استخدم الجرد والموافقات لفهم الفروقات لا إخفائها",
        },
        paragraphs: [
          {
            en: "Choose a counting method and schedule that match item value, movement, and operational risk. When a count differs, recount where appropriate, check pending movements and units, document the reason, and route material adjustments for review. A changed quantity without a cause only resets the visible number.",
            ar: "اختر طريقة الجرد وجدوله بما يناسب قيمة الصنف وحركته ومخاطره التشغيلية. عند اختلاف العدد، أعد الجرد عند الحاجة، وافحص الحركات المعلقة ووحدات القياس، ووثّق السبب، وأرسل التسويات المهمة للمراجعة. تغيير الكمية بلا سبب يبدل الرقم الظاهر فقط.",
          },
          {
            en: "Track recurring discrepancy categories and use them to improve receiving, storage, picking, training, or system controls. Agree on definitions so different teams record the same type of issue consistently.",
            ar: "تابع فئات الفروقات المتكررة واستخدمها لتحسين الاستلام أو التخزين أو التجهيز أو التدريب أو ضوابط النظام. اتفق على التعريفات حتى تسجل الفرق المشكلة نفسها بالطريقة نفسها.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          en: "Why does inventory in the system differ from the physical count?",
          ar: "لماذا يختلف المخزون في النظام عن الجرد الفعلي؟",
        },
        answer: {
          en: "Common causes include late or missed transaction entry, incorrect units or item identity, unrecorded returns and damage, location confusion, and adjustments without investigation. Trace recent movements to identify the cause.",
          ar: "تشمل الأسباب الشائعة تأخر تسجيل المعاملات أو نسيانها، وخطأ الوحدة أو تعريف الصنف، وعدم تسجيل المرتجعات والتالف، والخلط بين المواقع، والتسويات دون تحقق. راجع الحركات الأخيرة لمعرفة السبب.",
        },
      },
      {
        question: {
          en: "How often should a business count inventory?",
          ar: "كم مرة ينبغي للشركة جرد المخزون؟",
        },
        answer: {
          en: "The schedule depends on item risk, movement, business controls, and operational capacity. Define a documented method with accountable owners and follow applicable accounting or regulatory requirements.",
          ar: "يعتمد الجدول على مخاطر الصنف وحركته وضوابط الشركة وقدرتها التشغيلية. ضع طريقة موثقة بمسؤولين واضحين، والتزم بمتطلبات المحاسبة أو التنظيم المعمول بها.",
        },
      },
      {
        question: {
          en: "Can barcode scanning eliminate inventory errors?",
          ar: "هل يقضي الباركود على أخطاء المخزون؟",
        },
        answer: {
          en: "No. Scanning can reduce some manual identification and entry errors, but inaccurate labels, skipped scans, weak movement controls, and incorrect units can still create discrepancies.",
          ar: "لا. قد يقلل المسح بعض أخطاء التعرف والإدخال اليدوي، لكن الملصقات الخاطئة وتجاوز المسح وضعف ضوابط الحركة ووحدات القياس غير الصحيحة قد تستمر في إنتاج الفروقات.",
        },
      },
    ],
  },
  {
    slug: "choosing-clinic-management-software",
    category: { en: "Clinic software", ar: "أنظمة إدارة العيادات" },
    title: {
      en: "How to Choose Clinic Management Software for Appointments, Records, and Billing",
      ar: "كيف تختار برنامج إدارة عيادة للمواعيد والسجلات والفوترة؟",
    },
    excerpt: {
      en: "Compare clinic systems by mapping reception and care-team workflows, protecting sensitive records, and testing appointments, follow-up, billing, and reporting.",
      ar: "قارن أنظمة العيادات برسم إجراءات الاستقبال والفريق الطبي وحماية السجلات الحساسة واختبار المواعيد والمتابعة والفوترة والتقارير.",
    },
    publishedAt: PUBLISHED_AT,
    readingMinutes: 7,
    serviceId: "custom-software",
    relatedProjectId: "dental-clinic",
    sections: [
      {
        heading: {
          en: "Match the system to the clinic's patient journey",
          ar: "طابق النظام مع رحلة المريض داخل العيادة",
        },
        paragraphs: [
          {
            en: "Start with how a patient moves through the clinic: appointment request, scheduling, arrival, consultation, documentation, billing, and follow-up. Identify what reception, clinicians, assistants, and finance staff need to see or update at each step, and where hand-offs are currently missed.",
            ar: "ابدأ بمسار المريض داخل العيادة: طلب الموعد وحجزه والوصول والاستشارة والتوثيق والفوترة والمتابعة. حدّد ما يحتاج الاستقبال والأطباء والمساعدون والمالية إلى رؤيته أو تحديثه في كل خطوة، وأين تتعثر عمليات التسليم حاليًا.",
          },
          {
            en: "A specialty practice may need workflows that a general appointment calendar does not cover. Confirm that the product can represent your visit types, providers, rooms, care documentation, and follow-up without forcing staff into duplicate records.",
            ar: "قد تحتاج العيادة المتخصصة إلى إجراءات لا يغطيها جدول مواعيد عام. تحقق من قدرة المنتج على تمثيل أنواع الزيارات والأطباء والغرف والتوثيق والمتابعة دون فرض سجلات مكررة على الموظفين.",
          },
        ],
      },
      {
        heading: {
          en: "Evaluate scheduling, records, billing, and communication",
          ar: "قيّم المواعيد والسجلات والفوترة والتواصل",
        },
        paragraphs: [
          {
            en: "Test booking, rescheduling, cancellations, waiting lists, and reminders. Review how authorized staff locate the right patient record, document a visit, attach supporting files, issue a bill, and arrange a follow-up. Distinguish clinical documentation from administrative notes and define who can access each.",
            ar: "اختبر الحجز وتغيير الموعد والإلغاء وقوائم الانتظار والتذكيرات. راجع طريقة وصول الموظفين المصرح لهم إلى ملف المريض الصحيح وتوثيق الزيارة وإرفاق الملفات وإصدار الفاتورة وترتيب المتابعة. افصل التوثيق السريري عن الملاحظات الإدارية وحدد من يصل إلى كل منها.",
          },
        ],
      },
      {
        heading: {
          en: "Review privacy, permissions, and continuity",
          ar: "راجع الخصوصية والصلاحيات واستمرارية العمل",
        },
        paragraphs: [
          {
            en: "Ask the supplier to explain role permissions, access logs, backups, restoration, exports, retention, deletion, and vendor access. Review hosting and data handling against the rules that apply to your location and practice type with qualified advisers; a software feature alone does not establish regulatory compliance.",
            ar: "اطلب من المزود شرح صلاحيات الأدوار وسجلات الوصول والنسخ الاحتياطية والاستعادة والتصدير والاحتفاظ والحذف ووصول المزود. راجع الاستضافة والتعامل مع البيانات وفق القواعد المعمول بها في بلدك ونوع العيادة بمشاركة مختصين؛ فالميزة البرمجية وحدها لا تثبت الامتثال التنظيمي.",
          },
          {
            en: "Use fictional or authorized test records during evaluation. Before migration, agree on who may approve it, what information is necessary, how quality and completeness will be checked, and what the clinic should do if the transfer fails.",
            ar: "استخدم سجلات تجريبية وهمية أو مصرحًا بها أثناء التقييم. وقبل الترحيل، حدّد من يعتمد العملية والمعلومات الضرورية وطريقة فحص الجودة والاكتمال والإجراء المتبع عند فشل النقل.",
          },
        ],
      },
      {
        heading: {
          en: "Ask vendors to demonstrate complete scenarios",
          ar: "اطلب من الشركات عرض سيناريوهات متكاملة",
        },
        paragraphs: [
          {
            en: "Give each vendor the same practical scenarios: a new patient, a rescheduled visit, an absent patient, a multi-visit treatment, a billing correction, and a staff hand-off. Score usability, access controls, auditability, data export, support, and fit gaps—not visual polish alone.",
            ar: "قدّم لكل مزود السيناريوهات العملية نفسها: مريض جديد وموعد متغير ومريض متغيب وعلاج متعدد الزيارات وتصحيح فاتورة وتسليم مهمة بين الموظفين. قيّم سهولة الاستخدام والصلاحيات والتدقيق وتصدير البيانات والدعم وفجوات الملاءمة، لا المظهر وحده.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          en: "What features should clinic management software include?",
          ar: "ما المميزات التي ينبغي أن يتضمنها برنامج إدارة العيادة؟",
        },
        answer: {
          en: "It should support the clinic's appointment, patient-record, care-documentation, billing, follow-up, reporting, and permission workflows, with data handling checked against local requirements.",
          ar: "ينبغي أن يدعم إجراءات المواعيد وسجلات المرضى والتوثيق والرعاية والفوترة والمتابعة والتقارير والصلاحيات، مع مراجعة التعامل مع البيانات وفق المتطلبات المحلية.",
        },
      },
      {
        question: {
          en: "How do we evaluate clinic software without exposing real patient data?",
          ar: "كيف نقيّم نظام العيادة دون كشف بيانات مرضى حقيقية؟",
        },
        answer: {
          en: "Use fictional or properly authorized sample records, restrict access during demonstrations, and review the supplier's data handling, retention, export, and deletion processes before any live migration.",
          ar: "استخدم سجلات تجريبية وهمية أو مصرحًا بها، وقيّد الوصول أثناء العروض، وراجع إجراءات المزود للتعامل مع البيانات والاحتفاظ والتصدير والحذف قبل ترحيل أي بيانات فعلية.",
        },
      },
      {
        question: {
          en: "Does clinic software make a practice compliant?",
          ar: "هل يجعل برنامج العيادة ممارستها ممتثلة تلقائيًا؟",
        },
        answer: {
          en: "No. Compliance depends on applicable rules, system configuration, staff procedures, contracts, and ongoing oversight. Ask qualified local professionals to assess the full operating arrangement.",
          ar: "لا. يعتمد الامتثال على القواعد المعمول بها وتهيئة النظام وإجراءات الموظفين والعقود والرقابة المستمرة. اطلب من مختصين محليين تقييم بيئة التشغيل كاملة.",
        },
      },
    ],
  },
  {
    slug: "choosing-pharmacy-management-system",
    category: { en: "Pharmacy systems", ar: "أنظمة الصيدليات" },
    title: {
      en: "How to Choose Pharmacy Software for Stock, Expiry, and Point of Sale",
      ar: "كيف تختار نظام صيدلية لإدارة المخزون والصلاحية ونقاط البيع؟",
    },
    excerpt: {
      en: "Use real pharmacy workflows to test product identity, batches, expiry handling, purchasing, POS, returns, permissions, and local requirements.",
      ar: "استخدم إجراءات الصيدلية الفعلية لاختبار تعريف الأصناف والدفعات والصلاحية والمشتريات ونقاط البيع والمرتجعات والصلاحيات والمتطلبات المحلية.",
    },
    publishedAt: PUBLISHED_AT,
    readingMinutes: 7,
    serviceId: "erp",
    relatedProjectId: "pharmacy-ims",
    sections: [
      {
        heading: {
          en: "Define how products are identified and tracked",
          ar: "حدّد طريقة تعريف الأصناف وتتبعها",
        },
        paragraphs: [
          {
            en: "Create representative examples for products that differ by brand, strength, form, pack size, or barcode. Ask how the system handles each identifier, supplier unit, batch, expiry date, and branch location, and how staff distinguish similar items during receiving and checkout.",
            ar: "جهّز أمثلة لأصناف تختلف بالاسم التجاري أو التركيز أو الشكل أو حجم العبوة أو الباركود. اسأل عن طريقة التعامل مع كل معرف ووحدة المورد والدفعة والصلاحية وموقع الفرع، وكيف يميز الموظفون الأصناف المتشابهة عند الاستلام والبيع.",
          },
        ],
      },
      {
        heading: {
          en: "Test stock, purchasing, checkout, and returns",
          ar: "اختبر المخزون والمشتريات والبيع والمرتجعات",
        },
        paragraphs: [
          {
            en: "Walk through supplier receipt, batch entry, put-away, point-of-sale, voids, customer returns, branch transfers, and stock counts. Check who can change a price, approve an adjustment, or release stock held for review, and confirm every important event leaves a usable record.",
            ar: "اختبر استلام المورد وإدخال الدفعة والتخزين والبيع وإلغاء المعاملة ومرتجعات العملاء والتحويل بين الفروع والجرد. تحقّق ممن يستطيع تعديل السعر أو اعتماد التسوية أو الإفراج عن صنف موقوف للمراجعة، وتأكد من توثيق الأحداث المهمة.",
          },
          {
            en: "Reorder suggestions should be reviewable and based on maintained data such as stock, supplier lead time, pack size, and approved purchasing rules. Test how the pharmacy handles near-expiry or expired items according to its local procedures.",
            ar: "ينبغي أن تكون اقتراحات إعادة الطلب قابلة للمراجعة ومبنية على بيانات محدثة مثل المخزون ومدة التوريد وحجم العبوة وقواعد الشراء المعتمدة. اختبر طريقة التعامل مع الأصناف القريبة من انتهاء الصلاحية أو المنتهية وفق الإجراءات المحلية.",
          },
        ],
      },
      {
        heading: {
          en: "Verify reporting, data protection, and local obligations",
          ar: "تحقق من التقارير وحماية البيانات والالتزامات المحلية",
        },
        paragraphs: [
          {
            en: "Review sales and stock reports, financial exports, access roles, audit records, backups, recovery, and data export. Pharmacy, tax, prescription, and record-retention requirements vary by jurisdiction and product, so have qualified local professionals verify the proposed configuration and procedures.",
            ar: "راجع تقارير المبيعات والمخزون والتصدير المالي وصلاحيات الوصول وسجلات التدقيق والنسخ الاحتياطية والاستعادة وتصدير البيانات. تختلف متطلبات الصيدلة والضرائب والوصفات والاحتفاظ بالسجلات حسب البلد والمنتج، لذا اطلب من مختصين محليين مراجعة التهيئة والإجراءات.",
          },
          {
            en: "Do not use a live prescription or customer record in a vendor demo unless its use is properly authorized and protected. Use sample data to validate the workflow first.",
            ar: "لا تستخدم وصفة أو سجل عميل حقيقيًا في عرض المورد ما لم يكن الاستخدام مصرحًا ومحميًا على النحو المطلوب. ابدأ ببيانات تجريبية للتحقق من الإجراء.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          en: "What should pharmacy software track for stock?",
          ar: "ما الذي ينبغي لنظام الصيدلية تتبعه في المخزون؟",
        },
        answer: {
          en: "Depending on the operation and local requirements, track product identity, units, location, receipts, sales, returns, adjustments, and relevant batch or expiry details with accountable access.",
          ar: "بحسب طبيعة العمل والمتطلبات المحلية، تتبع تعريف الصنف ووحداته وموقعه والاستلام والبيع والمرتجعات والتسويات وبيانات الدفعة أو الصلاحية ذات الصلة مع ضبط الصلاحيات.",
        },
      },
      {
        question: {
          en: "How should we test pharmacy point-of-sale software?",
          ar: "كيف نختبر نظام نقاط بيع الصيدلية؟",
        },
        answer: {
          en: "Use sample products and test purchases, barcode identification, discounts, voids, returns, stock updates, permissions, and financial reconciliation with representative staff.",
          ar: "استخدم أصنافًا تجريبية واختبر الشراء والتعرف بالباركود والخصومات والإلغاء والمرتجعات وتحديث المخزون والصلاحيات والمطابقة المالية بمشاركة موظفين ممثلين.",
        },
      },
      {
        question: {
          en: "Can pharmacy software replace professional or regulatory review?",
          ar: "هل يغني برنامج الصيدلية عن المراجعة المهنية أو التنظيمية؟",
        },
        answer: {
          en: "No. Software supports records and workflows, but qualified pharmacy and compliance professionals must verify applicable rules, configuration, and operating procedures.",
          ar: "لا. يدعم البرنامج السجلات والإجراءات، لكن على المختصين بالصيدلة والامتثال التحقق من القواعد والتهيئة وإجراءات التشغيل المعمول بها.",
        },
      },
    ],
  },
  {
    slug: "employee-app-vs-customer-app",
    category: { en: "Mobile app planning", ar: "التخطيط لتطبيقات الموبايل" },
    title: {
      en: "Employee App or Customer App? How to Choose the Right Business Mobile Product",
      ar: "تطبيق للموظفين أم للعملاء؟ كيف تحدد نوع تطبيق شركتك؟",
    },
    excerpt: {
      en: "Choose an internal or customer-facing app by identifying the user, task, data access, operating context, and the smallest workflow worth testing.",
      ar: "اختر تطبيقًا داخليًا أو موجهًا للعملاء بتحديد المستخدم والمهمة والوصول إلى البيانات وسياق الاستخدام وأصغر إجراء يستحق الاختبار.",
    },
    publishedAt: PUBLISHED_AT,
    readingMinutes: 6,
    serviceId: "custom-software",
    relatedProjectId: "abo3mo-delivery",
    sections: [
      {
        heading: {
          en: "Start with the user and the task",
          ar: "ابدأ بالمستخدم والمهمة",
        },
        paragraphs: [
          {
            en: "A mobile app is justified when it helps a defined group complete a recurring task in a context where a phone is useful. Identify the user, the current workaround, the data needed, and the outcome that would make the workflow better. A responsive website or improved internal tool may be a better first step if the task is occasional or works well in a browser.",
            ar: "يكون تطبيق الموبايل مبررًا عندما يساعد مجموعة محددة على إنجاز مهمة متكررة في سياق يفيد فيه الهاتف. حدّد المستخدم والحل اليدوي الحالي والبيانات اللازمة والنتيجة التي تحسّن الإجراء. قد يكون موقع متجاوب أو أداة داخلية أفضل إذا كانت المهمة نادرة أو تعمل جيدًا في المتصفح.",
          },
        ],
        comparison: {
          headers: [
            { en: "Decision area", ar: "جانب القرار" },
            { en: "Employee app", ar: "تطبيق الموظفين" },
            { en: "Customer app", ar: "تطبيق العملاء" },
          ],
          rows: [
            [
              { en: "Typical tasks", ar: "المهام المعتادة" },
              { en: "Field work, approvals, stock checks, or job updates.", ar: "العمل الميداني والموافقات وفحص المخزون وتحديث المهام." },
              { en: "Ordering, account access, booking, or delivery tracking.", ar: "الطلب والوصول للحساب والحجز وتتبع التوصيل." },
            ],
            [
              { en: "Access model", ar: "نموذج الوصول" },
              { en: "Organization-managed identity and role-based permissions.", ar: "هوية تديرها الشركة وصلاحيات حسب الدور." },
              { en: "Customer onboarding, consent, support, and account recovery.", ar: "تسجيل العملاء والموافقة والدعم واستعادة الحساب." },
            ],
            [
              { en: "Success measure", ar: "مقياس النجاح" },
              { en: "Task completion, data quality, or reduced process friction.", ar: "إتمام المهمة وجودة البيانات أو تقليل عوائق الإجراء." },
              { en: "Successful customer task, adoption, and service quality.", ar: "إنجاز العميل لمهمته والاستخدام وجودة الخدمة." },
            ],
          ],
        },
      },
      {
        heading: {
          en: "Design internal apps around roles and real-world conditions",
          ar: "صمّم التطبيقات الداخلية وفق الأدوار وظروف العمل",
        },
        paragraphs: [
          {
            en: "Employees may share devices, work in low-connectivity areas, scan items, or need a task completed with few steps. Define authentication, device policy, permissions, offline behavior, and how data is synchronized. Important business rules must be enforced by the trusted system, not only hidden in the app interface.",
            ar: "قد يتشارك الموظفون الأجهزة أو يعملون في أماكن ضعيفة الاتصال أو يمسحون الأصناف أو يحتاجون لإنجاز المهمة بخطوات قليلة. حدّد المصادقة وسياسة الجهاز والصلاحيات والعمل دون اتصال ومزامنة البيانات. يجب فرض قواعد العمل المهمة في النظام الموثوق، لا إخفاؤها في واجهة التطبيق فقط.",
          },
        ],
      },
      {
        heading: {
          en: "Build customer apps around trust and service continuity",
          ar: "صمّم تطبيق العملاء حول الثقة واستمرارية الخدمة",
        },
        paragraphs: [
          {
            en: "Customer-facing apps need clear onboarding, accessible flows, transparent data use, support paths, and recovery when a payment, booking, or delivery update fails. Identify which information belongs to the customer and which system owns it, then provide a browser or human support route for essential tasks.",
            ar: "تحتاج تطبيقات العملاء إلى تسجيل واضح وإجراءات ميسرة وشرح لاستخدام البيانات وقنوات دعم واستعادة الخدمة عند فشل الدفع أو الحجز أو تحديث التوصيل. حدّد المعلومات الخاصة بالعميل والنظام المسؤول عنها، ووفر مسارًا عبر المتصفح أو الدعم البشري للمهام الأساسية.",
          },
        ],
      },
      {
        heading: {
          en: "Prototype one complete journey before expanding",
          ar: "اختبر رحلة كاملة واحدة قبل التوسع",
        },
        paragraphs: [
          {
            en: "Prototype the highest-value journey from sign-in to completion, including empty, offline, denied-permission, and error states. Test it with representative users and use their feedback to decide whether to proceed, change the channel, or narrow the first release.",
            ar: "أنشئ نموذجًا أوليًا لأهم رحلة من تسجيل الدخول إلى إتمام المهمة، مع حالات الفراغ وانقطاع الاتصال ورفض الصلاحيات والأخطاء. اختبره مع مستخدمين ممثلين واستخدم ملاحظاتهم لتقرر الاستمرار أو تغيير القناة أو تقليص الإصدار الأول.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          en: "Does every business need a mobile app?",
          ar: "هل تحتاج كل شركة إلى تطبيق موبايل؟",
        },
        answer: {
          en: "No. First confirm that a defined user has a recurring task that benefits from mobile access. A responsive website or internal tool may be simpler when app-specific capabilities are unnecessary.",
          ar: "لا. تحقق أولًا من وجود مستخدم محدد ومهمة متكررة تستفيد من الهاتف. قد يكون الموقع المتجاوب أو الأداة الداخلية أبسط عندما لا تحتاج المهمة إلى إمكانات تطبيق خاصة.",
        },
      },
      {
        question: {
          en: "Should we build an employee app or a customer app first?",
          ar: "هل نبدأ بتطبيق للموظفين أم للعملاء؟",
        },
        answer: {
          en: "Prioritize the workflow with a clear owner, recurring need, measurable acceptance criteria, and manageable dependencies. The user group alone does not determine which app should come first.",
          ar: "قدّم الإجراء ذي المسؤول الواضح والحاجة المتكررة ومعايير القبول القابلة للقياس والاعتماديات الممكنة. لا تحدد فئة المستخدم وحدها أي التطبيقين يبدأ أولًا.",
        },
      },
      {
        question: {
          en: "Can one app serve both employees and customers?",
          ar: "هل يمكن لتطبيق واحد خدمة الموظفين والعملاء؟",
        },
        answer: {
          en: "It can, but the two audiences may need different identity, permissions, information, and support flows. Separate experiences or applications can be easier to protect and maintain when their needs diverge.",
          ar: "قد يكون ذلك ممكنًا، لكن الجمهورين قد يحتاجان إلى هويات وصلاحيات ومعلومات ودعم مختلف. يسهل فصل التجربتين أو التطبيقين حمايتهما وصيانتهما عندما تختلف الاحتياجات.",
        },
      },
    ],
  },
  {
    slug: "secure-business-mobile-app",
    category: { en: "Mobile security", ar: "أمان تطبيقات الموبايل" },
    title: {
      en: "How to Protect Business Data in a Mobile App",
      ar: "كيف تحمي بيانات شركتك في تطبيق الموبايل؟",
    },
    excerpt: {
      en: "Protect mobile business data with least-privilege access, secure backend authorization, careful device storage, protected network traffic, and tested release processes.",
      ar: "احمِ بيانات الأعمال بصلاحيات محدودة وتحقق خلفي آمن وتخزين مدروس على الجهاز واتصال محمي وإجراءات إصدار مختبرة.",
    },
    publishedAt: PUBLISHED_AT,
    readingMinutes: 8,
    serviceId: "custom-software",
    relatedProjectId: "abo3mo-delivery",
    sections: [
      {
        heading: {
          en: "Start with a data and threat inventory",
          ar: "ابدأ بحصر البيانات والتهديدات",
        },
        paragraphs: [
          {
            en: "List the data the app collects, displays, stores, and sends, and identify who can access each item. Consider lost devices, shared accounts, compromised credentials, unsafe exports, interception, and over-broad employee access. Minimize collection and retention before adding controls around data the product does not need.",
            ar: "احصر البيانات التي يجمعها التطبيق ويعرضها ويخزنها ويرسلها، وحدد من يستطيع الوصول إلى كل منها. فكّر في فقدان الأجهزة والحسابات المشتركة وتسريب بيانات الدخول والتصدير غير الآمن واعتراض الاتصال واتساع صلاحيات الموظفين. قلل جمع البيانات والاحتفاظ بها قبل إضافة ضوابط لبيانات لا يحتاجها المنتج.",
          },
        ],
      },
      {
        heading: {
          en: "Enforce identity and authorization beyond the interface",
          ar: "طبّق الهوية والصلاحيات خارج حدود الواجهة",
        },
        paragraphs: [
          {
            en: "Use an appropriate identity flow, short-lived credentials where supported, and a clear sign-out and account recovery process. The backend must check authorization for every sensitive operation and record important actions; hiding a button or storing a role in the app does not enforce access control.",
            ar: "استخدم آلية هوية مناسبة وبيانات دخول قصيرة العمر عند دعم ذلك، مع تسجيل خروج واستعادة حساب واضحين. يجب أن يتحقق النظام الخلفي من الصلاحية لكل إجراء حساس ويسجل الأحداث المهمة؛ إخفاء زر أو حفظ الدور في التطبيق لا يفرض التحكم بالوصول.",
          },
          {
            en: "Define how access is revoked when a worker leaves or a device is lost. For company-managed devices, align app behavior with the organization's device and incident policies.",
            ar: "حدّد طريقة إلغاء الوصول عند مغادرة الموظف أو فقدان الجهاز. وفي الأجهزة التي تديرها الشركة، نسّق سلوك التطبيق مع سياسات الأجهزة والحوادث.",
          },
        ],
      },
      {
        heading: {
          en: "Protect data on the device and over the network",
          ar: "احمِ البيانات على الجهاز وأثناء الاتصال",
        },
        paragraphs: [
          {
            en: "Avoid storing sensitive data locally unless the workflow requires it. Use platform-provided secure storage for secrets, protect cached records, set appropriate retention and clearing behavior, and avoid exposing sensitive content in logs, notifications, screenshots, or backups.",
            ar: "تجنب تخزين البيانات الحساسة محليًا ما لم يتطلب الإجراء ذلك. استخدم التخزين الآمن الذي توفره المنصة للأسرار، واحمِ السجلات المخزنة مؤقتًا، وحدد مدة الاحتفاظ والمسح، وتجنب كشف البيانات في السجلات أو الإشعارات أو الصور أو النسخ الاحتياطية.",
          },
          {
            en: "Use correctly configured encrypted connections and verify server identity. Treat certificate handling, deep links, third-party SDKs, and file sharing as part of the security review rather than as implementation details.",
            ar: "استخدم اتصالات مشفرة ومهيأة بشكل صحيح وتحقق من هوية الخادم. أدرج الشهادات والروابط العميقة ومكتبات الجهات الخارجية ومشاركة الملفات ضمن مراجعة الأمان، لا كتفاصيل تنفيذية هامشية.",
          },
        ],
      },
      {
        heading: {
          en: "Test security throughout development and release",
          ar: "اختبر الأمان طوال التطوير والإصدار",
        },
        paragraphs: [
          {
            en: "Review dependencies, permissions, authentication, authorization, storage, network behavior, and update paths on supported devices. Add security cases to normal quality testing, maintain an incident contact, and plan how to ship fixes. A checklist or framework is a guide, not a guarantee that an app is secure.",
            ar: "راجع الاعتماديات والصلاحيات والمصادقة والتخويل والتخزين وسلوك الاتصال والتحديث على الأجهزة المدعومة. أدرج اختبارات الأمان ضمن فحوص الجودة المعتادة، وحدد جهة للحوادث وخطة لإصدار الإصلاحات. القائمة أو المعيار دليل عمل لا ضمان لأمان التطبيق.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          en: "Is hiding a feature in the mobile app enough to secure it?",
          ar: "هل يكفي إخفاء ميزة في التطبيق لحمايتها؟",
        },
        answer: {
          en: "No. The backend must verify authentication and authorization for every protected operation. Interface controls improve usability but are not a security boundary.",
          ar: "لا. يجب أن يتحقق النظام الخلفي من الهوية والصلاحية لكل عملية محمية. تحسن ضوابط الواجهة سهولة الاستخدام لكنها ليست حدًا أمنيًا.",
        },
      },
      {
        question: {
          en: "Should a business app store data on the phone?",
          ar: "هل ينبغي لتطبيق الأعمال تخزين البيانات على الهاتف؟",
        },
        answer: {
          en: "Only the data needed for the workflow should be stored, with appropriate protection, retention, and clearing behavior. The right design depends on sensitivity, offline requirements, and device management.",
          ar: "لا تخزن إلا البيانات اللازمة للإجراء، مع حماية واحتفاظ ومسح مناسبين. يعتمد التصميم على حساسية البيانات ومتطلبات العمل دون اتصال وإدارة الأجهزة.",
        },
      },
      {
        question: {
          en: "Does following OWASP guidance guarantee a secure mobile app?",
          ar: "هل يضمن اتباع إرشادات OWASP أمان تطبيق الموبايل؟",
        },
        answer: {
          en: "No. OWASP MASVS provides a structured verification reference, but security depends on the app, backend, configuration, dependencies, operations, and ongoing testing.",
          ar: "لا. يوفر OWASP MASVS مرجعًا منظمًا للتحقق، لكن الأمان يعتمد على التطبيق والنظام الخلفي والتهيئة والاعتماديات والتشغيل والاختبارات المستمرة.",
        },
      },
    ],
    sources: [
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
    slug: "ecommerce-inventory-accounting-courier-integration",
    category: { en: "Systems integration", ar: "تكامل الأنظمة" },
    title: {
      en: "How to Connect an Online Store to Inventory, Accounting, and Delivery",
      ar: "كيف تربط المتجر الإلكتروني بالمخزون والمحاسبة والتوصيل؟",
    },
    excerpt: {
      en: "Plan e-commerce integrations by assigning data ownership, mapping order events, preventing duplicate updates, and reconciling stock, payments, and delivery.",
      ar: "خطط لتكامل التجارة الإلكترونية بتحديد ملكية البيانات ورسم أحداث الطلب ومنع التحديثات المكررة ومطابقة المخزون والمدفوعات والتوصيل.",
    },
    publishedAt: PUBLISHED_AT,
    readingMinutes: 8,
    serviceId: "web-saas",
    relatedProjectId: "abo3mo-delivery",
    sections: [
      {
        heading: {
          en: "Decide which system owns each business record",
          ar: "حدّد النظام المسؤول عن كل سجل",
        },
        paragraphs: [
          {
            en: "Before connecting a store, inventory, accounting, and courier platform, assign an authoritative owner for products, prices, customers, orders, stock, invoices, and delivery status. Document which fields can change in each system and how conflicts are resolved.",
            ar: "قبل ربط المتجر والمخزون والمحاسبة وشركة التوصيل، عيّن النظام المرجعي المسؤول عن الأصناف والأسعار والعملاء والطلبات والمخزون والفواتير وحالة التوصيل. وثّق الحقول التي يمكن تعديلها في كل نظام وطريقة حل التعارض.",
          },
          {
            en: "A connection should preserve business meaning. For example, clarify when an order reserves stock, when revenue is recorded by the accounting process, and whether a courier status changes inventory or only fulfillment progress.",
            ar: "ينبغي أن يحافظ الربط على معنى الإجراء. وضّح مثلًا متى يحجز الطلب المخزون ومتى تسجل المحاسبة الإيراد وهل تغير حالة شركة التوصيل المخزون أم تقدم التجهيز فقط.",
          },
        ],
      },
      {
        heading: {
          en: "Map order events and exception handling",
          ar: "ارسم أحداث الطلب ومعالجة الاستثناءات",
        },
        paragraphs: [
          {
            en: "Define events from order placement through confirmation, allocation, picking, dispatch, delivery, cancellation, and return. Agree which events trigger messages and which system is allowed to change each status. Include out-of-stock orders, partial fulfillment, address changes, failed delivery, and refunds.",
            ar: "عرّف الأحداث من تسجيل الطلب إلى تأكيده وتخصيصه وتجهيزه وتسليمه للتوصيل ووصوله أو إلغائه أو إرجاعه. اتفق على الأحداث التي ترسل تحديثًا والنظام المخول بتغيير كل حالة. أدرج نفاد المخزون والتجهيز الجزئي وتغيير العنوان وفشل التسليم والاسترداد.",
          },
        ],
      },
      {
        heading: {
          en: "Make data exchange reliable and reconcilable",
          ar: "اجعل تبادل البيانات موثوقًا وقابلًا للمطابقة",
        },
        paragraphs: [
          {
            en: "Design for delayed, duplicated, missing, and out-of-order messages. Use stable references, record processing outcomes, expose failed updates to an owner, and provide a safe retry process. A technical success response is not enough; compare totals and business states across connected systems.",
            ar: "صمّم للتعامل مع الرسائل المتأخرة والمكررة والمفقودة والواردة بترتيب مختلف. استخدم مراجع ثابتة وسجل نتائج المعالجة وأظهر التحديثات الفاشلة لمسؤول ووفر إعادة محاولة آمنة. لا تكفي استجابة النجاح التقنية؛ قارن الإجماليات والحالات بين الأنظمة.",
          },
        ],
      },
      {
        heading: {
          en: "Pilot the full order lifecycle before expanding",
          ar: "جرّب دورة الطلب كاملة قبل التوسع",
        },
        paragraphs: [
          {
            en: "Test a small set of representative orders from checkout to settlement, including cancellation, return, partial delivery, and a failed integration. Assign owners for each system, agree on reconciliation checks, and only expand after the operational team can resolve common exceptions.",
            ar: "اختبر مجموعة صغيرة من الطلبات الممثلة من إتمام الشراء حتى التسوية، بما يشمل الإلغاء والمرتجع والتسليم الجزئي وفشل التكامل. عيّن مسؤولين لكل نظام واتفق على فحوص المطابقة، ولا تتوسع قبل قدرة فريق التشغيل على معالجة الاستثناءات المعتادة.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          en: "Which system should be the source of truth for inventory?",
          ar: "أي نظام ينبغي أن يكون المرجع الأساسي للمخزون؟",
        },
        answer: {
          en: "Choose one accountable system for stock balances and movements, then define how other systems consume updates and how discrepancies are reconciled. The right system depends on the company's operating model.",
          ar: "اختر نظامًا مسؤولًا عن أرصدة المخزون وحركاته، ثم حدد طريقة استهلاك الأنظمة الأخرى للتحديثات ومطابقة الفروقات. يتوقف الاختيار على نموذج تشغيل الشركة.",
        },
      },
      {
        question: {
          en: "How can integrations avoid processing an order twice?",
          ar: "كيف تتجنب التكاملات معالجة الطلب مرتين؟",
        },
        answer: {
          en: "Use stable order and event identifiers, make handlers safe for repeated delivery, record processing results, and reconcile status and totals across systems.",
          ar: "استخدم معرفات ثابتة للطلب والحدث، واجعل المعالجة آمنة عند تكرار الإرسال، وسجل النتائج وطابق الحالات والإجماليات بين الأنظمة.",
        },
      },
      {
        question: {
          en: "What should an e-commerce integration pilot test?",
          ar: "ما الذي ينبغي اختباره في تجربة تكامل المتجر؟",
        },
        answer: {
          en: "Test an order's complete lifecycle, stock reservation and release, payment and invoice records, courier events, cancellations, returns, delayed messages, retries, and reconciliation.",
          ar: "اختبر دورة الطلب كاملة وحجز المخزون وإتاحته مجددًا وسجلات الدفع والفاتورة وأحداث شركة التوصيل والإلغاء والمرتجعات والرسائل المتأخرة وإعادة المحاولة والمطابقة.",
        },
      },
    ],
  },
  {
    slug: "when-business-needs-custom-dashboard",
    category: { en: "Business reporting", ar: "تقارير الأعمال" },
    title: {
      en: "When Does a Business Need a Custom Dashboard?",
      ar: "متى تحتاج الشركة إلى لوحة تحكم وتقارير مخصصة؟",
    },
    excerpt: {
      en: "Build a custom dashboard when a defined decision needs timely, trustworthy data that existing reports cannot provide—not just because charts look useful.",
      ar: "أنشئ لوحة مخصصة عندما يحتاج قرار محدد إلى بيانات موثوقة ومناسبة التوقيت لا توفرها التقارير الحالية، لا لمجرد أن الرسوم تبدو جذابة.",
    },
    publishedAt: PUBLISHED_AT,
    readingMinutes: 6,
    serviceId: "custom-software",
    relatedProjectId: "enterprise-erp",
    sections: [
      {
        heading: {
          en: "Start with the decision the dashboard should support",
          ar: "ابدأ بالقرار الذي ينبغي أن تدعمه اللوحة",
        },
        paragraphs: [
          {
            en: "A useful dashboard helps a named audience make a recurring decision or notice an exception in time to act. Identify who will use it, what question they ask, how often the answer is needed, and what action follows. If no decision changes after seeing a chart, reconsider whether the metric belongs on the dashboard.",
            ar: "تساعد لوحة التحكم المفيدة جمهورًا محددًا على اتخاذ قرار متكرر أو ملاحظة استثناء في الوقت المناسب. حدّد المستخدم والسؤال وتكرار الحاجة للإجابة والإجراء الناتج. إذا لم يتغير أي قرار بعد رؤية الرسم، فأعد التفكير في ضرورة المؤشر.",
          },
        ],
      },
      {
        heading: {
          en: "Define metrics and data ownership before designing charts",
          ar: "عرّف المؤشرات وملكية البيانات قبل تصميم الرسوم",
        },
        paragraphs: [
          {
            en: "Write a definition for each measure: included records, exclusions, time period, update delay, and accountable data owner. Agree whether the value is a count, rate, balance, or target, and show its context. Inconsistent source systems cannot be repaired by a visually polished chart.",
            ar: "اكتب تعريفًا لكل مؤشر يشمل السجلات المحتسبة والاستثناءات والفترة وتأخر التحديث ومسؤول البيانات. اتفق على كونه عددًا أو معدلًا أو رصيدًا أو مستهدفًا، وأظهر سياقه. لا يصلح الرسم الجميل تضارب الأنظمة المصدرية.",
          },
        ],
      },
      {
        heading: {
          en: "Design around user roles and follow-up actions",
          ar: "صمّم وفق أدوار المستخدمين وإجراءات المتابعة",
        },
        paragraphs: [
          {
            en: "Executives, operations managers, finance teams, and warehouse staff may need different levels of detail. Provide a clear summary with a path to investigate relevant records, respect access permissions, and show when information was last updated. A dashboard should make the next useful question easier to answer.",
            ar: "قد يحتاج التنفيذيون ومديرو التشغيل والمالية وموظفو المخازن إلى مستويات مختلفة من التفاصيل. قدم ملخصًا واضحًا ومسارًا لفحص السجلات ذات الصلة، واحترم الصلاحيات، وأظهر وقت آخر تحديث. ينبغي أن تسهّل اللوحة الوصول إلى السؤال التالي المفيد.",
          },
        ],
      },
      {
        heading: {
          en: "Build the smallest reliable version and maintain it",
          ar: "ابنِ أصغر نسخة موثوقة وحافظ عليها",
        },
        paragraphs: [
          {
            en: "Prototype a few agreed measures, validate them against source records, and test the dashboard with its intended users. Plan refresh behavior, monitoring, access review, data-quality ownership, and changes to metric definitions. A smaller trusted dashboard is more useful than a broad collection of unmaintained charts.",
            ar: "أنشئ نموذجًا لعدد قليل من المؤشرات المتفق عليها، وتحقق منها مقابل السجلات المصدرية، واختبر اللوحة مع مستخدميها. خطط للتحديث والمراقبة ومراجعة الصلاحيات ومسؤولية جودة البيانات وتغييرات تعريف المؤشرات. لوحة أصغر وموثوقة أنفع من مجموعة رسوم كبيرة مهملة.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          en: "What is the difference between a report and a dashboard?",
          ar: "ما الفرق بين التقرير ولوحة التحكم؟",
        },
        answer: {
          en: "A report often answers a defined question for a specific period or record set. A dashboard brings together selected measures to help a user monitor a process or decide where to investigate; the distinction depends on the workflow.",
          ar: "يجيب التقرير غالبًا عن سؤال محدد لفترة أو مجموعة سجلات، بينما تجمع لوحة التحكم مؤشرات مختارة لمراقبة إجراء أو تحديد موضع الفحص؛ ويعتمد الفرق على سير العمل.",
        },
      },
      {
        question: {
          en: "Which KPIs should appear on a company dashboard?",
          ar: "ما مؤشرات الأداء التي ينبغي أن تظهر في لوحة الشركة؟",
        },
        answer: {
          en: "Include only measures tied to decisions or actions for the intended audience. Define each metric, its source, update timing, context, and owner before displaying it.",
          ar: "أدرج المؤشرات المرتبطة بقرارات أو إجراءات لدى الجمهور المستهدف فقط. عرّف كل مؤشر ومصدره وتوقيت تحديثه وسياقه ومسؤوله قبل عرضه.",
        },
      },
      {
        question: {
          en: "Can a dashboard fix poor data quality?",
          ar: "هل تعالج لوحة التحكم ضعف جودة البيانات؟",
        },
        answer: {
          en: "No. It can surface inconsistencies, but data definitions, ownership, capture processes, and source-system controls must be improved at their origin.",
          ar: "لا. قد تكشف التناقضات، لكن يجب تحسين تعريفات البيانات وملكيتها وإجراءات إدخالها وضوابط أنظمتها المصدرية من مكانها.",
        },
      },
    ],
  },
  {
    slug: "measure-software-project-success",
    category: { en: "Software delivery", ar: "تسليم البرمجيات" },
    title: {
      en: "How to Measure Whether a Software Project Is Successful",
      ar: "كيف تقيس نجاح مشروع برمجي قبل الإطلاق وبعده؟",
    },
    excerpt: {
      en: "Define software project success through user outcomes, acceptance criteria, quality, adoption, operations, and agreed measures—not delivery date alone.",
      ar: "قِس نجاح المشروع البرمجي بنتائج المستخدم ومعايير القبول والجودة والاستخدام والتشغيل ومؤشرات متفق عليها، لا بموعد التسليم وحده.",
    },
    publishedAt: PUBLISHED_AT,
    readingMinutes: 7,
    serviceId: "custom-software",
    sections: [
      {
        heading: {
          en: "Define success before development begins",
          ar: "عرّف النجاح قبل بدء التطوير",
        },
        paragraphs: [
          {
            en: "A software project is successful when it solves an agreed problem for its intended users and can be operated and maintained responsibly. Translate the desired outcome into observable acceptance criteria: what task a user can complete, which records must reconcile, what roles are supported, and which constraints must hold.",
            ar: "ينجح المشروع البرمجي عندما يحل مشكلة متفقًا عليها لمستخدميه ويمكن تشغيله وصيانته بمسؤولية. حوّل النتيجة المطلوبة إلى معايير قبول قابلة للملاحظة: المهمة التي ينجزها المستخدم والسجلات التي يجب أن تتطابق والأدوار المدعومة والقيود الواجب احترامها.",
          },
          {
            en: "Record the current baseline where possible, such as existing completion time, error categories, support requests, or manual steps. A baseline makes later comparison meaningful; do not invent a target when the team has not agreed on one.",
            ar: "سجّل المستوى الحالي متى أمكن، مثل وقت الإنجاز الحالي أو فئات الأخطاء أو طلبات الدعم أو الخطوات اليدوية. يجعل خط الأساس المقارنة اللاحقة ذات معنى؛ ولا تخترع هدفًا لم يتفق عليه الفريق.",
          },
        ],
      },
      {
        heading: {
          en: "Measure acceptance, quality, and user outcomes",
          ar: "قِس القبول والجودة ونتائج المستخدم",
        },
        paragraphs: [
          {
            en: "Before launch, verify agreed scenarios, accessibility needs, supported devices, permissions, data migration, and integration behavior. After release, observe whether users complete the intended task, where they abandon it, what corrections they make, and which support issues recur.",
            ar: "قبل الإطلاق، تحقق من السيناريوهات المتفق عليها وإتاحة الوصول والأجهزة المدعومة والصلاحيات وترحيل البيانات وسلوك التكامل. بعد الإطلاق، راقب إتمام المستخدم للمهمة ومواضع التوقف والتصحيحات التي يجريها والمشكلات المتكررة.",
          },
        ],
      },
      {
        heading: {
          en: "Check operational readiness and total ownership",
          ar: "تحقق من جاهزية التشغيل والتكلفة الكلية للملكية",
        },
        paragraphs: [
          {
            en: "A released product still needs monitoring, backups, incident response, security updates, support ownership, and documented recovery. Include these responsibilities and costs in the success review, along with any manual processes the software still depends on.",
            ar: "يحتاج المنتج بعد إطلاقه إلى المراقبة والنسخ الاحتياطية والاستجابة للحوادث وتحديثات الأمان ومسؤول دعم واستعادة موثقة. أدرج هذه المسؤوليات والتكاليف في مراجعة النجاح، مع العمليات اليدوية التي ما زال النظام يعتمد عليها.",
          },
        ],
      },
      {
        heading: {
          en: "Use review points to learn and adjust",
          ar: "استخدم نقاط المراجعة للتعلم والتعديل",
        },
        paragraphs: [
          {
            en: "Schedule a review after representative usage rather than declaring success on launch day. Compare actual outcomes with the baseline and acceptance criteria, record unexpected effects, and decide whether to improve, expand, pause, or retire the feature. Keep the decision and evidence available to stakeholders.",
            ar: "حدد مراجعة بعد فترة استخدام ممثلة بدل إعلان النجاح يوم الإطلاق. قارن النتائج الفعلية بخط الأساس ومعايير القبول، وسجّل الآثار غير المتوقعة، وقرر التحسين أو التوسع أو الإيقاف أو التقاعد. وثّق القرار وأدلته للمعنيين.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          en: "Is delivering on time enough to call a software project successful?",
          ar: "هل يكفي التسليم في الموعد لاعتبار المشروع البرمجي ناجحًا؟",
        },
        answer: {
          en: "No. Timing is one delivery constraint. Also evaluate whether users can complete the intended tasks, acceptance criteria are met, quality is adequate, and the organization can operate the system.",
          ar: "لا. الموعد أحد قيود التسليم. قيّم أيضًا قدرة المستخدمين على إنجاز المهام المطلوبة وتحقيق معايير القبول وكفاية الجودة وقدرة الشركة على تشغيل النظام.",
        },
      },
      {
        question: {
          en: "What should software acceptance criteria include?",
          ar: "ماذا ينبغي أن تتضمن معايير قبول البرمجيات؟",
        },
        answer: {
          en: "Describe observable user tasks, expected results, important exceptions, data and integration checks, supported roles, and operational constraints so the team can verify completion consistently.",
          ar: "صف مهام المستخدم والنتائج المتوقعة والاستثناءات المهمة وفحوص البيانات والتكامل والأدوار المدعومة وقيود التشغيل بشكل قابل للملاحظة والتحقق المتسق.",
        },
      },
      {
        question: {
          en: "When should a software project be reviewed after launch?",
          ar: "متى ينبغي مراجعة المشروع بعد إطلاقه؟",
        },
        answer: {
          en: "Choose a review point after enough representative use to observe the intended workflow. The timing depends on usage frequency, risk, and the outcome being measured.",
          ar: "اختر موعدًا للمراجعة بعد استخدام ممثل يكفي لملاحظة الإجراء المستهدف. يعتمد التوقيت على تكرار الاستخدام والمخاطر والنتيجة المراد قياسها.",
        },
      },
    ],
  },
  {
    slug: "delivery-platform-case-study-design",
    category: { en: "Project walkthrough", ar: "استعراض المشاريع" },
    title: {
      en: "Inside a Delivery Management Platform: A Walkthrough of the Abo3mo Project",
      ar: "كيف صُممت منصة لإدارة التوصيل؟ استعراض مشروع أبو عمو",
    },
    excerpt: {
      en: "A portfolio walkthrough of how an order, dispatcher, courier, merchant, recipient, and cash-on-delivery record can connect in a delivery operations platform.",
      ar: "استعراض لمشروع ضمن معرض الأعمال يوضح ربط الطلب وغرفة التوزيع والمندوب والمتجر والمستلم وسجل الدفع عند الاستلام في منصة تشغيل للتوصيل.",
    },
    publishedAt: PUBLISHED_AT,
    readingMinutes: 7,
    serviceId: "custom-software",
    relatedProjectId: "abo3mo-delivery",
    sections: [
      {
        heading: {
          en: "The project scope: connect the people and order events",
          ar: "نطاق المشروع: ربط الأشخاص وأحداث الطلب",
        },
        paragraphs: [
          {
            en: "The Abo3mo project in the EHATA portfolio presents a delivery operations platform concept connecting merchant order intake, dispatch, couriers, recipients, tracking, and collection records. This article is a walkthrough of the project scope shown in the portfolio, not a claim about measured results at a named live customer.",
            ar: "يعرض مشروع أبو عمو في معرض أعمال EHATA تصورًا لمنصة تشغيل توصيل تربط استقبال طلبات المتاجر والتوزيع والمناديب والمستلمين والتتبع وسجلات التحصيل. هذا المقال استعراض لنطاق المشروع المعروض، وليس ادعاءً بنتائج مقاسة لدى عميل محدد.",
          },
          {
            en: "The design problem is coordination: different participants need a shared reference for the order and a clear record of who owns the next action. A consistent identifier and event history help teams discuss the same parcel rather than reconciling separate messages.",
            ar: "المشكلة التصميمية هي التنسيق: يحتاج المشاركون إلى مرجع مشترك للطلب وسجل واضح للمسؤول عن الخطوة التالية. يساعد المعرف الموحد وسجل الأحداث الفرق على متابعة الطرد نفسه بدل مطابقة رسائل منفصلة.",
          },
        ],
      },
      {
        heading: {
          en: "How the proposed workflow connects merchant, dispatch, and courier",
          ar: "كيف يربط الإجراء المقترح المتجر والتوزيع والمندوب",
        },
        paragraphs: [
          {
            en: "A merchant submits an order with recipient and delivery details. Dispatch reviews the available work and assigns it to a courier; the courier receives a task and records status changes as the parcel moves. The portfolio scope also describes bulk order intake and customer-facing tracking, with the exact operational rules depending on the eventual deployment.",
            ar: "يرسل المتجر طلبًا يتضمن بيانات المستلم والتوصيل. تراجع غرفة التوزيع الأعمال المتاحة وتُسندها إلى مندوب، ويتلقى المندوب المهمة ويسجل تغيرات الحالة أثناء انتقال الطرد. ويتضمن نطاق المشروع المعروض استقبال الطلبات الجماعية والتتبع الموجه للعميل، مع اعتماد القواعد التشغيلية النهائية على طريقة التنفيذ الفعلية.",
          },
          {
            en: "Each hand-off should record the event, responsible role, and time. Failed delivery, recipient changes, returns, and reassignment need explicit paths so an unresolved parcel remains visible to the team.",
            ar: "ينبغي أن يسجل كل تسليم الحدث والدور المسؤول والوقت. يحتاج فشل التوصيل وتغيير بيانات المستلم والمرتجعات وإعادة الإسناد إلى مسارات واضحة حتى تظل الطرود غير المحسومة مرئية للفريق.",
          },
        ],
      },
      {
        heading: {
          en: "Why collection reconciliation belongs in the workflow",
          ar: "لماذا يجب أن تكون مطابقة التحصيل جزءًا من الإجراء",
        },
        paragraphs: [
          {
            en: "Where cash on delivery applies, the order amount, collected amount, delivery outcome, courier custody, and settlement should be traceable together. A difference needs an owner, supporting evidence, and an approval path; a dashboard number alone cannot resolve a dispute.",
            ar: "عند استخدام الدفع عند الاستلام، ينبغي ربط مبلغ الطلب والمبلغ المحصل ونتيجة التوصيل وعهدة المندوب والتسوية بسجل قابل للتتبع. يحتاج الفرق إلى مسؤول وإثبات ومسار اعتماد؛ فرقم لوحة التحكم وحده لا يحل النزاع.",
          },
        ],
      },
      {
        heading: {
          en: "What to evaluate in a delivery-platform implementation",
          ar: "ما الذي ينبغي تقييمه عند تنفيذ منصة توصيل",
        },
        paragraphs: [
          {
            en: "For a real deployment, validate dispatch rules, map and location behavior, notification delivery, courier device conditions, role access, data retention, accounting reconciliation, and exception handling with representative scenarios. The portfolio description communicates intended scope; customer-specific outcomes should only be added when documented and approved for publication.",
            ar: "عند تنفيذ فعلي، تحقق من قواعد التوزيع والخرائط والموقع ووصول الإشعارات وظروف أجهزة المندوبين والصلاحيات والاحتفاظ بالبيانات والمطابقة المالية والاستثناءات بسيناريوهات ممثلة. يوضح معرض الأعمال النطاق المقصود؛ ولا تضاف نتائج خاصة بعميل إلا إذا وُثقت واعتمد نشرها.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          en: "What does the Abo3mo delivery project demonstrate?",
          ar: "ماذا يوضح مشروع أبو عمو للتوصيل؟",
        },
        answer: {
          en: "The EHATA portfolio describes a delivery operations platform scope connecting merchant orders, dispatch, courier workflows, customer tracking, and cash-on-delivery reconciliation. Refer to the project page for the exact presented details.",
          ar: "يصف معرض أعمال EHATA نطاق منصة تشغيل للتوصيل تربط طلبات المتاجر والتوزيع وإجراءات المندوب وتتبع العميل ومطابقة الدفع عند الاستلام. راجع صفحة المشروع للتفاصيل المعروضة بدقة.",
        },
      },
      {
        question: {
          en: "Does the project walkthrough report measured customer results?",
          ar: "هل يعرض الاستعراض نتائج مقاسة لدى عميل؟",
        },
        answer: {
          en: "No. It explains the project scope represented in the public portfolio and does not claim customer-specific deployment metrics or outcomes.",
          ar: "لا. يشرح نطاق المشروع المعروض في معرض الأعمال العام ولا يدعي أرقام تنفيذ أو نتائج خاصة بعميل.",
        },
      },
      {
        question: {
          en: "What should be tested in a courier platform?",
          ar: "ما الذي ينبغي اختباره في منصة شركة توصيل؟",
        },
        answer: {
          en: "Test order intake, assignment, hand-offs, status updates, delivery exceptions, returns, notifications, access controls, and collection reconciliation using representative workflows.",
          ar: "اختبر استقبال الطلبات وإسنادها والتسليم وتحديث الحالات واستثناءات التوصيل والمرتجعات والإشعارات والصلاحيات ومطابقة التحصيل بسير عمل ممثل.",
        },
      },
    ],
  },
  {
    slug: "dental-clinic-saas-roi-guide",
    category: { en: "Dental Clinic SaaS", ar: "أنظمة عيادات الأسنان" },
    title: {
      en: "How Modern Dental Clinic SaaS Increases Revenue and Eliminates No-Shows",
      ar: "كيف تزيد عيادات ومراكز الأسنان إيراداتها بنسبة 25% مع نظام إدارة ذكي؟",
    },
    excerpt: {
      en: "Discover how interactive odontograms, two-way WhatsApp scheduling, laboratory tracking, and transparent installment billing help dental centers maximize clinic capacity and patient loyalty.",
      ar: "دليل عملي يوضح كيف يساهم مخطط الأسنان التفاعلي وأتمتة مواعيد واتساب وتتبع المعامل والأقساط في زيادة أرباح المراكز الطبية ومنع نزيف التكاليف.",
    },
    publishedAt: "2026-11-11",
    readingMinutes: 7,
    serviceId: "dental-clinic",
    relatedProjectId: "dental-clinic",
    sections: [
      {
        heading: {
          en: "The hidden operational drain in dental practices",
          ar: "النزيف التشغيلي الخفي في مراكز وعيادات الأسنان",
        },
        paragraphs: [
          {
            en: "A dental clinic's profitability is dictated by chair utilization. When a patient misses an unconfirmed appointment, that operating hour is permanently lost along with the clinician's time and fixed clinic overhead. Across Egypt and the GCC, clinics without automated reminders lose between 15% and 25% of their potential monthly revenue to preventable no-shows.",
            ar: "تعتمد ربحية عيادة الأسنان بشكل أساسي على معدل إشغال كراسي الكشف. فعندما يتخلف مريض عن موعد غير مؤكد، تضيع تلك الساعة التشغيلية نهائياً مع أجر الطبيب والتكاليف الثابتة للعيادة. في مصر والخليج العربي، تفقد العيادات التي تعتمد على التأكيدات اليدوية ما بين 15% إلى 25% من إيراداتها الشهرية المحتملة بسبب عدم الحضور (No-Shows).",
          },
          {
            en: "Traditional phone calls place an exhausting burden on reception staff and are frequently unanswered. Automated two-way WhatsApp messaging reaches patients on their primary daily app, allowing them to confirm or reschedule with one tap and keeping chairs fully booked.",
            ar: "الاتصالات الهاتفية التقليدية ترهق فريق الاستقبال وغالباً لا يرد عليها المريض. في المقابل، تضمن أتمتة رسائل واتساب التفاعلية وصول التذكير للمريض على تطبيقه اليومي المفضل، مع إمكانية تأكيد الحضور أو طلب التعديل بضغطة زر واحدة، مما يحافظ على امتلاء جدول الأطباء.",
          },
        ],
        bullets: [
          {
            en: "Two-way automated WhatsApp confirmations scheduled 24 hours and 2 hours before the visit.",
            ar: "رسائل تأكيد تفاعلية عبر واتساب قبل الموعد بـ 24 ساعة وساعتين تلقائياً.",
          },
          {
            en: "Instant cancellation alerts triggering automatic waitlist offers to other patients.",
            ar: "إشعارات إلغاء فورية تتيح شغل الوقت الشاغر تلقائياً من قائمة الانتظار.",
          },
          {
            en: "Real-time calendar status updates visible to reception and attending doctors.",
            ar: "تحديث لحظي لحالة الموعد في جدول العيادة أمام موظف الاستقبال والطبيب المعالج.",
          },
        ],
      },
      {
        heading: {
          en: "Visual 3D Odontograms: precision diagnosis and patient trust",
          ar: "مخطط الأسنان التفاعلي (Odontogram): دقة التشخيص وبناء ثقة المريض",
        },
        paragraphs: [
          {
            en: "Paper treatment cards and vague text notes cause misunderstandings between clinicians and patients. An interactive odontogram provides a visual map of all 32 adult or 20 pediatric teeth, color-coding previous restorations, active caries, endodontic treatments, implants, and proposed procedures.",
            ar: "الملفات الورقية والملاحظات النصية الغامضة تسبب سوء تفاهم مستمر بين الطبيب والمريض. يوفر مخطط الأسنان الرقمي خريطة بصرية تفاعلية لأسنان البالغين (32 سناً) والأطفال (20 سناً)، مع تمييز الحشوات السابقة والتسوس وعلاج الجذور والزراعة برموز لونية دقيقة.",
          },
          {
            en: "When patients can clearly see their tooth conditions and the step-by-step treatment plan on a tablet screen, case acceptance rates rise dramatically. The plan automatically calculates procedure costs and estimates required sessions.",
            ar: "عندما يرى المريض حالة أسنانه وخطة العلاج خطوة بخطوة على شاشة لوحية أمامه، تتضاعف نسبة موافقته على استكمال الخطة العلاجية المقترحة، مع حساب التكاليف وعدد الجلسات آلياً.",
          },
        ],
      },
      {
        heading: {
          en: "Governing dental lab orders and expensive clinical consumables",
          ar: "حوكمة أوامر معامل الأسنان ومخزون المواد الاستهلاكية",
        },
        paragraphs: [
          {
            en: "Dental prosthetics, crowns, aligners, and implants involve significant external laboratory fees. Without digital tracking, clinics risk booking patients before lab deliveries arrive, or paying lab invoices that do not match completed cases.",
            ar: "تمثل تركيبات الأسنان والتيجان ومقومات الأسنان الشفافة وزراعة الأسنان تكلفة خارجية ضخمة تسدد للمعامل. بدون نظام تتبع رقمي، تتعرض العيادة لمواقف حرجة كحضور المريض قبل وصول التركيبة من المعمل، أو سداد فواتير غير مطابقة لما تم تسليمه فعلياً.",
          },
          {
            en: "EHATA Dental Clinic SaaS tracks every laboratory order through its lifecycle: sent, in progress, received, verified, and fitted. Simultaneously, high-value clinical materials (composite, bonding, implants) are deducted upon procedure logging with automated reorder thresholds.",
            ar: "يتتبع نظام إحاطة لعيادات الأسنان كل أمر معمل عبر مراحله: تم الإرسال، قيد التنفيذ، تم الاستلام، تم الفحص، وتم التركيب للمريض. وفي الوقت ذاته، تُخصم المواد الطبية الثمينة من المخزون تلقائياً فور تسجيل الإجراء مع تنبيهات مسبقة عند اقتراب نفاد المخزون.",
          },
        ],
      },
      {
        heading: {
          en: "Transparent doctor revenue splits and installment financial plans",
          ar: "الشفافية في نسب الأطباء وخطط التقسيط العلاجي",
        },
        paragraphs: [
          {
            en: "Multi-specialty dental centers often feature diverse compensation arrangements: fixed percentages, deduct-lab-first formulas, or tier-based incentives. Automating these calculations eliminates month-end accounting friction and motivates specialists.",
            ar: "تضم مراكز الأسنان الكبرى أطباء واستشاريين بتعاقدات ونسب مالية متباينة: نسب ثابتة، نسب بعد خصم تكلفة المعمل، أو حوافز تصاعدية. أتمتة هذه الحسابات تنهي خلافات نهاية الشهر وتمنح كل طبيب لوحة كشف حساب شفافة.",
          },
          {
            en: "For lengthy treatments like orthodontics or multi-unit implants, flexible installment plans let patients pay over monthly intervals, with automated WhatsApp payment links and full compliance with tax e-invoicing.",
            ar: "وفي العلاجات الممتدة مثل تقويم الأسنان والزراعة المتعددة، تتيح خطط السداد بالأقساط للمريض الدفع بسهولة مع روابط سداد إلكترونية عبر واتساب وفواتير ضريبية معتمدة.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          en: "How does the system reduce patient no-shows?",
          ar: "كيف يخفض النظام معدل تخلف المرضى عن الحضور؟",
        },
        answer: {
          en: "By sending automated two-way WhatsApp confirmation messages with quick-action buttons. Patients easily confirm or request a new slot, allowing reception to fill canceled slots from a smart waitlist.",
          ar: "عبر إرسال رسائل واتساب تفاعلية آلية تتيح للمريض تأكيد الحضور أو طلب موعد بديل بضغطة واحدة، مما يمكن الاستقبال من إعادة إشغال الأوقات الشاغرة فوراً.",
        },
      },
      {
        question: {
          en: "Can dentists access patient charts on iPads or tablets?",
          ar: "هل يمكن لأطباء الأسنان فتح المخطط وملف المريض على أجهزة iPad؟",
        },
        answer: {
          en: "Yes. The platform is fully responsive and touchscreen-optimized, allowing clinicians to click teeth, draw annotations, and review X-ray attachments chairside.",
          ar: "نعم. النظام مصمم بالكامل ليعمل بسلاسة على شاشات اللمس والأجهزة اللوحية بجوار كرسي الكشف لتسجيل الإجراءات واستعراض صور الأشعة بسهولة.",
        },
      },
    ],
  },
  {
    slug: "ecommerce-scaling-and-operations-guide",
    category: { en: "E-Commerce", ar: "التجارة الإلكترونية" },
    title: {
      en: "Building Scalable E-commerce Platforms in Egypt & the GCC: Payments, Logistics, and High Conversion",
      ar: "بناء وتطوير منصات التجارة الإلكترونية في مصر والخليج: الدفع، الشحن، ومعدلات التحويل",
    },
    excerpt: {
      en: "A technical guide to sub-second storefronts, localized payment gateways (Paymob, Tamara, Tabby), multi-branch inventory sync, and automated courier routing.",
      ar: "دليل تقني لبناء متاجر فائقة السرعة، والربط مع بوابات الدفع والتقسيط، ومزامنة المخزون بين الفروع وأتمتة التوزيع اللوجستي.",
    },
    publishedAt: "2026-11-11",
    readingMinutes: 8,
    serviceId: "ecommerce",
    relatedProjectId: "abo3mo-delivery",
    sections: [
      {
        heading: {
          en: "Sub-second page speeds: the foundation of mobile conversion",
          ar: "سرعة التحميل اللحظية: الأساس لزيادة مبيعات الموبايل",
        },
        paragraphs: [
          {
            en: "Over 80% of e-commerce traffic in Egypt and the Gulf originates on mobile devices. Heavy monolithic templates and unoptimized plugins create 4-to-6 second load delays, resulting in over 50% bounce rates before the product even renders.",
            ar: "أكثر من 80% من زيارات المتاجر الإلكترونية في مصر ودول الخليج تأتي عبر الهواتف الذكية. الاعتماد على القوالب الجاهزة الثقيلة والإضافات المكدسة يرفع زمن التحميل إلى 4-6 ثوانٍ، مما يؤدي إلى ارتداد ومغادرة أكثر من 50% من الزوار قبل رؤية تفاصيل المنتج.",
          },
          {
            en: "By adopting a headless architecture built with Next.js and global edge caching, EHATA storefronts render product catalogs in under 600 milliseconds. Instant navigation directly correlates with higher add-to-cart velocity and maximized ROAS on paid social campaigns.",
            ar: "من خلال معمارية Headless الحديثة المبنية بـ Next.js مع التخزين السحابي الفوري على أطراف الشبكة (Edge CDN)، تحقق متاجر إحاطة زمناً قياسياً يقل عن 600 مللي ثانية، مما ينعكس مباشرة في رفع معدل إتمام الشراء وتعظيم العائد من الحملات الإعلانية الممولة.",
          },
        ],
      },
      {
        heading: {
          en: "Localized payment infrastructure: Paymob, Mada, and Buy-Now-Pay-Later",
          ar: "البنية التحتية للمدفوعات المحلية: Paymob ومدى والشراء الآن والدفع لاحقاً (BNPL)",
        },
        paragraphs: [
          {
            en: "Checkout friction is the number one cause of abandoned carts. Shoppers in Saudi Arabia demand Mada and Apple Pay; Egyptian buyers rely heavily on Mobile Wallets (Vodafone Cash, Instapay) and Cash-on-Delivery alongside cards; UAE consumers expect split-installment options via Tamara and Tabby.",
            ar: "صعوبة وتعقيد شاشة الدفع هي السبب الأول لإلغاء عمليات الشراء. فالمتسوق السعودي يفضل مدى و Apple Pay، والمتسوق المصري يعتمد بشكل متزايد على المحافظ الإلكترونية (فودافون كاش، إنستاباي) والدفع عند الاستلام، بينما يشهد السوق الإماراتي طلباً هائلاً على التقسيط عبر تمارا وتابي.",
          },
          {
            en: "Our commerce platforms unify all relevant local payment options in a streamlined one-page checkout, automatically handling payment retries, webhook reconciliations, and tax e-invoices.",
            ar: "توفر منصاتنا كافة بوابات الدفع المحلية في صفحة دفع واحدة ومختصرة بنقرة واحدة، مع معالجة ذكية لأي محاولات دفع غير مكتملة، وإصدار الفواتير الضريبية المعتمدة تلقائياً.",
          },
        ],
      },
      {
        heading: {
          en: "Multi-branch inventory sync: preventing overselling and lost sales",
          ar: "مزامنة المخزون بين الفروع والمستودعات لمنع البيع الوهمي",
        },
        paragraphs: [
          {
            en: "Retailers operating physical branches alongside an online store frequently suffer from inventory mismatch. A product sold in a showroom remains visible online, resulting in frustrated customers and costly refunds.",
            ar: "تعاني الشركات التي تمتلك فروعاً فعلية ومتجراً إلكترونياً من تباين أرصدة المخزون. فبيع صنف في الفرع قد لا يُخصم فورياً من المتجر، مما يؤدي لبيع منتجات غير متوفرة وإحباط العملاء وتكاليف استرداد مالي.",
          },
          {
            en: "EHATA platforms synchronize stock across all retail points-of-sale and fulfillment hubs in real time. Intelligent routing automatically fulfills the order from the warehouse or branch closest to the buyer's delivery address.",
            ar: "تربط منصات إحاطة أرصدة المخزون بين كافة الفروع ونقاط البيع السحابية لحظة بلحظة، مع توجيه ذكي للشحنة لتخرج تلقائياً من أقرب فرع أو مستودع لعنوان العميل لتقليل زمن وتكلفة الشحن.",
          },
        ],
      },
      {
        heading: {
          en: "Automated courier dispatch and real-time shipment map tracking",
          ar: "التوزيع اللوجستي الآلي وتتبع الشحنات عبر الخرائط",
        },
        paragraphs: [
          {
            en: "Shipping logistics can consume dozens of staff hours when manifests and air waybills are generated manually. Automated courier integration transmits ready orders directly to shipping partners, prints standardized barcodes, and tracks transit stages.",
            ar: "تستهلك العمليات اللوجستية مئات الساعات عند إصدار بوالص الشحن وتنسيق مناديب التوصيل يدوياً. يوفر نظامنا ربطاً آلياً مع كبرى شركات الشحن لإصدار البوالص وتوزيع الطرود وتتبع مسارها حتى باب العميل.",
          },
          {
            en: "Customers receive instant WhatsApp notifications with live tracking links, dramatically reducing 'Where is my order?' support inquiries and driving repeat purchases.",
            ar: "يتلقى العميل إشعارات واتساب فورية برابط تتبع حي، مما يقلل استفسارات خدمة العملاء بنسبة 60% ويعزز ثقة المشتري وإعادة الشراء مستقبلاً.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          en: "How quickly can an enterprise store handle high-traffic flash sales?",
          ar: "كيف يتحمل المتجر طفرات الزيارات الضخمة في مواسم العروض؟",
        },
        answer: {
          en: "Thanks to headless edge architecture and isolated API microservices, our platforms scale horizontally to support tens of thousands of concurrent checkouts without lag.",
          ar: "بفضل المعمارية السحابية المنفصلة (Headless) والتوسع الأفقي التلقائي للخوادم، يتحمل المتجر عشرات الآلاف من المتسوقين المتزامنين دون أي بطء أو توقف.",
        },
      },
      {
        question: {
          en: "Can the platform connect to our existing ERP system?",
          ar: "هل يمكن ربط المتجر الإلكتروني بنظام الـ ERP الحالي لدينا؟",
        },
        answer: {
          en: "Yes. Bi-directional APIs keep product catalogs, pricing, customer orders, and accounting entries fully synchronized with your ERP.",
          ar: "نعم. توفر المنصة واجهات برمجية ثنائية الاتجاه لتحديث المنتجات والأسعار والطلبات والقيود المحاسبية مع نظام الـ ERP الخاص بشركتك تلقائياً.",
        },
      },
    ],
  },
  {
    slug: "elearning-lms-platform-architecture",
    category: { en: "E-Learning", ar: "التعليم الإلكتروني" },
    title: {
      en: "Architecting Enterprise E-learning Platforms: Video DRM Protection, Interactive Classrooms, and Certification",
      ar: "معمارية منصات التعليم الإلكتروني (LMS): حماية المحتوى، الفصول التفاعلية، والاختبارات الذكية",
    },
    excerpt: {
      en: "How modern academies and corporate training centers build secure, scalable LMS platforms with DRM encryption, live video classrooms, and automated exam grading.",
      ar: "كيف تبني الأكاديميات والشركات منصات تعليمية متقدمة مع تشفير الفيديو ضد القرصنة، وإدارة الفصول الحية، وتصحيح الاختبارات الآلي.",
    },
    publishedAt: "2026-11-11",
    readingMinutes: 7,
    serviceId: "courses-training",
    sections: [
      {
        heading: {
          en: "Protecting educational IP: DRM video encryption and dynamic watermarking",
          ar: "حماية حقوق المحتوى التعليمي: تشفير DRM والعلامات المائية الديناميكية",
        },
        paragraphs: [
          {
            en: "For educational businesses and academy creators, content piracy is an existential threat. Standard video players and unencrypted streams are easily captured using browser extensions or screen recorders, undermining the institution's business model.",
            ar: "تمثل قرصنة وتسريب الفيديوهات التعليمية التهديد الأكبر للأكاديميات والمنصات التعليمية. فالمشغلات العادية والروابط المباشرة يسهل تحميلها ببرامج التنزيل وتسجيل الشاشة، مما يهدر استثمارات المنشأة وجهود المحاضرين.",
          },
          {
            en: "EHATA engineers enterprise LMS platforms with Widevine/FairPlay DRM encryption, multi-bitrate HLS streaming, and dynamic moving watermarks displaying the student's IP, phone number, and ID across the screen, making unauthorized sharing completely unviable.",
            ar: "تبني إحاطة منصات تعليمية متقدمة مزودة بتشفير DRM عالي الأمان (Widevine و FairPlay) وبث HLS المتكيف، مع علامات مائية متحركة شفافة تظهر رقم هاتف الطالب وبريده وبياناته على الفيديو لمنع أي تصوير خارجي للشاشة.",
          },
        ],
      },
      {
        heading: {
          en: "Live cohort scheduling, virtual classrooms, and interactive engagement",
          ar: "إدارة الدفعات التعليمية، الفصول التفاعلية، ومتابعة الطلاب",
        },
        paragraphs: [
          {
            en: "Modern online education requires more than passive video viewing. Students succeed when platforms offer structured cohort pacing, live webinar integrations (Zoom, Teams, native WebRTC), and discussion threads directly linked to lesson timestamps.",
            ar: "لم يعد التعليم الرقمي مجرد مشاهدة فيديوهات مسجلة، بل يتطلب مسارات تفاعلية متكاملة تضم الفصول الافتراضية المباشرة (عبر Zoom أو WebRTC)، ومساحات للنقاش وأسئلة الطلاب مرتبطة بلحظات محددة في الدرس.",
          },
          {
            en: "Automated student progress tracking notifies instructors of inactive learners, enabling targeted interventions that raise course completion rates above 85%.",
            ar: "تتيح لوحات المتابعة للمعلمين رصد مستوى تقدم كل طالب، مع إرسال تنبيهات تلقائية للطلاب المتعثرين مما يرفع نسب إتمام المسارات التعليمية لأكثر من 85%.",
          },
        ],
      },
      {
        heading: {
          en: "Automated examination engines, question banks, and verified certificates",
          ar: "محركات الاختبارات الذكية، بنوك الأسئلة، والشهادات الرقمية المعتمدة",
        },
        paragraphs: [
          {
            en: "Rigorous assessment is the hallmark of accredited training. Our platforms feature multi-format question banks (multiple choice, code evaluation, file submissions), randomized question pools, time-bound testing sessions, and anti-tab-switching controls.",
            ar: "التقييم المنضبط هو ركيزة التدريب المعتمد. توفر منصاتنا بنوك أسئلة ذكية متنوعة (اختيار من متعدد، كتابة مقالية، تسليم مشاريع برمجية)، مع اختيار عشوائي للأسئلة لكل طالب وتحديد زمن الاختبار ومراقبة تبديل الشاشات.",
          },
          {
            en: "Upon passing predefined passing grades, students instantly receive tamper-proof, QR-verifiable digital certificates that can be shared directly to LinkedIn and validated by prospective employers.",
            ar: "وفور اجتياز المتدرب لدرجة النجاح، يُصدر النظام شهادة إتمام رقمية مشفرة برمز QR للتحقق السريع منها، يمكن مشاركتها بسهولة على لينكد إن والتحقق من صحتها من أي جهة توظيف.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          en: "Can students download protected lesson videos?",
          ar: "هل يستطيع الطلاب تحميل الفيديوهات المحمية؟",
        },
        answer: {
          en: "No. DRM encryption prevents standard video downloading tools and screen grabbers from intercepting video stream keys.",
          ar: "لا. يمنع تشفير DRM وأدوات الحماية الحديثة برامج التحميل وتطبيقات تسجيل الشاشة من التقاط مفاتيح البث أو تحميل الملفات.",
        },
      },
      {
        question: {
          en: "Does the LMS support corporate training portals for company teams?",
          ar: "هل تدعم المنصة بوابات تدريب مخصصة لفرق الشركات؟",
        },
        answer: {
          en: "Yes. Multi-organization support allows companies to have private branded sub-portals for their internal employees with dedicated reporting for HR managers.",
          ar: "نعم. يدعم النظام بوابات فرعية خاصة بالشركات تتيح لمدراء الموارد البشرية متابعة تدريب موظفي كل شركة على حدة وبلوحات تقارير مخصصة.",
        },
      },
    ],
  },
];
