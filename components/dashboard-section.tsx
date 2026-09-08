'use client'

import { BarChart3, ExternalLink } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

// GANTI DENGAN LINK DASHBOARD (Looker Studio / Tableau Public)
const DASHBOARD_URL = 'https://portofolio-dq59hxy3hjxwxbvek8m6us.streamlit.app/'
// GANTI DENGAN SRC EMBED DASHBOARD ANDA untuk mengaktifkan iframe di bawah.
// Contoh: 'https://lookerstudio.google.com/embed/reporting/xxxx/page/xxxx'
// Catatan: jika iframe tampil kosong/putih, Streamlit Cloud memblokir embed —
// kosongkan lagi baris di bawah ini ('') agar otomatis fallback ke placeholder.
const DASHBOARD_EMBED_SRC = 'https://portofolio-dq59hxy3hjxwxbvek8m6us.streamlit.app/?embed=true'

export function DashboardSection() {
  const { t } = useLanguage()

  return (
    <section id="dashboard" className="blush-gradient">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-20 lg:py-28">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-wine-deep/10 px-4 py-1.5 text-sm font-bold text-wine-deep">
              <BarChart3 className="size-4" />
              LIVE DATA
            </p>
            <h2 className="mt-4 font-heading text-2xl font-bold text-foreground md:text-3xl">
              {t.dashboard.title}
            </h2>
            <p className="mt-2 max-w-2xl text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              {t.dashboard.desc}
            </p>
          </div>
          <a
            href={DASHBOARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-wine-deep px-6 text-base font-bold text-primary-foreground transition-colors hover:bg-wine"
          >
            {t.dashboard.cta}
            <ExternalLink className="size-4" />
          </a>
        </div>

        {/* Wrapper responsif — iframe tidak akan overflow di layar kecil */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="aspect-video w-full">
            {DASHBOARD_EMBED_SRC ? (
              <iframe
                src={DASHBOARD_EMBED_SRC}
                title={t.dashboard.title}
                className="size-full"
                allowFullScreen
              />
            ) : (
              <div className="flex size-full flex-col items-center justify-center gap-3 bg-muted p-6 text-center">
                <BarChart3 className="size-10 text-rose" />
                <p className="max-w-md text-base font-semibold text-muted-foreground">
                  {t.dashboard.placeholder}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
