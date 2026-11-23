import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const covers = [
  ["abo3mo-delivery", "منصة أبو عمو للتوصيل", "delivery", "#EAF2FF", "#2879D7", "delivery"],
  ["enterprise-erp", "منصة تخطيط موارد المؤسسات", "erp", "#EDF7F3", "#16856B", "erp"],
  ["dental-clinic", "نظام إدارة عيادة الأسنان", "dental", "#EEF8FB", "#1685A8", "dental"],
  ["pharmacy-ims", "نظام إدارة الصيدليات", "pharmacy", "#F1F7EC", "#668E36", "pharmacy"],
  ["full-mark", "منصة فول مارك التعليمية", "education", "#FFF4E7", "#D47A25", "education"],
  ["multi-tenant-commerce", "منصة التجارة متعددة المتاجر", "commerce", "#F4F1FF", "#7257C8", "commerce"],
  ["ecommerce-storefront", "واجهة متجر إلكتروني متكاملة", "storefront", "#FFF0F1", "#D45D68", "storefront"],
  ["warehouse-courier-ims", "نظام مستودعات وتوصيل", "warehouse", "#EEF4F8", "#356B91", "warehouse"],
  ["retail-inventory-web", "نظام مخزون المتاجر", "inventory", "#F2F6E9", "#728C35", "inventory"],
  ["inventory-desktop-ims", "نظام مخزون سطح المكتب", "desktop", "#EBF3F6", "#427A8E", "desktop"],
  ["retail-wms-desktop", "نظام إدارة مستودعات البيع", "wms", "#F1F3F8", "#596A94", "wms"],
  ["edumint-learning", "منصة إيديومنت للتعلم", "learning", "#EFF7FA", "#2D7F9C", "learning"],
  ["skyscraper-kinetic-visualizer", "عارض الأبراج الحركي", "architecture", "#F2F0FF", "#6859C7", "architecture"],
  ["smart-saas-logistics-showcase", "منصة لوجستيات SaaS الذكية", "logistics", "#EDF5FB", "#2877A8", "logistics"],
  ["control-a-agency", "منصة كونترول للوكالات", "agency", "#F6F1EC", "#A66B3D", "agency"],
  ["keep-going-health", "منصة كيپ قو للمتابعة الصحية", "health", "#FFF1F4", "#C85D73", "health"],
  ["biometric-gate-system", "نظام بوابات الدخول الحيوي", "security", "#ECF5F3", "#2D8A74", "biometric"],
  ["parentguard-monitoring", "نظام مراقبة الوالدين", "monitoring", "#F4F2FF", "#7660B8", "parent"],
  ["document-management-system", "نظام إدارة الوثائق", "documents", "#EDF3F8", "#4D7192", "documents"],
  ["cogreahb-rehab-games", "منصة ألعاب التأهيل الحركي", "rehab", "#FFF4EA", "#CC7A3B", "rehab"],
  ["academic-consulting-portal", "بوابة الاستشارات الأكاديمية", "academic", "#EDF7F5", "#4D927F", "academic"],
  ["nexacore-3d-showcase", "عرض نيكساكور ثلاثي الأبعاد", "3d", "#F1F1F8", "#66658F", "three-d"],
];

const motifMap = {
  delivery: `<circle cx="865" cy="360" r="112" fill="#fff"/><path d="M800 390h130l-24-82H823z" fill="#fff" stroke="${"ACCENT"}" stroke-width="8"/><circle cx="832" cy="420" r="22" fill="#fff" stroke="${"ACCENT"}" stroke-width="8"/><circle cx="928" cy="420" r="22" fill="#fff" stroke="${"ACCENT"}" stroke-width="8"/><path d="M610 382h122M676 382l50-50" stroke="${"ACCENT"}" stroke-width="8"/>`,
  erp: `<rect x="760" y="300" width="280" height="210" rx="28" fill="#fff" stroke="${"ACCENT"}" stroke-width="8"/><path d="M812 448v-82M872 448v-132M932 448v-56M992 448V274" stroke="${"ACCENT"}" stroke-width="8"/><rect x="608" y="340" width="132" height="170" rx="24" fill="#fff" stroke="${"ACCENT"}" stroke-width="8"/>`,
  dental: `<path d="M865 274c-86 0-124 72-96 156 18 54 42 104 70 104 35 0 20-105 58-105s23 105 58 105c28 0 52-50 70-104 28-84-10-156-96-156-23 0-41 12-64 12" fill="#fff" stroke="${"ACCENT"}" stroke-width="8"/>`,
};

function escapeXml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

for (const [id, arTitle, label, bg, accent, type] of covers) {
  const dir = path.join("public", "images", "projects", id);
  await mkdir(dir, { recursive: true });
  const defaultMotif = `<circle cx="900" cy="420" r="150" fill="#fff" stroke="${accent}" stroke-width="8"/><path d="M790 420h220M900 310v220M822 342l156 156M978 342l-156 156" stroke="${accent}" stroke-width="8" stroke-linecap="round"/><circle cx="900" cy="420" r="42" fill="${accent}" opacity=".12"/>`;
  const motif = (motifMap[type] ?? defaultMotif).replaceAll("ACCENT", accent);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="760" viewBox="0 0 1200 760" role="img" aria-labelledby="title description">
  <title id="title">${escapeXml(arTitle)} project illustration</title>
  <desc id="description">Illustrative project cover for ${escapeXml(arTitle)}, not an application screenshot.</desc>
  <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${bg}"/><stop offset="1" stop-color="#FFFFFF"/></linearGradient></defs>
  <rect width="1200" height="760" rx="32" fill="url(#bg)"/>
  <circle cx="1120" cy="100" r="180" fill="${accent}" opacity=".07"/><circle cx="80" cy="720" r="240" fill="${accent}" opacity=".06"/>
  <text x="72" y="94" fill="#53657C" font-family="Arial, sans-serif" font-size="18" font-weight="700" letter-spacing="4">EHATA PROJECT</text>
  <rect x="72" y="124" width="520" height="520" rx="34" fill="#10243D"/>
  <rect x="112" y="178" width="440" height="62" rx="18" fill="#FFFFFF" opacity=".08"/><circle cx="144" cy="209" r="10" fill="${accent}"/><rect x="172" y="198" width="210" height="12" rx="6" fill="#FFFFFF" opacity=".42"/>
  <rect x="112" y="264" width="132" height="300" rx="18" fill="#FFFFFF" opacity=".07"/>
  <rect x="268" y="264" width="284" height="300" rx="18" fill="${accent}" opacity=".10" stroke="#FFFFFF" stroke-opacity=".12" stroke-width="2"/>
  <rect x="292" y="290" width="236" height="34" rx="10" fill="#FFFFFF" opacity=".10"/><rect x="292" y="350" width="86" height="86" rx="18" fill="${accent}" opacity=".22"/><rect x="394" y="350" width="134" height="18" rx="9" fill="#FFFFFF" opacity=".24"/><rect x="394" y="382" width="92" height="12" rx="6" fill="#FFFFFF" opacity=".16"/><rect x="292" y="462" width="236" height="14" rx="7" fill="#FFFFFF" opacity=".12"/><rect x="292" y="492" width="168" height="14" rx="7" fill="#FFFFFF" opacity=".12"/>
  <text x="112" y="608" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="24" font-weight="700">${escapeXml(arTitle)}</text>
  ${motif}
  <rect x="620" y="650" width="500" height="52" rx="26" fill="#FFFFFF" opacity=".82" stroke="${accent}" stroke-opacity=".18"/>
  <text x="870" y="684" text-anchor="middle" fill="#53657C" font-family="Arial, sans-serif" font-size="16" font-weight="700" letter-spacing="3">${escapeXml(label.toUpperCase())}</text>
</svg>`;
  await writeFile(path.join(dir, "cover.svg"), svg, "utf8");
}
