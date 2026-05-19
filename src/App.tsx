/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
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
import ModalForm from "./components/ModalForm";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen font-sans selection:bg-primary/10 selection:text-primary bg-surface/30">
      <Navbar onOpenModal={openModal} />
      <main className="pt-20">
        <Hero onOpenModal={openModal} />
        <Stats />
        <Benefits />
        <AppShowcase />
        <Features />
        <AIAssistant />
        <Pricing onOpenModal={openModal} />
        <CTA onOpenModal={openModal} />
      </main>
      <Footer />

      {/* Formulario de Registro Modal */}
      <ModalForm isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
