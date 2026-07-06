import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Stats } from "./components/Stats";
import { About } from "./components/About";
import { Approach } from "./components/Approach";
import { Programs } from "./components/Programs";
import { BigType } from "./components/BigType";
import { Features } from "./components/Features";
import { CampusLife } from "./components/CampusLife";
import { Testimonials } from "./components/Testimonials";
import { CtaContact } from "./components/CtaContact";
import { Footer } from "./components/Footer";
import { AnnouncementWidget } from "./components/AnnouncementWidget";
import { ChatWidget } from "./components/ChatWidget";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "WITS Academy Secondary School",
  slogan: "Education for Civilization",
  foundingDate: "1999",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Baudha-6",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Approach />
        <Programs />
        <BigType />
        <Features />
        <CampusLife />
        <Testimonials />
        <CtaContact />
      </main>
      <Footer />
      <AnnouncementWidget />
      <ChatWidget />
    </>
  );
}
