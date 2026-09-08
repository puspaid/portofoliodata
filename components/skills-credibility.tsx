'use client'

import { GraduationCap } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { skills } from '@/lib/content'
import { StarBurst } from '@/components/icons'

export function SkillsCredibility() {
  const { t } = useLanguage()

  return (
    <section className="blush-gradient">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-12 md:px-6 md:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        {/* Top Skills */}
        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            {t.skills.title}
          </h2>
          <p className="mt-2 text-base font-medium text-muted-foreground md:text-lg">
            {t.skills.subtitle}
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <li
                key={skill}
                className="inline-flex items-center gap-2 rounded-full border border-wine-deep/20 bg-card px-4 py-2.5 text-base font-bold text-wine-deep shadow-sm"
              >
                <StarBurst className="size-4 text-rose" />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Credibility */}
        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            {t.credibility.title}
          </h2>
          <ul className="mt-6 flex flex-col gap-4">
            {t.credibility.items.map((item, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-wine-deep text-primary-foreground">
                  <GraduationCap className="size-5" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">{item.role}</h3>
                  <p className="mt-1 text-base font-medium text-muted-foreground">
                    {item.org}
                    {item.year ? ` · ${item.year}` : ''}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
