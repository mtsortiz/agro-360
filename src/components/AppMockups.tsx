import React, { useState } from 'react';
import { LayoutDashboard, Users, PlusCircle, HeartPulse, Settings, Search, AlertCircle, Calendar, ArrowLeft, Check, Sparkles } from 'lucide-react';
import Logo from './Logo';

// Marco del teléfono iPhone con notch / isla dinámica y bordes curvos
export function PhoneFrame({ children, activeTab = 'dashboard' }: { children: React.ReactNode, activeTab?: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[340px] aspect-[9/19.5] bg-black rounded-[48px] p-3 shadow-2xl border-4 border-neutral-800 ring-12 ring-neutral-900 ring-offset-2 ring-offset-white">
      {/* Isla Dinámica */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-50 flex items-center justify-between px-3">
        <div className="w-1.5 h-1.5 rounded-full bg-neutral-900"></div>
        <div className="w-8 h-1 bg-neutral-900 rounded-full"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-blue-900/40"></div>
      </div>
      
      {/* Cámara frontal sutil */}
      <div className="absolute top-5.5 left-1/2 translate-x-4 w-1.5 h-1.5 rounded-full bg-neutral-900/60 z-50"></div>

      {/* Pantalla Interna */}
      <div className="w-full h-full bg-[#F5F5F0] rounded-[38px] overflow-hidden flex flex-col relative text-xs select-none">
        {children}
      </div>
    </div>
  );
}

// 1. Dashboard Mockup
export function DashboardMockup() {
  return (
    <div className="flex flex-col h-full overflow-y-auto pb-14">
      {/* Header Verde */}
      <div className="bg-[#14532D] text-white pt-9 pb-4 px-4 rounded-b-[24px]">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-sm tracking-tight">Campo<span className="text-[#22C55E]">Digital</span></span>
          </div>
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-0.5 border border-white/20">
            <Logo className="w-full h-full" />
          </div>
        </div>
        <div>
          <p className="text-[10px] text-white/70">Buen día, Roberto</p>
          <h4 className="font-bold text-sm">La Esperanza</h4>
          <span className="inline-block bg-[#1A6B37] text-[9px] font-semibold px-2 py-0.5 rounded-full mt-1.5 text-white/90">
            RENSPA 06.168.0.00234/00
          </span>
        </div>
      </div>

      {/* Alertas */}
      <div className="px-3 mt-3 space-y-2">
        <div className="bg-[#FEF3E2] border border-[#E8963A]/30 p-2.5 rounded-xl flex justify-between items-center shadow-xs">
          <div>
            <h5 className="font-bold text-[#A16207] text-[10px]">Campaña aftosa SENASA</h5>
            <p className="text-[9px] text-[#A16207]/80">Vence en 12 días - Lotes 2, 3 y 4</p>
          </div>
          <span className="bg-[#E8963A] text-white font-bold text-[9px] px-2 py-1 rounded-lg">14 animales</span>
        </div>

        <div className="bg-[#FEF3E2] border border-[#E8963A]/30 p-2.5 rounded-xl flex justify-between items-center shadow-xs">
          <div>
            <h5 className="font-bold text-[#A16207] text-[10px]">Campaña aftosa SENASA</h5>
            <p className="text-[9px] text-[#A16207]/80">Vence en 12 días - Lotes 2, 3 y 4</p>
          </div>
          <span className="bg-[#E8963A] text-white font-bold text-[9px] px-2 py-1 rounded-lg">14 animales</span>
        </div>
      </div>

      {/* Métricas Principales */}
      <div className="grid grid-cols-3 gap-2 px-3 mt-3">
        <div className="bg-white p-2.5 rounded-xl text-center shadow-xs border border-neutral-100">
          <p className="text-lg font-extrabold text-[#1C1E1B]">342</p>
          <p className="text-[9px] text-neutral-500 font-medium">Total animales</p>
        </div>
        <div className="bg-white p-2.5 rounded-xl text-center shadow-xs border border-neutral-100">
          <p className="text-lg font-extrabold text-[#1C1E1B]">78%</p>
          <p className="text-[9px] text-neutral-500 font-medium">Tasa preñez</p>
        </div>
        <div className="bg-white p-2.5 rounded-xl text-center shadow-xs border border-neutral-100">
          <p className="text-lg font-extrabold text-[#1C1E1B]">0.9</p>
          <p className="text-[9px] text-neutral-500 font-medium">prom. kg/d</p>
        </div>
      </div>

      {/* Card Animales */}
      <div className="mx-3 mt-3 bg-white p-3 rounded-xl shadow-xs border border-neutral-100 flex justify-between items-center">
        <div>
          <h5 className="font-bold text-[#1C1E1B]">Animales</h5>
          <p className="text-[9px] text-neutral-500">Ficha individual, búsqueda y trazabilidad completa de cada cabeza</p>
        </div>
      </div>

      {/* Cards de Alertas Sanitarias (2x2) */}
      <div className="grid grid-cols-2 gap-2 px-3 mt-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white p-2.5 rounded-xl shadow-xs border border-neutral-100 relative">
            <div className="absolute top-2.5 right-2.5 text-red-500">
              <AlertCircle size={14} fill="currentColor" className="text-white fill-red-500" />
            </div>
            <h6 className="font-bold text-[#1C1E1B] text-[10px]">Alerta {i}</h6>
            <p className="text-[8.5px] text-neutral-500 mt-1 leading-normal">
              Campaña sanitaria pendiente de validación en lote {i}.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// 2. Animales Mockup
export function AnimalesMockup() {
  const categories = ['Todos 342', 'Vacas 128', 'Novillos 96', 'Terneros 84'];
  const animals = [
    { id: 'AR 0040-1823', category: 'Vaca', details: 'Angus - Lote 2 - Potrero norte', weight: '482 Kg', diff: '+0.9 kg/d', color: 'bg-green-100 text-green-700' },
    { id: 'AR 0040-2241', category: 'Novillo', details: 'Hereford - Lote 4 - Potrero sur', weight: '318 Kg', diff: '+1.3 kg/d', color: 'bg-blue-100 text-blue-700' },
    { id: 'AR 0040-3301', category: 'Ternero', details: 'Braford - Lote 1 - Nacido 12/feb', weight: '187 Kg', diff: '+1.3 kg/d', color: 'bg-amber-100 text-amber-700' },
    { id: 'AR 0040-3318', category: 'Ternero', details: 'Braford - Lote 1 - Nacido 18/feb', weight: '172 Kg', diff: '-0.6 kg/d', color: 'bg-amber-100 text-amber-700', isNegative: true }
  ];

  return (
    <div className="flex flex-col h-full overflow-y-auto pb-14">
      {/* Header Verde */}
      <div className="bg-[#14532D] text-white pt-9 pb-3 px-3 rounded-b-[20px]">
        <div className="text-center mb-2">
          <h4 className="font-bold text-sm">Animales</h4>
          <p className="text-[9px] text-white/70">342 cabezas - La Esperanza</p>
        </div>
        <div className="relative mt-2">
          <Search size={12} className="absolute left-2.5 top-2.5 text-white/50" />
          <input 
            type="text" 
            placeholder="Buscar por caravana, raza, lote..." 
            disabled
            className="w-full bg-[#1A6B37] text-white placeholder-white/50 text-[10px] pl-8 pr-3 py-2 rounded-lg border-none focus:outline-none"
          />
        </div>
      </div>

      {/* Chips horizontales */}
      <div className="flex gap-1.5 px-3 py-2.5 overflow-x-auto scrollbar-none">
        {categories.map((c, i) => (
          <span 
            key={i} 
            className={`whitespace-nowrap px-2.5 py-1 rounded-full text-[9px] font-bold ${
              i === 0 ? 'bg-[#1A6B37] text-white' : 'bg-white text-neutral-600 border border-neutral-200'
            }`}
          >
            {c}
          </span>
        ))}
      </div>

      {/* Lista */}
      <div className="px-3 space-y-2 flex-grow">
        <p className="text-[9px] text-neutral-400 font-semibold uppercase">Con alertas sanitarias</p>
        
        {animals.map((a, i) => (
          <div key={i} className="bg-white p-2.5 rounded-xl shadow-xs border border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center font-bold text-neutral-400 text-[10px]">
                🐮
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-[#1C1E1B] text-[10px]">{a.id}</span>
                  <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${a.color}`}>
                    {a.category}
                  </span>
                </div>
                <p className="text-[8px] text-neutral-400 mt-0.5">{a.details}</p>
              </div>
            </div>
            
            <div className="text-right">
              <span className="font-bold text-neutral-800 block text-[10px]">{a.weight}</span>
              <span className={`text-[8.5px] font-bold ${a.isNegative ? 'text-red-500' : 'text-green-600'}`}>
                {a.diff}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Botón Flotante */}
      <button className="absolute bottom-16 right-4 w-10 h-10 rounded-full bg-[#1A6B37] text-white flex items-center justify-center shadow-lg active:scale-95 cursor-pointer">
        <PlusCircle size={20} />
      </button>
    </div>
  );
}

// 3. Sanidad Mockup
export function SanidadMockup() {
  return (
    <div className="flex flex-col h-full overflow-y-auto pb-14">
      {/* Header Verde */}
      <div className="bg-[#14532D] text-white pt-9 pb-3 px-3 rounded-b-[20px]">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-bold text-sm">Sanidad</h4>
            <p className="text-[9px] text-white/70">La Esperanza</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-0.5">
            <Logo className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* Chips de Métricas de Sanidad */}
      <div className="grid grid-cols-3 gap-1.5 px-3 mt-3">
        <div className="bg-white p-2 rounded-xl text-center shadow-xs border border-neutral-100">
          <p className="text-sm font-extrabold text-[#1A6B37]">91%</p>
          <p className="text-[8px] text-neutral-500">Cobertura vacunal</p>
        </div>
        <div className="bg-white p-2 rounded-xl text-center shadow-xs border border-neutral-100">
          <p className="text-sm font-extrabold text-red-500">2</p>
          <p className="text-[8px] text-neutral-500">Alertas Activas</p>
        </div>
        <div className="bg-white p-2 rounded-xl text-center shadow-xs border border-neutral-100">
          <p className="text-sm font-extrabold text-neutral-800">14</p>
          <p className="text-[8px] text-neutral-500">Eventos este mes</p>
        </div>
      </div>

      {/* Alertas Detalladas */}
      <div className="px-3 mt-3 space-y-2">
        <p className="text-[9px] text-neutral-400 font-semibold uppercase">Alertas</p>
        
        <div className="bg-red-50/50 border border-red-200 p-2.5 rounded-xl relative">
          <h5 className="font-bold text-red-700 text-[10px]">Campaña aftosa - vence en 12 días</h5>
          <p className="text-[8px] text-red-700/80 mt-0.5">Lotes 2, 3 y 4 - SENASA obligatoria</p>
          <p className="text-[7.5px] text-neutral-400 mt-1">Último registro: 04/nov/2024</p>
          <div className="flex justify-between items-center mt-2">
            <span className="bg-red-100 text-red-700 text-[8px] font-bold px-1.5 py-0.5 rounded">14 animales</span>
            <span className="text-[#1A6B37] font-bold text-[8.5px] cursor-pointer">Registrar</span>
          </div>
        </div>

        <div className="bg-amber-50/50 border border-amber-200 p-2.5 rounded-xl relative">
          <h5 className="font-bold text-amber-700 text-[10px]">Antiparasitario - próximo en 8 días</h5>
          <p className="text-[8px] text-amber-700/80 mt-0.5">Lote 1 - Recría - Ivermectina 1%</p>
          <p className="text-[7.5px] text-neutral-400 mt-1">Rotación programada</p>
          <div className="flex justify-between items-center mt-2">
            <span className="bg-amber-100 text-amber-700 text-[8px] font-bold px-1.5 py-0.5 rounded">28 animales</span>
            <span className="text-[#1A6B37] font-bold text-[8.5px] cursor-pointer">Programar</span>
          </div>
        </div>
      </div>

      {/* Calendario Mayo 2026 */}
      <div className="mx-3 mt-3 bg-white p-3 rounded-xl border border-neutral-100 shadow-xs">
        <h5 className="font-bold text-[#1C1E1B] text-[9.5px] mb-2 flex justify-between items-center">
          <span>CALENDARIO MAYO 2026</span>
          <span className="text-[8.5px] text-neutral-400 font-medium">May 2026</span>
        </h5>
        {/* Grilla de Calendario de la Imagen */}
        <div className="grid grid-cols-7 gap-1 text-center text-[8px]">
          {['D', 'L', 'M', 'X', 'J', 'V', 'S'].map(d => (
            <span key={d} className="text-neutral-400 font-bold">{d}</span>
          ))}
          {/* Vacíos antes */}
          {Array(4).fill(null).map((_, i) => <span key={i}></span>)}
          {/* Días del mes simplificados */}
          <span className="py-0.5">1</span>
          <span className="py-0.5 font-bold text-green-600 relative after:content-[''] after:w-0.5 after:h-0.5 after:bg-green-600 after:rounded-full after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2">2</span>
          <span className="py-0.5">3</span>
          
          <span className="py-0.5">4</span>
          <span className="py-0.5">5</span>
          <span className="py-0.5">6</span>
          <span className="py-0.5">7</span>
          <span className="py-0.5">8</span>
          <span className="py-0.5 font-bold text-green-600 relative after:content-[''] after:w-0.5 after:h-0.5 after:bg-green-600 after:rounded-full after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2">9</span>
          <span className="py-0.5">10</span>
          
          <span className="py-0.5">11</span>
          <span className="py-0.5">12</span>
          <span className="py-0.5 font-bold text-red-500 relative after:content-[''] after:w-0.5 after:h-0.5 after:bg-red-500 after:rounded-full after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2">13</span>
          <span className="py-0.5">14</span>
          <span className="py-0.5 bg-[#14532D] text-white font-bold rounded-full w-4 h-4 mx-auto flex items-center justify-center">15</span>
          <span className="py-0.5">16</span>
          <span className="py-0.5">17</span>
          
          <span className="py-0.5">18</span>
          <span className="py-0.5">19</span>
          <span className="py-0.5">20</span>
          <span className="py-0.5">21</span>
          <span className="py-0.5 font-bold text-red-500 relative after:content-[''] after:w-0.5 after:h-0.5 after:bg-red-500 after:rounded-full after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2">22</span>
          <span className="py-0.5">23</span>
          <span className="py-0.5">24</span>
        </div>
        <div className="flex gap-2.5 mt-2 justify-center text-[7.5px] text-neutral-400">
          <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-green-500"></span>Vacunación</span>
          <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-red-500"></span>Vence campaña</span>
        </div>
      </div>

      {/* Botón Flotante */}
      <button className="absolute bottom-16 right-4 bg-[#1A6B37] text-white font-bold px-3 py-2 rounded-full shadow-lg flex items-center gap-1 text-[9px] active:scale-95 cursor-pointer">
        Registrar evento
      </button>
    </div>
  );
}

// 4. Formulario Mockup
export function FormularioMockup() {
  return (
    <div className="flex flex-col h-full overflow-y-auto pb-14">
      {/* Header Verde */}
      <div className="bg-[#14532D] text-white pt-9 pb-3 px-3 rounded-b-[20px] flex items-center gap-3">
        <ArrowLeft size={16} className="cursor-pointer" />
        <h4 className="font-bold text-xs">Agregar Animal</h4>
      </div>

      {/* Formulario */}
      <div className="p-3 space-y-3">
        {/* Identificación */}
        <div className="bg-white p-3 rounded-xl border border-neutral-100 shadow-xs space-y-2">
          <h5 className="font-bold text-[#1A6B37] text-[10px]">Identificación</h5>
          <div>
            <label className="text-[7.5px] uppercase font-bold text-neutral-400 block mb-0.5">CARAVANA (AR)</label>
            <input 
              type="text" 
              placeholder="# Ej: 0040-1234" 
              disabled
              className="w-full bg-[#FAFAF7] border border-neutral-200 rounded px-2 py-1.5 text-[9px] focus:outline-none"
            />
          </div>
          <div>
            <label className="text-[7.5px] uppercase font-bold text-neutral-400 block mb-1">CATEGORÍA</label>
            <div className="flex gap-1.5 flex-wrap">
              {['Vaca', 'Novillo', 'Ternero', 'Toro'].map((cat, i) => (
                <span 
                  key={i} 
                  className={`px-2 py-0.5 rounded-full text-[8.5px] border ${
                    i === 1 ? 'bg-blue-50 border-blue-200 text-blue-700 font-semibold' : 'bg-[#FAFAF7] border-neutral-200 text-neutral-500'
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Genética y Físico */}
        <div className="bg-white p-3 rounded-xl border border-neutral-100 shadow-xs space-y-2">
          <h5 className="font-bold text-[#1A6B37] text-[10px]">Genética y Físico</h5>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[7.5px] uppercase font-bold text-neutral-400 block mb-0.5">RAZA</label>
              <select disabled className="w-full bg-[#FAFAF7] border border-neutral-200 rounded px-2 py-1 text-[9px]">
                <option>Angus</option>
              </select>
            </div>
            <div>
              <label className="text-[7.5px] uppercase font-bold text-neutral-400 block mb-0.5">PESO ACTUAL (KG)</label>
              <input type="text" placeholder="0" disabled className="w-full bg-[#FAFAF7] border border-neutral-200 rounded px-2 py-1 text-[9px]" />
            </div>
          </div>
        </div>

        {/* Ubicación */}
        <div className="bg-white p-3 rounded-xl border border-neutral-100 shadow-xs space-y-2">
          <h5 className="font-bold text-[#1A6B37] text-[10px]">Ubicación</h5>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[7.5px] uppercase font-bold text-neutral-400 block mb-0.5">LOTE</label>
              <select disabled className="w-full bg-[#FAFAF7] border border-neutral-200 rounded px-2 py-1 text-[9px]">
                <option>Lote 1</option>
              </select>
            </div>
            <div>
              <label className="text-[7.5px] uppercase font-bold text-neutral-400 block mb-0.5">POTRERO</label>
              <select disabled className="w-full bg-[#FAFAF7] border border-neutral-200 rounded px-2 py-1 text-[9px]">
                <option>Seleccione Lote</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Barra de navegación inferior que se repite en todas las pantallas
export function PhoneNavBar({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
  const tabs = [
    { id: 'dashboard', label: 'Inicio', icon: LayoutDashboard },
    { id: 'animals', label: 'Animales', icon: Users },
    { id: 'register', label: 'Registrar', icon: PlusCircle },
    { id: 'health', label: 'Sanidad', icon: HeartPulse },
    { id: 'settings', label: 'Ajustes', icon: Settings },
  ];

  return (
    <div className="absolute bottom-0 w-full bg-white border-t border-neutral-200/80 px-2 py-1 flex justify-around items-center z-40 rounded-b-[38px] h-13">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center justify-center gap-0.5 py-1 text-center cursor-pointer transition-colors ${
              isActive ? 'text-[#1A6B37]' : 'text-neutral-400 hover:text-neutral-600'
            }`}
          >
            <Icon size={16} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[7px] font-bold tracking-tight">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// Componente Wrapper Interactivo para la landing page
export default function AppInteractiveMockup() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <PhoneFrame activeTab={activeTab}>
      {activeTab === 'dashboard' && <DashboardMockup />}
      {activeTab === 'animals' && <AnimalesMockup />}
      {activeTab === 'register' && <FormularioMockup />}
      {activeTab === 'health' && <SanidadMockup />}
      {activeTab === 'settings' && (
        <div className="flex flex-col h-full items-center justify-center p-6 text-center text-neutral-500">
          <Logo className="w-12 h-12 mb-3" />
          <h5 className="font-bold text-[#1C1E1B]">Configuración de CampoDigital</h5>
          <p className="text-[9px] mt-1">
            Establecimientos, balanzas bluetooth, integraciones de caravanas RFID y más.
          </p>
        </div>
      )}
      <PhoneNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </PhoneFrame>
  );
}
