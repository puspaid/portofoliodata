'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { projects } from '@/lib/content'

export function SelectedWork() {
  const { t, lang } = useLanguage()
  const featured = projects.slice(0, 3)

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-20 lg:py-28">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="text-balance font-heading text-2xl font-bold text-foreground md:text-3xl">
            {t.selected.title}
          </h2>
          <p className="mt-2 max-w-xl text-base font-medium text-muted-foreground md:text-lg">
            {t.selected.subtitle}
          </p>
        </div>
        <a
          href="#portfolio"
          className="inline-flex items-center gap-2 text-base font-bold text-wine-deep transition-colors hover:text-wine"
        >
          {t.selected.cta}
        </a>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <article
            key={i}
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              {/* GANTI DENGAN SCREENSHOT PROYEK #{i + 1} */}
              <Image
                src={project.image}
                alt={project[lang].title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <span className="inline-flex rounded-full bg-blush px-3 py-1 text-sm font-bold text-wine-deep">
                {project[lang].category}
              </span>
              <h3 className="mt-3 font-heading text-lg font-bold text-foreground">
                {project[lang].title}
              </h3>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-wine opacity-0 transition-opacity group-hover:opacity-100">
                <ArrowRight className="size-4" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
