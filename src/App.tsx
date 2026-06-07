import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Eye,
  FileText,
  MessageCircle,
  MessageSquareText,
  Search,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useMemo, useState } from "react";
import kikubaLogo from "./assets/kikuba-logo-transparent.png";

const whatsappHref =
  "https://wa.me/526462865241?text=Hola%20Kikuba%2C%20quiero%20hablar%20sobre%20mi%20operacion.";

type SectionId =
  | "inicio"
  | "problema"
  | "metodo"
  | "servicios"
  | "staff"
  | "resultados"
  | "contacto";

type KikubaSection = {
  id: SectionId;
  label: string;
  eyebrow: string;
  title: string;
  text: string;
  icon: LucideIcon;
  node: {
    top: string;
    left: string;
  };
  bullets: string[];
};

const sections: KikubaSection[] = [
  {
    id: "inicio",
    label: "Inicio",
    eyebrow: "Agencia digital para operaciones reales",
    title: "Tecnologia que entiende tu operacion.",
    text: "Kikuba observa como trabaja tu negocio, analiza donde se atora y construye herramientas digitales que encajan con la operacion real.",
    icon: Eye,
    node: { top: "15%", left: "50%" },
    bullets: [
      "Primero entendemos. Luego construimos.",
      "Sitios, sistemas y datos con enfoque operativo.",
      "Pensado para negocios no tecnicos.",
    ],
  },
  {
    id: "problema",
    label: "Problema",
    eyebrow: "Lo que se traba",
    title: "Tu negocio no necesita mas herramientas. Necesita claridad.",
    text: "Muchos equipos operan entre WhatsApp, hojas de calculo, notas sueltas y decisiones tomadas con informacion incompleta.",
    icon: MessageSquareText,
    node: { top: "28%", left: "25%" },
    bullets: [
      "Informacion dispersa entre mensajes y memoria.",
      "Trabajo repetido que consume tiempo.",
      "Datos disponibles, pero dificiles de usar.",
    ],
  },
  {
    id: "metodo",
    label: "Metodo",
    eyebrow: "Observamos - Analizamos - Construimos",
    title: "Un proceso claro para resultados reales.",
    text: "No empezamos por la herramienta. Empezamos por entender que pasa, quienes lo viven y que solucion tendria impacto real.",
    icon: Search,
    node: { top: "28%", left: "75%" },
    bullets: [
      "Observamos tareas, personas y puntos de friccion.",
      "Analizamos prioridades antes de proponer.",
      "Construimos una primera version util y medible.",
    ],
  },
  {
    id: "servicios",
    label: "Servicios",
    eyebrow: "Que construimos",
    title: "Soluciones digitales que ordenan tu negocio.",
    text: "Creamos presencia digital clara, sistemas internos y tableros de datos para operar, medir y mejorar sin complejidad innecesaria.",
    icon: Workflow,
    node: { top: "50%", left: "18%" },
    bullets: [
      "Sitios web y landing pages comerciales.",
      "Sistemas para pedidos, inventario y registros.",
      "Dashboards y reportes para decidir mejor.",
    ],
  },
  {
    id: "staff",
    label: "Staff",
    eyebrow: "Diferencial Kikuba",
    title: "Tambien escuchamos a la gente que vive la operacion.",
    text: "Un sistema falla si solo se disena desde la direccion. Kikuba toma en cuenta a quienes atienden, registran, venden, preparan y resuelven todos los dias.",
    icon: ClipboardList,
    node: { top: "50%", left: "82%" },
    bullets: [
      "El staff ayuda a detectar fricciones reales.",
      "Las herramientas deben servirle a quien las usa.",
      "Menos imposicion, mas adopcion.",
    ],
  },
  {
    id: "resultados",
    label: "Resultados",
    eyebrow: "Que cambia",
    title: "Menos caos operativo. Mas control real.",
    text: "La meta no es sumar software por moda. La meta es que el negocio tenga una forma mas clara de operar, medir y mejorar.",
    icon: BarChart3,
    node: { top: "74%", left: "31%" },
    bullets: [
      "Menos informacion perdida.",
      "Procesos mas faciles de seguir.",
      "Decisiones con datos claros.",
    ],
  },
  {
    id: "contacto",
    label: "Contacto",
    eyebrow: "Siguiente paso",
    title: "Hablemos de tu operacion.",
    text: "Cuentame que esta trabado. Lo observamos, lo analizamos y definimos una primera solucion clara para probar con tu negocio.",
    icon: MessageCircle,
    node: { top: "74%", left: "69%" },
    bullets: [
      "WhatsApp directo.",
      "Diagnostico inicial.",
      "Primera ruta de solucion.",
    ],
  },
];

export default function App() {
  const [activeId, setActiveId] = useState<SectionId>("inicio");
  const activeIndex = sections.findIndex((section) => section.id === activeId);
  const active = sections[activeIndex] ?? sections[0];
  const ActiveIcon = active.icon;

  const nextSection = useMemo(
    () => sections[(activeIndex + 1 + sections.length) % sections.length],
    [activeIndex],
  );
  const previousSection = useMemo(
    () => sections[(activeIndex - 1 + sections.length) % sections.length],
    [activeIndex],
  );

  return (
    <div className="h-svh overflow-hidden bg-brand-bg text-brand-dark-text">
      <header className="h-[76px] border-b border-brand-violet/12 bg-brand-bg/92 backdrop-blur-xl">
        <nav className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
          <button
            type="button"
            onClick={() => setActiveId("inicio")}
            className="flex min-w-0 items-center gap-3 text-left"
          >
            <img
              src={kikubaLogo}
              alt="Kikuba"
              className="h-12 w-12 shrink-0 object-cover object-top"
            />
            <div className="min-w-0">
              <p className="brand-word text-base font-semibold text-brand-violet sm:text-lg">
                KIKUBA
              </p>
              <p className="hidden text-[10px] font-medium uppercase tracking-[0.22em] text-brand-slate sm:block">
                Observamos - Analizamos - Construimos
              </p>
            </div>
          </button>

          <div className="hidden items-center gap-2 lg:flex">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => setActiveId(section.id)}
                className={`rounded-sm px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                  section.id === active.id
                    ? "bg-brand-violet text-brand-bg"
                    : "text-brand-slate hover:bg-brand-paper hover:text-brand-violet"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          <a
            href={whatsappHref}
            className="inline-flex items-center gap-2 rounded-sm bg-brand-violet px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-bg transition hover:bg-brand-orange-dark"
          >
            <span className="hidden sm:inline">Hablemos</span>
            <MessageCircle className="h-4 w-4" />
          </a>
        </nav>
      </header>

      <main className="h-[calc(100svh-76px)] overflow-hidden">
        <div className="mx-auto grid h-full max-w-7xl grid-rows-[auto_1fr_auto] gap-4 px-5 py-4 lg:grid-cols-[0.95fr_1.05fr] lg:grid-rows-1 lg:gap-10 lg:px-8 lg:py-8">
          <section className="relative hidden min-h-0 items-center justify-center lg:flex">
            <div className="relative w-full max-w-[560px]">
              <img
                src={kikubaLogo}
                alt="Mapa visual Kikuba"
                className="w-full object-contain"
              />

              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => setActiveId(section.id)}
                  className={`absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border transition ${
                    section.id === active.id
                      ? "scale-125 border-brand-violet bg-brand-yellow shadow-[0_0_0_10px_rgba(216,199,166,0.34)]"
                      : "border-brand-bg bg-brand-violet hover:scale-110 hover:bg-brand-orange-dark"
                  }`}
                  style={{ top: section.node.top, left: section.node.left }}
                  aria-label={`Abrir ${section.label}`}
                >
                  <span className="sr-only">{section.label}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="min-h-0 overflow-hidden lg:hidden">
            <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => setActiveId(section.id)}
                  className={`shrink-0 rounded-sm px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                    section.id === active.id
                      ? "bg-brand-violet text-brand-bg"
                      : "bg-brand-paper text-brand-violet"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </section>

          <section className="min-h-0 overflow-hidden">
            <div className="flex h-full flex-col border border-brand-violet/12 bg-brand-paper shadow-[0_24px_80px_rgba(37,48,43,0.10)]">
              <div className="flex items-center justify-between border-b border-brand-violet/10 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-brand-violet text-brand-bg">
                    <ActiveIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-slate">
                      {active.eyebrow}
                    </p>
                    <p className="text-sm font-semibold text-brand-violet">
                      {String(activeIndex + 1).padStart(2, "0")} /{" "}
                      {sections.length}
                    </p>
                  </div>
                </div>
                <div className="hidden h-3 w-3 rotate-45 bg-brand-yellow sm:block" />
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
                <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.02] text-brand-violet sm:text-5xl lg:text-6xl">
                  {active.title}
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-brand-violet/74 sm:text-lg">
                  {active.text}
                </p>

                <div className="mt-8 grid gap-3">
                  {active.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="flex gap-3 border border-brand-violet/10 bg-brand-bg/70 p-4"
                    >
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-orange-dark" />
                      <p className="text-sm leading-6 text-brand-violet/74">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-t border-brand-violet/10 px-5 py-4">
                <button
                  type="button"
                  onClick={() => setActiveId(previousSection.id)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-brand-violet/15 text-brand-violet transition hover:bg-brand-bg"
                  aria-label={`Ir a ${previousSection.label}`}
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                {active.id === "contacto" ? (
                  <a
                    href={whatsappHref}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-brand-violet px-5 text-sm font-semibold uppercase tracking-[0.12em] text-brand-bg transition hover:bg-brand-orange-dark"
                  >
                    Escribir por WhatsApp
                    <MessageCircle className="h-4 w-4" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveId(nextSection.id)}
                    className="inline-flex h-11 items-center justify-center rounded-sm bg-brand-violet px-5 text-sm font-semibold uppercase tracking-[0.12em] text-brand-bg transition hover:bg-brand-orange-dark"
                  >
                    Siguiente: {nextSection.label}
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setActiveId(nextSection.id)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-brand-violet/15 text-brand-violet transition hover:bg-brand-bg"
                  aria-label={`Ir a ${nextSection.label}`}
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </section>

          <section className="hidden min-h-0 lg:block">
            <div className="grid h-full content-center gap-3">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => setActiveId(section.id)}
                    className={`flex items-center gap-3 border px-4 py-3 text-left transition ${
                      section.id === active.id
                        ? "border-brand-violet bg-brand-violet text-brand-bg"
                        : "border-brand-violet/10 bg-brand-paper/75 text-brand-violet hover:bg-brand-paper"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="text-xs font-semibold uppercase tracking-[0.14em]">
                      {section.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
