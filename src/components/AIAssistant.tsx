import { motion } from "motion/react";
import { Bot, Send, CheckCircle2 } from "lucide-react";

export default function AIAssistant() {
  return (
    <section className="bg-primary py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 text-white"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1 rounded-full mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <span className="text-xs font-bold tracking-widest uppercase">Inteligencia Artificial</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">El Asistente Inteligente</h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Hablale a tu campo. Nuestra IA procesa tus datos y responde consultas complejas en segundos, eliminando la necesidad de buscar en planillas eternas.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="text-white/60" size={20} />
              <span>Consultas por voz o texto</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="text-white/60" size={20} />
              <span>Reportes instantáneos de producción</span>
            </li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-md"
        >
          <div className="bg-white rounded-[2.5rem] p-6 shadow-2xl">
            <div className="flex items-center gap-3 border-b border-surface-container pb-4 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Bot className="text-white" size={20} />
              </div>
              <div>
                <h4 className="font-bold text-primary">Ganado AI</h4>
                <p className="text-[10px] text-green-600 font-bold uppercase tracking-widest">En línea</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-end">
                <div className="bg-surface-container-low px-4 py-3 rounded-2xl rounded-tr-none text-sm font-medium text-on-surface">
                  ¿Cuántas vacas parieron en septiembre?
                </div>
              </div>
              <div className="flex justify-start items-end gap-2">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="text-white" size={12} />
                </div>
                <div className="bg-primary/5 px-4 py-3 rounded-2xl rounded-tl-none text-sm text-primary">
                  En septiembre se registraron <span className="font-bold">142 pariciones</span> exitosas. Un 12% más que el año pasado. ¿Te gustaría ver el detalle por potrero?
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-2xl px-4 py-3 flex justify-between items-center text-on-surface-variant text-sm">
              <span>Escribí tu consulta...</span>
              <Send className="text-primary cursor-pointer hover:scale-110 transition-transform" size={18} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
