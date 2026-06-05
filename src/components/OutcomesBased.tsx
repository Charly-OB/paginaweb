import { Check, X, Minus, Sparkles, Coins, Clock, ShieldAlert, MessageSquare, ArrowRight } from "lucide-react";

interface OutcomesBasedProps {
  lang: "es" | "en";
}

export default function OutcomesBased({ lang }: OutcomesBasedProps) {
  const comparisonData = lang === "en" ? [
    {
      metric: "Upfront Cost & Overhead",
      icon: Coins,
      fullTime: {
        text: "High. Salaried contract, benefits, social security, equipment, and hiring pipeline cost.",
        status: "bad"
      },
      agency: {
        text: "Very High. Retainers, high minimum budgets, bloated hidden management fees.",
        status: "bad"
      },
      juanCarlos: {
        text: "Frictionless setup. Paid per deliverable milestone/sprint. Absolute zero overhead.",
        status: "good"
      }
    },
    {
      metric: "Delivery & Velocity",
      icon: Clock,
      fullTime: {
        text: "Slow. 2-4 weeks of onboarding. Pace depends on internal queue & meetings congestion.",
        status: "mixed"
      },
      agency: {
        text: "Lethargic. Hours wasted on sales pitches, detailed legal procedures, and specs.",
        status: "bad"
      },
      juanCarlos: {
        text: "Rapid V1. Working prototype operational within days. Focus on high-speed shipping.",
        status: "good"
      }
    },
    {
      metric: "Commercial Commitment & Risk",
      icon: ShieldAlert,
      fullTime: {
        text: "Extremely High. Long-term liability and severe severance costs under federal laws.",
        status: "bad"
      },
      agency: {
        text: "High Commitment. Mandatory 3 to 12 months locking agreements with fee penalties.",
        status: "bad"
      },
      juanCarlos: {
        text: "Zero risk. We partition work into clear sprints. Modify trajectory or pause anytime.",
        status: "good"
      }
    },
    {
      metric: "Communication Friction",
      icon: MessageSquare,
      fullTime: {
        text: "Moderate. Internal politics, corporate red tape, and daily check-ins logging.",
        status: "mixed"
      },
      agency: {
        text: "Drowning in meetings. Speak with salesmen or PMs who pass requirements down.",
        status: "bad"
      },
      juanCarlos: {
        text: "Direct channel with the developer building your database models and interface logic.",
        status: "good"
      }
    },
    {
      metric: "Knowledge Range & Adaptability",
      icon: Sparkles,
      fullTime: {
        text: "Niche limitations. Very rare to find single engineers managing backend, CSS, and stats.",
        status: "mixed"
      },
      agency: {
        text: "Asymmetrical. Junior staffing assigned to your account while billed at senior rates.",
        status: "bad"
      },
      juanCarlos: {
        text: "Full-Stack. Integrated command of React interface design, Python scripts, databases, and KPIs.",
        status: "good"
      }
    }
  ] : [
    {
      metric: "Costo Inicial e Indirectos",
      icon: Coins,
      fullTime: {
        text: "Alto. Salario base, prestaciones de ley, IMSS, equipo físico de cómputo y onboarding.",
        status: "bad"
      },
      agency: {
        text: "Muy Alto. Retainers mensuales forzosos, cuotas de inicio y sobreprecios de administración.",
        status: "bad"
      },
      juanCarlos: {
        text: "Cero fricción. Inversión clara por hito o fase de software funcional. Sin sorpresas.",
        status: "good"
      }
    },
    {
      metric: "Velocidad de Entrega",
      icon: Clock,
      fullTime: {
        text: "Variable. Semanas de entrenamiento inicial; avance diluido en la rutina diaria.",
        status: "mixed"
      },
      agency: {
        text: "Lento. Días perdidos en firmas legales, requerimientos extensos y cotizaciones.",
        status: "bad"
      },
      juanCarlos: {
        text: "Súper Rápido. Prototipo inicial funcional operativo en días. Menos plática, más código.",
        status: "good"
      }
    },
    {
      metric: "Compromiso y Riesgo",
      icon: ShieldAlert,
      fullTime: {
        text: "Muy Alto. Pasivos laborales, liquidaciones complejas si no funciona la relación laboral.",
        status: "bad"
      },
      agency: {
        text: "Alto. Contratos mínimos de 3-6 meses obligados con penalizaciones de salida.",
        status: "bad"
      },
      juanCarlos: {
        text: "Cero ataduras. Avance por entregables útiles. Pausas o rediriges la meta cuando quieras.",
        status: "good"
      }
    },
    {
      metric: "Comunicación y Fricción",
      icon: MessageSquare,
      fullTime: {
        text: "Medio. Procesos internos, juntas de estatus reiterativas y burocracia organizacional.",
        status: "mixed"
      },
      agency: {
        text: "Alta fricción. Hablas con secretarios o PMs intermediarios que no programan.",
        status: "bad"
      },
      juanCarlos: {
        text: "Canal directo con el desarrollador que programa la lógica, la interfaz y la base de datos.",
        status: "good"
      }
    },
    {
      metric: "Conocimiento y Versatilidad",
      icon: Sparkles,
      fullTime: {
        text: "Especificidad limitante. Raro encontrar un desarrollador experto en frontend más analítica.",
        status: "mixed"
      },
      agency: {
        text: "Inconsistente. Asignan programadores novatos a tu cuenta con tarifas de senior.",
        status: "bad"
      },
      juanCarlos: {
        text: "Full-Stack. Dominio técnico equilibrado: de la vista responsive del cliente a bases de datos SQL.",
        status: "good"
      }
    }
  ];

  return (
    <div id="outcomes-based" className="py-16 sm:py-24 bg-[#F2ECE4]/35 border-y border-brand-violet/10 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono text-brand-orange-dark uppercase tracking-widest block mb-2 font-bold">
            {lang === "en" ? "05 // OUTCOMES-BASED MODEL" : "05 // ENFOQUE EN RESULTADOS"}
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-brand-violet tracking-tight">
            {lang === "en" 
              ? "A results-oriented model built to replace legacy models." 
              : "Un modelo de resultados prácticos diseñado para retirar trabas."}
          </h3>
          <p className="text-xs sm:text-sm text-brand-slate mt-2 leading-relaxed max-w-xl">
            {lang === "en"
              ? "Traditional hiring is slow and agencies are bloated. I build side-by-side with you to deliver production code without locking agreements or high overhead."
              : "La contratación tradicional es lenta y contratar agencias infla los costes. Trabajo contigo como socio tecnológico directo encargándome de la solución de inicio a fin."}
          </p>
        </div>

        {/* COMPARISON ON WIDESCREEN TABLE */}
        <div className="hidden lg:block overflow-hidden rounded-xl border border-brand-violet/10 bg-brand-paper shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-violet text-brand-paper divide-x divide-brand-violet/10">
                <th className="p-5 text-xs font-mono uppercase tracking-wider w-[20%]">
                  {lang === "en" ? "Feature / Scope" : "Criterio de Valor"}
                </th>
                <th className="p-5 text-xs font-mono uppercase tracking-wider w-[26%] bg-brand-violet/95 opacity-80 font-normal">
                  {lang === "en" ? "Full-Time Hiring" : "Contratación de Planta"}
                </th>
                <th className="p-5 text-xs font-mono uppercase tracking-wider w-[26%] bg-brand-violet/95 opacity-80 font-normal">
                  {lang === "en" ? "Traditional Agency" : "Agencias Tradicionales"}
                </th>
                <th className="p-5 text-xs font-mono uppercase tracking-wider w-[28%] bg-brand-orange-dark text-brand-yellow font-bold text-center relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-violet text-[9px] px-2 py-0.5 rounded font-mono uppercase tracking-wide border border-brand-orange-dark">
                    {lang === "en" ? "DIRECT COOPERATION" : "COOPERACIÓN DIRECTA"}
                  </div>
                  {lang === "en" ? "My Direct Support" : "Mi Soporte Directo"}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-violet/10">
              {comparisonData.map((row, idx) => {
                const Icon = row.icon;
                return (
                  <tr key={idx} className="divide-x divide-brand-violet/10 hover:bg-brand-bg/20 transition-all">
                    {/* Header Variable Block */}
                    <td className="p-5 align-top">
                      <div className="flex gap-2.5 items-start">
                        <Icon className="w-4 h-4 text-brand-orange-dark mt-0.5 shrink-0" />
                        <span className="text-xs font-mono font-bold text-brand-violet">
                          {row.metric}
                        </span>
                      </div>
                    </td>

                    {/* Full-Time Hire Column */}
                    <td className="p-5 text-xs text-brand-slate leading-relaxed align-top relative">
                      <div className="flex gap-2 items-start">
                        {row.fullTime.status === "bad" && (
                          <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        )}
                        {row.fullTime.status === "mixed" && (
                          <Minus className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        )}
                        <span>{row.fullTime.text}</span>
                      </div>
                    </td>

                    {/* Traditional Agency Column */}
                    <td className="p-5 text-xs text-brand-slate leading-relaxed align-top">
                      <div className="flex gap-2 items-start">
                        {row.agency.status === "bad" && (
                          <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        )}
                        <span>{row.agency.text}</span>
                      </div>
                    </td>

                    {/* Outcomes-Based Support Column (Juan Carlos) */}
                    <td className="p-5 text-xs text-brand-violet font-semibold leading-relaxed align-top bg-brand-yellow/10">
                      <div className="flex gap-2 items-start">
                        <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5 stroke-[3px]" />
                        <span>{row.juanCarlos.text}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* COMPARISON ON MOBILE CARDS LIST */}
        <div className="lg:hidden space-y-6">
          {comparisonData.map((row, idx) => {
            const Icon = row.icon;
            return (
              <div 
                key={idx} 
                className="bg-brand-paper rounded-xl border border-brand-violet/10 p-5 space-y-4 shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-orange-dark"></div>
                
                <div className="flex items-center gap-2 pl-2">
                  <Icon className="w-4.5 h-4.5 text-brand-orange-dark shrink-0" />
                  <h4 className="text-sm font-mono font-bold text-brand-violet uppercase tracking-wide">
                    {row.metric}
                  </h4>
                </div>

                <div className="space-y-3.5 pl-2">
                  {/* Me Direct value */}
                  <div className="bg-brand-yellow/10 border border-brand-yellow/30 p-3 rounded-lg space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-brand-violet">
                      <Check className="w-4 h-4 text-green-600 stroke-[3.5px] shrink-0" />
                      <span>{lang === "en" ? "My Direct Support (Outcomes Based)" : "Mi Soporte Directo (Por Resultados)"}</span>
                    </div>
                    <p className="text-xs text-brand-dark-text/90 leading-relaxed">
                      {row.juanCarlos.text}
                    </p>
                  </div>

                  {/* Competitors side list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] pt-1">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-xs text-brand-slate font-medium">
                        {row.fullTime.status === "bad" ? (
                          <X className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        ) : (
                          <Minus className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        )}
                        <span>{lang === "en" ? "Employer Hire" : "Contratación de Planta"}</span>
                      </div>
                      <p className="text-brand-slate leading-relaxed">
                        {row.fullTime.text}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-xs text-brand-slate font-medium">
                        <X className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span>{lang === "en" ? "Digital Agency" : "Agencia Tradicional"}</span>
                      </div>
                      <p className="text-brand-slate leading-relaxed">
                        {row.agency.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action card below comparison */}
        <div className="mt-12 p-6 sm:p-8 bg-[#FAF9F6] border-2 border-dashed border-brand-violet/20 rounded-xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-display font-bold text-brand-violet">
              {lang === "en" ? "Ready to launch with clear scopes?" : "¿Sólido y listo para iniciar?"}
            </h4>
            <p className="text-xs text-brand-slate leading-relaxed max-w-xl">
              {lang === "en"
                ? "Let's align details to ship a functional code prototype tailored precisely to solve your bottleneck."
                : "Alineemos los requerimientos para de inmediato programar el prototipo funcional de tu sistema."}
            </p>
          </div>
          <a
            href="https://wa.me/526462865241"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 bg-brand-violet hover:bg-brand-orange-dark text-brand-yellow hover:text-brand-paper font-bold text-xs rounded-lg transition-all duration-150 flex items-center gap-2 tracking-wide shrink-0 font-mono shadow"
          >
            <span>{lang === "en" ? "REVIEW PROJECT PLANNER" : "VER PLANIFICADOR"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}

