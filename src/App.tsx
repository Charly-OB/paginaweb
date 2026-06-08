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
import { motion, useReducedMotion } from "motion/react";
import type { MouseEventHandler, ReactNode } from "react";
import { useEffect, useState } from "react";
import kikubaLogo from "./assets/kikuba-logo-transparent.png";

const whatsappHref =
  "https://wa.me/526462865241?text=Hola%20Kikuba%2C%20quiero%20hablar%20sobre%20mi%20operaci%C3%B3n.";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Operación", href: "#operacion" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Origen", href: "#origen" },
];

const pains = [
  {
    icon: MessageSquareText,
    title: "Información dispersa",
    text: "Pedidos, dudas y pendientes viven entre WhatsApp, notas, llamadas y memoria.",
  },
  {
    icon: ClipboardList,
    title: "Trabajo repetido",
    text: "El equipo captura, revisa y confirma lo mismo varias veces durante el día.",
  },
  {
    icon: BarChart3,
    title: "Decisiones a ojo",
    text: "Hay datos, pero no están ordenados para entender qué está pasando.",
  },
];

const method = [
  {
    icon: Eye,
    label: "01",
    title: "Observamos",
    text: "Hablamos con quien dirige y también con quien atiende, registra, prepara y resuelve todos los días. Ahí está la operación real.",
  },
  {
    icon: Search,
    label: "02",
    title: "Analizamos",
    text: "Detectamos patrones, prioridades y oportunidades antes de proponer una solución.",
  },
  {
    icon: Workflow,
    label: "03",
    title: "Construimos",
    text: "Creamos una primera versión útil, clara y lista para probar con tu equipo.",
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
    text: "Para que cuando alguien busque tu negocio encuentre una experiencia clara, confiable y lista para abrir una conversación.",
  },
  {
    icon: Workflow,
    title: "Sistemas para operar",
    text: "Para que tus pedidos dejen de perderse en WhatsApp y tu inventario deje de depender de quien recuerde actualizarlo.",
  },
  {
    icon: BarChart3,
    title: "Datos para decidir",
    text: "Para saber qué se vende, qué deja margen, dónde se pierde tiempo y qué parte de la operación necesita atención.",
  },
];

const projects = [
  {
    title: "SIE7E Beauty Room",
    type: "Proyecto principal",
    status: "En producción",
    text: "Sitio público, portal, panel administrativo y backend para operar citas, clientas, calendario, roles, comunicación por WhatsApp y seguimiento del negocio.",
    metrics: ["Sitio público", "Admin", "Backend", "WhatsApp"],
  },
  {
    title: "Capé Café PWA",
    type: "Sistema operativo para café",
    status: "En desarrollo",
    text: "PWA React/Vite con Supabase e IndexedDB para inventario, costos, margen financiero, tickets y OCR sin exponer API keys en frontend.",
    metrics: ["Supabase", "OCR tickets", "Inventario"],
  },
  {
    title: "Capé Café Menu Digital",
    type: "Menú PWA para negocio local",
    status: "Construido",
    text: "Menú digital con categorías, búsqueda, QR, información del negocio, ubicación, Instagram, traducciones ES/EN y datos de nutrición estimada.",
    metrics: ["QR", "ES/EN", "PWA"],
  },
  {
    title: "Pipa Segura",
    type: "Pedidos y rutas",
    status: "Prototipo",
    text: "Interfaz para pedir pipas de agua, registrar datos del cliente, consultar pedidos y mover estatus entre pendiente, en ruta y entregado.",
    metrics: ["Mapa", "Pedidos", "Estatus"],
  },
  {
    title: "Clinic AI Assistant",
    type: "Atención y agenda",
    status: "Prototipo avanzado",
    text: "Dashboard con asistente IA, simulador tipo WhatsApp, citas, pacientes, intervención humana y conexiones planeadas con Google Calendar, Drive y Contacts.",
    metrics: ["Gemini", "Agenda", "WhatsApp"],
  },
  {
    title: "Vino BC Intelligence",
    type: "Dashboard de datos",
    status: "Prototipo",
    text: "Tablero para visualizar salud de viñedos y convertir información dispersa del sector vino en lectura operativa para toma de decisiones.",
    metrics: ["Dashboard", "Datos", "Viñedos"],
  },
];

const fitSignals = [
  "Tus pedidos llegan por WhatsApp y alguien los anota en papel o en una hoja.",
  "Tu inventario vive en Excel, o ya nadie sabe si está actualizado.",
  "Al final del mes no sabes con claridad qué producto, servicio o turno deja más margen.",
  "Cada persona nueva aprende la operación preguntando porque no hay sistema claro.",
  "Tomas decisiones importantes con intuición porque los datos están dispersos.",
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const staggerGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function motionTransition(reduceMotion: boolean) {
  return reduceMotion
    ? { duration: 0 }
    : { duration: 0.7, ease: [0.22, 1, 0.36, 1] };
}

function getInitialSection() {
  if (typeof window === "undefined") {
    return "inicio";
  }

  const hash = window.location.hash.replace("#", "");
  return navItems.some((item) => item.href === `#${hash}`) ? hash : "inicio";
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(getInitialSection);
  const reduceMotion = useReducedMotion();
  const transition = motionTransition(Boolean(reduceMotion));

  useEffect(() => {
    const updateFromHash = () => {
      setActiveSection(getInitialSection());
    };

    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);
    return () => window.removeEventListener("hashchange", updateFromHash);
  }, []);

  function openSection(href: string) {
    const section = href.replace("#", "");
    setActiveSection(section);
    setMenuOpen(false);
    window.history.replaceState(null, "", href);
  }

  return (
    <div className="flex h-[100dvh] max-h-[100dvh] flex-col overflow-hidden bg-brand-bg text-brand-dark-text">
      <header className="z-50 shrink-0 border-b border-brand-violet/12 bg-brand-bg/92 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <a
            href="#inicio"
            className="flex min-w-0 items-center gap-3"
            onClick={(event) => {
              event.preventDefault();
              openSection("#inicio");
            }}
          >
            <img
              src={kikubaLogo}
              alt="Kikuba"
              className="h-12 w-12 shrink-0 object-cover object-top"
            />
            <p className="brand-word text-base font-semibold text-brand-violet sm:text-lg">
              KIKUBA
            </p>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  openSection(item.href);
                }}
                className={`text-xs font-semibold uppercase tracking-[0.16em] transition ${
                  activeSection === item.href.replace("#", "")
                    ? "text-brand-violet"
                    : "text-brand-slate hover:text-brand-violet"
                }`}
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
                  onClick={(event) => {
                    event.preventDefault();
                    openSection(item.href);
                  }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={whatsappHref}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-brand-violet px-5 py-3 text-sm font-semibold text-brand-bg"
                onClick={() => setMenuOpen(false)}
              >
                Hablemos de tu operación
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="min-h-0 flex-1 overflow-hidden">
        <WindowSection id="inicio" activeSection={activeSection} className="relative overflow-hidden">
          <NodeField reduceMotion={Boolean(reduceMotion)} />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
            <motion.div
              variants={staggerGroup}
              initial="hidden"
              animate="visible"
              className="relative z-10"
            >
              <motion.p
                variants={fadeUp}
                transition={transition}
                className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-brand-slate"
              >
                Agencia digital para operaciones reales
              </motion.p>
              <motion.h1
                variants={fadeUp}
                transition={transition}
                className="max-w-4xl font-display text-5xl font-semibold leading-[0.98] text-brand-violet sm:text-6xl lg:text-7xl"
              >
                Primero entendemos. Luego{" "}
                <span className="text-brand-slate">construimos.</span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                transition={transition}
                className="mt-7 max-w-2xl text-lg leading-8 text-brand-violet/76"
              >
                Observamos tu operación, escuchamos a tu equipo y creamos
                herramientas digitales que ordenan el trabajo real.
              </motion.p>
              <motion.div
                variants={fadeUp}
                transition={transition}
                className="mt-9 flex flex-col gap-3 sm:flex-row"
              >
                <MotionLink
                  href={whatsappHref}
                  className="inline-flex items-center justify-center gap-3 rounded-sm bg-brand-violet px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand-bg transition hover:bg-brand-orange-dark"
                  reduceMotion={Boolean(reduceMotion)}
                >
                  Hablemos de tu operación
                  <ArrowRight className="h-4 w-4" />
                </MotionLink>
                <MotionLink
                  href="#operacion"
                  className="inline-flex items-center justify-center rounded-sm border border-brand-violet/20 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand-violet transition hover:border-brand-violet/40 hover:bg-brand-paper"
                  reduceMotion={Boolean(reduceMotion)}
                  onClick={(event) => {
                    event.preventDefault();
                    openSection("#operacion");
                  }}
                >
                  Ver operación
                </MotionLink>
              </motion.div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={reduceMotion ? undefined : { delay: 0.18, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex justify-center lg:justify-end"
            >
              <img
                src={kikubaLogo}
                alt="Logo Kikuba"
                className="w-full max-w-[430px] object-contain drop-shadow-[0_22px_50px_rgba(37,48,43,0.08)]"
              />
            </motion.div>
          </div>
        </WindowSection>

        <WindowSection id="operacion" activeSection={activeSection} className="border-y border-brand-violet/10 bg-brand-paper py-10 sm:py-14">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
            <SectionIntro
              eyebrow="Operación"
              title="Donde se traba el trabajo real."
              text="Unimos el problema y para quién es: si tu negocio vive entre mensajes, hojas, notas y decisiones a ojo, aquí empieza Kikuba."
            />
            <div className="grid gap-5">
              <motion.div
                variants={staggerGroup}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="grid gap-4 md:grid-cols-3"
              >
                {pains.map((item) => (
                  <InfoCard key={item.title} {...item} />
                ))}
              </motion.div>
              <div className="grid gap-3 md:grid-cols-2">
                {fitSignals.slice(0, 4).map((signal) => (
                  <div
                    key={signal}
                    className="flex gap-3 border border-brand-violet/10 bg-brand-bg p-4"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-orange-dark" />
                    <p className="text-sm leading-6 text-brand-violet/74">
                      {signal}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </WindowSection>

        <WindowSection id="soluciones" activeSection={activeSection} className="bg-brand-violet py-10 text-brand-bg sm:py-14">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.86fr_1.14fr] lg:items-start lg:px-8">
            <SectionIntro
              eyebrow="Método + servicios"
              title="Entender primero, construir después."
              text="No vendemos herramientas sueltas. Observamos la operación, detectamos prioridades y convertimos lo importante en sistemas, sitios y datos útiles."
              dark
            />
            <div className="grid gap-5">
              <motion.div
                variants={staggerGroup}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="grid gap-4 md:grid-cols-2"
              >
                {method.slice(0, 3).map((item) => (
                  <MethodCard key={item.title} {...item} />
                ))}
                {services.map((item) => (
                  <ServiceCard key={item.title} {...item} />
                ))}
              </motion.div>
            </div>
          </div>
        </WindowSection>

        <WindowSection id="proyectos" activeSection={activeSection} className="bg-brand-bg py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionIntro
              eyebrow="Proyectos"
              title="Proyectos reales y prototipos en marcha."
              text="No son promesas abstractas. Son sistemas, paneles, PWAs y flujos operativos trabajados en proyectos reales, con distintos niveles de avance."
            />
            <motion.div
              variants={staggerGroup}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-10 grid gap-5 lg:grid-cols-3"
            >
              {projects.map((item) => (
                <ProjectCard key={item.title} {...item} />
              ))}
            </motion.div>
          </div>
        </WindowSection>

        <WindowSection id="origen" activeSection={activeSection} className="border-y border-brand-violet/10 bg-brand-paper py-10 sm:py-14">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-slate">
                Origen Kikuba
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-brand-violet sm:text-5xl">
                Kikuba nace desde la operación real.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-brand-violet/74">
              <p>
                Soy Juan Carlos, fundador y desarrollador independiente. Antes
                de construir sistemas, he vivido el trabajo diario desde dentro:
                atención, procesos, presión, improvisación y decisiones tomadas
                con información incompleta.
              </p>
              <p className="border-l-2 border-brand-yellow pl-5 font-medium text-brand-violet">
                Por eso Kikuba no empieza vendiendo tecnología: empieza
                entendiendo cómo trabaja tu negocio y escuchando a quienes lo
                hacen funcionar.
              </p>
            </div>
          </div>
        </WindowSection>
      </main>

      <footer className="hidden">
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

function WindowSection({
  id,
  activeSection,
  className,
  children,
}: {
  id: string;
  activeSection: string;
  className: string;
  children: ReactNode;
}) {
  const isActive = id === activeSection;

  return (
    <motion.section
      id={id}
      aria-hidden={!isActive}
      className={`${className} ${
        isActive
          ? "window-scroll block h-full overflow-y-auto overscroll-contain"
          : "hidden"
      }`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
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
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      variants={fadeUp}
      transition={motionTransition(Boolean(reduceMotion))}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className="border border-brand-violet/12 bg-brand-bg p-6 transition hover:bg-brand-orange-light/16"
    >
      <Icon className="h-7 w-7 text-brand-violet/76" />
      <h3 className="mt-8 text-lg font-semibold text-brand-violet">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-brand-violet/66">{text}</p>
    </motion.article>
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
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      variants={fadeUp}
      transition={motionTransition(Boolean(reduceMotion))}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className="border border-brand-bg/14 bg-brand-bg/[0.04] p-6"
    >
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
    </motion.article>
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
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      variants={fadeUp}
      transition={motionTransition(Boolean(reduceMotion))}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className="group border border-brand-violet/12 bg-brand-paper p-7 transition hover:bg-brand-orange-light/18"
    >
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
    </motion.article>
  );
}

function ProjectCard({
  title,
  type,
  status,
  text,
  metrics,
}: {
  key?: string;
  title: string;
  type: string;
  status: string;
  text: string;
  metrics: string[];
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      variants={fadeUp}
      transition={motionTransition(Boolean(reduceMotion))}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className="border border-brand-violet/12 bg-brand-paper p-7"
    >
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-slate">
            {type}
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-brand-violet">
            {title}
          </h3>
        </div>
        <span className="shrink-0 border border-brand-violet/10 bg-brand-bg px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-violet/70">
          {status}
        </span>
      </div>
      <p className="mt-5 leading-7 text-brand-violet/68">{text}</p>
      <div className="mt-7 flex flex-wrap gap-2">
        {metrics.map((metric) => (
          <span
            key={metric}
            className="border border-brand-violet/10 bg-brand-bg px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-violet/70"
          >
            {metric}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

function ResultCard({ value, text }: { key?: string; value: string; text: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      variants={fadeUp}
      transition={motionTransition(Boolean(reduceMotion))}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className="border border-brand-violet/12 bg-brand-paper p-7"
    >
      <BarChart3 className="h-7 w-7 text-brand-violet/72" />
      <h3 className="mt-10 text-2xl font-semibold text-brand-violet">
        {value}
      </h3>
      <p className="mt-4 leading-7 text-brand-violet/68">{text}</p>
    </motion.article>
  );
}

function MotionLink({
  href,
  className,
  reduceMotion,
  children,
  onClick,
}: {
  href: string;
  className: string;
  reduceMotion: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <motion.a
      href={href}
      className={className}
      onClick={onClick}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}

function NodeField({ reduceMotion }: { reduceMotion: boolean }) {
  const nodes = [
    { top: "19%", left: "59%", size: "h-3 w-3", color: "bg-brand-yellow" },
    { top: "26%", left: "70%", size: "h-2 w-2", color: "bg-brand-slate" },
    { top: "40%", left: "54%", size: "h-4 w-4", color: "bg-brand-orange-light" },
    { top: "52%", left: "81%", size: "h-3 w-3", color: "bg-brand-yellow" },
    { top: "69%", left: "63%", size: "h-5 w-5", color: "bg-brand-violet" },
  ];

  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 overflow-hidden lg:block">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,253,248,0.72),transparent_34%)]" />
      <svg
        viewBox="0 0 640 520"
        className="absolute inset-0 h-full w-full opacity-35"
        aria-hidden="true"
      >
        <path
          d="M80 210 L230 95 L420 135 L555 245 L390 410 L165 360 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-brand-slate"
        />
        <path
          d="M230 95 L390 410 M80 210 L420 135 M165 360 L555 245"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-brand-yellow"
        />
      </svg>
      {nodes.map((node, index) => (
        <motion.span
          key={`${node.top}-${node.left}`}
          className={`absolute rounded-full ${node.size} ${node.color}`}
          style={{ top: node.top, left: node.left }}
          animate={
            reduceMotion
              ? undefined
              : { opacity: [0.65, 1, 0.65], scale: [1, 1.08, 1] }
          }
          transition={
            reduceMotion
              ? undefined
              : { duration: 3.4, delay: index * 0.35, repeat: Infinity }
          }
        />
      ))}
    </div>
  );
}
