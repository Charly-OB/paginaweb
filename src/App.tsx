import { useState } from "react";
import { 
  Menu, 
  X, 
  ArrowRight, 
  Layers, 
  Database, 
  TrendingUp, 
  Compass, 
  MapPin, 
  Sparkles, 
  MessageSquare,
  ChevronRight,
  Smartphone,
  Sliders,
  CheckCircle,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import InteractiveLaptop from "./components/InteractiveLaptop";
import ProjectPlanner from "./components/ProjectPlanner";
import OutcomesBased from "./components/OutcomesBased";

export default function App() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState<string>("React");

  // Stack of tools descriptions
  const techStack = lang === "en" ? [
    {
      name: "React",
      alias: "Frontend Development",
      desc: "Standard library for building dynamic, fast, and interactive interfaces that work with native precision on PWA and mobile viewports.",
      benefit: "Immediate loading speed, smooth transitions, and maximum responsive adaptability.",
      color: "bg-brand-orange-light/10 text-brand-orange-light border-brand-orange-light/35"
    },
    {
      name: "Supabase",
      alias: "Backend & Sync",
      desc: "Modern backend service for secure user authentication, real-time database syncing, and seamless file storage without friction.",
      benefit: "Saves weeks of infrastructure development for secure user webflows.",
      color: "bg-green-500/10 text-green-600 border-green-500/30"
    },
    {
      name: "Python",
      alias: "Automation & Scripting",
      desc: "Leading language for web scraping, complex API integrations, and automatic backoffice operations.",
      benefit: "Replaces hours of repetitive manual work with autonomous processes without oversights.",
      color: "bg-brand-yellow/15 text-brand-orange-dark border-brand-yellow/50"
    },
    {
      name: "PostgreSQL",
      alias: "Robust Database",
      desc: "The most powerful relational engine in the tech ecosystem to manage complex relations and secure transactions.",
      benefit: "Complete guarantee of transaction integrity, inventory control, and business roles.",
      color: "bg-brand-slate/10 text-brand-violet border-brand-slate/30"
    },
    {
      name: "SQL",
      alias: "Massive Data Analysis",
      desc: "Essential language for structural aggregate queries, data warehouse modeling, and financial KPIs.",
      benefit: "Enables structuring massive sales reports in fractions of a second.",
      color: "bg-brand-orange-dark/10 text-brand-orange-dark border-brand-orange-dark/30"
    }
  ] : [
    {
      name: "React",
      alias: "Desarrollo Frontend",
      desc: "Librería estándar para construir interfaces dinámicas, rápidas e interactivas que funcionan con exactitud nativa en PWA y móvil.",
      benefit: "Velocidad de carga inmediata, transiciones suaves y máxima adaptabilidad responsive.",
      color: "bg-brand-orange-light/10 text-brand-orange-light border-brand-orange-light/35"
    },
    {
      name: "Supabase",
      alias: "Backend & Sync",
      desc: "Servicio backend moderno para autenticación de usuarios seguros, base de datos en tiempo real y almacenamiento de archivos sin fricciones.",
      benefit: "Ahorra semanas de desarrollo de infraestructura para flujos de usuarios seguros.",
      color: "bg-green-500/10 text-green-600 border-green-500/30"
    },
    {
      name: "Python",
      alias: "Automatización & Scripting",
      desc: "Lenguaje líder para raspado de datos web (web scraping), integraciones de APIs complejas y scripts automáticos de backoffice.",
      benefit: "Sustituye horas de trabajo manual repetitivo por procesos autónomos sin descuidos.",
      color: "bg-brand-yellow/15 text-brand-orange-dark border-brand-yellow/50"
    },
    {
      name: "PostgreSQL",
      alias: "Base de Datos Robusta",
      desc: "El motor relacional más potente del ecosistema tecnológico para gestionar relaciones complejas y transacciones seguras.",
      benefit: "Garantía total de integridad de transacciones, inventarios y roles de negocio.",
      color: "bg-brand-slate/10 text-brand-violet border-brand-slate/30"
    },
    {
      name: "SQL",
      alias: "Análisis de Datos Masivos",
      desc: "Lenguaje esencial para aggregate queries estructurales, modelación de data warehouse y KPIs financieros.",
      benefit: "Permite estructurar reportes de venta masivos en centésimas de segundo.",
      color: "bg-brand-orange-dark/10 text-brand-orange-dark border-brand-orange-dark/30"
    }
  ];

  const selectedTechObj = techStack.find(t => t.name === selectedTech) || techStack[0];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark-text selection:bg-brand-yellow selection:text-brand-violet flex flex-col font-sans relative overflow-x-hidden">
      
      {/* Top Thin Alert Banner - Inspired by Image 2 (Minimal labels, no telemetry larping) */}
      <div className="bg-brand-violet text-brand-yellow text-xs py-2 px-4 flex justify-between items-center gap-3 font-mono border-b border-brand-violet/20">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-2 h-2 rounded-full bg-brand-orange-dark animate-pulse"></span>
          <span className="min-w-0 truncate sm:whitespace-normal">
            {lang === "en" 
              ? "Available for design projects in Ensenada and all of Mexico" 
              : "Disponible para proyectos en Ensenada y todo México"}
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span>{lang === "en" ? "WEB FULL-STACK" : "WEB FULL-STACK"}</span>
          <span>·</span>
          <span>{lang === "en" ? "DATA ANALYTICS" : "ANÁLISIS DE DATOS"}</span>
        </div>
      </div>

      {/* Main Column Grid Layout - Inspired by Image 2 & 3 editorial design */}
      <header className="sticky top-0 z-50 bg-brand-bg/90 backdrop-blur-md border-b-2 border-brand-violet/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-5 flex justify-between items-center gap-3">
          
          {/* Logo Name block */}
          <div className="space-y-0.5 min-w-0">
            <h1 className="text-base sm:text-xl font-display font-bold text-brand-violet tracking-tight flex flex-wrap items-center gap-x-2 gap-y-1 leading-tight">
              Juan Carlos Obeso
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-brand-yellow text-brand-violet font-semibold tracking-wider shrink-0">
                {lang === "en" ? "Web & Data" : "Web & Datos"}
              </span>
            </h1>
            <p className="text-[10px] sm:text-[11px] font-mono text-brand-slate tracking-wide truncate max-w-[210px] sm:max-w-none">
              {lang === "en" ? "Full-Stack Web · Data · Ensenada, BC" : "Web full-stack · Datos · Ensenada, BC"}
            </p>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs">
            <a href="#services" className="text-brand-slate hover:text-brand-violet transition-colors">
              {lang === "en" ? "01. Services" : "01. Servicios"}
            </a>
            <a href="#process" className="text-brand-slate hover:text-brand-violet transition-colors">
              {lang === "en" ? "02. Methodology" : "02. Metodología"}
            </a>
            <a href="#outcomes-based" className="text-brand-slate hover:text-brand-violet transition-colors">
              {lang === "en" ? "03. Outcomes Model" : "03. Enfoque Resultados"}
            </a>
            <a href="#about" className="text-brand-slate hover:text-brand-violet transition-colors">
              {lang === "en" ? "04. About Me" : "04. Sobre Mí"}
            </a>
            <a href="#planner-section" className="text-brand-slate hover:text-brand-violet transition-colors">
              {lang === "en" ? "05. Planner" : "05. Planificador"}
            </a>
            <a 
              href="#planner-section" 
              className="px-4 py-2 bg-brand-violet text-brand-yellow hover:bg-brand-orange-dark hover:text-brand-paper rounded transition-all font-semibold font-sans flex items-center gap-2"
            >
              <span>{lang === "en" ? "Start Project" : "Iniciar Proyecto"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Language Selector and Hamburger "Abrir menú" Button Grid */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Minimalist Switcher */}
            <div className="flex bg-brand-violet/10 border border-brand-violet/20 rounded-full p-0.5">
              <button
                type="button"
                onClick={() => setLang("es")}
                className={`px-2.5 py-0.5 text-[9px] font-mono font-bold rounded-full transition-all cursor-pointer ${
                  lang === "es"
                    ? "bg-brand-violet text-brand-yellow"
                    : "text-brand-slate hover:text-brand-violet"
                }`}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2.5 py-0.5 text-[9px] font-mono font-bold rounded-full transition-all cursor-pointer ${
                  lang === "en"
                    ? "bg-brand-violet text-brand-yellow"
                    : "text-brand-slate hover:text-brand-violet"
                }`}
              >
                EN
              </button>
            </div>

            <button
              id="menu-toggle-btn"
              onClick={() => setMenuOpen(true)}
              className="flex items-center justify-center gap-2 px-2.5 sm:px-3 py-1.5 border-2 border-brand-violet rounded font-mono text-xs text-brand-violet hover:bg-brand-orange-dark hover:text-brand-paper hover:border-brand-orange-dark transition-all duration-200 shrink-0"
            >
              <Menu className="w-4 h-4" />
              <span className="hidden sm:inline">{lang === "en" ? "Menu" : "Abrir menú"}</span>
            </button>
          </div>

        </div>
      </header>

      {/* Slide-out Menu Drawer - Pristine attention to layout & brand colors */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-[#120B16] z-50"
            />

            {/* Sidebar drawer panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-brand-paper border-l-4 border-brand-orange-dark z-50 p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center border-b border-brand-violet/10 pb-4 mb-6">
                  <div>
                    <h4 className="font-display font-bold text-brand-violet text-lg">
                      {lang === "en" ? "Navigation Menu" : "Menú de Navegación"}
                    </h4>
                    <span className="text-[10px] font-mono text-brand-slate">JUAN CARLOS OBESO</span>
                  </div>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="p-1 px-1.5 border rounded border-brand-violet/20 hover:border-brand-orange-dark text-brand-violet hover:text-brand-orange-dark transition-all"
                  >
                    <X className="w-5 h-5 inline" />
                  </button>
                </div>

                {/* Vertical Links */}
                <div className="space-y-4 font-display">
                  {[
                    { num: "01", label: lang === "en" ? "Core Services" : "Servicios Principales", href: "#services" },
                    { num: "02", label: lang === "en" ? "Methodology" : "Forma de Trabajo", href: "#process" },
                    { num: "03", label: lang === "en" ? "Outcomes Model" : "Modelo Outcomes-Based", href: "#outcomes-based" },
                    { num: "04", label: lang === "en" ? "About Juan Carlos" : "Sobre Juan Carlos", href: "#about" },
                    { num: "05", label: lang === "en" ? "Project Planner" : "Planificador de Software", href: "#planner-section" },
                    { num: "06", label: lang === "en" ? "Tech Tool Stack" : "Stack Tecnológico", href: "#stack" }
                  ].map((link, idx) => (
                    <a
                      key={idx}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between p-3 rounded-lg bg-brand-bg/60 hover:bg-brand-orange-light/10 border border-brand-violet/5 hover:border-brand-orange-light/40 transition-all duration-150"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-brand-orange-dark">{link.num}</span>
                        <span className="text-sm font-semibold text-brand-violet group-hover:text-brand-orange-dark transition-colors">{link.label}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-brand-slate group-hover:translate-x-1 transition-transform" />
                    </a>
                  ))}
                </div>

                {/* Local Info block inside sidebar */}
                <div className="mt-8 p-4 bg-brand-bg rounded-lg border border-brand-violet/10 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-brand-violet font-semibold">
                    <MapPin className="w-4 h-4 text-brand-orange-dark" />
                    <span>{lang === "en" ? "Location & Operations" : "Ubicación y Operación"}</span>
                  </div>
                  <p className="text-brand-slate leading-relaxed text-[11px]">
                    {lang === "en" ? (
                      <>
                        Direct software engineering and database consulting, with practical support for teams that need clarity before adding more tools.
                      </>
                    ) : (
                      <>
                        Desarrollo de software y consultoría de datos con soporte práctico para equipos que necesitan claridad antes de agregar más herramientas.
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Sidebar footer: compact identity note */}
              <div className="border-t border-brand-violet/10 pt-4 space-y-2">
                <p className="text-[11px] leading-relaxed text-brand-slate">
                  {lang === "en"
                    ? "Independent work, direct technical ownership, and practical scopes without agency layers."
                    : "Trabajo independiente, trato directo y alcances prácticos sin capas de agencia."}
                </p>
                <div className="text-[10px] font-mono text-brand-slate">
                  Ensenada, BC · © 2026
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* MAIN HERO LANDING CONTAINER */}
      <main className="flex-grow">
        
        {/* Section 1: Hero Cover Section with Grid Layout Design */}
        <section className="relative overflow-hidden py-10 md:py-16 lg:py-24 border-b border-brand-violet/10 px-4 sm:px-6 lg:px-8 bg-brand-paper">
          
          {/* Subtle architectural horizontal lines inspired by Image 2 design */}
          <div className="absolute inset-x-0 top-1/4 h-[1px] bg-brand-violet/5 pointer-events-none"></div>
          <div className="absolute inset-x-0 top-2/3 h-[1px] bg-brand-violet/5 pointer-events-none"></div>
          <div className="absolute left-1/3 inset-y-0 w-[1px] bg-brand-violet/5 pointer-events-none hidden md:block"></div>
          <div className="absolute left-2/3 inset-y-0 w-[1px] bg-brand-violet/5 pointer-events-none hidden md:block"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column Copywriting */}
              <div className="hero-copy lg:col-span-6 space-y-6 text-left min-w-0 w-full">
                
                {/* Visual Label indicators stacked from user's brief */}
                <div className="flex flex-wrap gap-2 items-center text-[10px] sm:text-xs">
                  <span className="px-2.5 py-1 rounded bg-brand-violet text-brand-paper font-mono font-semibold tracking-wider flex items-center gap-1.5 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></span>
                    {lang === "en" ? "UI + DATA" : "UI + DATOS"}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-brand-bg border border-brand-violet/20 font-mono text-brand-slate font-medium shrink-0">
                    {lang === "en" ? "MEASURABLE INTERFACES" : "INTERFACES MEDIBLES"}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-brand-bg border border-brand-violet/20 font-mono text-brand-slate font-medium flex items-center gap-1 shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-brand-orange-dark" />
                    ENSENADA
                  </span>
                  <span className="hidden sm:inline-flex px-2.5 py-1 rounded bg-brand-yellow/30 text-brand-violet font-mono font-bold shrink-0">
                    {lang === "en" ? "NATIONAL REACH" : "ALCANCE NACIONAL"}
                  </span>
                </div>

                {/* Hero Title exact text: "Transformo ideas en software funcional y decisiones basadas en datos." */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-violet tracking-tight leading-[1.1] max-w-full break-words">
                  {lang === "en" ? (
                    <>
                      I transform ideas into{" "}
                      <span className="relative block sm:inline text-brand-orange-dark">
                        functional software
                      </span>{" "}
                      and{" "}
                      <span className="relative block sm:inline w-fit bg-brand-yellow/30 px-1 rounded">
                        data-driven
                      </span>{" "}
                      decisions.
                    </>
                  ) : (
                    <>
                      Transformo ideas en{" "}
                      <span className="relative block sm:inline text-brand-orange-dark">
                        software funcional
                      </span>{" "}
                      y decisiones{" "}
                      <span className="relative block sm:inline w-fit bg-brand-yellow/30 px-1 rounded">
                        basadas en datos.
                      </span>
                    </>
                  )}
                </h2>

                {/* Hero subtext with exact requested phrases */}
                <p className="text-sm sm:text-base text-brand-slate leading-relaxed max-w-full sm:max-w-xl">
                  {lang === "en"
                    ? "I design and develop custom web applications, SaaS, PWAs, and data solutions to optimize business operations and decision-making."
                    : "Desarrollo aplicaciones web a la medida, SaaS, PWAs y soluciones analíticas para optimizar operación, datos y decisiones."}
                </p>

                {/* Subtag lists showing project capabilities */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-xs border-y border-brand-violet/10 py-3 text-brand-violet font-bold bg-brand-bg/30 px-3 rounded">
                  <span className="flex items-center gap-1.5">
                    <span className="text-brand-orange-dark">/</span> {lang === "en" ? "Web Projects" : "Proyectos web"}
                  </span>
                  <span className="text-brand-slate/40">|</span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-brand-orange-dark">/</span> {lang === "en" ? "Automation" : "Automatización"}
                  </span>
                  <span className="text-brand-slate/40">|</span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-brand-orange-dark">/</span> {lang === "en" ? "Dashboards" : "Dashboards"}
                  </span>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <a
                    href="https://wa.me/526462865241"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto max-w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-4 bg-brand-orange-dark hover:bg-brand-orange-light text-brand-paper text-sm sm:text-base font-bold rounded-lg border-2 border-brand-violet transition-all duration-150 shadow-md group hover:translate-y-[-1px]"
                  >
                    <MessageSquare className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
                    <span>{lang === "en" ? "Start Project via WhatsApp" : "Iniciar Proyecto vía WhatsApp"}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>

                  <a
                    href="#services"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-4 bg-transparent border-2 border-brand-violet/20 hover:border-brand-violet hover:bg-brand-bg text-brand-violet font-bold rounded-lg transition-all text-sm"
                  >
                    <span>{lang === "en" ? "View services" : "Ver servicios"}</span>
                  </a>
                </div>

                {/* Essential Value Props Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-brand-violet/10">
                  {[
                    { 
                      t: lang === "en" ? "First version clear & actionable" : "Primera versión clara y accionable", 
                      desc: lang === "en" ? "No getting lost in theory." : "No nos perdemos en teoría." 
                    },
                    { 
                      t: lang === "en" ? "Responsive design from day one" : "Diseño responsive desde el inicio", 
                      desc: lang === "en" ? "Full mobile adaptability." : "Adaptabilidad total móvil." 
                    },
                    { 
                      t: lang === "en" ? "Data hooked to actual goals" : "Datos conectados con decisiones reales", 
                      desc: lang === "en" ? "Insights driving actual value." : "Insights que sí traen valor." 
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-1 bg-brand-bg/50 p-2.5 rounded border border-brand-slate/10">
                      <h4 className="text-xs font-bold text-brand-violet font-display flex items-start gap-1.5 leading-tight">
                        <span className="text-[10px] font-mono text-brand-orange-dark mt-0.5">✔</span>
                        {item.t}
                      </h4>
                      <p className="text-[10px] text-brand-slate font-sans pl-3.5 leading-snug">{item.desc}</p>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right Column: Dynamic Interactive Laptop Graphic Simulator */}
              <div className="lg:col-span-6 relative w-full max-w-full min-w-0 h-full flex items-center justify-center overflow-hidden py-4 lg:py-0">
                
                {/* Background colored abstract grid aura */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-brand-orange-dark/10 via-brand-yellow/10 to-transparent blur-2xl opacity-80 pointer-events-none"></div>
                
                {/* Floating caption indicating interactivity */}
                <div className="hidden sm:block absolute -top-4 right-4 z-20 bg-brand-violet text-brand-yellow text-[9px] font-mono px-2 py-1 rounded border border-brand-orange-dark/30 shadow-md animate-bounce">
                  {lang === "en" ? "⚡ CLICK ON TABS TO INTERACT" : "⚡ HAZ CLIC EN LAS PESTAÑAS PARA INTERACTUAR"}
                </div>

                <InteractiveLaptop lang={lang} />

              </div>

            </div>
          </div>
        </section>

        {/* Section 2: SERVICES - exact list from brief */}
        <section id="services" className="py-12 sm:py-20 lg:py-24 border-b border-brand-violet/10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Header of Section */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 mb-12 sm:mb-16 pb-8 border-b border-brand-violet/10 items-end">
              <div className="md:col-span-7">
                <span className="text-xs font-mono text-brand-orange-dark uppercase tracking-widest block mb-2 font-bold select-none">
                  {lang === "en" ? "01 // CORE SERVICES" : "01 // SERVICIOS PRINCIPALES"}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-brand-violet tracking-tight">
                  {lang === "en" 
                    ? "Digital solutions built to operate, measure, and grow." 
                    : "Soluciones digitales hechas para operar, medir y crecer."}
                </h3>
              </div>
              <div className="md:col-span-5 text-left md:text-right">
                <p className="text-sm text-brand-slate leading-relaxed">
                  {lang === "en"
                    ? "I combine software development and business data analytics to turn manual processes, loose ideas, and scattered metrics into useful assets."
                    : "Combino desarrollo de software y análisis de datos para convertir procesos manuales, ideas sueltas y métricas dispersas en herramientas útiles para tu negocio."}
                </p>
              </div>
            </div>

            {/* Services Detailed Cards - Staggered beautiful grid (Image 3 layout influence) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  num: "01",
                  title: lang === "en" ? "Web Full-Stack & PWA Development" : "Desarrollo Web Full-Stack & PWAs",
                  desc: lang === "en" 
                    ? "Fast, responsive web applications engineered for desktop, tablet, and mobile. Perfect for customer portals, internal operators, and core flows."
                    : "Aplicaciones web rápidas, responsivas y optimizadas que funcionan en escritorio, tablet y móvil. Ideales para clientes, equipos internos y operaciones que necesitan claridad.",
                  types: lang === "en" ? ["Corporate Landing Page", "Customer Portal", "Autonomous Web-App", "Backoffice Internal System"] : ["Landing page comercial", "Portal de clientes", "PWA autónoma", "Aplicación interna"],
                  pillBg: "bg-brand-orange-dark text-brand-paper",
                  icon: Layers
                },
                {
                  num: "02",
                  title: lang === "en" ? "Custom Tailored SaaS Solutions" : "Soluciones SaaS a la Medida",
                  desc: lang === "en"
                    ? "Inventory structures, digital web catalogs, custom administrative roles, and automations that map directly to your daily physical operation."
                    : "Sistemas de inventario, menús digitales, automatizaciones y herramientas internas diseñadas alrededor de la forma real en que trabaja tu negocio.",
                  types: lang === "en" ? ["Autonomous operations", "User Access Profiles", "Multi-tier accounts", "Live action monitoring"] : ["Flujos de procesos autónomos", "Administración de usuarios", "Roles de acceso", "Monitoreo operativo"],
                  pillBg: "bg-brand-yellow text-brand-violet",
                  icon: Database
                },
                {
                  num: "03",
                  title: lang === "en" ? "Commercial Analytics & Science" : "Análisis de Datos Comercial",
                  desc: lang === "en"
                    ? "Interactive dashboards, clear metrics, and predictive tools to stop guesswork and govern your goals with easily readable visual reporting."
                    : "Tableros, métricas e insights accionables para dejar de adivinar y empezar a tomar decisiones con información clara, ordenada y fácil de revisar.",
                  types: lang === "en" ? ["Executive reports", "Sales Metrics", "Automatic Report generation", "Queries in SQL / Python"] : ["Reportes y tableros ejecutivos", "KPIs comerciales", "Automatización de reportes", "Análisis con SQL & Python"],
                  pillBg: "bg-brand-slate text-brand-paper",
                  icon: TrendingUp
                }
              ].map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-brand-paper border-2 border-brand-violet/10 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-brand-violet hover:shadow-md relative group"
                  >
                    <div className="space-y-4">
                      {/* Grid Header line */}
                      <div className="flex justify-between items-center pb-4 border-b border-brand-violet/5">
                        <span className="text-3xl font-mono text-brand-slate/40 tracking-tighter">
                          {service.num}
                        </span>
                        <div className="p-2 rounded bg-brand-bg border border-brand-violet/5 group-hover:bg-brand-violet/10 transition-colors">
                          <Icon className="w-5 h-5 text-brand-orange-dark" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-lg md:text-xl font-display font-bold text-brand-violet pr-4 group-hover:text-brand-orange-dark transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-brand-violet/5 space-y-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-brand-slate block">
                        {lang === "en" ? "Typical Deliverables:" : "Áreas habituales de entrega:"}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.types.map((type, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="text-[10px] font-medium font-sans px-2.5 py-1 rounded bg-brand-bg border border-brand-violet/5 text-brand-violet/85 hover:border-brand-orange-dark/30 transition-all"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Section 3: STACK DE BATALLA (INTERACTIVE) */}
        <section id="stack" className="py-12 sm:py-20 bg-brand-paper border-y border-brand-violet/10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-mono text-brand-orange-dark uppercase tracking-widest block mb-2 font-bold">
                {lang === "en" ? "02 // BATTLE DEPLOYED STACK" : "02 // STACK DE BATALLA"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-brand-violet tracking-tight">
                {lang === "en" 
                  ? "Tools selected for raw speed, scalability, and clarity." 
                  : "Herramientas elegidas por velocidad, escalabilidad y claridad."}
              </h3>
              <p className="text-sm text-brand-slate mt-2">
                {lang === "en"
                  ? "I rely on mature, highly active technologies so your product remains stable and free from fragile modern trends."
                  : "Selecciono tecnologías confiables y maduras para que tu proyecto no dependa de modas pasajeras con bases inestables."}
              </p>
            </div>

            {/* Interactive Grid of Tech Tools */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Selector Options column */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                {techStack.map((tech, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedTech(tech.name)}
                    className={`text-left p-4 rounded-lg border-2 transition-all duration-150 flex items-center justify-between ${
                      selectedTech === tech.name 
                        ? "border-brand-violet bg-brand-bg shadow-sm font-semibold" 
                        : "border-brand-violet/10 hover:border-brand-slate"
                    }`}
                  >
                    <div>
                      <h4 className="text-sm font-display text-brand-violet font-bold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-orange-dark opacity-80 inline-block"></span>
                        {tech.name}
                      </h4>
                      <p className="text-[10px] text-brand-slate font-mono uppercase mt-0.5">{tech.alias}</p>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${selectedTech === tech.name ? "text-brand-orange-dark translate-x-1" : "text-brand-slate"}`} />
                  </button>
                ))}
              </div>

              {/* Right Detail Card for Selected Tech (Fauvism grid paper detail) */}
              <div className="lg:col-span-7 bg-[#FAF9F6] border-2 border-brand-violet/20 rounded-xl p-6 sm:p-8 relative overflow-hidden h-full flex flex-col justify-between">
                
                {/* Colored layout side tab */}
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-brand-violet"></div>
                
                <div className="space-y-4 font-sans pl-2">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-brand-violet/10 pb-4">
                    <div>
                      <span className="text-[10px] font-mono bg-brand-yellow/30 text-brand-violet font-bold px-2 py-0.5 rounded uppercase tracking-wider block w-max">
                        {lang === "en" ? "Engineering Pillar Active" : "Pilar de Ingeniería Activo"}
                      </span>
                      <h4 className="text-2xl font-display font-bold text-brand-violet mt-1">
                        {selectedTechObj.name}
                      </h4>
                    </div>
                    <span className="text-xs font-mono font-bold text-brand-orange-dark uppercase">
                      {selectedTechObj.alias}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase text-brand-slate tracking-wider block">
                        {lang === "en" ? "Overview description:" : "Descripción General:"}
                      </span>
                      <p className="text-xs sm:text-sm text-brand-violet font-medium leading-relaxed">
                        {selectedTechObj.desc}
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-brand-paper border border-brand-violet/10 space-y-2">
                      <span className="text-[10px] font-mono uppercase text-brand-orange-dark font-bold tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange-dark"></span>
                        {lang === "en" ? "Direct Commercial Value For Your Business:" : "Ventaja Comercial Directa para tu Negocio:"}
                      </span>
                      <p className="text-xs text-brand-slate leading-relaxed">
                        {selectedTechObj.benefit}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pl-2 pt-6 mt-6 border-t border-brand-violet/10 flex justify-between items-center text-[11px] font-mono text-brand-slate">
                  <span>{lang === "en" ? "Stable architecture · practical delivery" : "Arquitectura estable · entrega práctica"}</span>
                  <span className="text-brand-orange-dark font-bold">{lang === "en" ? "100% High Performance Code" : "100% Código de Alta Performance"}</span>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Section 4: FORMA DE TRABAJO - timeline details */}
        <section id="process" className="py-12 sm:py-20 lg:py-24 border-b border-brand-violet/10 px-4 sm:px-6 lg:px-8 bg-brand-bg/40">
          <div className="max-w-7xl mx-auto">
            
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="text-xs font-mono text-brand-orange-dark uppercase tracking-widest block mb-1 font-bold">
                {lang === "en" ? "03 // DIRECT METHODOLOGY" : "03 // METODOLOGÍA DIRECTA"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-brand-violet tracking-tight">
                {lang === "en" 
                  ? "A direct roadmap to turn problems into products." 
                  : "Un proceso directo para pasar de problema a producto."}
              </h3>
              <p className="text-xs sm:text-sm text-brand-slate mt-2 leading-relaxed">
                {lang === "en"
                  ? "First, understand the operation, zero in on the highest impact priorities, and ship a solid v1 tool that you can operate, measure, and improve right away."
                  : "La meta es entender primero la operación, priorizar lo que más impacto tiene y entregar una herramienta clara que puedas usar, medir y mejorar desde la primera versión."}
              </p>
            </div>

            {/* Line connector steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sticky">
              {[
                {
                  step: lang === "en" ? "Assessment" : "Diagnóstico",
                  desc: lang === "en"
                    ? "We directly review your core goal, current workarounds, and existing databases or sheets."
                    : "Revisamos el objetivo, el flujo actual y los datos o herramientas que ya tienes de manera directa."
                },
                {
                  step: lang === "en" ? "Working Prototype" : "Prototipo funcional",
                  desc: lang === "en"
                    ? "We define the initial useful version focused on critical screens, priority business processes, and essential data."
                    : "Definimos la primera versión útil, con pantallas, flujos clave y prioridades concretas del negocio."
                },
                {
                  step: lang === "en" ? "Build & Tune" : "Construcción y ajuste",
                  desc: lang === "en"
                    ? "I build the target system, run demo check-ins with your team, and fine-tune based on daily use feedback."
                    : "Desarrollo la solución, la pruebo contigo periódicamente y ajustamos alrededor de su uso real."
                },
                {
                  step: lang === "en" ? "Clear Delivery" : "Entrega clara",
                  desc: lang === "en"
                    ? "Deliverable: get a practical, fully operational software tool without drowning in endless tech talk."
                    : "Dejas de depender de explicaciones vagas de tecnología: recibes una herramienta lista para operar."
                }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-brand-paper border border-brand-violet/10 rounded-lg p-5 relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-orange-dark"></div>
                  
                  <div className="space-y-3.5 pl-2 relative">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono text-brand-orange-dark border border-brand-orange-dark/30 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                        {lang === "en" ? `Step ${idx + 1}` : `Paso ${idx + 1}`}
                      </span>
                      <Clock className="w-3.5 h-3.5 text-brand-slate" />
                    </div>
                    
                    <h4 className="text-sm font-display font-bold text-brand-violet select-all pr-1">
                      {item.step}
                    </h4>
                    <p className="text-xs text-brand-slate leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 4.5: OUTCOMES-BASED MODEL (UI MAGIC INSPIRED) */}
        <OutcomesBased lang={lang} />

        {/* Section 5: PROJECT INTAKE INTERACTIVE PLANNER */}
        <section id="planner-section" className="py-12 sm:py-20 px-4 sm:px-8 border-b border-brand-violet/10">
          <div className="max-w-7xl mx-auto">
            <ProjectPlanner lang={lang} />
          </div>
        </section>

        {/* Section 6: ABOUT ME - exact details from brief */}
        <section id="about" className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-brand-paper">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              {/* Left aesthetic grid photo panel mockup inspired by Henri Matisse Fauvism image collages */}
              <div className="lg:col-span-5 relative">
                
                {/* Collage structure representing "Web & Datos" (Fauvism portrait representation inside grid frames with real curated Pexels photos) */}
                <div className="grid grid-cols-2 gap-3.5 relative z-10">
                  
                  {/* Photo 1: Analytics & Metrics */}
                  <div className="aspect-[4/3] rounded-xl overflow-hidden relative group border-2 border-brand-violet/10 bg-brand-bg shadow-sm">
                    <img 
                      src="https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Data Analytics"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-3.5 text-brand-paper">
                      <span className="text-[9px] font-mono tracking-widest text-brand-yellow font-bold">01 // ANALYTICS & KPIS</span>
                      <h5 className="font-display font-bold text-xs">
                        {lang === "en" ? "Actionable Decisions" : "Datos accionables"}
                      </h5>
                    </div>
                  </div>
                  
                  {/* Photo 2: Software Development */}
                  <div className="aspect-square rounded-xl overflow-hidden relative group border-2 border-brand-violet/10 bg-brand-bg shadow-sm">
                    <img 
                      src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Coding & Engineering"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-3.5 text-brand-paper">
                      <span className="text-[9px] font-mono tracking-widest text-brand-orange-light font-bold">02 // WEB DEVELOPMENT</span>
                      <h5 className="font-display font-bold text-xs">
                        {lang === "en" ? "Web & PWA Systems" : "Sistemas Web PWA"}
                      </h5>
                    </div>
                  </div>

                  {/* Photo 3: Custom Business Insights / Operations */}
                  <div className="aspect-square rounded-xl overflow-hidden relative group border-2 border-brand-violet/10 bg-brand-bg shadow-sm">
                    <img 
                      src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Business Operations"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-3.5 text-brand-paper">
                      <span className="text-[9px] font-mono tracking-widest text-[#A7F3D0] font-bold">03 // AUTOMATION</span>
                      <h5 className="font-display font-bold text-xs">
                        {lang === "en" ? "Process Alignment" : "Alineamiento de Procesos"}
                      </h5>
                    </div>
                  </div>

                  {/* Photo 4: Local Support & Region */}
                  <div className="aspect-[4/3] rounded-xl overflow-hidden relative group border-2 border-brand-violet/10 bg-brand-bg shadow-sm">
                    <img 
                      src="https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Ensenada Regional Pride"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-3.5 text-brand-paper">
                      <span className="text-[9px] font-mono tracking-widest text-brand-yellow font-bold">04 // LOCAL PRESENCE</span>
                      <h5 className="font-display font-bold text-xs">{lang === "en" ? "Local context" : "Contexto local"}</h5>
                    </div>
                  </div>

                </div>

                {/* Aesthetic decorative brand yellow border overlay back block */}
                <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-brand-violet/20 rounded-lg pointer-events-none -z-0"></div>

              </div>

              {/* Right Profile description: exact copy */}
              <div className="lg:col-span-7 space-y-6">
                
                <span className="text-xs font-mono text-brand-orange-dark uppercase tracking-widest block font-bold">
                  {lang === "en" ? "04 // WHO AM I?" : "04 // ¿QUIÊN SOY?"}
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-brand-violet tracking-tight">
                  {lang === "en" ? "Software built with business sense, not just code." : "Software con criterio de negocio, no solo código."}
                </h3>

                <div className="space-y-4 text-sm text-brand-slate leading-relaxed">
                  
                  <p>
                    {lang === "en" ? (
                      <>
                        I am <strong className="text-brand-violet font-semibold">Juan Carlos Obeso</strong>, founder and independent developer. I work side-by-side with clients who need to turn a tricky process, ideas, or bottleneck into clear digital systems.
                      </>
                    ) : (
                      <>
                        Soy <strong className="text-brand-violet font-semibold">Juan Carlos Obeso</strong>, founder y desarrollador independiente. Trabajo hombro con hombro con clientes que necesitan convertir una idea, proceso o cuello de botella en una solución digital clara.
                      </>
                    )}
                  </p>

                  <p className="border-l-4 border-brand-orange-dark pl-4 italic bg-brand-bg/40 p-3 rounded-r">
                    {lang === "en" 
                      ? `"My edge is in understanding the business from within: operations, service, timelines, data, and daily decisions. That lets me translate physical needs into highly efficient code and math that solves the actual bottleneck."` 
                      : `"Mi diferencia está en entender el negocio desde adentro: operaciones, servicio, tiempos, datos y decisiones. Eso me permite traducir necesidades reales en código eficiente y analítica que sí se usa."`}
                  </p>

                  <p>
                    {lang === "en"
                      ? "I avoid trendy overcomplicated jargon. My objective is to build clean, frictionless, robust systems that accelerate daily task execution across your organization."
                      : "Evito las jerigozas tecnológicas de moda. Me enfoco en entregarte herramientas robustas sin fricción que de verdad faciliten el trabajo diario de tu equipo de principio a fin."}
                  </p>

                </div>

                {/* Lo que buscas conseguir section */}
                <div className="pt-6 border-t border-brand-violet/10 space-y-4">
                  <span className="text-xs font-mono text-brand-violet font-bold uppercase tracking-wider block">
                    {lang === "en" ? "What you hope to achieve with my support:" : "Lo que buscas conseguir con mi soporte:"}
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      {
                        title: lang === "en" ? "Operational clarity" : "Claridad operativa",
                        desc: lang === "en" 
                          ? "Frictionless tooling built to arrange databases, tasks, and transactions without complex overhead."
                          : "Herramientas diseñadas para ordenar tareas, datos y procesos sin agregar complejidad innecesaria."
                      },
                      {
                        title: lang === "en" ? "Responsive design" : "Experiencia responsive",
                        desc: lang === "en"
                          ? "Interfaces that look and perform elegantly on desktop, tablet, and mobile with intuitive flows."
                          : "Interfaces que se ven y se sienten bien en cualquier dispositivo, con flujos simples para el usuario."
                      },
                      {
                        title: lang === "en" ? "Actionable data" : "Datos accionables",
                        desc: lang === "en"
                          ? "Dashboards presented with context to execute business moves with real numbers instead of noise."
                          : "Métricas presentadas con contexto para tomar decisiones comerciales con menos ruido y más precisión."
                      }
                    ].map((val, idx) => (
                      <div key={idx} className="space-y-1.5 bg-[#FAF9F6] p-3.5 rounded border border-brand-violet/10 shadow-sm">
                        <span className="text-xs font-mono font-bold text-brand-orange-dark">0{idx + 1}.</span>
                        <h4 className="text-sm font-display font-bold text-brand-violet leading-tight">{val.title}</h4>
                        <p className="text-[11px] text-brand-slate leading-snug">{val.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Section 7: concise closing summary */}
        <section className="py-12 sm:py-16 bg-brand-violet text-brand-paper px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-yellow via-brand-orange-light to-brand-orange-dark"></div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-7 space-y-3">
              <span className="text-xs font-mono text-brand-yellow uppercase tracking-widest block font-bold">
                {lang === "en" ? "CLEAR SCOPE, USEFUL SOFTWARE" : "ALCANCE CLARO, SOFTWARE ÚTIL"}
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-bold text-brand-paper tracking-tight leading-tight">
                {lang === "en"
                  ? "The goal is not more technology. It is a cleaner operation."
                  : "La meta no es tener más tecnología. Es operar con más claridad."}
              </h3>
              <p className="text-sm text-brand-bg/80 leading-relaxed max-w-2xl">
                {lang === "en"
                  ? "If your business has repeated manual work, scattered information, or decisions made from incomplete data, the first step is to define one useful version that can be built, tested, and improved."
                  : "Si tu negocio tiene trabajo manual repetido, información dispersa o decisiones tomadas con datos incompletos, el primer paso es definir una versión útil que se pueda construir, probar y mejorar."}
              </p>
            </div>

            <div className="md:col-span-5 bg-[#23122B] border border-brand-orange-dark/30 rounded-xl p-5 sm:p-6 space-y-4 shadow-xl">
              {[
                lang === "en" ? "One clear workflow before adding complexity." : "Un flujo claro antes de agregar complejidad.",
                lang === "en" ? "A realistic first build instead of vague proposals." : "Una primera versión realista en vez de propuestas vagas.",
                lang === "en" ? "Metrics that explain what to improve next." : "Métricas que explican qué mejorar después."
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-brand-bg/85">
                  <CheckCircle className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
              <a
                href="#planner-section"
                className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 bg-brand-yellow text-brand-violet hover:bg-brand-orange-light hover:text-brand-paper font-bold rounded-lg transition-colors text-sm"
              >
                <span>{lang === "en" ? "Review project planner" : "Revisar planificador"}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER SECTION - exact citations and tags */}
      <footer className="bg-[#120B16] text-brand-paper/85 py-10 md:py-14 border-t border-brand-violet/30 px-4 sm:px-6 lg:px-8 font-mono text-xs">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-brand-violet/20 pb-8">
            
            {/* Column 1 Logo details */}
            <div className="md:col-span-5 space-y-3">
              <h2 className="text-base font-display font-bold text-brand-paper tracking-wider flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-brand-orange-dark rounded-full inline-block"></span>
                JUAN CARLOS OBESO // WEB & DATOS
              </h2>
              <p className="text-brand-slate max-w-sm leading-relaxed text-[11px]">
                {lang === "en" 
                  ? "Independent software developer focused on converting business bottlenecks into highly optimized billing, administration, and KPI telemetry systems for small & medium businesses in Mexico."
                  : "Desarrollador independiente enfocado en convertir cuellos de botella en herramientas eficientes de facturación, administración y KPIs para PyMEs en México."}
              </p>
            </div>

            {/* Column 2 Quick links representation */}
            <div className="md:col-span-3 space-y-2 text-[11px]">
              <span className="text-brand-yellow font-bold uppercase tracking-wider block">
                {lang === "en" ? "// SERVICES" : "// SERVICIOS"}
              </span>
              <ul className="space-y-1.5 text-brand-slate">
                <li>{lang === "en" ? "• Web Full-Stack & PWA" : "• Web Full-Stack & PWA"}</li>
                <li>{lang === "en" ? "• SaaS & Inventory Tools" : "• SaaS & Inventarios"}</li>
                <li>{lang === "en" ? "• SQL / Python Analytics" : "• Análisis de Datos SQL / Python"}</li>
                <li>{lang === "en" ? "• Workflow Automation" : "• Automatizaciones integrales"}</li>
              </ul>
            </div>

            {/* Column 3 Contact details */}
            <div className="md:col-span-4 space-y-2 text-[11px]">
              <span className="text-brand-yellow font-bold uppercase tracking-wider block">
                {lang === "en" ? "// INFO" : "// DATOS"}
              </span>
              <ul className="space-y-1.5 text-brand-slate">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  <span>WhatsApp: +52 646 286 52 41</span>
                </li>
                <li>{lang === "en" ? "Base: Ensenada, Baja California" : "Base: Ensenada, Baja California"}</li>
                <li>{lang === "en" ? "Independent development and data consulting" : "Desarrollo independiente y consultoría de datos"}</li>
              </ul>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-brand-slate">
            <div>
              <span>{lang === "en" ? "Independent web development and data systems" : "Desarrollo web independiente y sistemas de datos"}</span>
            </div>
            <div>
              <span>{lang === "en" ? "© 2026 Juan Carlos Obeso. Web Development & Data Analysis." : "© 2026 Juan Carlos Obeso. Desarrollo Web & Análisis de Datos."}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brand-orange-dark">WEB</span>
              <span>·</span>
              <span>{lang === "en" ? "Data systems" : "Sistemas de datos"}</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

