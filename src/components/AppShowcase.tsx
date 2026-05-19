import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PhoneFrame, DashboardMockup, AnimalesMockup, SanidadMockup, FormularioMockup } from './AppMockups';
import { LayoutDashboard, Users, HeartPulse, CheckSquare, ShieldCheck, ChevronRight, Zap } from 'lucide-react';

const sections = [
  {
    id: 'dashboard',
    title: 'Dashboard de Control',
    subtitle: 'El estado de tu campo de un vistazo',
    icon: LayoutDashboard,
    color: 'border-l-4 border-primary',
    features: [
      'Alerta sanitaria en tiempo real vinculada a SENASA.',
      'Control instantáneo de stock total y ganancia de peso promedio por lote.',
      'Renspa activo siempre visible para trámites.',
      'Indicadores rápidos de fertilidad y tasas de preñez del rodeo.'
    ],
    mockup: <DashboardMockup />
  },
  {
    id: 'animals',
    title: 'Gestión de Animales',
    subtitle: 'Trazabilidad individual detallada',
    icon: Users,
    color: 'border-l-4 border-accent',
    features: [
      'Buscador dinámico por caravana (AR), raza, categoría o lote.',
      'Categorización interactiva (Vacas, Novillos, Terneros, Toros).',
      'Alertas de salud específicas para cada animal.',
      'Historial de ganancia diaria de peso para detectar desvíos rápido.'
    ],
    mockup: <AnimalesMockup />
  },
  {
    id: 'health',
    title: 'Sanidad & Calendario',
    subtitle: 'Cumplimiento normativo automatizado',
    icon: HeartPulse,
    color: 'border-l-4 border-blue-500',
    features: [
      'Métrica de cobertura vacunal general en tiempo real.',
      'Alertas de vencimiento de campañas obligatorias (aftosa, antiparasitario).',
      'Calendario interactivo con recordatorios y fechas de aplicación.',
      'Historial reciente de tratamientos veterinarios aplicados.'
    ],
    mockup: <SanidadMockup />
  },
  {
    id: 'register',
    title: 'Registro Simplificado',
    subtitle: 'Carga de datos directamente en el lote',
    icon: CheckSquare,
    color: 'border-l-4 border-emerald-500',
    features: [
      'Formularios limpios optimizados para uso móvil bajo el sol.',
      'Selección de categoría y raza con un solo toque (chips/pills).',
      'Asignación ágil a lotes y potreros.',
      'Modo offline que guarda los datos y sincroniza cuando detecta señal.'
    ],
    mockup: <FormularioMockup />
  }
];

export default function AppShowcase() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const currentSection = sections.find(s => s.id === activeTab) || sections[0];

  return (
    <section id="features" className="py-24 px-6 bg-surface-container-low/30 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-bold uppercase tracking-widest text-xs">Paseo por la App</span>
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary-container mt-2">
            Tu establecimiento en la palma de tu mano
          </h2>
          <p className="text-on-surface-variant text-base mt-4">
            Explorá las secciones reales de la aplicación móvil y mirá cómo te ayuda a simplificar las tareas ganaderas diarias.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Tabs a la izquierda (5 columnas) */}
          <div className="md:col-span-6 space-y-4 order-2 md:order-1">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeTab === section.id;
              
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(section.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all cursor-pointer border ${
                    isActive 
                      ? 'bg-white shadow-md border-neutral-100 ' + section.color 
                      : 'bg-transparent border-transparent hover:bg-white/40 hover:border-neutral-100'
                  }`}
                >
                  <div className="flex gap-4 items-start">
                    <div className={`p-3 rounded-xl transition-colors ${
                      isActive ? 'bg-primary text-white' : 'bg-white text-neutral-500 shadow-xs border border-neutral-100'
                    }`}>
                      <Icon size={22} />
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-base font-bold font-headline ${isActive ? 'text-primary-container' : 'text-neutral-700'}`}>
                        {section.title}
                      </h4>
                      <p className="text-xs text-on-surface-variant mt-1">
                        {section.subtitle}
                      </p>
                      
                      {/* Sub-funcionalidades visibles al estar activo */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <ul className="mt-4 space-y-2.5 pt-4 border-t border-neutral-100">
                              {section.features.map((feat, idx) => (
                                <li key={idx} className="flex gap-2 items-start text-xs text-on-surface-variant">
                                  <ShieldCheck size={14} className="text-primary mt-0.5 flex-shrink-0" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <ChevronRight size={18} className={`text-neutral-400 mt-1 transition-transform ${isActive ? 'rotate-90' : ''}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Teléfono Mockup a la derecha (6 columnas) */}
          <div className="md:col-span-6 flex justify-center order-1 md:order-2">
            <div className="relative">
              {/* Blobs de fondo decorativos */}
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-accent/15 rounded-full blur-3xl -z-10"></div>
              
              <PhoneFrame activeTab={activeTab}>
                {currentSection.mockup}
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
