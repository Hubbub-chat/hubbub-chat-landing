import React from 'react'
import { ThemeProvider } from './context/ThemeContext.tsx'
import { LanguageProvider } from './context/LanguageProvider.tsx'
import { Navbar } from './components/Navbar.tsx'
import { HeroSection } from './components/HeroSection.tsx'
import { AgentOrchestrationDemo } from './components/AgentOrchestrationDemo.tsx'
import { BentoFeatures } from './components/BentoFeatures.tsx'
import { SecurityArchitecture } from './components/SecurityArchitecture.tsx'
import { ComparisonTable } from './components/ComparisonTable.tsx'
import { DownloadSection } from './components/DownloadSection.tsx'
import { FaqSection } from './components/FaqSection.tsx'
import { Reveal } from './components/Reveal.tsx'
import { Footer } from './components/Footer.tsx'

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-bg text-fg flex flex-col font-sans">
          {/* Accessible Skip Link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-fg focus:text-bg focus:font-semibold focus:text-xs focus:rounded-xl focus:shadow-2xl"
          >
            Skip to main content
          </a>

          {/* Sticky Glass Navbar */}
          <Navbar />

          {/* Main Content Sections */}
          <main id="main-content" className="flex-1">
            {/* 1. Hero Section with Creative Living Agent Studio */}
            <HeroSection />

            {/* 2. Interactive Multi-Agent Orchestration Playground */}
            <Reveal><AgentOrchestrationDemo /></Reveal>

            {/* 3. Bento Grid of 6 Core Pillars */}
            <Reveal><BentoFeatures /></Reveal>

            {/* 4. Rust Security & Architectural Guarantees */}
            <div id="architecture">
              <Reveal><SecurityArchitecture /></Reveal>
            </div>

            {/* 5. Direct Comparison Table */}
            <Reveal><ComparisonTable /></Reveal>

            {/* 6. Windows Download & Quickstart */}
            <Reveal><DownloadSection /></Reveal>

            {/* 7. Comprehensive FAQ */}
            <Reveal><FaqSection /></Reveal>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
