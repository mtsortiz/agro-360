/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Benefits from "./components/Benefits";
import AppShowcase from "./components/AppShowcase";
import Features from "./components/Features";
import AIAssistant from "./components/AIAssistant";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-primary/10 selection:text-primary bg-surface/30">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Stats />
        <Benefits />
        <AppShowcase />
        <Features />
        <AIAssistant />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
