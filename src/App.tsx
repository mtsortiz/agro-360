/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Features from "./components/Features";
import AIAssistant from "./components/AIAssistant";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Benefits />
        <Features />
        <AIAssistant />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
