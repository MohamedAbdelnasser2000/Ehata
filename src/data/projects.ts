import type { Project } from "@/data/types";

export const PROJECTS: Project[] = [
  {
    "id": "abo3mo-delivery",
    "title": { "en": "Abo3mo Delivery Platform", "ar": "منصة أبو عمو للتوصيل" },
    "category": "web-apps",
    "featured": false,
    "coverImage": "/images/projects/abo3mo.svg",
    "summary": {
      "en": "An all-in-one delivery and dispatch management platform that unifies merchant order intake, automated driver routing, real-time live map tracking, and automated cash-on-delivery (COD) financial reconciliation.",
      "ar": "منصة تشغيل لوجستية متكاملة لإدارة التوصيل والتوزيع تربط استقبال طلبات المتاجر، والتوزيع الذكي على المناديب، والتتبع المباشر للخرائط، والتحصيل المالي الدقيق لمدفوعات الدفع عند الاستلام."
    },
    "caseStudy": {
      "overview": {
        "en": "An end-to-end commercial delivery operations platform designed for logistics businesses, courier fleets, and on-demand delivery services. It eliminates manual coordination by connecting dispatchers, couriers, merchants, and end customers in a unified, synchronized operational environment.",
        "ar": "منصة عمليات لوجستية متكاملة مصممة لشركات التوصيل وأساطيل الشحن السريع والخدمات عند الطلب. تقضي المنصة على فوضى التنسيق اليدوي عبر ربط غرف التحكم، والمناديب، والمتاجر، والعملاء النهائيين في بيئة تشغيلية موحدة ومتزامنة لحظياً."
      },
      "problem": {
        "en": "Delivery companies face costly operational bottlenecks when relying on phone calls, WhatsApp messages, and spreadsheets to coordinate orders. Common issues include delayed driver dispatch, lack of visibility into delivery progress, lost packages, inaccurate cash collection from drivers, and constant customer inquiry calls asking 'Where is my order?'.",
        "ar": "تواجه شركات التوصيل اختناقات تشغيلية مكلفة عند الاعتماد على الاتصالات الهاتفية ورسائل واتساب والجداول اليدوية لتنسيق الطلبات؛ مما يؤدي إلى تأخر إسناد الطلبات، وغياب الرؤية المباشرة لموقع المندوب، وضياع الشحنات، وأخطاء تحصيل المبالغ النقدية، وتراكم اتصالات العملاء للاستفسار عن موعد وصول طلباتهم."
      },
      "solution": {
        "en": "The system provides an automated dispatch control room, a dedicated driver mobile app with live GPS tracking, a merchant dashboard for instant bulk order submission, and automated SMS/web tracking links for end customers. Cash collections, driver commissions, and delivery performance metrics are computed automatically in real time.",
        "ar": "يقدم النظام غرفة تحكم رقمية مؤتمتة لإدارة التوزيع، وتطبيقاً ذكياً للمناديب مع تتبع GPS المباشر، ولوحة تحكم للمتاجر لرفع وتتبع الشحنات جماعياً، وروابط تتبع فورية للعملاء عبر الرسائل. وتُحسب التحصيلات النقدية وعمولات المناديب وتقارير الأداء آلياً دون أي تدخل بشري."
      },
      "features": [
        {
          "title": {
            "en": "Automated Dispatch & Intelligent Driver Routing",
            "ar": "غرفة التوزيع الذكي والتوجيه الآلي للمناديب"
          },
          "description": {
            "en": "Instantly routes and assigns incoming delivery orders to the nearest available courier based on proximity, current payload capacity, and delivery zone boundaries, drastically cutting delivery transit times.",
            "ar": "إسناد وتوزيع الطلبات الواردة فورياً وبشكل تلقائي على المندوب الأنسب جغرافياً بالاعتماد على الموقع الفعلي وحدود المناطق وسعة الحمولة، مما يقلص زمن التوصيل بشكل قياسي."
          }
        },
        {
          "title": {
            "en": "Courier Mobile Workflow & Proof of Delivery (POD)",
            "ar": "تطبيق المناديب وإثبات التسليم الرقمي (POD)"
          },
          "description": {
            "en": "Equips drivers with a dedicated mobile application to accept deliveries, view optimized turn-by-turn navigation, and collect proof of delivery via electronic customer signature, OTP confirmation, and package photos.",
            "ar": "تطبيق متكامل للمندوب يتيح استلام المهام، والتنقل بالخرائط الذكية، وتوثيق استلام وتسليم الشحنات عبر التوقيع الإلكتروني للعميل، ورمز التحقق OTP، والتقاط صور إثبات التسليم."
          }
        },
        {
          "title": {
            "en": "Live Customer Map Tracking & Instant Notifications",
            "ar": "تتبع العميل المباشر على الخريطة والتنبيهات الفورية"
          },
          "description": {
            "en": "Sends real-time SMS and notification tracking links to recipients, allowing them to watch the courier approaching on a live map with accurate ETA estimations and direct driver call/chat options.",
            "ar": "إرسال رابط تتبع فوري للعميل عبر الرسائل يتيح له مشاهدة حركة المندوب مباشرة على الخريطة مع وقت الوصول المتوقع وخيارات الاتصال السريع أو المراسلة المباشرة."
          }
        },
        {
          "title": {
            "en": "Cash-on-Delivery (COD) & Courier Wallet Settlement",
            "ar": "التحصيل المالي للدفع عند الاستلام ومطابقة محافظ المناديب"
          },
          "description": {
            "en": "Tracks every cent collected by drivers in the field, enforces end-of-shift cash drawer reconciliations, flags discrepancies, and automates courier payout and commission calculations.",
            "ar": "حصر ومتابعة كل المبالغ المحصلة نقداً عبر المناديب، ومطابقة العهد والخزينة اليومية عند إقفال الوردية، وكشف الفروقات، وحساب عمولات ومستحقات المناديب تلقائياً."
          }
        },
        {
          "title": {
            "en": "Merchant Self-Service Portal & Bulk Upload",
            "ar": "بوابة المتاجر والشحنات الجماعية الموحدة"
          },
          "description": {
            "en": "Enables business merchants to bulk-upload delivery orders via Excel or API, print unified shipping labels and barcodes, track batch shipment progress, and review settlement statements.",
            "ar": "تمكين المتاجر والشركات الشريكة من رفع مئات الطلبات بملف Excel واحد أو الربط المباشر، وطباعة بوالص الشحن والباركود، ومتابعة الشحنات، وتحميل كشوف الحسابات المالية."
          }
        },
        {
          "title": {
            "en": "Digital Payments & Integrated Invoicing",
            "ar": "بوابات الدفع الإلكتروني والفوترة المتكاملة"
          },
          "description": {
            "en": "Supports online card payments and digital wallets, generating tax-compliant electronic receipts and invoices for each completed order.",
            "ar": "دعم بوابات الدفع الإلكتروني بالبطاقات والمحافظ الرقمية، مع إصدار فواتير وسندات قبض إلكترونية ضريبية معتمدة لكل طلب مكتمل."
          }
        },
        {
          "title": {
            "en": "Operational Analytics & Courier Performance KPIs",
            "ar": "لوحة مؤشرات الأداء والتقارير التشغيلية المعمقة"
          },
          "description": {
            "en": "Delivers executive dashboards on average delivery duration, on-time delivery rates, courier efficiency ratings, peak demand hours, and delivery density heatmaps across geographical zones.",
            "ar": "مؤشرات تحليلية متقدمة لقياس متوسط زمن التوصيل، ونسبة الالتزام بالمواعيد، وإنتاجية كل مندوب، وساعات الذروة، والخرائط الحرارية لتوزيع الطلبات حسب الأحياء."
          }
        }
      ],
      "audience": [
        {
          "en": "Courier and delivery service companies",
          "ar": "شركات الشحن السريع والتوصيل التجاري"
        },
        {
          "en": "Fleet owners and dispatch operations managers",
          "ar": "أصحاب أساطيل النقل ومديرو غرف العمليات اللوجستية"
        },
        {
          "en": "E-commerce retailers managing in-house delivery",
          "ar": "المتاجر الإلكترونية والمطاعم ذات التوصيل الذاتي"
        },
        {
          "en": "Third-party logistics (3PL) fulfillment providers",
          "ar": "مقدمو الخدمات اللوجستية والتخزين والتوزيع (3PL)"
        }
      ],
      "architecture": {
        "en": "Engineered with ASP.NET Core 9 modular architecture, Entity Framework Core with SQL Server, ASP.NET Core Identity security, SignalR real-time communications for live courier geolocation, and a Flutter cross-platform driver mobile app.",
        "ar": "مبني وفق بنية ASP.NET Core 9 المعيارية، مع Entity Framework Core وقاعدة بيانات SQL Server، وأمان ASP.NET Core Identity، واتصالات SignalR الحية للبث المباشر للمواقع، وتطبيق مناديب هجين بـ Flutter."
      }
    },
    "tech": [
      ".NET 9",
      "ASP.NET Core",
      "Entity Framework Core",
      "Flutter",
      "SignalR",
      "Stripe",
      "SQL Server"
    ]
  },
  {
    "id": "enterprise-erp",
    "title": { "en": "Enterprise ERP Platform", "ar": "منصة تخطيط موارد المؤسسات" },
    "category": "web-apps",
    "featured": true,
    "coverImage": "/images/projects/enterprise-erp.svg",
    "summary": {
      "en": "A unified enterprise resource planning platform that integrates human resources, general ledger accounting, procurement, multi-warehouse inventory, and executive dashboards into a centralized management system.",
      "ar": "منظومة تخطيط موارد المؤسسات الشاملة (ERP) التي توحد إدارة الموارد البشرية، والحسابات العامة، والمشتريات والموردين، والمخازن المتعددة، ولوحات القيادة التنفيذية في نظام مركزي متكامل."
    },
    "caseStudy": {
      "overview": {
        "en": "A comprehensive enterprise operations system engineered to replace disconnected departmental software with a single source of organizational truth. Designed to manage end-to-end corporate workflows across HR, finance, purchasing, treasury, and internal audits with role-based access control.",
        "ar": "منظومة إدارية ومحاسبية مؤسسية متطورة صُممت لتحل محل الأنظمة المنعزلة وتوفر مصدراً موحداً لبيانات المؤسسة. تدير كافة مسارات العمل من شؤون الموظفين والرواتب، إلى الحسابات العامة، والمشتريات، والخزينة، والرقابة الداخلية بدقة متناهية."
      },
      "problem": {
        "en": "Growing organizations struggle with fragmented data when HR operates in one system, accounting in spreadsheets, and purchasing in manual paperwork. This causes duplicated data entry, payroll calculation errors, untracked procurement costs, delayed financial reporting, and significant vulnerabilities to financial leaks.",
        "ar": "تعاني المؤسسات الكبرى من تشتت البيانات عندما تعمل شؤون الموظفين بنظام منفصل، والمحاسبة بملفات إكسل، والمشتريات بمذكرات ورقية؛ مما يؤدي إلى تكرار إدخال البيانات، وأخطاء حساب الرواتب، وصعوبة تتبع تكاليف المشتريات، وتأخر إعداد الميزانيات، وثغرات في الرقابة المالية."
      },
      "solution": {
        "en": "The ERP integrates all operational modules into an interconnected data structure. Every purchase order automatically updates inventory levels and posts to accounts payable; every payroll approval generates balanced accounting ledger entries, giving leadership real-time financial and operational visibility across all company branches.",
        "ar": "توحد المنظومة كافة قطاعات الأعمال في هيكل بيانات مترابط. أي أمر شراء يُحدّث المخزون ويُنشئ قيداً في حسابات الموردين تلقائياً، وأي اعتماد لمسير الرواتب يُسجل قيود المحاسبة تلقائياً، مما يمنح الإدارة العليا رؤية فورية ودقيقة للوضع المالي والتشغيلي لجميع الفروع."
      },
      "features": [
        {
          "title": {
            "en": "Human Resources, Attendance & Automated Payroll",
            "ar": "شؤون الموظفين، الحضور الذكي ومسيرات الرواتب الآلية"
          },
          "description": {
            "en": "Maintains complete employee profiles, tracks attendance and overtime, manages leaves and vacations, and automatically calculates end-of-month payroll with tax and insurance deductions.",
            "ar": "إدارة شاملة لسجلات الموظفين، وتتبع الحضور والانصراف والعمل الإضافي، وإدارة الإجازات، مع احتساب مسيرات الرواتب والبدلات والاستقطاعات التأمينية والضريبية آلياً."
          }
        },
        {
          "title": {
            "en": "General Ledger & Multi-Entity Chart of Accounts",
            "ar": "شجرة الحسابات العامة والقيود ودفاتر الأستاذ"
          },
          "description": {
            "en": "A robust multi-tier chart of accounts supporting multi-currency transactions, automatic journal vouchers from operational modules, cost center allocations, and trial balances.",
            "ar": "دليل محاسبي مرن متعدد المستويات يدعم العملات المتعددة، وتوليد القيود اليومية التلقائية من مسارات العمليات، وتوزيع التكاليف على مراكز التكلفة، وإصدار ميزان المراجعة."
          }
        },
        {
          "title": {
            "en": "Procurement, Purchase Orders & Supplier Management",
            "ar": "إدارة المشتريات، أوامر التوريد وحسابات الموردين"
          },
          "description": {
            "en": "Manages the entire purchasing lifecycle from purchase requisitions and quotation comparisons to approved purchase orders, goods receipt notes (GRN), and supplier invoice settlement.",
            "ar": "إدارة دورة الشراء بالكامل بدءاً من طلب الشراء الداخلي، ومقارنة عروض الأسعار، وإصدار أوامر التوريد، ومحاضر فحص واستلام البضائع، ومطابقة وسداد فواتير الموردين."
          }
        },
        {
          "title": {
            "en": "Multi-Branch Treasury & Cash Flow Management",
            "ar": "إدارة الخزائن المتعددة والبنوك والتدفقات النقدية"
          },
          "description": {
            "en": "Controls multi-branch petty cash boxes, bank accounts, bank reconciliations, check registers, and projected cash flow statements to prevent liquidity shortages.",
            "ar": "رقابة تامة على الخزائن النقدية للفروع، وحسابات البنوك، والمطابقات البنكية، وحركات الشيكات والتحويلات، ومتابعة التدفق النقدي الفعلي والتوقعي لتفادي عجز السيولة."
          }
        },
        {
          "title": {
            "en": "Automated Financial Statements & Tax Compliance",
            "ar": "القوائم المالية والتقارير الضريبية الختامية"
          },
          "description": {
            "en": "Instant generation of Balance Sheets, Profit & Loss (P&L) statements, Cash Flow statements, and detailed VAT/tax declarations compliant with official accounting standards.",
            "ar": "إصدار فوري لميزانية العمومية، وقائمة الدخل والأرباح والخسائر، وقائمة التدفقات النقدية، وإقرارات ضريبة القيمة المضافة المتوافقة مع متطلبات الهيئات الرسمية."
          }
        },
        {
          "title": {
            "en": "Granular Role-Based Access Control & Audit Logs",
            "ar": "صلاحيات الوصول الدقيقة وسجل التدقيق والرقابة"
          },
          "description": {
            "en": "Customizable permission matrix per department and user role, enforcing dual-authorization approval chains and recording every create, edit, or delete action with timestamps.",
            "ar": "مصفوفة صلاحيات متقدمة بحسب الدور الوظيفي، وتطبيق سلاسل الموافقات المزدوجة للمدفوعات والشراء، مع تسجيل تدقيق كامل لكل حركة تعديل أو حذف بالوقت والمستخدم."
          }
        },
        {
          "title": {
            "en": "Executive Performance Dashboards & BI Analytics",
            "ar": "لوحات القيادة التنفيذية والتحليلات البيانية الذكية"
          },
          "description": {
            "en": "Interactive charts visualizing revenue trends, departmental expense breakdowns, inventory turnover, and employee productivity for data-driven strategic planning.",
            "ar": "رسوم بيانية تفاعلية تعرض مؤشرات نمو الإيرادات، وتحليل المصروفات التشغيلية لكل قسم، ومعدلات دوران المخزون، وإنتاجية الموظفين لدعم اتخاذ القرارات الاستراتيجية."
          }
        }
      ],
      "audience": [
        {
          "en": "Enterprise CEOs, CFOs and executive directors",
          "ar": "الرؤساء التنفيذيون، المديرون الماليون ومجالس الإدارة"
        },
        {
          "en": "HR managers and talent operations specialists",
          "ar": "مديرو الموارد البشرية ومسؤولو شؤون الموظفين والرواتب"
        },
        {
          "en": "Chief accountants and financial controllers",
          "ar": "رؤساء الحسابات والمراجعون والمدققون الماليون"
        },
        {
          "en": "Procurement directors and supply chain managers",
          "ar": "مديرو المشتريات وسلاسل الإمداد ومسؤولو المخازن"
        }
      ],
      "architecture": {
        "en": "Layered enterprise .NET architecture with dedicated Domain, Core, Application, Web and Automated Test projects. Built on Entity Framework Core, SQL Server, and modular Area-based design.",
        "ar": "بنية .NET مؤسسية متعددة الطبقات تفصل نطاق العمل ونواة التطبيق وواجهات الويب والاختبارات الآلية. تعتمد على Entity Framework Core وSQL Server وتصميم المناطق البرمجية المعيارية."
      }
    },
    "tech": [
      ".NET",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "C#",
      "Clean Architecture"
    ]
  },
  {
    "id": "dental-clinic",
    "title": { "en": "Dental Clinic Management System", "ar": "نظام إدارة عيادة الأسنان" },
    "category": "web-apps",
    "featured": true,
    "coverImage": "/images/projects/dental-clinic.svg",
    "summary": {
      "en": "A specialized clinical and administrative management platform for dental practices, featuring interactive tooth charts, smart appointment booking, electronic prescriptions, installment billing, and consumable inventory.",
      "ar": "نظام إداري وطبي متكامل لإدارة مراكز وعيادات الأسنان، يشمل مخطط الأسنان التفاعلي، وجدولة المواعيد الذكية، والوصفات الطبية الرقمية، والفوترة والأقساط، ومخزون المواد الطبية."
    },
    "caseStudy": {
      "overview": {
        "en": "A comprehensive digital clinic management system crafted specifically for dental centers and private practices. It integrates clinical patient treatment records with front-desk appointment scheduling, doctor commissions, dental laboratory orders, and financial billing into one effortless interface.",
        "ar": "نظام رقمي متكامل مصمم خصيصاً لمراكز وعيادات طب وجراحة الأسنان. يربط بين الملفات الطبية للمرضى وخطط العلاج، وحجوزات الاستقبال، وإدارة مختبرات ومعامل الأسنان، والفوترة والأقساط، وحساب نسب الأطباء في واجهة سلسة واحدة."
      },
      "problem": {
        "en": "Dental clinics struggle with fragmented paper records, lost patient histories, missed appointment follow-ups, confusion in tracking multi-stage treatment sessions (like root canals or orthodontics), chaotic material consumption tracking, and inaccurate doctor revenue commission calculations.",
        "ar": "تواجه عيادات الأسنان صعوبات كبيرة في إدارة الملفات الورقية المفقودة، وفوات مواعيد المتابعة، والارتباك في متابعة جلسات العلاج المتعددة (كعلاج الجذور والتقويم والزراعة)، وعدم ضبط استهلاك المواد الطبية الثمينة، وصعوبة احتساب نسب وعمولات أطباء العيادة بدقة."
      },
      "solution": {
        "en": "The platform delivers an interactive visual tooth chart (odontogram) where dentists click individual teeth to plan treatments and record procedures, an automated appointment book with SMS reminders, integrated installment payment plans, dental consumable stock control, and doctor commission tracking.",
        "ar": "يقدم النظام مخطط أسنان تفاعلي (Odontogram) يُمكّن الطبيب من النقر على السن وتسجيل الإجراء وخطة العلاج بصرياً، مع جدول مواعيد ذكي يرسل تذكيرات آلية بالرسائل، وخطط سداد بالأقساط لجلسات التقويم والزراعة، ومتابعة استهلاك المواد، وحساب أرباح الأطباء تلقائياً."
      },
      "features": [
        {
          "title": {
            "en": "Interactive Visual Odontogram & Treatment Planning",
            "ar": "مخطط الأسنان التفاعلي (Odontogram) وخطط العلاج"
          },
          "description": {
            "en": "Interactive adult and pediatric 32/20 tooth chart allowing clinicians to select teeth and surfaces, log diagnoses (cavities, crowns, extractions), and create multi-session treatment plans with visual color codes.",
            "ar": "رسم بياني تفاعلي لأسنان البالغين والأطفال يتيح للطبيب تحديد الأسنان والأسطح وتسجيل التشخيص (تسوس، حشو، تركيبات، زراعة) وربطها بخطط علاجية متدرجة عبر رموز لونية واضحة."
          }
        },
        {
          "title": {
            "en": "Electronic Patient Medical & Dental Records (EMR)",
            "ar": "الملف الطبي الرقمي الشامل للمريض"
          },
          "description": {
            "en": "Maintains full medical history, allergies, chronic conditions, dental X-ray/photo attachments, and chronological logs of every past procedure and attended visit.",
            "ar": "سجل رقمي يحفظ التاريخ المرضي والحساسية والأمراض المزمنة، مع إرفاق صور الأشعة السينية والفوتوغرافية، وأرشيف تاريخي كامل لكافة الجلسات والإجراءات السابقة."
          }
        },
        {
          "title": {
            "en": "Smart Appointment Scheduling & SMS Reminders",
            "ar": "جدولة المواعيد الذكية والتذكير التلقائي"
          },
          "description": {
            "en": "Multi-chair and multi-doctor calendar with drag-and-drop booking, waiting room queue status, appointment duration presets, and automated SMS/WhatsApp appointment reminders.",
            "ar": "تقويم ذكي متعدد الأطباء وكراسي العلاج، يدعم السحب والإفلات، وإدارة طوابير الانتظار بالاستقبال، وإرسال رسائل تذكير تلقائية للمرضى لتقليل الغياب عن المواعيد."
          }
        },
        {
          "title": {
            "en": "E-Prescriptions & Clinical Medication Notes",
            "ar": "الوصفات الطبية الإلكترونية المعتمدة"
          },
          "description": {
            "en": "Quick prescription generation with pre-configured dental drug templates, dosage guidelines, allergy warnings, and direct PDF printing or digital sharing with patients.",
            "ar": "إصدار الوصفات الدوائية بسرعة عبر قوالب أدوية الأسنان الجاهزة، مع تحديد الجرعات وتنبيهات الحساسية الدوائية، وطباعتها برأسية العيادة الرسمية فوراً."
          }
        },
        {
          "title": {
            "en": "Treatment Invoicing, Installment Plans & Receipts",
            "ar": "الفوترة المتقدمة، سندات القبض وخطط الأقساط"
          },
          "description": {
            "en": "Itemized procedure invoices, down-payment tracking, installment schedule management for long-term treatments (orthodontics/implants), and tax-compliant receipts.",
            "ar": "إصدار فواتير الجلسات المفصلة، وإدارة خطط السداد بالأقساط لعلاجات التقويم والزراعة، وتسجيل الدفعات النقدية والشبكة وإصدار سندات القبض الضريبية."
          }
        },
        {
          "title": {
            "en": "Dental Lab Orders & External Fabrication Tracking",
            "ar": "إدارة ومتابعة طلبيات معامل ومختبرات الأسنان"
          },
          "description": {
            "en": "Tracks outgoing lab orders for crowns, bridges, and prosthetics with required shade, due dates, lab status tracking, and automated lab expense accounting.",
            "ar": "متابعة أوامر عمل المعامل لتركيبات الأسنان والجسور والعدسات متضمنة درجة اللون المطلوبة وتاريخ التسليم ومتابعة التكاليف والمستحقات الخاصة بكل مختبر."
          }
        },
        {
          "title": {
            "en": "Doctor Commission Calculation & Clinic Analytics",
            "ar": "حساب نسب وعمولات الأطباء والتقارير المالية"
          },
          "description": {
            "en": "Automatically calculates each dentist's variable or fixed percentage cuts per procedure or collected cash, generating daily revenue, lab costs, and net clinic profit reports.",
            "ar": "احتساب تلقائي لنسب وعمولات كل طبيب بناءً على الإجراءات المنجزة أو المبالغ المحصلة، مع تقارير يومية لإيرادات العيادة وتكاليف المواد وصافي الأرباح."
          }
        }
      ],
      "audience": [
        {
          "en": "Dental clinic owners and dental group directors",
          "ar": "أصحاب عيادات ومراكز ومجمعات طب الأسنان"
        },
        {
          "en": "Dentists, orthodontists and dental surgeons",
          "ar": "أطباء الأسنان، وأخصائيو التقويم والتركيبات وجراحة الفم"
        },
        {
          "en": "Clinic receptionists and patient care coordinators",
          "ar": "موظفو الاستقبال ومنسقو رعاية المرضى وحجز المواعيد"
        },
        {
          "en": "Dental assistants and clinic inventory managers",
          "ar": "مساعدو أطباء الأسنان ومسؤولو تعقيم وتخزين المواد الطبية"
        }
      ],
      "architecture": {
        "en": "ASP.NET Core MVC application with Entity Framework Core, SQL Server, and custom domain controllers separating appointment booking, clinical charts, lab orders, and financial workflows.",
        "ar": "تطبيق ASP.NET Core MVC مع Entity Framework Core وSQL Server ومتحكمات متخصصة تفصل الحجوزات، والملفات الطبية، وطلبيات المعامل، والعمليات المالية والمحاسبية."
      }
    },
    "tech": [
      "ASP.NET Core MVC",
      "Entity Framework Core",
      "SQL Server",
      "C#",
      "Chart.js",
      "Bootstrap"
    ]
  },
  {
    "id": "pharmacy-ims",
    "title": { "en": "Pharmacy Inventory & POS System", "ar": "نظام إدارة مخزون الصيدلية ونقاط البيع" },
    "category": "web-apps",
    "featured": true,
    "coverImage": "/images/projects/pharmacy-ims.svg",
    "summary": {
      "en": "A comprehensive pharmacy management and inventory control system with real-time multi-branch stock tracking, high-speed barcode POS checkout, automated expiry alerts, and supplier purchase orders.",
      "ar": "منظومة شاملة لإدارة الصيدليات ومستودعات الأدوية، تشمل نقاط البيع السريعة بالباركود، وتتبع المخزون متعدد الفروع، والإنذار المبكر لتواريخ الصلاحية، وأوامر الشراء للموردين."
    },
    "caseStudy": {
      "overview": {
        "en": "An integrated commercial pharmacy management solution designed to handle retail dispensing, multi-branch inventory movements, pharmaceutical expiry control, supplier purchasing, and drug interaction safety checks from a centralized interface.",
        "ar": "حل برمجي متكامل لإدارة الصيدليات ومنافذ بيع الأدوية، مصمم للتحكم الكامل في حركات البيع، والربط اللحظي بين الفروع، والتنبيه التلقائي للصلاحيات، وحسابات شركات الأدوية والموردين، وفحص التداخلات الدوائية بأعلى معايير الأمان."
      },
      "problem": {
        "en": "Pharmacies suffer catastrophic financial losses when medicines expire unnoticed on shelves, inventory counts between branches don't match, prescription dispensing is slow during peak hours, and supplier invoices are mismanaged without automatic reorder thresholds.",
        "ar": "تتكبد الصيدليات خسائر مالية فادحة بسبب انتهاء صلاحية الأدوية دون انتباه على الأرفف، وعدم تطابق أرصدة المخزون بين الفروع، وبطء شاشات الكاشير أثناء أوقات الذروة، والعجز المفاجئ في الأدوية الحيوية لغياب التنبيه بنقاط إعادة الطلب."
      },
      "solution": {
        "en": "The system provides an ultra-fast barcode POS cashier, batch-number and expiry date tracking with customizable color-coded early warnings, automated purchase orders triggered when items reach minimum stock levels, supplier statement auditing, and drug safety checking.",
        "ar": "يوفر النظام شاشة كاشير سريعة تدعم قارئ الباركود، وتتبعاً دقيقاً لأرقام التشغيلات (Batch Numbers) وتواريخ الصلاحية مع تنبيهات ملونة قبل أشهر من الانتهاء، وتوليداً آلياً لطلبيات الشراء عند وصول المخزون للحد الأدنى، مع مطابقة كشوف حسابات الموردين."
      },
      "features": [
        {
          "title": {
            "en": "High-Speed Barcode POS & Prescription Dispensing",
            "ar": "نقطة بيع سريعة (POS) تدعم الباركود وصرف الوصفات"
          },
          "description": {
            "en": "Rapid cashier checkout scanning product barcodes, retrieving alternative generic equivalents when out of stock, supporting multiple payment methods, and generating thermal receipts in seconds.",
            "ar": "شاشة كاشير فائقة السرعة تدعم قارئات الباركود والباركود الدولي، مع ميزة اقتراح البدائل الدوائية عند نفاد الصنف، وتعدد طرق الدفع وطباعة الفاتورة الحرارية بثوانٍ."
          }
        },
        {
          "title": {
            "en": "Multi-Branch Real-Time Inventory & Stock Transfers",
            "ar": "إدارة المخزون الموحد والتحويلات اللحظية بين الفروع"
          },
          "description": {
            "en": "Centralized stock ledger tracking on-hand quantities across all branches and warehouses, with streamlined inter-branch transfer requests, approvals, and dispatch verification.",
            "ar": "سجل مخزني موحد يعرض كميات الأدوية في كافة الفروع والمستودعات لحظياً، مع مسار عمل سلس لطلبات التحويل بين الفروع واعتمادها واستلامها دون أي تلاعب."
          }
        },
        {
          "title": {
            "en": "Automated Expiry Date Monitoring & Early Warning Alerts",
            "ar": "نظام الإنذار المبكر ومتابعة تواريخ انتهاء الصلاحية"
          },
          "description": {
            "en": "Tracks batch numbers and expiry dates per received lot, displaying actionable dashboards that flag items expiring within 30, 60, or 90 days to prioritize dispensing or supplier returns.",
            "ar": "تتبع دقيق لرقم التشغيلة وتاريخ الانتهاء لكل دفعة، مع لوحة تنبيهات ذكية تفرز الأدوية التي تنتهي خلال شهرين أو ثلاثة لتصريفها أولاً أو إرجاعها للمورد في الوقت المحدد."
          }
        },
        {
          "title": {
            "en": "Automated Reorder Points & Supplier Purchase Orders",
            "ar": "حدود إعادة الطلب الذكية وأوامر الشراء الآلية"
          },
          "description": {
            "en": "Automatically calculates daily consumption rates and generates draft purchase orders for suppliers as soon as any product drops below its pre-configured safety stock threshold.",
            "ar": "حساب معدلات الاستهلاك اليومي تلقائياً وإنشاء مسودات أوامر الشراء لشركات الأدوية والمستودعات فور انخفاض رصيد الدواء عن حد الأمان المحدد."
          }
        },
        {
          "title": {
            "en": "Drug-to-Drug Interaction & Dosage Safety Checks",
            "ar": "فحص التداخلات الدوائية وسلامة الجرعات"
          },
          "description": {
            "en": "Alerts pharmacists during checkout if two medicines on the same receipt interact adversely, ensuring patient safety and clinical adherence.",
            "ar": "نظام أمان طبي يُنبه الصيدلي فوراً عند مسح دوائين يتعارضان كيميائياً في نفس الفاتورة، لحماية المريض وتعزيز الثقة المهنية للصيدلية."
          }
        },
        {
          "title": {
            "en": "Supplier Accounting, Invoicing & Returns Management",
            "ar": "حسابات شركات الأدوية والموردين والمرتجعات"
          },
          "description": {
            "en": "Records supplier invoices, payment terms, debit/credit notes, discounts, and near-expiry returned goods manifests with clear outstanding balance summaries.",
            "ar": "إدارة فواتير شركات ومستودعات الأدوية، والآجل، وسندات الصرف، ومردودات المشتريات التالفة أو منتهية الصلاحية، مع كشوف حسابات دقيقة لكل مورد."
          }
        },
        {
          "title": {
            "en": "Shift Closures, Cash Reconciliations & Sales Reports",
            "ar": "إقفال الورديات ومطابقة الصندوق والتقارير التحليلية"
          },
          "description": {
            "en": "Blind shift handovers verifying physical cash drawer balances against logged sales, generating detailed reports on top-selling drugs, profit margins, and dead stock.",
            "ar": "إقفال ومطابقة ورديات الكاشير بدقة، ومقارنة النقدية الفعلية بالمبيعات المسجلة، مع تقارير تفصيلية للأصناف الأكثر مبيعاً، وهوامش الربح، والرواكد."
          }
        }
      ],
      "audience": [
        {
          "en": "Pharmacy chain owners and independent pharmacists",
          "ar": "ملاك سلاسل ومجموعات الصيدليات والصيادلة المستقلين"
        },
        {
          "en": "Branch managers and retail dispensing staff",
          "ar": "مديرو فروع الصيدليات وصيادلة البيع المباشر"
        },
        {
          "en": "Pharmaceutical warehouse supervisors",
          "ar": "مسؤولو المستودعات الطبية ومخازن الأدوية"
        },
        {
          "en": "Procurement and supplier account managers",
          "ar": "مسؤولو المشتريات والتعاقدات مع شركات الأدوية"
        }
      ],
      "architecture": {
        "en": "Built on ASP.NET Core with Entity Framework Core and SQL Server, leveraging optimized indexing for ultra-fast barcode searches, multi-branch tenancy, and transactional integrity for financial and stock operations.",
        "ar": "مبني على ASP.NET Core مع Entity Framework Core وSQL Server، مع فهارس محسنة للبحث الفوري في ملايين أكواد الباركود، وهيكلية متعددة الفروع، وعمليات محاسبية ومخزنية متزامنة ومحمية."
      }
    },
    "tech": [
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "C#",
      "BarcodeLib",
      "EPPlus"
    ]
  },
  {
    "id": "full-mark",
    "title": { "en": "Full Mark Education & E-Learning Platform", "ar": "منصة فول مارك للتعليم والتعلم الإلكتروني" },
    "category": "training",
    "featured": false,
    "coverImage": "/images/projects/full-mark.svg",
    "summary": {
      "en": "A comprehensive digital learning management platform offering multimedia course delivery, automated quizzes, student progress tracking, promotional bundles, and integrated payment gateways.",
      "ar": "منصة تعليم إلكتروني وإدارة تدريب شاملة تقدم مساقات تعليمية متعددة الوسائط، واختبارات مؤتمتة، ومتابعة دقيقة لتقدم الطلاب، وباقات ترويجية، وبوابات دفع إلكترونية متكاملة."
    },
    "caseStudy": {
      "overview": {
        "en": "An enterprise-grade educational ecosystem built to support academies, training centers, and educational institutions. It provides a complete digital environment for course publication, student enrollment, interactive testing, and commercial package sales.",
        "ar": "منظومة تعليمية متكاملة مصممة لدعم الأكاديميات ومراكز التدريب والمؤسسات التعليمية. توفر بيئة رقمية متكاملة لنشر المساقات، وتسجيل الطلاب، والتقييم الذكي، وإدارة الاشتراكات والمبيعات التعليمية بكفاءة عالية."
      },
      "problem": {
        "en": "Educational institutions struggle to scale when courses are distributed through unorganized links, payments are tracked manually via bank transfer screenshots, and there is no automated way to monitor student progress or prevent unauthorized content sharing.",
        "ar": "تواجه المؤسسات التعليمية صعوبة في التوسع عندما تُدار الدروس عبر روابط عشوائية، ويتم التحقق من الاشتراكات يدوياً عبر إيصالات التحويل البنكي، مع غياب آلية تتبع تقدم الطالب أو حماية المحتوى من المشاركة غير المصرح بها."
      },
      "solution": {
        "en": "The platform organizes content into structured modules, lectures, and resources, provides an automated checkout with instant course enrollment upon payment, delivers automated quizzes with instant grading, and equips instructors with rich student completion analytics.",
        "ar": "تنظم المنصة المحتوى التعليمي في مسارات ووحدات ومحاضرات منظمة، مع تفعيل فوري للاشتراك بمجرد الدفع الإلكتروني، وتوفير اختبارات آلية التقييم، وتزويد المدربين والإدارة بتقارير شاملة عن تفاعل ونسب إنجاز الطلاب."
      },
      "features": [
        {
          "title": {
            "en": "Structured Curriculum & Multimedia Lesson Delivery",
            "ar": "إدارة المناهج والدروس التفاعلية متعددة الوسائط"
          },
          "description": {
            "en": "Organizes courses into units, video lectures, downloadable PDF summaries, and interactive reading materials with progress checkmarks upon completion.",
            "ar": "تنظيم الكورسات في وحدات ومحاضرات فيديو تفاعلية، مع ملفات PDF وملخصات قابلة للتحميل، وتحديد تقدم الطالب تلقائياً عند إكمال كل درس."
          }
        },
        {
          "title": {
            "en": "Automated Quizzes & Timed Online Examinations",
            "ar": "محرك الاختبارات الذكي والامتحانات الموقوتة"
          },
          "description": {
            "en": "Allows instructors to create multiple-choice, true/false, and text questions with custom time limits, passing grades, question randomizers, and instant result scorecards.",
            "ar": "إنشاء بنوك أسئلة متنوعة (اختيار من متعدد، صح وخطأ، أسئلة مقالية) مع توقيت زمني محدد، وخلط عشوائي للأسئلة، وتصحيح تلقائي وإظهار النتائج فوراً."
          }
        },
        {
          "title": {
            "en": "Student Enrollment & Certificate Generation",
            "ar": "تسجيل الطلاب وإصدار الشهادات الإلكترونية"
          },
          "description": {
            "en": "Automates student enrollment workflows, tracks completion percentages, and automatically generates verifiable digital certificates upon course completion.",
            "ar": "إدارة تسجيل وقبول الطلاب، وتتبع نسبة إكمال كل مساق، وإصدار شهادات إتمام رقمية معتمدة وقابلة للتحقق تلقائياً فور استيفاء شروط الدورة."
          }
        },
        {
          "title": {
            "en": "Integrated Payment Gateways & Flexible Subscriptions",
            "ar": "بوابات الدفع الإلكتروني والاشتراكات المرنة"
          },
          "description": {
            "en": "Enables instant online purchasing via credit cards, debit cards, and local digital wallets with immediate enrollment activation upon transaction approval.",
            "ar": "شراء الكورسات فورياً عبر بوابات الدفع بالبطاقات والمحافظ الرقمية، مع التفعيل التلقائي الفوري للحساب والدروس بمجرد تأكيد عملية الدفع."
          }
        },
        {
          "title": {
            "en": "Promotional Offers, Discount Coupons & Bundles",
            "ar": "محرك العروض الترويجية وكوبونات الخصم والباقات"
          },
          "description": {
            "en": "Dynamic marketing engine supporting percentage and fixed discount coupons, limited-time promotional pricing, and multi-course bundled packages.",
            "ar": "أدوات تسويقية متقدمة لإنشاء كوبونات الخصم المحددة بوقت أو عدد استخدامات، وعروض التخفيض الموسمي، ودمج عدة دورات في باقة واحدة بسعر مميز."
          }
        },
        {
          "title": {
            "en": "Multichannel Notifications & Student Communication",
            "ar": "مركز الإشعارات والتواصل المباشر مع الطلاب"
          },
          "description": {
            "en": "Broadcasts announcements, assignment reminders, upcoming lecture alerts, and personalized congratulatory messages across the web dashboard and email.",
            "ar": "إرسال التنبيهات والإعلانات العامة، والتذكير بمواعيد الاختبارات والمحاضرات الجديدة، والرسائل التحفيزية عبر المنصة والبريد الإلكتروني."
          }
        },
        {
          "title": {
            "en": "Administrative Analytics & Revenue Intelligence",
            "ar": "لوحة تحكم إدارية لتحليل الإيرادات والتحصيل"
          },
          "description": {
            "en": "Provides administrators with executive summaries of gross platform revenue, student retention rates, most popular courses, and quiz grade distribution curves.",
            "ar": "تقارير إدارية متقدمة تعرض إجمالي مبيعات المنصة، ومعدلات بقاء وتفاعل الطلاب، والدورات الأكثر طلباً، ومنحنيات درجات الاختبارات لتحسين جودة التعليم."
          }
        }
      ],
      "audience": [
        {
          "en": "Commercial training centers and educational academies",
          "ar": "مراكز التدريب المهني والأكاديميات التعليمية الخاصة"
        },
        {
          "en": "Independent educators, lecturers and course creators",
          "ar": "المعلمون المستقلون، المحاضرون الجامعيون وصناع المحتوى التعليمي"
        },
        {
          "en": "Corporate human resources training departments",
          "ar": "إدارات التدريب والتطوير المهني في الشركات والمؤسسات"
        },
        {
          "en": "Students, professionals and lifelong learners",
          "ar": "الطلاب والمتدربون الساعون لتطوير مهاراتهم الأكاديمية والمهنية"
        }
      ],
      "architecture": {
        "en": "ASP.NET Core 9 modular architecture organized into clean MVC Areas (Admin, Student, Tourism, Offers) backed by Entity Framework Core, SQL Server, and secure authorization filters.",
        "ar": "هيكلية برمجية مبنية بـ ASP.NET Core 9 مقسمة إلى مناطق معيارية (مناطق الإدارة، الطلاب، العروض، الخدمات) مع Entity Framework Core وقاعدة بيانات SQL Server وفلاتر أمان وحماية المحتوى."
      }
    },
    "tech": [
      ".NET 9",
      "ASP.NET Core MVC",
      "Entity Framework Core",
      "SQL Server",
      "C#",
      "Bootstrap"
    ]
  },
  {
    "id": "multi-tenant-commerce",
    "title": { "en": "Multi-Tenant E-Commerce SaaS Platform", "ar": "منصة تجارة إلكترونية سحابية متعددة المتاجر" },
    "category": "saas",
    "featured": false,
    "coverImage": "/images/projects/multi-tenant-commerce.svg",
    "status": {
      "en": "Development snapshot",
      "ar": "نسخة قيد التطوير"
    },
    "summary": {
      "en": "A cloud-based SaaS e-commerce infrastructure engineered to host and manage thousands of independent merchant storefronts, complete with tenant data isolation, custom domains, and centralized subscription billing.",
      "ar": "بنية تحتية برمجية سحابية (SaaS) للتجارة الإلكترونية مصممة لاستضافة وإدارة آلاف المتاجر المستقلة للتجار، مع عزل تام للبيانات، ودعم النطاقات المخصصة، واشتراكات التجار المركزية."
    },
    "caseStudy": {
      "overview": {
        "en": "An architectural SaaS platform that enables a platform operator to provide turnkey e-commerce store creation for independent merchants. Each merchant receives an isolated store administration dashboard, dedicated product catalog, and personalized shopping experience under their own domain name.",
        "ar": "منصة تجارة إلكترونية بنمط البرمجيات كخدمة (SaaS) تتيح لمشغل المنصة توفير متاجر جاهزة فورياً للتجار المستقلين. يحصل كل تاجر على لوحة تحكم مستقلة، وكتالوج منتجات خاص، ومتجر إلكتروني بهويته ونطاقه الخاص دون الحاجة لأي برمجة."
      },
      "problem": {
        "en": "Launching e-commerce stores individually for hundreds of business clients requires maintaining hundreds of separate codebase deployments, databases, and server configurations—an unscalable operational nightmare that inflates maintenance costs and complicates platform-wide upgrades.",
        "ar": "إنشاء وإدارة المتاجر الإلكترونية بشكل منفصل لكل عميل يتطلب صيانة مئات النسخ البرمجية وقواعد البيانات والخوادم المستقلة؛ وهو كابوس تقني يرفع تكاليف الاستضافة ويجعل تحديث المنصة وتطوير ميزاتها أمراً شبه مستحيل."
      },
      "solution": {
        "en": "The platform solves this with a single high-performance multi-tenant architecture. One shared application instance dynamically resolves tenant identity per domain/subdomain, enforces strict database schema isolation, and provides automated subscription billing and store provisioning.",
        "ar": "تحل المنصة هذه المعضلة عبر معمارية متعددة المستأجرين (Multi-Tenant). كود برمجي موحد ومترابط يتعرف تلقائياً على هوية التاجر من النطاق (Domain)، ويعزل بياناته بأعلى معايير الأمان، مع إدارة مركزية لاشتراكات التجار وتفعيل المتاجر آلياً."
      },
      "features": [
        {
          "title": {
            "en": "Multi-Tenant Data Isolation & Subdomain Routing",
            "ar": "عزل بيانات المتاجر والتوجيه الذكي للنطاقات"
          },
          "description": {
            "en": "Strict tenant data segregation ensuring no merchant can ever access another merchant's data, with dynamic routing resolving store configurations from subdomains or custom domains.",
            "ar": "فصل تام وصارم لبيانات كل متجر لضمان أقصى درجات الخصوصية والأمان، مع توجيه ذكي يربط المتجر تلقائياً سواءً بالنطاق الفرعي (Subdomain) أو النطاق المخصص للتاجر."
          }
        },
        {
          "title": {
            "en": "Centralized Super-Admin & Subscription Billing",
            "ar": "لوحة السوبر أدمن المركزية وإدارة باقات التجار"
          },
          "description": {
            "en": "Comprehensive platform-level management portal for monitoring active tenant stores, managing subscription plans (Free, Pro, Enterprise), and tracking recurring revenue.",
            "ar": "لوحة تحكم مركزية لإدارة كافة المتاجر المشتركة، وتحديد باقات الاشتراك (باقة مجانية، احترافية، مؤسسية)، ومتابعة الإيرادات الدورية للمنصة وتجديد الاشتراكات."
          }
        },
        {
          "title": {
            "en": "Merchant Self-Service Storefront Customizer",
            "ar": "تخصيص هوية المتجر وألوان الواجهة للتاجر"
          },
          "description": {
            "en": "Empowers merchants to upload logos, customize theme color schemes, curate homepage banners, and manage social links without writing a single line of code.",
            "ar": "تمكين التاجر من رفع شعاره، واختيار ألوان المتجر، وإدارة بانرات الصفحة الرئيسية، وتنسيق الأقسام وروابط التواصل دون الحاجة لأي خبرة برمجية."
          }
        },
        {
          "title": {
            "en": "Independent Catalog, Variations & Stock Control",
            "ar": "إدارة الكتالوج، خيارات المنتجات والمخزون لكل متجر"
          },
          "description": {
            "en": "Per-tenant catalog management supporting complex product variations (size, color, weight), SKU management, inventory tracking, and low-stock alerts.",
            "ar": "نظام إدارة كتالوج مستقل لكل متجر يدعم المنتجات ذات المتغيرات المتعددة (المقاس، اللون، الخامة)، وتوليد الباركود، وتتبع الكميات وتنبيهات نفاد المخزون."
          }
        },
        {
          "title": {
            "en": "Order Fulfillment, Statuses & Customer Notifications",
            "ar": "إدارة دورة الطلبات والإشعارات الآلية"
          },
          "description": {
            "en": "Real-time order tracking pipeline from pending payment to fulfillment and delivery, automatically generating printable packing slips and customer updates.",
            "ar": "سير عمل متكامل لمعالجة الطلبات من مرحلة الدفع والتجهيز حتى الشحن والتسليم، مع طباعة بوالص الشحن وإرسال تنبيهات التحديث للعملاء."
          }
        },
        {
          "title": {
            "en": "Multi-Currency, Multi-Language & Tax Calculation",
            "ar": "دعم تعدد العملات واللغات وحساب الضرائب"
          },
          "description": {
            "en": "Enables merchants to sell globally with dynamic currency conversions, localized language interfaces, and flexible country-level tax/VAT rules.",
            "ar": "إتاحة البيع الدولي للتجار عبر دعم تعدد اللغات، والتحويل التلقائي للعملات، وتطبيق قواعد الشحن والضرائب وضريبة القيمة المضافة حسب دولة العميل."
          }
        },
        {
          "title": {
            "en": "Merchant Analytics & Revenue Intelligence",
            "ar": "لوحة تحليلات المبيعات ونمو المتجر للتاجر"
          },
          "description": {
            "en": "Visual sales graphs showing gross sales volume, average order value, conversion rates, and top-selling products to help merchants grow their business.",
            "ar": "تقارير بيانية تفاعلية تعرض حجم المبيعات، ومتوسط قيمة سلة التسوق، ومعدلات التحويل، والأصناف الأكثر طلباً لمساعدة التاجر على مضاعفة أرباحه."
          }
        }
      ],
      "audience": [
        {
          "en": "SaaS entrepreneurs launching an e-commerce platform",
          "ar": "رواد الأعمال الراغبون في إطلاق منصة متاجر إلكترونية تجارية"
        },
        {
          "en": "Retail merchants seeking a fast, turnkey online store",
          "ar": "التجار والشركات التجارية الباحثون عن متجر إلكتروني مستقل ومتكامل"
        },
        {
          "en": "Digital agencies creating hosted stores for clients",
          "ar": "الوكالات الرقمية التي تبني وتدير متاجر لعملائها على منصة موحدة"
        },
        {
          "en": "Marketplace and shopping directory operators",
          "ar": "مشغلو الأسواق المجمعة والأدلة التجارية الإلكترونية"
        }
      ],
      "architecture": {
        "en": "Multi-tenant .NET ecosystem utilizing EF Core global query filters for strict tenant partitioning, dynamic database connection resolution, and clean separation between platform administration and merchant storefronts.",
        "ar": "معمارية .NET متعددة المستأجرين تستخدم فلاتر الاستعلام الشاملة (Global Query Filters) في EF Core لعزل بيانات كل مستأجر، مع توجيه ديناميكي لقواعد البيانات وفصل كامل بين إدارة المنصة والمتاجر."
      }
    },
    "tech": [
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "SaaS",
      "Multi-Tenancy",
      "C#"
    ]
  },
  {
    "id": "ecommerce-storefront",
    "title": { "en": "High-Conversion E-Commerce Storefront", "ar": "واجهة متجر إلكتروني مصممة لزيادة المبيعات" },
    "category": "web-apps",
    "featured": false,
    "coverImage": "/images/projects/ecommerce-storefront.svg",
    "summary": {
      "en": "A streamlined, customer-centric retail web storefront featuring lightning-fast faceted search, persistent shopping carts, seamless checkout, and customer order management.",
      "ar": "واجهة متجر إلكتروني سريعة وعالية التحويل للمستهلكين، تتميز بالبحث الفوري متعدد الفلاتر، وسلة تسوق ذكية، وتجربة إتمام طلب سلسة، وإدارة حسابات وطلبات العملاء."
    },
    "caseStudy": {
      "overview": {
        "en": "A dedicated direct-to-consumer (D2C) e-commerce storefront engineered to maximize sales conversions. It delivers an intuitive, friction-free shopping experience from product discovery through one-page checkout, wishlist curation, and shipment tracking.",
        "ar": "متجر إلكتروني متكامل موجه للبيع المباشر للجمهور، صُمم خصيصاً لرفع معدلات التحويل وزيادة المبيعات. يوفر تجربة تسوق ممتعة وسريعة تبدأ من تصفح المنتجات وحتى إتمام الشراء في صفحة واحدة مع قوائم الرغبات وتتبع الشحنات."
      },
      "problem": {
        "en": "Online stores frequently suffer high cart abandonment rates (often over 70%) due to slow-loading pages, convoluted multi-step checkout processes, hidden fees, poor mobile responsiveness, and complicated registration barriers.",
        "ar": "تعاني المتاجر الإلكترونية من نسب تخلٍّ مرتفعة عن سلات التسوق (تتجاوز 70% في كثير من الأحيان) نتيجة بطء تحميل الصفحات، وتعقيد خطوات الدفع، والتصميم غير المريح للهواتف الذكية، وإجبار العميل على خطوات تسجيل معقدة."
      },
      "solution": {
        "en": "The storefront solves checkout drop-offs through an optimized single-page checkout flow, guest checkout capabilities, instant faceted product filtering, persistent carts across sessions, and transparent order tracking with automated status updates.",
        "ar": "يعالج المتجر هذه المشكلات بتوفير شاشة دفع مبسطة في خطوة واحدة، وإمكانية الشراء كزائر بدون تعقيد، وفلاتر ذكية وسريعة للبحث عن المنتجات، وحفظ سلة المشتريات، وتتبع شفاف لحالة الشحنة حتى باب المنزل."
      },
      "features": [
        {
          "title": {
            "en": "Instant Faceted Product Search & Category Filters",
            "ar": "البحث الفوري الذكي وفلاتر المنتجات المتقدمة"
          },
          "description": {
            "en": "High-speed product catalog browsing with real-time filtering by category, price range, brand, color, size, and customer ratings, complete with instant search suggestions.",
            "ar": "استعراض فوري لكتالوج المنتجات مع فلاتر ذكية حسب التصنيف، ونطاق السعر، والعلامة التجارية، واللون، والمقاس، مع اقتراحات بحث تلقائية تظهر أثناء الكتابة."
          }
        },
        {
          "title": {
            "en": "Persistent Shopping Cart & Mini-Cart Drawer",
            "ar": "سلة التسوق الذكية المنزلقة وحفظ المنتجات"
          },
          "description": {
            "en": "Interactive slide-out cart drawer showing selected items, quantity modifiers, applied discounts, and free shipping progress bars without leaving the browsing page.",
            "ar": "سلة منزلقة مريحة تتيح تعديل الكميات، ومعاينة الخصومات، ومؤشر قيمة الشحن المجاني التلقائي دون مغادرة صفحة التسوق الحالية."
          }
        },
        {
          "title": {
            "en": "Optimized Single-Page Checkout & Guest Purchases",
            "ar": "إتمام الطلب في صفحة واحدة والشراء السريع كزائر"
          },
          "description": {
            "en": "Streamlined single-page checkout gathering shipping details, delivery options, and payment methods cleanly, minimizing friction and maximizing conversions.",
            "ar": "تجربة إتمام طلب سلسة ومختصرة في صفحة واحدة تجمع بيانات الشحن وخيارات الدفع بوضوح، لتقليل التردد وضمان إكمال عملية الشراء بنجاح."
          }
        },
        {
          "title": {
            "en": "Customer Account Portal, Wishlists & Order History",
            "ar": "بوابة حساب العميل، قوائم الرغبات وتتبع الطلبات"
          },
          "description": {
            "en": "Personalized customer accounts enabling users to save favorite items to wishlists, view past order invoices, repeat previous purchases with one click, and track deliveries.",
            "ar": "حساب شخصي للعميل لحفظ المنتجات المفضلة في قائمة الأمنيات، واستعراض فواتير الطلبات السابقة، وإعادة طلب المنتجات بضغطة زر، ومتابعة حالة التوصيل."
          }
        },
        {
          "title": {
            "en": "Promo Codes, Coupons & Tiered Volume Discounts",
            "ar": "محرك الخصومات، كوبونات التخفيض والأسعار المتدرجة"
          },
          "description": {
            "en": "Flexible promotional engine that validates discount coupons, calculates percentage or fixed-amount savings, and supports buy-one-get-one (BOGO) promotions.",
            "ar": "محرك عروض ترويجي يدعم تطبيق كوبونات الخصم، والخصم المئوي أو المالي المباشر، والخصومات الكمية للطلبات الكبيرة والعروض الخاصة."
          }
        },
        {
          "title": {
            "en": "Stock Availability Badges & Scarcity Alerts",
            "ar": "شارات توفر المخزون وتنبيهات الكميات المحدودة"
          },
          "description": {
            "en": "Dynamic badges informing shoppers of real-time inventory status ('In Stock', 'Only 3 left', 'Pre-order') to drive urgency and transparent expectations.",
            "ar": "شارات تفاعلية توضح رصيد المخزون في صفحة المنتج (متوفر، متبقي 3 قطع فقط، نفد المخزون) لتحفيز قرار الشراء وتوضيح حالة التوفر بشفافية."
          }
        },
        {
          "title": {
            "en": "Mobile-First Responsive Design & SEO Optimization",
            "ar": "تصميم متجاوب بالكامل مع الجوال وتهيئة محركات البحث"
          },
          "description": {
            "en": "Optimized for mobile touch interactions, lightning-fast Core Web Vitals performance, and structured schema markup for rich Google search snippet indexing.",
            "ar": "واجهات مريحة وسريعة جداً للمتسوقين عبر الهواتف الذكية، متوافقة مع معايير السرعة وسهولة التصفح، ومهيأة للظهور في النتائج الأولى لمحركات البحث."
          }
        }
      ],
      "audience": [
        {
          "en": "Direct-to-consumer (D2C) brands and retail stores",
          "ar": "العلامات التجارية ومتاجر التجزئة الراغبة في البيع المباشر للجمهور"
        },
        {
          "en": "Online shoppers seeking a fast and reliable purchasing experience",
          "ar": "المتسوقون عبر الإنترنت الباحثون عن تجربة تسوق مريحة وسريعة"
        },
        {
          "en": "E-commerce store operators and merchandising teams",
          "ar": "مشغلو المتاجر الإلكترونية وفرق التسويق وإدارة المنتجات"
        }
      ],
      "architecture": {
        "en": ".NET 9 Razor Pages architecture emphasizing fast server-rendered HTML delivery, Entity Framework Core data access, SQL Server relational storage, and modular CSS styling.",
        "ar": "مبني بـ .NET 9 Razor Pages لضمان أقصى سرعة في تحميل الصفحات على المتصفح، مع Entity Framework Core وقاعدة بيانات SQL Server وتصميم متجاوب واحترافي."
      }
    },
    "tech": [
      ".NET 9",
      "Razor Pages",
      "Entity Framework Core",
      "SQL Server",
      "C#",
      "Responsive UI"
    ]
  },
  {
    "id": "warehouse-courier-ims",
    "title": { "en": "Warehouse & Courier Fulfillment IMS", "ar": "نظام إدارة المخازن وتجهيز طلبات شركات التوصيل" },
    "category": "web-apps",
    "featured": true,
    "coverImage": "/images/projects/warehouse-courier-ims.svg",
    "summary": {
      "en": "An integrated warehouse management and courier delivery execution system connecting multi-warehouse inventory, reserved allocations, order fulfillment pipelines, and driver delivery tracking.",
      "ar": "منظومة متكاملة لإدارة المستودعات وحركات التوزيع، تربط المخزون متعدد المستودعات، والأرصدة المحجوزة، وسير تجهيز الطلبات، وتوزيع ومتابعة المناديب."
    },
    "caseStudy": {
      "overview": {
        "en": "A robust logistics and supply-chain management application connecting warehouse storage operations with last-mile courier fulfillment. It bridges the gap between stored inventory and delivery personnel, ensuring seamless order picking, packaging, waybill generation, and driver handover.",
        "ar": "منظومة لوجستية وإدارية متقدمة تربط بين عمليات إدارة المستودعات والتخزين الداخلي من جهة، ومسارات التوصيل والتوزيع عبر المناديب من جهة أخرى. تضمن انسيابية دورة تجهيز الطلبات، والطباعة الآلية للبوالص، والتسليم الدقيق للمناديب بدون أخطاء."
      },
      "problem": {
        "en": "Supply-chain operations collapse when warehouse inventory is disconnected from courier dispatch. Typical failures include selling items that are already promised to other orders, warehouse staff picking wrong items, drivers delivering unverified orders, and zero visibility into return package status.",
        "ar": "تتعرض الشركات اللوجستية لخسائر فادحة عند انفصال إدارة المخازن عن حركة المناديب؛ مما ينتج عنه بيع بضائع محجوزة لعملاء آخرين، وأخطاء تجهيز المنتجات من الرفوف، وفقدان الشحنات المرتجعة، وغياب التنسيق بين مسؤولي المخزن وسائقي التوزيع."
      },
      "solution": {
        "en": "The system enforces strict real-time stock allocation (distinguishing between on-hand, reserved, and available stock), streamlines the Pick-Pack-Ship pipeline with barcode scanning, auto-assigns orders to couriers, tracks driver GPS coordinates, and manages customer returns seamlessly.",
        "ar": "يعالج النظام هذه التحديات بفصل كميات المخزون بدقة (متاح، محجوز، حد إعادة الطلب)، مع أتمتة مسار تجهيز الطلبات (التقاط، تعبئة، شحن) بالباركود، وتوزيع الطرود آلياً على المناديب حسب المناطق، وتتبع موقع السائق وإدارة المرتجعات باحترافية."
      },
      "features": [
        {
          "title": {
            "en": "Multi-Warehouse Stock & Bin Allocation Management",
            "ar": "إدارة المخازن المتعددة ومواقع التخزين والأرفف"
          },
          "description": {
            "en": "Tracks products across multiple physical warehouses, aisles, and storage bins with granular distinction between total on-hand quantity, reserved order quantities, and net available stock.",
            "ar": "إدارة شاملة للمخزون عبر مستودعات وفروع متعددة مع تحديد مواقع الأرفف والأصناف، والتمييز الدقيق بين المخزون الفعلي في المستودع، والمخزون المحجوز للطلبات، والمتاح للبيع."
          }
        },
        {
          "title": {
            "en": "Pick-Pack-Ship Order Fulfillment Pipeline",
            "ar": "سير عمل تجهيز الطلبات (الالتقاط، التغليف، والشحن)"
          },
          "description": {
            "en": "Structured multi-stage fulfillment workflow: orders move through automated picking lists, packing verification with barcode scanning, weight validation, and shipping manifest generation.",
            "ar": "مسار تشغيلي منظم يبدأ بإصدار قوائم الالتقاط من الرفوف، وتدقيق التعبئة والتغليف بمسح الباركود لمنع خروج صنف خاطئ، والتحقق من الوزن، وتجهيز منافست الشحن."
          }
        },
        {
          "title": {
            "en": "Automated Courier Assignment & Zone Distribution",
            "ar": "إسناد الشحنات الذكي وتوزيع المناديب حسب المناطق"
          },
          "description": {
            "en": "Assigns packaged orders to specific delivery couriers based on geographical delivery zones, payload capacities, and route efficiency, with instant dispatch updates.",
            "ar": "توزيع الشحنات الجاهزة آلياً على المناديب بحسب المناطق الجغرافية وسعة سيارة التوصيل، مع تحديث فوري لحالة الشحنة إلى (جاهزة للتسليم)."
          }
        },
        {
          "title": {
            "en": "Barcode, QR Code & Thermal Waybill Printing",
            "ar": "توليد وطباعة بوالص الشحن وملصقات الباركود"
          },
          "description": {
            "en": "Generates standardized shipping waybills with unique tracking barcodes, recipient addresses, and package details, ready for high-speed thermal label printing.",
            "ar": "توليد وطباعة بوالص الشحن الرسمية وملصقات الباركود وQR Code الموحدة لكل طرد، متوافقة مع الطابعات الحرارية السريعة لتسريع خروج الشحنات."
          }
        },
        {
          "title": {
            "en": "Live Courier Geolocation & Delivery Confirmation",
            "ar": "تتبع مواقع المناديب وإثبات التسليم الرقمي"
          },
          "description": {
            "en": "Captures courier GPS coordinates during active delivery runs, logging exact timestamps, delivery confirmations, recipient signatures, and delivery exceptions.",
            "ar": "تسجيل إحداثيات ومواقع المناديب أثناء رحلات التوصيل، وتوثيق توقيت التسليم الفعلي، وتوقيع المستلم، وأسباب تعذر التسليم إن وجدت."
          }
        },
        {
          "title": {
            "en": "Reverse Logistics & Customer Returns Processing",
            "ar": "إدارة المرتجعات واللوجستيات العكسية"
          },
          "description": {
            "en": "Manages returned packages from couriers back to the warehouse, inspecting returned goods condition and automatically restocking approved items back into available inventory.",
            "ar": "مسار عمل مخصص لاستلام الطرود المرتجعة من المناديب، وفحص سلامة البضاعة، وإعادة إدخال الصالح منها تلقائياً إلى رصيد المخزون المتاح للبيع."
          }
        },
        {
          "title": {
            "en": "Warehouse Analytics & Courier Productivity Reports",
            "ar": "تقارير حركة المستودع وإنتاجية المناديب"
          },
          "description": {
            "en": "Comprehensive operational analytics tracking daily fulfillment velocity, courier delivery completion rates, inventory turnover, and dead-stock alerts.",
            "ar": "تقارير تشغيلية يومية تفصيلية تقيس سرعة تجهيز الطلبات، ونسبة نجاح تسليم كل مندوب، ومعدل دوران المخزون، وسجلات التالف والرواكد."
          }
        }
      ],
      "audience": [
        {
          "en": "Warehouse directors and logistics fulfillment managers",
          "ar": "مديرو المستودعات وسلاسل الإمداد ومسؤولو العمليات اللوجستية"
        },
        {
          "en": "Order picking and warehouse inventory staff",
          "ar": "أمناء المستودعات وفرق التجهيز والتعبئة والتغليف"
        },
        {
          "en": "Fleet dispatchers and delivery courier personnel",
          "ar": "منسقو التوزيع ومناديب الشحن والتوصيل"
        },
        {
          "en": "Retail and wholesale companies managing physical inventory",
          "ar": "شركات التجارة والتوزيع التي تمتلك مخازن وأساطيل توصيل خاصة"
        }
      ],
      "architecture": {
        "en": "Engineered on ASP.NET Core 9 with Entity Framework Core, SQL Server, ASP.NET Core Identity, BarcodeLib for dynamic barcode generation, and iTextSharp / EPPlus for automated waybill and PDF manifest generation.",
        "ar": "مبني بـ ASP.NET Core 9 مع Entity Framework Core وSQL Server ونظام أمان Identity، مع مكتبة BarcodeLib لتوليد الباركود ومكتبات iTextSharp وEPPlus لطباعة البوالص وتقارير الإكسل والـ PDF."
      }
    },
    "tech": [
      ".NET 9",
      "ASP.NET Core MVC",
      "Entity Framework Core",
      "SQL Server",
      "Identity",
      "BarcodeLib",
      "EPPlus"
    ]
  },
  {
    "id": "retail-inventory-web",
    "title": { "en": "Retail Inventory & Sales Management (Web)", "ar": "نظام ويب لإدارة مخزون ومبيعات التجزئة" },
    "category": "web-apps",
    "featured": false,
    "coverImage": "/images/projects/retail-inventory-web.svg",
    "summary": {
      "en": "A web-based retail management application designed for stores and trading companies, integrating multi-location inventory, browser point-of-sale (POS), purchasing, and customer sales accounts.",
      "ar": "نظام ويب متكامل لإدارة مبيعات ومخازن التجزئة للأنشطة التجارية، يربط إدارة المخزون متعدد الفروع، ونقاط البيع السريعة، والمشتريات وحسابات العملاء والموردين."
    },
    "caseStudy": {
      "overview": {
        "en": "An accessible, browser-based retail operations platform that unites store cataloging, warehouse inventory tracking, cashier sales transactions, supplier purchasing, and customer account receivables into one cohesive interface accessible from any workstation.",
        "ar": "منصة ويب متكاملة لإدارة الأنشطة والمتاجر التجارية، تجمع بين إدارة كتالوج المنتجات، ومخزون الفروع والمستودعات، وشاشات البيع والكاشير، والمشتريات ومتابعة ديون العملاء والموردين في نظام واحد يمكن الوصول إليه بأمان من أي جهاز."
      },
      "problem": {
        "en": "Retailers with multiple branches or storage rooms face significant challenges keeping stock counts accurate. Without a unified web system, branch cashiers sell out-of-stock items, supplier debts are miscalculated, and business owners have no real-time view of daily store profits.",
        "ar": "تواجه متاجر التجزئة متعددة الفروع والمخازن صعوبة بالغة في ضبط كميات البضائع بدقة؛ فغياب نظام مركزي يؤدي إلى بيع أصناف غير متوفرة، وتراكم ديون العملاء دون تحصيل، وضياع مستحقات الموردين، وعجز صاحب العمل عن معرفة أرباحه اليومية بدقة."
      },
      "solution": {
        "en": "The application establishes a real-time centralized stock ledger, equips cashiers with an easy-to-use web POS interface, tracks purchase orders and supplier invoices, manages customer credit lines and payments, and generates instant profit and loss reports.",
        "ar": "يوفر النظام سجلاً مخزنياً موحداً ومحدثاً لحظياً بين كافة الفروع، وشاشة كاشير سهلة وسريعة تعمل عبر المتصفح، مع تتبع دقيق لفواتير الموردين والآجل، وإدارة حسابات وسقوف ديون العملاء، وحساب صافي الأرباح تلقائياً."
      },
      "features": [
        {
          "title": {
            "en": "Centralized Product Catalog & Pricing Tiers",
            "ar": "إدارة الكتالوج الشامل وتعدد مستويات الأسعار"
          },
          "description": {
            "en": "Manages items by SKU, barcode, category, brand, and unit of measure, supporting wholesale, retail, and special promotional pricing tiers.",
            "ar": "إدارة المنتجات بالأكواد والباركود والتصنيف، مع دعم مستويات تسعير متعددة (سعر الجملة، التجزئة، السعر الخاص) ومرونة تطبيق الخصومات."
          }
        },
        {
          "title": {
            "en": "Multi-Location Warehouse & Branch Stock Balances",
            "ar": "متابعة المخزون عبر المستودعات والفروع المتعددة"
          },
          "description": {
            "en": "Real-time visibility into stock availability across different branch stores and warehouses, with easy stock transfers and damage write-off tracking.",
            "ar": "رؤية فورية لأرصدة البضائع في كل فرع ومستودع، مع مسارات عمل سهلة لتحويل البضائع بين المخازن وتسجيل التوالف والهدر بدقة."
          }
        },
        {
          "title": {
            "en": "Web-Based Point of Sale (POS) & Fast Invoicing",
            "ar": "شاشة كاشير ونقاط بيع عبر الويب (Web POS)"
          },
          "description": {
            "en": "Streamlined cashier checkout screen supporting barcode scanners, multiple tender types (Cash, Card, Credit), discounts, and thermal receipt printing.",
            "ar": "واجهة كاشير سهلة الاستخدام تدعم ماسحات الباركود، وتعدد وسائل الدفع (نقدي، شبكة، آجل)، والخصومات، وطباعة الفواتير والإيصالات الحرارية فوراً."
          }
        },
        {
          "title": {
            "en": "Purchase Orders & Supplier Accounts Payable",
            "ar": "أوامر الشراء ومتابعة حسابات وفواتير الموردين"
          },
          "description": {
            "en": "Tracks incoming supplier deliveries, purchase invoices, payment schedules, and outstanding debts with clear payment voucher logging.",
            "ar": "إدارة ومتابعة فواتير التوريد، ومحاضر الاستلام، وجدولة سداد دفعات الموردين، وسندات الصرف، مع كشف حساب تفصيلي لكل مورد."
          }
        },
        {
          "title": {
            "en": "Customer Accounts & Credit Receivables Ledger",
            "ar": "سجلات العملاء وحسابات المبيعات الآجلة والذمم"
          },
          "description": {
            "en": "Maintains customer purchasing history, tracks credit limits for trade customers, and records partial debt repayments and account statements.",
            "ar": "ملف كامل لكل عميل يسجل مشترياته السابقة، والحد الائتماني للبيع الآجل، وسندات القبض ومتابعة تسديد المديونيات وكشوف الحسابات الدورية."
          }
        },
        {
          "title": {
            "en": "Inventory Auditing & Discrepancy Adjustments",
            "ar": "جرد المخزون الدوري وتسوية الفروقات المخزنية"
          },
          "description": {
            "en": "Enables periodic physical inventory audits, automatically compares counted numbers against system balances, and logs approved discrepancy adjustments.",
            "ar": "إجراء الجرد الفعلي الدوري للبضائع، ومقارنة الأرقام الفعلية بالأرصدة الدفترية آلياً، واكتشاف العجز أو الزيادة واعتماد تسويات الجرد."
          }
        },
        {
          "title": {
            "en": "Daily Profitability & VAT Tax Reports",
            "ar": "تقارير هوامش الأرباح والضرائب والمبيعات اليومية"
          },
          "description": {
            "en": "Executive financial reporting detailing gross revenue, cost of goods sold (COGS), net profit margins, top-earning items, and tax compliance data.",
            "ar": "تقارير محاسبية تفصيلية توضح إجمالي المبيعات، وتكلفة البضاعة المباعة، وصافي هوامش الربح، والأصناف الأكثر ربحية، وإقرارات الضريبة المضافة."
          }
        }
      ],
      "audience": [
        {
          "en": "Retail store owners and retail chain managers",
          "ar": "ملاك المتاجر ومحلات التجزئة ومديرو السلاسل التجارية"
        },
        {
          "en": "Store cashiers and sales representatives",
          "ar": "موظفو الكاشير والمبيعات في المعارض والمحلات"
        },
        {
          "en": "Warehouse supervisors and inventory controllers",
          "ar": "أمناء المستودعات ومسؤولو الجرد والرقابة المخزنية"
        },
        {
          "en": "Accountants managing supplier and customer receivables",
          "ar": "المحاسبون ومسؤولو الحسابات المدينة والدائنة في الشركات"
        }
      ],
      "architecture": {
        "en": "ASP.NET Core MVC architecture with Entity Framework Core and SQL Server, leveraging responsive Bootstrap views and Identity authentication for branch staff roles.",
        "ar": "مبني على ASP.NET Core MVC مع Entity Framework Core وSQL Server، مع واجهات Bootstrap سريعة التجاوب ونظام مصادقة وتوزيع صلاحيات للموظفين."
      }
    },
    "tech": [
      ".NET",
      "ASP.NET Core MVC",
      "Entity Framework Core",
      "SQL Server",
      "Identity",
      "Bootstrap"
    ]
  },
  {
    "id": "inventory-desktop-ims",
    "title": { "en": "Inventory & Branches Desktop IMS", "ar": "نظام مكتبي لإدارة المخزون والفروع" },
    "category": "desktop",
    "featured": false,
    "coverImage": "/images/projects/inventory-desktop-ims.svg",
    "summary": {
      "en": "A robust, high-performance Windows desktop application for commercial inventory, barcode thermal printing, multi-branch stock control, sales invoices, and automated database backups.",
      "ar": "برنامج مكتبي فائق السرعة لنظام ويندوز لإدارة المخزون التجاري، وطباعة الباركود والفواتير الحرارية، والربط بين الفروع، وحسابات الموردين والنسخ الاحتياطي التلقائي."
    },
    "caseStudy": {
      "overview": {
        "en": "A mission-critical Windows desktop business application designed for retail shops, wholesale distribution centers, and warehouses that require instantaneous response times, offline resilience, and seamless integration with barcode printers, cash drawers, and barcode scales.",
        "ar": "برنامج سطح مكتب قوي وموثوق لنظام ويندوز، صُمم خصيصاً لمتاجر البيع المباشر ومستودعات الجملة التي تتطلب سرعة فائقة جداً في إنجاز الفواتير، واستقراراً تاماً عند انقطاع الإنترنت، وتوافقاً مباشراً مع الطابعات الحرارية وأدراج الكاشير وموازين الباركود."
      },
      "problem": {
        "en": "High-volume retail outlets and supermarkets cannot afford internet lag, browser crashes, or printer driver disconnects during busy peak hours. A split-second delay at checkout causes long customer queues, lost sales, and cashier frustration.",
        "ar": "لا يمكن للمتاجر الكبرى ومحلات السوبرماركت والمخازن تحمل بطء المتصفحات أو انقطاع الإنترنت أثناء أوقات الذروة وازدحام المشترين؛ حيث يسبب أي تأخير لثوانٍ في الكاشير طوابير طويلة وتذمر العملاء وضياع المبيعات."
      },
      "solution": {
        "en": "The desktop application delivers zero-latency local processing, instant keyboard-driven shortcuts for every action, hardware-level POS peripheral control, automatic local and cloud database backups, and comprehensive supplier/customer balance tracking.",
        "ar": "يوفر البرنامج أداءً فائق السرعة بدون أي تأخير، مع اختصارات ذكية للوحة المفاتيح لإنجاز الفاتورة بثوانٍ، وتكاملاً مباشراً مع ملحقات الكاشير والطابعات، مع نظام نسخ احتياطي تلقائي مشفر، ومتابعة شاملة للمخزون والحسابات."
      },
      "features": [
        {
          "title": {
            "en": "High-Speed Cashier POS with Keyboard Shortcuts",
            "ar": "كاشير ونقاط بيع فائقة السرعة باختصارات لوحة المفاتيح"
          },
          "description": {
            "en": "Lightning-fast billing interface designed for barcode scanning and quick keyboard navigation (F1-F12 shortcuts), opening cash drawers and cutting receipt tape instantly.",
            "ar": "واجهة كاشير سريعة جداً تعتمد على مسح الباركود واختصارات لوحة المفاتيح لإتمام الفاتورة وطباعتها وفتح درج النقدية في ثانية واحدة دون استخدام الفأرة."
          }
        },
        {
          "title": {
            "en": "Barcode Label Designer & Thermal Printing",
            "ar": "مصمم ملصقات الباركود والطباعة الحرارية المباشرة"
          },
          "description": {
            "en": "Built-in visual barcode and price-tag label designer supporting multiple standard label sizes, custom store logos, prices, and automated serial generation.",
            "ar": "مصمم مدمج لملصقات الباركود والأسعار يدعم كافة أحجام ورق الباركود القياسية، وطباعة شعار المحل والسعر وتاريخ الصلاحية على الطابعات الحرارية مباشرة."
          }
        },
        {
          "title": {
            "en": "Multi-Branch Stock Tracking & Transfer Manifests",
            "ar": "إدارة المخزون متعدد الفروع وأوامر التحويل المخزني"
          },
          "description": {
            "en": "Monitors stock across store locations, generating documented stock transfer manifests with sender and receiver digital sign-offs to prevent shrinkage.",
            "ar": "متابعة كميات البضائع في الفروع والمخزن الرئيسي، وإصدار أذون تحويل بضاعة رسمية بتوقيع المرسل والمستلم لمنع أي تلاعب أو نقص في المخزون."
          }
        },
        {
          "title": {
            "en": "Comprehensive Supplier & Customer Balance Sheets",
            "ar": "كشوف حسابات الموردين والعملاء وحركة الذمم"
          },
          "description": {
            "en": "Detailed accounts receivable and payable ledgers showing previous balances, invoice details, cash payments, check statuses, and aging debt reports.",
            "ar": "دفاتر محاسبية متكاملة لحسابات الموردين والعملاء الآجلين، توضح الأرصدة السابقة، وحركات الفواتير، والدفعات المسددة، وتواريخ استحقاق المديونيات."
          }
        },
        {
          "title": {
            "en": "Audio & Visual Low-Stock & Expiry Alerts",
            "ar": "تنبيهات صوتية وبصرية لنواقص المخزون والصلاحيات"
          },
          "description": {
            "en": "Automatic system notifications alerting managers to products nearing expiration or falling below minimum safety quantities upon launching the application.",
            "ar": "نظام إنذار تلقائي ينبه المسؤول عند تشغيل البرنامج بالأصناف التي أوشكت على النفاد لطلبها، والمنتجات القريبة من انتهاء الصلاحية لتصريفها."
          }
        },
        {
          "title": {
            "en": "Automated Encrypted Local & Cloud Database Backups",
            "ar": "النسخ الاحتياطي التلقائي المشفر لقاعدة البيانات"
          },
          "description": {
            "en": "Automates scheduled daily database backups to local drives or secure external storage, safeguarding financial and inventory records against hardware failure.",
            "ar": "جدولة تلقائية لإنشاء نسخ احتياطية مضغوطة ومشفرة من قاعدة البيانات عند إغلاق الوردية أو البرنامج، لحماية البيانات المالية من أي عطل مفاجئ للجهاز."
          }
        },
        {
          "title": {
            "en": "Shift Closures, P&L Audits & Excel/PDF Reports",
            "ar": "إقفال اليومية وحساب الأرباح وتصدير التقارير (Excel/PDF)"
          },
          "description": {
            "en": "One-click end-of-shift reconciliation comparing system revenue to physical cash, with instant export of sales summaries, tax returns, and profit margins to Excel and PDF.",
            "ar": "إقفال ومطابقة اليومية بضغطة زر لمقارنة نقدية الصندوق بالمبيعات، مع تصدير كافة التقارير المالية وميزان الأرباح والخسائر إلى ملفات Excel وPDF بسهولة."
          }
        }
      ],
      "audience": [
        {
          "en": "Supermarkets, grocery stores and retail merchants",
          "ar": "محلات السوبرماركت، والمواد الغذائية والمتاجر الاستهلاكية الكبرى"
        },
        {
          "en": "Wholesale distributors and hardware/electronics supply shops",
          "ar": "موزعو الجملة وتجار التجزئة في الأجهزة وقطع الغيار والمواد الصناعية"
        },
        {
          "en": "Store cashiers requiring reliable offline checkout tools",
          "ar": "موظفو الكاشير الذين يحتاجون سرعة وموثوقية عالية بدون توقف"
        },
        {
          "en": "Business owners seeking total control over inventory shrinkage",
          "ar": "أصحاب الأعمال الساعون للرقابة الصارمة على المخزون ومنع الهدر والسرقات"
        }
      ],
      "architecture": {
        "en": ".NET 9 Windows Forms architecture backed by Entity Framework Core and SQL Server, with integrated EPPlus for Excel generation and iTextSharp for high-fidelity document and receipt rendering.",
        "ar": "تطبيق .NET 9 Windows Forms يعتمد على Entity Framework Core وقاعدة بيانات SQL Server ومكتبات EPPlus لتوليد الإكسل وiTextSharp لتنسيق المستندات والفواتير."
      }
    },
    "tech": [
      ".NET 9",
      "Windows Forms",
      "Entity Framework Core",
      "SQL Server",
      "EPPlus",
      "iTextSharp",
      "C#"
    ]
  },
  {
    "id": "retail-wms-desktop",
    "title": { "en": "Retail Warehouse Management System (WMS Desktop)", "ar": "نظام مكتبي لإدارة مستودعات البيع بالتجزئة" },
    "category": "desktop",
    "featured": false,
    "coverImage": "/images/projects/retail-wms-desktop.svg",
    "summary": {
      "en": "A specialized warehouse management desktop system providing inbound goods receiving, bin space optimization, outbound pick-and-pack routing, cycle counting, and role-based operator security.",
      "ar": "نظام إدارة مستودعات متخصص (WMS) لسطح المكتب يدير استلام الشحنات الواردة، وتحسين مساحات الأرفف، ومسارات تجهيز الطلبات، والجرد الدوري، وصلاحيات عمال المستودع."
    },
    "caseStudy": {
      "overview": {
        "en": "A robust desktop warehouse management application built to govern the physical flow of merchandise within large distribution centers and storage facilities. It transforms chaotic warehouse spaces into disciplined, mapped storage zones with verified item movements.",
        "ar": "برنامج مكتبي متطور لإدارة العمليات التشغيلية لمستودعات ومراكز التوزيع الكبرى. يحول المساحات التخزينية إلى مناطق وأرفف مرقمة ومنظمة بدقة، ويضبط كل حركة دخول وخروج للبضائع لضمان الاستغلال الأمثل للمساحات ومنع الأخطاء."
      },
      "problem": {
        "en": "Warehouses suffer chronic delays and financial losses when staff don't know where items are stored, pallets are placed in wrong aisles, receiving checks fail to catch damaged supplier shipments, and annual manual inventory counting halts company operations for days.",
        "ar": "تعاني المستودعات من خسائر وتأخير مزمن عندما يجهل العمال أماكن تخزين البضائع، وتوضع الشحنات في أرفف غير مسجلة، وتُقبل بضائع تالفة من الموردين لغياب الفحص، وتتعطل أعمال الشركة لعدة أيام لإجراء الجرد اليدوي السنوي."
      },
      "solution": {
        "en": "The system maps warehouse aisles, racks, and bins with barcoded identifiers, enforces mandatory goods inspection workflows during receiving, guides workers along optimized picking paths, and supports continuous cycle counting without interrupting business operations.",
        "ar": "يرسم النظام خريطة رقمية لأروقة وأرفف المستودع بأكواد باركود واضحة، ويطبق مسار فحص إلزامي للبضاعة عند الاستلام من المورد، ويوجه العمال لأقصر مسار لالتقاط الطلبيات، ويدعم الجرد الدوري المستمر دون الحاجة لإيقاف العمليات."
      },
      "features": [
        {
          "title": {
            "en": "Inbound Receiving & Supplier Inspection Gate",
            "ar": "بوابة استلام الشحنات الواردة والفحص والتدقيق"
          },
          "description": {
            "en": "Logs incoming shipments against purchase orders, verifying received quantities, inspecting damaged goods, and printing warehouse barcode tags upon arrival.",
            "ar": "مطابقة الشحنات الواردة بأوامر الشراء المعتمدة، وفحص سلامة الكراتين والمنتجات، وطباعة ملصقات الباركود الخاصة بالمستودع فور الاستلام."
          }
        },
        {
          "title": {
            "en": "Aisle, Rack & Bin Space Optimization",
            "ar": "تنظيم وتوزيع مساحات التخزين والأرفف (Bin Locations)"
          },
          "description": {
            "en": "Assigns precise storage coordinates (Zone-Aisle-Rack-Bin) for each SKU based on turnover velocity and physical dimensions to maximize volumetric utilization.",
            "ar": "تحديد إحداثيات موقع التخزين بدقة (المنطقة - الممر - الرف - الصندوق) لكل صنف بناءً على سرعة دورانه وأبعاده لتحقيق الاستغلال الأقصى لطاقة المستودع."
          }
        },
        {
          "title": {
            "en": "Optimized Outbound Picking & Staging Routes",
            "ar": "مسارات التقاط الطلبات الذكية ومناطق التجهيز"
          },
          "description": {
            "en": "Generates warehouse picking manifests sequenced by physical aisle locations, minimizing picker walking distances and speeding up order dispatch.",
            "ar": "إصدار قوائم التقاط الطلبات مرتبة جغرافياً حسب تسلسل الممرات، مما يقلل وقت وجهد تنقل العمال داخل المستودع ويسرع تسليم الطلبيات للشحن."
          }
        },
        {
          "title": {
            "en": "Continuous Cycle Counting & Blind Inventory Audits",
            "ar": "الجرد الدوري المستمر والجرد الأعمى للبضائع"
          },
          "description": {
            "en": "Facilitates ongoing cycle counts of specific aisles or product groups without shutting down the facility, with blind counting modes to ensure integrity.",
            "ar": "إجراء جرد دوري مستمر لممرات أو تصنيفات محددة دون إيقاف حركة المستودع، مع خاصية الجرد الأعمى (بدون إظهار الكمية الدفترية) لضمان نزاهة التدقيق."
          }
        },
        {
          "title": {
            "en": "Supplier Delivery Quality & Lead-Time Analytics",
            "ar": "تقييم أداء الموردين ومواعيد التوريد وجودة البضائع"
          },
          "description": {
            "en": "Scores suppliers based on on-time delivery percentages, defect rates, and accuracy of fulfilled quantities to support procurement negotiations.",
            "ar": "تقييم أداء شركات التوريد بناءً على الالتزام بمواعيد التسليم، ونسب البضائع المعيبة، ودقة الكميات المسلمة لدعم المفاوضات المستقبلية."
          }
        },
        {
          "title": {
            "en": "Role-Based Warehouse Security & Station Controls",
            "ar": "صلاحيات أمنية دقيقة حسب محطات العمل بالمستودع"
          },
          "description": {
            "en": "Restricts worker access by role (Receiving Clerk, Forklift Operator, Dispatch Supervisor), preventing unauthorized stock adjustments and auditing all movements.",
            "ar": "تحديد صلاحيات الموظفين حسب أدوارهم (موظف استلام، سائق رافعة، مشرف شحن)، لمنع التعديل غير المصرح به على المخزون وتوثيق كل حركة بالوقت واسم العامل."
          }
        },
        {
          "title": {
            "en": "Warehouse Space Utilization & Turnover Analytics",
            "ar": "تقارير إشغال المساحات ومعدلات دوران البضائع"
          },
          "description": {
            "en": "Visual dashboards detailing warehouse capacity utilization percentages, slow-moving dead inventory, and average order fulfillment cycle times.",
            "ar": "لوحات تحكم بيانية توضح نسبة إشغال مساحات المستودع، والبضائع الراكدة بطيئة الحركة لتصريفها، ومتوسط زمن دورة تجهيز الطلب من الاستلام للشحن."
          }
        }
      ],
      "audience": [
        {
          "en": "Distribution center operators and supply chain directors",
          "ar": "مديرو مراكز التوزيع والمستودعات وسلاسل الإمداد"
        },
        {
          "en": "Warehouse operations supervisors and receiving clerks",
          "ar": "مشرفو العمليات ومسؤولو بوابات الاستلام والفرز"
        },
        {
          "en": "Inventory controllers and auditing specialists",
          "ar": "أخصائيو الرقابة المخزنية والجرد وتدقيق الأصول"
        },
        {
          "en": "Forklift operators and fulfillment picking teams",
          "ar": "سائقو الرافعات وفرق التقاط وتعبئة البضائع"
        }
      ],
      "architecture": {
        "en": ".NET 6 Windows Forms desktop application leveraging Entity Framework Core and SQL Server, engineered for high reliability in rugged warehouse workstation environments.",
        "ar": "تطبيق .NET 6 Windows Forms يعتمد على Entity Framework Core وSQL Server، مصمم للاستقرار التام في بيئات العمل الصعبة داخل المستودعات ومحطات التشغيل."
      }
    },
    "tech": [
      ".NET 6",
      "Windows Forms",
      "Entity Framework Core",
      "SQL Server",
      "C#"
    ]
  },
  {
    "id": "edumint-learning",
    "title": { "en": "EduMint Role-Based E-Learning Portal", "ar": "بوابة إيدومنت للتعلم الإلكتروني وإدارة الصلاحيات" },
    "category": "training",
    "featured": false,
    "coverImage": "/images/projects/edumint-learning.svg",
    "summary": {
      "en": "A structured role-based e-learning platform with isolated portals for students, instructors, and administrators, featuring lecture scheduling, interactive video learning, and integrated tuition payments.",
      "ar": "منصة تعليم إلكتروني تفاعلية مبنية على تعدد الأدوار، توفر بوابات مخصصة ومستقلة للطلاب والمعلمين والإدارة، مع جدولة المحاضرات، والفيديو التفاعلي، وسداد الرسوم إلكترونياً."
    },
    "caseStudy": {
      "overview": {
        "en": "A multi-stakeholder academic learning portal designed for private institutes, universities, and tutoring centers. It cleanly separates the educational experience into three specialized, permission-controlled portals: a rich learning hub for students, a lecture management workspace for teachers, and a centralized oversight control center for administrators.",
        "ar": "بوابة أكاديمية متطورة للتعليم الرقمي مصممة للمعاهد والجامعات والمراكز التعليمية. تفصل المنظومة التجربة التعليمية بدقة إلى 3 بوابات مستقلة ومحمية بالصلاحيات: بيئة تفاعلية للطالب، ومساحة عمل للمعلم لإدارة محاضراته وطلابه، ولوحة تحكم مركزية للإدارة للمتابعة الأكاديمية والمالية."
      },
      "problem": {
        "en": "Educational academies struggle when trying to use generic tools for teaching. Instructors cannot easily manage their lecture schedules, student homework is scattered across chat apps, parents cannot track attendance, and tuition fee collection is manual and error-prone.",
        "ar": "تواجه المعاهد والأكاديميات صعوبة في ضبط العملية التعليمية عند استخدام برامج عامة؛ حيث يفقد المعلمون السيطرة على تنظيم المحاضرات، وتتشتت الواجبات في تطبيقات المحادثة، ويصعب تتبع حضور الطلاب وتفاعلهم، وتُدار الاشتراكات والمصروفات بطرق يدوية معقدة."
      },
      "solution": {
        "en": "The portal equips teachers with direct control over their lecture calendars, lecture materials, and assignment grading; gives students an organized dashboard to watch videos and submit coursework; and provides administrators with automated billing, tuition tracking, and institutional analytics.",
        "ar": "توفر المنصة للمعلم لوحة مخصصة لجدولة المحاضرات ورفع الملفات وتصحيح الواجبات، وتمنح الطالب واجهة منظمة لمتابعة دروسه وأداء اختباراته، وتزود الإدارة بنظام محاسبي آلي لمتابعة سداد الرسوم والتحصيل وتقييم جودة التدريس."
      },
      "features": [
        {
          "title": {
            "en": "Three Isolated Role Portals (Student, Teacher, Admin)",
            "ar": "ثلاث بوابات مخصصة ومستقلة (الطالب، المعلم، الإدارة)"
          },
          "description": {
            "en": "Tailored user interfaces designed specifically for each stakeholder's responsibilities, maintaining strict security boundaries and clear operational focus.",
            "ar": "واجهات مخصصة لكل فئة تلبي احتياجاتها بدقة: بيئة تصفح مريحة للطالب، وأدوات تدريس متطورة للمعلم، ولوحة متابعة وإشراف شاملة للإدارة."
          }
        },
        {
          "title": {
            "en": "Interactive Video Lecture Player & Document Viewer",
            "ar": "مشغل محاضرات الفيديو التفاعلي وعارض المذكرات"
          },
          "description": {
            "en": "Integrated media player supporting chapter navigation, speed controls, video timestamps, and secure embedded PDF lecture summaries and handouts.",
            "ar": "مشغل فيديو تفاعلي يدعم الانتقال بين فصول المحاضرة والتحكم بالسرعة، مع عارض مدمج للمذكرات وملفات PDF والشروحات دون الحاجة لتحميلها خارج المنصة."
          }
        },
        {
          "title": {
            "en": "Teacher Lecture Scheduling & Attendance Logging",
            "ar": "جدولة محاضرات المعلمين وتسجيل الحضور والغياب"
          },
          "description": {
            "en": "Empowers instructors to plan upcoming live or recorded sessions, publish class agendas, and record digital student attendance with absence alerts.",
            "ar": "تمكين المعلم من تنظيم جدول محاضراته القادمة، وتحديد مواعيدها ومحاورها، وتسجيل حضور وغياب الطلاب إلكترونياً مع تنبيهات تلقائية للطلاب المتغيبين."
          }
        },
        {
          "title": {
            "en": "Homework Assignments & Teacher Feedback Grading",
            "ar": "تسليم الواجبات والتكاليف وتصحيح المعلم المباشر"
          },
          "description": {
            "en": "Students submit homework files directly through their portal; instructors review submissions, assign grades, and attach audio or written qualitative feedback.",
            "ar": "يقوم الطلاب برفع الواجبات والمشاريع عبر المنصة، ويقوم المعلم بمراجعتها، ورصد الدرجات، وإرفاق الملاحظات التوجيهية الفردية لكل طالب."
          }
        },
        {
          "title": {
            "en": "Integrated Tuition Payments & Flexible Enrollment",
            "ar": "سداد الرسوم الدراسية إلكترونياً وتفعيل الاشتراكات"
          },
          "description": {
            "en": "Secure online checkout supporting course-by-course purchases, monthly tuition installments, and automatic payment receipt generation.",
            "ar": "بوابات دفع آمنة تتيح للطلاب سداد رسوم الدورات أو الأقساط الشهرية بالبطاقات البنكية، مع تفعيل الاشتراك الفوري وإصدار إيصالات السداد المعتمدة."
          }
        },
        {
          "title": {
            "en": "Student Academic Progress & Transcript Reports",
            "ar": "تتبع الإنجاز الأكاديمي وسجلات الدرجات الشاملة"
          },
          "description": {
            "en": "Maintains comprehensive academic transcripts logging attendance records, quiz scores, assignment completion, and cumulative course GPA.",
            "ar": "سجل أكاديمي رقمي متكامل لكل طالب يوضح نسب الحضور، ودرجات الاختبارات والواجبات، ومستوى التفاعل، ونسبة التقدم نحو إكمال المقرر."
          }
        },
        {
          "title": {
            "en": "Institutional Administration & Revenue Dashboards",
            "ar": "لوحة القيادة الإدارية والتحصيل المالي للمؤسسة"
          },
          "description": {
            "en": "Executive reports tracking active student counts, teacher lecture delivery statistics, tuition collection rates, and outstanding payment reminders.",
            "ar": "تقارير إدارية ومالية شاملة تعرض أعداد الطلاب النشطين، وإنتاجية المعلمين، ونسب تحصيل الرسوم الدراسية، والتنبيه التلقائي للمصروفات المتأخرة."
          }
        }
      ],
      "audience": [
        {
          "en": "Private tutoring centers and educational institutes",
          "ar": "مراكز الدروس الخصوصية والمعاهد التعليمية والتدريبية"
        },
        {
          "en": "Schools and universities running blended learning programs",
          "ar": "المدارس والجامعات التي تطبق برامج التعليم المدمج والتعليم عن بُعد"
        },
        {
          "en": "Professional instructors, teachers and academic tutors",
          "ar": "المعلمون، والمحاضرون الأكاديميون والمدربون المحترفون"
        },
        {
          "en": "Students seeking an organized, accountable learning environment",
          "ar": "الطلاب وأولياء الأمور الباحثون عن بيئة تعليمية منظمة وسهلة المتابعة"
        }
      ],
      "architecture": {
        "en": "ASP.NET Core 9 MVC application organized into distinct Area modules (Student Area, Teacher Area, Admin Area), with Entity Framework Core, SQL Server, and ASP.NET Core Identity for secure role-based authorization.",
        "ar": "مبني بـ ASP.NET Core 9 MVC ومنظم في مناطق برمجية مستقلة (منطقة الطلاب، منطقة المعلمين، منطقة الإدارة)، مع Entity Framework Core وSQL Server ونظام حماية وصلاحيات متقدم بـ Identity."
      }
    },
    "tech": [
      ".NET 9",
      "ASP.NET Core MVC",
      "Entity Framework Core",
      "SQL Server",
      "Identity",
      "C#"
    ]
  },
  {
    "id": "skyscraper-kinetic-visualizer",
    "title": { "en": "Skyscraper Kinetic Architectural Visualizer", "ar": "عارض سكاي سكريبر الحركي للتصميم المعماري" },
    "category": "interactive",
    "featured": false,
    "coverImage": "/images/projects/skyscraper-visualizer.svg",
    "status": {
      "en": "Interactive visual prototype",
      "ar": "نموذج بصري تفاعلي"
    },
    "summary": {
      "en": "A scroll-driven interactive visual experience for luxury real estate and mega-projects, delivering frame-by-frame architectural storytelling, construction timelines, and floor-level exploration.",
      "ar": "تجربة بصرية تفاعلية مستجيبة للتمرير للمشاريع العقارية الكبرى والأبراج الفاخرة، تقدم سرداً معمارياً سينمائياً لقطة بلقطة، ومراحل البناء، واستكشاف الطوابق والمرافق."
    },
    "caseStudy": {
      "overview": {
        "en": "A cutting-edge interactive digital presentation tool engineered for real estate developers, architectural master-planners, and luxury property marketing teams. By synchronizing page scroll momentum with high-resolution frame sequences, it reveals the dynamic evolution of an iconic skyscraper in an immersive, guided visual narrative.",
        "ar": "أداة عرض رقمية تفاعلية فائقة التطور مخصصة لشركات التطوير العقاري، والمكاتب الهندسية، وفرق تسويق المشاريع والأبراج الأيقونية. تربط الأداة حركة تمرير الصفحة بتسلسل لقطات سينمائية عالية الدقة، لتكشف تفاصيل وتطور البرج في قصة بصرية تفاعلية مبهرة."
      },
      "problem": {
        "en": "Real estate developers struggle to convey the prestige, architectural engineering, and interior luxury of billion-dollar skyscraper projects using static brochures, flat PDF floorplans, or passive video renders that investors simply fast-forward through.",
        "ar": "تواجه شركات التطوير العقاري صعوبة كبيرة في إبراز الفخامة والهندسة المعمارية للأبراج والمشاريع المليارية عند استخدام الكتيبات الورقية الثابتة أو ملفات PDF أو مقاطع الفيديو العادية التي يمر عليها المستثمر سريعاً دون تفاعل حقيقي."
      },
      "solution": {
        "en": "The prototype empowers the viewer to control the architectural progression with their own scroll wheel or touch swipe. As they scroll, the skyscraper builds up from foundation to pinnacle, with synchronized camera pans, structural callouts, floor breakdowns, and investor inquiry triggers.",
        "ar": "يمنح هذا النموذج المبتكر المستثمر والعميل القدرة على قيادة العرض المعماري بنفسه عبر التمرير السلس. مع التمرير، يتصاعد البرج لقطة بلقطة من الأساسات إلى القمة مع إضاءة تفاعلية، وشروحات هندسية تظهر في الوقت المناسب، واستعراض مميزات كل طابق."
      },
      "features": [
        {
          "title": {
            "en": "High-Resolution Frame-by-Frame Architectural Evolution",
            "ar": "استعراض التحول المعماري والهندسي لقطة بلقطة"
          },
          "description": {
            "en": "Seamlessly advances through a photographic sequence of building angles, providing 360-degree perceived volume and structural depth without requiring heavy 3D rendering plugins.",
            "ar": "انتقال سلس للغاية عبر تسلسل من اللقطات فائقة الدقة لزوايا البرج، مما يمنح المشاهد إحساساً كاملاً بالأبعاد والعمق المعماري دون الحاجة لمحركات ألعاب ثقيلة."
          }
        },
        {
          "title": {
            "en": "Scroll-Linked Interactive Construction Timeline",
            "ar": "خط زمني تفاعلي مرتبط بحركة التمرير"
          },
          "description": {
            "en": "Ties the visitor's scroll position directly to architectural milestones, allowing investors to pause and inspect foundational, podium, and penthouse levels at their own pace.",
            "ar": "ربط حركة التمرير بمراحل البناء والتطور الهندسي للبرج، مما يتيح للمستثمر التوقف وتأمل تفاصيل الأدوار السفلية أو المتوسطة أو البنتهاوس بكل حرية وسلاسة."
          }
        },
        {
          "title": {
            "en": "Interactive Section & Floor-by-Floor Navigation",
            "ar": "التنقل الذكي بين الطوابق والأقسام والمرافق"
          },
          "description": {
            "en": "Provides quick-jump navigational anchors allowing prospective buyers to jump directly to Commercial, Residential, Sky Lounge, or Penthouse floor tiers.",
            "ar": "شريط تنقل تفاعلي يُمكّن المشترين من الانتقال المباشر بضغطة واحدة إلى أقسام البرج المختلفة (المحلات التجارية، الشقق الفندقية، اللاونج العلوي، البنتهاوس)."
          }
        },
        {
          "title": {
            "en": "High-Performance HTML5 Canvas Rendering Engine",
            "ar": "محرك تصيير فائق السرعة عبر HTML5 Canvas"
          },
          "description": {
            "en": "Renders visual frames directly onto an optimized HTML5 Canvas, achieving locked 60 FPS playback on both high-end desktop monitors and mobile touch devices.",
            "ar": "معالجة اللقطات وعرضها مباشرة عبر تقنية HTML5 Canvas، مما يضمن سرعة عرض ثابتة (60 إطاراً في الثانية) وانعدام أي تقطيع على شاشات الحواسيب أو الهواتف."
          }
        },
        {
          "title": {
            "en": "Contextual Engineering Annotations & Hotspots",
            "ar": "شروحات معمارية تفاعلية ونقاط جذب ذكية"
          },
          "description": {
            "en": "Highlights innovative building technologies (kinetic facade panels, energy-efficient glazing, structural dampers) with sleek animated floating callouts.",
            "ar": "إبراز التقنيات الهندسية الفريدة للبرج (الواجهات الذكية المتحركة، الزجاج الموفر للطاقة، المصاعد فائقة السرعة) عبر نقاط تفاعلية متحركة تشرح التفاصيل."
          }
        },
        {
          "title": {
            "en": "Executive Investor Presentation Mode",
            "ar": "وضع العرض التقديمي المخصص لاجتماعات المستثمرين"
          },
          "description": {
            "en": "Clean, distraction-free fullscreen presentation interface designed to make an unforgettable visual impression during board meetings and sales galleries.",
            "ar": "واجهة عرض ملء الشاشة فائقة النقاء والجمال، مصممة خصيصاً لإبهار المستثمرين وكبار العملاء في قاعات المبيعات واجتماعات مجالس الإدارة."
          }
        },
        {
          "title": {
            "en": "Integrated VIP Lead Capture & Inquiry Routing",
            "ar": "استقبال طلبات الحجز الفوري للمستثمرين (VIP)"
          },
          "description": {
            "en": "Frictionless inquiry forms inviting prospective buyers to schedule private sales gallery visits or download confidential investment prospectuses.",
            "ar": "نماذج تواصل راقية ومدمجة بذكاء في نهاية العرض لدعوة المستثمرين لحجز مواعيد معاينة خاصة أو تحميل كراسة الشروط والمواصفات الاستثمارية."
          }
        }
      ],
      "audience": [
        {
          "en": "Luxury real estate master developers and investment firms",
          "ar": "شركات التطوير العقاري الكبرى وصناديق الاستثمار العقاري"
        },
        {
          "en": "Architectural firms presenting iconic mega-structure bids",
          "ar": "المكاتب الهندسية والمعمارية المشاركة في منافسات وتصاميم الأبراج"
        },
        {
          "en": "High-net-worth property investors and luxury buyers",
          "ar": "كبار المستثمرين والمشترين الباحثين عن وحدات وبنتهاوس في أبراج فاخرة"
        },
        {
          "en": "Digital creative agencies pitching premium interactive campaigns",
          "ar": "وكالات الدعاية والإعلان الرقمي المتخصصة في التسويق العقاري الفاخر"
        }
      ],
      "architecture": {
        "en": "Client-side interactive web application built with HTML5 Canvas, custom image sequencing engines, and GSAP ScrollTrigger for seamless momentum-based timeline synchronization.",
        "ar": "تطبيق ويب تفاعلي يعتمد على HTML5 Canvas ومحركات معالجة تسلسل الصور، مع مكتبة GSAP ScrollTrigger للربط الفيزيائي الانسيابي بين حركة التمرير وتسلسل الحركة."
      }
    },
    "tech": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "GSAP",
      "ScrollTrigger",
      "Canvas",
      "Lenis"
    ]
  },
  {
    "id": "smart-saas-logistics-showcase",
    "title": { "en": "Smart SaaS Logistics 3D Showcase", "ar": "عرض تفاعلي ثلاثي الأبعاد لمنصة لوجستية سحابية" },
    "category": "interactive",
    "featured": false,
    "coverImage": "/images/projects/smart-saas-logistics.svg",
    "status": {
      "en": "Interactive visual prototype",
      "ar": "نموذج بصري تفاعلي"
    },
    "summary": {
      "en": "A browser-based interactive 3D WebGL showcase presenting modern logistics, freight forwarding, and smart fleet telemetry through scroll-synchronized 3D environments and cinematic lighting.",
      "ar": "عرض ويب تفاعلي ثلاثي الأبعاد بـ WebGL يقدم حلول إدارة الأساطيل والخدمات اللوجستية الحديثة، عبر مشهد تفاعلي ثلاثي الأبعاد مستجيب للتمرير مع إضاءة سينمائية."
    },
    "caseStudy": {
      "overview": {
        "en": "An immersive 3D digital concept showcase engineered to visualize complex supply chain, freight forwarding, and automated fleet tracking platforms. Using browser WebGL rendering, it presents logistics networks not as dry spreadsheets, but as a living, interconnected 3D ecosystem.",
        "ar": "عرض رقمي تفاعلي ثلاثي الأبعاد مصمم لتجسيد شبكات سلاسل الإمداد والشحن الدولي وتتبع الأساطيل الذكية. ينقل هذا النموذج المفاهيم اللوجستية من مجرد جداول وأرقام جامدة إلى منظومة ثلاثية الأبعاد تنبض بالحياة والتفاعل داخل المتصفح."
      },
      "problem": {
        "en": "Logistics SaaS providers struggle to communicate the sophistication of their cloud telemetry, automated dispatch algorithms, and multi-modal freight tracking to enterprise enterprise buyers through traditional static corporate websites.",
        "ar": "تواجه منصات البرمجيات اللوجستية صعوبة في إبراز قوة حلولها التقنية، وخوارزميات التوزيع الآلي، وتتبع الشحنات متعددة الوسائط (بر، بحر، جو) عند الاعتماد على المواقع التقليدية الثابتة التي تفتقر للإبهار البصري."
      },
      "solution": {
        "en": "The prototype builds an interactive 3D WebGL scene where cargo routes, fleet vehicles, and regional distribution nodes animate seamlessly as the visitor scrolls through product capabilities, creating an indelible impression of technological leadership.",
        "ar": "يبني النموذج بيئة ثلاثية الأبعاد بـ WebGL تتفاعل وتتحرك فيها مسارات الشحن والشاحنات ومراكز التوزيع بانسيابية تامة استجابة لتمرير الزائر، مما يرسخ صورة ذهنية قوية عن التطور التقني للشركة في ذهن العميل المؤسسي."
      },
      "features": [
        {
          "title": {
            "en": "Real-Time 3D WebGL Global Logistics Scene",
            "ar": "مشهد WebGL ثلاثي الأبعاد للشبكات اللوجستية"
          },
          "description": {
            "en": "Renders interactive 3D models of cargo transport vehicles, freight containers, and hub nodes with dynamic materials, shadow casting, and cinematic depth.",
            "ar": "تصيير ثلاثي الأبعاد فوري لحاويات الشحن وشاحنات النقل ومراكز التوزيع مع خامات واقعية وظلال ديناميكية وعمق بصري سينمائي جذاب."
          }
        },
        {
          "title": {
            "en": "Scroll-Driven Feature Tour & Cinematic Camera Moves",
            "ar": "جولة تعريفية بالمنتج بانتقالات كاميرا سينمائية"
          },
          "description": {
            "en": "Guides the viewer through key logistics capabilities via fluid 3D camera sweeps that reposition around vehicles and warehouses as the user scrolls down the page.",
            "ar": "تحريك الكاميرا ثلاثية الأبعاد بسلاسة تامة حول محطات العمل والشاحنات مع تمرير الصفحة، لاستعراض مميزات المنصة اللوجستية خطوة بخطوة."
          }
        },
        {
          "title": {
            "en": "Lenis Smooth Scroll & Normalized Physics",
            "ar": "تمرير فائق الانسيابية بمحرك Lenis"
          },
          "description": {
            "en": "Employs Lenis normalized smooth scrolling to eliminate jitter and maintain a silky 60 FPS animation feel across all operating systems and trackpads.",
            "ar": "استخدام تقنية Lenis لضبط فيزياء التمرير التلقائي ومنع أي تقطيع أو اهتزاز، لتوفير تجربة تصفح غاية في النعومة على كافة الشاشات وأجهزة اللمس."
          }
        },
        {
          "title": {
            "en": "Interactive Telemetry & Sensor Mockup Overlays",
            "ar": "محاكاة مؤشرات التتبع الفوري وقياسات الأسطول"
          },
          "description": {
            "en": "Contextual floating UI cards displaying simulated telemetry data—vehicle speed, engine temperature, fuel efficiency, and GPS coordinates—attached directly to 3D models.",
            "ar": "بطاقات بيانات تفاعلية عائمة تعرض قياسات الأسطول الحية (سرعة المركبة، مسار الرحلة، استهلاك الوقود، الإحداثيات) متصلة مباشرة بالمجسمات ثلاثية الأبعاد."
          }
        },
        {
          "title": {
            "en": "Supply Chain Node & Distribution Center Focus",
            "ar": "استكشاف مراكز التوزيع والعقد اللوجستية"
          },
          "description": {
            "en": "Zooms into centralized distribution hubs, illustrating automated warehouse sortation, cross-docking transitions, and last-mile dispatch stages.",
            "ar": "التركيز البصري على مراكز الفرز والتوزيع، وتوضيح آليات الفرز الآلي والشحن السريع ومراحل التسليم النهائي للمستهلك."
          }
        },
        {
          "title": {
            "en": "Brand Positioning & Enterprise Pitching Impact",
            "ar": "بناء المكانة التقنية لجذب الصفقات المؤسسية الكبرى"
          },
          "description": {
            "en": "Dramatically increases customer session duration and demo request conversions by presenting a futuristic, highly capable digital brand identity.",
            "ar": "مضاعفة زمن بقاء الزوار في الموقع ورفع معدل طلب العروض التوضيحية (Demos) بفضل ترسيخ هوية تجارية رائدة تجمع بين القوة التقنية والجمال البصري."
          }
        },
        {
          "title": {
            "en": "Enterprise Demo Booking & Call-to-Action Funnel",
            "ar": "قمع حجز العروض التوضيحية والتواصل السريع"
          },
          "description": {
            "en": "Integrated action triggers inviting enterprise logistics managers to schedule a customized system walkthrough or speak with sales engineers.",
            "ar": "أزرار حث على اتخاذ القرار مصممة بعناية لتحفيز مديري العمليات والشركات على طلب عرض توضيحي حي للمنظومة اللوجستية."
          }
        }
      ],
      "audience": [
        {
          "en": "Third-party logistics (3PL) and freight forwarding firms",
          "ar": "شركات الشحن الدولي ووكلاء الخدمات اللوجستية وسلاسل الإمداد"
        },
        {
          "en": "Fleet management SaaS startups pitching enterprise clients",
          "ar": "منصات البرمجيات السحابية الناشئة في إدارة الأساطيل والنقل"
        },
        {
          "en": "Supply chain executives evaluating modern logistics tech",
          "ar": "المدراء التنفيذيون لقطاعات النقل والتوريد الباحثون عن حلول متقدمة"
        }
      ],
      "architecture": {
        "en": "Built on Vite and ES modules with Three.js WebGL scene graph rendering, GSAP ScrollTrigger animation timelines, and Lenis smooth scrolling integration.",
        "ar": "مبني بـ Vite ووحدات ES مع محرك Three.js لتصيير مشاهد WebGL، ومكتبة GSAP ScrollTrigger لإدارة الخط الزمني للحركة، وتمرير Lenis فائق الانسيابية."
      }
    },
    "tech": [
      "Vite",
      "JavaScript",
      "Three.js",
      "GSAP",
      "Lenis",
      "WebGL"
    ]
  },
  {
    "id": "control-a-agency",
    "title": { "en": "Control A Digital Agency Corporate Website", "ar": "الموقع الرسمي لشركة كنترول إيه للحلول الرقمية" },
    "category": "web-apps",
    "featured": false,
    "coverImage": "/images/projects/control-a-agency.svg",
    "summary": {
      "en": "A bilingual (Arabic/English) corporate digital agency web platform featuring comprehensive services portfolios, dynamic case study showcases, consultation lead capture, and a protected admin CMS.",
      "ar": "منصة ويب مؤسسية متكاملة لشركة حلول برمجية تدعم اللغتين العربية والإنجليزية، تضم دليلاً شاملاً للخدمات، ومعرضاً لسوابق الأعمال، وحجز الاستشارات، مع لوحة تحكم CMS لإدارة المحتوى."
    },
    "caseStudy": {
      "overview": {
        "en": "A robust corporate web presence developed for a specialized software development and digital transformation agency. It combines polished bilingual marketing interfaces with an integrated administrative CMS, allowing non-technical marketing staff to update services, projects, partner logos, and team credentials without touching code.",
        "ar": "موقع مؤسسي احترافي متكامل لشركة تطوير حلول برمجية وتحول رقمي. يجمع بين واجهات تسويقية راقية باللغتين العربية والإنجليزية، ولوحة تحكم إدارية (CMS) تمكن فريق العمل من تحديث الخدمات والمشاريع وسوابق الأعمال وشركاء النجاح وفريق العمل بسهولة تامة دون الحاجة لكتابة كود."
      },
      "problem": {
        "en": "Software and design agencies lose lucrative enterprise clients when their websites lack credibility, fail to showcase completed case studies clearly, feel clumsy in Arabic, or require expensive developer time for simple text and image updates.",
        "ar": "تفقد شركات البرمجيات صفقات كبرى عندما يفشل موقعها الإلكتروني في إبراز هويتها الاحترافية وسوابق أعمالها بوضوح، أو عندما يعاني الموقع من رداءة التعريب والتنسيق العربي، أو عندما يحتاج تعديل كلمة أو إضافة مشروع إلى مطور مفرغ لتعديل الكود."
      },
      "solution": {
        "en": "The platform delivers a bespoke, fully localized Arabic and English corporate website with dedicated pages for every agency service, an interactive portfolio of completed client projects, a lead qualification contact funnel, and a password-protected administrative dashboard for all content.",
        "ar": "يقدم الموقع حلاً مؤسسياً متكاملاً بواجهات عربية وإنجليزية أصيلة، وصفحات مخصصة لكل خدمة برمجية، ومعرض تفاعلي للمشاريع ودراسات الحالة، ونظام حجز استشارات وجمع طلبات المشاريع، مع لوحة إدارة مركزية محمية بالمصادقة للتحكم في كل عناصر الموقع."
      },
      "features": [
        {
          "title": {
            "en": "Full Native Bilingual Localization (Arabic & English)",
            "ar": "تعريب وتوطين مؤسسي كامل باللغتين (العربية والإنجليزية)"
          },
          "description": {
            "en": "Seamless language switching with proper Right-to-Left (RTL) typography for Arabic and Left-to-Right (LTR) for English, utilizing robust resource-file architecture.",
            "ar": "تبديل فوري وسلس بين اللغتين مع محاذاة وتنسيق طباعي أصيل للغة العربية (RTL) والإنجليزية (LTR)، مستنداً إلى بنية ملفات الموارد المعيارية."
          }
        },
        {
          "title": {
            "en": "Comprehensive Services & Technical Solutions Directory",
            "ar": "دليل الخدمات والحلول التقنية المتخصصة"
          },
          "description": {
            "en": "Dedicated detail pages for each service offering (Web Development, Mobile Apps, Cloud ERP, UI/UX Design, DevOps), detailing deliverables and process methodologies.",
            "ar": "صفحات مخصصة ومفصلة لكل خدمة برمجية (تطوير الويب، تطبيقات الموبايل، أنظمة ERP، تصميم الواجهات UX/UI) توضح منهجية العمل والنتائج المسلمة للعميل."
          }
        },
        {
          "title": {
            "en": "Dynamic Case Studies & Portfolio Showcase",
            "ar": "معرض المشاريع ودراسات الحالة وسوابق الأعمال"
          },
          "description": {
            "en": "Interactive project gallery filterable by industry and technology, presenting client challenges, delivered solutions, and project screenshots to build immediate trust.",
            "ar": "معرض مشاريع تفاعلي مصنف حسب القطاعات والتقنيات، يعرض المشكلة والحل والنتائج التي حققها المشروع لإثبات كفاءة وخبرة الشركة أمام العملاء الجدد."
          }
        },
        {
          "title": {
            "en": "Protected Administrative Content Management System (CMS)",
            "ar": "لوحة تحكم إدارة المحتوى (Admin CMS) المحمية"
          },
          "description": {
            "en": "A secure admin portal allowing marketing managers to add new projects, publish services, update contact info, and manage partner logos via simple web forms.",
            "ar": "لوحة تحكم إدارية محمية بالمصادقة تمكن مسؤولي المحتوى من إضافة المشاريع وتعديل الخدمات وتحديث بيانات التواصل وشركاء النجاح عبر نماذج ويب سهلة."
          }
        },
        {
          "title": {
            "en": "Lead Capture, Inquiry Routing & Consultation Booking",
            "ar": "استقبال طلبات المشاريع ونماذج التواصل الذكية"
          },
          "description": {
            "en": "Interactive contact and quote-request forms that validate customer inputs, categorize project budgets, and route inquiries directly to agency account executives.",
            "ar": "نماذج تواصل وطلب عروض أسعار تفاعلية تفحص مدخلات العميل وتحدد ميزانية ونطاق المشروع وتوجه الطلب فوراً لمديري الحسابات للمتابعة."
          }
        },
        {
          "title": {
            "en": "Team Profiles, Company Culture & Institutional Credentials",
            "ar": "فريق العمل، ثقافة الشركة والاعتمادات المؤسسية"
          },
          "description": {
            "en": "Highlights leadership bios, technical engineering talents, certifications, and company milestones to reassure enterprise procurement committees.",
            "ar": "استعراض خبرات القيادة والمهندسين والشهادات التقنية وتاريخ تطور الشركة لبناء أقصى درجات الثقة والمصداقية لدى لجان التعاقد في كبرى الشركات."
          }
        },
        {
          "title": {
            "en": "Client Testimonials & Strategic Partners Grid",
            "ar": "آراء العملاء والشركاء الاستراتيجيين"
          },
          "description": {
            "en": "Curated section showcasing client reviews, video testimonials, and partner company logos with dynamic management via the admin panel.",
            "ar": "قسم مخصص لشهادات وآراء العملاء وشعارات الشركاء الاستراتيجيين مع إمكانية تحديثها وإدارتها بسهولة من لوحة التحكم."
          }
        }
      ],
      "audience": [
        {
          "en": "Enterprise corporate clients seeking digital transformation",
          "ar": "الشركات الكبرى والمؤسسات الباحثة عن حلول تحول رقمي وبرمجيات مخصصة"
        },
        {
          "en": "Startups and scale-ups needing a trusted engineering partner",
          "ar": "الشركات الناشئة ورواد الأعمال الباحثون عن شريك تقني متمرس لتطوير تطبيقاتهم"
        },
        {
          "en": "Agency executives managing corporate brand reputation",
          "ar": "إدارة الشركة وفريق التسويق الساعي لبناء حضور رقمي قوي ومتميز"
        }
      ],
      "architecture": {
        "en": "ASP.NET Core 9 MVC application using Microsoft.AspNetCore.Localization, ASP.NET Core Identity authentication, SQLite database for lightweight persistence, and clean MVC controller separation.",
        "ar": "مبني بـ ASP.NET Core 9 MVC مع middleware التعريب، وأمان الهوية بـ Identity، وقاعدة بيانات سريعة، ومتحكمات منظمة لصفحات الموقع وإدارته."
      }
    },
    "tech": [
      ".NET 9",
      "ASP.NET Core MVC",
      "Entity Framework Core",
      "SQLite",
      "Identity",
      "Localization",
      "Bootstrap"
    ]
  },
  {
    "id": "keep-going-health",
    "title": { "en": "Keep Going Health & Medical Portal", "ar": "بوابة كيب جوينج للصحة والخدمات الطبية" },
    "category": "web-apps",
    "featured": false,
    "coverImage": "/images/projects/keep-going-health.svg",
    "summary": {
      "en": "A bilingual health and medical advisory web platform featuring health services directories, a medical article and news publishing portal, client success transformations, and a secure admin CMS.",
      "ar": "منصة ويب صحية وطبية ثنائية اللغة تضم دليلاً للخدمات والاستشارات الصحية، وبوابة لنشر المقالات والأخبار الطبية، ومعرضاً لقصص التحول الصحي، ولوحة إدارة CMS محمية."
    },
    "caseStudy": {
      "overview": {
        "en": "A professional health and wellness web platform designed for medical consultation practices, fitness transformation centers, and health advisory clinics. It combines public health education and service catalogs with an admin publishing system for medical content and patient inquiries.",
        "ar": "منصة ويب صحية واستشارية متكاملة مصممة لمراكز الاستشارات الصحية، وعيادات التغذية واللياقة، والمؤسسات الطبية. تجمع بين التثقيف الصحي وعرض الخدمات الطبية، ولوحة إدارة مركزية لنشر المقالات واستقبال طلبات الاستشارة من المستفيدين."
      },
      "problem": {
        "en": "Health clinics and wellness advisors struggle to build authority when their online presence is limited to informal social media accounts where medical advice gets lost, client success stories cannot be cataloged, and consultation inquiries go unanswered.",
        "ar": "يعاني مقدمو الخدمات الصحية ومستشارو التغذية واللياقة من صعوبة بناء هوية موثوقة عندما ينحصر نشاطهم في حسابات التواصل الاجتماعي؛ حيث تضيع المقالات العلمية، ويصعب توثيق حالات النجاح، وتتشتت رسائل استفسارات العملاء دون تنظيم."
      },
      "solution": {
        "en": "The platform delivers an authoritative bilingual website with clear health consultation programs, an indexed medical blog with category tags, a client transformation case-study portfolio, and an admin panel for publishing content and reviewing patient messages.",
        "ar": "توفر المنصة موقعاً موثوقاً باللغتين العربية والإنجليزية يوضح برامج الاستشارات الصحية، ومدونة طبية مفهرسة بالتصنيفات، ومعرضاً لقصص نجاح العملاء، مع لوحة إدارة تمكن الفريق من نشر المقالات ومتابعة رسائل وحجوزات المرضى."
      },
      "features": [
        {
          "title": {
            "en": "Specialized Health Services Directory & Program Overview",
            "ar": "دليل البرامج والخدمات الاستشارية الصحية"
          },
          "description": {
            "en": "Comprehensive presentation of clinical health consultation packages, nutrition plans, lifestyle coaching, and chronic condition management tracks.",
            "ar": "استعراض مفصل لباقات الاستشارات الصحية، وبرامج التغذية العلاجية، والتأهيل البدني، ومتابعة نمط الحياة، مع تفاصيل كل باقة ومخرجاتها للمستفيد."
          }
        },
        {
          "title": {
            "en": "Medical Articles, News & Health Education Portal",
            "ar": "بوابة المقالات الطبية والأخبار والتوعية الصحية"
          },
          "description": {
            "en": "Fully categorized knowledge hub allowing health specialists to publish evidence-based articles, health tips, and wellness news with image optimization.",
            "ar": "مركز معرفي طبي مصنف يتيح للمختصين نشر المقالات الموثوقة، والنصائح الصحية، والأخبار التوعوية، مع معالجة وتحسين جودة الصور الطبية تلقائياً."
          }
        },
        {
          "title": {
            "en": "Client Transformation Portfolio & Success Stories",
            "ar": "معرض قصص النجاح وحالات التحول الصحي"
          },
          "description": {
            "en": "Visual case studies showcasing client health improvements, weight management milestones, and lifestyle transformations to build strong clinical trust.",
            "ar": "توثيق منظم لحالات تعافي ونجاح المستفيدين ونتائج التحول الصحي والبدني، لترسيخ الثقة والمصداقية لدى المراجعين الجدد."
          }
        },
        {
          "title": {
            "en": "Protected Multilingual Admin Control Panel",
            "ar": "لوحة تحكم إدارية آمنة ومتعددة اللغات"
          },
          "description": {
            "en": "Secure administrative dashboard for creating, editing, and publishing bilingual articles, updating service packages, and reviewing website inquiries.",
            "ar": "لوحة تحكم إدارية محمية تتيح للفريق الطبي والإداري كتابة ونشر المقالات باللغتين، وتعديل باقات الخدمات، ومتابعة كافة رسائل واستفسارات الموقع."
          }
        },
        {
          "title": {
            "en": "Dynamic Content Blocks & Announcement Banners",
            "ar": "إدارة كتل المحتوى والبانرات التوعوية التفاعلية"
          },
          "description": {
            "en": "Modular content system empowering administrators to update homepage banners, seasonal promotions, and alert ribbons in both Arabic and English.",
            "ar": "نظام كتل محتوى مرن يتيح للإدارة تحديث إعلانات الصفحة الرئيسية، وبانرات المبادرات الصحية، والرسائل التنبيهية بالعربية والإنجليزية بسهولة."
          }
        },
        {
          "title": {
            "en": "Patient Inquiry Routing & Consultation Booking",
            "ar": "استقبال استفسارات المرضى وحجز الاستشارات"
          },
          "description": {
            "en": "Structured intake forms capturing patient goals, contact details, and preferred consultation times, notifying the medical team instantly.",
            "ar": "نماذج حجز واستفسار تفاعلية تجمع أهداف المريض وبيانات التواصل والوقت المفضل للاستشارة، مع توجيه الطلب للطبيب أو المستشار فوراً."
          }
        },
        {
          "title": {
            "en": "Mobile-First Patient Experience & High Accessibility",
            "ar": "تجربة مستخدم سريعة وسلسة متوافقة مع الهواتف"
          },
          "description": {
            "en": "Designed for effortless reading on smartphones and tablets with high-contrast typography, fast page load speeds, and clean navigation.",
            "ar": "تصميم مريح وسريع للغاية للقراءة على الهواتف الذكية والأجهزة اللوحية، مع خطوط طباعية واضحة ومتباينة وملاحة سهلة وسلسة."
          }
        }
      ],
      "audience": [
        {
          "en": "Health, nutrition and wellness consultation clinics",
          "ar": "عيادات ومراكز الاستشارات الصحية والتغذية العلاجية واللياقة"
        },
        {
          "en": "Doctors, nutritionists and certified health coaches",
          "ar": "الأطباء، وأخصائيو التغذية، ومستشارو الصحة وتعديل نمط الحياة"
        },
        {
          "en": "Patients seeking credible health advice and personal guidance",
          "ar": "المستفيدون والمرضى الباحثون عن استشارات صحية موثوقة وبرامج مخصصة"
        }
      ],
      "architecture": {
        "en": "ASP.NET Core 9 MVC with Entity Framework Core, SQL Server, ASP.NET Core Identity security, and SixLabors.ImageSharp for server-side medical image optimization.",
        "ar": "مبني بـ ASP.NET Core 9 MVC مع Entity Framework Core وSQL Server ونظام أمان Identity، ومكتبة SixLabors.ImageSharp لمعالجة الصور الطبية بالسيرفر."
      }
    },
    "tech": [
      ".NET 9",
      "ASP.NET Core MVC",
      "Entity Framework Core",
      "SQL Server",
      "Identity",
      "ImageSharp"
    ]
  },
  {
    "id": "biometric-gate-system",
    "title": { "en": "Biometric Gate Access & Sports Evaluation System", "ar": "نظام الدخول بالبصمة وتقييم الأداء الرياضي" },
    "category": "desktop",
    "featured": false,
    "coverImage": "/images/projects/biometric-gate-system.svg",
    "summary": {
      "en": "An integrated access-control and physical testing platform combining hardware fingerprint verification, IP camera capture, RFID cards, and AI computer vision for automated sports exercise scoring.",
      "ar": "منظومة تحكم أمني واختبارات رياضية متكاملة تدمج التحقق البيومتري ببصمة الإصبع، وكاميرات المراقبة، وبطاقات RFID، والذكاء الاصطناعي لتقييم وعد التمارين الرياضية آلياً."
    },
    "caseStudy": {
      "overview": {
        "en": "A mission-critical desktop security and athletic evaluation platform built for sports academies, military training centers, and fitness testing institutions. It controls physical turnstile gates using multi-factor biometric authentication, logs every entry, and incorporates AI computer-vision pose estimation to count and grade pushups and sit-ups automatically.",
        "ar": "منظومة أمنية ورياضية متقدمة مصممة للأكاديميات الرياضية، والكليات العسكرية، ومراكز تقييم اللياقة البدنية. تدير المنظومة بوابات الدخول الإلكترونية بالمصادقة البيومترية متعددة العوامل (بصمة، كاميرا، بطاقات ذكية)، مع دمج نماذج ذكاء اصطناعي (Computer Vision) لتقييم وعد تمارين اللياقة آلياً بكاميرا الفيديو."
      },
      "problem": {
        "en": "Testing academies and athletic facilities face fraud and delays when relying on paper rosters or unverified card swaps. Physical tests suffer from human counting bias, disputes over rep validity, and manual entry errors that compromise athlete evaluation integrity.",
        "ar": "تواجه أكاديميات التدريب ومراكز التقييم الرياضي مشاكل انتحال الشخصية وتبادل البطاقات بين الطلاب عند الدخول، بالإضافة إلى التحيز البشري وأخطاء العد اليدوي لتمارين اللياقة (كالضغط والبطن)، مما يسبب نزاعات ويؤثر على نزاهة نتائج التقييم."
      },
      "solution": {
        "en": "The system enforces multi-factor identity verification at the gate (fingerprint scan matching + live camera face snapshot + RFID card read) before releasing turnstile gates. During testing sessions, integrated Python pose-estimation models analyze athlete video feeds to count only bio-mechanically valid repetitions automatically.",
        "ar": "تفرض المنظومة مصادقة ثلاثية عند البوابة (مطابقة بصمة الإصبع + التقاط صورة حية بالكاميرا + قراءة بطاقة RFID) قبل فتح البوابة الإلكترونية. وفي قاعات الاختبار، يقوم نموذج الذكاء الاصطناعي بتحليل وضعية جسم الرياضي بالكاميرا وعد التكرارات الصحيحة فقط آلياً دون أي تدخل بشري."
      },
      "features": [
        {
          "title": {
            "en": "Hardware Biometric Fingerprint Authentication",
            "ar": "المصادقة البيومترية فائقة السرعة ببصمة الإصبع"
          },
          "description": {
            "en": "Integrates directly with optical fingerprint scanner hardware via custom native modules, performing 1:N biometric matching in under 500ms at the gate.",
            "ar": "تكامل مباشر مع أجهزة قراءة البصمة الضوئية عبر مكتبة FPrintModule للتحقق والمطابقة البيومترية الفورية خلال أقل من نصف ثانية عند البوابة."
          }
        },
        {
          "title": {
            "en": "Live Camera Feed & Automated Identity Capture",
            "ar": "البث المباشر للكاميرات والالتقاط البصري للوجه"
          },
          "description": {
            "en": "Streams live USB and IP cameras via AForge.Video, snapping and archiving high-resolution photos of each individual as they pass through the gate.",
            "ar": "بث حي لكاميرات المراقبة وكاميرات USB عبر AForge.Video، مع التقاط وأرشفة صورة فوتوغرافية واضحة لكل شخص يمر عبر البوابة للتحقق الأمني."
          }
        },
        {
          "title": {
            "en": "Contactless RFID/NFC Access Card Scanning",
            "ar": "قراءة وتدقيق بطاقات الدخول الذكية RFID/NFC"
          },
          "description": {
            "en": "Reads contactless smart cards linked to student or recruit records, verifying active credentials and permissions before authorizing entry.",
            "ar": "قراءة سريعة لبطاقات الدخول الذكية بدون تلامس وربطها بملف الطالب أو المتدرب، والتأكد من سريان الصلاحية وجدول الاختبار المصرح له."
          }
        },
        {
          "title": {
            "en": "Scheduled Committee Tests & Session Management",
            "ar": "إدارة لجان وجلسات الاختبارات الرياضية المجدولة"
          },
          "description": {
            "en": "Schedules athletic test cohorts by date, committee, and time slot, preventing entry for athletes outside their assigned testing window.",
            "ar": "جدولة مواعيد لجان الاختبارات الرياضية واللياقية وتوزيع الطلاب على المجموعات، ومنع دخول أي متدرب خارج الموعد المحدد للجنته."
          }
        },
        {
          "title": {
            "en": "AI Computer Vision Pose Estimation for Exercise Scoring",
            "ar": "الذكاء الاصطناعي وتقدير وضعية الجسم لعد التمارين آلياً"
          },
          "description": {
            "en": "Python computer vision algorithms analyze body joint angles from video feeds, automatically counting valid pushup and sit-up reps while rejecting incomplete reps.",
            "ar": "نماذج رؤية حاسوبية (Pose Estimation) ترصد زوايا مفاصل الجسم من الكاميرا وتعد التكرارات الصحيحة لتمارين الضغط والبطن آلياً مع استبعاد الحركات غير المكتملة."
          }
        },
        {
          "title": {
            "en": "Real-Time Access Logs & Anti-Passback Enforcement",
            "ar": "سجل تدقيق الدخول والخروج ومنع التمرير المزدوج"
          },
          "description": {
            "en": "Comprehensive real-time audit trail recording exact timestamps and photos, enforcing anti-passback rules to prevent card sharing.",
            "ar": "سجل تدقيق أمني فوري يسجل تاريخ ووقت وصورة كل محاولة دخول، مع تطبيق ميزة منع التمرير المزدوج (Anti-Passback) لمنع استخدام البطاقة مرتين."
          }
        },
        {
          "title": {
            "en": "Bulk Excel Data Import/Export & Athletic Reports",
            "ar": "الاستيراد والتصدير الجماعي بـ Excel والتقارير الرياضية"
          },
          "description": {
            "en": "Imports thousands of student records via ExcelDataReader and exports detailed committee results, attendance sheets, and athletic scores instantly.",
            "ar": "استيراد وتصدير آلاف سجلات الطلاب بنتائجهم بملفات Excel عبر ExcelDataReader، وإصدار كشوف الحضور والدرجات النهائية للجان فور انتهاء الاختبارات."
          }
        }
      ],
      "audience": [
        {
          "en": "Military colleges, police academies and defense training facilities",
          "ar": "الكليات العسكرية، وأكاديميات الشرطة ومراكز تدريب الدفاع والأمن"
        },
        {
          "en": "Sports federations, athletic clubs and physical testing institutes",
          "ar": "الاتحادات الرياضية، والأندية، ومراكز قياس الكفاءة واللياقة البدنية"
        },
        {
          "en": "Security directors overseeing high-security facility access",
          "ar": "مديرو الأمن والسلامة في المنشآت الحيوية التي تتطلب رقابة بيومترية صارمة"
        }
      ],
      "architecture": {
        "en": ".NET Windows Forms architecture backed by Entity Framework Core and SQL Server, integrating native FPrintModule C++ DLLs, AForge.Video DirectShow drivers, and connected Python OpenCV/MediaPipe AI services.",
        "ar": "تطبيق .NET Windows Forms مع Entity Framework Core وSQL Server، يدمج مكتبة FPrintModule للبصمة، وAForge.Video للكاميرات، مع نماذج ذكاء اصطناعي بـ Python وOpenCV."
      }
    },
    "tech": [
      ".NET",
      "Windows Forms",
      "Entity Framework Core",
      "SQL Server",
      "AForge",
      "Biometrics",
      "RFID",
      "Python AI"
    ]
  },
  {
    "id": "parentguard-monitoring",
    "title": { "en": "ParentGuard — Child Safety & Monitoring Suite", "ar": "بارنت جارد — نظام حماية الأطفال ومتابعتهم" },
    "category": "mobile",
    "featured": false,
    "coverImage": "/images/projects/parentguard-monitoring.svg",
    "summary": {
      "en": "A private, self-hosted parental monitoring ecosystem featuring a WPF desktop parent dashboard and an Android companion app, paired via QR code and secured with end-to-end AES-256-GCM encryption.",
      "ar": "منظومة متابعة وحماية أسرية خاصة ومستضافة ذاتياً، تضم لوحة تحكم WPF لسطح المكتب وتطبيق أندرويد مرافق، مقترنين برمز QR ومشفرين بالكامل بتقنية AES-256-GCM."
    },
    "caseStudy": {
      "overview": {
        "en": "A privacy-first parental control and device safety system designed for modern families. It enables parents to monitor child device activity—including live GPS location, screen time, camera verification, messages, and calls—directly over a local, end-to-end encrypted WebSocket connection without routing sensitive family data through commercial third-party cloud servers.",
        "ar": "منظومة أمان ومتابعة أسرية تحترم الخصوصية مصممة للعائلات. تتيح للآباء الاطمئنان على أطفالهم وتتبع موقعهم الجغرافي المباشر، ووقت الشاشة، ومحيط الكاميرا، وسجل الرسائل والمكالمات عبر اتصال محلي مشفر ومباشر بين الأجهزة دون إرسال أي بيانات خاصة لخوادم سحابية خارجية."
      },
      "problem": {
        "en": "Parents are deeply concerned about child safety online and in the real world, yet commercial monitoring apps expose families to grave risks: subscription fees, hidden cloud data harvesting, security breaches, and covert spy mechanics that destroy trust between parents and children.",
        "ar": "يشعر الآباء بقلق بالغ على سلامة أطفالهم في الفضاء الرقمي والواقعي، إلا أن تطبيقات المراقبة التجارية تفرض اشتراكات باهظة وتخزن بيانات العائلة الحساسة على خوادم غريبة معرضة للاختراق، فضلاً عن عملها بأسلوب تجسسي خفي يدمر الثقة بين الوالد وابنه."
      },
      "solution": {
        "en": "ParentGuard establishes a direct peer-to-peer encrypted connection between the parent's PC and child's phone using a simple QR-code handshake. It operates transparently: the child is presented with a clear consent screen, and an ongoing persistent notification confirms the safe monitoring session.",
        "ar": "يقدم ParentGuard حلاً آمناً ومستضافاً ذاتياً يربط كمبيوتر الوالد بهاتف الطفل عبر مسح رمز QR مشفر بتقنية AES-256-GCM وتبادل مفاتيح ECDH. ويعمل النظام بشفافية تامة؛ حيث تظهر شاشة موافقة واضحة للطفل وإشعار مستمر يؤكد الاتصال الآمن مع الوالد."
      },
      "features": [
        {
          "title": {
            "en": "Zero-Cloud QR Code Pairing & Direct Linking",
            "ar": "الإقران الفوري برمز QR والربط المباشر بدون سحابة"
          },
          "description": {
            "en": "Desktop dashboard generates an encrypted ephemeral QR code; scanning it with the Android phone establishes a direct local WebSocket connection instantly.",
            "ar": "يولد سطح المكتب رمز QR مشفراً مؤقتاً؛ يمسحه هاتف أندرويد لإنشاء اتصال محلي فوري ومباشر عبر WebSocket دون الحاجة لأي خادم وسيط على الإنترنت."
          }
        },
        {
          "title": {
            "en": "End-to-End Encryption (AES-256-GCM & ECDH P-256)",
            "ar": "تشفير عسكري من طرف إلى طرف (AES-256-GCM & ECDH)"
          },
          "description": {
            "en": "All telemetry, streams, and messages are encrypted with AES-256-GCM using keys exchanged via Elliptic Curve Diffie-Hellman, with HMAC-SHA256 replay protection.",
            "ar": "تشفير كافة البيانات والمواقع والمحادثات بتقنية AES-256-GCM مع مفاتيح ديناميكية عبر منحنيات Diffie-Hellman وحماية ضد هجمات إعادة الإرسال بـ HMAC-SHA256."
          }
        },
        {
          "title": {
            "en": "Live Geolocation Tracking & Safe Zone Boundaries",
            "ar": "تتبع الموقع الجغرافي اللحظي وحدود الأمان الجغرافية"
          },
          "description": {
            "en": "Continuous GPS tracking plotted on the parent's dashboard map with location history trails, battery status alerts, and arrival/departure notifications.",
            "ar": "تتبع دقيق للموقع الجغرافي للطفل على خريطة لوحة التحكم، مع مسار الرحلة، ومستوى شحن بطارية الهاتف، والتنبيه التلقائي عند مغادرة المنطقة الآمنة."
          }
        },
        {
          "title": {
            "en": "Live Remote Camera Stream for Environmental Safety",
            "ar": "المشاهدة المباشرة للكاميرا والاطمئنان على البيئة المحيطة"
          },
          "description": {
            "en": "Allows parents to stream video from the phone's front or rear camera on demand to verify the child's physical surroundings during emergencies.",
            "ar": "إمكانية فتح بث مباشر ومؤقت لكاميرا الهاتف الأمامية أو الخلفية عند الضرورة والحالات الطارئة للاطمئنان على سلامة الطفل والبيئة المحيطة به."
          }
        },
        {
          "title": {
            "en": "Screen Time Analytics & App Usage Limits",
            "ar": "تحليل وقت الشاشة وضبط حدود استخدام التطبيقات"
          },
          "description": {
            "en": "Detailed breakdown of daily screen time, displaying hours spent in games, social media, and educational apps to help foster balanced digital habits.",
            "ar": "رسم بياني يوضح ساعات استخدام الهاتف اليومية، والوقت المقضي في الألعاب وتطبيقات التواصل واليوتيوب، لمساعدة الأسرة على تنظيم وقت الطفل."
          }
        },
        {
          "title": {
            "en": "Calls & Messages Monitoring for Cyberbullying Protection",
            "ar": "سجل المكالمات والرسائل للحماية من المخاطر والتنمر"
          },
          "description": {
            "en": "Logs incoming and outgoing phone calls and SMS messages, helping parents identify unknown suspicious callers or cyberbullying threats early.",
            "ar": "متابعة سجل المكالمات الواردة والصادرة والرسائل النصية لحماية الأبناء مبكراً من الغرباء والمكالمات المجهولة وحالات التنمر الرقمي."
          }
        },
        {
          "title": {
            "en": "Transparent Consent & Child-Aware Foreground Service",
            "ar": "الموافقة الشفافة وخدمة التنبيه المستمرة للطفل"
          },
          "description": {
            "en": "Maintains ethical transparency with a mandatory child consent screen and a persistent Android foreground notification confirming active guardian protection.",
            "ar": "تطبيق أعلى المعايير الأخلاقية بشاشة موافقة صريحة تظهر للطفل عند الإعداد، مع إشعار دائم وواضح في شريط النظام يؤكد استمرار جلسة الحماية الأبوية."
          }
        }
      ],
      "audience": [
        {
          "en": "Parents and legal guardians seeking private family device safety",
          "ar": "الآباء والأمهات والأوصياء الراغبون في حماية أطفالهم بخصوصية تامة"
        },
        {
          "en": "Families who refuse commercial third-party cloud data harvesting",
          "ar": "العائلات التي ترفض تخزين بيانات أطفالها وصورهم على خوادم الشركات التجارية"
        },
        {
          "en": "Organizations evaluating consent-first, ethical family safety tools",
          "ar": "المؤسسات والجهات التعليمية التي تبحث عن أدوات أمان رقمي أخلاقية قائمة على الشفافية"
        }
      ],
      "architecture": {
        "en": "Multi-component architecture featuring a WPF .NET 9 desktop application (CommunityToolkit.Mvvm, MaterialDesign), a shared BouncyCastle cryptography class library, and an Android Java native client utilizing WebSocket protocols and foreground background services.",
        "ar": "منظومة متعددة المكونات تضم تطبيق WPF بـ .NET 9 بواجهات Material Design، ومكتبة تشفير BouncyCastle مشتركة، وتطبيق Android بـ Java مع خدمات خلفية مستمرة واتصالات WebSocket."
      }
    },
    "tech": [
      ".NET 9",
      "WPF",
      "Android",
      "Java",
      "WebSocket",
      "AES-256-GCM",
      "ECDH",
      "Material Design"
    ]
  },
  {
    "id": "document-management-system",
    "title": { "en": "Enterprise Document Management & Versioning System", "ar": "نظام مؤسسي لإدارة المستندات والإصدارات" },
    "category": "web-apps",
    "featured": false,
    "coverImage": "/images/projects/document-management-system.svg",
    "summary": {
      "en": "A full-stack enterprise document control and archiving platform featuring a Clean Architecture .NET REST API, Angular SPA client, multi-stage approval workflows, and hybrid cloud storage (AWS S3 & Azure Blob).",
      "ar": "منصة مؤسسية متقدمة لإدارة وأرشفة وضبط وثائق المشاريع والمؤسسات، مبنية ببنية نظيفة (Clean Architecture) مع واجهة برمجية بـ .NET وواجهة Angular، وسير عمل للاعتمادات، وتخزين سحابي هجين (AWS S3 وAzure Blob)."
    },
    "caseStudy": {
      "overview": {
        "en": "A high-performance enterprise document control system engineered for engineering consultancies, construction mega-projects, and corporate compliance departments. It provides rigorous version control, role-based review and sign-off workflows, deep metadata indexing, and secure hybrid cloud storage.",
        "ar": "نظام متطور للتحكم في وثائق المؤسسات وضبط إصدارات المشاريع الهندسية والإنشائية والشركات الكبرى. يوفر رقابة صارمة على دورة حياة الوثيقة من المسودة حتى الاعتماد النهائي، مع أرشفة سحابية هجينة ومسارات تدقيق تفصيلية لكافة التعاملات."
      },
      "problem": {
        "en": "Construction projects and enterprise organizations drown in document chaos when blueprints, contracts, and safety submittals are scattered across email chains and local hard drives. Teams build from outdated drawings, unauthorized document revisions circulate, and audit failures incur severe contractual penalties.",
        "ar": "تغرق المشاريع الإنشائية والشركات الكبرى في فوضى عارمة عندما تتشتت المخططات الهندسية والعقود ومستندات الفحص بين رسائل البريد والأجهزة الشخصية؛ مما يسبب البناء بمخططات قديمة ملغاة، وتداول نسخ غير معتمدة، والتعرض لغرامات قانونية فادحة عند فشل التدقيق."
      },
      "solution": {
        "en": "The platform centralizes all corporate documentation in a structured repository with automatic version sequencing (v1.0, v1.1, v2.0), enforces multi-step approval workflows, integrates with scalable cloud object storage (AWS S3 / Azure Blob), and maintains immutable audit logs of every view, download, and modification.",
        "ar": "توحد المنصة كافة وثائق المؤسسة في مستودع رقمي محكم يصدر المراجعات آلياً (v1.0, v1.1, v2.0)، ويطبق مسارات اعتماد إجبارية متعددة المستويات، ويتكامل مع التخزين السحابي عالي السعة (AWS S3 وAzure Blob)، ويسجل كل حركة استعراض أو تحميل أو تعديل في سجل تدقيق لا يمكن حذفه."
      },
      "features": [
        {
          "title": {
            "en": "Centralized Document Repository & Multi-Level Folder Trees",
            "ar": "المستودع المركزي لتصنيف وأرشفة الوثائق وشجرة المجلدات"
          },
          "description": {
            "en": "Organizes engineering drawings, specifications, contracts, and quality submittals into structured project folders with custom metadata and tagging.",
            "ar": "تنظيم المخططات والمواصفات الفنية والعقود ومستندات الجودة في شجرة مجلدات ذكية للمشاريع مع بيانات وصفية (Metadata) ووسوم لتسهيل التصنيف."
          }
        },
        {
          "title": {
            "en": "Rigorous Version Control & Revision History Rollback",
            "ar": "التحكم الدقيق في الإصدارات وتاريخ التعديلات الكامل"
          },
          "description": {
            "en": "Maintains complete version history for every file, locking approved versions against editing, logging superseding revisions, and enabling instant rollbacks.",
            "ar": "حفظ تلقائي لكافة مراجعات الملف وإصداراته، وتجميد النسخ المعتمدة لحمايتها من التعديل، مع إمكانية مقارنة النسخ أو الرجوع لأي إصدار سابق بضغطة زر."
          }
        },
        {
          "title": {
            "en": "Multi-Stage Document Review & Approval Workflows",
            "ar": "سير العمل المخصص للاعتماد والمراجعة متعددة المراحل"
          },
          "description": {
            "en": "Routes submitted documents through sequential or parallel review chains (e.g., Engineer -> Lead Consultant -> Project Director) with approval sign-offs.",
            "ar": "تمرير الوثائق عبر مسارات اعتماد متسلسلة أو متوازية (مثال: مهندس الموقع -> الاستشاري العام -> مدير المشروع) مع إرفاق التوقيع والملاحظات الرقمية."
          }
        },
        {
          "title": {
            "en": "Hybrid Enterprise Cloud Storage (AWS S3 & Azure Blob)",
            "ar": "التخزين السحابي عالي السعة والأمان (AWS S3 وAzure Blob)"
          },
          "description": {
            "en": "Pluggable storage provider architecture connecting to Amazon S3 buckets or Microsoft Azure Blob containers with signed URL download security.",
            "ar": "تخزين سحابي مرن وقابل للتوسع يتصل بحاويات Amazon S3 أو Azure Blob مع روابط تحميل مشفرة ومؤقتة تضمن عدم تسريب أي ملف سري."
          }
        },
        {
          "title": {
            "en": "Granular Role-Based Access Control (RBAC) & Security",
            "ar": "صلاحيات الوصول الدقيقة والمحمية حسب الدور الوظيفي"
          },
          "description": {
            "en": "Restricts viewing, editing, printing, and approval privileges per user role, department, or external contractor organization.",
            "ar": "تحديد صلاحيات القراءة، والتحميل، والطباعة، والاعتماد بدقة لكل دور وظيفي أو مقاول أو استشاري، لضمان حصر المستندات السرية في نطاقها المصرح."
          }
        },
        {
          "title": {
            "en": "High-Performance Full-Text & Metadata Search",
            "ar": "محرك البحث الفوري في محتوى الوثائق والبيانات الوصفية"
          },
          "description": {
            "en": "Instant search capabilities querying document titles, reference numbers, custom tags, and file metadata across millions of archived records.",
            "ar": "محرك بحث فائق السرعة يتيح العثور على أي مخطط أو خطاب فورياً برقم المعاملة، أو اسم المشروع، أو الوسوم، أو الكلمات المفتاحية بين ملايين الوثائق."
          }
        },
        {
          "title": {
            "en": "Immutable Compliance & Activity Audit Trails",
            "ar": "سجلات التدقيق والامتثال القانوني الشاملة"
          },
          "description": {
            "en": "Comprehensive audit logs recording who viewed, downloaded, revised, or approved every document with tamper-proof timestamps for ISO/audit compliance.",
            "ar": "سجل رقابي غير قابل للتعديل يوثق اسم وتوقيت كل من فتح أو حمل أو راجع أو اعتمد أي وثيقة، بما يستوفي متطلبات شهادات الجودة والتدقيق القانوني."
          }
        }
      ],
      "audience": [
        {
          "en": "Construction and engineering project document controllers",
          "ar": "مراقبو وثائق ومخططات المشاريع الهندسية والإنشائية (Document Controllers)"
        },
        {
          "en": "Consulting engineering firms, main contractors and developers",
          "ar": "المكاتب الاستشارية الهندسية، وشركات المقاولات الكبرى والمطورون العقاريون"
        },
        {
          "en": "Corporate legal, compliance and quality assurance departments",
          "ar": "إدارات الشؤون القانونية والامتثال والحوكمة وضمان الجودة (QA/QC)"
        }
      ],
      "architecture": {
        "en": "Clean Architecture .NET REST API solution utilizing MediatR CQRS pattern, Entity Framework Core, Dapper high-performance queries, dual-database support (MySQL and SQL Server), and an Angular SPA ClientApp with AWS SDK and Azure Storage SDKs.",
        "ar": "حل .NET بالبنية النظيفة مع نمط MediatR CQRS، واستعلامات Dapper فائقة السرعة، ودعم قاعدتي بيانات (MySQL وSQL Server)، وتطبيق عميل Angular SPA وتكامل مع AWS وAzure SDKs."
      }
    },
    "tech": [
      ".NET",
      "ASP.NET Core",
      "Angular",
      "Entity Framework Core",
      "MediatR",
      "AWS S3",
      "Azure Blob",
      "SQL Server",
      "MySQL"
    ]
  },
  {
    "id": "cogreahb-rehab-games",
    "title": { "en": "CogRehab — Cognitive Rehabilitation & Reflex Assessment", "ar": "كوج ريهاب — نظام التأهيل المعرفي وتقييم ردود الفعل" },
    "category": "desktop",
    "featured": false,
    "coverImage": "/images/projects/cogreahb-rehab-games.svg",
    "summary": {
      "en": "A specialized suite of Windows desktop cognitive training games for attention exercises, mental focus, and stimulus-response reaction time measurement, featuring custom Arabic Right-to-Left (RTL) game text rendering.",
      "ar": "منظومة ألعاب ويندوز متخصصة لإعادة التأهيل المعرفي وتدريب الانتباه والتركيز الذهني، وقياس سرعة ردود الفعل بالمللي ثانية، مع محرك مخصص لعرض النصوص العربية من اليمين لليسار."
    },
    "caseStudy": {
      "overview": {
        "en": "A suite of digital therapeutic exercise applications engineered for occupational therapy clinics, neurological rehabilitation centers, and cognitive psychology research. It delivers structured cognitive exercises: a category-matching fruit game for sustained attention and concentration, and a stimulus-response reflex game providing millisecond-accurate reaction time telemetry.",
        "ar": "منظومة ألعاب وتمارين رقمية موجهة لمراكز التأهيل المعرفي، وعيادات العلاج الطبيعي والوظيفي، وبحوث علم النفس العصبي. تقدم المنظومة تدريبات معرفية مقننة: لعبة مطابقة فئات الفواكه لتعزيز الانتباه والتركيز الانتقائي، ولعبة الاستجابة للمنبهات البصرية الحركية لقياس زمن رد الفعل بدقة المللي ثانية."
      },
      "problem": {
        "en": "Occupational therapists and researchers struggle with subjective, paper-and-pencil cognitive assessments that fail to capture millisecond reaction times, lack engaging visual feedback, and rarely support native Arabic Right-to-Left interfaces, creating linguistic barriers for Arabic-speaking patients.",
        "ar": "يواجه المعالجون والباحثون صعوبة في الاعتماد على التقييمات الورقية التقليدية التي تفتقر للدقة الزمنية بالمللي ثانية، وتفتقد لعنصر التحفيز البصري، وتكاد تنعدم فيها البرمجيات الداعمة للغة العربية من اليمين لليسار، مما يربك المراجع العربي ويفقد الاختبار دقته."
      },
      "solution": {
        "en": "The applications solve this by combining high-refresh-rate 2D game loops with a custom-engineered Arabic text rendering engine within MonoGame/XNA. Clinicians select exercise difficulty parameters, and the system records precise response times, accuracy percentages, and session error patterns automatically.",
        "ar": "تعالج المنظومة هذه الفجوة ببناء محرك ألعاب ثنائي الأبعاد عالي الاستجابة مدمج به محرك تصيير خطوط عربية مخصص يدعم الكتابة من اليمين لليسار. يحدد المعالج مستوى الصعوبة، ويسجل النظام وقت الاستجابة، ونسب الدقة، وتفاصيل أخطاء الجلسة آلياً."
      },
      "features": [
        {
          "title": {
            "en": "Fruit-Category Matching Game for Attention & Focus",
            "ar": "لعبة مطابقة الفواكه لتدريب الانتباه والتركيز الانتقائي"
          },
          "description": {
            "en": "MonoGame/XNA interactive game challenging patients to identify, categorize, and select target fruit classes amidst visual distractors to strengthen sustained attention.",
            "ar": "لعبة تفاعلية بمحرك MonoGame/XNA تدرب المريض على مطابقة وفرز فئات الفواكه الصحيحة وسط مشتتات بصرية متنوعة لتنمية التركيز والانتباه المستمر."
          }
        },
        {
          "title": {
            "en": "Stimulus-Response Reaction Time Assessment",
            "ar": "اختبار سرعة الاستجابة الحركية والبصرية للمنبهات"
          },
          "description": {
            "en": "Measures motor response velocity with millisecond accuracy when visual stimulus triggers appear, logging reaction latency curves across trials.",
            "ar": "قياس زمن رد الفعل الحركي بالمللي ثانية فور ظهور المنبهات البصرية على الشاشة، ورسم منحنى سرعة الاستجابة عبر المحاولات المتكررة."
          }
        },
        {
          "title": {
            "en": "Custom Arabic Right-to-Left (RTL) Game Text Engine",
            "ar": "محرك الخطوط والنصوص العربية من اليمين لليسار داخل بيئة اللعبة"
          },
          "description": {
            "en": "Custom ArabicTextRenderer module resolving glyph shaping, ligatures, and bidirectional RTL layout natively inside the XNA rendering pipeline.",
            "ar": "طبقة برمجية مخصصة لمعالجة حروف وتشكيل الخطوط العربية وتوجيهها من اليمين لليسار أصلياً داخل محرك الرسوميات XNA بدون أي تشويه للكلمات."
          }
        },
        {
          "title": {
            "en": "Real-Time Performance Analytics & Session Scorecards",
            "ar": "الإحصاءات الفورية لقياس معدل الدقة ووقت الاستجابة"
          },
          "description": {
            "en": "Displays instant clinical metrics on screen after each session: average reaction time in ms, accuracy rate, false positives, and missed targets.",
            "ar": "عرض فوري لنتائج الجلسة على الشاشة للمعالج: متوسط زمن الاستجابة بالمللي ثانية، ونسبة الدقة المئوية، وعدد الأخطاء والمحاولات الضائعة."
          }
        },
        {
          "title": {
            "en": "Multi-Level Adaptive Difficulty Scaling",
            "ar": "مستويات صعوبة متدرجة وقابلة للتخصيص"
          },
          "description": {
            "en": "Enables clinicians to customize target presentation speed, distractor density, and stimulus intervals to tailor exercises to each patient's rehabilitation stage.",
            "ar": "إمكانية ضبط سرعة ظهور المنبهات، وعدد المشتتات، وفترة الاستجابة المتاحة بما يتناسب تماماً مع القدرات الحالية لكل مريض ومرحلته العلاجية."
          }
        },
        {
          "title": {
            "en": "Longitudinal Progress Tracking for Clinicians",
            "ar": "تقارير تتبع تطور الحالة على المدى الطويل"
          },
          "description": {
            "en": "Provides session-by-session comparative logs allowing therapists to evaluate motor-cognitive recovery trends over weeks and months.",
            "ar": "سجلات تاريخية تتيح للمعالجين مقارنة أداء المريض جلسة بعد أخرى لتقييم مدى التحسن في الوظائف الإدراكية والحركية عبر الأسابيع والشهور."
          }
        },
        {
          "title": {
            "en": "Distraction-Free, Accessible Senior-Friendly Interface",
            "ar": "تصميم واجهات مريح بصرياً وخالٍ من المشتتات"
          },
          "description": {
            "en": "High-contrast visuals, large tactile touch/click targets, and clear audio prompts designed for individuals recovering from strokes, brain injuries, or age-related decline.",
            "ar": "ألوان مريحة وعناصر تحكم كبيرة وواضحة تناسب كبار السن والمصابين بالجلطات أو الإصابات الدماغية لتوفير بيئة تدريب مريحة وآمنة نفسياً."
          }
        }
      ],
      "audience": [
        {
          "en": "Occupational therapists and cognitive rehabilitation specialists",
          "ar": "أخصائيو العلاج الوظيفي وإعادة التأهيل المعرفي والعصبي"
        },
        {
          "en": "Academic researchers in cognitive neuroscience and motor control",
          "ar": "الباحثون الأكاديميون في علوم الأعصاب الإدراكية والتحكم الحركي"
        },
        {
          "en": "Clinics supporting stroke recovery, traumatic brain injury (TBI), and elderly care",
          "ar": "مراكز تأهيل مصابي الجلطات الدماغية ورعاية كبار السن وتأهيل الأطفال"
        }
      ],
      "architecture": {
        "en": "Built using MonoGame/XNA with a custom C# ArabicTextRenderer library, paired with a modern .NET 9 Windows Forms companion port for clinical administration.",
        "ar": "مبني بمحرك MonoGame/XNA مع مكتبة C# متخصصة لعرض النصوص العربية، بالإضافة إلى نسخة متطابقة بـ .NET 9 Windows Forms لإدارة الاختبارات."
      }
    },
    "tech": [
      "MonoGame",
      "XNA",
      ".NET 9",
      "Windows Forms",
      "C#",
      "Arabic RTL",
      "Game Loop"
    ]
  },
  {
    "id": "academic-consulting-portal",
    "title": { "en": "Abeer Academic & Healthcare Advisory Platform", "ar": "منصة عبير للاستشارات الأكاديمية والرعاية الصحية" },
    "category": "web-apps",
    "featured": false,
    "coverImage": "/images/projects/academic-consulting-portal.svg",
    "summary": {
      "en": "A comprehensive bilingual consultation platform for healthcare practitioners and medical students in Saudi Arabia, providing residency pathway coaching, SCFHS classification guidance, medical CV preparation, and mock interviews.",
      "ar": "منصة استشارات أكاديمية وتدريبية متخصصة للممارسين الصحيين في السعودية، تقدم الإرشاد لبرامج البورد والزمالة، والتوجيه لتصنيف هيئة التخصصات، وإعداد السير الذاتية، ومحاكاة المقابلات الشخصية."
    },
    "caseStudy": {
      "overview": {
        "en": "A bespoke academic and career advisory portal developed specifically for the healthcare education sector in the Kingdom of Saudi Arabia. It connects medical graduates, residents, and nursing professionals with experienced academic consultants to navigate specialty training pathways, licensing exams, and career promotions.",
        "ar": "بوابة استشارات أكاديمية ومهنية متخصصة طُورت للقطاع الصحي والتعليم الطبي في المملكة العربية السعودية. تربط الأطباء الخريجين والمقيمين والممارسين الصحيين بنخبة من المستشارين الأكاديميين لتوجيههم في مسارات التدريب، وامتحانات الرخصة، والتصنيف المهني، والتطوير الوظيفي."
      },
      "problem": {
        "en": "Medical graduates and healthcare professionals face immense anxiety and career setbacks when navigating complex licensing requirements (such as SCFHS regulations), writing competitive medical residency applications, or facing high-stakes interviews without expert mentorship.",
        "ar": "يعاني خريجو الكليات الصحية والأطباء الجدد من حيرة شديدة وضياع للفرص بسبب تعقيد اشتراطات التصنيف المهني لدى الهيئة السعودية للتخصصات الصحية، وضعف صياغة السيرة الذاتية الطبية، ونقص الاستعداد للمقابلات الشخصية لبرامج البورد والزمالة."
      },
      "solution": {
        "en": "The platform delivers structured advisory services across four distinct tracks: professional healthcare coaching, Saudi commission classification guidance, professional medical CV curation, and simulated residency mock interviews with actionable feedback, backed by an intuitive bilingual booking portal.",
        "ar": "توفر المنصة مسارات استشارية متخصصة ومقننة تغطي: الإرشاد المهني للقطاع الصحي، ومساعدة التصنيف المهني، وصياغة السير الذاتية الطبية بالمعايير العالمية، وجلسات محاكاة المقابلات الشخصية، مع حجز إلكتروني مبسط ومحتوى ثنائي اللغة."
      },
      "features": [
        {
          "title": {
            "en": "Healthcare Residency & Fellowship Career Pathways",
            "ar": "الإرشاد الأكاديمي لبرامج الإقامة والزمالة والتخصصات الدقيقة"
          },
          "description": {
            "en": "Tailored one-on-one consultation sessions helping doctors and health practitioners select competitive medical specialties and map career roadmaps.",
            "ar": "جلسات استشارية فردية مخصصة لمساعدة الأطباء في اختيار التخصص الدقيق الأنسب، والتخطيط للقبول في برامج الإقامة الطبية (Residency) والزمالات."
          }
        },
        {
          "title": {
            "en": "Saudi Health Specialties (SCFHS) Classification Guidance",
            "ar": "التوجيه الشامل لمتطلبات التصنيف المهني بهيئة التخصصات"
          },
          "description": {
            "en": "Guidance through professional classification documentation, credential auditing, and exam preparation strategies for licensing in Saudi Arabia.",
            "ar": "إرشاد عملي مفصل لمتطلبات التصنيف المهني لدى الهيئة السعودية للتخصصات الصحية، ومراجعة الأوراق، واستراتيجيات اجتياز اختبارات الرخصة المهنية (SMLE/SDLE)."
          }
        },
        {
          "title": {
            "en": "Medical CV & Clinical Portfolio Optimization",
            "ar": "صياغة السيرة الذاتية الطبية والملف المهني الاحترافي"
          },
          "description": {
            "en": "Transforms standard resumes into high-impact academic medical CVs highlighting clinical electives, research publications, and community service.",
            "ar": "إعادة صياغة السيرة الذاتية الطبية بالمعايير العالمية وتنسيق ملف الإنجاز (Portfolio) لإبراز الأبحاث المنشورة، والتدريب الإكلينيكي، والتطوع بأسلوب احترافي."
          }
        },
        {
          "title": {
            "en": "Residency & Job Mock Interview Simulation",
            "ar": "محاكاة المقابلات الشخصية لبرامج البورد والوظائف الصحية"
          },
          "description": {
            "en": "Simulated high-pressure medical interview sessions with realistic scenario questions, followed by structured feedback on verbal and clinical reasoning.",
            "ar": "جلسات محاكاة حية للمقابلات الشخصية لبرامج البورد والوظائف الصحية مع أسئلة سيناريوهات سريرية واقعية، وتغذية راجعة فورية لتصحيح الأداء وبناء الثقة."
          }
        },
        {
          "title": {
            "en": "Bilingual Knowledge Hub & Career Guidance Articles",
            "ar": "مركز المعرفة الطبية والمقالات الإرشادية باللغتين"
          },
          "description": {
            "en": "A rich library of articles, regulatory updates, and career tips written in polished Arabic and English to keep healthcare professionals informed.",
            "ar": "مكتبة مقالات وأدلة إرشادية ثرية باللغتين العربية والإنجليزية تشرح أحدث لوائح التدريب والفرص الوظيفية في القطاع الصحي السعودي."
          }
        },
        {
          "title": {
            "en": "Streamlined Consultation Booking & Advisory Scheduling",
            "ar": "حجز الاستشارات الفردية والجماعية وتنسيق المواعيد"
          },
          "description": {
            "en": "Intuitive online booking forms enabling candidates to select their consultation track, choose advisor availability, and submit specific questions in advance.",
            "ar": "نظام حجز إلكتروني مبسط يتيح للممارس الصحي اختيار الخدمة المناسبة، وتحديد الموعد الملائم، وإرفاق استفساراته وأوراقه لمراجعتها قبل الجلسة."
          }
        },
        {
          "title": {
            "en": "Centralized Advisory Management & Candidate Tracking CMS",
            "ar": "نظام إدارة المحتوى وتنسيق جلسات المستشارين"
          },
          "description": {
            "en": "Administrative back-office allowing platform coordinators to manage advisor calendars, process consultation requests, and update portal resources.",
            "ar": "لوحة تحكم مركزية لإدارة مواعيد المستشارين، ومتابعة طلبات الممارسين، وتحديث محتوى المنصة والخدمات بكل سهولة وسرعة."
          }
        }
      ],
      "audience": [
        {
          "en": "Medical, dental, pharmacy and nursing graduates",
          "ar": "خريجو كليات الطب البشري، وطب الأسنان، والصيدلة، والتمريض، والعلوم الطبية"
        },
        {
          "en": "Healthcare practitioners pursuing Saudi licensing and promotions",
          "ar": "الممارسون الصحيون الساعون للحصول على التصنيف المهني والترقيات في السعودية"
        },
        {
          "en": "Academic advisors and senior consultants in the healthcare sector",
          "ar": "المستشارون الأكاديميون وأطباء الزمالة الباحثون عن منصة لتقديم خبراتهم"
        }
      ],
      "architecture": {
        "en": "Built on PHP/Laravel framework with Botble CMS foundation, customized with complete Arabic Right-to-Left (RTL) localization, dynamic route resolution, and customized service taxonomies.",
        "ar": "مبني بإطار عمل PHP/Laravel مع نواة Botble CMS، مع تعريب شامل وقوائم تفاعلية تدعم العربية (RTL) وتصنيفات مخصصة للخدمات والاستشارات الطبية."
      }
    },
    "tech": [
      "PHP",
      "Laravel",
      "Botble CMS",
      "MySQL",
      "Localization",
      "Bootstrap"
    ]
  },
  {
    "id": "nexacore-3d-showcase",
    "title": { "en": "NexaCore 3D Interactive Software Showcase", "ar": "نيكسا كور — عرض تفاعلي ثلاثي الأبعاد للبرمجيات" },
    "category": "interactive",
    "featured": false,
    "coverImage": "/images/projects/nexacore-3d-showcase.svg",
    "status": {
      "en": "Interactive 3D prototype",
      "ar": "نموذج ثلاثي الأبعاد تفاعلي"
    },
    "summary": {
      "en": "A scroll-driven interactive 3D WebGL website engineered for enterprise ERP and SaaS software solutions, featuring real-time geometric shaders, Lenis smooth scrolling, and cinematic camera choreography.",
      "ar": "عرض ويب تفاعلي ثلاثي الأبعاد مستجيب للتمرير لمنصات الـ ERP والـ SaaS المؤسسية، يضم مجسمات WebGL فورية وخامات تظليل وتمرير فائق السلاسة بـ Lenis."
    },
    "caseStudy": {
      "overview": {
        "en": "An avant-garde 3D promotional web experience engineered to showcase next-generation cloud ERP and medical SaaS platforms. By combining real-time WebGL geometries, dynamic shader lighting, and scroll-synchronized camera transitions, it presents enterprise software architecture as a sophisticated, tactile digital artifact.",
        "ar": "تجربة ويب ترويجية ثلاثية الأبعاد فائقة التطور صُممت لاستعراض منصات الـ ERP والسحابة الطبية والحلول المؤسسية. تدمج التجربة مجسمات WebGL فورية وخامات تظليل تفاعلية وانتقالات كاميرا متزامنة مع التمرير، لتقدم بنية البرمجيات كمنظومة رقمية ملموسة ومبهرة."
      },
      "problem": {
        "en": "Enterprise SaaS and ERP platforms represent millions of dollars in engineering, yet their landing pages look identical to generic business software: flat screenshots, static icon grids, and wall-of-text feature lists that fail to communicate technical prestige to executive decision-makers.",
        "ar": "تمثل برمجيات المؤسسات ومنصات الـ SaaS استثمارات هندسية ضخمة، إلا أن مواقعها التعريفية تبدو تقليدية ومكررة: صور شاشات مسطحة، وقوائم نصوص جافة تعجز عن إبراز القيمة التقنية الرفيعة للحل أمام كبار المديرين وصناع القرار."
      },
      "solution": {
        "en": "NexaCore transforms product exploration into an interactive visual journey. As executives scroll, 3D modular nodes assemble in real-time, representing core ERP, Dental Cloud, and microservice infrastructure, while smooth momentum scrolling maintains an effortless browsing experience.",
        "ar": "يحول NexaCore استكشاف المنتج إلى رحلة بصرية تفاعلية سينمائية. مع تمرير الزائر، تتجمع وتتحرك عقد ثلاثية الأبعاد تمثل نواة الـ ERP والسحابة الطبية والخدمات المصغرة مع إضاءة ديناميكية وتمرير سلس فائق الانسيابية يرسخ الريادة التقنية."
      },
      "features": [
        {
          "title": {
            "en": "Real-Time 3D WebGL Polyhedron & Mesh Choreography",
            "ar": "تصيير ثلاثي الأبعاد فوري لمجسمات WebGL التفاعلية"
          },
          "description": {
            "en": "Custom Three.js geometries, wireframe rings, and dynamic particle systems rendering live in the browser with real-time lighting responding to mouse movement.",
            "ar": "مجسمات هندسية وشبكات حلقية تفاعلية بـ Three.js وسحب جزيئات متوهجة تتفاعل فورياً مع حركة مؤشر الفأرة والإضاءة الديناميكية داخل المتصفح."
          }
        },
        {
          "title": {
            "en": "Lenis Momentum Smooth Scrolling & Physics",
            "ar": "تكامل التمرير فائق السلاسة بمحرك Lenis"
          },
          "description": {
            "en": "Synchronizes user scroll wheel inputs with canvas render loops, delivering a luxurious, frictionless navigation feel that eliminates browser scroll stutter.",
            "ar": "مزامنة حركة عجلة التمرير مع معدل تصيير المشهد ثلاثي الأبعاد، لتوفير تجربة تصفح فاخرة خالية تماماً من أي تقطيع أو بطء على كافة الشاشات."
          }
        },
        {
          "title": {
            "en": "GSAP ScrollTrigger Camera Trajectory & Section Sequencing",
            "ar": "انتقالات الكاميرا السينمائية بـ GSAP ScrollTrigger"
          },
          "description": {
            "en": "Orchestrates multi-axis 3D camera paths that pan, tilt, and zoom around central architectural nodes as the user explores different software capability sections.",
            "ar": "خط زمني متقن بـ GSAP ScrollTrigger يحرك الكاميرا ثلاثية الأبعاد في زوايا سينمائية مبتكرة مع كل قسم بالصفحة لاستعراض ميزات المنظومة باحترافية."
          }
        },
        {
          "title": {
            "en": "Interactive 3D ERP & Dental Cloud Module Exploration",
            "ar": "استكشاف تفاعلي لوحدات الـ ERP والسحابة الطبية"
          },
          "description": {
            "en": "Interactive focal points representing financial ledgers, clinical dental records, and supply chain microservices that illuminate upon hover and scroll.",
            "ar": "عقد تفاعلية ثلاثية الأبعاد تمثل الحسابات المالية، وسجلات العيادات الطبية، وسلاسل الإمداد تضيء وتكشف تفاصيلها مع تمرير المستخدم."
          }
        },
        {
          "title": {
            "en": "Responsive Viewport Adaptation & Cross-Platform WebGL",
            "ar": "توافق مرن عالي الأداء مع مختلف الشاشات والهواتف"
          },
          "description": {
            "en": "Optimizes shader calculations and polygon density dynamically based on device GPU capabilities, ensuring high-frame-rate delivery on mobile and desktop.",
            "ar": "ضبط تلقائي لدقة المجسمات وحسابات التظليل وفق قدرة معالج الرسوميات في جهاز العميل، لضمان أعلى معدل إطارات وسرعة استجابة على الهواتف والحواسيب."
          }
        },
        {
          "title": {
            "en": "Real-Time Product Journey Progress Indicator",
            "ar": "مؤشر رحلة الاستكشاف والتقدم التفاعلي"
          },
          "description": {
            "en": "Sleek HUD-style on-screen visual progress bar showing the visitor's real-time position through the multi-tier product architecture story.",
            "ar": "شريط تقدم علوي مستقبلي بتصميم HUD يوضح للمستخدم موقعه الفعلي ونسبة استعراضه لوحدات ومميزات المنظومة أثناء الجولة."
          }
        },
        {
          "title": {
            "en": "High-Converting VIP Demo & Enterprise Contact Triggers",
            "ar": "محفزات طلب العروض التوضيحية لصفقات الشركات"
          },
          "description": {
            "en": "Strategically placed call-to-action touchpoints allowing enterprise technology buyers to request immediate private platform demonstrations.",
            "ar": "أزرار تفاعلية مدروسة لحث مدراء التقنية والمدراء التنفيذيين على طلب جلسة عرض توضيحي حي للمنصة ومناقشة تفاصيل التطبيق."
          }
        }
      ],
      "audience": [
        {
          "en": "Enterprise software CTOs, CIOs and technology procurement leaders",
          "ar": "المدراء التقنيون ومدراء نظم المعلومات وقادة شراء البرمجيات في المؤسسات"
        },
        {
          "en": "SaaS founders seeking high-impact 3D visual differentiation",
          "ar": "مؤسسو منصات الـ SaaS والـ ERP الباحثون عن تميز بصري استثنائي لمنتجاتهم"
        },
        {
          "en": "Creative developers and agency design teams building 3D web experiences",
          "ar": "المصممون والمهندسون الرقميون الساعون لبناء واجهات ويب تفاعلية حديثة"
        }
      ],
      "architecture": {
        "en": "Built using Vite with ES modules, Three.js 3D rendering pipeline, GSAP ScrollTrigger timeline management, Lenis smooth scrolling, and sleek responsive CSS styling.",
        "ar": "مبني بـ Vite ووحدات ES مع محرك Three.js ومكتبة GSAP ScrollTrigger لإدارة حركة الكاميرا وتمرير Lenis الانسيابي وتصميم عصري متجاوب."
      }
    },
    "tech": [
      "Three.js",
      "GSAP",
      "ScrollTrigger",
      "Lenis",
      "WebGL",
      "HTML5",
      "CSS3"
    ]
  }
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => project.id === slug);
}
