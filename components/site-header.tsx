'use client'

import { useState } from 'react'
import { Mail, Menu, X } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { LanguageSwitcher } from '@/components/language-switcher'
import { WhatsAppIcon, LinkedInIcon } from '@/components/icons'
import { contact } from '@/lib/content'

export function SiteHeader() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#capability' },
    { label: t.nav.dashboard, href: '#dashboard' },
    { label: t.nav.portfolio, href: '#portfolio' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="wine-gradient text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 md:px-6">
          <p className="text-sm font-semibold md:text-base">
            <span className="hidden sm:inline">{t.utilityText}</span>
            <span className="sm:hidden">{t.utilityTextShort}</span>
          </p>
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={`mailto:${contact.email}`}
              aria-label={`Email ${contact.email}`}
              className="rounded-full p-1.5 transition-colors hover:bg-white/15"
            >
              <Mail className="size-5" />
            </a>
            <a
              href={contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="rounded-full p-1.5 transition-colors hover:bg-white/15"
            >
              <WhatsAppIcon className="size-5" />
            </a>
            <a
              href={contact.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full p-1.5 transition-colors hover:bg-white/15"
            >
              <LinkedInIcon className="size-5" />
            </a>
            <span className="hidden text-sm font-semibold lg:inline">{t.availability}</span>
            <LanguageSwitcher className="border-white/40 bg-white/10" />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
          <a href="#home" className="font-heading text-xl font-extrabold text-wine-deep md:text-2xl">
            Puspa Ratih
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base font-semibold text-foreground transition-colors hover:text-wine"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full bg-wine-deep px-5 py-2.5 text-base font-bold text-primary-foreground transition-colors hover:bg-wine sm:inline-flex"
            >
              {t.nav.cta}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="inline-flex size-11 items-center justify-center rounded-full border border-wine-deep/25 text-wine-deep lg:hidden"
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-lg font-semibold text-foreground transition-colors hover:bg-blush hover:text-wine-deep"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-wine-deep px-5 py-3 text-center text-lg font-bold text-primary-foreground"
              >
                {t.nav.cta}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
