import { useState } from "react";
import { MessageSquare, ArrowRight, CheckCircle, Smartphone, BarChart3, Settings2, Sparkles } from "lucide-react";

interface ProjectPlannerProps {
  lang?: "es" | "en";
}

export default function ProjectPlanner({ lang = "es" }: ProjectPlannerProps) {
  const [projectType, setProjectType] = useState<string>("pwa");
  const [stage, setStage] = useState<string>("idea");
  const [timeline, setTimeline] = useState<string>("asap");
  const [companyName, setCompanyName] = useState<string>("");
  const [customBrief, setCustomBrief] = useState<string>("");

  const getWhatsappUrl = () => {
    const typeLabel = {
      pwa: lang === "en" ? "Full-Stack Web Development / PWA" : "Desarrollo Web Full-Stack / PWA",
      saas: lang === "en" ? "Custom SaaS / Workflows Automation" : "Sistema SaaS o Automatización a Medida",
      data: lang === "en" ? "Business Data Science / Dashboard" : "Análisis de Datos Comercial / Dashboard"
    }[projectType] || (lang === "en" ? "Web & Data Development" : "Desarrollo Web & Datos");

    const stageLabel = {
      idea: lang === "en" ? "I only have the initial idea" : "Solo tengo la idea inicial",
      process: lang === "en" ? "I have a manual process to automate" : "Tengo un proceso manual para automatizar",
      existing: lang === "en" ? "I want to improve/redesign an existing system" : "Quiero mejorar o rediseñar un sistema actual"
    }[stage] || (lang === "en" ? "Project start" : "Inicio de proyecto");

    const timelineLabel = {
      asap: lang === "en" ? "As soon as possible (keep it agile)" : "Lo antes posible (mantenlo ágil)",
      month: lang === "en" ? "In the next 4-6 weeks" : "En las próximas 4-6 semanas",
      explore: lang === "en" ? "Just exploring my options" : "Apenas explorando opciones"
    }[timeline] || (lang === "en" ? "Flexible" : "Flexible");

    const baseMessage = lang === "en"
      ? `Hi Juan Carlos! I've used your website project planner. I'd love to start a project review.
----------------------------------
📌 Service: 
🏢 Business Name: 
💼 Current Stage: 
⏳ Estimated Timeline: ${timelineLabel}
📝 Brief Outline: 
----------------------------------
When could we review the initial scope and next practical step?`
      : `¡Hola Juan Carlos! He usado el planificador de tu web. Me gustaría iniciar un proyecto.
----------------------------------
📌 Servicio: 
🏢 Mi negocio/empresa: 
💼 Estado actual: 
⏳ Plazo estimado: ${timelineLabel}
📝 Descripción corta: 
----------------------------------
¿Cuándo podríamos revisar el alcance inicial y el siguiente paso práctico?`;

    return `https://wa.me/526462865241?text=${encodeURIComponent(baseMessage)}`; // Juan Carlos WhatsApp in Mexico 
  };

  return (
    <div id="planner-section" className="bg-brand-paper border-2 border-brand-violet/20 rounded-xl p-5 md:p-8 shadow-sm relative overflow-hidden">
      {/* Decorative colored orange/yellow visual grid accents */}
      <div className="absolute top-0 right-0 w-32 h-1 bg-gradient-to-r from-brand-yellow via-brand-orange-light to-brand-orange-dark"></div>
      
      <div className="max-w-3xl">
        <span className="text-[10px] sm:text-xs font-mono text-brand-orange-dark uppercase tracking-widest font-semibold flex items-center gap-1.5 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
          {lang === "en" ? "Interactive Project Planner" : "Planificador de Proyecto Interactivo"}
        </span>
        <h3 className="text-2xl md:text-3xl font-display font-bold text-brand-violet tracking-tight mb-2">
          {lang === "en" ? "Map your idea in 30 seconds" : "Aterriza tu idea en 30 segundos"}
        </h3>
        <p className="text-sm text-brand-slate max-w-xl mb-6">
          {lang === "en" 
            ? "Select the basic context and generate a short, structured brief you can send when you are ready."
            : "Selecciona el contexto básico y genera un resumen breve y ordenado cuando estés listo para enviarlo."}
        </p>

        <div className="space-y-6">
          {/* Step 1: Project Type */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-brand-violet/80 block mb-2.5 font-bold">
              {lang === "en" ? "01. What core pillar does your business need?" : "01. ¿Qué pilar necesita tu negocio?"}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { 
                  id: "pwa", 
                  label: lang === "en" ? "Web Full-Stack & PWA" : "Web Full-Stack & PWA", 
                  desc: lang === "en" ? "Fast apps optimized for desktop and mobile devices" : "Apps rápidas optimizadas en móvil y escritorio", 
                  icon: Smartphone 
                },
                { 
                  id: "saas", 
                  label: lang === "en" ? "SaaS & Automations" : "SaaS & Automatizaciones", 
                  desc: lang === "en" ? "Custom database systems, roles, and automated workflows" : "Sistemas de inventarios, roles y automatizaciones", 
                  icon: Settings2 
                },
                { 
                  id: "data", 
                  label: lang === "en" ? "Commercial Data Analytics" : "Análisis de Datos", 
                  desc: lang === "en" ? "Control dashboards equipped with real KPIs and report metrics" : "Tableros de control con KPIs y reportes reales", 
                  icon: BarChart3 
                }
              ].map(item => {
                const Icon = item.icon;
                const isSelected = projectType === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setProjectType(item.id)}
                    className={`text-left p-4 rounded-lg border-2 transition-all duration-200 flex flex-col justify-between h-32 ${
                      isSelected 
                        ? "border-brand-orange-dark bg-brand-orange-dark/5 shadow-sm" 
                        : "border-brand-violet/10 hover:border-brand-slate hover:bg-brand-bg/5"
                    }`}
                  >
                    <div className="flex justify-between items-start w-full">
                      <Icon className={`w-5 h-5 ${isSelected ? "text-brand-orange-dark" : "text-brand-slate"}`} />
                      {isSelected && <div className="w-2 h-2 rounded-full bg-brand-orange-dark"></div>}
                    </div>
                    <div>
                      <h5 className="text-xs font-bold font-display text-brand-violet block">{item.label}</h5>
                      <p className="text-[10px] text-brand-slate font-sans mt-0.5 leading-tight">{item.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2 Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-brand-violet/80 block mb-2 font-bold">
                {lang === "en" ? "02. What stage is the project in?" : "02. ¿En qué estado se encuentra la idea?"}
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: "idea", label: lang === "en" ? "Basic Idea" : "Idea básica" },
                  { id: "process", label: lang === "en" ? "Manual Process" : "Proceso manual" },
                  { id: "existing", label: lang === "en" ? "Enhance App" : "Mejorar app" }
                ].map(item => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setStage(item.id)}
                    className={`py-2 px-1 text-center text-xs font-medium rounded border transition-all ${
                      stage === item.id 
                        ? "bg-brand-violet text-brand-yellow border-brand-violet" 
                        : "bg-brand-bg/40 border-brand-violet/10 hover:border-brand-slate text-brand-violet/80"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-brand-violet/80 block mb-2 font-bold">
                {lang === "en" ? "03. What is your urgency/timeline?" : "03. ¿Cuál es tu urgencia o plazo?"}
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: "asap", label: lang === "en" ? "Asap" : "Muy urgente" },
                  { id: "month", label: lang === "en" ? "1-2 Months" : "1-2 meses" },
                  { id: "explore", label: lang === "en" ? "Just Quote" : "Solo cotizar" }
                ].map(item => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTimeline(item.id)}
                    className={`py-2 px-1 text-center text-xs font-medium rounded border transition-all ${
                      timeline === item.id 
                        ? "bg-brand-violet text-brand-yellow border-brand-violet" 
                        : "bg-brand-bg/40 border-brand-violet/10 hover:border-brand-slate text-brand-violet/80"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Business & Custom text block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-brand-violet/80 block mb-1.5 font-bold">
                {lang === "en" ? "04. Name of your business or software ideas:" : "04. Nombre de tu negocio o software:"}
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder={lang === "en" ? "e.g. Export Co, Pizzeria SaaS" : "Ej. Comercializadora, Pizzería SaaS, etc."}
                className="w-full bg-brand-bg/40 border-2 border-brand-violet/10 focus:border-brand-orange-dark focus:bg-brand-paper rounded px-3 py-2 text-xs outline-none text-brand-violet font-medium transition-all"
              />
            </div>
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-brand-violet/80 block mb-1.5 font-bold">
                {lang === "en" ? "05. What problem are you aiming to solve?" : "05. ¿Qué problema buscas resolver hoy?"}
              </label>
              <input
                type="text"
                value={customBrief}
                onChange={(e) => setCustomBrief(e.target.value)}
                placeholder={lang === "en" ? "e.g. Streamline inventory, client orders app" : "Ej. Ordenar inventarios, app de pedidos..."}
                className="w-full bg-brand-bg/40 border-2 border-brand-violet/10 focus:border-brand-orange-dark focus:bg-brand-paper rounded px-3 py-2 text-xs outline-none text-brand-violet font-medium transition-all"
              />
            </div>
          </div>

          {/* Action button triggers direct WhatsApp integration */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-orange-dark hover:bg-brand-orange-light text-brand-paper text-sm font-bold rounded-lg border-2 border-brand-violet transition-all duration-200 shadow-md group hover:translate-y-[-1px]"
            >
              <MessageSquare className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
              <span>{lang === "en" ? "Send Structured Brief" : "Enviar resumen estructurado"}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <div className="text-[10px] md:text-xs font-mono text-brand-slate flex items-center gap-2 bg-brand-bg/60 p-2.5 rounded border border-brand-violet/10">
              <CheckCircle className="w-4 h-4 text-brand-orange-dark flex-shrink-0" />
              <span>
                {lang === "en" 
                  ? "Your selections are converted into a concise project note, ready to review without starting from a blank message."
                  : "Tus respuestas se convierten en una nota clara de proyecto, lista para revisar sin empezar desde cero."}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

