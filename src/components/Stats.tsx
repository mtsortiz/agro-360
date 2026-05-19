import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2, TrendingUp, Users } from 'lucide-react';

const stats = [
  { value: "+500", label: "Establecimientos Activos", desc: "Campos digitalizados de punta a punta", icon: ShieldCheck, color: "text-[#1A6B37]" },
  { value: "+150K", label: "Cabezas de Ganado", desc: "Trazadas con caravanas RFID y manuales", icon: Users, color: "text-[#E8963A]" },
  { value: "91%", label: "Cobertura Sanitaria Promedio", desc: "En vacunaciones, tactos y tratamientos", icon: CheckCircle2, color: "text-blue-600" },
  { value: "+28%", label: "Eficiencia Reproductiva", desc: "Aumento de preñez promedio el primer año", icon: TrendingUp, color: "text-emerald-600" }
];

export default function Stats() {
  return (
    <section className="bg-white py-16 px-6 border-y border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col p-6 rounded-2xl bg-surface/50 border border-neutral-100 hover:shadow-xs transition-shadow"
              >
                <div className={`w-10 h-10 rounded-xl bg-white shadow-xs border border-neutral-100 flex items-center justify-center mb-4 ${stat.color}`}>
                  <Icon size={20} />
                </div>
                <span className="text-4xl font-extrabold tracking-tight text-primary-container font-headline">
                  {stat.value}
                </span>
                <span className="text-sm font-bold text-on-surface mt-2">
                  {stat.label}
                </span>
                <span className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                  {stat.desc}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
