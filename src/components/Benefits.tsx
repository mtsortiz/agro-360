import { motion } from "motion/react";
import { ShieldCheck, BarChart3, Smartphone } from "lucide-react";

const benefits = [
  {
    title: "Cumplimiento SENASA",
    description: "Automatizá la generación de documentos y asegurá que tu stock esté siempre alineado con las normativas vigentes.",
    icon: ShieldCheck,
    color: "bg-primary/10",
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
    description: "Diseñada para el campo. Interfaz intuitiva que funciona sin conexión, pensada para el trabajo real.",
    icon: Smartphone,
    color: "bg-secondary-container",
    iconColor: "text-secondary"
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-surface-container-low py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-secondary font-bold uppercase tracking-widest text-sm">Beneficios</span>
          <h2 className="text-4xl font-headline font-bold text-primary mt-2">Por qué elegir Agro 360</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${benefit.dark ? 'bg-primary text-white' : 'bg-white'} p-10 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-2`}
            >
              <div className={`w-14 h-14 ${benefit.color} flex items-center justify-center rounded-xl mb-8`}>
                <benefit.icon className={benefit.iconColor} size={32} />
              </div>
              <h3 className={`text-2xl font-headline font-bold mb-4 ${benefit.dark ? 'text-white' : 'text-primary'}`}>
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
