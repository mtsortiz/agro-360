import { motion } from "motion/react";
import { Menu, Download } from "lucide-react";
import Logo from "./Logo";

export default function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-surface/80 shadow-xs">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <Logo className="w-10 h-10 drop-shadow-xs" />
          <div className="text-2xl font-extrabold tracking-tight font-headline">
            <span className="text-primary-container">Campo</span>
            <span className="text-primary">Digital</span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 items-center">
          <a href="#features" className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">Funcionalidades</a>
          <a href="#benefits" className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">Beneficios</a>
          <a href="#pricing" className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">Planes</a>
          <a href="#ai-assistant" className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">Asistente IA</a>
        </div>

        <div className="flex gap-4 items-center">
          <button 
            onClick={onOpenModal}
            className="bg-primary hover:bg-primary-container text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all shadow-xs hover:shadow-md active:scale-98 flex items-center gap-2 cursor-pointer"
          >
            <Download size={16} />
            <span>Quiero la App</span>
          </button>
          <button className="md:hidden text-primary cursor-pointer">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
