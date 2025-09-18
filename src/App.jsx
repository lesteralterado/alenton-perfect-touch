import React, { useEffect, lazy, Suspense, useState } from 'react';
import Icon from './components/AppIcon';
import { Helmet } from 'react-helmet';
import ErrorBoundary from './components/ErrorBoundary';

const Header = lazy(() => import('./components/ui/Header'));
const HeroSection = lazy(() => import('./components/HeroSection'));
const About = lazy(() => import('./components/About'));
const PortfolioHighlights = lazy(() => import('./components/PortfolioHighlights'));
const PhilosophySection = lazy(() => import('./components/PhilosophySection'));
const PersonalSection = lazy(() => import('./components/PersonalSection'));
const GallerySection = lazy(() => import('./components/GallerySection'));
const Footer = lazy(() => import('./components/ui/Footer'));

function App() {
 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

  return (
    <ErrorBoundary>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Icon name="Loader2" size={48} className="animate-spin text-accent" />
        </div>
      }>
        <Helmet>
          <title>Alenton - The Visionary Craftsperson </title>
          <meta
            name="description"
            content="Meet Rhia Jean, a design strategist who transforms businesses through strategic visual communication. 10+ years of experience, 50+ successful projects, and a passion for creating meaningful design solutions."
          />
          <meta name="keywords" content="design strategist, brand designer, UX designer, visual identity, Rhia Jean, Alenton Perfect Touch" />
          <meta property="og:title" content="About Rhia Jean - The Visionary Craftsperson | Alenton Perfect Touch" />
          <meta property="og:description" content="Discover the story behind Alenton Perfect Touch and meet Rhia Jean, the design strategist who believes in the transformative power of strategic visual communication." />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="#about" />
        </Helmet>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <Header />
          <main className="pt-16 lg:pt-20">
            <HeroSection />
            <About />
            <section id='portfolio' className="py-20 bg-gradient-to-br from-primary via-primary/95 to-accent/10">
              <PortfolioHighlights />
            </section>
            <PhilosophySection />
            <PersonalSection />
            <section id="gallery" className="py-20 bg-background">
              <GallerySection />
            </section>
            <section id='footer' className="h-24">
              <Footer />
            </section>
          </main>
        </div>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
