import { motion } from "motion/react";
import { Bot, Send, CheckCircle2 } from "lucide-react";

export default function AIAssistant() {
  return (
    <section id="ai-assistant" className="bg-[#14532D] py-24 px-6 overflow-hidden relative scroll-mt-16">
      {/* Elementos decorativos del fondo */}
      <div className="absolute top-0 left-0 w-84 h-84 bg-primary/20 rounded-full blur-3xl -ml-20 -mt-20"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 text-white"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-[10px] font-bold tracking-widest uppercase">Inteligencia Artificial</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 leading-tight">
            Consultá a tu asistente CampoDigital AI
          </h2>
          
          <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed">
            Hablale a tu establecimiento. CampoDigital AI procesa todo el historial de pesajes, alertas sanitarias y lotes para responder tus consultas ganaderas al instante. Olvidate de buscar en planillas eternas.
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="text-accent" size={20} />
              <span className="text-sm font-medium">Consultas por voz o texto desde la manga</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="text-accent" size={20} />
              <span className="text-sm font-medium">Reportes automáticos de producción y proyección</span>
            </li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-md"
        >
          <div className="bg-white rounded-[2.5rem] p-6 shadow-2xl border border-neutral-100">
            <div className="flex items-center gap-3 border-b border-neutral-100 pb-4 mb-6">
              <div className="w-10 h-10 bg-[#1A6B37] rounded-full flex items-center justify-center">
                <Bot className="text-white" size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#1C1E1B] text-xs">CampoDigital AI</h4>
                <p className="text-[9px] text-green-600 font-extrabold uppercase tracking-wider">En línea</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-end">
                <div className="bg-[#F5F5F0] px-4 py-3 rounded-2xl rounded-tr-none text-xs font-semibold text-neutral-800 max-w-[85%]">
                  ¿Cuántos terneros nacieron en el Lote 1 este trimestre?
                </div>
              </div>
              <div className="flex justify-start items-end gap-2">
                <div className="w-6 h-6 bg-[#1A6B37] rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="text-white" size={12} />
                </div>
                <div className="bg-[#FEF3E2] px-4 py-3 rounded-2xl rounded-tl-none text-xs text-neutral-800 border border-[#E8963A]/10 max-w-[85%]">
                  En el Lote 1 registramos <span className="font-bold text-[#1A6B37]">38 nacimientos</span> este trimestre. Se observa un peso promedio al nacer de 32 kg. ¿Deseás ver el reporte sanitario de este lote?
                </div>
              </div>
            </div>

            <div className="bg-[#F5F5F0] rounded-2xl px-4 py-3 flex justify-between items-center text-neutral-500 text-xs border border-neutral-200/50">
              <span>Escribí tu consulta...</span>
              <Send className="text-[#1A6B37] cursor-pointer hover:scale-110 transition-transform" size={18} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
