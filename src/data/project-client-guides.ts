import type { Locale, LocalizedText } from "@/lib/i18n";

interface ProjectClientGuide {
  explanation: LocalizedText;
  workflows: LocalizedText[];
  audiences: LocalizedText[];
}

const PROJECT_CLIENT_GUIDES: Record<string, ProjectClientGuide> = {
  "abo3mo-delivery": {
    "explanation": {
      "en": "A commercial delivery and dispatch management platform that unifies merchant order intake, automated driver routing, real-time live map tracking, and automated cash-on-delivery (COD) financial reconciliation. It is built to transform chaotic delivery operations into an automated, synchronized process where every package, driver, and payment is tracked live without relying on manual phone calls or messy spreadsheets.",
      "ar": "منصة تشغيل وإدارة لوجستية متكاملة تنظم وتدير كافة عمليات التوصيل والشحن؛ بدءاً من استقبال طلبات المتاجر وتوجيهها الذكي للمناديب، حتى التتبع المباشر لحركة السائق على الخريطة والتحصيل المالي الدقيق. صُممت المنصة لتحويل فوضى التنسيق اليدوي والاتصالات الهاتفية إلى منظومة رقمية مؤتمتة تضمن تسليم كل شحنة في موعدها وتوثيق كل مبلغ محصل بدقة متناهية."
    },
    "workflows": [
      {
        "en": "1. Order Reception & Bulk Import: Operations staff receive incoming orders via merchant API integrations or bulk Excel uploads. The system instantly verifies delivery addresses, maps customer zones, and calculates shipping fees.",
        "ar": "1. استقبال وتسجيل الطلبات: يستقبل فريق العمليات الطلبات تلقائياً من المتاجر المتعاقدة أو عبر رفع ملفات إكسل مجمعة؛ فيقوم النظام بالتحقق الفوري من صحة العناوين وتحديد نطاق التوصيل واحتساب رسوم الشحن."
      },
      {
        "en": "2. Automated Dispatch & Driver Routing: The dispatch engine evaluates active couriers in the field, assigns shipments to the closest optimal driver based on proximity and vehicle capacity, and sends instant push notifications to the courier's phone.",
        "ar": "2. التوزيع الذكي والإسناد للمناديب: تفحص المنظومة مواقع المناديب المتاحين ميدانياً، وتُسند الشحنة تلقائياً للمندوب الأقرب جغرافياً بالاعتماد على الموقع وسعة الحمولة، مع إرسال تنبيه فوري لتطبيق المندوب."
      },
      {
        "en": "3. Driver Navigation & Turn-by-Turn Delivery: The courier opens the mobile app, views the optimized multi-stop route map, contacts the recipient with one tap, and captures proof of delivery (digital signature, recipient OTP, or package photo).",
        "ar": "3. تحرك المندوب وإثبات التسليم الرقمي: يفتح المندوب التطبيق لمتابعة خط السير عبر الخريطة، ويتواصل مع العميل بضغطة زر، ثم يوثق تسليم الشحنة عبر توقيع العميل الرقمي، أو رمز التأكيد (OTP)، أو التقاط صورة الطرد."
      },
      {
        "en": "4. Live Customer Map Tracking: Recipients receive an automated SMS with a secure tracking link, allowing them to watch the courier approach on a live map with real-time arrival estimates (ETA) and direct communication options.",
        "ar": "4. تتبع العميل المباشر وحالة الشحنة: يستلم العميل رسالة نصية برابط تتبع فوري يُمكّنه من مشاهدة حركة سيارة التوصيل لحظة بلحظة على الخريطة ومعرفة الوقت التقريبي لوصول المندوب مع إمكانية الاتصال المباشر به."
      },
      {
        "en": "5. Cash Reconciliation & Driver Settlement: At the end of each shift, the system audits all cash-on-delivery amounts collected by drivers, reconciles drawer totals against system logs, flags variances, and processes merchant payout statements.",
        "ar": "5. التحصيل المالي ومطابقة العهد اليومية: عند إقفال الوردية، يطابق النظام إجمالي المبالغ النقدية المحصلة مع سجلات التسليم، ويكشف أي فروقات مالية فوراً، ويصدر كشوف الحسابات والمستحقات الخاصة بالمتاجر."
      }
    ],
    "audiences": [
      {
        "en": "Delivery and courier logistics companies",
        "ar": "شركات الشحن السريع والتوصيل التجاري"
      },
      {
        "en": "Operations managers and dispatch controllers",
        "ar": "مديرو العمليات ومسؤولو غرف التوزيع والتحكم اللوجستي"
      },
      {
        "en": "Fleet drivers and last-mile delivery personnel",
        "ar": "سائقو الأساطيل ومناديب التوصيل الميداني"
      },
      {
        "en": "E-commerce merchants requiring reliable order fulfillment",
        "ar": "المتاجر الإلكترونية والمطاعم المعتمدة على خدمات التوصيل"
      },
      {
        "en": "Customer support teams answering delivery status inquiries",
        "ar": "فرق خدمة العملاء ومتابعة الشكاوى وحالات الشحنات"
      }
    ]
  },
  "enterprise-erp": {
    "explanation": {
      "en": "A comprehensive enterprise resource planning system that bridges the operational divide between departments. By unifying human resources, general ledger accounting, procurement, multi-warehouse stock, and executive dashboards into a centralized database, it gives leadership total real-time visibility and control over organizational performance and financial health.",
      "ar": "منظومة تخطيط موارد المؤسسات الشاملة (ERP) التي تقضي على الجزر المنعزلة داخل المنشأة. من خلال توحيد شؤون الموظفين والرواتب، والحسابات العامة، والمشتريات والموردين، وإدارة المستودعات في قاعدة بيانات مركزية واحدة، تمنح المنظومة الإدارة العليا رقابة تامة ورؤية فورية للوضع المالي والتشغيلي لكافة الفروع."
    },
    "workflows": [
      {
        "en": "1. Employee Onboarding, Attendance & Payroll: HR records employee profiles, logs daily biometric attendance, tracks leave requests, and automates monthly payroll generation with statutory deductions and automated ledger entry posting.",
        "ar": "1. شؤون الموظفين والرواتب الآلية: يسجل مسؤولو الموارد البشرية بيانات الموظفين، ويتابعون الحضور والانصراف، وطلبات الإجازات، مع احتساب مسير الرواتب الشهري آلياً وترحيل قيوده المحاسبية لدفتر الأستاذ تلقائياً."
      },
      {
        "en": "2. Requisition to Purchase Order & Receiving: Department heads submit digital purchase requests, procurement compares supplier quotes, issues purchase orders, and warehouse staff log received items via Goods Receipt Notes (GRN).",
        "ar": "2. دورة المشتريات ومحاضر الفحص والاستلام: يرفع مديرو الأقسام طلبات الشراء رقمياً، ويقارن مسؤولو المشتريات عروض الأسعار لإصدار أوامر التوريد، ويقوم أمناء المخازن بفحص واستلام البضائع بمحاضر استلام موثقة."
      },
      {
        "en": "3. General Ledger & Multi-Entity Journal Accounting: Financial teams record journal entries, manage multi-currency transactions, allocate expenses across designated cost centers, and maintain balanced multi-tier charts of accounts.",
        "ar": "3. القيود المحاسبية ومراكز التكلفة: يتابع الفريق المالي تسجيل القيود اليومية، وإدارة حركات العملات، وتوزيع الإيرادات والمصروفات على مراكز التكلفة المختلفة، ومطابقة الحسابات العامة بدقة متناهية."
      },
      {
        "en": "4. Multi-Branch Treasury & Cash Flow Reconciliation: Financial controllers monitor cash drawers across all branches, manage corporate bank accounts, reconcile bank statements, and track check clearances to ensure liquidity stability.",
        "ar": "4. إدارة الخزائن والبنوك والتدفقات النقدية: يراقب المدير المالي أرصدة الخزائن النقدية في كل الفروع، وحسابات البنوك، والمطابقات البنكية اليومية، ومتابعة تواريخ استحقاق الشيكات لضمان وفرة السيولة."
      },
      {
        "en": "5. Executive Reporting & Tax/VAT Compliance: Leadership generates real-time Balance Sheets, Profit and Loss statements, departmental budget variance analyses, and tax declarations ready for official regulatory compliance.",
        "ar": "5. القوائم المالية وتقارير الضرائب والزكاة: يصدر مجلس الإدارة ميزان المراجعة، وقائمة الدخل والأرباح والخسائر، وتحليل الميزانيات التقديرية، والإقرارات الضريبية المتوافقة مع متطلبات الجهات الرسمية فورياً."
      }
    ],
    "audiences": [
      {
        "en": "Enterprise CEOs, CFOs and executive managing directors",
        "ar": "الرؤساء التنفيذيون، المديرون الماليون وأعضاء مجالس الإدارة"
      },
      {
        "en": "Human resources directors and payroll specialists",
        "ar": "مديرو الموارد البشرية ومسؤولو شؤون الموظفين والأجور"
      },
      {
        "en": "Chief accountants, financial controllers and internal auditors",
        "ar": "رؤساء الحسابات، والمراقبون الماليون والمدققون الداخليون"
      },
      {
        "en": "Procurement specialists and supply chain directors",
        "ar": "مديرو المشتريات وسلاسل الإمداد ومسؤولو التعاقدات"
      },
      {
        "en": "Branch and department supervisors managing localized budgets",
        "ar": "مديرو الفروع ورؤساء الأقسام التشغيلية في المنشأة"
      }
    ]
  },
  "dental-clinic": {
    "explanation": {
      "en": "A specialized clinical and practice management system built specifically for dental centers. It replaces disorganized paper files and appointment conflicts with an interactive graphical tooth chart, integrated treatment planning, automated SMS appointment reminders, prescription generation, and multi-session installment billing.",
      "ar": "نظام إداري وطبي متقدم مخصص لعيادات ومراكز طب وجراحة الأسنان. يحل النظام محل الملفات الورقية وفوضى المواعيد عبر مخطط أسنان تفاعلي (Odontogram)، وخطط علاجية مجدولة، وتذكير ذكي بالمواعيد عبر الرسائل، وإصدار الوصفات الطبية، وفوترة الأقساط للعلاجات طويلة المدى كتقويم الأسنان والزراعة."
    },
    "workflows": [
      {
        "en": "1. Patient Intake & Smart Appointment Scheduling: Receptionists register new patients, record medical histories, and book visits on an interactive multi-doctor calendar with automatic SMS reminders to prevent no-shows.",
        "ar": "1. استقبال المرضى وحجز المواعيد: يسجل موظف الاستقبال المريض الجديد وتاريخه الطبي، ويحدد الموعد عبر تقويم ذكي يوضح جداول الأطباء وعيادات الكراسي، مع إرسال رسائل تذكير تلقائية للمريض قبل الموعد."
      },
      {
        "en": "2. Clinical Examination & Interactive Odontogram: The dentist clicks on individual teeth on the visual chart to record conditions (caries, missing teeth, crowns) and establishes a multi-visit phased treatment roadmap.",
        "ar": "2. الفحص الإكلينيكي ومخطط الأسنان التفاعلي: ينقر الطبيب على السن المستهدف في الرسم البياني للأسنان لتسجيل التشخيص وحالة السن (تسوس، حشو سابق، سن مخلوع)، وتحديد الإجراءات المطلوبة وخطة العلاج."
      },
      {
        "en": "3. Digital Prescriptions & Clinical Documentation: Dentists select pre-configured dental medication templates, generate signed digital prescriptions with allergy checks, and append clinical procedure notes to the patient's record.",
        "ar": "3. الوصفات الطبية الإلكترونية وتوثيق العلاج: يختار الطبيب الأدوية من القوالب الجاهزة مع تنبيهات الحساسية الدوائية، ويصدر وصفة إلكترونية برأسية العيادة، ويوثق تفاصيل ما تم إنجازه في جلسة اليوم."
      },
      {
        "en": "4. Dental Lab Order Tracking: Clinic assistants track outgoing lab orders for crowns, bridges, aligners, and veneers, logging required color shades, expected delivery dates, and associated lab expenses.",
        "ar": "4. متابعة طلبيات معامل ومختبرات الأسنان: يسجل الطاقم الطبي طلبيات التركيبات والعدسات والتقويم المرسلة للمختبرات الخارجية، مع درجة اللون وتاريخ الاستلام ومتابعة تكلفة كل معمل."
      },
      {
        "en": "5. Invoicing, Installment Plans & Doctor Commissions: Billing staff generate treatment invoices, establish down-payments and monthly installment schedules for orthodontic cases, and calculate doctor revenue percentages automatically.",
        "ar": "5. الفوترة والأقساط وعمولات الأطباء: يصدر موظف الحسابات فاتورة العلاج، ويحدد خطة سداد بالأقساط لحالات التقويم والزراعة، ويحتسب النظام نسبة وعمولة كل طبيب من الإيرادات المحصلة آلياً."
      }
    ],
    "audiences": [
      {
        "en": "Dental clinic and specialized dental center owners",
        "ar": "أصحاب عيادات ومراكز ومجمعات طب وجراحة الأسنان"
      },
      {
        "en": "Dentists, orthodontists, periodontists and dental surgeons",
        "ar": "أطباء الأسنان، أخصائيو التقويم، جراحو الفم والتركيبات"
      },
      {
        "en": "Clinic receptionists and patient appointment coordinators",
        "ar": "موظفو الاستقبال ومنسقو الحجوزات والمواعيد"
      },
      {
        "en": "Dental clinic assistants and clinical material coordinators",
        "ar": "مساعدو أطباء الأسنان ومسؤولو العهدة والأدوات الطبية"
      },
      {
        "en": "Billing and financial administrators in dental practices",
        "ar": "مسؤولو المحاسبة والفوترة وتحصيل الأقساط في المركز"
      }
    ]
  },
  "pharmacy-ims": {
    "explanation": {
      "en": "A commercial pharmacy inventory and point-of-sale platform built to safeguard margins and streamline patient dispensing. It provides real-time stock control across multiple branch locations, high-speed barcode cashier checkout, early-warning expiry alerts, automated supplier reorders, and clinical drug safety verification.",
      "ar": "منظومة تجارية متطورة لإدارة الصيدليات ومستودعات الأدوية ومنافذ البيع. صُممت لحماية أرباح الصيدلية ومنع الهدر وتسريع خدمة العملاء، من خلال الربط اللحظي لمخزون الفروع، وشاشات الكاشير السريعة بالباركود، ونظام الإنذار المبكر لتواريخ الصلاحية، وأوامر الشراء التلقائية للموردين."
    },
    "workflows": [
      {
        "en": "1. Rapid Barcode Dispensing & Generic Substitution: Pharmacists scan product barcodes at the POS; the system instantly validates price, checks available stock, and offers alternative generic medicines if the prescribed brand is out of stock.",
        "ar": "1. البيع السريع بالباركود واقتراح البدائل: يمسح الصيدلي باركود الدواء في شاشة الكاشير، فيعرض النظام السعر وتاريخ الصلاحية فوراً، مع إمكانية البحث السريع واقتراح البدائل الدوائية المتطابقة في المادة الفعالة عند نفاد الصنف."
      },
      {
        "en": "2. Automated Expiry Monitoring & Shelf Auditing: Visual dashboards highlight medicines approaching expiration within 30, 60, or 90 days, enabling staff to prioritize stock dispensing or return items to suppliers before write-offs.",
        "ar": "2. متابعة الصلاحيات والإنذار المبكر: تبرز لوحة المتابعة الذكية الأدوية التي تقترب صلاحيتها من الانتهاء (خلال 30 أو 60 أو 90 يوماً)، لتمكين الصيدلي من تصريفها أولاً أو عمل مرتجع لمستودع الأدوية في المهلة المحددة."
      },
      {
        "en": "3. Minimum Stock Thresholds & Purchase Requisitions: When stock of essential medications drops below pre-set safety thresholds, the system automatically aggregates them into draft purchase orders for designated suppliers.",
        "ar": "3. نواقص الأدوية وأوامر الشراء التلقائية: بمجرد وصول رصيد أي دواء إلى حد الأمان الأدنى، يقوم النظام بإدراجه تلقائياً في مسودة طلبية شراء موجهة لشركة الأدوية المعتمدة لتفادي نفاد الأصناف الحيوية."
      },
      {
        "en": "4. Multi-Branch Stock Lookups & Safe Transfers: Staff can instantly check medication availability at neighboring branch locations and issue formal inter-branch transfer manifests with digital sender and receiver confirmation.",
        "ar": "4. فحص توفر الدواء والتحويل بين الفروع: يستعلم الصيدلي بضغطة زر عن توفر الدواء في الفروع الأخرى للشبكة، مع إمكانية إصدار إذن تحويل مخزني رسمي وموثق بين الفرعين لمنع فقدان المبيعات."
      },
      {
        "en": "5. Shift Handover & Cash Drawer Reconciliation: Cashiers perform blind end-of-shift reconciliations, comparing counted physical cash and card receipts against system sales logs to eliminate discrepancies.",
        "ar": "5. إقفال الوردية وجرد الصندوق اليومي: يجري الكاشير إقفال الوردية بمقارنة النقدية الفعلية ومقبوضات الشبكة مع مبيعات النظام، مع تسجيل أي فروقات وإصدار تقرير الإقفال المعتمد قبل تسليم الوردية التالية."
      }
    ],
    "audiences": [
      {
        "en": "Pharmacy chain owners and community pharmacy operators",
        "ar": "أصحاب سلاسل ومجموعات الصيدليات والصيدليات الفردية"
      },
      {
        "en": "Licensed retail pharmacists and pharmacy dispensing technicians",
        "ar": "الصيادلة المرخصون وفنيو صرف الأدوية في المعارض"
      },
      {
        "en": "Pharmaceutical warehouse supervisors and stock managers",
        "ar": "أمناء المستودعات الطبية ومخازن الأدوية"
      },
      {
        "en": "Procurement officers coordinating pharmaceutical supply contracts",
        "ar": "مسؤولو المشتريات والتعاقدات مع شركات ومصانع الأدوية"
      },
      {
        "en": "Financial accountants managing supplier payables and daily revenue",
        "ar": "المحاسبون الماليون المعنيون بمطابقة مبيعات الفروع ومدفوعات الموردين"
      }
    ]
  },
  "full-mark": {
    "explanation": {
      "en": "A comprehensive digital learning management and academy platform designed to organize curriculum delivery, student testing, and course commerce. It organizes structured lectures, automated quizzes, progress tracking, and digital payments into a frictionless experience that allows academies to scale without administrative chaos.",
      "ar": "منصة تعليم إلكتروني وإدارة أكاديميات متكاملة مصممة لتنظيم التدريس، والاختبارات التفاعلية، ومبيعات الكورسات. تجمع المنصة المساقات المنظمة، والاختبارات ذاتية التصحيح، ومتابعة إنجاز الطلاب، وبوابات الدفع الإلكتروني في بيئة تعليمية متكاملة تساعد المراكز التعليمية على التوسع وزيادة طلابها بكل سهولة."
    },
    "workflows": [
      {
        "en": "1. Curriculum Structuring & Media Publishing: Instructors upload structured lessons, video lectures, and PDF resources into modular courses with sequential lesson prerequisites.",
        "ar": "1. بناء المساقات ونشر المحتوى التعليمي: ينشئ المدرب الدورة ويقسمها إلى وحدات ومحاضرات فيديو تفاعلية، مع إرفاق المذكرات وملخصات PDF وتحديد الشروط المسبقة للانتقال من درس لآخر."
      },
      {
        "en": "2. Instant Course Purchase & Automated Enrollment: Learners purchase courses or subscription bundles through secure payment gateways, receiving immediate account activation and enrollment confirmation.",
        "ar": "2. الشراء الإلكتروني وتفعيل الحساب الفوري: يسدد الطالب قيمة الدورة أو الباقة التعليمية عبر بوابات الدفع الإلكتروني بالبطاقات أو المحافظ، ويتم تفعيل حسابه وفتح المحاضرات له فوراً دون انتظار تفعيل يدوي."
      },
      {
        "en": "3. Automated Testing & Scorecard Delivery: Students complete timed online quizzes; the system grades multiple-choice questions instantly, reveals answer explanations, and updates the student's progress record.",
        "ar": "3. أداء الاختبارات والتصحيح التلقائي: يخوض الطالب امتحانات إلكترونية موقوتة، ويقوم النظام بتصحيح الأسئلة فورياً، وعرض الإجابات النموذجية ونقاط الضعف، وتحديث سجل درجات الطالب تلقائياً."
      },
      {
        "en": "4. Student Analytics & Certificate Issuance: Upon completing all lessons and passing required assessments, the platform automatically generates a verified, printable digital certificate of completion.",
        "ar": "4. متابعة التقدم وإصدار الشهادات المعتمدة: فور استكمال مشاهدة الدروس واجتياز الاختبارات المقررة، تُصدر المنصة شهادة إتمام رقمية معتمدة برمز تحقق QR Code قابلة للطباعة والمشاركة."
      },
      {
        "en": "5. Academy Revenue & Marketing Campaigns: Administrators monitor gross platform revenue, student enrollment velocity, and launch targeted discount coupons or promotional package bundles to boost enrollments.",
        "ar": "5. إدارة المبيعات والحملات التسويقية: تتابع إدارة الأكاديمية إجمالي المبيعات، ومعدلات انضمام الطلاب، وتطلق حملات ترويجية بكوبونات خصم أو باقات كورسات مدمجة لزيادة المبيعات."
      }
    ],
    "audiences": [
      {
        "en": "Commercial training institutes and private academic academies",
        "ar": "مراكز التدريب المهني والأكاديميات التعليمية والتعليم المستمر"
      },
      {
        "en": "Independent educators, subject matter experts and course creators",
        "ar": "المعلمون المستقلون، وأساتذة الجامعات وصناع المحتوى التدريبي"
      },
      {
        "en": "Corporate human resources training and certification departments",
        "ar": "إدارات التدريب والتأهيل المهني في الشركات الكبرى"
      },
      {
        "en": "Students, professionals and lifelong learners seeking certifications",
        "ar": "الطلاب والمتدربون الساعون لتطوير مهاراتهم والحصول على شهادات معتمدة"
      }
    ]
  },
  "multi-tenant-commerce": {
    "explanation": {
      "en": "A cloud-based SaaS e-commerce infrastructure engineered to host and manage thousands of independent merchant storefronts. Each business client receives a personalized, isolated store with custom branding, domain mapping, catalog management, and payment processing, all managed from a centralized platform operator control center.",
      "ar": "بنية تحتية سحابية (SaaS) للتجارة الإلكترونية مصممة لاستضافة وإدارة آلاف المتاجر المستقلة للتجار والشركات. يحصل كل تاجر على متجره الخاص بهويته ونطاقه المستقل، وإدارة منتجاته ومبيعاته، في حين يدير مشغل المنصة كافة الاشتراكات والمتاجر مركزياً بأعلى كفاءة وأمان."
    },
    "workflows": [
      {
        "en": "1. Merchant Onboarding & Instant Store Creation: A merchant selects a subscription plan, registers their business name, and the platform automatically provisions an isolated digital storefront with admin credentials.",
        "ar": "1. تسجيل التاجر وتوليد المتجر الفوري: يختار التاجر باقة الاشتراك ويسجل بيانات نشاطه التجاري، فيقوم النظام فورياً بتجهيز متجره الإلكتروني المستقل مع لوحة تحكم إدارية خاصة به."
      },
      {
        "en": "2. Store Branding & Domain Configuration: The merchant uploads logos, customizes color schemes, sets shipping zones, and connects their custom domain name seamlessly.",
        "ar": "2. تخصيص الهوية وربط النطاق (Domain): يرفع التاجر شعاره، ويحدد ألوان المتجر وبانرات العروض، ويضبط مناطق الشحن، ويربط نطاقه الخاص (Domain) بسهولة تامة ودون تعقيد تقني."
      },
      {
        "en": "3. Product Catalog & Inventory Management: The merchant creates products with options (sizes, colors), defines stock counts, establishes retail and wholesale pricing, and uploads image galleries.",
        "ar": "3. إدارة الكتالوج وخيارات المنتجات: يضيف التاجر منتجاته مع المتغيرات (المقاسات والألوان)، ويحدد أسعار البيع والتخفيضات، ورصيد المخزون، مع تنبيهات تلقائية عند اقتراب نفاد الكمية."
      },
      {
        "en": "4. Customer Ordering & Secure Checkout: Online shoppers browse the merchant's store, add items to cart, select delivery methods, and complete purchases via integrated payment gateways.",
        "ar": "4. تسوق العملاء والدفع الآمن: يتصفح المشترون متجر التاجر، ويضيفون المنتجات للسلة، ويحددون عنوان الشحن، ويكملون الدفع ببطاقاتهم البنكية مع استلام رسائل تأكيد فورية للطلب."
      },
      {
        "en": "5. Platform Billing & Multi-Tenant Administration: The SaaS operator monitors platform metrics, collects recurring subscription fees from merchants, and pushes updates globally across all tenant stores.",
        "ar": "5. إدارة المنصة وتحصيل الاشتراكات: يتابع مشغل المنصة أداء ومبيعات كافة المتاجر، ويحصّل رسوم الاشتراكات الدورية، ويطلق التحديثات البرمجية لكافة المتاجر مركزياً وبشكل موحد."
      }
    ],
    "audiences": [
      {
        "en": "SaaS entrepreneurs building an e-commerce platform business",
        "ar": "رواد الأعمال الراغبون في بناء وتشغيل منصة استضافة متاجر إلكترونية (SaaS)"
      },
      {
        "en": "Retail merchants seeking a turnkey independent online store",
        "ar": "التجار والشركات التجارية الباحثون عن متجر إلكتروني مستقل ومتكامل وسريع الإطلاق"
      },
      {
        "en": "Digital agencies providing hosted e-commerce solutions to clients",
        "ar": "الوكالات الرقمية التي تنشئ وتدير متاجر إلكترونية متعددة لعملائها التجاريين"
      }
    ]
  },
  "ecommerce-storefront": {
    "explanation": {
      "en": "A consumer-facing e-commerce retail storefront engineered specifically to eliminate shopping cart abandonment and drive sales conversions. It delivers high-speed product catalog browsing, faceted filtering, a persistent slide-out shopping cart, single-page frictionless checkout, and customer order management.",
      "ar": "واجهة متجر إلكتروني سريعة وعالية التحويل للمستهلكين، صُممت للقضاء على ظاهرة التخلي عن سلة التسوق ومضاعفة المبيعات. توفر تصفحاً فائق السرعة، وفلاتر ذكية، وسلة تسوق منزلقة، ودفعاً في صفحة واحدة، وإدارة كاملة لحسابات وطلبات العملاء."
    },
    "workflows": [
      {
        "en": "1. Rapid Product Discovery: Shoppers find items through instant predictive search or faceted category filters (price, brand, color, customer ratings) with instant visual updates.",
        "ar": "1. البحث والاستكشاف الفوري للمنتجات: يعثر المتسوق على المنتجات فورياً عبر شريط البحث الذكي ذي الاقتراحات التلقائية، أو فلاتر التصفية السريعة حسب السعر والعلامة والمقاس والتقييمات."
      },
      {
        "en": "2. Seamless Cart & Mini-Drawer Experience: Adding products opens a slide-out cart drawer showing order summaries, quantity controls, and free-shipping threshold indicators without leaving the current page.",
        "ar": "2. سلة التسوق المنزلقة وحفظ المنتجات: عند إضافة منتج تظهر سلة جانبية أنيقة تتيح تعديل الكميات وتوضح مؤشر الشحن المجاني التلقائي دون مقاطعة جولة التسوق أو إعادة تحميل الصفحة."
      },
      {
        "en": "3. Frictionless Single-Page Checkout: Shoppers complete delivery address, shipping method, and payment selection on one clean page with optional guest checkout to minimize drop-offs.",
        "ar": "3. إتمام الشراء في صفحة واحدة: يكمل العميل بيانات الشحن واختيار وسيلة الدفع في شاشة واحدة مختصرة ومريحة، مع إمكانية الشراء السريع كزائر لتفادي أي تردد أو مغادرة للمتجر."
      },
      {
        "en": "4. Automated Order Confirmations & Tracking: Customers receive instant SMS/email confirmations with order receipts and secure tracking links showing real-time fulfillment status.",
        "ar": "4. تأكيد الطلب وتتبع الشحنة: يستلم المشتري رسالة تأكيد فورية بالبريد والرسائل النصية بفاتورة الطلب ورابط تتبع مباشر يوضح مراحل تجهيز وشحن الطلب حتى الاستلام."
      },
      {
        "en": "5. Customer Account & Reorder Portal: Returning buyers access their personal portal to track past orders, reorder previous items with a single click, and manage saved wishlists.",
        "ar": "5. بوابة العميل وسجل الطلبات والمفضلة: يسجل العميل الدخول لمتابعة مشترياته السابقة، وإعادة طلب نفس المنتجات بضغطة زر واحدة، وإدارة قائمة المنتجات المفضلة لديه."
      }
    ],
    "audiences": [
      {
        "en": "Direct-to-consumer (D2C) brands and retail businesses",
        "ar": "العلامات التجارية ومتاجر التجزئة الراغبة في البيع المباشر للمستهلكين"
      },
      {
        "en": "Online shoppers prioritizing fast, friction-free checkout",
        "ar": "المتسوقون عبر الإنترنت الباحثون عن تجربة شراء سريعة ومريحة بدون تعقيد"
      },
      {
        "en": "E-commerce managers optimizing online conversion funnels",
        "ar": "مديرو المتاجر الإلكترونية الساعون لرفع معدلات التحويل وتقليص التخلي عن السلات"
      }
    ]
  },
  "warehouse-courier-ims": {
    "explanation": {
      "en": "An integrated warehouse logistics and last-mile courier delivery fulfillment system. It bridges the critical gap between warehouse storage and field drivers, managing multi-location stock allocations, Pick-Pack-Ship pipelines, automated courier dispatching, and reverse logistics returns.",
      "ar": "منظومة لوجستية وإدارية متكاملة لربط إدارة المستودعات وسلاسل الإمداد مع حركة المناديب والشحن الميداني. تضبط المنظومة مخزون المستودعات المتعددة، وتدير دورة تجهيز الطلبات (التقاط، تعبئة، شحن)، وتوزع الشحنات آلياً على المناديب، وتدير المرتجعات باحترافية."
    },
    "workflows": [
      {
        "en": "1. Inbound Receiving & Warehouse Put-Away: New merchandise shipments are checked against purchase orders, labeled with bin location barcodes, and placed into designated storage racks.",
        "ar": "1. استلام البضائع والتخزين في الأرفف: يستلم المستودع الشحنات الواردة ويطابقها بأمر التوريد، ويطبع ملصقات الباركود بموقع الرف (Bin Location)، ويرتب البضاعة في أماكنها المحددة."
      },
      {
        "en": "2. Order Allocation & Pick-Pack Verification: New orders automatically reserve warehouse stock; pickers follow sequenced aisle routes, and packers verify items using barcode scanners before sealing.",
        "ar": "2. حجز المخزون وتجهيز الطلبيات (Pick & Pack): تحجز الطلبات الجديدة أرصدتها من المخزون آلياً، ويتبع عمال التجهيز أقصر مسار للممرات، ويدقق عمال التغليف كل صنف بمسح الباركود لمنع الأخطاء."
      },
      {
        "en": "3. Waybill Generation & Automated Courier Dispatch: The system generates shipping waybills with unique tracking barcodes and assigns orders to couriers based on geographical delivery zones.",
        "ar": "3. طباعة بوالص الشحن والتوزيع على المناديب: يُصدر النظام بوالص الشحن والباركود للطابعات الحرارية، ويوزع الطرود الجاهزة آلياً على المناديب بحسب المناطق الجغرافية ومسارات التوزيع."
      },
      {
        "en": "4. Last-Mile Delivery & Live Courier Tracking: Couriers navigate to recipient locations, capture digital proof of delivery (POD), and update package status in real time.",
        "ar": "4. التسليم الميداني وإثبات التوصيل الرقمي: يتحرك المندوب لتسليم الشحنات، ويوثق استلام العميل بتوقيعه الرقمي أو رمز التحقق، وتتحول حالة الشحنة إلى (تم التسليم) فورياً في النظام."
      },
      {
        "en": "5. Return Processing & Inventory Restocking: Undelivered packages returned by couriers are inspected at the warehouse gate and automatically restocked into available inventory.",
        "ar": "5. فحص المرتجعات وإعادة الإدراج في المخزون: يفحص مسؤولو المستودع الطرود المرتجعة من المناديب، ويتم التحقق من سلامة الأصناف وإعادتها فورياً إلى رصيد المخزون المتاح للبيع."
      }
    ],
    "audiences": [
      {
        "en": "Warehouse directors and logistics fulfillment executives",
        "ar": "مديرو المستودعات وسلاسل الإمداد ومسؤولو المراكز اللوجستية"
      },
      {
        "en": "Warehouse inventory clerks, pickers and packaging staff",
        "ar": "أمناء المستودعات، وعمال التقاط البضائع وفرق التعبئة والتغليف"
      },
      {
        "en": "Fleet dispatchers and delivery courier personnel",
        "ar": "منسقو غرف التوزيع وسائقو ومناديب الشحن والتسليم"
      },
      {
        "en": "Trading companies managing fulfillment across multiple branches",
        "ar": "الشركات التجارية والمستوردون الذين يديرون مخازن وأساطيل توزيع خاصة"
      }
    ]
  },
  "retail-inventory-web": {
    "explanation": {
      "en": "A web-based retail inventory and sales management platform designed for multi-branch stores and trading companies. It centralizes product catalogs, warehouse stock tracking, browser-based point of sale (POS) checkout, supplier purchasing, and customer sales accounts into one accessible system.",
      "ar": "منصة ويب تجارية لإدارة مبيعات ومخازن التجزئة للأنشطة متعددة الفروع. توحد إدارة كتالوج المنتجات، ومخزون الفروع والمستودعات، وشاشات الكاشير السريعة عبر المتصفح، وفواتير المشتريات، وحسابات العملاء والديون في نظام مركزي آمن."
    },
    "workflows": [
      {
        "en": "1. Centralized Cataloging & Tiered Pricing: Store managers register products with SKUs, barcodes, and multiple pricing tiers (retail, wholesale, promotional) across all branch locations.",
        "ar": "1. إدارة الكتالوج ومستويات التسعير: يسجل مدير المتجر الأصناف والباركود مع تحديد أسعار التجزئة والجملة والعروض الترويجية وتطبيقها الموحد أو المخصص على الفروع."
      },
      {
        "en": "2. Fast Browser POS Checkout: Cashiers process sales transactions through an intuitive web checkout interface supporting barcode scanners, multiple tender types, and thermal receipt printing.",
        "ar": "2. البيع السريع ونقاط البيع (Web POS): ينجز الكاشير عمليات البيع عبر شاشة متصفح سريعة تدعم قارئ الباركود، وتعدد طرق السداد (نقدي، شبكة، آجل)، مع طباعة الفواتير الحرارية فوراً."
      },
      {
        "en": "3. Inter-Branch Stock Transfers: Branch supervisors request inventory transfers from main warehouses, tracking shipments from dispatch through arrival and verification.",
        "ar": "3. تحويل البضائع بين الفروع: يطلب مشرف الفرع بضائع من المستودع الرئيسي، وتُتابع حركة الشحنة بين الفرعين مع تأكيد الاستلام لمنع أي فقدان أو نقص مخزني."
      },
      {
        "en": "4. Supplier Purchasing & Invoicing: Purchasing teams record supplier invoices, track delivery manifests, and manage accounts payable schedules and payments.",
        "ar": "4. فواتير المشتريات ومستحقات الموردين: يسجل قسم المشتريات فواتير التوريد، ومحاضر الاستلام، ومتابعة تواريخ سداد دفعات الموردين وإصدار سندات الصرف المعتمدة."
      },
      {
        "en": "5. Customer Credit Ledgers & End-of-Day P&L: Financial staff track customer credit balances and generate daily reports on gross revenue, cost of goods, and net profit margins.",
        "ar": "5. حسابات ذمم العملاء وتقارير الأرباح: يتابع المحاسب مديونيات العملاء الآجلين وسندات القبض، مع إصدار تقارير الأرباح والخسائر وحركة المبيعات اليومية بضغطة زر."
      }
    ],
    "audiences": [
      {
        "en": "Retail store owners and retail chain managers",
        "ar": "أصحاب محلات ومعارض التجزئة ومديرو السلاسل التجارية"
      },
      {
        "en": "Store cashiers and sales representatives",
        "ar": "موظفو الكاشير وممثلو المبيعات في المعارض والمنافذ"
      },
      {
        "en": "Warehouse supervisors and inventory auditing specialists",
        "ar": "أمناء المستودعات ومسؤولو الجرد والمطابقة المخزنية"
      },
      {
        "en": "Accountants managing supplier payables and sales receivables",
        "ar": "المحاسبون الماليون المعنيون بحسابات المبيعات والمديونيات"
      }
    ]
  },
  "inventory-desktop-ims": {
    "explanation": {
      "en": "A mission-critical Windows desktop inventory and point-of-sale system engineered for speed, offline reliability, and hardware integration. It delivers instantaneous keyboard-driven cashier sales, thermal barcode label printing, multi-branch stock control, supplier/customer balance sheets, and automated database backups.",
      "ar": "برنامج مكتبي فائق السرعة والموثوقية لنظام ويندوز لإدارة المخزون التجاري ونقاط البيع. صُمم للمتاجر والمستودعات التي تحتاج سرعة استجابة فائقة بدون أي تأخير، وعملاً مستمراً بدون انقطاع عند غياب الإنترنت، مع تكامل كامل مع طابعات الباركود الحرارية، وحسابات الديون، والنسخ الاحتياطي التلقائي."
    },
    "workflows": [
      {
        "en": "1. High-Speed Cashier Checkout: Cashiers process customer sales in seconds using barcode scanners and dedicated keyboard shortcuts (F-keys), instantly opening cash drawers and printing thermal receipts.",
        "ar": "1. شاشة كاشير فائقة السرعة: ينجز موظف الكاشير الفواتير في ثوانٍ معدودة باستخدام ماسح الباركود واختصارات لوحة المفاتيح السريعة، مع فتح درج النقدية وطباعة الإيصال فورياً."
      },
      {
        "en": "2. Barcode Label Designing & Direct Printing: Staff design and print custom product barcode tags and shelf price labels directly to thermal printers without third-party software.",
        "ar": "2. تصميم وطباعة ملصقات الباركود: يصمم الموظف ملصقات الباركود وأسعار الأرفف بالأحجام المطلوبة ويطبعها مباشرة على طابعات الباركود الحرارية بشعار المحل والسعر."
      },
      {
        "en": "3. Multi-Branch Stock Tracking: Managers review real-time stock balances across warehouse locations and issue documented transfer manifests with sender/receiver sign-offs.",
        "ar": "3. متابعة المخزون والتحويل بين الفروع: يستعرض المدير كميات البضائع في الفروع والمخزن، ويصدر أذون تحويل بضاعة رسمية وموثقة لمنع أي عجز أو تلاعب."
      },
      {
        "en": "4. Supplier & Customer Debt Management: Accountants manage complete supplier and customer ledger accounts, tracking invoices, cash payments, checks, and aging debt summaries.",
        "ar": "4. إدارة حسابات الموردين والعملاء والديون: يتابع المحاسب سجلات الموردين والعملاء الآجلين، وحركات الفواتير، والدفعات المسددة، مع تقارير تواريخ استحقاق المديونيات."
      },
      {
        "en": "5. Shift Closures & Automated Encrypted Backups: Closing a shift reconciles physical cash against logged sales, generates Excel/PDF reports, and creates an automated encrypted database backup.",
        "ar": "5. إقفال اليومية والنسخ الاحتياطي التلقائي: عند إقفال الوردية يطابق البرنامج نقدية الصندوق بالمبيعات، ويصدر تقارير الأرباح لـ Excel وPDF، مع إنشاء نسخة احتياطية مشفرة لقاعدة البيانات."
      }
    ],
    "audiences": [
      {
        "en": "Supermarkets, retail stores and wholesale distributors",
        "ar": "محلات السوبرماركت ومتاجر التجزئة ومستودعات البيع بالجملة"
      },
      {
        "en": "Store cashiers requiring zero-latency offline checkout tools",
        "ar": "موظفو الكاشير المحتاجون لنظام بيع سريع جداً لا يتوقف عند انقطاع الإنترنت"
      },
      {
        "en": "Store owners demanding rigorous inventory and shrinkage control",
        "ar": "أصحاب المتاجر الساعون للرقابة الصارمة على المخزون وحماية أموالهم من الهدر"
      }
    ]
  },
  "retail-wms-desktop": {
    "explanation": {
      "en": "A specialized warehouse management desktop system engineered to govern the physical movement of inventory inside large storage facilities and distribution hubs. It organizes warehouse bin locations, enforces receiving inspection protocols, sequences picking paths, and supports continuous cycle counting.",
      "ar": "نظام إدارة مستودعات متخصص (WMS) لسطح المكتب يدير حركة البضائع داخل مراكز التوزيع والمستودعات الكبرى. ينظم مواقع وأرفف التخزين، ويطبق فحصاً صارماً للبضائع الواردة، ويوجه مسارات التقاط الطلبات، ويدعم الجرد الدوري المستمر دون تعطيل العمليات."
    },
    "workflows": [
      {
        "en": "1. Inbound Receiving & Quality Inspection: Warehouse staff scan incoming shipments against purchase orders, verify quantities and condition, and generate warehouse pallet barcodes.",
        "ar": "1. الاستلام وفحص الجودة عند البوابة: يفحص عمال المستودع الشحنات الواردة ويطابقونها بأوامر التوريد المعتمدة، مع تسجيل أي عيوب وطباعة باركود المنصات والأصناف."
      },
      {
        "en": "2. Bin Allocation & Directed Put-Away: The system assigns precise storage coordinates (Zone-Aisle-Rack-Bin) for received merchandise to optimize facility storage capacity.",
        "ar": "2. توجيه التخزين وتحديد مواقع الأرفف (Bin Allocation): يحدد النظام إحداثيات موقع التخزين الدقيق (المنطقة - الممر - الرف) لكل صنف لتحقيق الاستغلال الأقصى لمساحة المستودع."
      },
      {
        "en": "3. Sequenced Order Picking & Staging: Outbound pick lists are sequenced by physical aisle locations, guiding workers along the shortest walking path to gather items quickly.",
        "ar": "3. مسارات التقاط الطلبيات المنظمة: تصدر قوائم التقاط الطلبيات مرتبة جغرافياً حسب تسلسل الممرات، مما يوفر وقت وجهد عمال التجهيز ويسرع تسليم الطلبيات للشحن."
      },
      {
        "en": "4. Continuous Cycle Counting: Staff perform rolling inventory counts on designated aisles or categories without halting warehouse operations, flagging discrepancies for review.",
        "ar": "4. الجرد الدوري المستمر: يجري المشرفون جرداً دورياً لأروقة أو أصناف محددة دون إيقاف العمل في المستودع، وتتم مطابقة الأرصدة الفعلية بالدفترية لمعالجة الفروقات فوراً."
      },
      {
        "en": "5. Capacity Utilization & Operational Analytics: Managers review dashboards showing facility storage capacity utilization percentages, slow-moving inventory, and fulfillment speeds.",
        "ar": "5. تحليلات إشغال المساحات وسرعة الدوران: يستعرض مدير المستودع لوحات تحكم توضح نسبة إشغال المساحات التخزينية، والبضائع الراكدة لتصريفها، ومعدلات سرعة إنجاز الشحنات."
      }
    ],
    "audiences": [
      {
        "en": "Warehouse directors and distribution center managers",
        "ar": "مديرو المستودعات ومراكز التوزيع وسلاسل الإمداد"
      },
      {
        "en": "Receiving clerks, forklift operators and inventory pickers",
        "ar": "مسؤولو بوابات الاستلام، وسائقو الرافعات وفرق التقاط وتجهيز البضائع"
      },
      {
        "en": "Inventory controllers and operational auditing specialists",
        "ar": "أخصائيو الرقابة المخزنية والجرد وتدقيق حركة الأصناف"
      }
    ]
  },
  "edumint-learning": {
    "explanation": {
      "en": "A structured role-based e-learning platform providing three isolated portals for students, instructors, and administrators. It equips educational institutes with lecture scheduling, interactive video playback, homework grading, automated exams, and integrated tuition payments.",
      "ar": "منصة تعليم إلكتروني تفاعلية قائمة على تعدد الأدوار توفر ثلاث بوابات مستقلة ومخصصة للطلاب والمعلمين والإدارة. تمنح المعاهد والمراكز التعليمية بيئة رقمية لجدولة المحاضرات، وعرض الفيديو التفاعلي، وتصحيح الواجبات، والاختبارات الآلية، وسداد الرسوم الدراسية إلكترونياً."
    },
    "workflows": [
      {
        "en": "1. Teacher Lecture Scheduling: Instructors plan upcoming live and recorded lectures on their personal calendar, upload lecture notes, and define lesson objectives.",
        "ar": "1. تنظيم وجدولة المحاضرات للمعلم: ينظم المعلم جدول محاضراته عبر تقويمه الخاص، ويرفع مذكرات وملخصات الدروس، ويحدد محاور المحاضرة القادمة للطلاب."
      },
      {
        "en": "2. Interactive Student Learning: Students log in to watch high-definition video lectures with chapter markers, review attached PDF notes, and submit homework assignments.",
        "ar": "2. تجربة تعلم تفاعلية للطالب: يدخل الطالب بوابته لمشاهدة محاضرات الفيديو عالية الوضوح مع فصول توضيحية، واستعراض مذكرات PDF، ورفع ملفات الواجبات والتكاليف."
      },
      {
        "en": "3. Homework Review & Teacher Grading: Instructors review submitted student assignments, assign grades, and provide individualized feedback to foster student growth.",
        "ar": "3. تصحيح الواجبات والتغذية الراجعة: يراجع المعلم واجبات الطلاب المرسلة عبر بوابته، ويرصد الدرجات، ويرفق ملاحظاته التوجيهية الفردية لتحسين مستوى الطالب."
      },
      {
        "en": "4. Integrated Tuition Fee Payments: Students and parents pay course fees or monthly tuition installments through secure online checkout with instant enrollment confirmation.",
        "ar": "4. سداد المصروفات الدراسية إلكترونياً: يسدد الطالب أو ولي أمره الرسوم الدراسية أو الأقساط الشهرية عبر بوابات الدفع الإلكتروني مع تفعيل فوري للاشتراك وإصدار الإيصال."
      },
      {
        "en": "5. Institutional Oversight & Revenue Dashboards: Academy administrators monitor student attendance rates, teacher delivery metrics, and overall tuition revenue collections.",
        "ar": "5. الإشراف الإداري والتحصيل المالي: تتابع إدارة المعهد نسب حضور الطلاب وتفاعلهم، وإنتاجية المعلمين، وإجمالي الإيرادات المالية المحصلة والأقساط المتبقية."
      }
    ],
    "audiences": [
      {
        "en": "Private educational institutes, tutoring centers and academies",
        "ar": "المعاهد التعليمية الخاصة، ومراكز التدريب وأكاديميات التقوية واللغات"
      },
      {
        "en": "Professional instructors, teachers and university tutors",
        "ar": "المعلمون المحترفون، وأساتذة الجامعات والمدربون الأكاديميون"
      },
      {
        "en": "Students seeking an organized, accountable digital learning portal",
        "ar": "الطلاب وأولياء الأمور الباحثون عن منصة تعليمية منظمة وسهلة المتابعة"
      }
    ]
  },
  "skyscraper-kinetic-visualizer": {
    "explanation": {
      "en": "An interactive scroll-driven digital showcase engineered for luxury skyscraper projects and architectural mega-developments. By synchronizing scroll momentum with high-resolution frame sequences, it reveals the building's physical evolution, floor tiers, engineering innovations, and investor details in an unforgettable visual presentation.",
      "ar": "عرض رقمي تفاعلي مستجيب للتمرير مخصص للأبراج والمشاريع العقارية الاستثمارية الكبرى. من خلال ربط حركة التمرير بتسلسل لقطات فائقة الدقة، يستعرض الموقع تطور البرج المعماري، وتفاصيل الطوابق، والحلول الهندسية الفريدة في تجربة بصرية مبهرة لا تُنسى للمستثمرين."
    },
    "workflows": [
      {
        "en": "1. Scroll-Driven Architectural Progression: The visitor controls the building's visual rise from ground foundation to penthouse pinnacle using intuitive scroll gestures.",
        "ar": "1. التحكم بالتطور المعماري عبر التمرير: يقود الزائر بنفسه صعود وتكامل البرج من الأساسات حتى قمة البنتهاوس عبر حركة تمرير الشاشة الانسيابية."
      },
      {
        "en": "2. Floor-by-Floor Navigational Exploration: Investors click quick-navigation links to jump directly to specific tiers (Commercial Podium, Hotel Suites, Sky Residences).",
        "ar": "2. استكشاف الطوابق والأقسام بضغطة زر: يضغط المستثمر على أقسام البرج للانتقال الفوري إلى الأدوار التجارية، أو الأجنحة الفندقية، أو المساكن الفاخرة."
      },
      {
        "en": "3. Interactive Engineering Hotspots: Contextual callouts appear to explain innovative facade systems, green building features, and luxury amenities.",
        "ar": "3. الشروحات الهندسية التفاعلية: تظهر نقاط تفاعلية متحركة توضح مميزات الواجهات الذكية، والأنظمة الموفرة للطاقة، والمرافق الترفيهية الحصرية للبرج."
      },
      {
        "en": "4. Executive Presentation Gallery Mode: Sales teams switch to fullscreen presentation mode during high-stakes investor pitch meetings and VIP sales gallery tours.",
        "ar": "4. وضع العرض المخصص لاجتماعات المستثمرين: تستخدم فرق التسويق والمبيعات وضع ملء الشاشة فائق النقاء في قاعات المبيعات لاجتماعات كبار المستثمرين."
      },
      {
        "en": "5. VIP Lead Inquiry Capture: Interested investors submit private viewing requests or download confidential investment prospectuses directly through integrated forms.",
        "ar": "5. استقبال طلبات الحجز والاستثمار (VIP): يرسل المستثمر طلب معاينة خاصة أو يحمل كراسة الاستثمار الرسمية للبرج عبر نموذج التواصل الراقي المدمج."
      }
    ],
    "audiences": [
      {
        "en": "Luxury real estate developers and mega-project investment firms",
        "ar": "شركات التطوير العقاري الكبرى وصناديق الاستثمار العقاري الفاخر"
      },
      {
        "en": "Architectural firms showcasing flagship skyscraper designs",
        "ar": "المكاتب الهندسية والمعمارية المتنافسة في تصاميم ومشاريع الأبراج"
      },
      {
        "en": "High-net-worth property investors and luxury penthouse buyers",
        "ar": "كبار المستثمرين ورجال الأعمال الباحثين عن وحدات استثمارية في أبراج أيقونية"
      }
    ]
  },
  "smart-saas-logistics-showcase": {
    "explanation": {
      "en": "A browser-based interactive 3D WebGL showcase designed to present next-generation supply chain, smart fleet telemetry, and automated logistics platforms. Visitors explore interactive 3D cargo hubs, freight vehicles, and live sensor simulations through smooth, cinematic scroll-driven storytelling.",
      "ar": "عرض ويب تفاعلي ثلاثي الأبعاد بـ WebGL مصمم لتقديم منصات إدارة الأساطيل وسلاسل الإمداد والخدمات اللوجستية الحديثة. يستكشف الزائر مراكز التوزيع والشاحنات ومحاكاة بيانات التتبع الحية عبر تجربة بصرية سينمائية متفاعلة مع التمرير."
    },
    "workflows": [
      {
        "en": "1. 3D Global Logistics Scene Exploration: Visitors navigate an interactive WebGL scene showing interconnected freight routes, distribution centers, and transport fleets.",
        "ar": "1. استكشاف المشهد اللوجستي ثلاثي الأبعاد: يتجول الزائر في بيئة تفاعلية ثلاثية الأبعاد بـ WebGL تجسد مسارات الشحن ومراكز التوزيع وأساطيل النقل الحديثة."
      },
      {
        "en": "2. Scroll-Synchronized Camera Choreography: As the user scrolls down, the 3D camera sweeps around vehicles and hubs, highlighting automated logistics capabilities.",
        "ar": "2. جولة الكاميرا السينمائية مع التمرير: مع حركة التمرير، تتحرك الكاميرا ثلاثية الأبعاد في زوايا سينمائية متقنة حول الشاحنات والمستودعات لاستعراض ميزات النظام."
      },
      {
        "en": "3. Interactive Telemetry Sensor Overlays: Floating cards display simulated vehicle speed, engine diagnostics, fuel efficiency, and real-time GPS locations.",
        "ar": "3. محاكاة مؤشرات التتبع الفوري للأساطيل: تظهر بطاقات بيانات تفاعلية عائمة تعرض مؤشرات محاكاة لسرعة الشاحنة، وحالة المحرك، واستهلاك الوقود والموقع المباشر."
      },
      {
        "en": "4. Automated Distribution Hub Visualization: Visualizes warehouse sorting systems, cross-docking transitions, and last-mile dispatch routing in action.",
        "ar": "4. استعراض مراكز الفرز والتوزيع الذكية: يركز العرض على آليات الفرز الآلي في المستودعات المركزية ومراحل انطلاق شحنات التوصيل النهائي للمستهلكين."
      },
      {
        "en": "5. Enterprise Demo Scheduling: Enterprise logistics decision-makers submit requests for live platform demonstrations and technical sales consultations.",
        "ar": "5. حجز العروض التوضيحية لمديري الشركات: يطلب مديرو العمليات وسلاسل الإمداد عرضاً توضيحياً حياً للمنظومة اللوجستية لمناقشة تطبيقها في شركاتهم."
      }
    ],
    "audiences": [
      {
        "en": "Third-party logistics (3PL) and freight forwarding companies",
        "ar": "شركات الشحن الدولي ووكلاء الخدمات اللوجستية وسلاسل الإمداد"
      },
      {
        "en": "Fleet management SaaS platforms pitching enterprise contracts",
        "ar": "منصات البرمجيات السحابية المتخصصة في تتبع وإدارة أساطيل النقل"
      },
      {
        "en": "Supply chain executives evaluating automated logistics software",
        "ar": "المدراء التنفيذيون لقطاعات التوزيع والنقل الباحثون عن حلول تقنية متطورة"
      }
    ]
  },
  "control-a-agency": {
    "explanation": {
      "en": "A comprehensive bilingual (Arabic/English) corporate digital agency web platform. It establishes a trusted market presence through dedicated service catalogs, an interactive case-study portfolio, consultation booking forms, and an administrative CMS allowing staff to update all site content effortlessly.",
      "ar": "منصة ويب مؤسسية متكاملة لشركة حلول برمجية وتحول رقمي تدعم اللغتين العربية والإنجليزية. ترسخ المنصة مكانة الشركة في السوق عبر دليل شامل للخدمات، ومعرض تفاعلي للمشاريع ودراسات الحالة، ونماذج حجز الاستشارات، مع لوحة تحكم CMS لإدارة المحتوى بسهولة تامة."
    },
    "workflows": [
      {
        "en": "1. Bilingual Public Browsing: Prospective clients switch seamlessly between Arabic (RTL) and English (LTR) to explore services, capabilities, and technological expertise.",
        "ar": "1. التصفح المؤسسي ثنائي اللغة: يتصفح العميل الموقع بسلاسة تامة باللغتين العربية والإنجليزية للاطلاع على حلول الشركة التقنية وخبراتها البرمجية."
      },
      {
        "en": "2. Case Study & Portfolio Review: Visitors filter completed projects by industry, reviewing client problems, implemented solutions, and business outcomes.",
        "ar": "2. استعراض المشاريع وسوابق الأعمال: يفرز الزائر المشاريع المنفذة حسب القطاع (تطبيقات، متاجر، ERP) للاطلاع على تفاصيل المشكلة والحل والنتائج التي تحققت."
      },
      {
        "en": "3. Project Consultation Request: Prospective clients submit structured inquiry forms detailing project scope and budget, instantly routed to agency sales engineers.",
        "ar": "3. طلب استشارة وعرض سعر: يرسل العميل تفاصيل مشروعه الجديد وميزانيته التقديرية عبر نموذج تواصل ذكي يُوجه فوراً لمديري المشروعات لدراسته والتواصل معه."
      },
      {
        "en": "4. CMS Content Updates by Marketing: Agency staff log into the protected admin panel to publish new case studies, update service descriptions, and add partner logos without code.",
        "ar": "4. تحديث المحتوى من لوحة التحكم (CMS): يدخل فريق التسويق لوحة الإدارة المحمية لإضافة مشاريع جديدة، وتعديل الخدمات، وإضافة شعارات العملاء دون الحاجة لمبرمج."
      },
      {
        "en": "5. Lead Management & Follow-Up: Agency sales coordinators review submitted client inquiries, track proposal statuses, and initiate discovery calls.",
        "ar": "5. متابعة طلبات العملاء والصفقات: يراجع مسؤولو المبيعات الطلبات الواردة من الموقع، ويحدثون حالة العروض الفنية، ويتواصلون مع العملاء لتوقيع العقود."
      }
    ],
    "audiences": [
      {
        "en": "Enterprise corporate clients seeking digital transformation partners",
        "ar": "الشركات الكبرى والمؤسسات الباحثة عن شريك موثوق لتنفيذ برمجياتها المخصصة"
      },
      {
        "en": "Startups and business founders building custom web and mobile apps",
        "ar": "رواد الأعمال وأصحاب المشاريع الناشئة الساعون لتطوير تطبيقاتهم ومواقعهم"
      },
      {
        "en": "Agency marketing directors managing corporate brand credibility",
        "ar": "إدارة الشركة وفرق التسويق الساعية لترسيخ هوية تجارية قوية وجذب عملاء جدد"
      }
    ]
  },
  "keep-going-health": {
    "explanation": {
      "en": "A professional bilingual health and wellness web platform that provides consultation program catalogs, an evidence-based medical article portal, client health transformation showcases, and a secure admin panel for publishing content and handling patient inquiries.",
      "ar": "منصة ويب صحية وطبية ثنائية اللغة تضم دليلاً لبرامج الاستشارات الصحية والتغذوية، وبوابة لنشر المقالات الطبية الموثوقة، ومعرضاً لقصص التحول والتعافي الصحي، ولوحة تحكم إدارية محمية لإدارة المقالات واستقبال طلبات الاستشارة وتوجيهها للمختصين."
    },
    "workflows": [
      {
        "en": "1. Health Services Discovery: Patients explore specialized health packages, nutrition tracks, and wellness consultation programs tailored to their lifestyle goals.",
        "ar": "1. تصفح الخدمات والبرامج الصحية: يستعرض المراجع باقات الاستشارات الصحية، وبرامج التغذية العلاجية، وتعديل نمط الحياة، ويتعرف على تفاصيل كل باقة ومخرجاتها."
      },
      {
        "en": "2. Evidence-Based Article Reading: Visitors read medically reviewed health articles, wellness tips, and research summaries categorized by health topics.",
        "ar": "2. قراءة المقالات والتثقيف الصحي: يتصفح الزائر مكتبة المقالات الطبية الموثوقة والنصائح الغذائية المفهرسة حسب المواضيع لزيادة الوعي الصحي."
      },
      {
        "en": "3. Transformation Story Inspection: Prospective clients review real transformation case studies and client testimonials to gain confidence in the clinical approach.",
        "ar": "3. الاطلاع على قصص النجاح والتحول الصحي: يطّلع المراجع على حالات تعافي ونجاح سابقة لمشتركين حققوا أهدافهم الصحية، مما يمنحه الدافع والثقة لبدء برنامجه."
      },
      {
        "en": "4. Consultation Booking & Inquiry Submission: Patients submit consultation inquiries detailing their health goals and preferred contact schedules.",
        "ar": "4. حجز الاستشارة والتواصل مع المختص: يرسل المراجع طلب الاستشارة مع توضيح حالته الصحية والوقت المفضل للتواصل، ليتم تحويل الطلب للأخصائي المعني."
      },
      {
        "en": "5. Admin Content & Message Administration: Clinic staff log in to the admin panel to publish new health articles, update service offerings, and reply to patient messages.",
        "ar": "5. إدارة المحتوى والتواصل من لوحة الإدارة: يسجل الفريق الطبي والإداري الدخول للوحة التحكم لنشر المقالات الجديدة، وتحديث البرامج، والرد على استفسارات المراجعين."
      }
    ],
    "audiences": [
      {
        "en": "Health, nutrition and lifestyle transformation clinics",
        "ar": "مراكز وعيادات الاستشارات الصحية، والتغذية العلاجية واللياقة البدنية"
      },
      {
        "en": "Doctors, clinical dietitians and certified health coaches",
        "ar": "الأطباء، وأخصائيو التغذية العلاجية، ومدربو الصحة ونمط الحياة المعتمدون"
      },
      {
        "en": "Patients seeking credible, personalized health advice and programs",
        "ar": "المراجعون والمرضى الباحثون عن استشارات صحية موثوقة ومتابعة فردية متخصصة"
      }
    ]
  },
  "biometric-gate-system": {
    "explanation": {
      "en": "An integrated access-control and physical testing platform combining hardware fingerprint verification, IP camera capture, RFID cards, and AI computer vision for automated sports exercise scoring. It manages physical gate security, tracks testing cohorts, and automates physical rep counting for athletic academies.",
      "ar": "منظومة تحكم أمني واختبارات رياضية متكاملة تدمج التحقق البيومتري ببصمة الإصبع، وكاميرات المراقبة، وبطاقات RFID الذكية، مع نماذج الذكاء الاصطناعي لتقييم وعد التمارين الرياضية آلياً. تدير المنظومة البوابات الإلكترونية، وجداول لجان الاختبارات، وعد التمارين الرياضية بكاميرات الفيديو دون تدخل بشري."
    },
    "workflows": [
      {
        "en": "1. Athlete Scheduling & Cohort Assignment: Administrators import student rosters via Excel, schedule testing dates, and assign candidates to specific testing committees.",
        "ar": "1. جدولة لجان ومواعيد الاختبارات: يستورد مسؤولو النظام قوائم الطلاب بملفات إكسل، ويجدولون مواعيد الاختبارات، ويوزعون الطلاب على لجان التقييم الرياضي."
      },
      {
        "en": "2. Multi-Factor Gate Verification: Candidates present their RFID smart card, scan their fingerprint, and the system matches their identity and live camera photo before releasing the gate.",
        "ar": "2. المصادقة البيومترية وفتح البوابات: يمرر الطالب بطاقته الذكية، ويمسح بصمة إصبعه، فيقوم النظام بمطابقة هويته وصورته عبر الكاميرا والتحقق من موعد لجنته قبل فتح البوابة الإلكترونية."
      },
      {
        "en": "3. Live Access Logging & Anti-Passback: Every authorized entry is logged with photo capture and timestamp; duplicate card use is instantly rejected by anti-passback controls.",
        "ar": "3. تسجيل الدخول ومنع التمرير المزدوج: يسجل النظام كل حركة دخول بالوقت والصورة في سجل تدقيق فوري، مع حظر أي محاولة لتمرير البطاقة لشخص آخر (Anti-Passback)."
      },
      {
        "en": "4. AI Computer-Vision Exercise Scoring: Inside the testing gym, cameras analyze athlete joint angles during pushups and sit-ups, automatically counting valid reps and rejecting incomplete movements.",
        "ar": "4. تقييم وعد التمارين بالذكاء الاصطناعي: في صالة الاختبار، ترصد الكاميرات زوايا مفاصل المتدرب أثناء تمارين الضغط والبطن، وتعد التكرارات الصحيحة آلياً وتستبعد الحركات الخاطئة."
      },
      {
        "en": "5. Official Scorecards & Excel Data Export: Committee examiners review auto-tallied athletic scores alongside gate entry records and export certified score sheets to Excel and PDF.",
        "ar": "5. إصدار النتائج والتقارير المعتمدة: تراجع لجان التحكيم الدرجات المحتسبة آلياً مع سجلات الحضور، وتصدر كشوف الدرجات والنتائج النهائية بملفات Excel وPDF معتمدة."
      }
    ],
    "audiences": [
      {
        "en": "Military colleges, police academies and defense training institutes",
        "ar": "الكليات العسكرية، وأكاديميات الشرطة ومراكز تدريب الدفاع والأمن"
      },
      {
        "en": "Sports federations, athletic testing academies and fitness centers",
        "ar": "الاتحادات الرياضية، والأندية، ومراكز قياس الكفاءة البدنية واللياقية"
      },
      {
        "en": "Security directors overseeing high-security facility access control",
        "ar": "مديرو الأمن والسلامة في المنشآت الحيوية التي تتطلب ضبطاً بيومترياً صارماً"
      }
    ]
  },
  "parentguard-monitoring": {
    "explanation": {
      "en": "A private, self-hosted parental monitoring ecosystem featuring a WPF desktop parent dashboard and an Android companion app, paired via QR code and secured with end-to-end AES-256-GCM encryption. It allows guardians to monitor location, screen time, camera verification, messages, and calls without third-party cloud data exposure.",
      "ar": "منظومة متابعة وحماية أسرية خاصة ومستضافة ذاتياً، تضم لوحة تحكم WPF لسطح المكتب وتطبيق أندرويد مرافق، مقترنين برمز QR ومشفرين بالكامل بتقنية AES-256-GCM. تتيح للآباء الاطمئنان على أطفالهم وتتبع مواقعهم ووقت الشاشة ومحيط الكاميرا وسجل المكالمات دون مشاركة أي بيانات مع خوادم خارجية."
    },
    "workflows": [
      {
        "en": "1. Encrypted QR Pairing & Child Consent: The parent's PC generates an encrypted QR code; the child's phone scans it, presents a transparent consent notice, and establishes a direct peer-to-peer session.",
        "ar": "1. الإقران الآمن برمز QR وموافقة الطفل: يولد كمبيوتر الوالد رمز QR مشفراً؛ يمسحه هاتف الطفل وتظهر له شاشة موافقة واضحة ليتم إنشاء اتصال محلي آمن ومباشر بين الجهازين."
      },
      {
        "en": "2. Live Geolocation & Safe Zone Geofencing: The parent views real-time GPS coordinates on the dashboard map, with automated notifications when the child enters or exits safe boundaries.",
        "ar": "2. تتبع الموقع المباشر وحدود الأمان الجغرافية: يشاهد الوالد موقع طفله مباشرة على خريطة لوحة التحكم، مع تنبيهات تلقائية فور خروج الطفل من المنطقة الآمنة (المدرسة، المنزل)."
      },
      {
        "en": "3. On-Demand Camera Environmental Verification: In emergency situations, parents can stream video from the phone's camera to verify the child's physical safety and surroundings.",
        "ar": "3. التحقق البصري المباشر من البيئة المحيطة: في الحالات الطارئة، يمكن للوالد فتح بث مباشر مؤقت لكاميرا الهاتف للاطمئنان على سلامة الطفل والتأكد من أمان محيطه."
      },
      {
        "en": "4. Screen Time & App Usage Oversight: The dashboard displays daily hours spent on games, social media, and apps, helping families establish healthy, balanced digital screen boundaries.",
        "ar": "4. تنظيم وقت الشاشة واستخدام التطبيقات: تعرض لوحة التحكم تقريراً يومياً بساعات استخدام الهاتف وتوزيع الوقت بين الألعاب واليوتيوب لمساعدة الأسرة على وضع حدود صحية."
      },
      {
        "en": "5. Call & Message Safety Logging: Logs incoming and outgoing calls and text messages, alerting parents to unknown contacts or cyberbullying threats while preserving child awareness.",
        "ar": "5. سجل المكالمات والرسائل للحماية من المخاطر: يسجل التطبيق أرقام المكالمات الواردة والصادرة والرسائل النصية لحماية الأبناء مبكراً من المتصلين المجهولين والتنمر الرقمي."
      }
    ],
    "audiences": [
      {
        "en": "Parents and guardians seeking private family device safety solutions",
        "ar": "الآباء والأمهات الحريصون على سلامة أطفالهم الرقمية والواقعية بخصوصية تامة"
      },
      {
        "en": "Families who refuse commercial third-party cloud data harvesting",
        "ar": "العائلات التي ترفض تخزين بيانات أطفالها وصورهم ومواقعهم على خوادم تجارية"
      },
      {
        "en": "Organizations evaluating consent-first, ethical family safety tools",
        "ar": "الجهات التربوية والتعليمية التي تدعم أدوات الأمان الأسري القائمة على الشفافية"
      }
    ]
  },
  "document-management-system": {
    "explanation": {
      "en": "A full-stack enterprise document management and archiving platform built with a Clean Architecture .NET REST API, Angular SPA client, multi-stage approval workflows, and hybrid cloud storage (AWS S3 & Azure Blob). It centralizes corporate files, governs revision histories, enforces sign-off chains, and maintains immutable audit logs.",
      "ar": "منصة مؤسسية متقدمة لإدارة وأرشفة وضبط وثائق المشاريع والمؤسسات، مبنية ببنية نظيفة (Clean Architecture) مع واجهة برمجية بـ .NET وواجهة Angular، وسير عمل للاعتمادات، وتخزين سحابي هجين (AWS S3 وAzure Blob). توحد وثائق المؤسسة، وتضبط تاريخ الإصدارات، وتطبق سلاسل الموافقات الإدارية، وسجلات التدقيق الصارمة."
    },
    "workflows": [
      {
        "en": "1. Document Upload & Metadata Tagging: Project teams upload drawings, contracts, and submittals into structured folder trees with custom metadata tags (Project, Revision, Contractor, Discipline).",
        "ar": "1. رفع وتصنيف الوثائق بالبيانات الوصفية: يرفع المهندسون المخططات والعقود والتقارير في مجلدات المشاريع مع إرفاق بيانات تصنيف دقيقة (رقم المشروع، التخصص، المقاول، تاريخ الصدور)."
      },
      {
        "en": "2. Automatic Version Sequencing: When revisions are uploaded, the system assigns incremental version numbers (v1.0, v1.1, v2.0), archiving prior copies and preserving rollback history.",
        "ar": "2. ترقيم وتسلسل الإصدارات التلقائي: عند رفع أي تعديل على المخطط، يمنحه النظام رقم إصدار تسلسلي آلي (v1.0, v1.1, v2.0)، مع تجميد النسخ السابقة في الأرشيف لضمان عدم ضياعها."
      },
      {
        "en": "3. Multi-Stage Review & Approval Workflow: Submitted documents route sequentially to designated reviewers (e.g., Lead Engineer -> Consultant -> Project Director) for formal digital sign-off.",
        "ar": "3. مسار المراجعة والاعتماد متعدد المستويات: تنتقل الوثيقة آلياً عبر مسار اعتماد منظم (مهندس الموقع -> الاستشاري العام -> مدير المشروع) لإبداء الملاحظات والتوقيع الرقمي بالاعتماد أو الرفض."
      },
      {
        "en": "4. Secure Cloud Archiving (AWS S3 / Azure Blob): Approved files are stored in encrypted cloud object storage buckets, accessible only through time-limited secure signed URLs.",
        "ar": "4. الأرشفة السحابية المشفرة (AWS S3 وAzure Blob): تُحفظ الوثائق المعتمدة في حاويات التخزين السحابي عالي السعة والأمان، ولا يمكن الوصول إليها إلا عبر روابط مشفرة ومؤقتة تمنع التسريب."
      },
      {
        "en": "5. Comprehensive Compliance & Audit Logging: The system logs every user who viewed, downloaded, revised, or approved any document with immutable timestamps for ISO and legal audits.",
        "ar": "5. سجلات التدقيق والامتثال القانوني: يوثق النظام بدقة اسم وتوقيت كل من فتح أو حمل أو عدل أو اعتمد أي وثيقة، بما يضمن الجاهزية الكاملة لعمليات التدقيق المالي والقانوني وشهادات الأيزو."
      }
    ],
    "audiences": [
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
    ]
  },
  "cogreahb-rehab-games": {
    "explanation": {
      "en": "A specialized suite of Windows desktop cognitive rehabilitation games engineered for occupational therapy clinics and neuropsychology research. It delivers structured exercises for attention, focus, and stimulus-response reflex assessment, powered by a custom-built native Arabic Right-to-Left (RTL) game text rendering engine.",
      "ar": "منظومة ألعاب وتمارين رقمية متخصصة لإعادة التأهيل المعرفي وتدريب الانتباه وسرعة الاستجابة الحركية والبصرية. طُورت لمراكز العلاج الوظيفي وبحوث علم النفس العصبي، وتتميز بمحرك ألعاب سريع يدعم الكتابة والخطوط العربية من اليمين لليسار، وتسجيل وقت الاستجابة بالمللي ثانية ومعدلات الدقة فورياً."
    },
    "workflows": [
      {
        "en": "1. Clinician Assessment Configuration: The therapist selects the exercise type (Fruit Categorization for attention or Visual Stimulus for reaction speed) and sets difficulty parameters.",
        "ar": "1. ضبط إعدادات الجلسة وتحديد الصعوبة: يختار المعالج نوع التمرين (مطابقة فئات الفواكه للانتباه أو المنبه البصري لسرعة الاستجابة) ويحدد مستوى الصعوبة وسرعة ظهور العناصر."
      },
      {
        "en": "2. Patient Exercise Execution: The patient engages with the interactive game using mouse, keyboard, or touchscreen inputs, guided by clear native Arabic and English visual instructions.",
        "ar": "2. أداء المريض للتمرين التفاعلي: يتفاعل المريض مع اللعبة عبر اللمس أو الفأرة لاختيار الأهداف المطلوبة وتجنب المشتتات، مع إرشادات بصرية وصوتية واضحة باللغتين العربية والإنجليزية."
      },
      {
        "en": "3. Millisecond Telemetry & Error Logging: The system records response latency in milliseconds for every single trial, tracking correct hits, false alarms, and missed targets.",
        "ar": "3. القياس الزمني الفوري بدقة المللي ثانية: يقيس النظام زمن رد فعل المريض بالمللي ثانية لكل محاولة، ويسجل بدقة الإجابات الصحيحة، والأخطاء، والمحاولات المتأخرة."
      },
      {
        "en": "4. Instant Session Scorecard Review: At the end of the session, an objective performance summary appears on screen detailing average reaction time, accuracy percentage, and fatigue curves.",
        "ar": "4. تقرير الأداء الفوري بعد الجلسة: فور انتهاء التمرين، تظهر شاشة تقرير مفصلة توضح متوسط سرعة استجابة المريض، ونسبة الدقة المئوية، ومنحنى تركيز المريض أثناء الجلسة."
      },
      {
        "en": "5. Longitudinal Progress Tracking: Therapists compare session-by-session history over weeks of rehabilitation to evaluate cognitive-motor recovery and adjust therapeutic plans.",
        "ar": "5. متابعة التطور والتعافي على المدى الطويل: يقارن المعالج نتائج الجلسات عبر الأسابيع والشهور لتقييم مدى تحسن وظائف الانتباه وسرعة رد الفعل وتطوير الخطة العلاجية."
      }
    ],
    "audiences": [
      {
        "en": "Occupational therapists and cognitive rehabilitation specialists",
        "ar": "أخصائيو العلاج الوظيفي وإعادة التأهيل المعرفي والعصبي"
      },
      {
        "en": "Researchers studying attention, cognitive fatigue and motor reaction",
        "ar": "الباحثون الأكاديميون في علوم الأعصاب الإدراكية وسلوك ردود الفعل"
      },
      {
        "en": "Clinics supporting stroke recovery, traumatic brain injury (TBI), and elderly care",
        "ar": "مراكز تأهيل مصابي الجلطات الدماغية، وإصابات الرأس ورعاية كبار السن"
      }
    ]
  },
  "academic-consulting-portal": {
    "explanation": {
      "en": "A specialized bilingual consultation platform tailored for healthcare practitioners and medical students in the Kingdom of Saudi Arabia. It delivers structured advisory tracks for residency and fellowship pathways, Saudi Commission (SCFHS) classification guidance, medical CV curation, and simulated residency mock interviews.",
      "ar": "منصة استشارات أكاديمية وتدريبية متخصصة موجهة للكوادر والممارسين الصحيين في المملكة العربية السعودية. تقدم المنصة مسارات استشارية مقننة للإرشاد لبرامج البورد والزمالة الطبية، والتوجيه لمتطلبات تصنيف هيئة التخصصات الصحية (SCFHS)، وصياغة السير الذاتية الطبية، ومحاكاة المقابلات الشخصية."
    },
    "workflows": [
      {
        "en": "1. Advisory Service Selection: Medical graduates or practitioners explore consultation tracks (Career Pathways, SCFHS Classification, CV Building, or Mock Interviews) and view advisor profiles.",
        "ar": "1. اختيار المسار الاستشاري المناسب: يستعرض الطبيب أو الطالب المسارات المتاحة (التوجيه المهني، التصنيف السعودي، السيرة الطبية، محاكاة المقابلات) ويتعرف على مؤشرات كل مسار."
      },
      {
        "en": "2. Inquiry & Document Pre-Submission: Candidates complete structured booking forms, specify their medical discipline, and attach relevant CVs or classification files for preliminary review.",
        "ar": "2. حجز الموعد ورفع المستندات المبدئية: يملأ الممارس نموذج الحجز ويحدد تخصصه وتطلعاته المهنية، ويرفق سيرته الذاتية أو أوراقه لمراجعتها من المستشار قبل انعقاد الجلسة."
      },
      {
        "en": "3. Direct One-on-One Advisory Session: The candidate meets with senior healthcare academic advisors to review credential requirements, career roadmaps, or residency exam strategies.",
        "ar": "3. انعقاد الجلسة الاستشارية الفردية: يلتقي الممارس بالمستشار الأكاديمي لمراجعة أوراقه، ووضع خارطة طريق واضحة لاجتياز اختبارات الرخصة أو الحصول على القبول في برامج البورد."
      },
      {
        "en": "4. Mock Interview Simulation & Feedback: Residency applicants undergo simulated high-pressure medical interviews, receiving actionable feedback on clinical scenario responses and communication.",
        "ar": "4. محاكاة المقابلات الشخصية والتقييم: يخوض المتقدم لبرامج الإقامة والزمالة جلسة محاكاة واقعية لأسئلة اللجان السريرية، مع تقييم فوري لنقاط القوة وفرص التحسين."
      },
      {
        "en": "5. Advisory Administration & Content Updates: Platform coordinators manage consultant availability, update regulatory SCFHS guidelines, and publish career guidance articles via the CMS.",
        "ar": "5. إدارة الجلسات وتحديث المحتوى الإرشادي: ينسق مشرفو المنصة مواعيد المستشارين، ويحدثون شروط ولوائح التصنيف، وينشرون مقالات الإرشاد المهني عبر لوحة التحكم."
      }
    ],
    "audiences": [
      {
        "en": "Medical, dental, pharmacy and healthcare graduates in Saudi Arabia",
        "ar": "خريجو كليات الطب البشري، وطب الأسنان، والصيدلة والعلوم الطبية في السعودية"
      },
      {
        "en": "Healthcare practitioners pursuing SCFHS licensing and professional promotions",
        "ar": "الممارسون الصحيون الساعون للحصول على التصنيف المهني والترقيات من هيئة التخصصات"
      },
      {
        "en": "Academic advisors, consultants and residency program directors",
        "ar": "المستشارون الأكاديميون وأطباء الزمالة الموجهون للأجيال الطبية الجديدة"
      }
    ]
  },
  "nexacore-3d-showcase": {
    "explanation": {
      "en": "An interactive, scroll-driven 3D WebGL website showcase engineered for enterprise ERP and SaaS platform solutions. Using real-time Three.js geometries, shader lighting, and Lenis smooth scrolling, it transforms complex cloud software architecture into an immersive, tactile digital experience that captivates enterprise decision-makers.",
      "ar": "عرض ويب تفاعلي ثلاثي الأبعاد بـ WebGL مستجيب للتمرير لمنصات الـ ERP والـ SaaS المؤسسية. يجمع بين مجسمات Three.js الفورية، وخامات التظليل المتوهجة، وتمرير Lenis فائق السلاسة، ليحول البنية البرمجية السحابية المعقدة إلى قصة بصرية ملموسة تبهر كبار المديرين وصناع القرار في الشركات."
    },
    "workflows": [
      {
        "en": "1. 3D Architectural Node Assembly: As the visitor scrolls down, real-time 3D geometries assemble dynamically on screen, representing core ERP, Dental Cloud, and microservice infrastructure.",
        "ar": "1. تجميع العقد المعمارية ثلاثية الأبعاد: مع تمرير الصفحة، تتجمع مجسمات ثلاثية الأبعاد تفاعلية في الوقت الحقيقي لتجسيد نواة الـ ERP، والسحابة الطبية، والخدمات السحابية المترابطة."
      },
      {
        "en": "2. Lenis-Driven Momentum Scrolling: The visitor experiences frictionless, normalized momentum scrolling synchronized directly with the WebGL canvas animation loop.",
        "ar": "2. تجربة التمرير فائق الانسيابية: يستمتع الزائر بتمرير سلس وخالٍ من أي تقطيع بمحرك Lenis، متزامن تماماً مع حركة الرسوم ثلاثية الأبعاد بمعدل 60 إطاراً في الثانية."
      },
      {
        "en": "3. Interactive Camera Choreography & Module Inspection: The 3D camera sweeps around central software nodes, illuminating functional capabilities as the user scrolls into each section.",
        "ar": "3. حركة الكاميرا السينمائية واستعراض الوحدات: تتحرك الكاميرا بمرونة لتسليط الضوء على كل وحدة برمجية (المحاسبة، سلاسل الإمداد، السجلات الطبية) مع وصول المستخدم للقسم المعني."
      },
      {
        "en": "4. Real-Time Journey Progress HUD: A sleek on-screen progress indicator displays the visitor's real-time position through the multi-tier software architecture story.",
        "ar": "4. مؤشر تقدم الرحلة الاستكشافية: يوضح شريط تقدم علوي مستقبلي نسبة وموقع استعراض الزائر لأقسام المنظومة المختلفة أثناء جولته التفاعلية."
      },
      {
        "en": "5. Enterprise Demo Request Funnel: Technology buyers and executive leaders click interactive call-to-action touchpoints to request private product demonstrations and technical deep dives.",
        "ar": "5. حجز العروض التوضيحية الحية: يضغط قادة التقنية والمدراء التنفيذيون على أزرار طلب العروض التوضيحية لحجز جلسة استعراض حي مخصصة للمنظومة."
      }
    ],
    "audiences": [
      {
        "en": "Enterprise CTOs, CIOs and software procurement directors",
        "ar": "المدراء التقنيون ومدراء نظم المعلومات وقادة شراء البرمجيات في المؤسسات"
      },
      {
        "en": "SaaS founders seeking high-impact, visual brand differentiation",
        "ar": "مؤسسو منصات الـ SaaS والـ ERP الباحثون عن تميز بصري استثنائي لمنتجاتهم"
      },
      {
        "en": "Design and engineering teams building forward-looking web experiences",
        "ar": "المصممون والمهندسون الرقميون الساعون لبناء واجهات ويب تفاعلية حديثة ومبهرة"
      }
    ]
  }
};

export function getProjectClientGuide(
  projectId: string,
  locale: Locale,
): {
  explanation: string;
  workflows: string[];
  audiences: string[];
} {
  const guide = PROJECT_CLIENT_GUIDES[projectId];
  if (!guide) {
    throw new Error(`Missing client-facing project guide for "${projectId}".`);
  }

  return {
    explanation: guide.explanation[locale],
    workflows: guide.workflows.map((item) => item[locale]),
    audiences: guide.audiences.map((item) => item[locale]),
  };
}
