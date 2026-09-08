'use client'

import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { StarBurst } from '@/components/icons'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative overflow-hidden blush-gradient">
      {/* Decorative organic blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-[26rem] rounded-[42%_58%_60%_40%/45%_45%_55%_55%] bg-rose-light/40 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 size-[22rem] rounded-[55%_45%_40%_60%/55%_50%_50%_45%] bg-blush/70 blur-2xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        {/* Photo — order first on mobile */}
        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative">
            {/* Organic wine shape behind photo */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -translate-x-4 translate-y-4 rounded-[42%_58%_62%_38%/48%_42%_58%_52%] wine-gradient"
            />
            <div className="relative overflow-hidden rounded-[42%_58%_62%_38%/48%_42%_58%_52%] border-4 border-background shadow-xl">
              <Image
                src="/images/profile.jpg"
                alt="Puspa Ratih"
                width={440}
                height={520}
                priority
                sizes="(max-width: 1024px) 70vw, 440px"
                className="size-[18rem] object-cover sm:size-[22rem] lg:size-[26rem]"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-wine-deep px-4 py-2 text-sm font-bold text-primary-foreground shadow-lg sm:text-base">
              {t.hero.badge}
            </div>
            <StarBurst className="absolute -right-2 top-6 size-7 text-wine" />
          </div>
        </div>

        {/* Copy */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full bg-wine-deep/10 px-4 py-1.5 text-sm font-bold tracking-wide text-wine-deep">
            <StarBurst className="size-4 text-wine" />
            {t.hero.eyebrow}
          </p>

          <h1 className="mt-5 text-balance font-heading text-3xl font-extrabold leading-tight text-foreground sm:text-4xl md:text-6xl">
            {t.hero.headline[0]}
            <br />
            <span className="text-wine">{t.hero.headline[1]}</span>
            <br />
            {t.hero.headline[2]}
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg font-medium leading-relaxed text-muted-foreground lg:mx-0">
            {t.hero.sub}
          </p>

          <p className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-wine-deep">
            <MapPin className="size-5" />
            {t.hero.location}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#portfolio"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-wine-deep px-7 text-base font-bold text-primary-foreground transition-colors hover:bg-wine sm:w-auto"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#dashboard"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border-2 border-wine-deep px-7 text-base font-bold text-wine-deep transition-colors hover:bg-wine-deep hover:text-primary-foreground sm:w-auto"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
