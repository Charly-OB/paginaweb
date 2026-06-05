import { useState, useEffect } from "react";
import { 
  Laptop, 
  Terminal, 
  Play, 
  RefreshCw, 
  Activity, 
  TrendingUp, 
  Database, 
  Layers, 
  ArrowUpRight, 
  CheckCircle2, 
  Gauge, 
  Zap,
  Sliders,
  DollarSign
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface InteractiveLaptopProps {
  lang?: "es" | "en";
}

export default function InteractiveLaptop({ lang = "es" }: InteractiveLaptopProps) {
  const [activeTab, setActiveTab] = useState<"pwa" | "saas" | "data">("pwa");
  const [efficiency, setEfficiency] = useState<number>(75);
  const [dataPoints, setDataPoints] = useState<number[]>([32, 45, 42, 60, 55, 75, 88]);
  const [region, setRegion] = useState<string>("Baja California");
  const [logs, setLogs] = useState<string[]>([]);

  // React to lang prop change
  useEffect(() => {
    setLogs(
      lang === "en"
        ? [
            "System initialized with SQLite/Postgres...",
            "Vite Client linked successfully.",
            "Data metrics hooked: ready for audit."
          ]
        : [
            "Sistema inicializado con SQLite/Postgres...",
            "Cliente Vite enlazado correctamente.",
            "Métricas de datos vinculadas: preparado para auditoría."
          ]
    );
  }, [lang]);

  // Periodic simulated automation logs for SaaS
  useEffect(() => {
    const timer = setInterval(() => {
      if (activeTab === "saas") {
        const events = lang === "en" ? [
          "Automatic notification sent via API",
          "Stock rotation optimized (Region: " + region + ")",
          "Webhook request processed in 18ms",
          "Database synchronized: ready for reports",
          "KPI report generated automatically"
        ] : [
          "Notificación automática enviada vía API",
          "Rotación de stock optimizada (Región: " + region + ")",
          "Petición Webhook procesada en 18ms",
          "Base de datos sincronizada: listo para reportes",
          "Reporte de KPIs generado automáticamente"
        ];
        const randomEvent = events[Math.floor(Math.random() * events.length)];
        setLogs(prev => [randomEvent, prev[0], prev[1]].slice(0, 3));
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [activeTab, region, lang]);

  // Generate dynamic chart data based on efficiency
  useEffect(() => {
    const base = [25, 40, 35, 52, 48, 65, 75];
    const updated = base.map(val => Math.round(val * (efficiency / 75)));
    setDataPoints(updated);
  }, [efficiency]);

  const addLog = (msg: string) => {
    setLogs(prev => [msg, prev[0], prev[1]].slice(0, 3));
  };

  return (
    <div className="w-full max-w-full lg:max-w-2xl mx-auto font-sans min-w-0">
      {/* Laptop Frame */}
      <div className="relative mx-auto rounded-t-2xl border-4 border-brand-violet bg-[#120B16] p-2 shadow-2xl transition-all duration-300 hover:shadow-brand-orange-light/10 overflow-hidden">
        
        {/* Laptop Screen Header */}
        <div className="flex items-center justify-between border-b border-brand-violet/40 pb-2 px-3 text-[10px] font-mono text-brand-slate">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-orange-dark inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-brand-slate inline-block"></span>
            <span className="ml-2 font-semibold text-brand-orange-light">JUAN_CARLOS_OS.sh</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span className="animate-pulse flex items-center gap-1 text-green-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping"></span>
              {lang === "en" ? "SYSTEM ACTIVE" : "SISTEMA ACTIVO"}
            </span>
            <span>SERVER: PORT 3000</span>
          </div>
        </div>

        {/* Laptop Dashboard Screen Content */}
        <div className="bg-[#1A0F21] rounded-b-lg p-3 md:p-4 min-h-[360px] text-brand-paper relative overflow-hidden flex flex-col justify-between">
          
          {/* Internal Navigation tabs */}
          <div className="grid grid-cols-3 gap-1 md:gap-2 mb-4 border-b border-brand-violet/30 pb-2.5">
            {[
              { id: "pwa", label: lang === "en" ? "01 Web & PWA" : "01 Web & PWA", icon: Layers },
              { id: "saas", label: lang === "en" ? "02 Custom SaaS" : "02 SaaS Medida", icon: Activity },
              { id: "data", label: lang === "en" ? "03 Data Analyt." : "03 Análisis Datos", icon: TrendingUp }
            ].map(tab => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  onClick={() => {
                    setActiveTab(tab.id as "pwa" | "saas" | "data");
                    addLog(
                      lang === "en"
                        ? `Loaded menu: ${tab.label}`
                        : `Menú cargado: ${tab.label}`
                    );
                  }}
                  className={`flex flex-col md:flex-row items-center justify-center gap-1.5 py-1.5 px-1 md:px-2.5 rounded transition-all duration-200 text-left border ${
                    isSelected 
                      ? "bg-brand-violet/60 border-brand-orange-dark text-brand-yellow font-display" 
                      : "bg-[#25152B] border-transparent text-brand-slate hover:border-brand-violet/40 hover:text-brand-paper"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-brand-orange-dark" : "text-brand-slate"}`} />
                  <span className="text-[10px] md:text-sm font-semibold tracking-wide whitespace-nowrap">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Panel View */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {activeTab === "pwa" && (
                <motion.div
                  key="pwa-panel"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3.5"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-brand-orange-light block uppercase">
                        {lang === "en" ? "Fast Interfaces" : "Interfaces Rápidas"}
                      </span>
                      <h4 className="text-base md:text-lg font-display font-medium text-brand-paper">
                        {lang === "en" ? "Frontend & Mobile-First Development" : "Desarrollo Frontend & Mobile First"}
                      </h4>
                    </div>
                    <div className="bg-brand-orange-dark/10 border border-brand-orange-dark/35 px-2 py-0.5 rounded text-[10px] font-mono text-brand-yellow">
                      LIGHTHOUSE: 99%
                    </div>
                  </div>

                  {/* Lighthouse Core stats simulated visually */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      { l: lang === "en" ? "Performance" : "Rendimiento", v: "100%", c: "text-green-400" },
                      { l: lang === "en" ? "Accessibility" : "Accesibilidad", v: "98%", c: "text-green-400" },
                      { l: lang === "en" ? "Best Practices" : "Prácticas", v: "100%", c: "text-green-400" },
                      { l: lang === "en" ? "Solid SEO" : "SEO Sólido", v: "100%", c: "text-brand-yellow" }
                    ].map((st, i) => (
                      <div key={i} className="bg-[#211328]/80 border border-brand-violet/30 p-2 rounded text-center">
                        <span className="text-[9px] font-mono text-brand-slate block">{st.l}</span>
                        <span className={`text-base font-bold font-mono ${st.c}`}>{st.v}</span>
                      </div>
                    ))}
                  </div>

                  {/* Interactive performance controller */}
                  <div className="bg-[#2A1733] border border-brand-orange-dark/25 p-3 rounded">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-medium text-brand-paper flex items-center gap-1.5">
                        <Gauge className="w-3.5 h-3.5 text-brand-yellow" />
                        {lang === "en" ? "Adjust server speed:" : "Ajustar velocidad del servidor:"}
                      </span>
                      <span className="text-xs font-mono font-bold text-brand-orange-dark">
                        {efficiency < 50 
                          ? (lang === "en" ? "High Latency" : "Latencia Alta") 
                          : efficiency < 85 
                          ? (lang === "en" ? "Normal Speed" : "Velocidad Normal") 
                          : (lang === "en" ? "Ultra Optimized ⚡" : "Ultra Optimizado ⚡")}
                      </span>
                    </div>
                    <input 
                      type="range"
                      min="30"
                      max="100"
                      value={efficiency}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        setEfficiency(val);
                        if (val > 85) {
                          addLog(
                            lang === "en"
                              ? "Cache optimizer active: Load time < 240ms"
                              : "Optimizador de caché activo: Tiempo de carga < 240ms"
                          );
                        }
                      }}
                      className="w-full accent-brand-orange-dark h-1 bg-brand-violet rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[9px] font-mono text-brand-slate mt-1">
                      <span>{lang === "en" ? "Slow 3G (Mobile)" : "3G Lento (Móvil)"}</span>
                      <span>{lang === "en" ? "Ensenada CDN Server" : "Servidor Ensenada CDN"}</span>
                      <span>{lang === "en" ? "High Performance Formula" : "Fórmula de Alto Rendimiento"}</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "saas" && (
                <motion.div
                  key="saas-panel"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3.5"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-brand-yellow block uppercase">
                        {lang === "en" ? "Real Automation" : "Automatización Real"}
                      </span>
                      <h4 className="text-base md:text-lg font-display font-medium text-brand-paper">
                        {lang === "en" ? "Custom Systems & Inventory" : "Sistemas e Inventarios a la Medida"}
                      </h4>
                    </div>
                    <select
                      value={region}
                      onChange={(e) => {
                        setRegion(e.target.value);
                        addLog(
                          lang === "en" 
                            ? `SaaS filter: Destination ${e.target.value}` 
                            : `Filtrado SaaS: Destino ${e.target.value}`
                        );
                      }}
                      className="bg-[#2E1938] border border-brand-violet/40 text-brand-yellow text-[10px] font-mono rounded px-2 py-0.5"
                    >
                      <option value="Baja California">Ensenada, BC</option>
                      <option value="CDMX / Centro">{lang === "en" ? "CDMX (National)" : "CDMX (Nacional)"}</option>
                      <option value="Monterrey">{lang === "en" ? "SaaS North" : "SaaS Norte"}</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                    <div className="bg-[#24142D] border border-brand-violet/30 p-2.5 rounded flex items-center gap-3">
                      <div className="p-1.5 rounded bg-brand-orange-dark/15 text-brand-orange-dark-500">
                        <Terminal className="w-4 h-4 text-brand-orange-dark" />
                      </div>
                      <div>
                        <span className="text-[9px] text-brand-slate block">{lang === "en" ? "Roles" : "Roles"}</span>
                        <span className="text-xs font-bold text-brand-paper font-mono">
                          {lang === "en" ? "100% Controlled" : "100% Controlados"}
                        </span>
                      </div>
                    </div>

                    <div className="bg-[#24142D] border border-brand-violet/30 p-2.5 rounded flex items-center gap-3">
                      <div className="p-1.5 rounded bg-brand-yellow/15 text-brand-yellow">
                        <Zap className="w-4 h-4 text-brand-yellow" />
                      </div>
                      <div>
                        <span className="text-[9px] text-brand-slate block">
                          {lang === "en" ? "Manual Tasks" : "Tareas manuales"}
                        </span>
                        <span className="text-xs font-bold text-brand-paper font-mono">
                          {lang === "en" ? "Zero Errors" : "Cero Errores"}
                        </span>
                      </div>
                    </div>

                    <div className="bg-[#24142D] border border-brand-violet/30 p-2.5 rounded flex items-center gap-3">
                      <div className="p-1.5 rounded bg-brand-slate/15 text-brand-slate">
                        <Database className="w-4 h-4 text-brand-yellow" />
                      </div>
                      <div>
                        <span className="text-[9px] text-brand-slate block">
                          {lang === "en" ? "Synchronization" : "Sincronización"}
                        </span>
                        <span className="text-xs font-bold text-brand-paper font-mono">Real-Time</span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive workflow preview */}
                  <div className="bg-[#23122B] border border-brand-slate/20 p-2.5 rounded text-[11px] font-mono text-brand-paper space-y-1.5">
                    <div className="flex items-center gap-2 border-b border-brand-violet/30 pb-1 text-[10px] text-brand-slate uppercase font-bold tracking-wider justify-between">
                      <span>{lang === "en" ? "Autonomous Process Simulator:" : "Simulador de Procesos Autónomos:"}</span>
                      <span className="text-brand-orange-light font-normal text-[9px] animate-pulse">
                        {lang === "en" ? "LISTENING FOR WEBHOOKS..." : "ESCUCHANDO WEBHOOKS..."}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-green-400">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>[OK] {lang === "en" ? "Order logged → Database" : "Pedido registrado → Base de datos"}</span>
                    </div>

                    <div className="flex items-center gap-2 text-brand-yellow">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>[DB] {lang === "en" ? "Inventory updated: -1 Product" : "Inventario actualizado: -1 Producto"}</span>
                    </div>

                    <div className="flex items-center gap-2 text-brand-orange-light">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>[API] {lang === "en" ? "PDF report sent to administrator" : "Notificacion PDF enviada al administrador"}</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "data" && (
                <motion.div
                  key="data-panel"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3.5"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-brand-orange-light block uppercase">
                        {lang === "en" ? "Business Modeled as Charts" : "Negocio Traducido a Gráficas"}
                      </span>
                      <h4 className="text-base md:text-lg font-display font-medium text-brand-paper">
                        {lang === "en" ? "Decision ROI Simulator" : "Simulador de ROI de Decisiones"}
                      </h4>
                    </div>
                    <div className="bg-brand-yellow/15 border border-brand-yellow/30 px-2 py-0.5 rounded text-[10px] font-mono text-brand-yellow flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {lang === "en" ? "REAL-TIME METRICS" : "DATOS EN TIEMPO REAL"}
                    </div>
                  </div>

                  {/* Live Interactive Graph Visualizer using raw SVG */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2 bg-[#211229] border border-brand-violet/30 p-2.5 rounded flex flex-col justify-between h-[120px]">
                      <div className="flex justify-between text-[9px] text-brand-slate font-mono">
                        <span>{lang === "en" ? "DIGITAL EFFICIENCY" : "EFICACIA DIGITAL"}</span>
                        <span className="text-brand-yellow">{lang === "en" ? "SALES TREND" : "TENDENCIA COMERCIAL"}</span>
                      </div>
                      
                      {/* SVG Line Chart dynamic path */}
                      <div className="w-full h-14 relative mt-1">
                        <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                          {/* Grid lines */}
                          <line x1="0" y1="10" x2="100" y2="10" stroke="#46334F" strokeWidth="0.2" strokeDasharray="2,2" />
                          <line x1="0" y1="20" x2="100" y2="20" stroke="#46334F" strokeWidth="0.2" strokeDasharray="2,2" />
                          <line x1="0" y1="30" x2="100" y2="30" stroke="#46334F" strokeWidth="0.2" strokeDasharray="2,2" />
                          
                          {/* Filled area */}
                          <path
                            d={`M 0 40 L 0 ${40 - dataPoints[0]/2.5} L 16.6 ${40 - dataPoints[1]/2.5} L 33.3 ${40 - dataPoints[2]/2.5} L 50 ${40 - dataPoints[3]/2.5} L 66.6 ${40 - dataPoints[4]/2.5} L 83.3 ${40 - dataPoints[5]/2.5} L 100 ${40 - dataPoints[6]/2.5} L 100 40 Z`}
                            fill="url(#gradient)"
                            opacity="0.15"
                          />
                          
                          {/* Active Line */}
                          <path
                            d={`M 0 ${40 - dataPoints[0]/2.5} L 16.6 ${40 - dataPoints[1]/2.5} L 33.3 ${40 - dataPoints[2]/2.5} L 50 ${40 - dataPoints[3]/2.5} L 66.6 ${40 - dataPoints[4]/2.5} L 83.3 ${40 - dataPoints[5]/2.5} L 100 ${40 - dataPoints[6]/2.5}`}
                            fill="none"
                            stroke="#F24F13"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />

                          {/* Dots */}
                          {dataPoints.map((dp, idx) => {
                            const cx = idx * 16.6;
                            const cy = 40 - dp / 2.5;
                            return (
                              <circle 
                                key={idx} 
                                cx={cx} 
                                cy={cy} 
                                r="1.5" 
                                fill="#F2C230" 
                                className="transition-all duration-300" 
                              />
                            );
                          })}

                          <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#F24F13" />
                              <stop offset="100%" stopColor="#46334F" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      <div className="flex justify-between text-[8px] font-mono text-brand-slate uppercase tracking-wider">
                        <span>{lang === "en" ? "Yesterday" : "Ayer"}</span>
                        <span>{lang === "en" ? "Today" : "Hoy"}</span>
                        <span>{lang === "en" ? "Real Tracking" : "Medición Real"}</span>
                      </div>
                    </div>

                    {/* Operational Value Box reflecting slider */}
                    <div className="bg-[#2E1838] border border-brand-orange-dark/30 p-2.5 rounded flex flex-col justify-between h-[120px]">
                      <div className="text-[9px] font-mono text-brand-slate">{lang === "en" ? "ESTIMATED ROI:" : "RETORNO ESTIMADO:"}</div>
                      <div className="my-1">
                        <div className="text-2xl font-bold font-mono text-brand-yellow flex items-center justify-center">
                          <DollarSign className="w-5 h-5 text-brand-orange-dark" />
                          {Math.round(efficiency * 380).toLocaleString()}
                          <span className="text-[10px] font-mono font-medium text-brand-slate ml-0.5">MXN</span>
                        </div>
                        <span className="text-[9px] font-sans text-brand-slate text-center block mt-0.5">
                          {lang === "en" ? "Simulated monthly savings" : "Ahorro mensual simulado"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 justify-center bg-brand-orange-dark/15 text-brand-yellow text-[9px] font-mono rounded-full py-0.5 px-2">
                        <Sliders className="w-2.5 h-2.5" />
                        {lang === "en" ? "Smart Mapping" : "Mapeo Inteligente"}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Micro Terminal Output Console */}
          <div className="mt-4 border-t border-brand-violet/40 pt-2.5 font-mono text-[10px] text-brand-slate bg-[#110714] p-2 rounded border">
            <div className="flex items-center justify-between text-brand-orange-light text-[9px] uppercase tracking-wider mb-1 font-bold">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                {lang === "en" ? "Control Console" : "Terminal de Control"}
              </span>
              <span>{lang === "en" ? "LIVE LOG HISTORY" : "HISTORIAL ACTIVO"}</span>
            </div>
            <div className="space-y-0.5">
              {logs.map((log, idx) => (
                <div key={idx} className="truncate flex items-start gap-1">
                  <span className="text-brand-yellow select-none">&gt;</span>
                  <span className={idx === 0 ? "text-brand-paper" : "text-brand-slate"}>{log}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Stand Base */}
      <div className="relative mx-auto h-2.5 w-11/12 rounded-b-xl bg-[#23172A] border-b-4 border-brand-violet/50 shadow-xl"></div>
      <div className="relative mx-auto h-1 w-24 rounded-b-xl bg-[#392544]"></div>
    </div>
  );
}

