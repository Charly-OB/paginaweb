import { useState } from "react";
import { motion } from "motion/react";
import kikubaLogo from "./assets/kikuba-logo-transparent.png";

const whatsappHref =
  "https://wa.me/526462865241?text=Hola%20Kikuba%2C%20quiero%20hablar%20sobre%20mi%20operaci%C3%B3n%20y%20ver%20si%20podemos%20ordenarla%20con%20tecnolog%C3%ADa.";

const navItems = [
  { label: "Enfoque", href: "#enfoque" },
  { label: "Método", href: "#metodo" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
];

const fitItems = [
  "Negocios donde los pedidos, citas o pendientes viven entre WhatsApp, notas y memoria.",
  "Equipos pequeños que ya trabajan mucho, pero todavía no tienen una forma clara de ordenar la operación.",
  "Personas dueñas o encargadas que quieren saber qué está pasando sin depender de reportes hechos a mano.",
  "Servicios locales que necesitan tecnología útil, explicable y hecha alrededor de su forma real de trabajar.",
];

const methodItems = [
  {
    step: "01",
    title: "Observamos",
    desc: "Entendemos cómo trabaja tu negocio, no solo cómo debería trabajar en teoría. Hablamos con quien decide y con quien opera todos los días.",
  },
  {
    step: "02",
    title: "Analizamos",
    desc: "Ordenamos problemas, prioridades y oportunidades para encontrar la herramienta correcta antes de escribir código.",
  },
  {
    step: "03",
    title: "Construimos",
    desc: "Creamos una versión clara y práctica: sitio, sistema, tablero o automatización que tu equipo pueda usar sin fricción.",
  },
];

const services = [
  {
    title: "Sitios que abren conversaciones",
    desc: "Presencia digital clara para que tus clientes entiendan qué ofreces, confíen en tu negocio y sepan cómo contactarte.",
  },
  {
    title: "Sistemas para ordenar la operación",
    desc: "Herramientas para citas, pedidos, inventario, seguimiento y tareas repetitivas que hoy viven dispersas.",
  },
  {
    title: "Datos para decidir mejor",
    desc: "Tableros y reportes simples para ver ventas, margen, actividad y puntos donde se está perdiendo tiempo.",
  },
];

const projects = [
  {
    name: "SIE7E Beauty Room",
    type: "Sitio, portal y panel administrativo",
    desc: "Proyecto principal con sitio público, portal, backend y panel para operar citas, clientas, calendario, roles y seguimiento por WhatsApp.",
  },
  {
    name: "Capé Café PWA",
    type: "Sistema operativo para café",
    desc: "PWA para inventario, costos, márgenes, tickets y operación interna, pensada para convertir el trabajo diario en información útil.",
  },
  {
    name: "Capé Café Menú Digital",
    type: "Menú web para negocio local",
    desc: "Menú digital con categorías, QR, datos del negocio, ubicación, redes y contenido preparado para una experiencia clara desde el celular.",
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#25302B] font-sans text-[#EFE8D7] selection:bg-[#A9B99B] selection:text-[#25302B]">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.045] [background-image:radial-gradient(circle_at_center,rgba(239,232,215,0.78)_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_18%_12%,rgba(169,185,155,0.18),transparent_30%),radial-gradient(circle_at_85%_5%,rgba(216,199,166,0.14),transparent_32%)]" />

      <header className="fixed left-0 right-0 top-5 z-40 px-4 md:px-8">
        <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-[#EFE8D7]/12 bg-[#25302B]/78 px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-300 hover:border-[#EFE8D7]/20 md:px-6">
          <a href="#" className="flex items-center gap-3" aria-label="Kikuba inicio">
            <img
              src={kikubaLogo}
              alt="Logo Kikuba"
              className="h-10 w-10 object-contain"
            />
            <span className="text-sm font-semibold uppercase tracking-[0.34em] text-[#EFE8D7] md:text-base">
              Kikuba
            </span>
          </a>

          <div className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.16em] text-[#EFE8D7]/72 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-[#A9B99B]">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-[#EFE8D7] px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#25302B] transition-all duration-300 hover:bg-[#A9B99B] md:inline-flex"
            >
              Hablemos
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#EFE8D7]/14 text-[#EFE8D7] md:hidden"
              onClick={() => setIsMenuOpen((value) => !value)}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? "×" : "☰"}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="mx-auto mt-3 max-w-5xl rounded-3xl border border-[#EFE8D7]/12 bg-[#25302B]/94 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-md md:hidden">
            <div className="flex flex-col gap-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#EFE8D7]/78">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full bg-[#EFE8D7] px-5 py-3 text-center text-[#25302B]"
              >
                Hablemos
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid min-h-screen max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-36 md:px-12 lg:grid-cols-12">
          <motion.div
            className="flex flex-col gap-6 lg:col-span-8"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <small className="font-mono text-xs uppercase tracking-[0.24em] text-[#A9B99B]">
              Estudio pequeño de tecnología práctica
            </small>
            <h1 className="font-serif text-5xl leading-[0.96] tracking-tight text-[#EFE8D7] md:text-7xl lg:text-8xl">
              Primero entendemos. <br />
              <span className="text-[#D8C7A6]">Luego construimos.</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg font-light leading-relaxed text-[#EFE8D7]/74 md:text-xl">
              Observamos cómo trabaja tu negocio, escuchamos a tu equipo y creamos herramientas digitales que ordenan el trabajo real.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#EFE8D7] px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#25302B] transition-all duration-300 hover:bg-[#A9B99B]"
              >
                Hablemos de tu operación
              </a>
              <a
                href="#enfoque"
                className="inline-flex items-center justify-center rounded-full border border-[#EFE8D7]/20 px-6 py-4 text-sm font-medium uppercase tracking-[0.14em] text-[#EFE8D7] transition-all duration-300 hover:border-[#EFE8D7]/40 hover:bg-[#EFE8D7]/8"
              >
                Ver enfoque
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hidden justify-end lg:col-span-4 lg:flex"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative flex h-80 w-80 items-center justify-center rounded-full border border-[#A9B99B]/20">
              <div className="absolute inset-6 rounded-full border border-dashed border-[#D8C7A6]/28" />
              <img
                src={kikubaLogo}
                alt="Logo Kikuba"
                className="relative z-10 w-52 object-contain drop-shadow-[0_24px_70px_rgba(0,0,0,0.22)]"
              />
            </div>
          </motion.div>
        </section>

        <section id="enfoque" className="border-t border-[#EFE8D7]/10 bg-[#25302B]/30 px-6 py-24 md:px-12">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="mb-4 block font-mono text-xs uppercase tracking-[0.22em] text-[#A9B99B]">
                Para quién es
              </span>
              <h2 className="font-serif text-3xl leading-tight tracking-tight md:text-4xl">
                Tecnología para negocios que ya están operando.
              </h2>
            </div>
            <div className="flex flex-col gap-8 lg:col-span-8">
              {fitItems.map((text, index) => (
                <div key={text} className="flex gap-4 border-b border-[#EFE8D7]/8 pb-6 last:border-0">
                  <span className="pt-1 font-mono text-sm text-[#D8C7A6]">0{index + 1}.</span>
                  <p className="text-base font-light leading-relaxed text-[#EFE8D7]/82 md:text-lg">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="metodo" className="mx-auto max-w-5xl border-t border-[#EFE8D7]/10 px-6 py-28 md:px-12">
          <div className="mb-16">
            <span className="mb-2 block font-mono text-xs uppercase tracking-[0.22em] text-[#A9B99B]">
              Método
            </span>
            <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
              Observamos, analizamos y construimos.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {methodItems.map((item) => (
              <article
                key={item.step}
                className="flex min-h-[260px] flex-col gap-6 rounded-2xl border border-[#EFE8D7]/10 bg-[#25302B]/52 p-8 transition-all duration-300 hover:border-[#A9B99B]/34"
              >
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#A9B99B]">
                  Fase {item.step}
                </span>
                <h3 className="font-serif text-2xl tracking-tight text-[#D8C7A6]">
                  {item.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-[#EFE8D7]/72">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="servicios" className="border-t border-[#EFE8D7]/10 bg-[#25302B]/20 px-6 py-28 md:px-12">
          <div className="mx-auto max-w-5xl">
            <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="mb-2 block font-mono text-xs uppercase tracking-[0.22em] text-[#A9B99B]">
                  Servicios
                </span>
                <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
                  Herramientas útiles, no sistemas de adorno.
                </h2>
              </div>
              <p className="max-w-xs text-sm font-light leading-relaxed text-[#EFE8D7]/64">
                Soluciones modulares para ordenar ventas, citas, pedidos, inventario y decisiones.
              </p>
            </div>

            <div className="grid grid-cols-1 border-l border-t border-[#EFE8D7]/10 md:grid-cols-3">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="flex min-h-[260px] flex-col justify-between border-b border-r border-[#EFE8D7]/10 p-8 transition-colors duration-300 hover:bg-[#EFE8D7]/5"
                >
                  <span className="font-mono text-xs text-[#D8C7A6]">0{index + 1} / SERVICIO</span>
                  <div className="mt-8">
                    <h3 className="mb-4 font-serif text-xl tracking-tight">{service.title}</h3>
                    <p className="text-sm font-light leading-relaxed text-[#EFE8D7]/72">
                      {service.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="mx-auto max-w-5xl border-t border-[#EFE8D7]/10 px-6 py-28 md:px-12">
          <div className="mb-16">
            <span className="mb-2 block font-mono text-xs uppercase tracking-[0.22em] text-[#A9B99B]">
              Proyectos reales
            </span>
            <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
              Referencias de trabajo en marcha.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.name} className="group flex flex-col gap-4">
                <div className="aspect-video w-full rounded-2xl border border-[#EFE8D7]/10 bg-[#EFE8D7]/5 p-5 transition-all duration-300 group-hover:border-[#A9B99B]/40">
                  <div className="flex h-full flex-col justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#A9B99B]">
                      {project.type}
                    </span>
                    <span className="font-serif text-2xl text-[#D8C7A6]">{project.name}</span>
                  </div>
                </div>
                <p className="text-sm font-light leading-relaxed text-[#EFE8D7]/72">
                  {project.desc}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[#EFE8D7]/10 bg-[#25302B] px-6 pb-12 pt-24 md:px-12">
        <div className="mx-auto flex max-w-5xl flex-col gap-16">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <h2 className="max-w-lg font-serif text-4xl leading-none tracking-tight md:text-6xl">
              Ordenemos el trabajo real de tu negocio.
            </h2>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#EFE8D7] px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.14em] text-[#25302B] transition-all duration-300 hover:bg-[#A9B99B]"
            >
              Hablar por WhatsApp
            </a>
          </div>

          <div className="flex flex-col justify-between gap-6 border-t border-[#EFE8D7]/8 pt-12 md:flex-row md:items-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#EFE8D7]/42">
              © 2026 Kikuba. Observamos · Analizamos · Construimos.
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#EFE8D7]/42">
              Enlaces sociales pendientes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
