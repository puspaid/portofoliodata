'use client'

import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'
import { projects } from '@/lib/content'

export function Gallery() {
  const { t, lang } = useLanguage()

  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-20 lg:py-28">
      <div className="max-w-2xl">
        <h2 className="text-balance font-heading text-2xl font-bold text-foreground md:text-3xl">
          {t.gallery.title}
        </h2>
        <p className="mt-2 text-base font-medium text-muted-foreground md:text-lg">
          {t.gallery.subtitle}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <article
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              {/* GANTI DENGAN SCREENSHOT PROYEK #{i + 1} */}
              <Image
                src={project.image}
                alt={project[lang].title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-wine-deep/0 transition-colors duration-300 group-hover:bg-wine-deep/40" />
            </div>
            <div className="p-5">
              <h3 className="font-heading text-lg font-bold text-foreground">
                {project[lang].title}
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-muted-foreground">
                {lang === 'id' ? project.descId : project.descEn}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
