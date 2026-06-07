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
import kikubaLogo from "./assets/kikuba-logo.png";

const whatsappHref =
  "https://wa.me/526462865241?text=Hola%20Kikuba%2C%20quiero%20hablar%20sobre%20mi%20operacion.";

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Diferencial", href: "#diferencial" },
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

const outcomes = [
  "Menos informacion perdida entre mensajes.",
  "Procesos mas faciles de seguir para el equipo.",
  "Datos claros para decidir sin depender de la intuicion.",
  "Herramientas hechas alrededor de la operacion, no al reves.",
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark-text">
      <header className="sticky top-0 z-50 border-b border-brand-violet/12 bg-brand-bg/92 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <a href="#inicio" className="flex min-w-0 items-center gap-3">
            <img
              src={kikubaLogo}
              alt="Kikuba - Observamos, analizamos, construimos"
              className="h-12 w-12 shrink-0 object-contain"
            />
            <div className="min-w-0">
              <p className="brand-word text-base font-semibold text-brand-violet sm:text-lg">
                KIKUBA
              </p>
              <p className="hidden text-[10px] font-medium uppercase tracking-[0.24em] text-brand-slate sm:block">
                Observamos · Analizamos · Construimos
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-slate transition hover:text-brand-violet"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappHref}
              className="inline-flex items-center gap-2 rounded-sm bg-brand-violet px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-bg transition hover:bg-brand-orange-dark"
            >
              Hablemos
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-brand-violet/20 text-brand-violet md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-brand-violet/10 bg-brand-paper px-5 py-5 md:hidden">
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
        <section id="inicio" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:py-20 lg:grid-cols-[1.02fr_0.88fr] lg:px-8 lg:py-24">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-brand-slate">
                Agencia digital para operaciones reales
              </p>
              <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.98] text-brand-violet sm:text-6xl lg:text-7xl">
                Tecnologia que entiende tu operacion.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-brand-violet/76">
                Escuchamos como trabaja tu equipo, detectamos donde se atora el
                negocio y construimos herramientas digitales que encajan con la
                operacion real.
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
                  href="#proceso"
                  className="inline-flex items-center justify-center rounded-sm border border-brand-violet/20 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand-violet transition hover:border-brand-violet/40 hover:bg-brand-paper"
                >
                  Ver como trabajamos
                </a>
              </div>
              <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 text-sm text-brand-violet/70 sm:grid-cols-3">
                <p className="border-l border-brand-yellow pl-4">
                  Primero entendemos.
                </p>
                <p className="border-l border-brand-yellow pl-4">
                  Luego construimos.
                </p>
                <p className="border-l border-brand-yellow pl-4">
                  Mejoramos con tu equipo.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 translate-x-8 translate-y-8 bg-brand-yellow/35" />
              <div className="relative border border-brand-violet/14 bg-brand-paper p-6 shadow-[0_24px_80px_rgba(37,48,43,0.12)] sm:p-8">
                <img
                  src={kikubaLogo}
                  alt="Logo oficial de Kikuba"
                  className="mx-auto w-full max-w-[430px] object-contain"
                />
                <div className="mt-7 border-t border-brand-violet/12 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-slate">
                    Logo oficial
                  </p>
                  <p className="mt-2 text-sm leading-6 text-brand-violet/68">
                    Se usa como sello de confianza y sistema visual. No se
                    modifica, no se redibuja y no compite con el mensaje.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-violet/10 bg-brand-paper py-14">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-slate">
                  El problema
                </p>
                <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight text-brand-violet sm:text-5xl">
                  Tu negocio no necesita mas herramientas. Necesita claridad.
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-brand-violet/72">
                Muchos negocios trabajan duro, pero operan entre mensajes,
                hojas de calculo, notas sueltas y decisiones tomadas con
                informacion incompleta.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {pains.map((item) => (
                <InfoCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section id="proceso" className="bg-brand-violet py-18 text-brand-bg sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-yellow">
                Nuestro metodo
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
                Observamos, analizamos y construimos con los pies en la
                operacion.
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-bg/72">
                No empezamos por la herramienta. Empezamos por entender que
                pasa, quienes lo viven y que solucion tendria impacto real.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {method.map((item) => (
                <MethodCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section id="servicios" className="bg-brand-bg py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-slate">
                  Servicios
                </p>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-brand-violet sm:text-5xl">
                  Soluciones digitales que ordenan tu negocio.
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-brand-violet/72">
                Hacemos tecnologia util para que la operacion sea mas clara,
                medible y facil de seguir para quienes trabajan todos los dias
                en ella.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {services.map((item) => (
                <ServiceCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="diferencial"
          className="border-y border-brand-violet/10 bg-brand-paper py-18 sm:py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-slate">
                El diferencial Kikuba
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

        <section className="bg-brand-bg py-18 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-slate">
                Que buscamos lograr
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-brand-violet sm:text-5xl">
                Menos caos operativo. Mas control real.
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-violet/72">
                La meta no es sumar software por moda. La meta es que el
                negocio tenga una forma mas clara de operar, medir y mejorar.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {outcomes.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 border border-brand-violet/12 bg-brand-paper p-5"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-orange-dark" />
                  <p className="text-sm leading-6 text-brand-violet/74">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-brand-violet py-18 text-brand-bg sm:py-24">
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

      <footer className="bg-brand-paper py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div className="flex items-center gap-4">
            <img
              src={kikubaLogo}
              alt="Kikuba"
              className="h-16 w-16 shrink-0 object-contain"
            />
            <div>
              <p className="brand-word text-lg font-semibold text-brand-violet">
                KIKUBA
              </p>
              <p className="mt-2 text-sm text-brand-violet/66">
                Observamos · Analizamos · Construimos
              </p>
            </div>
          </div>
          <div className="lg:text-right">
            <p className="text-sm font-medium text-brand-violet">
              Tecnologia que entiende tu operacion.
            </p>
            <p className="mt-2 text-sm text-brand-violet/64">
              Ensenada, Baja California · WhatsApp +52 646 286 52 41
            </p>
            <p className="mt-5 text-xs text-brand-violet/45">© 2026 Kikuba.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

type CardIcon = LucideIcon;

function InfoCard({
  icon: Icon,
  title,
  text,
}: {
  key?: string;
  icon: CardIcon;
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
  icon: CardIcon;
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
  icon: CardIcon;
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
