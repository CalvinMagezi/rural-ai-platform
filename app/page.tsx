import { HeroSection } from '@/components/sections/hero';
import { FeaturesSection } from '@/components/sections/features';
import { MapSection } from '@/components/sections/map';
import { MetricsSection } from '@/components/sections/metrics';
import { ResourceSection } from '@/components/sections/resources';
import { SiteHeader } from '@/components/site-header';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <MapSection />
        <MetricsSection />
        <ResourceSection />
      </main>
      <Footer />
    </div>
  );
}