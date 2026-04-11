import { Globe, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="text-2xl font-bold tracking-tighter text-primary font-headline mb-4">
              Agro 360
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Llevando la excelencia del terroir digital a cada rincón de la Argentina productiva.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Plataforma</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gestión SENASA</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Hardware compatible</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Compañía</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Agricultural Insights</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Newsletter</h4>
            <p className="text-sm text-on-surface-variant mb-4">Recibí las últimas novedades del sector AgTech.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-white border border-surface-container-highest rounded-xl px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button className="bg-primary text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-primary-container transition-colors">
                Unirse
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-surface-container-highest flex flex-col md:row justify-between items-center gap-4">
          <p className="text-xs text-on-surface-variant">
            © 2024 Agro 360. Digital Terroir Excellence.
          </p>
          <div className="flex gap-6 text-on-surface-variant">
            <Globe size={18} className="cursor-pointer hover:text-primary transition-colors" />
            <Share2 size={18} className="cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}
