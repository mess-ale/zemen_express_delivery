import FooterArea from "../components/footer/FooterArea";
import AboutSection from "../components/home/AboutSection";
import BusinessGlobalSection from "../components/home/BusinessGlobalSection";
import ClientReviews from "../components/home/ClientReviews";
import CtaBanner from "../components/home/CtaBanner";
import HeroSlider from "../components/home/HeroSlider";
import RecentBlogSection from "../components/home/RecentBlogSection";
import ServicesSection from "../components/home/ServicesSection";
import StatsStrip from "../components/home/StatsStrip";
import TrustedClients from "../components/home/TrustedClients";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <CtaBanner />
      <BusinessGlobalSection />
      <StatsStrip />
      <ClientReviews />
      <TrustedClients />
      <RecentBlogSection />
      <FooterArea />
    </div>
  );
}
