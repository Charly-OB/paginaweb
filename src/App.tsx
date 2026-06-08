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
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import kikubaLogo from "./assets/kikuba-logo-transparent.png";

const whatsappHref =
  "https://wa.me/526462865241?text=Hola%20Kikuba%2C%20quiero%20hablar%20sobre%20mi%20operacion.";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Tu operacion", href: "#problema" },
  { label: "Metodo", href: "#metodo" },
  { label: "Servicios", href: "#servicios" },
  { label: "Para quien", href: "#para-quien" },
  { label: "Detras", href: "#detras" },
  { label: "Resultados", href: "#resultados" },
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
    text: "Hablamos con quien dirige y tambien con quien atiende, registra, prepara y resuelve todos los dias. Ahi esta la operacion real.",
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
    text: "Para que cuando alguien busque tu negocio encuentre una experiencia clara, confiable y lista para abrir una conversacion.",
  },
  {
    icon: Workflow,
    title: "Sistemas para operar",
    text: "Para que tus pedidos dejen de perderse en WhatsApp y tu inventario deje de depender de quien recuerde actualizarlo.",
  },
  {
    icon: BarChart3,
    title: "Datos para decidir",
    text: "Para saber que se vende, que deja margen, donde se pierde tiempo y que parte de la operacion necesita atencion.",
  },
];

const results = [
  {
    value: "Menos ruido",
    text: "Pedidos, datos y tareas dejan de depender de memoria, notas sueltas o mensajes perdidos.",
  },
  {
    value: "Mas control",
    text: "Tu operacion se vuelve mas visible para decidir que atender primero y que medir.",
  },
  {
    value: "Mejor adopcion",
    text: "La herramienta se construye escuchando a quienes la usaran todos los dias.",
  },
];

const fitSignals = [
  "Tus pedidos llegan por WhatsApp y alguien los anota en papel o en una hoja.",
  "Tu inventario vive en Excel, o ya nadie sabe si esta actualizado.",
  "Al final del mes no sabes con claridad que producto, servicio o turno deja mas margen.",
  "Cada persona nueva aprende la operacion preguntando porque no hay sistema claro.",
  "Tomas decisiones importantes con intuicion porque los datos estan dispersos.",
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
    label: "Detras",
    title: "Quien esta detras",
    text: "Kikuba nace desde la operacion real y una forma cercana de construir.",
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
  const [activeNode, setActiveNode] = useState(mapNodes[0]);
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
    <div className="flex min-h-screen flex-col overflow-hidden bg-brand-bg text-brand-dark-text">
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
                Hablemos de tu operacion
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
                Observamos tu operacion, escuchamos a tu equipo y creamos
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
                  Hablemos de tu operacion
                  <ArrowRight className="h-4 w-4" />
                </MotionLink>
                <MotionLink
                  href="#mapa"
                  className="inline-flex items-center justify-center rounded-sm border border-brand-violet/20 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand-violet transition hover:border-brand-violet/40 hover:bg-brand-paper"
                  reduceMotion={Boolean(reduceMotion)}
                >
                  Ver mapa Kikuba
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

        <WindowSection id="problema" activeSection={activeSection} className="border-y border-brand-violet/10 bg-brand-paper py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionIntro
              eyebrow="Lo que se traba"
              title="Tu negocio no necesita mas herramientas. Necesita claridad."
              text="Muchos negocios trabajan duro, pero operan entre mensajes, hojas de calculo, notas sueltas y decisiones tomadas con informacion incompleta."
            />
            <motion.div
              variants={staggerGroup}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-12 grid gap-4 md:grid-cols-3"
            >
              {pains.map((item) => (
                <InfoCard key={item.title} {...item} />
              ))}
            </motion.div>
          </div>
        </WindowSection>

        <WindowSection id="metodo" activeSection={activeSection} className="bg-brand-violet py-16 text-brand-bg sm:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionIntro
              eyebrow="Nuestro metodo"
              title="Observamos, analizamos y construimos con los pies en la operacion."
              text="No empezamos por la herramienta. Empezamos por entender que pasa, quienes lo viven y que solucion tendria impacto real."
              dark
            />
            <motion.div
              variants={staggerGroup}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
            >
              {method.map((item) => (
                <MethodCard key={item.title} {...item} />
              ))}
            </motion.div>
          </div>
        </WindowSection>

        <WindowSection id="servicios" activeSection={activeSection} className="bg-brand-bg py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionIntro
              eyebrow="Servicios"
              title="Soluciones digitales que ordenan tu negocio."
              text="Hacemos tecnologia util para que la operacion sea mas clara, medible y facil de seguir para quienes trabajan todos los dias en ella."
            />
            <motion.div
              variants={staggerGroup}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-12 grid gap-5 lg:grid-cols-3"
            >
              {services.map((item) => (
                <ServiceCard key={item.title} {...item} />
              ))}
            </motion.div>
          </div>
        </WindowSection>

        <WindowSection id="para-quien" activeSection={activeSection} className="border-y border-brand-violet/10 bg-brand-paper py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
            <SectionIntro
              eyebrow="Para quien es"
              title="Esto es para negocios que ya sienten el desorden."
              text="No necesitas llegar con una idea tecnica. Si alguna de estas situaciones se parece a tu dia a dia, Kikuba puede ayudarte a ordenar la operacion."
            />
            <div className="grid gap-3">
              {fitSignals.map((signal) => (
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
              <a
                href={whatsappHref}
                className="mt-3 inline-flex items-center justify-center gap-3 rounded-sm bg-brand-violet px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand-bg transition hover:bg-brand-orange-dark sm:w-max"
              >
                Si te suena familiar, hablemos
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </WindowSection>

        <WindowSection id="detras" activeSection={activeSection} className="border-y border-brand-violet/10 bg-brand-paper py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-slate">
                Detras de Kikuba
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-brand-violet sm:text-5xl">
                Kikuba nace desde la operacion real.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-brand-violet/74">
              <p>
                Soy Juan Carlos, fundador y desarrollador independiente. Antes
                de construir sistemas, he vivido el trabajo diario desde dentro:
                atencion, procesos, presion, improvisacion y decisiones tomadas
                con informacion incompleta.
              </p>
              <p className="border-l-2 border-brand-yellow pl-5 font-medium text-brand-violet">
                Por eso Kikuba no empieza vendiendo tecnologia: empieza
                entendiendo como trabaja tu negocio y escuchando a quienes lo
                hacen funcionar.
              </p>
            </div>
          </div>
        </WindowSection>

        <WindowSection id="resultados" activeSection={activeSection} className="bg-brand-bg py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionIntro
              eyebrow="Resultados"
              title="Lo que buscamos cambiar se tiene que notar en la operacion."
              text="La meta no es tener una herramienta mas. Es ganar claridad, reducir friccion y tomar mejores decisiones con informacion que si puedes usar."
            />
            <motion.div
              variants={staggerGroup}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-12 grid gap-5 md:grid-cols-3"
            >
              {results.map((item) => (
                <ResultCard key={item.value} {...item} />
              ))}
            </motion.div>
          </div>
        </WindowSection>

        <WindowSection id="mapa" activeSection={activeSection} className="bg-brand-bg py-16 sm:py-20">
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
                <motion.button
                  key={node.label}
                  type="button"
                  onClick={() => setActiveNode(node)}
                  whileHover={reduceMotion ? undefined : { scale: 1.12 }}
                  animate={
                    node.label === activeNode.label && !reduceMotion
                      ? { scale: [1.18, 1.28, 1.18] }
                      : undefined
                  }
                  transition={
                    node.label === activeNode.label && !reduceMotion
                      ? { duration: 2.4, repeat: Infinity }
                      : undefined
                  }
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
        </WindowSection>

        <WindowSection id="contacto" activeSection={activeSection} className="bg-brand-violet py-16 text-brand-bg sm:py-20">
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
          ? "block h-full overflow-y-auto overscroll-contain"
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
  onClick?: () => void;
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
