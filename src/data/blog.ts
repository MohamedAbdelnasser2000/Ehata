import type { LocalizedText } from "@/lib/i18n";
import { ADDITIONAL_BLOG_POSTS } from "@/data/blog-additional";
import { NEXT_TOPIC_BLOG_POSTS } from "@/data/blog-next-topics";

export interface BlogSection {
  heading: LocalizedText;
  paragraphs: LocalizedText[];
  bullets?: LocalizedText[];
  comparison?: {
    headers: LocalizedText[];
    rows: LocalizedText[][];
  };
}

export interface BlogFaq {
  question: LocalizedText;
  answer: LocalizedText;
}

export interface BlogSource {
  label: LocalizedText;
  url: string;
}

export interface BlogPost {
  slug: string;
  category: LocalizedText;
  title: LocalizedText;
  excerpt: LocalizedText;
  publishedAt: string;
  readingMinutes: number;
  serviceId: string;
  sections: BlogSection[];
  faqs?: BlogFaq[];
  sources?: BlogSource[];
  relatedProjectId?: string;
}

const FOUNDATIONAL_BLOG_POSTS: BlogPost[] = [
  {
    slug: "choosing-erp-for-your-business",
    category: { en: "Business systems", ar: "أنظمة الأعمال" },
    title: {
      en: "How to Choose an ERP System That Fits the Way Your Business Works",
      ar: "كيف تختار نظام ERP يناسب طريقة عمل شركتك؟",
    },
    excerpt: {
      en: "A practical guide to mapping workflows, prioritizing modules, planning integrations, and evaluating an ERP before you commit.",
      ar: "دليل عملي لرسم سير العمل، وترتيب أولويات الوحدات، والتخطيط للتكاملات، وتقييم نظام ERP قبل الالتزام به.",
    },
    publishedAt: "2026-10-23",
    readingMinutes: 7,
    serviceId: "erp",
    sections: [
      {
        heading: {
          en: "Start with the work, not the feature list",
          ar: "ابدأ بطريقة العمل، لا بقائمة المميزات",
        },
        paragraphs: [
          {
            en: "An ERP decision affects how teams record work, hand it to one another, and understand what is happening across the business. Before comparing products, write down a normal working day: who receives an order, who approves it, where stock is checked, and how the final transaction is recorded.",
            ar: "اختيار نظام ERP يؤثر في طريقة تسجيل الفرق للعمل وتسليمه لبعضها ومتابعة ما يحدث داخل الشركة. قبل مقارنة الأنظمة، اكتب خطوات يوم عمل عادي: من يستقبل الطلب؟ من يوافق عليه؟ أين يُراجع المخزون؟ وكيف تُسجّل المعاملة في النهاية؟",
          },
          {
            en: "Include exceptions as well as the happy path. Returns, partial deliveries, cancellations, approvals, and corrections often reveal requirements that a generic feature checklist misses.",
            ar: "سجّل الحالات الاستثنائية إلى جانب المسار المعتاد. فالمرتجعات والتسليم الجزئي والإلغاء والموافقات والتصحيحات تكشف احتياجات قد لا تظهر في قائمة مميزات عامة.",
          },
        ],
        bullets: [
          {
            en: "List the people and roles involved in each workflow.",
            ar: "حدّد الأشخاص والأدوار المشاركة في كل إجراء.",
          },
          {
            en: "Record the information entered, checked, approved, and reported.",
            ar: "سجّل البيانات التي تُدخل وتُراجع وتُعتمد وتظهر في التقارير.",
          },
          {
            en: "Mark repeated work, hand-off delays, and spreadsheet workarounds.",
            ar: "علّم على تكرار العمل وتأخر التسليم بين الفرق والحلول اليدوية بالجداول.",
          },
        ],
      },
      {
        heading: {
          en: "Prioritize modules by business impact",
          ar: "رتّب وحدات النظام حسب أثرها على العمل",
        },
        paragraphs: [
          {
            en: "A company may eventually need finance, purchasing, inventory, sales, and human resources in one system. That does not mean every module belongs in the first release. Choose the workflows that need shared, reliable information most urgently, then define what a useful first phase must deliver.",
            ar: "قد تحتاج الشركة مع الوقت إلى المالية والمشتريات والمخزون والمبيعات والموارد البشرية في نظام واحد. لكن ذلك لا يعني ضرورة إطلاق كل الوحدات من البداية. ابدأ بالعمليات الأكثر حاجة إلى بيانات موحدة وموثوقة، وحدّد بوضوح ما الذي يجب أن تنجزه المرحلة الأولى.",
          },
          {
            en: "For each proposed module, identify its owner, the decisions it should support, and the records it depends on. This helps prevent disconnected screens that reproduce the same manual work in a new interface.",
            ar: "لكل وحدة مقترحة، حدّد المسؤول عنها والقرارات التي ستدعمها والسجلات التي تعتمد عليها. يساعد ذلك على تجنب إنشاء شاشات منفصلة تعيد إنتاج العمل اليدوي نفسه بواجهة جديدة.",
          },
        ],
        bullets: [
          {
            en: "Separate launch requirements from later improvements.",
            ar: "افصل متطلبات الإطلاق عن التحسينات اللاحقة.",
          },
          {
            en: "Agree on who owns shared records such as products and customers.",
            ar: "حدّد الجهة المسؤولة عن السجلات المشتركة كالمنتجات والعملاء.",
          },
          {
            en: "Define reports in terms of decisions, not just charts.",
            ar: "عرّف التقارير وفق القرارات المطلوب دعمها، لا شكل الرسوم فقط.",
          },
        ],
      },
      {
        heading: {
          en: "Check integrations and data migration early",
          ar: "افحص التكاملات وترحيل البيانات مبكرًا",
        },
        paragraphs: [
          {
            en: "List the systems the ERP must exchange information with: accounting tools, online stores, payment providers, shipping services, or existing databases. For each connection, agree which system is authoritative, what data moves, how often it moves, and what happens when a transfer fails.",
            ar: "اكتب الأنظمة التي يجب أن يتبادل ERP البيانات معها، مثل أدوات المحاسبة والمتاجر الإلكترونية ومقدمي الدفع وشركات الشحن وقواعد البيانات الحالية. ولكل تكامل، اتفق على النظام المرجعي والبيانات المتبادلة وتكرار النقل والتصرف عند فشل العملية.",
          },
          {
            en: "Treat migration as a business task, not a final technical step. Identify duplicate, incomplete, and outdated records; decide what should be cleaned, archived, or carried forward; then test representative data before the cutover.",
            ar: "تعامل مع ترحيل البيانات باعتباره مهمة تشغيلية لا خطوة تقنية أخيرة. حدّد السجلات المكررة أو الناقصة أو القديمة، وقرّر ما سيُنظف أو يُؤرشف أو يُنقل، ثم اختبر عينة ممثلة قبل التحويل النهائي.",
          },
        ],
      },
      {
        heading: {
          en: "Evaluate the system with real scenarios",
          ar: "قيّم النظام باستخدام سيناريوهات حقيقية",
        },
        paragraphs: [
          {
            en: "A polished demonstration is not a substitute for testing your own process. Ask the implementation team to walk through representative scenarios using realistic roles and sample records, including at least one exception such as a return or a stock correction.",
            ar: "العرض التوضيحي الجذاب لا يغني عن اختبار إجراءاتكم الفعلية. اطلب من فريق التنفيذ المرور بسيناريوهات ممثلة باستخدام أدوار وسجلات قريبة من الواقع، مع حالة استثنائية واحدة على الأقل مثل مرتجع أو تصحيح رصيد.",
          },
          {
            en: "Before approval, agree on acceptance criteria: which records must reconcile, what each role can access, how reports are checked, and who signs off each phase. A clear handover and training plan matter as much as the software itself.",
            ar: "قبل الاعتماد، اتفقوا على معايير القبول: السجلات التي يجب أن تتطابق، وما يستطيع كل دور الوصول إليه، وكيف تُراجع التقارير، ومن يعتمد كل مرحلة. خطة التسليم والتدريب مهمة بقدر أهمية النظام نفسه.",
          },
        ],
        bullets: [
          {
            en: "Test a full transaction from entry through approval and reporting.",
            ar: "اختبر معاملة كاملة من الإدخال حتى الاعتماد والتقرير.",
          },
          {
            en: "Check permissions with the actual roles that will use the system.",
            ar: "اختبر الصلاحيات وفق الأدوار الفعلية التي ستستخدم النظام.",
          },
          {
            en: "Write down ownership, training, support, and change-control steps.",
            ar: "وثّق المسؤوليات والتدريب والدعم وآلية إدارة التغييرات.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          en: "What should a company define before choosing an ERP?",
          ar: "ما الذي ينبغي للشركة تحديده قبل اختيار ERP؟",
        },
        answer: {
          en: "Map the workflows, roles, data, approvals, integrations, exceptions, reports, and launch priorities the system must support, then test them with realistic scenarios.",
          ar: "ارسم الإجراءات والأدوار والبيانات والموافقات والتكاملات والاستثناءات والتقارير وأولويات الإطلاق التي يجب أن يدعمها النظام، ثم اختبرها بسيناريوهات واقعية.",
        },
      },
      {
        question: {
          en: "Should we implement every ERP module at once?",
          ar: "هل ينبغي تنفيذ كل وحدات ERP دفعة واحدة؟",
        },
        answer: {
          en: "Not necessarily. Prioritize connected workflows with the clearest business need and phase later modules when dependencies, ownership, and acceptance criteria are understood.",
          ar: "ليس بالضرورة. أعطِ الأولوية للإجراءات المترابطة ذات الحاجة الواضحة، ونفّذ الوحدات اللاحقة على مراحل بعد فهم الاعتماديات والمسؤوليات ومعايير القبول.",
        },
      },
      {
        question: {
          en: "How should an ERP system be evaluated?",
          ar: "كيف ينبغي تقييم نظام ERP؟",
        },
        answer: {
          en: "Test your end-to-end work using representative roles and data, including exceptions, integrations, permissions, migration, reporting, and handover—not only a standard product demo.",
          ar: "اختبر إجراءاتك من البداية للنهاية بأدوار وبيانات ممثلة، بما يشمل الاستثناءات والتكاملات والصلاحيات والترحيل والتقارير والتسليم، لا العرض القياسي فقط.",
        },
      },
    ],
  },
  {
    slug: "warehouse-and-delivery-operations",
    category: { en: "Inventory & logistics", ar: "المخازن واللوجستيات" },
    title: {
      en: "Connecting Warehouse Operations to Delivery Without Losing Track of Orders",
      ar: "كيف تربط عمليات المخزن بالتوصيل دون فقدان متابعة الطلبات؟",
    },
    excerpt: {
      en: "A workflow-first look at stock accuracy, order hand-offs, courier updates, returns, and cash collection across warehouse and delivery teams.",
      ar: "نظرة عملية تبدأ من سير العمل لضبط المخزون وتسليم الطلبات وتحديثات المندوبين والمرتجعات والتحصيل بين المخزن وفريق التوصيل.",
    },
    publishedAt: "2026-10-23",
    readingMinutes: 6,
    serviceId: "custom-software",
    sections: [
      {
        heading: {
          en: "Give every order a shared, current status",
          ar: "امنح كل طلب حالة موحدة ومحدثة",
        },
        paragraphs: [
          {
            en: "When warehouse staff, dispatchers, and couriers each maintain a separate view, a simple question—has this order been packed, handed over, or delivered?—can require calls and message searches. A shared order record makes the current step visible to the people responsible for the next one.",
            ar: "عندما يحتفظ موظفو المخزن والموزعون والمناديب بمتابعة منفصلة، قد يحتاج سؤال بسيط مثل: هل جُهز الطلب أو سُلّم للمندوب أو وصل للعميل؟ إلى اتصالات وبحث في الرسائل. السجل الموحد يجعل الخطوة الحالية واضحة للمسؤول عن الخطوة التالية.",
          },
          {
            en: "Use a small, agreed set of statuses that describes real events. For example: received, picking, packed, assigned, out for delivery, delivered, and exception. Define who can move an order forward and what evidence is required for important transitions.",
            ar: "استخدم مجموعة حالات مختصرة ومتفقًا عليها تصف أحداثًا حقيقية، مثل: مستلم، جارٍ التجهيز، جاهز، أُسند لمندوب، خرج للتوصيل، تم التسليم، أو توجد مشكلة. حدّد من يغيّر الحالة وما الإثبات المطلوب عند الانتقالات المهمة.",
          },
        ],
      },
      {
        heading: {
          en: "Make stock changes traceable",
          ar: "اجعل تغييرات المخزون قابلة للمراجعة",
        },
        paragraphs: [
          {
            en: "Stock accuracy depends on recording the events that change quantity—not only showing a number on a screen. Receiving, picking, packing, returns, damage, and manual adjustments should have a reason, a time, and an accountable role.",
            ar: "دقة المخزون تعتمد على تسجيل الأحداث التي تغيّر الكمية، لا عرض رقم على الشاشة فقط. يجب أن يكون للاستلام والتجهيز والتعبئة والمرتجعات والتالف والتسويات سبب ووقت ودور مسؤول.",
          },
          {
            en: "If an order is split across locations or delivered in parts, represent those quantities explicitly. That helps teams distinguish available stock from reserved, in-transit, or returned items and investigate mismatches using a history of changes.",
            ar: "إذا قُسّم الطلب بين مواقع متعددة أو سُلّم على أجزاء، سجّل الكميات بوضوح. يساعد ذلك الفرق على التمييز بين المتاح والمحجوز والمنقول والمرتجع، ومراجعة الفروقات من سجل التغييرات.",
          },
        ],
        bullets: [
          {
            en: "Record adjustments with a reason and the person responsible.",
            ar: "سجّل التسويات مع سببها والموظف المسؤول.",
          },
          {
            en: "Separate reserved, available, damaged, and returned quantities.",
            ar: "افصل الكميات المتاحة والمحجوزة والتالفة والمرتجعة.",
          },
          {
            en: "Use scans or a second check at hand-off points where practical.",
            ar: "استخدم المسح أو مراجعة ثانية عند نقاط التسليم متى كان ذلك عمليًا.",
          },
        ],
      },
      {
        heading: {
          en: "Design hand-offs for exceptions, not just the ideal route",
          ar: "صمّم التسليم للحالات الاستثنائية أيضًا",
        },
        paragraphs: [
          {
            en: "The warehouse-to-courier hand-off is a control point. The system should make it possible to confirm which parcels changed custody, who accepted them, and when. The same principle applies when a delivery fails, a customer changes the time, or a parcel returns to the warehouse.",
            ar: "يمثل تسليم الطلب من المخزن إلى المندوب نقطة رقابية مهمة. ينبغي أن يوضح النظام الطرود التي تغيرت عهدتها، ومن استلمها، ومتى. وينطبق الأمر نفسه عند تعذر التسليم أو تغيير الموعد أو عودة الطرد للمخزن.",
          },
          {
            en: "Agree on how exceptions are categorized and assigned. A reason such as an incorrect address should lead to a clear next action, while an unresolved exception should remain visible rather than disappearing into a free-text note.",
            ar: "اتفقوا على تصنيف الاستثناءات وإسنادها. فسبب مثل عنوان غير صحيح يجب أن يقود إلى إجراء واضح، بينما تظل المشكلة غير المحلولة ظاهرة بدل أن تختفي في ملاحظة نصية.",
          },
        ],
      },
      {
        heading: {
          en: "Reconcile collections and measure useful outcomes",
          ar: "طابق التحصيلات وقِس النتائج المفيدة",
        },
        paragraphs: [
          {
            en: "For cash-on-delivery work, connect the amount due, amount collected, delivery outcome, and settlement record. Differences need a review path and an audit trail; a dashboard alone cannot resolve unclear ownership or missing evidence.",
            ar: "في طلبات الدفع عند الاستلام، اربط المبلغ المطلوب بما جُمع ونتيجة التسليم وسجل التسوية. تحتاج الفروقات إلى مسار مراجعة وسجل تدقيق؛ لوحة المؤشرات وحدها لا تحل غموض المسؤولية أو نقص الإثبات.",
          },
          {
            en: "Choose operational measures that help someone act: orders awaiting picking, parcels with unresolved exceptions, stock adjustments by reason, and collections awaiting reconciliation. Define each measure so teams calculate it consistently.",
            ar: "اختر مؤشرات تدفع إلى إجراء واضح، مثل الطلبات المنتظرة للتجهيز والطرود ذات المشكلات المفتوحة وتسويات المخزون حسب السبب والتحصيلات غير المطابقة. عرّف كل مؤشر كي تحسبه الفرق بالطريقة نفسها.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          en: "How do warehouse and delivery teams keep order status consistent?",
          ar: "كيف يحافظ المخزن وفريق التوصيل على اتساق حالة الطلب؟",
        },
        answer: {
          en: "Agree on shared status definitions, assign an owner to each transition, and record the hand-off, delivery outcome, exception, and return as traceable events.",
          ar: "اتفقوا على تعريفات موحدة للحالات، وحددوا مسؤولًا عن كل انتقال، وسجلوا التسليم ونتيجة التوصيل والاستثناء والمرتجع كأحداث قابلة للتتبع.",
        },
      },
      {
        question: {
          en: "What should be tracked when a parcel is handed to a courier?",
          ar: "ما الذي ينبغي تسجيله عند تسليم الطرد للمندوب؟",
        },
        answer: {
          en: "Record the parcel reference, custody change, time, parties involved, and any process-specific quantity or condition needed to investigate later discrepancies.",
          ar: "سجّل مرجع الطرد وانتقال العهدة والوقت والأطراف وأي كمية أو حالة تتطلبها إجراءاتك للتحقق من الفروقات لاحقًا.",
        },
      },
      {
        question: {
          en: "How can cash-on-delivery collections be reconciled?",
          ar: "كيف يمكن مطابقة تحصيلات الدفع عند الاستلام؟",
        },
        answer: {
          en: "Link the expected amount, collected amount, delivery result, and settlement record; assign a reviewer and keep an auditable correction process.",
          ar: "اربط المبلغ المتوقع بالمبلغ المحصل ونتيجة التوصيل وسجل التسوية، وعيّن مراجعًا واحتفظ بإجراءات تصحيح قابلة للتدقيق.",
        },
      },
    ],
  },
  {
    slug: "flutter-mobile-app-business-checklist",
    category: { en: "Mobile products", ar: "تطبيقات الموبايل" },
    title: {
      en: "Planning a Flutter App for Your Business: A Practical Checklist",
      ar: "التخطيط لتطبيق Flutter لشركتك: قائمة عملية قبل البدء",
    },
    excerpt: {
      en: "What to decide before development: user journeys, platform needs, APIs, offline behavior, security, testing, and store release.",
      ar: "ما الذي ينبغي حسمه قبل التطوير: رحلة المستخدم واحتياجات المنصات وواجهات الربط والعمل دون اتصال والأمان والاختبار والنشر.",
    },
    publishedAt: "2026-10-23",
    readingMinutes: 6,
    serviceId: "web-saas",
    sections: [
      {
        heading: {
          en: "Define the job the app must do",
          ar: "حدّد المهمة التي يجب أن ينجزها التطبيق",
        },
        paragraphs: [
          {
            en: "Begin with the people who will use the app and the task they need to complete. Map the journey from opening the app to finishing that task, including sign-in, empty states, errors, and what happens when the user leaves and returns.",
            ar: "ابدأ بالأشخاص الذين سيستخدمون التطبيق والمهمة التي يريدون إنجازها. ارسم الرحلة من فتح التطبيق حتى إتمام المهمة، بما يشمل تسجيل الدخول والحالات الفارغة والأخطاء وما يحدث عند مغادرة التطبيق والعودة إليه.",
          },
          {
            en: "Separate the must-have first release from later ideas. A narrow, testable scope makes it easier to agree on what success means and avoids building screens before the underlying workflow is clear.",
            ar: "افصل ما يلزم للإصدار الأول عن الأفكار المستقبلية. النطاق المحدد والقابل للاختبار يسهل الاتفاق على معنى النجاح ويمنع بناء شاشات قبل فهم سير العمل الأساسي.",
          },
        ],
      },
      {
        heading: {
          en: "Check whether cross-platform fits the requirements",
          ar: "تحقق من ملاءمة التطوير متعدد المنصات",
        },
        paragraphs: [
          {
            en: "Flutter can support an iOS and Android app from a shared codebase. That can be a practical fit when the product needs a consistent experience across both platforms and its required device capabilities are supported by the chosen packages and integrations.",
            ar: "يتيح Flutter بناء تطبيقَي iOS وAndroid انطلاقًا من قاعدة كود مشتركة. وقد يكون مناسبًا عندما تحتاج إلى تجربة متسقة على المنصتين وتكون إمكانات الجهاز المطلوبة مدعومة بالحزم والتكاملات المختارة.",
          },
          {
            en: "Validate platform-specific needs before choosing a stack. Specialized hardware, background processing, accessibility behavior, or deep operating-system integration can affect the design and may require native code or a different approach for part of the app.",
            ar: "تحقق من احتياجات كل منصة قبل اختيار التقنية. فالأجهزة المتخصصة والعمل في الخلفية وسلوك إتاحة الوصول والتكامل العميق مع نظام التشغيل قد تؤثر في التصميم، وقد تتطلب كودًا أصليًا أو أسلوبًا مختلفًا لبعض أجزاء التطبيق.",
          },
        ],
      },
      {
        heading: {
          en: "Plan APIs, connectivity, and data ownership",
          ar: "خطّط لواجهات الربط والاتصال وملكية البيانات",
        },
        paragraphs: [
          {
            en: "List the data the app reads and changes, which system owns each record, and what users should see when the network is slow or unavailable. If users must continue a task offline, specify which actions can be queued and how conflicts are resolved after reconnection.",
            ar: "اكتب البيانات التي يقرأها التطبيق أو يغيرها، والنظام المسؤول عن كل سجل، وما الذي يراه المستخدم عند بطء الشبكة أو انقطاعها. إذا كان مطلوبًا متابعة العمل دون اتصال، فحدّد الإجراءات التي يمكن تأجيلها وطريقة حل التعارضات بعد عودة الاتصال.",
          },
          {
            en: "Define authentication, authorization, and sensitive-data handling with the API team. Do not treat a mobile screen as a security boundary: permissions and important business rules must also be enforced by the system that owns the data.",
            ar: "حدّد المصادقة والصلاحيات والتعامل مع البيانات الحساسة مع فريق واجهات الربط. لا تعتبر شاشة الموبايل حدًا أمنيًا؛ يجب تطبيق الصلاحيات وقواعد العمل المهمة أيضًا في النظام المسؤول عن البيانات.",
          },
        ],
        bullets: [
          {
            en: "Document request and response examples for key journeys.",
            ar: "وثّق أمثلة الطلبات والاستجابات للرحلات الأساسية.",
          },
          {
            en: "Decide what can be cached locally and for how long.",
            ar: "حدّد ما يمكن تخزينه محليًا والمدة المناسبة لذلك.",
          },
          {
            en: "Specify loading, retry, empty, and offline states.",
            ar: "حدّد حالات التحميل وإعادة المحاولة والبيانات الفارغة وانقطاع الاتصال.",
          },
        ],
      },
      {
        heading: {
          en: "Treat release as part of the product",
          ar: "اعتبر النشر جزءًا من المنتج",
        },
        paragraphs: [
          {
            en: "Test on representative devices and operating-system versions, not only in an emulator. Include network interruptions, denied permissions, app updates, and the accessibility settings your audience may use.",
            ar: "اختبر على أجهزة وإصدارات أنظمة ممثلة، لا على المحاكي فقط. اختبر انقطاع الشبكة ورفض الأذونات وتحديث التطبيق وإعدادات إتاحة الوصول التي قد يستخدمها جمهورك.",
          },
          {
            en: "Plan signing credentials, store listings, privacy disclosures, and the review process before the target release. Decide how crashes and user feedback will be triaged after launch, and who owns ongoing updates.",
            ar: "خطط لمفاتيح التوقيع وصفحات المتاجر وإفصاحات الخصوصية وإجراءات المراجعة قبل موعد الإصدار. حدّد طريقة التعامل مع الأعطال وملاحظات المستخدمين بعد الإطلاق والجهة المسؤولة عن التحديثات.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: {
          en: "What should be planned before building a business mobile app?",
          ar: "ما الذي يجب التخطيط له قبل بناء تطبيق أعمال؟",
        },
        answer: {
          en: "Define users and core journeys, platform requirements, data and APIs, offline behavior, permissions, testing, release ownership, and the scope of the first version.",
          ar: "حدّد المستخدمين والرحلات الأساسية ومتطلبات المنصات والبيانات وواجهات الربط والعمل دون اتصال والصلاحيات والاختبارات ومسؤولية النشر ونطاق الإصدار الأول.",
        },
      },
      {
        question: {
          en: "Should a business app work offline?",
          ar: "هل يجب أن يعمل تطبيق الأعمال دون اتصال؟",
        },
        answer: {
          en: "Only if users need to complete specific tasks without a connection. Define which actions can be queued, how conflicts are resolved, and what users can see until data is synchronized.",
          ar: "فقط إذا احتاج المستخدمون إلى إنجاز مهام محددة دون اتصال. حدّد الإجراءات التي يمكن تأجيلها وطريقة حل التعارض وما يراه المستخدم حتى مزامنة البيانات.",
        },
      },
      {
        question: {
          en: "How can a mobile app protect business data?",
          ar: "كيف يحمي تطبيق الموبايل بيانات الشركة؟",
        },
        answer: {
          en: "Use appropriate authentication and authorization, protect data in transit and on the device, limit collected data, and enforce important permissions and business rules on trusted backend systems.",
          ar: "استخدم المصادقة والصلاحيات المناسبة، واحمِ البيانات أثناء النقل وعلى الجهاز، وقلل البيانات المجمعة، وطبّق الصلاحيات وقواعد العمل المهمة في الأنظمة الخلفية الموثوقة.",
        },
      },
    ],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  ...FOUNDATIONAL_BLOG_POSTS,
  ...ADDITIONAL_BLOG_POSTS,
  ...NEXT_TOPIC_BLOG_POSTS,
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
