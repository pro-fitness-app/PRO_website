import { useState } from 'react';
import Features from './Features';
import Media from './Media';
import FAQ from './FAQ';
import TerminalIntro from '../components/TerminalIntro';
import LandingSection from '../components/LandingSection';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  return (
    <>
      {showIntro && <TerminalIntro onFinish={() => setShowIntro(false)} />}
      {!showIntro && (
        <>
          <LandingSection />
          <Features />
          <Media />
          <FAQ />
        </>
      )}
    </>
  );
} 