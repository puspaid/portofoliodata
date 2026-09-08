'use client'

import { Mail } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { WhatsAppIcon, StarBurst, LinkedInIcon } from '@/components/icons'
import { contact } from '@/lib/content'

export function SiteFooter() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  const exploreLinks = [
    { label: t.nav.about, href: '#capability' },
    { label: t.nav.portfolio, href: '#portfolio' },
    { label: t.nav.dashboard, href: '#dashboard' },
  ]

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 md:px-6 md:py-16 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <p className="font-heading text-xl font-extrabold text-wine-deep">Puspa Ratih</p>
          <p className="mt-3 max-w-xs text-base font-medium leading-relaxed text-muted-foreground">
            {t.footer.tagline}
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-heading text-lg font-bold text-foreground">{t.footer.exploreTitle}</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-base font-semibold text-muted-foreground transition-colors hover:text-wine-deep"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-lg font-bold text-foreground">{t.footer.contactTitle}</h3>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 text-base font-semibold text-muted-foreground transition-colors hover:text-wine-deep"
              >
                <Mail className="size-5 shrink-0" />
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-semibold text-muted-foreground transition-colors hover:text-wine-deep"
              >
                <WhatsAppIcon className="size-5 shrink-0" />
                {contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={contact.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-semibold text-muted-foreground transition-colors hover:text-wine-deep"
              >
                <LinkedInIcon className="size-5 shrink-0" />
                {contact.linkedinDisplay}
              </a>
            </li>
          </ul>
        </div>

        {/* Badge */}
        <div className="flex items-start md:justify-end">
          <div className="flex size-28 flex-col items-center justify-center gap-1 rounded-full wine-gradient p-4 text-center">
            <StarBurst className="size-5 text-white/80" />
            <span className="text-sm font-bold leading-snug text-primary-foreground">
              {t.footer.badge}
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-5 md:px-6">
          <p className="text-sm font-semibold text-muted-foreground">
            © {year} Puspa Ratih. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
