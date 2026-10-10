import { SiteHeader } from '@/components/site-header';
import {
  Blog, Clients, Contact, Faq, Hero, Intro, Numbers, Pillars, Process, Services, SiteFooter, Testimonials, Work,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Intro />
        <Pillars />
        <Numbers />
        <Work />
        <Services />
        <Process />
        <Clients />
        <Testimonials />
        <Faq />
        <Blog />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
