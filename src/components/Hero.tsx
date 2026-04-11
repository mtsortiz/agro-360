import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative px-6 py-20 md:py-32 max-w-7xl mx-auto overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10"
        >
          <div className="inline-block bg-secondary-container text-secondary px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            R6 Innovation
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-primary leading-[1.1] mb-6">
            Gestión ganadera inteligente en la palma de tu mano
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-lg mb-10">
            Digitalizá tu campo con la app más completa de Argentina. Monitoreo en tiempo real, cumplimiento normativo y trazabilidad total.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-primary-container transition-all shadow-lg hover:-translate-y-1">
              Empezar ahora
              <ArrowRight size={20} />
            </button>
            <button className="bg-surface-container-highest text-primary px-8 py-4 rounded-xl font-bold hover:bg-surface-container-high transition-all">
              Ver demo
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 bg-white p-4 rounded-[2.5rem] shadow-2xl border border-surface-container-highest/50">
            <img 
              className="rounded-[2rem] w-full h-auto object-cover aspect-[9/19]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5T5Xk9L11TJRY2uffPLUgyFFdOU99OoVk7si8YFWi5pAZNfCy8IZrWx4A2-_dgFgwHFrSRhvMSCkIRvt_SsON9hmDPEYDBTJNALCScasj-HuH46WWQDkYbm91mZdfFrDKVpY5m5ad0b-yQmFcagdLXW-kpWbxd7vIYyxE7lX55wmxN-eM5syluwWbHSxKme2LZyUjq0RU04rowg4DAtvDQ1ghBm5vZO_Dv-MpEr-G6BymdaenOb-7ulOfrf2d0686LZjoLcm5qUQ" 
              alt="Agro 360 App Dashboard"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
