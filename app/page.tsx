import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/home/hero"
import { StatsBand } from "@/components/home/stats-band"
import { Process } from "@/components/home/process"
import { BeforeAfter } from "@/components/home/before-after"
import { WhyUs } from "@/components/home/why-us"
import { Solutions } from "@/components/home/solutions"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <StatsBand />
        <Process />
        <BeforeAfter />
        <WhyUs />
        <Solutions />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
