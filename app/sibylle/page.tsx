import { HeroSection } from '@/components/sibylle/HeroSection';
import { TrustStrip } from '@/components/sibylle/TrustStrip';
import { EditorialSection } from '@/components/sibylle/EditorialSection';
import { EmotionalPatternCards } from '@/components/sibylle/EmotionalPatternCards';
import { ThemeCards } from '@/components/sibylle/ThemeCards';
import { AboutSibylle } from '@/components/sibylle/AboutSibylle';
import { MethodStory } from '@/components/sibylle/MethodStory';
import { PricingCards } from '@/components/sibylle/PricingCards';
import { ReferenceWall } from '@/components/sibylle/ReferenceWall';
import { FAQAccordion } from '@/components/sibylle/FAQAccordion';
import { ClosingCTA } from '@/components/sibylle/ClosingCTA';

export default function HomePage() {
  return <main><HeroSection /><TrustStrip /><EditorialSection /><EmotionalPatternCards /><ThemeCards /><AboutSibylle /><MethodStory /><PricingCards /><ReferenceWall /><FAQAccordion /><ClosingCTA /></main>;
}
