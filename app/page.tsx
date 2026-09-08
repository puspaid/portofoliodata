import { LanguageProvider } from '@/components/language-provider'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { SelectedWork } from '@/components/selected-work'
import { DashboardSection } from '@/components/dashboard-section'
import { Capability } from '@/components/capability'
import { Gallery } from '@/components/gallery'
import { SkillsCredibility } from '@/components/skills-credibility'
import { CtaBanner } from '@/components/cta-banner'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main>
        <Hero />
        <SelectedWork />
        <DashboardSection />
        <Capability />
        <Gallery />
        <SkillsCredibility />
        <CtaBanner />
      </main>
      <SiteFooter />
    </LanguageProvider>
  )
}
