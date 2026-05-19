import { motion } from "motion/react";
import { WifiOff, Radio, FileSpreadsheet, Layers } from "lucide-react";

export default function Features() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-accent font-bold uppercase tracking-widest text-xs">Características Técnicas</span>
        <h2 className="text-4xl font-headline font-extrabold text-primary-container mt-2">Tecnología robusta pensada para el campo</h2>
        <div className="h-1 w-20 bg-accent mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
        {/* Large Feature - Offline */}
        <motion.div 
          whileHover={{ y: -4 }}
          className="md:col-span-8 bg-white border border-neutral-100 rounded-3xl p-8 flex flex-col justify-end group cursor-pointer overflow-hidden relative shadow-xs"
        >
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary-light/5 rounded-full blur-2xl group-hover:bg-primary-light/10 transition-colors"></div>
          <div className="z-10">
            <div className="w-12 h-12 rounded-2xl bg-primary-light/10 flex items-center justify-center text-primary mb-4 group-hover:scale-105 transition-transform">
              <WifiOff size={24} />
            </div>
            <h3 className="text-2xl font-headline font-bold text-primary-container mb-2">Funcionamiento 100% Sin Conexión</h3>
            <p className="text-on-surface-variant max-w-md text-sm leading-relaxed">
              El lote no siempre tiene señal. CampoDigital almacena toda la información de forma local y segura, y se sincroniza automáticamente en la nube al recuperar la conectividad.
            </p>
          </div>
        </motion.div>

        {/* Small Feature - Bluetooth Scales */}
        <motion.div 
          whileHover={{ y: -4 }}
          className="md:col-span-4 bg-primary text-white rounded-3xl p-8 flex flex-col justify-center items-center text-center cursor-pointer shadow-md"
        >
          <Radio className="mb-4 text-accent animate-pulse" size={48} />
          <h3 className="text-xl font-headline font-bold mb-2">Conectividad con Balanzas</h3>
          <p className="text-xs text-white/80 leading-relaxed">
            Sincronizá la app con balanzas electrónicas mediante Bluetooth. Registrá el peso exacto de cada animal al instante de pasar por la manga sin tipeos manuales.
          </p>
        </motion.div>

        {/* Medium Feature - Export */}
        <motion.div 
          whileHover={{ y: -4 }}
          className="md:col-span-4 bg-white p-8 rounded-3xl flex flex-col justify-center border border-neutral-100 cursor-pointer shadow-xs"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-accent mb-4">
            <FileSpreadsheet size={20} />
          </div>
          <h3 className="text-xl font-headline font-bold text-primary-container mb-2">Exportación a planillas</h3>
          <p className="text-on-surface-variant text-xs leading-relaxed">
            Descargá reportes de sanidad, stock y movimientos en formato Excel o PDF. Listos para enviar a tu veterinario, asesor o presentar ante SENASA.
          </p>
        </motion.div>

        {/* Image Feature - Multi-establishment */}
        <motion.div 
          whileHover={{ y: -4 }}
          className="md:col-span-8 bg-white border border-neutral-100 rounded-3xl p-8 flex flex-col justify-end group cursor-pointer overflow-hidden relative shadow-xs"
        >
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
          <div className="z-10">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-105 transition-transform">
              <Layers size={24} />
            </div>
            <h3 className="text-2xl font-headline font-bold text-primary-container mb-2">Multi-Establecimiento</h3>
            <p className="text-on-surface-variant max-w-md text-sm leading-relaxed">
              Gestioná diferentes campos, RENSPAs y permisos de operarios desde un único usuario centralizado. Alterná de establecimiento con dos toques.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
