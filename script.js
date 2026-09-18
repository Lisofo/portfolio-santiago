// script.js

// ==== I18N (ES / EN) ====
const translations = {
  es: {
    'meta.title': 'Santiago Castañares | Desarrollador Web & Mobile',
    'header.downloadCv': 'Descargar CV',
    'about.heading': 'Sobre mí',
    'about.text': 'Desarrollador apasionado por crear aplicaciones mobile de alto impacto, con experiencia sólida en Flutter, React y Android nativo. Especializado en Kotlin y arquitecturas modernas. Busco seguir creciendo en un entorno colaborativo y desafiante, aportando conocimientos técnicos y capacidad de resolución de problemas.',
    'experience.heading': 'Experiencia profesional',
    'exp1.date': 'Febrero 2026 — Actualidad',
    'exp1.role': 'Desarrollador Android (Kotlin)',
    'exp1.desc': 'Desarrollo de aplicaciones Android nativas con Kotlin, utilizando Jetpack Compose y XML, y desarrollo multiplataforma con Kotlin Multiplatform (KMP) y Compose Multiplatform. Implementación de patrones arquitectónicos MVVM, MVP y MVI, consumo de webservices RESTful, persistencia de datos con Room y SQLite, y manejo avanzado de Coroutines y Flows.',
    'exp2.date': '2023 — Febrero 2026',
    'exp2.role': 'Desarrollador Front-End Flutter',
    'exp2.desc': 'Desarrollo web y mobile multiplataforma con Flutter, testing de APIs y validación de endpoints con Postman, e implementación de interfaces responsivas y de alto rendimiento.',
    'exp3.date': '2023',
    'exp3.role': 'Sport Analyst',
    'exp3.desc': 'Recopilación y análisis de datos deportivos, utilizando modelos predictivos para análisis avanzados.',
    'education.heading': 'Formación académica',
    'education.item1': 'Analista en Tecnologías de la Información — Universidad ORT (2025)',
    'education.item2': 'React — CoderHouse (2025)',
    'education.item3': 'Backend Node.js/Express y MongoDB — CoderHouse (2025)',
    'education.item4': 'JavaScript — CoderHouse (2023)',
    'education.item5': 'Desarrollo Web — CoderHouse (2023)',
    'education.item6': 'Tecnicatura en Gestión de Soporte IT — Instituto BIOS (2022-2023)',
    'education.item7': 'Licenciatura en Sistemas — Universidad ORT (2022)',
    'projects.heading': 'Proyectos destacados',
    'badge.inProgress': 'En desarrollo',
    'project.crm.title': 'CRM Empresarial',
    'project.crm.desc': 'Desarrollo de un sistema de gestión de clientes interno utilizando Flutter Web y API REST, con enfoque en rendimiento y usabilidad.',
    'project.crm.cap1': 'Inicio de sesión',
    'project.crm.cap2': 'Dashboard',
    'project.crm.cap3': 'Listado de ventas',
    'project.crm.cap4': 'Detalle de entidad',
    'project.crm.cap5': 'Categorías',
    'project.crm.alt1': 'CRM - Inicio de sesión',
    'project.crm.alt2': 'CRM - Dashboard',
    'project.crm.alt3': 'CRM - Listado de ventas',
    'project.crm.alt4': 'CRM - Detalle de entidad',
    'project.crm.alt5': 'CRM - Categorías',
    'project.wms.desc': 'Implementación de una aplicación multiplataforma para control de stock, picking y gestión de almacenes.',
    'project.wms.cap1': 'Inicio de sesión',
    'project.wms.cap2': 'Selección de almacén',
    'project.wms.cap3': 'Inventario',
    'project.wms.cap4': 'Monitor de órdenes',
    'project.wms.cap5': 'Picking',
    'project.wms.alt1': 'WMS - Inicio de sesión',
    'project.wms.alt2': 'WMS - Selección de almacén',
    'project.wms.alt3': 'WMS - Inventario',
    'project.wms.alt4': 'WMS - Monitor de órdenes',
    'project.wms.alt5': 'WMS - Picking',
    'project.portal.title': 'Portal de Clientes',
    'project.portal.desc': 'Desarrollo de una plataforma de acceso para clientes con autenticación, panel de información personalizada y comunicación directa con la empresa.',
    'project.glutenhub.desc': 'App para encontrar comercios aptos para celíacos, con reseñas de la comunidad, favoritos y panel para dueños de negocio. Cliente Flutter + backend NestJS.',
    'project.glutenhub.cap1': 'Onboarding: bienvenida',
    'project.glutenhub.cap2': 'Onboarding: seguridad alimentaria',
    'project.glutenhub.cap3': 'Inicio de sesión',
    'project.glutenhub.cap4': 'Registro',
    'project.glutenhub.alt1': 'GlutenHub - Onboarding, bienvenida',
    'project.glutenhub.alt2': 'GlutenHub - Onboarding, seguridad alimentaria',
    'project.glutenhub.alt3': 'GlutenHub - Inicio de sesión',
    'project.glutenhub.alt4': 'GlutenHub - Registro',
    'project.finance.title': 'Smart Finance App',
    'project.finance.desc': 'App de finanzas personales para registrar gastos, tarjetas y metas de ahorro, con cliente Flutter multiplataforma y backend propio en Node.js/Express con PostgreSQL.',
    'project.finance.cap1': 'Inicio de sesión',
    'project.finance.cap2': 'Listado de gastos',
    'project.finance.cap3': 'Agregar gasto',
    'project.finance.cap4': 'Tarjetas',
    'project.finance.cap5': 'Metas de ahorro',
    'project.finance.cap6': 'Perfil',
    'project.finance.alt1': 'Smart Finance App - Inicio de sesión',
    'project.finance.alt2': 'Smart Finance App - Listado de gastos',
    'project.finance.alt3': 'Smart Finance App - Agregar gasto',
    'project.finance.alt4': 'Smart Finance App - Tarjetas',
    'project.finance.alt5': 'Smart Finance App - Metas de ahorro',
    'project.finance.alt6': 'Smart Finance App - Perfil',
    'tech.heading': 'Tecnologías',
    'contact.heading': 'Contacto',
    'footer.text': '© 2026 Santiago Castañares — Desarrollador Web & Mobile',
    'aria.carouselPrev': 'Captura anterior',
    'aria.carouselNext': 'Captura siguiente',
    'aria.goToSlide': 'Ir a la captura {n}',
    'aria.langToggle': 'Cambiar idioma',
  },
  en: {
    'meta.title': 'Santiago Castañares | Web & Mobile Developer',
    'header.downloadCv': 'Download CV',
    'about.heading': 'About me',
    'about.text': "Passionate developer focused on building high-impact mobile applications, with solid experience in Flutter, React and native Android. Specialized in Kotlin and modern architectures. Looking to keep growing in a collaborative, challenging environment, contributing technical knowledge and problem-solving skills.",
    'experience.heading': 'Professional experience',
    'exp1.date': 'February 2026 — Present',
    'exp1.role': 'Android Developer (Kotlin)',
    'exp1.desc': 'Development of native Android applications with Kotlin, using Jetpack Compose and XML, and cross-platform development with Kotlin Multiplatform (KMP) and Compose Multiplatform. Implementation of MVVM, MVP and MVI architectural patterns, RESTful web service consumption, data persistence with Room and SQLite, and advanced handling of Coroutines and Flows.',
    'exp2.date': '2023 — February 2026',
    'exp2.role': 'Front-End Flutter Developer',
    'exp2.desc': 'Cross-platform web and mobile development with Flutter, API testing and endpoint validation with Postman, and implementation of responsive, high-performance interfaces.',
    'exp3.date': '2023',
    'exp3.role': 'Sport Analyst',
    'exp3.desc': 'Collection and analysis of sports data, using predictive models for advanced analysis.',
    'education.heading': 'Education',
    'education.item1': 'Information Technology Analyst — Universidad ORT (2025)',
    'education.item2': 'React — CoderHouse (2025)',
    'education.item3': 'Backend Node.js/Express and MongoDB — CoderHouse (2025)',
    'education.item4': 'JavaScript — CoderHouse (2023)',
    'education.item5': 'Web Development — CoderHouse (2023)',
    'education.item6': 'IT Support Management Degree — Instituto BIOS (2022-2023)',
    'education.item7': "Bachelor's Degree in Systems — Universidad ORT (2022)",
    'projects.heading': 'Featured projects',
    'badge.inProgress': 'In progress',
    'project.crm.title': 'Enterprise CRM',
    'project.crm.desc': 'Development of an internal customer management system using Flutter Web and a REST API, focused on performance and usability.',
    'project.crm.cap1': 'Login',
    'project.crm.cap2': 'Dashboard',
    'project.crm.cap3': 'Sales list',
    'project.crm.cap4': 'Entity detail',
    'project.crm.cap5': 'Categories',
    'project.crm.alt1': 'CRM - Login',
    'project.crm.alt2': 'CRM - Dashboard',
    'project.crm.alt3': 'CRM - Sales list',
    'project.crm.alt4': 'CRM - Entity detail',
    'project.crm.alt5': 'CRM - Categories',
    'project.wms.desc': 'Implementation of a cross-platform application for stock control, picking and warehouse management.',
    'project.wms.cap1': 'Login',
    'project.wms.cap2': 'Warehouse selection',
    'project.wms.cap3': 'Inventory',
    'project.wms.cap4': 'Order monitor',
    'project.wms.cap5': 'Picking',
    'project.wms.alt1': 'WMS - Login',
    'project.wms.alt2': 'WMS - Warehouse selection',
    'project.wms.alt3': 'WMS - Inventory',
    'project.wms.alt4': 'WMS - Order monitor',
    'project.wms.alt5': 'WMS - Picking',
    'project.portal.title': 'Client Portal',
    'project.portal.desc': 'Development of a client access platform with authentication, a personalized information dashboard and direct communication with the company.',
    'project.glutenhub.desc': 'App for finding celiac-friendly businesses, with community reviews, favorites and a dashboard for business owners. Flutter client + NestJS backend.',
    'project.glutenhub.cap1': 'Onboarding: welcome',
    'project.glutenhub.cap2': 'Onboarding: food safety',
    'project.glutenhub.cap3': 'Login',
    'project.glutenhub.cap4': 'Sign up',
    'project.glutenhub.alt1': 'GlutenHub - Onboarding, welcome',
    'project.glutenhub.alt2': 'GlutenHub - Onboarding, food safety',
    'project.glutenhub.alt3': 'GlutenHub - Login',
    'project.glutenhub.alt4': 'GlutenHub - Sign up',
    'project.finance.title': 'Smart Finance App',
    'project.finance.desc': 'Personal finance app to track expenses, cards and savings goals, with a cross-platform Flutter client and a custom Node.js/Express backend with PostgreSQL.',
    'project.finance.cap1': 'Login',
    'project.finance.cap2': 'Expense list',
    'project.finance.cap3': 'Add expense',
    'project.finance.cap4': 'Cards',
    'project.finance.cap5': 'Savings goals',
    'project.finance.cap6': 'Profile',
    'project.finance.alt1': 'Smart Finance App - Login',
    'project.finance.alt2': 'Smart Finance App - Expense list',
    'project.finance.alt3': 'Smart Finance App - Add expense',
    'project.finance.alt4': 'Smart Finance App - Cards',
    'project.finance.alt5': 'Smart Finance App - Savings goals',
    'project.finance.alt6': 'Smart Finance App - Profile',
    'tech.heading': 'Technologies',
    'contact.heading': 'Contact',
    'footer.text': '© 2026 Santiago Castañares — Web & Mobile Developer',
    'aria.carouselPrev': 'Previous screenshot',
    'aria.carouselNext': 'Next screenshot',
    'aria.goToSlide': 'Go to screenshot {n}',
    'aria.langToggle': 'Switch language',
  },
};

const CV_FILES = {
  es: 'CV_Santiago_Castañares.pdf',
  en: 'CV_Santiago_Castañares_EN.pdf',
};

let currentLang = localStorage.getItem('lang') || (navigator.language && navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es');

function t(key, params) {
  const dict = translations[currentLang] || translations.es;
  let value = dict[key];
  if (value === undefined) return undefined;
  if (params) {
    Object.keys(params).forEach(p => {
      value = value.replace(`{${p}}`, params[p]);
    });
  }
  return value;
}

function applyTranslations() {
  document.documentElement.lang = currentLang === 'en' ? 'en' : 'es';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = t(el.getAttribute('data-i18n'));
    if (value !== undefined) el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const value = t(el.getAttribute('data-i18n-alt'));
    if (value !== undefined) el.setAttribute('alt', value);
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const value = t(el.getAttribute('data-i18n-aria'));
    if (value !== undefined) el.setAttribute('aria-label', value);
  });

  document.querySelectorAll('.carousel-dots button').forEach(dot => {
    const n = dot.dataset.dotIndex;
    dot.setAttribute('aria-label', t('aria.goToSlide', { n }));
  });

  const cvLink = document.getElementById('cv-download');
  if (cvLink) {
    cvLink.setAttribute('href', CV_FILES[currentLang] || CV_FILES.es);
  }

  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.setAttribute('aria-label', t('aria.langToggle'));
    langToggle.querySelectorAll('[data-lang-option]').forEach(el => {
      el.classList.toggle('active', el.getAttribute('data-lang-option') === currentLang);
    });
  }
}

function setLanguage(lang) {
  currentLang = lang === 'en' ? 'en' : 'es';
  localStorage.setItem('lang', currentLang);
  applyTranslations();
}

const langToggleBtn = document.getElementById('lang-toggle');
if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    setLanguage(currentLang === 'es' ? 'en' : 'es');
  });
}

// ==== ANIMACIÓN DE SECCIONES AL SCROLLEAR ====
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(sec => observer.observe(sec));

// ==== CARRUSEL DE CAPTURAS ====
document.querySelectorAll('[data-carousel]').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const dotsContainer = carousel.querySelector('.carousel-dots');
  const prevBtn = carousel.querySelector('.carousel-btn.prev');
  const nextBtn = carousel.querySelector('.carousel-btn.next');
  let index = 0;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.dataset.dotIndex = String(i + 1);
    dot.setAttribute('aria-label', t('aria.goToSlide', { n: i + 1 }));
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });
  const dots = Array.from(dotsContainer.children);

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  }

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    update();
  }

  prevBtn.addEventListener('click', () => goTo(index - 1));
  nextBtn.addEventListener('click', () => goTo(index + 1));

  update();
});

// Aplicar el idioma guardado / detectado apenas carga la página
applyTranslations();
