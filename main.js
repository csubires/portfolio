const SKILLS = {
  'Sistemas operativos': ['Kali Linux', 'Ubuntu / Debian', 'Windows Server', 'Arch Linux'],
  'Ciberseguridad': ['Pentesting', 'Hardening', 'Ethical Hacking', 'Malware Analysis', 'Reverse Engineering (OllyDbg)', 'WiFi Auditing (WifiSlax)', 'nftables / Comodo Firewall', 'LUKS / VeraCrypt / BitLocker', 'Wireshark / tcpdump', 'Bash Scripting'],
  'SIEM / Monitorización': ['Wazuh', 'XDR / EDR', 'Grafana', 'rsyslog'],
  'Redes y Protocolos': ['TCP/IP', 'Active Directory', 'GPO', 'DNS / DHCP', 'Cisco Packet Tracer', 'LAN / VLAN'],
  'Backend': ['Python', 'Flask', 'Node.js', 'PHP', 'TypeScript', 'C / C++', 'Java', 'Spring'],
  'Frontend': ['React', 'JavaScript', 'HTML5', 'CSS3', 'Sass'],
  'Bases de datos': ['MySQL', 'PostgreSQL', 'SQLite', 'OracleSQL / PL/SQL', 'SAP', 'Access'],
  'DevOps y Virtualización': ['Docker', 'Git / Gitea', 'VMware Workstation', 'VirtualBox', 'Proxmox'],
  'Normativas': ['ENS (Esquema Nacional de Seguridad)', 'ISO 27001 (conceptos)', 'OT / ICS Security'],
  'Otros': ['Computer Vision (Python)', 'Web Scraping', 'LibreOffice / Photoshop', 'Vim / VS Code / Sublime']
};

const PROJECTS = [
  { name: 'Gestor de colecciones multimedia', desc: 'Aplicación web propia para gestionar colecciones multimedia. Stack: Flask (Python), Sass, JavaScript vanilla, SQLite.', tags: ['Python', 'Flask', 'SQLite', 'Sass', 'JavaScript'], img: 'assets/project/1.png', link: 'https://github.com/csubires/filmoteca' },
  { name: 'Homelab con Docker', desc: 'Servidor propio sobre Ubuntu Server con contenedores Docker: Gitea, Nextcloud, WordPress y servicios adicionales.', tags: ['Docker', 'Ubuntu Server', 'Gitea', 'Nextcloud'], img: 'assets/project/6.jpg', link: 'https://github.com/csubires/' },
  { name: 'Escáner de red en Python', desc: 'Script de descubrimiento de hosts e IPs en red local, integrable en flujos de auditoría.', tags: ['Python', 'Networking', 'Bash'], img: 'assets/project/5.png', link: 'https://github.com/csubires/' },
  { name: 'Scripts de Web Scraping', desc: 'Automatización de extracción de datos web mediante Python para análisis y vigilancia de activos.', tags: ['Python', 'BeautifulSoup', 'Automatización'], img: 'assets/project/4.png', link: 'https://github.com/csubires/' },
  { name: 'Laboratorios de pentesting', desc: 'Entornos virtualizados con Kali Linux para hacking ético, auditoría WiFi con WifiSlax y análisis de malware con OllyDbg.', tags: ['Kali Linux', 'VirtualBox', 'WifiSlax', 'OllyDbg'], img: 'assets/project/3.jpg', link: 'https://github.com/csubires/' },
  { name: 'Proyectos en 42 Málaga', desc: 'Proyectos y librerías en C: gestión de memoria, punteros, señales del sistema y trabajo colaborativo en entornos Unix.', tags: ['C', 'Unix', 'Git', 'Makefile'], img: 'assets/project/2.png', link: 'https://github.com/csubires' }
];

const CERTS = [
  { name: 'MOOC en Ciberseguridad (320h)', issuer: 'NICS Lab UMA / INCIBE', year: '2026', badge: 'assets/badges/2.png', credly: 'https://www.credly.com/users/csubires' },
  { name: 'Google Cybersecurity Professional Certificate', issuer: 'Google / Coursera', year: '2025', badge: 'assets/badges/4.png', credly: 'https://www.credly.com/users/csubires' },
  { name: 'Google IT Automation with Python', issuer: 'Google / Coursera', year: '2025', badge: 'assets/badges/7.png', credly: 'https://www.credly.com/users/csubires' },
  { name: 'Ethical Hacker', issuer: 'Cisco Networking Academy', year: '2025', badge: 'assets/badges/3.png', credly: 'https://www.credly.com/users/csubires' },
  { name: 'CCST IT Support', issuer: 'Cisco', year: '2025', badge: 'assets/badges/5.png', credly: 'https://www.credly.com/users/csubires' },
  { name: 'Junior Cybersecurity Analyst Career Path', issuer: 'Cisco Networking Academy', year: '2024', badge: 'assets/badges/1.png', credly: 'https://www.credly.com/users/csubires' },
  { name: 'Information Technology Specialist', issuer: 'MainJobs', year: '2024', badge: 'assets/badges/6.png', credly: 'https://www.credly.com/users/csubires' },
  { name: 'Ciberseguridad en logística y transporte', issuer: 'MainJobs', year: '2024', badge: 'assets/badges/8.png', credly: 'https://www.credly.com/users/csubires' },
  { name: 'Ciberseguridad avanzada en entornos OT (IFCT0050)', issuer: 'MainJobs', year: '2024', badge: 'assets/badges/10.png', credly: 'https://www.credly.com/users/csubires' },
  { name: 'Seguridad Informática IFCT0109 (500h)', issuer: 'CENEC', year: '2025', badge: 'assets/badges/11.png', credly: 'https://www.credly.com/users/csubires' },
  { name: 'Cisco CCNA 1: Networking Basics', issuer: 'Cisco Networking Academy', year: '2008', badge: 'assets/badges/9.png', credly: 'https://www.credly.com/users/csubires' }
];

const EXPERIENCE = [
  { role: 'Prácticas en Ciberseguridad', company: 'Hispasec — Parque Tecnológico de Andalucía', period: 'Feb 2026 – Mar 2026', desc: 'XDR/SIEM con Wazuh y rsyslog, bastionado de sistemas, creación de informes de incidentes, hacking ético, cumplimiento ENS, administración de Active Directory y creación de GPOs.' },
  { role: 'Programador Junior (Prácticas)', company: 'IAVANTE — Parque Tecnológico de Andalucía', period: 'Mar 2009 – Jun 2009', desc: 'Desarrollo de aplicación web para la Consejería de Salud de la Junta de Andalucía.' }
];

const EDUCATION = [
  { degree: 'Grado en Ingeniería de Computadores', institution: 'E.T.S.I. Informática — Universidad de Málaga', period: '2009 – Actualidad', detail: '77,5% créditos completados · Nota media: 7,29 / 10' },
  { degree: 'Common Core', institution: '42 Málaga — Fundación Telefónica', period: 'Abr 2024 – Mar 2026', detail: 'C, punteros, señales, virtualización, administración de sistemas, trabajo en equipo.' },
  { degree: 'Seguridad Informática IFCT0109 (500h)', institution: 'CENEC', period: 'Sep 2025 – Mar 2026', detail: 'Hardening, auditoría de redes, sistemas seguros de acceso y transmisión de datos.' },
  { degree: 'Técnico Superior en Desarrollo de Aplicaciones Informáticas', institution: 'I.E.S. Campanillas', period: '2007 – 2009', detail: 'PL/SQL, PHP, JavaScript, Oracle DB, C++, redes LAN con Cisco Packet Tracer.' },
  { degree: 'Bachillerato — Modalidad Tecnología', institution: 'IES Valle del Sol — Álora, Málaga', period: '2005 – 2007', detail: '' }
];

const CTFS = [
  { name: 'HackTheBox', desc: 'Máquinas y retos de CTF', url: 'https://tryhackme.com/p/mahshakti', img: 'assets/ctf/htb.png' },
  { name: 'TryHackMe', desc: 'Laboratorios guiados', url: 'https://tryhackme.com/p/mahshakti', img: 'assets/ctf/thm.png' },
  { name: 'CTFtime', desc: 'Competiciones en equipo', url: 'https://ctftime.org/', img: 'assets/ctf/ctftime.png' },
  { name: 'Atenea', desc: 'CCN Cyber security platform', url: 'https://atenea.ccn-cert.cni.es/home', img: 'assets/ctf/atenea.png' }
];


let currentLang = 'es';

function t(key) {
  const parts = key.split('.');
  let value = translations[currentLang];
  for (let part of parts) {
    if (!value[part]) return key;
    value = value[part];
  }
  return value;
}

function applyTranslations() {
  document.documentElement.lang = currentLang;
  
  const navLinks = document.querySelectorAll('.nav-links .nav-link, #nav-overlay .nav-link');
  navLinks.forEach((link, i) => {
    if (translations[currentLang].nav[i]) link.textContent = translations[currentLang].nav[i];
  });
  
  document.querySelector('.hero-role').textContent = t('hero.0');
  document.querySelector('.hero-tagline').textContent = t('hero.1');
  document.querySelector('.btn-primary').textContent = t('hero.2');
  
  document.querySelector('#about .section-title').textContent = t('about.title');
  const aboutPs = document.querySelectorAll('#about .about-text p');
  if (aboutPs[0]) aboutPs[0].textContent = t('about.p1');
  if (aboutPs[1]) aboutPs[1].textContent = t('about.p2');
  if (aboutPs[2]) aboutPs[2].textContent = t('about.p3');
  document.querySelector('#about .langs-block h4').textContent = t('about.langs');
  const langsLi = document.querySelectorAll('#about .langs-block li');
  if (langsLi[0]) langsLi[0].textContent = t('about.lang_es');
  if (langsLi[1]) langsLi[1].textContent = t('about.lang_en');
  
  document.querySelector('#skills .section-title').textContent = t('skills');
  document.querySelector('#projects .section-title').textContent = t('projects');
  document.querySelector('#experience .section-title').textContent = t('experience');
  document.querySelector('#certifications .section-title').textContent = t('certifications');
  document.querySelector('#education .section-title').textContent = t('education');
  document.querySelector('#ctf .section-title').textContent = t('ctf');
  document.querySelector('#contact .section-title').textContent = t('contact.title');
  document.querySelector('.contact-subtitle').textContent = t('contact.subtitle');
  
  const contactLabels = document.querySelectorAll('.contact-item label');
  if (contactLabels[0]) contactLabels[0].textContent = t('contact.email');
  if (contactLabels[1]) contactLabels[1].textContent = t('contact.location');
  document.querySelector('#contact .contact-item span').textContent = t('contact.location_text');
  document.querySelector('.contact-note').textContent = t('contact.available');
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;
  grid.innerHTML = Object.entries(SKILLS).map(([title, items]) => `
    <div class="skill-card">
      <h3>${title}</h3>
      <ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>
    </div>
  `).join('');
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = PROJECTS.map(p => `
    <div class="project-card">
      <div class="project-img"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <a href="${p.link}" class="project-link" target="_blank">Ver proyecto →</a>
    </div>
  `).join('');
}

function renderExperience() {
  const list = document.getElementById('experience-list');
  if (!list) return;
  list.innerHTML = EXPERIENCE.map(e => `
    <div class="timeline-item">
      <div class="timeline-meta"><span class="timeline-period">${e.period}</span></div>
      <div class="timeline-body">
        <h3>${e.role}</h3>
        <span class="timeline-company">${e.company}</span>
        <p>${e.desc}</p>
      </div>
    </div>
  `).join('');
}

function renderEducation() {
  const list = document.getElementById('education-list');
  if (!list) return;
  list.innerHTML = EDUCATION.map(e => `
    <div class="timeline-item">
      <div class="timeline-meta"><span class="timeline-period">${e.period}</span></div>
      <div class="timeline-body">
        <h3>${e.degree}</h3>
        <span class="timeline-company">${e.institution}</span>
        <p>${e.detail}</p>
      </div>
    </div>
  `).join('');
}

function renderCTFs() {
  const grid = document.getElementById('ctf-grid');
  if (!grid) return;
  grid.innerHTML = CTFS.map(c => `
    <div class="ctf-card">
      <div class="ctf-img"><img src="${c.img}" alt="${c.name}" loading="lazy"></div>
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
      <a href="${c.url}" class="ctf-link" target="_blank">Explorar →</a>
    </div>
  `).join('');
}

function renderCertifications() {
  const grid = document.getElementById('certifications-list');
  if (!grid) return;
  grid.innerHTML = CERTS.map(c => `
    <div class="cert-item">
      <div class="cert-left">
        ${c.badge ? `<img src="${c.badge}" class="cert-badge-img" alt="${c.name}">` : '<div class="cert-badge-placeholder"></div>'}
        <div class="cert-year">${c.year}</div>
      </div>
      <div class="cert-info">
        <strong>${c.name}</strong>
        <span>${c.issuer}</span>
        ${c.link ? `<a href="${c.link}" target="_blank" class="cert-link">Ver badges →</a>` : ''}
      </div>
    </div>
  `).join('');
}

function initTheme() {
  const stored = localStorage.getItem('theme') || 'light';
  document.documentElement.dataset.theme = stored;
  
  const toggle = document.getElementById('theme-toggle');
  const toggleMobile = document.getElementById('theme-toggle-mobile');
  
  const switchTheme = () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
  };
  
  if (toggle) toggle.addEventListener('click', switchTheme);
  if (toggleMobile) toggleMobile.addEventListener('click', switchTheme);
}

function initNav() {
const langSelects = document.querySelectorAll('#lang-select, #nav-overlay #lang-select');
langSelects.forEach(select => {
  select.addEventListener('change', (e) => {
    currentLang = e.target.value;
    applyTranslations();
    document.querySelectorAll('#lang-select').forEach(s => s.value = currentLang);
  });
});

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.getElementById('nav-overlay')?.classList.remove('open');
      document.getElementById('menu-toggle')?.classList.remove('open');
    });
  });

  let lastY = 0;
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (navbar) {
      navbar.classList.toggle('hidden', y > lastY && y > 80);
      navbar.classList.toggle('scrolled', y > 40);
    }
    lastY = y;
  }, { passive: true });

  const menuToggle = document.getElementById('menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      document.getElementById('nav-overlay')?.classList.toggle('open');
      this.classList.toggle('open');
    });
  }
}

function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderProjects();
  renderExperience();
  renderEducation();
  renderCTFs();
  renderCertifications();
  initTheme();
  initNav();
  initReveal();
});