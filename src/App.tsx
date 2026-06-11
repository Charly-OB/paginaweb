import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- PALETA DE COLORES KIKUBA ---
// Principal Oscuro: #25302B
// Principal Claro/Texto: #EFE8D7
// Acento Verde: #A9B99B
// Acento Dorado/Detalles: #D8C7A6

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#25302B] text-[#EFE8D7] font-sans selection:bg-[#A9B99B] selection:text-[#25302B] overflow-x-hidden relative">
      {/* Efecto de grano digital sutil en el fondo */}
      <div className="pointer-events-none absolute inset-0 z-50 bg-[url('https://godaylight.com/_next/image?url=%2Fgrain-2.jpg&w=640&q=75')] bg-repeat opacity-[0.03] mix-blend-overlay" />

      {/* NAVBAR FLOTANTE (Estilo Daylight Premium) */}
      <header className="fixed top-6 left-0 right-0 z-40 px-4 md:px-8">
        <nav className="max-w-5xl mx-auto bg-[#25302B]/70 backdrop-blur-md border border-[#EFE8D7]/10 rounded-full py-3 px-6 flex items-center justify-between transition-all duration-300 hover:border-[#EFE8D7]/20">
          <a href="#" className="font-serif text-xl font-medium tracking-tight text-[#EFE8D7]">
            kikuba<span className="text-[#A9B99B]">.</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase text-[#EFE8D7]/80">
            <a href="#enfoque" className="hover:text-[#A9B99B] transition-colors">Enfoque</a>
            <a href="#servicios" className="hover:text-[#A9B99B] transition-colors">Servicios</a>
            <a href="#proyectos" className="hover:text-[#A9B99B] transition-colors">Casos</a>
          </div>

          <a 
            href="https://wa.me/message/KIKUBA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#EFE8D7] text-[#25302B] px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#A9B99B] hover:text-[#25302B] transition-all duration-300"
          >
            Iniciar Proyecto
          </a>
        </nav>
      </header>

      {/* HERO SECTION (Tipografía Agresiva e Imponente) */}
      <section className="min-h-screen pt-32 flex flex-col justify-center px-6 md:px-12 max-w-6xl mx-auto relative isolate">
        {/* Fondo Geométrico de Rejilla sutil */}
        <div className="absolute inset-0 -z-10 grid grid-cols-4 md:grid-cols-6 border-l border-r border-[#EFE8D7]/5 pointer-events-none">
          <div className="border-r border-[#EFE8D7]/5 hidden md:block" />
          <div className="border-r border-[#EFE8D7]/5" />
          <div className="border-r border-[#EFE8D7]/5" />
          <div className="border-r border-[#EFE8D7]/5" />
          <div className="border-r border-[#EFE8D7]/5 hidden md:block" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <small className="font-mono text-xs uppercase tracking-widest text-[#A9B99B]">
              Taller Boutique de Software & Automatizaciones
            </small>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#EFE8D7] leading-[0.95] tracking-tight">
              Tecnología que <br />
              <span className="text-[#D8C7A6]">entiende</span> tu operación.
            </h1>
            <p className="text-lg md:text-xl text-[#EFE8D7]/70 max-w-xl font-light leading-relaxed mt-4">
              Diseñamos e implementamos sistemas a medida y arquitecturas de datos robustas para negocios que buscan escalar sin fricción.
            </p>
            <div className="mt-6">
              <a 
                href="#servicios" 
                className="inline-flex items-center gap-3 border border-[#EFE8D7]/20 px-6 py-4 rounded-full text-sm font-medium tracking-wide uppercase hover:bg-[#EFE8D7] hover:text-[#25302B] hover:border-[#EFE8D7] transition-all duration-500 group"
              >
                Explorar Capacidades
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
          
          {/* Gráfico Geométrico Animado (Derecha) */}
          <div className="lg:col-span-4 hidden lg:flex justify-center justify-end relative">
            <div className="w-72 h-72 border border-[#A9B99B]/20 rounded-full flex items-center justify-center animate-[spin_40s_linear_infinite]">
              <div className="w-56 h-56 border border-[#D8C7A6]/30 border-dashed rounded-full flex items-center justify-center">
                <div className="w-32 h-32 bg-[#A9B99B]/10 rounded-full backdrop-blur-sm flex items-center justify-center">
                  <span className="font-mono text-xs text-[#D8C7A6]">KKB // PWA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN NUEVA: ¿PARA QUIÉN ES KIKUBA? (Audit Fix) */}
      <section id="enfoque" className="py-24 border-t border-[#EFE8D7]/10 bg-[#25302B]/30 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#A9B99B] block mb-4">// Idoneidad</span>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight leading-tight">¿Para quién construimos?</h2>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-8">
            {[
              "Empresas operativas atrapadas en hojas de cálculo que necesitan centralizar su gestión.",
              "Modelos de negocio únicos cuyas necesidades no se cubren con un software comercial genérico.",
              "Fundadores y CEOs que valoran el código limpio, escalable y la propiedad absoluta de su infraestructura.",
              "Talleristas y negocios de servicios estéticos o barismo que buscan automatizar flujos de reserva y calibración."
            ].map((text, idx) => (
              <div key={idx} className="flex gap-4 items-start border-b border-[#EFE8D7]/5 pb-6 last:border-0">
                <span className="font-mono text-sm text-[#D8C7A6] pt-1">0{idx + 1}.</span>
                <p className="text-base md:text-lg text-[#EFE8D7]/80 font-light leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN: MÉTODO (Sticky Process Layout) */}
      <section className="py-32 border-t border-[#EFE8D7]/10 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-[#A9B99B] block mb-2">El Manifiesto</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight">Artesanía e Ingeniería Digital</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Observamos", desc: "Analizamos tus cuellos de botella operativos y flujos de trabajo actuales directamente en la raíz." },
            { step: "02", title: "Diseñamos", desc: "Estructuramos una solución a la medida enfocada en la experiencia de usuario y la eficiencia backend." },
            { step: "03", title: "Construimos", desc: "Desarrollamos código limpio, modularizado y optimizado utilizando tecnologías modernas y estables." }
          ].map((item, idx) => (
            <div key={idx} className="border border-[#EFE8D7]/10 rounded-xl p-8 bg-[#25302B]/50 flex flex-col gap-6 hover:border-[#A9B99B]/30 transition-all duration-300">
              <span className="font-mono text-xs text-[#A9B99B] uppercase tracking-wider">Fase // {item.step}</span>
              <h3 className="font-serif text-2xl tracking-tight text-[#D8C7A6]">{item.title}</h3>
              <p className="text-sm text-[#EFE8D7]/70 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN: CAPACIDADES (La Cuadrícula de Líneas Finas) */}
      <section id="servicios" className="py-32 border-t border-[#EFE8D7]/10 bg-[#25302B]/20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#A9B99B] block mb-2">Capacidades</span>
              <h2 className="font-serif text-4xl md:text-5xl tracking-tight">Servicios del Taller</h2>
            </div>
            <p className="text-sm text-[#EFE8D7]/60 max-w-xs font-light">Soluciones modulares e integraciones limpias sin código basura.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#EFE8D7]/10">
            {[
              { t: "Desarrollo Full-Stack", d: "Aplicaciones web modernas y PWAs ultrarrápidas construidas con React, Node.js y bases de datos robustas." },
              { t: "Automatización de Flujos", d: "Eliminamos tareas repetitivas conectando tus herramientas diarias (CRMs, mensajería, APIs) sin esfuerzo humano." },
              { t: "Análisis de Datos", d: "Bootstrapping de tableros de control y pipelines de datos estructurados para tomar decisiones basadas en métricas reales." }
            ].map((srv, i) => (
              <div key={i} className="border-r border-b border-[#EFE8D7]/10 p-8 flex flex-col justify-between min-h-[260px] hover:bg-[#EFE8D7]/5 transition-colors duration-300">
                <span className="font-mono text-xs text-[#D8C7A6]">0{i+1} // CAP</span>
                <div className="mt-8">
                  <h3 className="font-serif text-xl mb-4 tracking-tight">{srv.t}</h3>
                  <p className="text-xs text-[#EFE8D7]/70 font-light leading-relaxed">{srv.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN: CASOS DE ÉXITO */}
      <section id="proyectos" className="py-32 border-t border-[#EFE8D7]/10 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-[#A9B99B] block mb-2">Selected Work</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight">Sistemas en Producción</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { name: "Dial App PWA", type: "Barista Espresso Calibration System", desc: "Aplicación web progresiva diseñada para la calibración exacta de extracciones de espresso en tiempo real." },
            { name: "Sie7e Beauty Room Backend", type: "Digital Management & Booking Engine", desc: "Estructura de backend y automatización de flujos de reserva para optimizar la retención de clientes." }
          ].map((proj, idx) => (
            <div key={idx} className="group cursor-pointer flex flex-col gap-4">
              <div className="aspect-video w-full bg-[#EFE8D7]/5 border border-[#EFE8D7]/10 rounded-lg overflow-hidden relative flex items-center justify-center transition-all duration-500 group-hover:border-[#A9B99B]/40">
                <span className="font-mono text-xs text-[#EFE8D7]/30 tracking-widest uppercase">Asset Link Matrix</span>
              </div>
              <div className="flex justify-between items-start mt-2">
                <div>
                  <h3 className="font-serif text-xl tracking-tight text-[#EFE8D7] group-hover:text-[#A9B99B] transition-colors">{proj.name}</h3>
                  <p className="font-mono text-[11px] text-[#A9B99B] uppercase mt-1">{proj.type}</p>
                </div>
                <span className="text-[#EFE8D7]/40 font-light text-sm group-hover:text-[#EFE8D7] transition-colors">↗</span>
              </div>
              <p className="text-xs text-[#EFE8D7]/70 font-light leading-relaxed max-w-sm">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER PREMIUM */}
      <footer className="border-t border-[#EFE8D7]/10 bg-[#25302B] pt-24 pb-12 px-6 md:px-12 relative isolate">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <h2 className="font-serif text-4xl md:text-6xl tracking-tight max-w-lg leading-none">
              Construyamos el <br />
              <span className="text-[#A9B99B]">futuro operativo</span> de tu negocio.
            </h2>
            <div>
              <a 
                href="https://wa.me/message/KIKUBA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#EFE8D7] text-[#25302B] px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-[#A9B99B] hover:text-[#25302B] transition-all duration-300 inline-block text-center"
              >
                Hablar con un Desarrollador
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#EFE8D7]/5 pt-12 gap-6">
            <p className="font-mono text-[11px] text-[#EFE8D7]/40 uppercase tracking-wider">
              &copy; 2026 Kikuba Workshop. Todos los derechos reservados.
            </p>
            <div className="flex gap-8 font-mono text-[11px] text-[#EFE8D7]/60 uppercase tracking-wider">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#A9B99B]">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#A9B99B]">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}