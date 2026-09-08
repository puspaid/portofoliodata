'use client'

import { useState, type FormEvent } from 'react'
import { Mail } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { WhatsAppIcon, StarBurst } from '@/components/icons'
import { contact } from '@/lib/content'

export function CtaBanner() {
  const { t } = useLanguage()
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const message = String(data.get('message') ?? '')
    // Buka klien email pengguna dengan pesan yang sudah terisi.
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const inputClass =
    'w-full rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-base font-medium text-primary-foreground placeholder:text-white/70 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40'

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-20">
      <div className="relative overflow-hidden rounded-3xl wine-gradient px-6 py-10 shadow-xl md:px-12 md:py-16">
        <StarBurst
          aria-hidden="true"
          className="absolute right-8 top-8 size-10 text-white/20"
        />
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="text-primary-foreground">
            <h2 className="text-balance font-heading text-3xl font-extrabold md:text-4xl">
              {t.ctaBanner.title}
            </h2>
            <p className="mt-4 text-lg font-medium leading-relaxed text-white/90">
              {t.ctaBanner.desc}
            </p>

            <div className="mt-8">
              <p className="text-sm font-bold uppercase tracking-wide text-white/70">
                {t.ctaBanner.or}
              </p>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <a
                  href={contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-base font-bold text-wine-deep transition-transform hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="size-5" />
                  {t.ctaBanner.whatsapp}
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-white px-6 text-base font-bold text-primary-foreground transition-colors hover:bg-white hover:text-wine-deep"
                >
                  <Mail className="size-5" />
                  {t.ctaBanner.emailBtn}
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-white/90">
                {t.ctaBanner.name}
              </label>
              <input id="name" name="name" required className={inputClass} autoComplete="name" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-white/90">
                {t.ctaBanner.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={inputClass}
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-white/90">
                {t.ctaBanner.message}
              </label>
              <textarea id="message" name="message" required rows={4} className={inputClass} />
            </div>
            <button
              type="submit"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white text-base font-bold text-wine-deep transition-transform hover:scale-[1.02]"
            >
              {t.ctaBanner.submit}
            </button>
            {sent && (
              <p className="text-base font-semibold text-white" role="status">
                {t.ctaBanner.success}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
