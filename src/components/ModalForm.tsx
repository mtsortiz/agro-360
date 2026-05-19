import React, { useState } from 'react';
import { X, CheckCircle2, User, Mail, Phone, ArrowRight, Loader2 } from 'lucide-react';

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalForm({ isOpen, onClose }: ModalFormProps) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !apellido || !email) return;

    setIsSubmitting(true);

    const webappUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEBAPP_URL || '';

    if (webappUrl) {
      try {
        await fetch(webappUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: nombre,
            lname: apellido,
            mail: email,
            cel: whatsapp
          })
        });
      } catch (error) {
        console.error("Error al enviar a Google Sheets:", error);
      }
    } else {
      // Simular delay de envío local si no hay URL configurada
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setNombre('');
    setApellido('');
    setEmail('');
    setWhatsapp('');
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background Overlay with Glassmorphism */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
        onClick={handleReset}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-surface border border-white/40 rounded-3xl shadow-2xl overflow-hidden z-10 transform transition-all duration-300 scale-100 flex flex-col max-h-[90vh]">
        
        {/* Decorative Top Accent Bar */}
        <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary-container" />

        {/* Close Button */}
        <button 
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/60 hover:bg-white text-gray-700 hover:text-primary transition-all duration-200 border border-gray-100 hover:scale-105 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div className="p-6 md:p-8 overflow-y-auto">
            {/* Header */}
            <div className="mb-5 text-center">
              <div className="inline-flex items-center justify-center p-2.5 bg-primary/10 rounded-2xl mb-3">
                <img src="/logo.png" alt="CampoDigital Logo" className="w-10 h-10 object-contain" />
              </div>
              <h2 className="text-xl md:text-2xl font-extrabold text-primary font-display leading-tight">
                Obtené CampoDigital
              </h2>
              <p className="text-gray-600 mt-1 text-xs md:text-sm leading-relaxed max-w-sm mx-auto">
                Completá tus datos para recibir acceso prioritario a la app y una demo gratuita para tu establecimiento.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nombre & Apellido Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-semibold text-gray-700 uppercase tracking-wider block">
                    Nombre <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                      <User className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Juan"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all text-xs font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-semibold text-gray-700 uppercase tracking-wider block">
                    Apellido <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                      <User className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Pérez"
                      value={apellido}
                      onChange={(e) => setApellido(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all text-xs font-sans"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-[10px] font-semibold text-gray-700 uppercase tracking-wider block">
                  Correo Electrónico <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    type="email"
                    required
                    placeholder="juan.perez@campo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all text-xs font-sans"
                  />
                </div>
              </div>

              {/* WhatsApp (Opcional) */}
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-semibold text-gray-700 uppercase tracking-wider">
                    WhatsApp
                  </label>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider bg-gray-100 px-1.5 py-0.5 rounded">
                    Opcional
                  </span>
                </div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <Phone className="w-4 h-4" />
                  </span>
                  <input
                    type="tel"
                    placeholder="+54 9 11 1234 5678"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all text-xs font-sans"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 bg-gradient-to-r from-primary to-primary-container hover:from-primary-container hover:to-primary text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer font-sans text-xs disabled:opacity-75 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Procesando solicitud...</span>
                  </>
                ) : (
                  <>
                    <span>Solicitar</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="p-8 md:p-10 text-center flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-primary/15 rounded-full flex items-center justify-center mb-6 animate-bounce">
              <CheckCircle2 className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-extrabold text-primary font-display mb-3">
              ¡Solicitud Recibida!
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-sm mb-8">
              Gracias, <strong>{nombre}</strong>! En breve nos comunicaremos con vos.
            </p>
            <button
              onClick={handleReset}
              className="w-full max-w-xs bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all cursor-pointer font-sans text-sm hover:scale-102"
            >
              Entendido
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
