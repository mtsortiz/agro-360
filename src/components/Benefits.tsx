import { motion } from "motion/react";
import { ShieldCheck, BarChart3, Smartphone } from "lucide-react";

const benefits = [
  {
    title: "Cumplimiento SENASA",
    description: "Automatizá la generación de documentos y asegurá que tu stock esté siempre alineado con las normativas vigentes.",
    icon: ShieldCheck,
    color: "bg-primary-light/10",
    iconColor: "text-primary"
  },
  {
    title: "Decisiones con Datos",
    description: "Transformá los registros diarios en tableros de control precisos. Maximizá la rentabilidad con información real.",
    icon: BarChart3,
    color: "bg-primary",
    iconColor: "text-white",
    dark: true
  },
  {
    title: "Simplicidad Digital",
    description: "Diseñada para el campo. Interfaz intuitiva que funciona sin conexión, pensada para el trabajo real bajo cualquier clima.",
    icon: Smartphone,
    color: "bg-accent-container",
    iconColor: "text-accent"
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-surface/60 py-24 px-6 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-accent font-bold uppercase tracking-widest text-xs">Beneficios</span>
          <h2 className="text-4xl font-headline font-extrabold text-primary-container mt-2">Por qué elegir CampoDigital</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${benefit.dark ? 'bg-primary text-white' : 'bg-white border border-neutral-100'} p-10 rounded-3xl shadow-xs hover:shadow-md transition-all hover:-translate-y-1.5`}
            >
              <div className={`w-14 h-14 ${benefit.color} flex items-center justify-center rounded-2xl mb-8`}>
                <benefit.icon className={benefit.iconColor} size={28} />
              </div>
              <h3 className={`text-2xl font-headline font-bold mb-4 ${benefit.dark ? 'text-white' : 'text-primary-container'}`}>
                {benefit.title}
              </h3>
              <p className={benefit.dark ? 'text-white/80' : 'text-on-surface-variant'}>
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
