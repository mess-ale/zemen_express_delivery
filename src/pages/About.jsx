import React from "react";
import NewsletterCta from "../components/contact/NewsletterCta";
import FooterDarkSimple from "../components/contact/FooterDarkSimple";
import ProjectsHero from "../components/ui/ProjectsHero";
import AboutSection from "../components/home/AboutSection";

export default function Projects() {
  return (
    <main>
      <ProjectsHero />
      <AboutSection />
      <NewsletterCta />
      <FooterDarkSimple />
    </main>
  );
}
