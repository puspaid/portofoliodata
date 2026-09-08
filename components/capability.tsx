'use client'

import { Check, Database } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export function Capability() {
  const { t } = useLanguage()

  return (
    <section id="capability" className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-20 lg:py-28">
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
        <div className="grid gap-8 p-6 md:grid-cols-5 md:gap-10 md:p-10 lg:p-14">
          <div className="md:col-span-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-blush px-4 py-1.5 text-sm font-bold text-wine-deep">
              <Database className="size-4" />
              {t.capability.eyebrow}
            </p>
            <h2 className="mt-4 text-balance font-heading text-2xl font-bold text-foreground md:text-3xl">
              {t.capability.title}
            </h2>
            <p className="mt-4 text-pretty text-lg font-medium leading-relaxed text-muted-foreground">
              {t.capability.body}
            </p>
          </div>

          <ul className="grid gap-3 md:col-span-2 md:content-center">
            {t.capability.points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 rounded-xl bg-muted px-4 py-3 text-base font-semibold text-foreground"
              >
                <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-wine-deep text-primary-foreground">
                  <Check className="size-4" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
