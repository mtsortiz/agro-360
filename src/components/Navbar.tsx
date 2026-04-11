import { motion } from "motion/react";
import { ArrowRight, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter text-primary font-headline">
          Agro 360
        </div>
        
        <div className="hidden md:flex gap-8 items-center">
          <a href="#features" className="text-sm font-semibold text-primary border-b-2 border-primary pb-1">Features</a>
          <a href="#benefits" className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">Benefits</a>
          <a href="#pricing" className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">Pricing</a>
          <a href="#about" className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">About</a>
        </div>

        <div className="flex gap-4 items-center">
          <button className="text-primary font-semibold text-sm px-4 py-2 rounded-xl hover:bg-surface-container transition-colors">
            Login
          </button>
          <button className="bg-primary text-white font-semibold text-sm px-6 py-2 rounded-xl hover:bg-primary-container transition-all shadow-sm active:scale-95">
            Get Started
          </button>
          <button className="md:hidden text-primary">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
