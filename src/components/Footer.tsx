import { Globe, Share2, Mail, Phone } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#14532D] text-white pt-20 pb-10 px-6 relative overflow-hidden">
      {/* Círculo sutil en el fondo del footer */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -mr-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <Logo className="w-9 h-9 bg-white rounded-xl p-0.5 border border-white/20" />
              <div className="text-xl font-extrabold tracking-tight font-headline">
                <span>Campo</span>
                <span className="text-[#22C55E]">Digital</span>
              </div>
            </div>
            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              Llevando la excelencia tecnológica y la precisión del monitoreo en tiempo real a cada establecimiento ganadero de la Argentina.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs text-white/60">
              <Mail size={14} className="text-accent" />
              <Phone size={14} className="text-accent" />
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-xs uppercase tracking-widest text-[#22C55E] mb-6">Plataforma</h4>
            <ul className="space-y-4 text-xs text-white/70">
              <li><a href="#features" className="hover:text-white transition-colors">Funcionalidades</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Beneficios</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Planes</a></li>
              <li><a href="#ai-assistant" className="hover:text-white transition-colors">CampoDigital AI</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-xs uppercase tracking-widest text-[#22C55E] mb-6">Legales</h4>
            <ul className="space-y-4 text-xs text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Políticas de Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos del Servicio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Regulaciones SENASA</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Soporte Técnico</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-bold text-xs uppercase tracking-widest text-[#22C55E] mb-6">Novedades del Sector</h4>
            <p className="text-xs text-white/70 mb-4 leading-relaxed">
              Recibí información sobre sanidad, manejo de rodeos y últimas tecnologías aplicadas al campo argentino.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="bg-white/10 border border-white/10 rounded-xl px-4 py-2.5 text-xs w-full text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#22C55E] focus:border-[#22C55E]"
              />
              <button className="bg-accent hover:bg-[#D97706] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all active:scale-98 cursor-pointer">
                Unirse
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-white/50">
            © 2026 CampoDigital. Una marca de R6 Innovation. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-white/50">
            <Globe size={16} className="cursor-pointer hover:text-white transition-colors" />
            <Share2 size={16} className="cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}
