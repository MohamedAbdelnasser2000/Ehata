import type { Course } from "./types";

/**
 * EHATA Academy tracks.
 *
 * Every course carries both languages so the client-side EN/AR switch can
 * translate the home cards and the /academy/[slug] detail pages without a
 * server. Add a track here and its page is generated automatically.
 */
export const COURSES: Course[] = [
  {
    id: "dotnet-fullstack",
    slug: "dotnet-fullstack",
    icon: "Server",
    level: "intermediate",
    title: {
      en: "Full Stack Development with .NET",
      ar: "Full Stack Development بـ .NET",
    },
    shortDescription: {
      en: "An end-to-end track from fundamentals to shipping a real project: C#, ASP.NET Core MVC, Web API, Entity Framework and SQL Server.",
      ar: "مسار متكامل من الأساسيات حتى نشر مشروع حقيقي: C# وASP.NET Core MVC وWeb API وEntity Framework وSQL Server.",
    },
    fullDescription: {
      en: "A 20-week project-based track that takes you from your first C# class to a production-ready full-stack product. You will build the backend with ASP.NET Core and Web API, model and query relational data with EF Core and SQL Server, structure the solution with Clean Architecture, then ship it with tests, authentication and a real deployment. Every module ends with a graded milestone, and the final two weeks are dedicated to a graduation project you can present to employers.",
      ar: "مسار تدريبي مكثّف لمدة 20 أسبوعًا ينقلك من أول كلاس بـ C# إلى منتج Full Stack جاهز للإنتاج. ستبني الخلفية بـ ASP.NET Core وWeb API، وتصمّم قواعد البيانات وتستعلم عنها عبر EF Core وSQL Server، وتنظّم الحل وفق Clean Architecture، ثم تُطلقه مع اختبارات ومصادقة ونشر حقيقي. كل وحدة تنتهي بمشروع تقييمي، والأسبوعان الأخيران مخصصان لمشروع تخرج تعرضه على أصحاب العمل.",
    },
    bullets: [
      { en: "C# fundamentals & OOP", ar: "أساسيات C# و OOP" },
      { en: "ASP.NET Core MVC & Web API", ar: "ASP.NET Core MVC وWeb API" },
      {
        en: "EF Core, SQL Server & Clean Architecture",
        ar: "EF Core وSQL Server وClean Architecture",
      },
    ],
    duration: { en: "20 weeks", ar: "20 أسبوعًا" },
    schedule: { en: "3 sessions/week", ar: "3 مرات/أسبوع" },
    hoursTotal: { en: "240 training hours", ar: "240 ساعة تدريبية" },
    language: {
      en: "Arabic with English technical terms",
      ar: "العربية بمصطلحات تقنية إنجليزية",
    },
    price: { en: "Available on request", ar: "يُحدد عند التواصل" },
    nextBatchDate: { en: "November 2026", ar: "نوفمبر 2026" },
    outcomes: [
      {
        en: "Write clean, object-oriented C# and use LINQ, generics and async/await confidently.",
        ar: "كتابة كود C# نظيف قائم على الكائنات واستخدام LINQ والـ generics وasync/await بثقة.",
      },
      {
        en: "Design normalized SQL Server databases and query them through Entity Framework Core.",
        ar: "تصميم قواعد بيانات SQL Server مُطبّعة والاستعلام عنها عبر Entity Framework Core.",
      },
      {
        en: "Build MVC applications with Razor views, forms, validation and authentication.",
        ar: "بناء تطبيقات MVC بوجهات Razor والنماذج والتحقق والمصادقة.",
      },
      {
        en: "Design and document RESTful APIs with ASP.NET Core Web API and Swagger.",
        ar: "تصميم وتوثيق واجهات RESTful عبر ASP.NET Core Web API وSwagger.",
      },
      {
        en: "Apply Clean Architecture and repository patterns to separate concerns.",
        ar: "تطبيق Clean Architecture ونمط Repository لفصل المسؤوليات.",
      },
      {
        en: "Write unit and integration tests and automate them in a CI pipeline.",
        ar: "كتابة اختبارات وحدة وتكامل وأتمتتها داخل خط CI.",
      },
      {
        en: "Secure APIs with JWT, roles and policies, then deploy to Azure App Service.",
        ar: "تأمين الواجهات بـ JWT والأدوار والسياسات ثم النشر على Azure App Service.",
      },
      {
        en: "Deliver a complete graduation project with documentation and a live demo.",
        ar: "تسليم مشروع تخرج كامل مع التوثيق وعرض حي.",
      },
    ],
    requirements: [
      {
        en: "Basic programming knowledge (variables, loops, functions) in any language.",
        ar: "معرفة برمجية أساسية (متغيرات، حلقات، دوال) بأي لغة.",
      },
      {
        en: "A laptop with at least 8 GB RAM running Windows, macOS or Linux.",
        ar: "حاسوب محمول بذاكرة 8 GB على الأقل يعمل بـ Windows أو macOS أو Linux.",
      },
      {
        en: "Around 10–12 hours per week, including homework.",
        ar: "نحو 10–12 ساعة أسبوعيًا شاملة الواجبات.",
      },
      {
        en: "Comfort reading technical documentation in English.",
        ar: "القدرة على قراءة التوثيق التقني بالإنجليزية.",
      },
    ],
    audience: [
      {
        en: "Computer-science graduates who want a production-ready backend portfolio.",
        ar: "خريجو علوم الحاسب الذين يريدون بورتفوليو خلفية جاهزًا للإنتاج.",
      },
      {
        en: "Junior developers moving from tutorials to real full-stack projects.",
        ar: "المطورون المبتدئون الراغبون في الانتقال من الدروس إلى مشاريع حقيقية.",
      },
      {
        en: "Backend developers who want to master the Microsoft stack end to end.",
        ar: "مطورو الخلفية الذين يريدون إتقان حزمة Microsoft من البداية للنهاية.",
      },
      {
        en: "Freelancers and career switchers targeting enterprise .NET roles.",
        ar: "المستقلون والراغبون في التحول الوظيفي نحو وظائف .NET المؤسسية.",
      },
    ],
    curriculum: [
      {
        title: {
          en: "Module 1 · C# and object-oriented programming",
          ar: "الوحدة 1 · C# والبرمجة كائنية التوجه",
        },
        duration: { en: "4 weeks", ar: "4 أسابيع" },
        lessons: [
          {
            en: "Tooling, project structure and the .NET CLI",
            ar: "الأدوات وبنية المشروع وواجهة .NET CLI",
          },
          {
            en: "Types, collections, LINQ and exception handling",
            ar: "الأنواع والمجموعات وLINQ ومعالجة الاستثناءات",
          },
          {
            en: "Classes, interfaces, inheritance and polymorphism",
            ar: "الكلاسات والواجهات والوراثة وتعدد الأشكال",
          },
          {
            en: "Async/await, tasks and working with files",
            ar: "Async/await والمهام والتعامل مع الملفات",
          },
        ],
      },
      {
        title: {
          en: "Module 2 · Databases with SQL Server and EF Core",
          ar: "الوحدة 2 · قواعد البيانات بـ SQL Server وEF Core",
        },
        duration: { en: "3 weeks", ar: "3 أسابيع" },
        lessons: [
          {
            en: "Relational modeling, normalization and keys",
            ar: "النمذجة العلائقية والتطبيع والمفاتيح",
          },
          {
            en: "SQL queries, joins, indexes and execution plans",
            ar: "استعلامات SQL والربط والفهارس وخطط التنفيذ",
          },
          {
            en: "EF Core: DbContext, migrations and relationships",
            ar: "EF Core: DbContext والترحيلات والعلاقات",
          },
          {
            en: "Repository and Unit of Work patterns",
            ar: "نمطا Repository وUnit of Work",
          },
        ],
      },
      {
        title: {
          en: "Module 3 · ASP.NET Core MVC",
          ar: "الوحدة 3 · ASP.NET Core MVC",
        },
        duration: { en: "4 weeks", ar: "4 أسابيع" },
        lessons: [
          {
            en: "Routing, controllers, actions and filters",
            ar: "التوجيه والمتحكمات والإجراءات والفلاتر",
          },
          {
            en: "Razor views, layouts and tag helpers",
            ar: "وجهات Razor والتخطيطات وTag Helpers",
          },
          {
            en: "Forms, model binding and validation",
            ar: "النماذج وربط البيانات والتحقق",
          },
          {
            en: "Dependency injection and configuration",
            ar: "حقن التبعيات والإعدادات",
          },
          {
            en: "Authentication with ASP.NET Core Identity",
            ar: "المصادقة عبر ASP.NET Core Identity",
          },
        ],
      },
      {
        title: {
          en: "Module 4 · Web API and Clean Architecture",
          ar: "الوحدة 4 · Web API وClean Architecture",
        },
        duration: { en: "4 weeks", ar: "4 أسابيع" },
        lessons: [
          {
            en: "REST principles, status codes and versioning",
            ar: "مبادئ REST ورموز الحالة والإصدارات",
          },
          {
            en: "Controllers, DTOs and object mapping",
            ar: "المتحكمات والـ DTOs وتحويل الكائنات",
          },
          {
            en: "Layered and Clean Architecture in practice",
            ar: "المعمارية الطبقية وClean Architecture عمليًا",
          },
          {
            en: "JWT security, roles, policies and CORS",
            ar: "أمان JWT والأدوار والسياسات وCORS",
          },
          {
            en: "Swagger/OpenAPI documentation",
            ar: "توثيق Swagger/OpenAPI",
          },
        ],
      },
      {
        title: {
          en: "Module 5 · Testing, quality and deployment",
          ar: "الوحدة 5 · الاختبار والجودة والنشر",
        },
        duration: { en: "3 weeks", ar: "3 أسابيع" },
        lessons: [
          {
            en: "Unit testing with xUnit and mocking",
            ar: "اختبار الوحدات بـ xUnit والمحاكاة",
          },
          {
            en: "Integration testing with WebApplicationFactory",
            ar: "اختبار التكامل بـ WebApplicationFactory",
          },
          {
            en: "Logging, health checks and error handling",
            ar: "التسجيل وفحوص الصحة ومعالجة الأخطاء",
          },
          {
            en: "Docker basics and CI with GitHub Actions",
            ar: "أساسيات Docker وCI عبر GitHub Actions",
          },
          {
            en: "Deploying to Azure App Service with a database",
            ar: "النشر على Azure App Service مع قاعدة بيانات",
          },
        ],
      },
      {
        title: {
          en: "Module 6 · Graduation project",
          ar: "الوحدة 6 · مشروع التخرج",
        },
        duration: { en: "2 weeks", ar: "أسبوعان" },
        lessons: [
          {
            en: "Scoping, user stories and database design review",
            ar: "تحديد النطاق وقصص المستخدم ومراجعة تصميم قاعدة البيانات",
          },
          {
            en: "Sprint build, code review and deployment",
            ar: "بناء السبرنت ومراجعة الكود والنشر",
          },
          {
            en: "Final demo, documentation and portfolio packaging",
            ar: "العرض النهائي والتوثيق وتجهيز البورتفوليو",
          },
        ],
      },
    ],
    tools: [
      "C#",
      ".NET 9",
      "ASP.NET Core MVC",
      "Web API",
      "Entity Framework Core",
      "SQL Server",
      "LINQ",
      "JWT",
      "xUnit",
      "Docker",
      "GitHub Actions",
      "Azure App Service",
      "Swagger",
    ],
    projects: [
      {
        title: { en: "Mini ERP system", ar: "نظام ERP مصغّر" },
        description: {
          en: "A multi-module MVC application for inventory, invoices and users with role-based access.",
          ar: "تطبيق MVC متعدد الوحدات للمخزون والفواتير والمستخدمين مع صلاحيات حسب الدور.",
        },
      },
      {
        title: { en: "E-commerce Web API", ar: "Web API لمتجر إلكتروني" },
        description: {
          en: "A documented REST API with catalog, cart, orders, a payment sandbox and admin endpoints.",
          ar: "واجهة REST موثقة تشمل الكتالوج والسلة والطلبات وبيئة دفع تجريبية ونقاط إدارة.",
        },
      },
      {
        title: {
          en: "Graduation full-stack product",
          ar: "منتج Full Stack للتخرج",
        },
        description: {
          en: "An end-to-end product of your choice: database design, API, MVC dashboard, tests and a live deployment.",
          ar: "منتج متكامل من اختيارك: تصميم قاعدة بيانات وAPI ولوحة MVC واختبارات ونشر حي.",
        },
      },
    ],
    faq: [
      {
        q: { en: "Do I need prior C# experience?", ar: "هل أحتاج خبرة سابقة في C#؟" },
        a: {
          en: "No. The track starts with language fundamentals; basic programming knowledge in any language is enough.",
          ar: "لا. يبدأ المسار بأساسيات اللغة، ويكفي وجود معرفة برمجية أساسية بأي لغة.",
        },
      },
      {
        q: {
          en: "Is the training online or on-site?",
          ar: "هل التدريب أونلاين أم حضوري؟",
        },
        a: {
          en: "Sessions run live online with recordings available, plus weekly office hours for code review.",
          ar: "الجلسات مباشرة أونلاين مع تسجيلات متاحة، إضافة إلى ساعات مكتبية أسبوعية لمراجعة الكود.",
        },
      },
      {
        q: { en: "Will I receive a certificate?", ar: "هل سأحصل على شهادة؟" },
        a: {
          en: "Yes — attendance and the graduation project are assessed, and a certificate is issued after both are completed.",
          ar: "نعم — يُقيَّم الحضور ومشروع التخرج، وتُمنح الشهادة بعد إتمامهما.",
        },
      },
      {
        q: {
          en: "How much time should I plan per week?",
          ar: "كم ساعة أحتاج أسبوعيًا؟",
        },
        a: {
          en: "Around 10–12 hours: three live sessions plus homework and project work.",
          ar: "نحو 10–12 ساعة: ثلاث جلسات مباشرة إضافة إلى الواجبات والعمل على المشاريع.",
        },
      },
      {
        q: { en: "Can I pay in installments?", ar: "هل يمكنني الدفع بالتقسيط؟" },
        a: {
          en: "Yes, the fee can be split into monthly installments. Contact us on WhatsApp for the current plan.",
          ar: "نعم، يمكن تقسيم الرسوم على أقساط شهرية. تواصل معنا عبر واتساب لمعرفة الخطة الحالية.",
        },
      },
    ],
  },
  {
    id: "php-fullstack",
    slug: "php-fullstack",
    icon: "Layers",
    level: "beginner",
    title: {
      en: "Full Stack Development with PHP",
      ar: "Full Stack Development بـ PHP",
    },
    shortDescription: {
      en: "From PHP fundamentals to complete web applications with Laravel and MySQL databases.",
      ar: "من أساسيات PHP لبناء تطبيقات ويب كاملة باستخدام Laravel وقواعد بيانات MySQL.",
    },
    fullDescription: {
      en: "A 16-week beginner-friendly track built around Laravel, the most widely used PHP framework in the region's job market. You start with the language itself — syntax, functions, arrays, forms and sessions — then move into MySQL design and object-oriented PHP before building real applications with Laravel. The final third focuses on REST APIs, admin dashboards, authentication and deployment, so you finish with three portfolio projects and the habits of a working developer.",
      ar: "مسار تدريبي لمدة 16 أسبوعًا مناسب للمبتدئين ومبني حول Laravel، أكثر أطر PHP انتشارًا في سوق العمل المحلي. تبدأ باللغة نفسها — الصياغة والدوال والمصفوفات والنماذج والجلسات — ثم تنتقل إلى تصميم MySQL وPHP الكائنية قبل بناء تطبيقات حقيقية بـ Laravel. الثلث الأخير مخصص لواجهات REST ولوحات التحكم والمصادقة والنشر، لتخرج بثلاثة مشاريع في بورتفوليو وبعقلية مطور محترف.",
    },
    bullets: [
      { en: "PHP fundamentals & MySQL", ar: "أساسيات PHP وMySQL" },
      { en: "Laravel & Eloquent", ar: "Laravel وEloquent" },
      { en: "REST APIs & admin dashboards", ar: "بناء REST API ولوحات تحكم" },
    ],
    duration: { en: "16 weeks", ar: "16 أسبوعًا" },
    schedule: { en: "3 sessions/week", ar: "3 مرات/أسبوع" },
    hoursTotal: { en: "192 training hours", ar: "192 ساعة تدريبية" },
    language: {
      en: "Arabic with English technical terms",
      ar: "العربية بمصطلحات تقنية إنجليزية",
    },
    price: { en: "Available on request", ar: "يُحدد عند التواصل" },
    nextBatchDate: { en: "December 2026", ar: "ديسمبر 2026" },
    outcomes: [
      {
        en: "Write clean PHP: variables, arrays, functions, forms and sessions.",
        ar: "كتابة PHP نظيفة: المتغيرات والمصفوفات والدوال والنماذج والجلسات.",
      },
      {
        en: "Design MySQL schemas and write secure queries with prepared statements.",
        ar: "تصميم قواعد MySQL وكتابة استعلامات آمنة عبر Prepared Statements.",
      },
      {
        en: "Apply object-oriented PHP and Composer-based project structure.",
        ar: "تطبيق PHP الكائنية وبنية مشاريع قائمة على Composer.",
      },
      {
        en: "Build Laravel applications with routing, Eloquent, Blade and validation.",
        ar: "بناء تطبيقات Laravel بالتوجيه وEloquent وBlade والتحقق.",
      },
      {
        en: "Create and document REST APIs with authentication and authorization.",
        ar: "إنشاء وتوثيق REST APIs مع المصادقة والصلاحيات.",
      },
      {
        en: "Ship admin dashboards with CRUD, uploads, search and reports.",
        ar: "تسليم لوحات تحكم بإدارة كاملة والرفع والبحث والتقارير.",
      },
      {
        en: "Deploy a Laravel application to shared hosting or a VPS.",
        ar: "نشر تطبيق Laravel على استضافة مشتركة أو خادم VPS.",
      },
    ],
    requirements: [
      {
        en: "No professional experience required — comfort with a computer is enough.",
        ar: "لا يُشترط خبرة مهنية — يكفي التعامل المريح مع الحاسوب.",
      },
      {
        en: "A laptop with at least 8 GB RAM and internet access.",
        ar: "حاسوب محمول بذاكرة 8 GB على الأقل واتصال بالإنترنت.",
      },
      {
        en: "Around 10 hours per week for sessions and practice.",
        ar: "نحو 10 ساعات أسبوعيًا للجلسات والتدريب.",
      },
      {
        en: "Willingness to type code by hand rather than copy it.",
        ar: "الرغبة في كتابة الكود يدويًا بدل نسخه.",
      },
    ],
    audience: [
      {
        en: "Absolute beginners starting their web development journey.",
        ar: "المبتدئون تمامًا في بداية رحلتهم مع تطوير الويب.",
      },
      {
        en: "Designers and content creators who want to build their own platforms.",
        ar: "المصممون وصنّاع المحتوى الراغبون في بناء منصاتهم بأنفسهم.",
      },
      {
        en: "Developers coming from WordPress who want real PHP engineering skills.",
        ar: "المطورون القادمون من WordPress الراغبون في مهارات PHP هندسية حقيقية.",
      },
      {
        en: "Small-business owners who want to maintain their own Laravel apps.",
        ar: "أصحاب المشاريع الصغيرة الذين يريدون صيانة تطبيقات Laravel بأنفسهم.",
      },
    ],
    curriculum: [
      {
        title: {
          en: "Module 1 · PHP and the web",
          ar: "الوحدة 1 · PHP والويب",
        },
        duration: { en: "3 weeks", ar: "3 أسابيع" },
        lessons: [
          {
            en: "Environment setup, syntax and operators",
            ar: "تجهيز البيئة والصياغة والمعاملات",
          },
          {
            en: "Arrays, functions and includes",
            ar: "المصفوفات والدوال والملفات المشتركة",
          },
          {
            en: "Forms, GET/POST and validation",
            ar: "النماذج وGET/POST والتحقق",
          },
          {
            en: "Sessions, cookies and file uploads",
            ar: "الجلسات والكوكيز ورفع الملفات",
          },
        ],
      },
      {
        title: {
          en: "Module 2 · MySQL and OOP PHP",
          ar: "الوحدة 2 · MySQL وPHP الكائنية",
        },
        duration: { en: "3 weeks", ar: "3 أسابيع" },
        lessons: [
          {
            en: "Relational design, keys and relationships",
            ar: "التصميم العلائقي والمفاتيح والعلاقات",
          },
          {
            en: "PDO, prepared statements and transactions",
            ar: "PDO وPrepared Statements والمعاملات",
          },
          {
            en: "Classes, interfaces, traits and namespaces",
            ar: "الكلاسات والواجهات والـ traits والـ namespaces",
          },
          {
            en: "Composer, autoloading and PSR standards",
            ar: "Composer والتحميل التلقائي ومعايير PSR",
          },
        ],
      },
      {
        title: {
          en: "Module 3 · Laravel foundations",
          ar: "الوحدة 3 · أساسيات Laravel",
        },
        duration: { en: "4 weeks", ar: "4 أسابيع" },
        lessons: [
          {
            en: "Routing, controllers and middleware",
            ar: "التوجيه والمتحكمات والـ middleware",
          },
          {
            en: "Blade templates, layouts and components",
            ar: "قوالب Blade والتخطيطات والمكونات",
          },
          {
            en: "Eloquent models, migrations and relationships",
            ar: "نماذج Eloquent والترحيلات والعلاقات",
          },
          {
            en: "Validation, form requests and error handling",
            ar: "التحقق وForm Requests ومعالجة الأخطاء",
          },
          {
            en: "Authentication with Laravel Breeze",
            ar: "المصادقة عبر Laravel Breeze",
          },
        ],
      },
      {
        title: {
          en: "Module 4 · APIs and dashboards",
          ar: "الوحدة 4 · واجهات API ولوحات التحكم",
        },
        duration: { en: "4 weeks", ar: "4 أسابيع" },
        lessons: [
          {
            en: "REST design, resources and API versioning",
            ar: "تصميم REST والـ Resources وإصدارات API",
          },
          {
            en: "Sanctum authentication and role policies",
            ar: "مصادقة Sanctum وسياسات الأدوار",
          },
          {
            en: "Admin panels with tables, filters and exports",
            ar: "لوحات إدارة بجداول وفلاتر وتصدير",
          },
          {
            en: "Queues, notifications and scheduled tasks",
            ar: "الطوابير والإشعارات والمهام المجدولة",
          },
        ],
      },
      {
        title: {
          en: "Module 5 · Deployment and capstone",
          ar: "الوحدة 5 · النشر ومشروع التخرج",
        },
        duration: { en: "2 weeks", ar: "أسبوعان" },
        lessons: [
          {
            en: "Environment files, caching and performance",
            ar: "ملفات البيئة والتخزين المؤقت والأداء",
          },
          {
            en: "Deploying to shared hosting and a VPS",
            ar: "النشر على استضافة مشتركة وخادم VPS",
          },
          {
            en: "Capstone build, review and portfolio packaging",
            ar: "بناء مشروع التخرج ومراجعته وتجهيز البورتفوليو",
          },
        ],
      },
    ],
    tools: [
      "PHP 8",
      "MySQL",
      "Laravel",
      "Eloquent",
      "Blade",
      "Composer",
      "REST API",
      "Sanctum",
      "Git",
      "Docker",
      "phpMyAdmin",
    ],
    projects: [
      {
        title: { en: "Content platform", ar: "منصة محتوى" },
        description: {
          en: "A blog/CMS with categories, media uploads, roles and a public search.",
          ar: "مدونة/نظام إدارة محتوى بالفئات ورفع الوسائط والأدوار والبحث العام.",
        },
      },
      {
        title: { en: "E-commerce store", ar: "متجر إلكتروني" },
        description: {
          en: "A Laravel storefront with cart, checkout, coupons and an order-management dashboard.",
          ar: "متجر بـ Laravel مع سلة وإتمام شراء وكوبونات ولوحة إدارة طلبات.",
        },
      },
      {
        title: { en: "Mobile-ready REST API", ar: "REST API جاهز للموبايل" },
        description: {
          en: "A token-authenticated API with documented endpoints and an admin panel consuming it.",
          ar: "API بمصادقة توكن ونقاط موثقة ولوحة إدارة تستهلكها فعليًا.",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Is this course suitable for complete beginners?",
          ar: "هل هذه الدورة مناسبة للمبتدئين تمامًا؟",
        },
        a: {
          en: "Yes. It assumes no prior PHP or database knowledge and starts from environment setup.",
          ar: "نعم. لا تفترض أي معرفة مسبقة بـ PHP أو قواعد البيانات وتبدأ من تجهيز البيئة.",
        },
      },
      {
        q: {
          en: "Why Laravel instead of plain PHP only?",
          ar: "لماذا Laravel وليس PHP فقط؟",
        },
        a: {
          en: "Plain PHP teaches the language; Laravel is what most regional employers actually hire for. You learn both.",
          ar: "PHP وحدها تعلّمك اللغة، بينما Laravel هو ما يطلبه معظم أصحاب العمل محليًا. ستتعلم الاثنين.",
        },
      },
      {
        q: { en: "Will I get recordings?", ar: "هل سأحصل على تسجيلات؟" },
        a: {
          en: "Every live session is recorded and shared with the cohort for the duration of the track.",
          ar: "كل جلسة مباشرة تُسجَّل وتُتاح للدفعة طوال مدة المسار.",
        },
      },
      {
        q: {
          en: "What do I need to host my final project?",
          ar: "ماذا أحتاج لاستضافة مشروعي النهائي؟",
        },
        a: {
          en: "We walk through free-tier and low-cost hosting options, including shared cPanel and a small VPS.",
          ar: "نستعرض خيارات استضافة مجانية ومنخفضة التكلفة، بما فيها cPanel المشتركة وخادم VPS صغير.",
        },
      },
      {
        q: {
          en: "Is payment in installments possible?",
          ar: "هل الدفع بالتقسيط متاح؟",
        },
        a: {
          en: "Yes, monthly installments are available. Message us on WhatsApp for the details.",
          ar: "نعم، الأقساط الشهرية متاحة. راسلنا على واتساب للتفاصيل.",
        },
      },
    ],
  },
  {
    id: "mobile-apps",
    slug: "mobile-apps",
    icon: "Smartphone",
    level: "intermediate",
    title: {
      en: "Mobile App Development",
      ar: "تطوير تطبيقات الموبايل",
    },
    shortDescription: {
      en: "Build iOS and Android apps from one codebase, then publish them to the stores.",
      ar: "ابنِ تطبيقات iOS وAndroid بكود واحد، وانشرها على المتاجر.",
    },
    fullDescription: {
      en: "A hands-on 14-week track for developers who want to ship real mobile products. You will learn Dart and Flutter from the widget level up, design responsive screens, manage application state with Riverpod, integrate REST APIs and local storage, add Firebase authentication and notifications, test the app, and finally sign and publish it to Google Play and the App Store. Each module produces a usable screen or feature, and the course ends with a complete app in your portfolio.",
      ar: "مسار عملي لمدة 14 أسبوعًا للمطورين الراغبين في إطلاق منتجات موبايل حقيقية. ستتعلم Dart وFlutter بدءًا من مستوى الـ widgets، وتصمّم شاشات متجاوبة، وتدير حالة التطبيق عبر Riverpod، وتربط REST APIs والتخزين المحلي، وتضيف مصادقة وإشعارات Firebase، وتختبر التطبيق، ثم توقّعه وتنشره على Google Play وApp Store. كل وحدة تنتج شاشة أو ميزة قابلة للاستخدام، وينتهي المسار بتطبيق كامل في بورتفوليو.",
    },
    bullets: [
      {
        en: "Flutter & Dart (or React Native)",
        ar: "Flutter وDart (أو React Native)",
      },
      {
        en: "APIs and application state management",
        ar: "التعامل مع الـ APIs وإدارة الحالة",
      },
      {
        en: "Publishing to Google Play & App Store",
        ar: "النشر على Google Play وApp Store",
      },
    ],
    duration: { en: "14 weeks", ar: "14 أسبوعًا" },
    schedule: { en: "2 sessions/week", ar: "مرتان/أسبوع" },
    hoursTotal: { en: "112 training hours", ar: "112 ساعة تدريبية" },
    language: {
      en: "Arabic with English technical terms",
      ar: "العربية بمصطلحات تقنية إنجليزية",
    },
    price: { en: "Available on request", ar: "يُحدد عند التواصل" },
    nextBatchDate: { en: "December 2026", ar: "ديسمبر 2026" },
    outcomes: [
      {
        en: "Write clean Dart with classes, futures, streams and error handling.",
        ar: "كتابة Dart نظيفة بالكلاسات والـ Futures والـ Streams ومعالجة الأخطاء.",
      },
      {
        en: "Build responsive Flutter screens with reusable widgets and themes.",
        ar: "بناء شاشات Flutter متجاوبة بمكونات قابلة لإعادة الاستخدام وثيمات.",
      },
      {
        en: "Navigate, route and structure a multi-screen application.",
        ar: "التنقل والتوجيه وبنية تطبيق متعدد الشاشات.",
      },
      {
        en: "Manage state predictably with Riverpod and connect REST APIs.",
        ar: "إدارة الحالة بشكل منظم عبر Riverpod وربط REST APIs.",
      },
      {
        en: "Persist data locally and sync it with a backend.",
        ar: "تخزين البيانات محليًا ومزامنتها مع الخلفية.",
      },
      {
        en: "Add Firebase authentication, Firestore and push notifications.",
        ar: "إضافة مصادقة Firebase وFirestore والإشعارات الفورية.",
      },
      {
        en: "Test, sign and publish an app to both major stores.",
        ar: "اختبار التطبيق وتوقيعه ونشره على المتجرين الرئيسيين.",
      },
    ],
    requirements: [
      {
        en: "Comfort with any programming language (variables, functions, classes).",
        ar: "ارتياح مع أي لغة برمجة (متغيرات، دوال، كلاسات).",
      },
      {
        en: "A laptop with 8 GB RAM or more; macOS is required only for iOS publishing.",
        ar: "حاسوب محمول بذاكرة 8 GB أو أكثر؛ macOS مطلوب فقط لنشر iOS.",
      },
      {
        en: "Around 8–10 hours per week including practice.",
        ar: "نحو 8–10 ساعات أسبوعيًا شاملة التطبيق العملي.",
      },
      {
        en: "An Android or iOS device for testing is recommended.",
        ar: "يُفضَّل توفر جهاز Android أو iOS للاختبار.",
      },
    ],
    audience: [
      {
        en: "Web developers expanding into mobile products.",
        ar: "مطورو الويب الراغبون في التوسع نحو منتجات الموبايل.",
      },
      {
        en: "Computer-science students building a graduation or portfolio app.",
        ar: "طلاب علوم الحاسب الذين يبنون تطبيق تخرج أو بورتفوليو.",
      },
      {
        en: "Freelancers who want to offer cross-platform app development.",
        ar: "المستقلون الراغبون في تقديم خدمات تطوير تطبيقات متعددة المنصات.",
      },
      {
        en: "Product-minded developers who want to launch their own app.",
        ar: "المطورون ذوو الحس المنتجي الراغبون في إطلاق تطبيقهم الخاص.",
      },
    ],
    curriculum: [
      {
        title: {
          en: "Module 1 · Dart and Flutter foundations",
          ar: "الوحدة 1 · أساسيات Dart وFlutter",
        },
        duration: { en: "3 weeks", ar: "3 أسابيع" },
        lessons: [
          {
            en: "Dart syntax, null safety and collections",
            ar: "صياغة Dart وأمان القيم الفارغة والمجموعات",
          },
          {
            en: "Widgets, layout and building your first screens",
            ar: "الـ widgets والتخطيط وبناء أول شاشاتك",
          },
          {
            en: "Styling, themes and responsive layouts",
            ar: "التنسيق والثيمات والتخطيطات المتجاوبة",
          },
          {
            en: "Assets, fonts and reusable components",
            ar: "الأصول والخطوط والمكونات القابلة لإعادة الاستخدام",
          },
        ],
      },
      {
        title: {
          en: "Module 2 · Navigation and state",
          ar: "الوحدة 2 · التنقل وإدارة الحالة",
        },
        duration: { en: "3 weeks", ar: "3 أسابيع" },
        lessons: [
          {
            en: "Forms, validation and user input",
            ar: "النماذج والتحقق وإدخال المستخدم",
          },
          {
            en: "Navigation, routes and deep links",
            ar: "التنقل والمسارات والروابط العميقة",
          },
          {
            en: "State management with Riverpod",
            ar: "إدارة الحالة عبر Riverpod",
          },
          {
            en: "Animations and polished transitions",
            ar: "الحركات والانتقالات المصقولة",
          },
        ],
      },
      {
        title: {
          en: "Module 3 · Data and APIs",
          ar: "الوحدة 3 · البيانات وواجهات API",
        },
        duration: { en: "3 weeks", ar: "3 أسابيع" },
        lessons: [
          {
            en: "REST clients, JSON models and error states",
            ar: "عملاء REST ونماذج JSON وحالات الخطأ",
          },
          {
            en: "Local storage with SharedPreferences and Hive",
            ar: "التخزين المحلي بـ SharedPreferences وHive",
          },
          {
            en: "Offline-first patterns and caching",
            ar: "أنماط العمل دون اتصال والتخزين المؤقت",
          },
          {
            en: "Firebase authentication and Firestore",
            ar: "مصادقة Firebase وFirestore",
          },
        ],
      },
      {
        title: {
          en: "Module 4 · Quality and testing",
          ar: "الوحدة 4 · الجودة والاختبار",
        },
        duration: { en: "2 weeks", ar: "أسبوعان" },
        lessons: [
          {
            en: "Widget and unit testing",
            ar: "اختبار الـ widgets والوحدات",
          },
          {
            en: "Push notifications and analytics",
            ar: "الإشعارات الفورية والتحليلات",
          },
          {
            en: "Performance profiling and app size",
            ar: "تحليل الأداء وحجم التطبيق",
          },
        ],
      },
      {
        title: {
          en: "Module 5 · Publishing and capstone",
          ar: "الوحدة 5 · النشر ومشروع التخرج",
        },
        duration: { en: "3 weeks", ar: "3 أسابيع" },
        lessons: [
          {
            en: "Signing, versioning and app store assets",
            ar: "التوقيع والإصدارات وأصول المتجر",
          },
          {
            en: "Google Play and App Store review guidelines",
            ar: "إرشادات المراجعة في Google Play وApp Store",
          },
          {
            en: "Capstone app build, demo and store submission",
            ar: "بناء تطبيق التخرج وعرضه وتقديمه للمتجر",
          },
        ],
      },
    ],
    tools: [
      "Flutter",
      "Dart",
      "Riverpod",
      "REST API",
      "Firebase",
      "Firestore",
      "Hive",
      "Android Studio",
      "Xcode",
      "Git",
      "Fastlane",
    ],
    projects: [
      {
        title: { en: "Task manager app", ar: "تطبيق إدارة مهام" },
        description: {
          en: "A local-first task app with categories, reminders and offline persistence.",
          ar: "تطبيق مهام يعمل محليًا مع فئات وتذكيرات وحفظ دون اتصال.",
        },
      },
      {
        title: { en: "Commerce app with API", ar: "تطبيق متجر بواجهة API" },
        description: {
          en: "Product browsing, cart, authentication and checkout consuming a real REST API.",
          ar: "تصفح منتجات وسلة ومصادقة وإتمام شراء عبر REST API حقيقية.",
        },
      },
      {
        title: { en: "Graduation app", ar: "تطبيق التخرج" },
        description: {
          en: "A complete cross-platform product with notifications, analytics and a store-ready build.",
          ar: "منتج متكامل متعدد المنصات مع إشعارات وتحليلات ونسخة جاهزة للمتجر.",
        },
      },
    ],
    faq: [
      {
        q: { en: "Flutter or React Native?", ar: "Flutter أم React Native؟" },
        a: {
          en: "The track is built on Flutter because it gives you a single, consistent toolchain for both stores. React Native equivalents are discussed for students coming from JavaScript.",
          ar: "المسار مبني على Flutter لأنه يمنحك سلسلة أدوات واحدة ومتسقة للمتجرين. وتُناقش بدائل React Native للطلاب القادمين من JavaScript.",
        },
      },
      {
        q: {
          en: "Can I publish an iOS app without a Mac?",
          ar: "هل يمكنني نشر تطبيق iOS دون جهاز Mac؟",
        },
        a: {
          en: "Building for iOS needs macOS or a cloud Mac service. We cover both paths, but Android publishing only needs a normal machine.",
          ar: "بناء iOS يحتاج macOS أو خدمة Mac سحابية. نغطي المسارين، أما نشر Android فيحتاج جهازًا عاديًا فقط.",
        },
      },
      {
        q: {
          en: "Do I need design experience?",
          ar: "هل أحتاج خبرة تصميم؟",
        },
        a: {
          en: "No. You will learn layout and visual hierarchy as part of the Flutter modules.",
          ar: "لا. ستتعلم التخطيط والتسلسل البصري ضمن وحدات Flutter.",
        },
      },
      {
        q: {
          en: "Are store accounts included in the price?",
          ar: "هل حسابات المتاجر مشمولة في السعر؟",
        },
        a: {
          en: "No, Google Play and Apple developer accounts are paid separately by the student.",
          ar: "لا، حسابات مطوري Google Play وApple تُدفع بشكل منفصل من الطالب.",
        },
      },
      {
        q: { en: "Will I keep the recordings?", ar: "هل أحتفظ بالتسجيلات؟" },
        a: {
          en: "Yes, recordings stay available to your cohort throughout the track.",
          ar: "نعم، تظل التسجيلات متاحة لدفعتك طوال المسار.",
        },
      },
    ],
  },
  {
    id: "artificial-intelligence",
    slug: "artificial-intelligence",
    icon: "Brain",
    level: "advanced",
    title: {
      en: "Artificial Intelligence",
      ar: "الذكاء الاصطناعي",
    },
    shortDescription: {
      en: "From Python and machine learning to integrating LLMs and AI models into real products.",
      ar: "من أساسيات Python وMachine Learning لحد دمج نماذج الذكاء الاصطناعي واللغات الكبيرة (LLMs) في منتجات حقيقية.",
    },
    fullDescription: {
      en: "A rigorous 12-week track for developers who want to build AI systems rather than only call them. You begin with the Python data stack and the mathematics behind learning, then implement classical machine-learning models, move into deep learning with PyTorch, and apply computer vision and natural-language processing. The final modules focus on the engineering side of modern AI: prompt design, retrieval-augmented generation, embeddings, evaluation and serving models behind an API. The capstone is an end-to-end intelligent application you can demo and defend.",
      ar: "مسار متقدم لمدة 12 أسبوعًا للمطورين الذين يريدون بناء أنظمة ذكاء اصطناعي لا مجرد استدعائها. تبدأ بحزمة Python للبيانات والرياضيات خلف التعلّم، ثم تنفّذ نماذج تعلّم آلي كلاسيكية، وتنتقل إلى التعلّم العميق بـ PyTorch، وتطبّق الرؤية الحاسوبية ومعالجة اللغة الطبيعية. تركز الوحدات الأخيرة على الجانب الهندسي للذكاء الاصطناعي الحديث: تصميم الأوامر، والتوليد المعزز بالاسترجاع، والتضمينات، والتقييم، وتقديم النماذج خلف API. ومشروع التخرج تطبيق ذكي متكامل تعرضه وتدافع عن قراراته.",
    },
    bullets: [
      { en: "Python & machine learning", ar: "Python وMachine Learning" },
      { en: "Deep learning & computer vision", ar: "Deep Learning وComputer Vision" },
      { en: "LLM applications & APIs", ar: "بناء تطبيقات بـ LLMs وAPIs" },
    ],
    duration: { en: "12 weeks", ar: "12 أسبوعًا" },
    schedule: { en: "2 sessions/week", ar: "مرتان/أسبوع" },
    hoursTotal: { en: "96 training hours", ar: "96 ساعة تدريبية" },
    language: {
      en: "Arabic with English technical terms",
      ar: "العربية بمصطلحات تقنية إنجليزية",
    },
    price: { en: "Available on request", ar: "يُحدد عند التواصل" },
    nextBatchDate: { en: "January 2027", ar: "يناير 2027" },
    outcomes: [
      {
        en: "Use Python, NumPy, pandas and visualisation to prepare real datasets.",
        ar: "استخدام Python وNumPy وpandas والتصوير البياني لتجهيز مجموعات بيانات حقيقية.",
      },
      {
        en: "Explain and apply the core mathematics behind machine learning.",
        ar: "شرح وتطبيق الرياضيات الأساسية خلف تعلّم الآلة.",
      },
      {
        en: "Train, evaluate and tune supervised and unsupervised models.",
        ar: "تدريب وتقييم وضبط نماذج التعلّم المراقب وغير المراقب.",
      },
      {
        en: "Build neural networks with PyTorch and understand training dynamics.",
        ar: "بناء شبكات عصبية بـ PyTorch وفهم ديناميكيات التدريب.",
      },
      {
        en: "Apply computer vision with OpenCV and convolutional networks.",
        ar: "تطبيق الرؤية الحاسوبية بـ OpenCV والشبكات الالتفافية.",
      },
      {
        en: "Design LLM applications with prompt engineering, embeddings and RAG.",
        ar: "تصميم تطبيقات LLMs بهندسة الأوامر والتضمينات وRAG.",
      },
      {
        en: "Evaluate model quality and guard against hallucination and leakage.",
        ar: "تقييم جودة النماذج والحماية من الهلوسة وتسريب البيانات.",
      },
      {
        en: "Serve a model or AI pipeline behind a documented API.",
        ar: "تقديم نموذج أو خط ذكاء اصطناعي خلف API موثقة.",
      },
    ],
    requirements: [
      {
        en: "Solid Python basics (functions, classes, virtual environments).",
        ar: "أساسيات Python قوية (دوال، كلاسات، بيئات افتراضية).",
      },
      {
        en: "High-school-level algebra and a willingness to revisit probability.",
        ar: "جبر بمستوى الثانوية واستعداد لمراجعة الاحتمالات.",
      },
      {
        en: "A laptop with 16 GB RAM or a Google Colab account for GPU work.",
        ar: "حاسوب بذاكرة 16 GB أو حساب Google Colab للعمل على GPU.",
      },
      {
        en: "Around 10–12 hours per week for theory and labs.",
        ar: "نحو 10–12 ساعة أسبوعيًا للنظري والتطبيقات المعملية.",
      },
    ],
    audience: [
      {
        en: "Software engineers moving into AI and ML engineering roles.",
        ar: "مهندسو البرمجيات المنتقلون إلى أدوار هندسة الذكاء الاصطناعي وتعلّم الآلة.",
      },
      {
        en: "Data analysts who want to build models, not only dashboards.",
        ar: "محللو البيانات الراغبون في بناء نماذج لا لوحات فقط.",
      },
      {
        en: "Computer-science graduates preparing for AI-focused master's programs.",
        ar: "خريجو علوم الحاسب المستعدون لبرامج ماجستير متخصصة في الذكاء الاصطناعي.",
      },
      {
        en: "Product developers who want to add AI features responsibly.",
        ar: "مطورو المنتجات الراغبون في إضافة ميزات ذكاء اصطناعي بمسؤولية.",
      },
    ],
    curriculum: [
      {
        title: {
          en: "Module 1 · Python and the data stack",
          ar: "الوحدة 1 · Python وحزمة البيانات",
        },
        duration: { en: "2 weeks", ar: "أسبوعان" },
        lessons: [
          {
            en: "NumPy arrays, vectorisation and broadcasting",
            ar: "مصفوفات NumPy والتوجيه والـ broadcasting",
          },
          {
            en: "pandas cleaning, joins and feature frames",
            ar: "تنظيف pandas والربط وأطر الميزات",
          },
          {
            en: "Exploratory analysis and visual storytelling",
            ar: "التحليل الاستكشافي والسرد البصري",
          },
        ],
      },
      {
        title: {
          en: "Module 2 · Classical machine learning",
          ar: "الوحدة 2 · تعلّم الآلة الكلاسيكي",
        },
        duration: { en: "3 weeks", ar: "3 أسابيع" },
        lessons: [
          {
            en: "Linear and logistic regression from the math up",
            ar: "الانحدار الخطي واللوجستي بدءًا من الرياضيات",
          },
          {
            en: "Trees, forests and gradient boosting",
            ar: "الأشجار والغابات والتعزيز التدريجي",
          },
          {
            en: "Clustering, dimensionality reduction and anomalies",
            ar: "التجميع وتقليل الأبعاد وكشف الشذوذ",
          },
          {
            en: "Cross-validation, metrics and leakage avoidance",
            ar: "التحقق المتقاطع والمقاييس وتجنب تسريب البيانات",
          },
        ],
      },
      {
        title: {
          en: "Module 3 · Deep learning",
          ar: "الوحدة 3 · التعلّم العميق",
        },
        duration: { en: "3 weeks", ar: "3 أسابيع" },
        lessons: [
          {
            en: "Tensors, autograd and optimisation with PyTorch",
            ar: "التنسورات والاشتقاق التلقائي والتحسين بـ PyTorch",
          },
          {
            en: "Feed-forward and convolutional networks",
            ar: "الشبكات الأمامية والالتفافية",
          },
          {
            en: "Regularisation, augmentation and transfer learning",
            ar: "التنظيم وتضخيم البيانات ونقل التعلّم",
          },
          {
            en: "Computer vision with OpenCV and pretrained models",
            ar: "الرؤية الحاسوبية بـ OpenCV والنماذج المدربة مسبقًا",
          },
        ],
      },
      {
        title: {
          en: "Module 4 · NLP and large language models",
          ar: "الوحدة 4 · معالجة اللغة والنماذج اللغوية الكبيرة",
        },
        duration: { en: "2 weeks", ar: "أسبوعان" },
        lessons: [
          {
            en: "Text preprocessing, tokenisation and embeddings",
            ar: "معالجة النص والتقطيع والتضمينات",
          },
          {
            en: "Prompt engineering and structured outputs",
            ar: "هندسة الأوامر والمخرجات المنظمة",
          },
          {
            en: "Retrieval-augmented generation with vector stores",
            ar: "التوليد المعزز بالاسترجاع عبر مخازن متجهات",
          },
        ],
      },
      {
        title: {
          en: "Module 5 · AI engineering",
          ar: "الوحدة 5 · هندسة الذكاء الاصطناعي",
        },
        duration: { en: "1 week", ar: "أسبوع" },
        lessons: [
          {
            en: "Serving models with FastAPI and batching",
            ar: "تقديم النماذج عبر FastAPI والتجميع",
          },
          {
            en: "Evaluation, guardrails and cost control",
            ar: "التقييم وضوابط الأمان والتحكم في التكلفة",
          },
        ],
      },
      {
        title: {
          en: "Module 6 · Capstone",
          ar: "الوحدة 6 · مشروع التخرج",
        },
        duration: { en: "1 week", ar: "أسبوع" },
        lessons: [
          {
            en: "Problem framing, data collection and baseline",
            ar: "تأطير المشكلة وجمع البيانات وخط الأساس",
          },
          {
            en: "Build, evaluate, deploy and present the AI product",
            ar: "بناء وتقييم ونشر وعرض المنتج الذكي",
          },
        ],
      },
    ],
    tools: [
      "Python",
      "NumPy",
      "pandas",
      "scikit-learn",
      "PyTorch",
      "OpenCV",
      "Hugging Face",
      "LangChain",
      "OpenAI API",
      "FastAPI",
      "Jupyter",
      "Git",
    ],
    projects: [
      {
        title: { en: "Tabular prediction model", ar: "نموذج تنبؤ جدولي" },
        description: {
          en: "An end-to-end regression/classification pipeline with feature engineering and cross-validation.",
          ar: "خط تنبؤ متكامل للانحدار أو التصنيف مع هندسة الميزات والتحقق المتقاطع.",
        },
      },
      {
        title: { en: "Vision classifier", ar: "مصنّف رؤية حاسوبية" },
        description: {
          en: "A transfer-learning image classifier trained, evaluated and served behind an API.",
          ar: "مصنّف صور بنقل التعلّم يتم تدريبه وتقييمه وتقديمه خلف API.",
        },
      },
      {
        title: { en: "RAG assistant", ar: "مساعد RAG" },
        description: {
          en: "A document-grounded LLM assistant with embeddings, retrieval, citations and evaluation.",
          ar: "مساعد LLM يستند إلى مستنداتك عبر التضمينات والاسترجاع والاستشهادات والتقييم.",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Do I need advanced mathematics?",
          ar: "هل أحتاج رياضيات متقدمة؟",
        },
        a: {
          en: "You need high-school algebra and comfort with basic probability. We explain the rest intuitively before showing the equations.",
          ar: "تحتاج جبر الثانوية وارتياحًا مع أساسيات الاحتمالات. نشرح الباقي حدسيًا قبل عرض المعادلات.",
        },
      },
      {
        q: {
          en: "Will I train models from scratch?",
          ar: "هل سأدرّب نماذج من الصفر؟",
        },
        a: {
          en: "You implement core models yourself to understand them, then use pretrained models where that is the professional choice.",
          ar: "ستنفّذ النماذج الأساسية بنفسك لفهمها، ثم تستخدم نماذج مدربة مسبقًا حين يكون ذلك الخيار الاحترافي.",
        },
      },
      {
        q: {
          en: "Do I need a powerful GPU?",
          ar: "هل أحتاج كرت شاشة قويًا؟",
        },
        a: {
          en: "No. Lab work runs on Google Colab's free GPU tier; local training is kept laptop-friendly.",
          ar: "لا. تُنفَّذ التطبيقات على GPU المجاني في Google Colab، ويبقى التدريب المحلي مناسبًا للحواسيب العادية.",
        },
      },
      {
        q: {
          en: "Is this a data-science or an engineering course?",
          ar: "هل هذه دورة علم بيانات أم هندسة؟",
        },
        a: {
          en: "It is engineering-first: you learn the theory you need, then ship models and AI features as working software.",
          ar: "هي هندسية بالأساس: تتعلم النظرية اللازمة ثم تُطلق النماذج وميزات الذكاء الاصطناعي كبرمجيات تعمل.",
        },
      },
      {
        q: {
          en: "What should I build before joining?",
          ar: "ماذا ينبغي أن أكون قد بنيته قبل الانضمام؟",
        },
        a: {
          en: "A small Python project is recommended — a script, scraper or simple API — so the language is not new.",
          ar: "يُفضَّل مشروع Python صغير — سكربت أو كاشط أو API بسيطة — حتى لا تكون اللغة جديدة عليك.",
        },
      },
    ],
  },
  {
    id: "software-engineering",
    slug: "software-engineering",
    icon: "Blocks",
    level: "intermediate",
    title: {
      en: "Software Engineering",
      ar: "هندسة البرمجيات",
    },
    shortDescription: {
      en: "Think and design like an engineer: design patterns, architecture, requirements, testing and production-ready code.",
      ar: "تعلّم تفكّر وتصمّم زي المهندس: أنماط التصميم والمعمارية وإدارة المشاريع وتجهيز الكود للإنتاج.",
    },
    fullDescription: {
      en: "Writing code is the easy part; engineering it is the skill that separates juniors from leads. Over 10 weeks you will study the principles behind maintainable systems — SOLID, composition, design patterns and clean boundaries — then apply them to real refactoring and architecture exercises. You will practise requirements analysis and UML, architecture decision records, Git workflows, code review, the testing pyramid and Agile delivery. The course is language-agnostic and uses examples from TypeScript, C# and PHP so you can apply it to any stack.",
      ar: "كتابة الكود هي الجزء السهل، أما هندسته فهي المهارة التي تفصل المبتدئ عن القائد. على مدى 10 أسابيع ستدرس المبادئ خلف الأنظمة القابلة للصيانة — SOLID والتركيب وأنماط التصميم والحدود النظيفة — ثم تطبّقها في تمارين إعادة هيكلة ومعمارية حقيقية. ستتدرب على تحليل المتطلبات وUML وسجلات قرارات المعمارية وسير عمل Git ومراجعة الكود وهرم الاختبارات والتسليم الرشيق. الدورة مستقلة عن اللغة وتستخدم أمثلة من TypeScript وC# وPHP لتطبقها على أي تقنية.",
    },
    bullets: [
      { en: "Design patterns & SOLID", ar: "Design Patterns وSOLID" },
      { en: "Requirements analysis & UML", ar: "تحليل المتطلبات وUML" },
      { en: "Git, testing & Agile", ar: "Git وTesting وAgile" },
    ],
    duration: { en: "10 weeks", ar: "10 أسابيع" },
    schedule: { en: "2 sessions/week", ar: "مرتان/أسبوع" },
    hoursTotal: { en: "80 training hours", ar: "80 ساعة تدريبية" },
    language: {
      en: "Arabic with English technical terms",
      ar: "العربية بمصطلحات تقنية إنجليزية",
    },
    price: { en: "Available on request", ar: "يُحدد عند التواصل" },
    nextBatchDate: { en: "January 2027", ar: "يناير 2027" },
    outcomes: [
      {
        en: "Apply SOLID and composition to reduce coupling and duplication.",
        ar: "تطبيق SOLID والتركيب لتقليل الترابط والتكرار.",
      },
      {
        en: "Choose and implement the right design pattern for a problem.",
        ar: "اختيار نمط التصميم المناسب لمشكلة ما وتنفيذه.",
      },
      {
        en: "Turn vague requests into clear requirements and user stories.",
        ar: "تحويل الطلبات الغامضة إلى متطلبات وقصص مستخدم واضحة.",
      },
      {
        en: "Model systems with UML and document architecture decisions.",
        ar: "نمذجة الأنظمة بـ UML وتوثيق قرارات المعمارية.",
      },
      {
        en: "Use Git workflows, branches and reviews like a professional team.",
        ar: "استخدام سير عمل Git والفروع والمراجعات كفريق محترف.",
      },
      {
        en: "Build a testing strategy across unit, integration and end-to-end layers.",
        ar: "بناء استراتيجية اختبار عبر طبقات الوحدة والتكامل والنهاية للنهاية.",
      },
      {
        en: "Plan and deliver work in Agile sprints with clear acceptance criteria.",
        ar: "تخطيط وتنفيذ العمل في سبرنتات رشيقة بمعايير قبول واضحة.",
      },
      {
        en: "Refactor a legacy module safely and present the before/after trade-offs.",
        ar: "إعادة هيكلة وحدة قديمة بأمان وعرض مقايضات قبل وبعد.",
      },
    ],
    requirements: [
      {
        en: "At least six months of hands-on programming in any language.",
        ar: "ستة أشهر على الأقل من البرمجة العملية بأي لغة.",
      },
      {
        en: "A laptop and a GitHub account.",
        ar: "حاسوب محمول وحساب GitHub.",
      },
      {
        en: "Around 6–8 hours per week including readings and exercises.",
        ar: "نحو 6–8 ساعات أسبوعيًا شاملة القراءات والتمارين.",
      },
      {
        en: "A project or codebase you can use for the refactoring track.",
        ar: "مشروع أو قاعدة كود يمكنك استخدامها في مسار إعادة الهيكلة.",
      },
    ],
    audience: [
      {
        en: "Junior and mid-level developers aiming for senior tracks.",
        ar: "المطورون المبتدئون والمتوسطون الساعون إلى مسارات قيادية.",
      },
      {
        en: "Team leads who want a shared engineering vocabulary with their teams.",
        ar: "قادة الفرق الراغبون في مفردات هندسية مشتركة مع فرقهم.",
      },
      {
        en: "Computer-science students preparing for technical interviews and design rounds.",
        ar: "طلاب علوم الحاسب المستعدون للمقابلات التقنية وجولات التصميم.",
      },
      {
        en: "Freelancers who need to deliver maintainable code, not one-off scripts.",
        ar: "المستقلون الذين يحتاجون تسليم كود قابل للصيانة لا سكربتات مؤقتة.",
      },
    ],
    curriculum: [
      {
        title: {
          en: "Module 1 · Design principles and patterns",
          ar: "الوحدة 1 · مبادئ التصميم والأنماط",
        },
        duration: { en: "2 weeks", ar: "أسبوعان" },
        lessons: [
          {
            en: "SOLID, cohesion and coupling in practice",
            ar: "SOLID والتماسك والترابط عمليًا",
          },
          {
            en: "Creational and structural patterns",
            ar: "أنماط الإنشاء والبنية",
          },
          {
            en: "Behavioural patterns and when not to use them",
            ar: "الأنماط السلوكية ومتى نتجنبها",
          },
        ],
      },
      {
        title: {
          en: "Module 2 · Requirements and modelling",
          ar: "الوحدة 2 · المتطلبات والنمذجة",
        },
        duration: { en: "2 weeks", ar: "أسبوعان" },
        lessons: [
          {
            en: "Stakeholders, functional and non-functional requirements",
            ar: "أصحاب المصلحة والمتطلبات الوظيفية وغير الوظيفية",
          },
          {
            en: "User stories, acceptance criteria and estimation",
            ar: "قصص المستخدم ومعايير القبول والتقدير",
          },
          {
            en: "UML: use case, class and sequence diagrams",
            ar: "UML: مخططات حالات الاستخدام والكلاسات والتسلسل",
          },
        ],
      },
      {
        title: {
          en: "Module 3 · Architecture and documentation",
          ar: "الوحدة 3 · المعمارية والتوثيق",
        },
        duration: { en: "2 weeks", ar: "أسبوعان" },
        lessons: [
          {
            en: "Layered, hexagonal and modular architectures",
            ar: "المعماريات الطبقية والسداسية والوحداتية",
          },
          {
            en: "APIs, boundaries and dependency direction",
            ar: "الواجهات والحدود واتجاه التبعيات",
          },
          {
            en: "Architecture decision records and diagrams that age well",
            ar: "سجلات قرارات المعمارية والمخططات التي تصمد مع الوقت",
          },
        ],
      },
      {
        title: {
          en: "Module 4 · Git, quality and testing",
          ar: "الوحدة 4 · Git والجودة والاختبار",
        },
        duration: { en: "2 weeks", ar: "أسبوعان" },
        lessons: [
          {
            en: "Branching strategies, rebases and pull requests",
            ar: "استراتيجيات الفروع والـ rebase وطلبات الدمج",
          },
          {
            en: "Code review that improves instead of nitpicks",
            ar: "مراجعة كود تحسّن العمل بدل التنقيط",
          },
          {
            en: "The testing pyramid and testable design",
            ar: "هرم الاختبارات والتصميم القابل للاختبار",
          },
          {
            en: "CI pipelines and static analysis",
            ar: "خطوط CI والتحليل الساكن",
          },
        ],
      },
      {
        title: {
          en: "Module 5 · Agile delivery and capstone",
          ar: "الوحدة 5 · التسليم الرشيق ومشروع التخرج",
        },
        duration: { en: "2 weeks", ar: "أسبوعان" },
        lessons: [
          {
            en: "Scrum ceremonies, backlog and sprint planning",
            ar: "طقوس Scrum ومخزون العمل وتخطيط السبرنت",
          },
          {
            en: "Refactoring a legacy module with tests as a safety net",
            ar: "إعادة هيكلة وحدة قديمة والاختبارات شبكة أمان",
          },
          {
            en: "Capstone review: architecture, code and delivery demo",
            ar: "مراجعة التخرج: المعمارية والكود وعرض التسليم",
          },
        ],
      },
    ],
    tools: [
      "Git",
      "GitHub",
      "UML",
      "draw.io",
      "Jira",
      "Trello",
      "xUnit",
      "Jest",
      "GitHub Actions",
      "Docker",
      "Notion",
    ],
    projects: [
      {
        title: { en: "Legacy refactoring case", ar: "حالة إعادة هيكلة قديمة" },
        description: {
          en: "Refactor a tangled module into tested, documented services with measured before/after metrics.",
          ar: "إعادة هيكلة وحدة متشابكة إلى خدمات مختبَرة وموثقة مع مقاييس قبل وبعد.",
        },
      },
      {
        title: { en: "Architecture blueprint", ar: "مخطط معمارية" },
        description: {
          en: "A complete design package for a product: requirements, UML, boundaries, ADRs and a risk register.",
          ar: "حزمة تصميم كاملة لمنتج: متطلبات وUML وحدود وسجلات قرارات وسجل مخاطر.",
        },
      },
      {
        title: { en: "Agile team simulation", ar: "محاكاة فريق رشيق" },
        description: {
          en: "Two sprints delivered as a team with backlog grooming, reviews, CI and a retrospective.",
          ar: "سبرنتان يُسلَّمان كفريق مع ترتيب المخزون والمراجعات وCI وجلسة استرجاع.",
        },
      },
    ],
    faq: [
      {
        q: {
          en: "Is this a coding course?",
          ar: "هل هذه دورة برمجة؟",
        },
        a: {
          en: "No — it assumes you already code and focuses on design, quality, process and delivery skills.",
          ar: "لا — تفترض أنك تعرف البرمجة بالفعل وتركّز على التصميم والجودة والعملية ومهارات التسليم.",
        },
      },
      {
        q: {
          en: "Which language are the examples in?",
          ar: "بأي لغة أمثلة الدورة؟",
        },
        a: {
          en: "Mostly TypeScript and C#, with PHP comparisons. The principles transfer to any stack.",
          ar: "غالبًا TypeScript وC# مع مقارنات بـ PHP. المبادئ قابلة للتطبيق على أي تقنية.",
        },
      },
      {
        q: {
          en: "Will this help with technical interviews?",
          ar: "هل ستساعدني في المقابلات التقنية؟",
        },
        a: {
          en: "Yes. The requirements and architecture modules are built around the design discussions common in senior interviews.",
          ar: "نعم. وحدتا المتطلبات والمعمارية مبنيتان حول نقاشات التصميم الشائعة في مقابلات المستويات الأعلى.",
        },
      },
      {
        q: {
          en: "Do I need to bring a team?",
          ar: "هل أحتاج إحضار فريق معي؟",
        },
        a: {
          en: "No. The Agile simulation forms teams within the cohort.",
          ar: "لا. محاكاة Agile تشكّل الفرق داخل الدفعة نفسها.",
        },
      },
      {
        q: {
          en: "Is a certificate included?",
          ar: "هل تشمل شهادة؟",
        },
        a: {
          en: "Yes, after completing the capstone and the two sprint reviews.",
          ar: "نعم، بعد إتمام مشروع التخرج ومراجعتي السبرنت.",
        },
      },
    ],
  },
];

/** Look up a track by its URL slug (used by the static detail route). */
export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find((course) => course.slug === slug);
}
