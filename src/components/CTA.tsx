import React from 'react';
import { motion } from 'motion/react';
import { Download, ArrowUpRight, Sparkles } from 'lucide-react';
import Logo from './Logo';

export default function CTA() {
  return (
    <section className="bg-primary-container text-white py-24 px-6 relative overflow-hidden">
      {/* Círculos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-primary/20 rounded-full blur-3xl -mr-40 -mt-40"></div>
      <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] bg-accent/10 rounded-full blur-2xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg p-1.5 border-2 border-accent">
            <Logo className="w-full h-full" />
          </div>
        </motion.div>

        <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight mb-6">
          Digitalizá tu establecimiento ganadero hoy mismo
        </h2>
        
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Unite a los cientos de productores argentinos que ya simplificaron su control sanitario, stock ganadero y trazabilidad. Todo funciona sin conexión a internet.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-accent hover:bg-[#D97706] text-white font-bold px-8 py-4 rounded-2xl flex items-center gap-2 shadow-lg transition-all hover:-translate-y-0.5 active:scale-98 cursor-pointer">
            <Download size={20} />
            <span>Descargar CampoDigital</span>
          </button>
          
          <button className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold px-8 py-4 rounded-2xl flex items-center gap-2 transition-all hover:-translate-y-0.5 active:scale-98 cursor-pointer">
            <span>Conversar con Ventas</span>
            <ArrowUpRight size={18} />
          </button>
        </div>

        <div className="flex gap-6 justify-center mt-12 text-xs text-white/60">
          <span className="flex items-center gap-1.5"><Sparkles size={14} className="text-accent" /> Disponible para Android e iOS</span>
          <span className="flex items-center gap-1.5"><Sparkles size={14} className="text-accent" /> 100% Funcional sin Internet</span>
        </div>
      </div>
    </section>
  );
}
