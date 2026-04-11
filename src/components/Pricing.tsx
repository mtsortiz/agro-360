import { motion } from "motion/react";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Básico",
    description: "Para pequeños productores.",
    price: "12.500",
    features: [
      { text: "Hasta 200 animales", included: true },
      { text: "Stock y Trazabilidad básica", included: true },
      { text: "IA Asistente", included: false },
    ],
    cta: "Suscribirse",
    highlight: false
  },
  {
    name: "Profesional",
    description: "Gestión avanzada para el campo.",
    price: "32.000",
    features: [
      { text: "Hasta 1500 animales", included: true },
      { text: "Sanidad y Reproducción Full", included: true },
      { text: "Gestión Económica", included: true },
      { text: "IA Asistente Incluida", included: true },
    ],
    cta: "Suscribirse",
    highlight: true
  },
  {
    name: "Corporativo",
    description: "Múltiples establecimientos.",
    price: "Consultar",
    features: [
      { text: "Animales ilimitados", included: true },
      { text: "Multi-usuario con permisos", included: true },
      { text: "Integración API / Balanzas", included: true },
    ],
    cta: "Contactar Ventas",
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-secondary font-bold uppercase tracking-widest text-sm">Suscripciones</span>
        <h2 className="text-4xl font-headline font-bold text-primary mt-2">Planes a tu medida</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`p-8 rounded-3xl border flex flex-col ${
              plan.highlight 
                ? 'bg-surface-container-highest border-primary ring-2 ring-primary scale-105 shadow-xl z-10' 
                : 'bg-white border-surface-container-highest shadow-sm'
            }`}
          >
            {plan.highlight && (
              <div className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full w-fit mx-auto -mt-12 mb-8">
                Recomendado
              </div>
            )}
            <h3 className="text-xl font-headline font-bold text-primary mb-2">{plan.name}</h3>
            <p className="text-sm text-on-surface-variant mb-6">{plan.description}</p>
            <div className="mb-8">
              <span className="text-4xl font-extrabold text-primary">
                {plan.price !== "Consultar" ? `$${plan.price}` : plan.price}
              </span>
              {plan.price !== "Consultar" && <span className="text-on-surface-variant ml-1">/mes</span>}
            </div>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex} className={`flex items-center gap-2 text-sm ${!feature.included && 'opacity-40'}`}>
                  {feature.included ? (
                    <Check className="text-primary" size={18} />
                  ) : (
                    <X size={18} />
                  )}
                  {feature.text}
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
              plan.highlight 
                ? 'bg-primary text-white hover:bg-primary-container' 
                : 'border border-primary text-primary hover:bg-primary/5'
            }`}>
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
