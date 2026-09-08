// =============================================================================
// BILINGUAL CONTENT DICTIONARY
// Semua teks situs disimpan di sini, terpisah per bahasa (id / en).
// Edit teks langsung di sini tanpa perlu menyentuh komponen JSX.
// All site copy lives here, split per language (id / en).
// =============================================================================

export type Lang = 'id' | 'en'

// ---- Kontak (dipakai di banyak tempat) --------------------------------------
export const contact = {
  email: 'edupuspa@gmail.com',
  whatsappDisplay: '081216323951',
  whatsappLink: 'https://wa.me/6281216323951',
  linkedinDisplay: 'linkedin.com/in/pusparatih-6a5a683b0',
  linkedinLink: 'https://linkedin.com/in/pusparatih-6a5a683b0',
} as const

// ---- Data proyek (gambar sama untuk kedua bahasa) ---------------------------
// GANTI DENGAN SCREENSHOT PROYEK ASLI: ubah `image` ke path gambar Anda.
export const projects = [
  {
    image: '/images/project-bookkeeping.png', // GANTI DENGAN SCREENSHOT PROYEK #1
    id: { title: 'Sistem Pembukuan — Otomasi Data', category: 'Data Automation' },
    en: { title: 'Bookkeeping System — Data Automation', category: 'Data Automation' },
    descId: 'Sistem pembukuan berbasis web dengan pencatatan otomatis dan jurnal koreksi.',
    descEn: 'Web-based bookkeeping system with automated records and correction journals.',
  },
  {
    image: '/images/project-datacleaning.png', // GANTI DENGAN SCREENSHOT PROYEK #2
    id: { title: 'Proyek Pembersihan Data — Analisis', category: 'Analysis' },
    en: { title: 'Data Cleaning Project — Analysis', category: 'Analysis' },
    descId: 'Membersihkan dan menstandarkan ribuan baris data mentah menggunakan Python.',
    descEn: 'Cleaned and standardized thousands of rows of raw data using Python.',
  },
  {
    image: '/images/project-dashboard.png', // GANTI DENGAN SCREENSHOT PROYEK #3
    id: { title: 'Dashboard Kelayakan Toko Marketplace', category: 'Visualization' },
    en: { title: 'Marketplace Store Viability Dashboard', category: 'Visualization' },
    descId: 'Dashboard interaktif berbasis Streamlit untuk menganalisis revenue, cost, margin, dan kelayakan toko marketplace per segmen produk.',
    descEn: 'Interactive Streamlit dashboard analyzing revenue, cost, margin, and store viability by product segment for a marketplace store.',
  },
  {
    image: '/images/project-automation.png', // GANTI DENGAN SCREENSHOT PROYEK #4
    id: { title: 'Otomasi Apps Script — Sistem', category: 'Automation' },
    en: { title: 'Apps Script Automation — Systems', category: 'Automation' },
    descId: 'Menghubungkan Google Sheets & Drive dengan alur kerja otomatis.',
    descEn: 'Connected Google Sheets & Drive with automated workflows.',
  },
  {
    image: '/images/project-report.png', // GANTI DENGAN SCREENSHOT PROYEK #5
    id: { title: 'Laporan Bulanan — Pelaporan', category: 'Reporting' },
    en: { title: 'Monthly Report — Reporting', category: 'Reporting' },
    descId: 'Menyusun laporan bulanan rapi dengan ringkasan visual yang mudah dibaca.',
    descEn: 'Produced tidy monthly reports with easy-to-read visual summaries.',
  },
  {
    image: '/images/project-inventory.png', // GANTI DENGAN SCREENSHOT PROYEK #6
    id: { title: 'Pelacakan Inventaris — Data', category: 'Data Ops' },
    en: { title: 'Inventory Tracking — Data', category: 'Data Ops' },
    descId: 'Sistem pelacakan stok dengan indikator status dan notifikasi otomatis.',
    descEn: 'Stock tracking system with status indicators and automated alerts.',
  },
] as const

export const skills = [
  'Data Analysis',
  'Data Visualization',
  'Python',
  'Streamlit',
  'Google Sheets',
  'Apps Script',
  'Google Drive',
] as const

// ---- Dictionary utama -------------------------------------------------------
export const content = {
  id: {
    langLabel: 'ID',
    utilityText: 'Mari ubah data Anda menjadi keputusan',
    utilityTextShort: 'Data → Keputusan',
    availability: 'Sen–Jum · Remote',
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      dashboard: 'Dashboard',
      portfolio: 'Portofolio',
      contact: 'Kontak',
      cta: 'Mari Terhubung',
    },
    hero: {
      eyebrow: 'TECHNICAL VIRTUAL ASSISTANT & DATA ANALYST',
      headline: ['Mengubah Data Mentah', 'Menjadi Keputusan', 'yang Jelas'],
      sub: 'Saya membantu bisnis dan institusi mengorganisir, menganalisis, dan mengotomasi data serta sistem administrasi mereka — akurat, remote, dan audit-friendly.',
      location: 'Surabaya, Jawa Timur, Indonesia (siap remote)',
      ctaPrimary: 'Lihat Portofolio',
      ctaSecondary: 'View Dashboard',
      badge: '3+ Tahun di Sistem Data & Administrasi',
    },
    selected: {
      title: 'Beberapa Karya Favorit',
      subtitle: 'Cuplikan proyek yang paling saya banggakan.',
      cta: 'Lihat Portofolio Lengkap →',
    },
    dashboard: {
      title: 'Dashboard Kelayakan Toko Marketplace',
      desc: 'Dashboard interaktif berbasis Streamlit yang menganalisis revenue, cost, margin, dan tingkat penyelesaian pesanan untuk menilai kelayakan sebuah toko marketplace, lengkap dengan rincian per segmen produk.',
      cta: 'Lihat Dashboard',
      placeholder: 'Pratinjau dashboard akan tampil di sini setelah tautan diganti.',
    },
    capability: {
      eyebrow: 'SUPPORTING CAPABILITY',
      title: 'Manajemen Data & Otomasi',
      body: 'Juga membangun sistem pembukuan berbasis  (Web apps/apps) — contoh penerapan pengelolaan data, pengumpulan data, dan pencatatan melalui teknologi.',
      points: [
        'Pelacakan saldo awal (opening balance)',
        'Jurnal koreksi (correction journal)',
        'Kategori terkunci + catatan',
        'Edit per transaksi',
      ],
    },
    gallery: {
      title: 'Galeri Portofolio',
      subtitle: 'Kumpulan pekerjaan lintas analisis, otomasi, dan visualisasi.',
    },
    skills: {
      title: 'Keahlian Utama',
      subtitle: 'Alat dan disiplin yang saya gunakan setiap hari.',
    },
    credibility: {
      title: 'Kredibilitas & Pendidikan',
      items: [
        {
          role: 'Student Trainee — Data Science Track',
          org: 'Coding Camp powered by DBS Foundation',
          year: '2026',
        },
        {
          role: 'Bachelor of Technology (Education)',
          org: 'Universitas Terbuka',
          year: '',
        },
      ],
    },
    ctaBanner: {
      title: 'Punya Proyek dalam Pikiran?',
      desc: 'Saya ingin mendengarnya. Kirim pesan dan mari mulai.',
      name: 'Nama',
      email: 'Email',
      message: 'Pesan',
      submit: 'Kirim Pesan',
      whatsapp: 'Chat via WhatsApp',
      emailBtn: 'Kirim Email',
      or: 'atau hubungi langsung',
      success: 'Terima kasih! Pesan Anda sudah disiapkan.',
    },
    footer: {
      tagline: 'Technical Virtual Assistant & Data Analyst yang mengubah data menjadi keputusan.',
      exploreTitle: 'Jelajahi',
      contactTitle: 'Kontak',
      badge: 'Design with heart, built with data',
      rights: 'Seluruh hak cipta dilindungi.',
    },
  },
  en: {
    langLabel: 'EN',
    utilityText: "Let's turn your data into decisions",
    utilityTextShort: 'Data → Decisions',
    availability: 'Mon–Fri · Remote',
    nav: {
      home: 'Home',
      about: 'About',
      dashboard: 'Dashboard',
      portfolio: 'Portfolio',
      contact: 'Contact',
      cta: "Let's Connect",
    },
    hero: {
      eyebrow: 'TECHNICAL VIRTUAL ASSISTANT & DATA ANALYST',
      headline: ['Turning Raw Data', 'Into Clear', 'Decisions'],
      sub: 'I help businesses and institutions organize, analyze, and automate their data and administrative systems — accurately, remotely, and audit-friendly.',
      location: 'Surabaya, East Java, Indonesia (remote-ready)',
      ctaPrimary: 'View Portfolio',
      ctaSecondary: 'View Dashboard',
      badge: '3+ Years in Data & Admin Systems',
    },
    selected: {
      title: 'A Few Recent Favorites',
      subtitle: 'A snapshot of the projects I am most proud of.',
      cta: 'See Full Portfolio →',
    },
    dashboard: {
      title: 'Marketplace Store Viability Dashboard',
      desc: 'An interactive Streamlit dashboard analyzing revenue, cost, margin, and order completion rate to assess a marketplace store\'s viability, with a full breakdown by product segment.',
      cta: 'View Dashboard',
      placeholder: 'A dashboard preview will appear here once the link is replaced.',
    },
    capability: {
      eyebrow: 'SUPPORTING CAPABILITY',
      title: 'Data Management & Automation',
      body: 'Also built a bookkeeping system based  (Web apps/apps) — an example of applying data management, data collection, and record-keeping through technology.',
      points: [
        'Opening balance tracking',
        'Correction journal',
        'Locked category + notes',
        'Per-transaction edit',
      ],
    },
    gallery: {
      title: 'Portfolio Gallery',
      subtitle: 'A collection of work across analysis, automation, and visualization.',
    },
    skills: {
      title: 'Top Skills',
      subtitle: 'The tools and disciplines I use every day.',
    },
    credibility: {
      title: 'Credibility & Education',
      items: [
        {
          role: 'Student Trainee — Data Science Track',
          org: 'Coding Camp powered by DBS Foundation',
          year: '2026',
        },
        {
          role: 'Bachelor of Technology (Education)',
          org: 'Universitas Terbuka',
          year: '',
        },
      ],
    },
    ctaBanner: {
      title: 'Have a Project in Mind?',
      desc: "I'd love to hear about it. Send a message and let's get started.",
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send Message',
      whatsapp: 'Chat via WhatsApp',
      emailBtn: 'Send Email',
      or: 'or reach out directly',
      success: 'Thank you! Your message has been prepared.',
    },
    footer: {
      tagline: 'Technical Virtual Assistant & Data Analyst turning data into decisions.',
      exploreTitle: 'Explore',
      contactTitle: 'Contact',
      badge: 'Design with heart, built with data',
      rights: 'All rights reserved.',
    },
  },
} as const

export type Dict = (typeof content)[Lang]
