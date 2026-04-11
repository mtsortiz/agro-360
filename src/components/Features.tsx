import { motion } from "motion/react";
import { Fingerprint, HeartPulse, Wallet } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-headline font-bold text-primary">Funcionalidades Core</h2>
        <div className="h-1.5 w-20 bg-secondary mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
        {/* Large Feature */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="md:col-span-8 bg-surface-container-high rounded-3xl p-8 flex flex-col justify-end group cursor-pointer overflow-hidden relative"
        >
          <div className="z-10">
            <Fingerprint className="text-primary mb-4 group-hover:scale-110 transition-transform" size={48} />
            <h3 className="text-2xl font-headline font-bold text-primary mb-2">Identificación y Trazabilidad</h3>
            <p className="text-on-surface-variant max-w-md">
              Seguimiento individual o por lotes con integración de caravanas electrónicas y lectura mediante NFC/QR.
            </p>
          </div>
        </motion.div>

        {/* Small Feature */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="md:col-span-4 bg-primary text-white rounded-3xl p-8 flex flex-col justify-center items-center text-center cursor-pointer"
        >
          <HeartPulse className="mb-4" size={56} />
          <h3 className="text-xl font-headline font-bold mb-2">Sanidad y Reproducción</h3>
          <p className="text-sm text-white/80">
            Calendarios sanitarios, tactos, pariciones y planes de vacunación automatizados.
          </p>
        </motion.div>

        {/* Medium Feature */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="md:col-span-4 bg-white p-8 rounded-3xl flex flex-col justify-center border border-surface-container-highest cursor-pointer shadow-sm"
        >
          <Wallet className="text-primary mb-4" size={40} />
          <h3 className="text-xl font-headline font-bold text-primary mb-2">Gestión Económica</h3>
          <p className="text-on-surface-variant text-sm">
            Control de costos por animal, margen bruto por hectárea y valuación de stock permanente.
          </p>
        </motion.div>

        {/* Image Feature */}
        <motion.div 
          className="md:col-span-8 relative rounded-3xl overflow-hidden group"
        >
          <img 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBgYul-ivGe5ESQHbGV6qRDQFVEcfAGR9SzkfxTCdKChe8jjYGdVOHeq3_4ppS3NmSG3lc5Je4e7NTfi1IcKGJn12LfGGhVtXE4Nj6KEYj-mZa3FDenYWLunFip-K6VOghIM-VWJ3W1E0vMR0BG6VI0Ivu9DdjelYKd0VN9DZGrHS77_f_9m6yrhEINiuNYuW9n-Q6vo0NbssxWrzG3dYlzrcTrhumBWeQlsUT3mRBmIb_UKJnD5KRqDXMAW6Lwv4WMmCGMxy622c" 
            alt="Livestock Monitoring"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8">
            <p className="text-white font-medium italic text-lg">
              "La precisión tecnológica aplicada al instinto ganadero."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
