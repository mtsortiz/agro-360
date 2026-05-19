import { motion } from "motion/react";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Básico",
    description: "Para pequeños productores familiares.",
    price: "12.500",
    features: [
      { text: "Hasta 200 animales", included: true },
      { text: "Trazabilidad por lote e individual", included: true },
      { text: "Alertas sanitarias", included: true },
      { text: "Sincronización sin conexión", included: true },
      { text: "Asistente CampoDigital AI", included: false },
    ],
    cta: "Comenzar Gratis",
    highlight: false
  },
  {
    name: "Profesional",
    description: "Gestión avanzada y control total del campo.",
    price: "32.000",
    features: [
      { text: "Hasta 1500 animales", included: true },
      { text: "Trazabilidad por lote e individual", included: true },
      { text: "Alertas sanitarias & SENASA", included: true },
      { text: "Calendario y plan sanitario completo", included: true },
      { text: "Conectividad con balanzas Bluetooth", included: true },
      { text: "Asistente CampoDigital AI Incluido", included: true },
    ],
    cta: "Suscribirse",
    highlight: true
  },
  {
    name: "Corporativo",
    description: "Establecimientos múltiples y consorcios.",
    price: "Consultar",
    features: [
      { text: "Animales ilimitados", included: true },
      { text: "Multi-usuario con roles y permisos", included: true },
      { text: "Integración con balanzas de tolva y API", included: true },
      { text: "Soporte agronómico dedicado 24/7", included: true },
      { text: "Capacitación a operarios de campo", included: true },
    ],
    cta: "Contactar Soporte",
    highlight: false
  }
];

export default function Pricing({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-16">
      <div className="text-center mb-16">
        <span className="text-accent font-bold uppercase tracking-widest text-xs">Suscripciones</span>
        <h2 className="text-4xl font-headline font-extrabold text-primary-container mt-2">Planes a tu medida</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`p-8 rounded-3xl border flex flex-col relative ${
              plan.highlight 
                ? 'bg-white border-accent ring-2 ring-accent scale-105 shadow-lg z-10' 
                : 'bg-white border-neutral-100 shadow-xs'
            }`}
          >
            {plan.highlight && (
              <div className="bg-accent text-white text-[9px] font-bold uppercase tracking-widest px-4 py-1 rounded-full w-fit mx-auto absolute -top-3.5 left-1/2 -translate-x-1/2 shadow-xs">
                Recomendado
              </div>
            )}
            <h3 className="text-xl font-headline font-bold text-primary-container mb-2 mt-2">{plan.name}</h3>
            <p className="text-xs text-on-surface-variant mb-6 leading-relaxed">{plan.description}</p>
            <div className="mb-8">
              <span className="text-4xl font-extrabold text-primary-container">
                {plan.price !== "Consultar" ? `$${plan.price}` : plan.price}
              </span>
              {plan.price !== "Consultar" && <span className="text-on-surface-variant text-xs ml-1">/mes</span>}
            </div>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex} className={`flex items-start gap-2 text-xs text-neutral-600 ${!feature.included && 'opacity-35'}`}>
                  {feature.included ? (
                    <Check className="text-primary mt-0.5 flex-shrink-0" size={16} />
                  ) : (
                    <X className="text-neutral-400 mt-0.5 flex-shrink-0" size={16} />
                  )}
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={onOpenModal}
              className={`w-full py-3.5 rounded-2xl font-bold transition-all text-xs cursor-pointer ${
                plan.highlight 
                  ? 'bg-accent text-white hover:bg-[#D97706] shadow-xs active:scale-98' 
                  : 'border border-primary text-primary hover:bg-primary/5 active:scale-98'
              }`}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
