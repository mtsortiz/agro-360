import { motion } from "motion/react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import AppInteractiveMockup from "./AppMockups";

export default function Hero() {
  return (
    <section className="relative px-6 py-12 md:py-24 max-w-7xl mx-auto overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10"
        >
          <div className="inline-flex items-center gap-1.5 bg-accent-container text-accent px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
            <Sparkles size={12} />
            <span>by R6 Innovation</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold tracking-tight text-primary-container leading-[1.1] mb-6">
            Gestión ganadera inteligente en la palma de tu mano
          </h1>
          
          <p className="text-base md:text-lg text-on-surface-variant leading-relaxed max-w-lg mb-10">
            Digitalizá tu establecimiento con la app ganadera más intuitiva de Argentina. Monitoreo en tiempo real, trazabilidad por lote e individuo y cumplimiento de normativas SENASA sin necesidad de conexión.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-md hover:-translate-y-0.5 active:scale-98 cursor-pointer">
              <Download size={20} />
              <span>Instalar Gratis</span>
            </button>
            <a href="#features" className="bg-white hover:bg-neutral-50 text-neutral-700 border border-neutral-200 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-xs hover:-translate-y-0.5 active:scale-98 cursor-pointer">
              <span>Ver Funcionalidades</span>
              <ArrowRight size={18} className="text-neutral-400" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end relative"
        >
          {/* Círculo sutil en el fondo del teléfono */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-light/20 rounded-full blur-3xl -z-10"></div>
          
          <div className="relative z-10 w-full max-w-[340px]">
            <AppInteractiveMockup />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
