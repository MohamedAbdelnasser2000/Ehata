import type { LocalizedText } from "@/lib/i18n";

export interface ServiceDetail {
  introduction: LocalizedText;
  bestFor: LocalizedText[];
  challenges: LocalizedText[];
  approach: LocalizedText[];
  deliverables: LocalizedText[];
  process: { title: LocalizedText; description: LocalizedText }[];
  faq: { question: LocalizedText; answer: LocalizedText }[];
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "custom-software": {
    introduction: {
      en: "We plan and build software around the way your organization actually works. That can mean replacing repeated spreadsheet tasks, connecting disconnected processes or creating a new internal or customer-facing product. We begin by clarifying users, rules and priorities so the system solves the right problem before implementation expands.",
      ar: "نخطط ونبني برمجيات تناسب طريقة عمل مؤسستك فعلياً. قد يعني ذلك تقليل المهام المتكررة في الجداول، أو ربط إجراءات متفرقة، أو إنشاء منتج داخلي أو موجه للعملاء. نبدأ بتحديد المستخدمين والقواعد والأولويات حتى يعالج النظام المشكلة الصحيحة قبل التوسع في التنفيذ.",
    },
    bestFor: [
      { en: "Business owners replacing manual or spreadsheet-based operations", ar: "أصحاب الأعمال الذين يريدون تطوير عمليات يدوية أو قائمة على الجداول" },
      { en: "Operations teams coordinating work across disconnected tools", ar: "فرق التشغيل التي تنسق العمل بين أدوات منفصلة" },
      { en: "Product teams building an internal tool or a customer-facing application", ar: "فرق المنتجات التي تبني أداة داخلية أو تطبيقاً للعملاء" },
      { en: "Organizations with specific rules that off-the-shelf software does not fit", ar: "المؤسسات ذات القواعد الخاصة التي لا تناسبها البرامج الجاهزة" },
    ],
    challenges: [
      { en: "Repeated data entry creates avoidable work and inconsistent records.", ar: "إعادة إدخال البيانات مراراً تزيد العمل وتسبب اختلاف السجلات." },
      { en: "Important processes depend on individual knowledge instead of a shared workflow.", ar: "اعتماد الإجراءات المهمة على معرفة الأفراد بدلاً من مسار عمل مشترك." },
      { en: "Generic tools cannot represent the organization's roles, rules or customer journey.", ar: "الأدوات العامة لا تمثل أدوار المؤسسة أو قواعدها أو رحلة عملائها." },
    ],
    approach: [
      { en: "Map the people, decisions, information and exceptions involved in the process before selecting a solution shape.", ar: "نحدد الأشخاص والقرارات والمعلومات والاستثناءات في العملية قبل اختيار شكل الحل." },
      { en: "Agree on a focused first release and a clear boundary for later improvements.", ar: "نتفق على إصدار أول محدد وحدود واضحة للتحسينات اللاحقة." },
      { en: "Build and review working software in small steps, with automated checks appropriate to the agreed scope.", ar: "نبني برنامجاً قابلاً للمراجعة على خطوات صغيرة، مع اختبارات آلية تناسب النطاق المتفق عليه." },
      { en: "Document the delivered system and hand over the knowledge needed for the next stage.", ar: "نوثق النظام المسلّم وننقل المعرفة اللازمة للمرحلة التالية." },
    ],
    deliverables: [
      { en: "A documented scope, user roles and agreed business rules.", ar: "نطاق موثق وأدوار للمستخدمين وقواعد عمل متفق عليها." },
      { en: "A tailored application for the workflows included in the agreement.", ar: "تطبيق مخصص لمسارات العمل الداخلة في الاتفاق." },
      { en: "Relevant automated tests, review notes and handover documentation.", ar: "اختبارات آلية مناسبة وملاحظات مراجعة ووثائق تسليم." },
    ],
    process: [
      { title: { en: "Understand", ar: "الفهم" }, description: { en: "Review the current process, users, constraints and desired change.", ar: "مراجعة العملية الحالية والمستخدمين والقيود والتغيير المطلوب." } },
      { title: { en: "Define", ar: "تحديد النطاق" }, description: { en: "Prioritize requirements and agree on the first useful release.", ar: "ترتيب المتطلبات والاتفاق على أول إصدار مفيد." } },
      { title: { en: "Build and review", ar: "التنفيذ والمراجعة" }, description: { en: "Develop the agreed workflows and review progress with your team.", ar: "تطوير المسارات المتفق عليها ومراجعة التقدم مع فريقك." } },
      { title: { en: "Test and hand over", ar: "الاختبار والتسليم" }, description: { en: "Check the agreed behavior, document the work and plan the next step.", ar: "التحقق من السلوك المتفق عليه وتوثيق العمل وتحديد الخطوة التالية." } },
    ],
    faq: [
      { question: { en: "Can you replace our existing spreadsheets or legacy system?", ar: "هل يمكن استبدال الجداول أو النظام القديم لدينا؟" }, answer: { en: "We first review how the current process works and what information must be retained. Migration scope and validation are agreed before implementation; no automatic migration is assumed.", ar: "نراجع أولاً طريقة العمل الحالية والبيانات التي يجب الحفاظ عليها. ويُتفق على نطاق الترحيل والتحقق منه قبل التنفيذ؛ فلا نفترض ترحيلاً آلياً دون مراجعة." } },
      { question: { en: "Do we need to know exactly what to build?", ar: "هل يجب أن نحدد كل تفاصيل النظام قبل التواصل؟" }, answer: { en: "No. You can start with the problem and the people affected. Discovery helps turn that into an agreed, prioritized scope.", ar: "لا. يمكن البدء بشرح المشكلة والأشخاص المتأثرين بها، ثم تساعد مرحلة الفهم على تحويل ذلك إلى نطاق واضح ومرتب حسب الأولوية." } },
      { question: { en: "How are cost and timing determined?", ar: "كيف يتم تحديد التكلفة والمدة؟" }, answer: { en: "They depend on the workflows, integrations, data and release scope. We discuss these after understanding the requirements rather than promising a fixed estimate without them.", ar: "تعتمدان على مسارات العمل والتكاملات والبيانات ونطاق الإصدار. نناقشهما بعد فهم المتطلبات بدلاً من تقديم تقدير ثابت دونها." } },
    ],
  },
  "web-saas": {
    introduction: {
      en: "We design and develop browser-based products and SaaS platforms for customers, teams or multiple organizations. Work can include the customer interface, account and access flows, operational dashboards, subscription-related functions and a deployment approach. The exact product boundary is defined around what you need to validate and operate.",
      ar: "نصمم ونطور منتجات تعمل عبر المتصفح ومنصات SaaS للعملاء أو الفرق أو عدة مؤسسات. قد يشمل العمل واجهة العملاء ومسارات الحسابات والصلاحيات ولوحات التشغيل والوظائف المرتبطة بالاشتراكات وطريقة النشر. ويُحدد نطاق المنتج وفق ما تحتاج إلى اختباره وتشغيله.",
    },
    bestFor: [
      { en: "Founders validating a digital product idea", ar: "المؤسسون الذين يريدون اختبار فكرة منتج رقمي" },
      { en: "Companies moving an internal workflow into a browser-based application", ar: "الشركات التي تنقل إجراءات داخلية إلى تطبيق يعمل عبر المتصفح" },
      { en: "SaaS teams planning tenant separation, subscriptions or administration", ar: "فرق SaaS التي تخطط لفصل حسابات العملاء أو الاشتراكات أو الإدارة" },
      { en: "Product owners improving an existing web platform", ar: "مسؤولو المنتجات الذين يطورون منصة ويب قائمة" },
    ],
    challenges: [
      { en: "A useful product idea needs a clear first release instead of an oversized feature list.", ar: "تحتاج فكرة المنتج المفيدة إلى إصدار أول واضح بدلاً من قائمة وظائف متضخمة." },
      { en: "Customer accounts, roles and organization boundaries must match how the service is sold and used.", ar: "يجب أن تتوافق الحسابات والأدوار وحدود المؤسسات مع طريقة بيع الخدمة واستخدامها." },
      { en: "A web product needs an operating plan for environments, data, support and future changes.", ar: "يحتاج منتج الويب إلى تصور لبيئات التشغيل والبيانات والدعم والتغييرات المستقبلية." },
    ],
    approach: [
      { en: "Identify the target users, core use case and the smallest release that can be evaluated.", ar: "تحديد المستخدمين المستهدفين وحالة الاستخدام الأساسية وأصغر إصدار يمكن تقييمه." },
      { en: "Define account, role and tenant behavior where the product requires them.", ar: "تحديد سلوك الحسابات والأدوار والعملاء المستقلين عند الحاجة إليها." },
      { en: "Build the user experience and application workflows as one product, not disconnected screens.", ar: "بناء تجربة المستخدم ومسارات التطبيق كمنتج واحد لا كشاشات منفصلة." },
      { en: "Agree on deployment, monitoring and operational responsibilities for the selected hosting setup.", ar: "الاتفاق على النشر والمراقبة ومسؤوليات التشغيل وفق بيئة الاستضافة المختارة." },
    ],
    deliverables: [
      { en: "A defined product scope and prioritized release plan.", ar: "نطاق منتج محدد وخطة إصدارات مرتبة حسب الأولوية." },
      { en: "A web application with the agreed account, dashboard and product workflows.", ar: "تطبيق ويب بمسارات الحسابات ولوحات التحكم والوظائف المتفق عليها." },
      { en: "A deployment and handover approach aligned with the agreed hosting and support needs.", ar: "طريقة نشر وتسليم تتوافق مع الاستضافة واحتياجات الدعم المتفق عليها." },
    ],
    process: [
      { title: { en: "Product discovery", ar: "استكشاف المنتج" }, description: { en: "Clarify users, value, core journey and constraints.", ar: "تحديد المستخدمين والقيمة والرحلة الأساسية والقيود." } },
      { title: { en: "Scope and experience", ar: "النطاق والتجربة" }, description: { en: "Prioritize the release and map the web experience and roles.", ar: "ترتيب الإصدار وتخطيط تجربة الويب والأدوار." } },
      { title: { en: "Development", ar: "التطوير" }, description: { en: "Implement the agreed product workflows and review them iteratively.", ar: "تنفيذ مسارات المنتج المتفق عليها ومراجعتها تدريجياً." } },
      { title: { en: "Release planning", ar: "تخطيط الإطلاق" }, description: { en: "Prepare deployment and define ownership for ongoing operation.", ar: "تجهيز النشر وتحديد مسؤوليات التشغيل المستمر." } },
    ],
    faq: [
      { question: { en: "Can the product support multiple customer organizations?", ar: "هل يمكن للمنتج دعم عدة مؤسسات من العملاء؟" }, answer: { en: "Multi-tenancy can be included when it fits the product model. Data boundaries, roles and administration behavior must be designed and agreed for your use case.", ar: "يمكن تضمين تعدد العملاء المستقلين عندما يناسب نموذج المنتج. ويجب تصميم حدود البيانات والأدوار والإدارة والاتفاق عليها وفق استخدامك." } },
      { question: { en: "Can you add subscriptions and billing?", ar: "هل يمكن إضافة الاشتراكات والفوترة؟" }, answer: { en: "Subscription-related workflows can be scoped, including the required provider integration. Provider availability, fees and account setup are separate operational decisions.", ar: "يمكن تحديد مسارات الاشتراك ضمن النطاق، بما فيها التكامل المطلوب مع مزود الدفع. أما توفر المزود ورسومه وإعداد الحساب فهي قرارات تشغيلية منفصلة." } },
      { question: { en: "Can you work on an existing platform?", ar: "هل يمكنكم العمل على منصة موجودة؟" }, answer: { en: "Yes. We first review its current structure, deployment and outstanding needs, then agree on the change scope.", ar: "نعم. نراجع أولاً البنية الحالية وطريقة النشر والاحتياجات المتبقية، ثم نتفق على نطاق التغيير." } },
    ],
  },
  erp: {
    introduction: {
      en: "We plan and build business-management systems that connect the modules your operations need, such as inventory, sales, HR, accounting and procurement. A phased rollout can help teams prioritize one operational area at a time. Data migration, reports, permissions and audit history are defined with the organization's existing rules.",
      ar: "نخطط ونبني أنظمة لإدارة الأعمال تربط الوحدات التي تحتاجها عملياتك، مثل المخزون والمبيعات والموارد البشرية والمحاسبة والمشتريات. يساعد التنفيذ المرحلي على ترتيب الأولويات والبدء بمجال تشغيلي واحد في كل مرة. ويُحدد ترحيل البيانات والتقارير والصلاحيات وسجل التدقيق وفق قواعد المؤسسة الحالية.",
    },
    bestFor: [
      { en: "Owners and operations directors coordinating multiple departments", ar: "أصحاب الأعمال ومديرو العمليات الذين ينسقون بين عدة إدارات" },
      { en: "Finance, HR and procurement managers with connected workflows", ar: "مديرو المالية والموارد البشرية والمشتريات ذوو الإجراءات المترابطة" },
      { en: "Retail or distribution businesses that need inventory and sales visibility", ar: "شركات التجزئة والتوزيع التي تحتاج إلى رؤية للمخزون والمبيعات" },
      { en: "Organizations replacing legacy tools or fragmented records", ar: "المؤسسات التي تستبدل أدوات قديمة أو سجلات متفرقة" },
    ],
    challenges: [
      { en: "Departments maintain different versions of important operational information.", ar: "تحتفظ الإدارات بنسخ مختلفة من المعلومات التشغيلية المهمة." },
      { en: "Managers cannot easily follow a process that crosses purchasing, inventory and sales.", ar: "يصعب على المديرين متابعة عملية تمر بالمشتريات والمخزون والمبيعات." },
      { en: "Legacy records need a controlled migration plan before teams can rely on a new system.", ar: "تحتاج السجلات القديمة إلى خطة ترحيل منضبطة قبل اعتماد الفرق على نظام جديد." },
    ],
    approach: [
      { en: "Map departments, processes, approvals, data ownership and reporting needs.", ar: "تحديد الإدارات والإجراءات والاعتمادات وملكية البيانات واحتياجات التقارير." },
      { en: "Choose modules and a phased rollout that reflect operational priorities.", ar: "اختيار الوحدات وخطة تنفيذ مرحلية تعكس الأولويات التشغيلية." },
      { en: "Define role permissions, audit needs, reports and migration validation.", ar: "تحديد صلاحيات الأدوار واحتياجات التدقيق والتقارير والتحقق من الترحيل." },
      { en: "Deliver and review modules with the teams who will use them.", ar: "تسليم الوحدات ومراجعتها مع الفرق التي ستستخدمها." },
    ],
    deliverables: [
      { en: "A module map, phased scope and agreed operating workflows.", ar: "خريطة وحدات ونطاق مرحلي ومسارات تشغيل متفق عليها." },
      { en: "Business modules, role-based access and reports within the agreed scope.", ar: "وحدات أعمال وصلاحيات حسب الأدوار وتقارير ضمن النطاق المتفق عليه." },
      { en: "A documented migration and validation plan when legacy data is involved.", ar: "خطة موثقة للترحيل والتحقق عند التعامل مع بيانات قديمة." },
    ],
    process: [
      { title: { en: "Map operations", ar: "رسم العمليات" }, description: { en: "Understand departments, records and process handoffs.", ar: "فهم الإدارات والسجلات ونقاط انتقال العمل." } },
      { title: { en: "Prioritize modules", ar: "ترتيب الوحدات" }, description: { en: "Agree on the first module and the rollout sequence.", ar: "الاتفاق على الوحدة الأولى وتسلسل التنفيذ." } },
      { title: { en: "Configure and build", ar: "التصميم والتنفيذ" }, description: { en: "Implement agreed roles, workflows, reports and data handling.", ar: "تنفيذ الأدوار ومسارات العمل والتقارير ومعالجة البيانات المتفق عليها." } },
      { title: { en: "Validate and roll out", ar: "التحقق والتطبيق" }, description: { en: "Review with users, validate migration where applicable and plan the next phase.", ar: "المراجعة مع المستخدمين والتحقق من الترحيل عند الحاجة وتخطيط المرحلة التالية." } },
    ],
    faq: [
      { question: { en: "Do we have to replace every system at once?", ar: "هل يجب استبدال جميع الأنظمة دفعة واحدة؟" }, answer: { en: "No. The service supports phased scope planning, so the rollout can be prioritized around operational needs and dependencies.", ar: "لا. تتيح الخدمة تخطيط نطاق مرحلي وترتيب التنفيذ وفق الاحتياجات التشغيلية والاعتماديات." } },
      { question: { en: "Can legacy data be migrated?", ar: "هل يمكن ترحيل البيانات القديمة؟" }, answer: { en: "Migration can be included after reviewing source formats, data quality, mapping rules and validation requirements.", ar: "يمكن إدراج الترحيل بعد مراجعة صيغ المصادر وجودة البيانات وقواعد التحويل ومتطلبات التحقق." } },
      { question: { en: "Will the system match our accounting or compliance rules?", ar: "هل سيطابق النظام قواعد المحاسبة أو الامتثال لدينا؟" }, answer: { en: "Those rules must be documented and reviewed with your responsible stakeholders. They are not assumed from a generic ERP template.", ar: "يجب توثيق هذه القواعد ومراجعتها مع أصحاب المسؤولية لديكم. ولا نفترضها تلقائياً من قالب ERP عام." } },
    ],
  },
  uiux: {
    introduction: {
      en: "We help teams make digital products easier to understand and use. The work can start with research into user needs, continue through information structure and interface design, and include a reusable design system and interactive prototypes. Usability and accessibility requirements are considered in the agreed scope.",
      ar: "نساعد الفرق على جعل المنتجات الرقمية أوضح وأسهل استخداماً. يمكن أن يبدأ العمل بفهم احتياجات المستخدمين، ثم تنظيم المعلومات وتصميم الواجهات، وقد يشمل نظام تصميم قابلاً لإعادة الاستخدام ونماذج تفاعلية. وتُراعى متطلبات سهولة الاستخدام والإتاحة ضمن النطاق المتفق عليه.",
    },
    bestFor: [
      { en: "Product owners planning a new digital service", ar: "مسؤولو المنتجات الذين يخططون لخدمة رقمية جديدة" },
      { en: "Teams improving a complex internal or customer-facing application", ar: "الفرق التي تطور تطبيقاً معقداً داخلياً أو موجهاً للعملاء" },
      { en: "Organizations aligning multiple screens and products under one design system", ar: "المؤسسات التي توحّد شاشات ومنتجات متعددة ضمن نظام تصميم واحد" },
      { en: "Development teams that need clear interactive design specifications", ar: "فرق التطوير التي تحتاج إلى مواصفات تصميم تفاعلية واضحة" },
    ],
    challenges: [
      { en: "Users struggle to find the next action in interfaces shaped by internal assumptions.", ar: "يصعب على المستخدمين تحديد الخطوة التالية في واجهات صُممت وفق افتراضات داخلية." },
      { en: "Different screens use inconsistent patterns and visual rules.", ar: "تستخدم الشاشات أنماطاً وقواعد بصرية غير متناسقة." },
      { en: "A design handoff leaves implementation questions unresolved.", ar: "يترك تسليم التصميم أسئلة التنفيذ دون إجابة." },
    ],
    approach: [
      { en: "Understand users, tasks, context and existing constraints.", ar: "فهم المستخدمين والمهام والسياق والقيود القائمة." },
      { en: "Organize information and user flows before polishing visual details.", ar: "تنظيم المعلومات ومسارات المستخدم قبل صقل التفاصيل البصرية." },
      { en: "Prototype key interactions and review them with representative users or stakeholders.", ar: "إنشاء نماذج للتفاعلات الأساسية ومراجعتها مع مستخدمين أو أصحاب مصلحة مناسبين." },
      { en: "Document reusable patterns and interaction details for implementation.", ar: "توثيق الأنماط القابلة لإعادة الاستخدام وتفاصيل التفاعل للتنفيذ." },
    ],
    deliverables: [
      { en: "User flows, interface concepts and interactive prototypes as agreed.", ar: "مسارات مستخدم ومفاهيم واجهات ونماذج تفاعلية حسب الاتفاق." },
      { en: "Design tokens and reusable components when a design system is in scope.", ar: "متغيرات تصميم ومكونات قابلة لإعادة الاستخدام عند إدراج نظام تصميم في النطاق." },
      { en: "Usability and accessibility review notes within the agreed evaluation scope.", ar: "ملاحظات مراجعة سهولة الاستخدام والإتاحة ضمن نطاق التقييم المتفق عليه." },
    ],
    process: [
      { title: { en: "Research", ar: "البحث" }, description: { en: "Clarify users, goals, constraints and evidence already available.", ar: "تحديد المستخدمين والأهداف والقيود والأدلة المتاحة." } },
      { title: { en: "Structure", ar: "تنظيم التجربة" }, description: { en: "Map information, navigation and the key user journeys.", ar: "تخطيط المعلومات والتنقل ورحلات المستخدم الأساسية." } },
      { title: { en: "Prototype", ar: "النمذجة" }, description: { en: "Explore interface directions and make important interactions testable.", ar: "استكشاف اتجاهات الواجهة وجعل التفاعلات المهمة قابلة للاختبار." } },
      { title: { en: "Specify", ar: "التوثيق" }, description: { en: "Prepare reusable patterns and handoff details for implementation.", ar: "تجهيز الأنماط القابلة لإعادة الاستخدام وتفاصيل التسليم للتنفيذ." } },
    ],
    faq: [
      { question: { en: "Do you design before development starts?", ar: "هل يمكن تنفيذ التصميم قبل بدء التطوير؟" }, answer: { en: "Yes. The work can produce flows and prototypes before implementation, or support an existing product team during redesign.", ar: "نعم. يمكن إعداد المسارات والنماذج قبل التنفيذ، أو دعم فريق منتج قائم أثناء إعادة التصميم." } },
      { question: { en: "Can you work with our existing brand and components?", ar: "هل يمكن استخدام علامتنا ومكوناتنا الحالية؟" }, answer: { en: "Yes. Existing brand rules, components and constraints are reviewed and can be carried into the agreed design scope.", ar: "نعم. نراجع قواعد العلامة والمكونات والقيود الحالية، ويمكن البناء عليها ضمن نطاق التصميم المتفق عليه." } },
      { question: { en: "Does a design review guarantee WCAG compliance?", ar: "هل تضمن مراجعة التصميم التوافق مع WCAG؟" }, answer: { en: "A review can assess agreed accessibility criteria and identify issues. A compliance claim requires a defined standard, full evaluation scope and any necessary implementation testing.", ar: "يمكن للمراجعة تقييم معايير إتاحة متفق عليها وتحديد المشكلات. أما ادعاء التوافق فيحتاج إلى معيار ونطاق تقييم كامل واختبارات التنفيذ اللازمة." } },
    ],
  },
  "courses-training": {
    introduction: {
      en: "We provide project-based programming education through EHATA Academy and tailored training for company teams. Individual learners can follow structured tracks, while organizations can scope sessions around their team's current stack and learning goals. The format, prerequisites and feedback approach are agreed before a cohort or program begins.",
      ar: "نقدم تعليماً برمجياً قائماً على المشاريع عبر أكاديمية EHATA، إلى جانب تدريب مخصص لفرق الشركات. يستطيع المتعلمون اتباع مسارات منظمة، ويمكن للمؤسسات تحديد جلسات تناسب التقنيات الحالية وأهداف التعلم لدى فريقها. ويُتفق على أسلوب التدريب والمتطلبات وطريقة التقييم قبل بدء الدفعة أو البرنامج.",
    },
    bestFor: [
      { en: "Beginners who want a guided path into software development", ar: "المبتدئون الذين يريدون مساراً موجهاً لدخول تطوير البرمجيات" },
      { en: "Developers building practical skills in a specific stack", ar: "المطورون الذين يبنون مهارات عملية في تقنيات محددة" },
      { en: "Engineering managers onboarding or upskilling a team", ar: "مديرو الهندسة الذين يهيئون فريقاً جديداً أو يطورون مهاراته" },
      { en: "Learning and development teams planning technical training", ar: "فرق التعلم والتطوير التي تخطط لتدريب تقني" },
    ],
    challenges: [
      { en: "Learners know concepts but need a structured way to apply them in projects.", ar: "يعرف المتعلمون المفاهيم لكنهم يحتاجون إلى طريقة منظمة لتطبيقها في مشاريع." },
      { en: "Teams need training connected to the tools and practices they use at work.", ar: "تحتاج الفرق إلى تدريب مرتبط بالأدوات والممارسات المستخدمة في العمل." },
      { en: "Progress is difficult to assess without practical exercises and review.", ar: "يصعب تقييم التقدم دون تمارين عملية ومراجعة." },
    ],
    approach: [
      { en: "Identify learner starting points, goals, schedule and the expected technical context.", ar: "تحديد مستوى المتعلمين وأهدافهم والجدول والسياق التقني المتوقع." },
      { en: "Choose an academy track or scope a corporate program around the team's stack.", ar: "اختيار مسار من الأكاديمية أو تحديد برنامج للشركات يناسب تقنيات الفريق." },
      { en: "Teach through structured lessons and project-based practice, with feedback as agreed.", ar: "التدريس عبر دروس منظمة وتطبيق قائم على المشاريع مع مراجعة حسب الاتفاق." },
      { en: "Review the learning work and identify useful next steps for continued development.", ar: "مراجعة أعمال التعلم وتحديد خطوات مناسبة لاستمرار التطور." },
    ],
    deliverables: [
      { en: "A learning path or training plan aligned with the agreed goals.", ar: "مسار تعلم أو خطة تدريب متوافقة مع الأهداف المتفق عليها." },
      { en: "Practical exercises or projects tied to the selected topics.", ar: "تمارين أو مشاريع عملية مرتبطة بالموضوعات المختارة." },
      { en: "Feedback and progress checkpoints according to the program format.", ar: "مراجعة ونقاط متابعة للتقدم وفق صيغة البرنامج." },
    ],
    process: [
      { title: { en: "Set learning goals", ar: "تحديد أهداف التعلم" }, description: { en: "Understand the learners, starting level, team context and desired skills.", ar: "فهم المتعلمين ومستواهم وسياق الفريق والمهارات المطلوبة." } },
      { title: { en: "Plan the program", ar: "تخطيط البرنامج" }, description: { en: "Agree on topics, format, schedule and practical work.", ar: "الاتفاق على الموضوعات والصيغة والجدول والتطبيق العملي." } },
      { title: { en: "Learn by building", ar: "التعلم بالتطبيق" }, description: { en: "Work through lessons and practical tasks with the agreed feedback model.", ar: "تنفيذ الدروس والمهام العملية وفق طريقة المراجعة المتفق عليها." } },
      { title: { en: "Review progress", ar: "مراجعة التقدم" }, description: { en: "Discuss outcomes and next learning steps with learners or team leads.", ar: "مناقشة النتائج وخطوات التعلم التالية مع المتعلمين أو قادة الفريق." } },
    ],
    faq: [
      { question: { en: "Is the training suitable for beginners?", ar: "هل يناسب التدريب المبتدئين؟" }, answer: { en: "The academy offers tracks with different entry levels. We confirm prerequisites against the selected course or corporate program.", ar: "تقدم الأكاديمية مسارات بمستويات دخول مختلفة. ونراجع المتطلبات وفق الدورة أو البرنامج المختار." } },
      { question: { en: "Can a company request training on its own technology stack?", ar: "هل تستطيع الشركة طلب تدريب على تقنياتها الخاصة؟" }, answer: { en: "Yes. Corporate training can be scoped around the team's stack, role mix, learning goals and schedule.", ar: "نعم. يمكن تحديد تدريب الشركات وفق تقنيات الفريق وأدواره وأهداف التعلم وجدوله." } },
      { question: { en: "Are certificates or hiring outcomes guaranteed?", ar: "هل الشهادات أو فرص التوظيف مضمونة؟" }, answer: { en: "Program features depend on the selected track and current terms. Training does not guarantee employment; we confirm any certificate or hiring-related component before enrollment.", ar: "تعتمد ميزات البرنامج على المسار وشروطه الحالية. ولا يضمن التدريب التوظيف؛ ونوضح أي شهادة أو عنصر متعلق بالتوظيف قبل التسجيل." } },
    ],
  },
  consulting: {
    introduction: {
      en: "We help organizations make technical decisions, understand risks in an existing codebase, address a stalled project or add engineering support where it is needed. The engagement can focus on architecture, code, incidents, cloud costs or team capacity. Recommendations and ongoing responsibilities are agreed around the situation, not assumed from a generic package.",
      ar: "نساعد المؤسسات على اتخاذ قرارات تقنية وفهم مخاطر قاعدة كود قائمة ومعالجة مشروع متعثر أو إضافة دعم هندسي عند الحاجة. قد يركز التعاون على المعمارية أو الكود أو الحوادث أو تكاليف السحابة أو قدرة الفريق. وتُحدد التوصيات والمسؤوليات المستمرة وفق الحالة الفعلية لا وفق باقة عامة مفترضة.",
    },
    bestFor: [
      { en: "Founders who need an independent technical view before a major decision", ar: "المؤسسون الذين يحتاجون إلى رأي تقني مستقل قبل قرار مهم" },
      { en: "CTOs and engineering managers reviewing architecture or delivery risks", ar: "المديرون التقنيون ومديرو الهندسة الذين يراجعون مخاطر المعمارية أو التسليم" },
      { en: "Teams with a stalled release, production issue or technical backlog", ar: "الفرق التي تواجه إصداراً متعثراً أو مشكلة تشغيلية أو أعمالاً تقنية متراكمة" },
      { en: "Organizations needing temporary engineering leadership or additional capacity", ar: "المؤسسات التي تحتاج إلى قيادة هندسية مؤقتة أو قدرة إضافية للفريق" },
    ],
    challenges: [
      { en: "Technical uncertainty blocks a product, migration or investment decision.", ar: "يعرقل الغموض التقني قراراً متعلقاً بمنتج أو ترحيل أو استثمار." },
      { en: "A project has stopped progressing and the cause is not clear.", ar: "توقف المشروع عن التقدم ولم يتضح سبب التعثر." },
      { en: "The team needs specialized help without immediately hiring a permanent role.", ar: "يحتاج الفريق إلى مساعدة متخصصة دون توظيف دائم فوري." },
    ],
    approach: [
      { en: "Agree on the question to answer, access boundaries and evidence to review.", ar: "الاتفاق على السؤال المطلوب والإتاحة المسموحة والأدلة التي ستتم مراجعتها." },
      { en: "Examine the relevant architecture, code, incidents or operating costs within scope.", ar: "فحص المعمارية أو الكود أو الحوادث أو تكاليف التشغيل ذات الصلة ضمن النطاق." },
      { en: "Present findings with priorities, rationale and practical next actions.", ar: "عرض النتائج مع الأولويات ومبرراتها وخطوات عملية تالية." },
      { en: "If ongoing support is needed, agree separately on availability, response expectations and responsibilities.", ar: "عند الحاجة إلى دعم مستمر، يُتفق بشكل منفصل على التوفر وتوقعات الاستجابة والمسؤوليات." },
    ],
    deliverables: [
      { en: "A scoped technical review or architecture discussion.", ar: "مراجعة تقنية أو نقاش معماري محدد النطاق." },
      { en: "Prioritized findings and recommended next actions.", ar: "نتائج مرتبة حسب الأولوية وإجراءات مقترحة تالية." },
      { en: "A separate support or team-augmentation arrangement when agreed.", ar: "ترتيب منفصل للدعم أو تعزيز الفريق عند الاتفاق عليه." },
    ],
    process: [
      { title: { en: "Define the question", ar: "تحديد السؤال" }, description: { en: "Clarify the problem, decision, urgency and boundaries.", ar: "تحديد المشكلة والقرار والاستعجال والحدود." } },
      { title: { en: "Review evidence", ar: "مراجعة الأدلة" }, description: { en: "Examine the relevant systems, code, incidents or operating setup.", ar: "فحص الأنظمة أو الكود أو الحوادث أو إعداد التشغيل ذي الصلة." } },
      { title: { en: "Prioritize actions", ar: "ترتيب الإجراءات" }, description: { en: "Explain findings and distinguish immediate actions from longer-term work.", ar: "شرح النتائج والتمييز بين الإجراءات الفورية والعمل طويل الأمد." } },
      { title: { en: "Agree on follow-up", ar: "الاتفاق على المتابعة" }, description: { en: "Close with a review handoff or define continuing support separately.", ar: "إنهاء العمل بتسليم المراجعة أو تحديد الدعم المستمر بصورة منفصلة." } },
    ],
    faq: [
      { question: { en: "Can you review a project built by another team?", ar: "هل يمكنكم مراجعة مشروع نفذه فريق آخر؟" }, answer: { en: "Yes. The review starts by agreeing on access, scope and questions, then findings are limited to the evidence examined.", ar: "نعم. تبدأ المراجعة بالاتفاق على الإتاحة والنطاق والأسئلة، وتقتصر النتائج على الأدلة التي تمت مراجعتها." } },
      { question: { en: "Can you help with an urgent incident?", ar: "هل يمكنكم المساعدة في حادث تقني عاجل؟" }, answer: { en: "Incident support depends on current availability and the agreed response arrangement. Contact us with the issue and impact so we can clarify whether support is available.", ar: "تعتمد الاستجابة للحوادث على التوفر الحالي وترتيب الاستجابة المتفق عليه. تواصل معنا مع وصف المشكلة وتأثيرها لنتحقق من إمكانية الدعم." } },
      { question: { en: "Does SLA-backed support come with every consultation?", ar: "هل يشمل كل استشاري دعم بعقد SLA؟" }, answer: { en: "No. Ongoing support and any SLA are separate engagement terms that must be explicitly agreed.", ar: "لا. الدعم المستمر وأي اتفاقية SLA شروط تعاقد مستقلة يجب الاتفاق عليها صراحة." } },
    ],
  },
};

export function getServiceDetail(serviceId: string): ServiceDetail {
  const detail = SERVICE_DETAILS[serviceId];
  if (!detail) {
    throw new Error(`Missing detail content for service "${serviceId}".`);
  }
  return detail;
}
