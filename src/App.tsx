import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Eye,
  FileText,
  Menu,
  MessageCircle,
  MessageSquareText,
  Search,
  ShieldCheck,
  Workflow,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import kikubaLogo from "./assets/kikuba-logo-transparent.png";

const whatsappHref =
  "https://wa.me/526462865241?text=Hola%20Kikuba%2C%20quiero%20hablar%20sobre%20mi%20operacion.";

const navItems = [
  { label: "Problema", href: "#problema" },
  { label: "Metodo", href: "#metodo" },
  { label: "Servicios", href: "#servicios" },
  { label: "Mapa", href: "#mapa" },
  { label: "Contacto", href: "#contacto" },
];

const pains = [
  {
    icon: MessageSquareText,
    title: "Informacion dispersa",
    text: "Pedidos, dudas y pendientes viven entre WhatsApp, notas, llamadas y memoria.",
  },
  {
    icon: ClipboardList,
    title: "Trabajo repetido",
    text: "El equipo captura, revisa y confirma lo mismo varias veces durante el dia.",
  },
  {
    icon: BarChart3,
    title: "Decisiones a ojo",
    text: "Hay datos, pero no estan ordenados para entender que esta pasando.",
  },
];

const method = [
  {
    icon: Eye,
    label: "01",
    title: "Observamos",
    text: "Entendemos como trabaja tu negocio en la vida real: personas, tareas, herramientas, mensajes y puntos de friccion.",
  },
  {
    icon: Search,
    label: "02",
    title: "Analizamos",
    text: "Detectamos patrones, prioridades y oportunidades antes de proponer una solucion.",
  },
  {
    icon: Workflow,
    label: "03",
    title: "Construimos",
    text: "Creamos una primera version util, clara y lista para probar con tu equipo.",
  },
  {
    icon: ShieldCheck,
    label: "04",
    title: "Mejoramos",
    text: "Medimos uso, escuchamos feedback y ajustamos para que la herramienta realmente sirva.",
  },
];

const services = [
  {
    icon: FileText,
    title: "Presencia digital clara",
    text: "Sitios, landing pages y catalogos digitales que explican bien lo que haces y convierten visitas en conversaciones reales.",
  },
  {
    icon: Workflow,
    title: "Sistemas para operar",
    text: "Herramientas internas para pedidos, inventario, solicitudes, registros, tareas y flujos diarios del equipo.",
  },
  {
    icon: BarChart3,
    title: "Datos para decidir",
    text: "Tableros, reportes y metricas utiles para dejar de adivinar y ver tu operacion con claridad.",
  },
];

const mapNodes = [
  {
    label: "Problema",
    title: "Lo que se traba",
    text: "Mensajes, tareas y datos viven separados.",
    top: "28%",
    left: "25%",
  },
  {
    label: "Metodo",
    title: "Como lo entendemos",
    text: "Observamos antes de construir.",
    top: "28%",
    left: "75%",
  },
  {
    label: "Servicios",
    title: "Lo que construimos",
    text: "Sitios, sistemas y datos con sentido operativo.",
    top: "50%",
    left: "18%",
  },
  {
    label: "Staff",
    title: "A quien escuchamos",
    text: "Tambien al equipo que usa el sistema todos los dias.",
    top: "50%",
    left: "82%",
  },
  {
    label: "Resultados",
    title: "Que cambia",
    text: "Menos caos y mas control real.",
    top: "74%",
    left: "31%",
  },
  {
    label: "Contacto",
    title: "Siguiente paso",
    text: "Definir una primera solucion clara.",
    top: "74%",
    left: "69%",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNode, setActiveNode] = useState(mapNodes[0]);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark-text">
      <header className="sticky top-0 z-50 border-b border-brand-violet/12 bg-brand-bg/92 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <a href="#inicio" className="flex min-w-0 items-center gap-3">
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
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-slate transition hover:text-brand-violet"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappHref}
              className="inline-flex items-center gap-2 rounded-sm bg-brand-violet px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-bg transition hover:bg-brand-orange-dark"
            >
              Hablemos
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-brand-violet/20 text-brand-violet lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-brand-violet/10 bg-brand-paper px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-violet"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={whatsappHref}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-brand-violet px-5 py-3 text-sm font-semibold text-brand-bg"
                onClick={() => setMenuOpen(false)}
              >
                Hablemos de tu operacion
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="inicio" className="overflow-hidden">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-brand-slate">
                Agencia digital para operaciones reales
              </p>
              <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.98] text-brand-violet sm:text-6xl lg:text-7xl">
                Tecnologia que entiende tu operacion.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-brand-violet/76">
                Observamos como trabaja tu negocio, escuchamos a tu equipo y
                construimos herramientas digitales que ordenan la operacion sin
                agregar complejidad innecesaria.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappHref}
                  className="inline-flex items-center justify-center gap-3 rounded-sm bg-brand-violet px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand-bg transition hover:bg-brand-orange-dark"
                >
                  Hablemos de tu operacion
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#mapa"
                  className="inline-flex items-center justify-center rounded-sm border border-brand-violet/20 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand-violet transition hover:border-brand-violet/40 hover:bg-brand-paper"
                >
                  Ver mapa Kikuba
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src={kikubaLogo}
                alt="Logo Kikuba"
                className="w-full max-w-[430px] object-contain"
              />
            </div>
          </div>
        </section>

        <section id="problema" className="border-y border-brand-violet/10 bg-brand-paper py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionIntro
              eyebrow="Lo que se traba"
              title="Tu negocio no necesita mas herramientas. Necesita claridad."
              text="Muchos negocios trabajan duro, pero operan entre mensajes, hojas de calculo, notas sueltas y decisiones tomadas con informacion incompleta."
            />
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {pains.map((item) => (
                <InfoCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section id="metodo" className="bg-brand-violet py-16 text-brand-bg sm:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionIntro
              eyebrow="Nuestro metodo"
              title="Observamos, analizamos y construimos con los pies en la operacion."
              text="No empezamos por la herramienta. Empezamos por entender que pasa, quienes lo viven y que solucion tendria impacto real."
              dark
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {method.map((item) => (
                <MethodCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section id="servicios" className="bg-brand-bg py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionIntro
              eyebrow="Servicios"
              title="Soluciones digitales que ordenan tu negocio."
              text="Hacemos tecnologia util para que la operacion sea mas clara, medible y facil de seguir para quienes trabajan todos los dias en ella."
            />
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {services.map((item) => (
                <ServiceCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section id="diferencial" className="border-y border-brand-violet/10 bg-brand-paper py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-slate">
                Diferencial Kikuba
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-brand-violet sm:text-5xl">
                Tambien escuchamos a la gente que vive la operacion.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-brand-violet/74">
              <p>
                Muchos proyectos digitales fallan porque se disenan solo desde
                la vision directiva. Kikuba tambien toma en cuenta al staff:
                quien atiende, registra, vende, prepara, reporta y resuelve
                problemas todos los dias.
              </p>
              <p className="border-l-2 border-brand-yellow pl-5 font-medium text-brand-violet">
                La tecnologia funciona mejor cuando entiende a las personas que
                la van a usar.
              </p>
            </div>
          </div>
        </section>

        <section id="mapa" className="bg-brand-bg py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-slate">
                Mapa Kikuba
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-brand-violet sm:text-5xl">
                Los nodos explican como pensamos una operacion.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-violet/72">
                Esta parte mantiene la idea experimental sin volverla una barrera
                de navegacion. El logo funciona como mapa de lectura: cada nodo
                representa una parte del proceso.
              </p>

              <div className="mt-8 border border-brand-violet/12 bg-brand-paper p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-slate">
                  {activeNode.label}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-brand-violet">
                  {activeNode.title}
                </h3>
                <p className="mt-3 leading-7 text-brand-violet/70">
                  {activeNode.text}
                </p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[470px]">
              <img src={kikubaLogo} alt="Mapa visual Kikuba" className="w-full object-contain" />
              {mapNodes.map((node) => (
                <button
                  key={node.label}
                  type="button"
                  onClick={() => setActiveNode(node)}
                  className={`absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border transition ${
                    node.label === activeNode.label
                      ? "scale-125 border-brand-violet bg-brand-yellow shadow-[0_0_0_10px_rgba(216,199,166,0.34)]"
                      : "border-brand-bg bg-brand-violet hover:scale-110 hover:bg-brand-orange-dark"
                  }`}
                  style={{ top: node.top, left: node.left }}
                  aria-label={`Ver nodo ${node.label}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-brand-violet py-16 text-brand-bg sm:py-20">
          <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
            <div className="mx-auto mb-7 h-3 w-3 rotate-45 bg-brand-yellow" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-yellow">
              Siguiente paso
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-6xl">
              Hablemos de tu operacion.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-brand-bg/74">
              Cuentame que esta trabado. Lo observamos, lo analizamos y
              definimos una primera solucion clara para probar con tu negocio.
            </p>
            <a
              href={whatsappHref}
              className="mt-10 inline-flex items-center justify-center gap-3 rounded-sm bg-brand-bg px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand-violet transition hover:bg-brand-yellow"
            >
              Escribir por WhatsApp
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-brand-paper py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-center gap-4">
            <img src={kikubaLogo} alt="Kikuba" className="h-14 w-14 object-cover object-top" />
            <div>
              <p className="brand-word text-lg font-semibold text-brand-violet">
                KIKUBA
              </p>
              <p className="mt-1 text-sm text-brand-violet/62">
                Observamos - Analizamos - Construimos
              </p>
            </div>
          </div>
          <p className="text-sm text-brand-violet/62">
            Ensenada, Baja California · WhatsApp +52 646 286 52 41
          </p>
        </div>
      </footer>
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p
        className={`text-xs font-semibold uppercase tracking-[0.24em] ${
          dark ? "text-brand-yellow" : "text-brand-slate"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl ${
          dark ? "text-brand-bg" : "text-brand-violet"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-6 max-w-2xl text-lg leading-8 ${
          dark ? "text-brand-bg/72" : "text-brand-violet/72"
        }`}
      >
        {text}
      </p>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  text,
}: {
  key?: string;
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <article className="border border-brand-violet/12 bg-brand-bg p-6 transition hover:bg-brand-orange-light/16">
      <Icon className="h-7 w-7 text-brand-violet/76" />
      <h3 className="mt-8 text-lg font-semibold text-brand-violet">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-brand-violet/66">{text}</p>
    </article>
  );
}

function MethodCard({
  icon: Icon,
  label,
  title,
  text,
}: {
  key?: string;
  icon: LucideIcon;
  label: string;
  title: string;
  text: string;
}) {
  return (
    <article className="border border-brand-bg/14 bg-brand-bg/[0.04] p-6">
      <div className="flex items-center justify-between gap-4">
        <Icon className="h-7 w-7 text-brand-yellow" />
        <span className="text-xs font-semibold tracking-[0.2em] text-brand-orange-light">
          {label}
        </span>
      </div>
      <h3 className="mt-8 text-lg font-semibold uppercase tracking-[0.14em]">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-brand-bg/68">{text}</p>
    </article>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  text,
}: {
  key?: string;
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <article className="group border border-brand-violet/12 bg-brand-paper p-7 transition hover:bg-brand-orange-light/18">
      <Icon className="h-8 w-8 text-brand-violet/72" />
      <h3 className="mt-10 text-xl font-semibold text-brand-violet">{title}</h3>
      <p className="mt-4 leading-7 text-brand-violet/68">{text}</p>
      <a
        href={whatsappHref}
        className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-violet"
      >
        Conversar
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </a>
    </article>
  );
}
