import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { h as heroAsset } from "./router-Dv1ZEUoJ.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const NAV = [{
  label: "Início",
  href: "#inicio"
}, {
  label: "Ingressos",
  href: "https://www.suasenha.com.br/"
}, {
  label: "Fotos",
  href: "/fotos"
}, {
  label: "Patrocinadores",
  href: "#patrocinadores"
}];
function Header() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: `fixed top-0 z-50 w-full transition-all duration-500 ${scrolled ? "glass-panel py-3" : "py-5 bg-transparent"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#inicio", className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-full border border-primary/60 bg-background/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl font-bold text-gradient-gold", children: "HC" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-base font-bold tracking-wide text-foreground", children: [
            "HARAS ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "CANINDEZINHO" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.32em] text-muted-foreground", children: "Caucaia · Ceará" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden xl:flex items-center gap-7", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: n.href, className: "text-[12px] font-semibold uppercase tracking-[0.18em] text-foreground/80 transition hover:text-primary", ...n.href.startsWith("http") ? {
        target: "_blank",
        rel: "noopener noreferrer"
      } : {}, children: n.label }, n.href)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/harascanindezinho/", className: "text-muted-foreground hover:text-primary transition", "aria-label": "Instagram", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.834a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.suasenha.com.br/", className: "btn-gold rounded-full px-6 py-2.5 text-[11px] font-bold", children: "COMPRE SUA SENHA" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen((o) => !o), className: "xl:hidden flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background/40", "aria-label": "Menu", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-0.5 w-5 bg-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-0.5 w-5 bg-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-0.5 w-5 bg-foreground" })
      ] }) })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "xl:hidden mx-5 mt-3 glass-panel rounded-2xl p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
      NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: n.href, onClick: () => setOpen(false), className: "text-sm font-semibold uppercase tracking-[0.18em] text-foreground/90 hover:text-primary", ...n.href.startsWith("http") ? {
        target: "_blank",
        rel: "noopener noreferrer"
      } : {}, children: n.label }, n.href)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.suasenha.com.br/", className: "btn-gold rounded-full px-5 py-3 text-center text-xs font-bold", children: "COMPRE SUA SENHA" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/harascanindezinho/", className: "rounded-full border border-border px-5 py-3 text-center text-xs font-bold text-foreground hover:bg-white/5 transition", children: "Siga nosso Instagram" })
      ] })
    ] }) })
  ] });
}
function useCountdown(target) {
  const [now, setNow] = reactExports.useState(() => /* @__PURE__ */ new Date());
  reactExports.useEffect(() => {
    const i = setInterval(() => setNow(/* @__PURE__ */ new Date()), 1e3);
    return () => clearInterval(i);
  }, []);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const d = Math.floor(diff / (1e3 * 60 * 60 * 24));
  const h = Math.floor(diff / (1e3 * 60 * 60) % 24);
  const m = Math.floor(diff / (1e3 * 60) % 60);
  const s = Math.floor(diff / 1e3 % 60);
  return {
    d,
    h,
    m,
    s
  };
}
function Countdown() {
  const target = reactExports.useMemo(() => /* @__PURE__ */ new Date("2026-09-09T18:00:00-03:00"), []);
  const {
    d,
    h,
    m,
    s
  } = useCountdown(target);
  const items = [{
    k: "Dias",
    v: d
  }, {
    k: "Horas",
    v: h
  }, {
    k: "Min",
    v: m
  }, {
    k: "Seg",
    v: s
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-2 sm:gap-3", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel rounded-xl px-2 py-3 sm:px-4 sm:py-4 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl sm:text-4xl font-bold text-gradient-gold tabular-nums", children: String(it.v).padStart(2, "0") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: it.k })
  ] }, it.k)) });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "inicio", className: "relative min-h-[100svh] w-full overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroAsset.url, alt: "Vaqueiro e cavalo na Arena Canindezinho", className: "h-full w-full object-cover object-[60%_center] animate-slow-zoom", width: 1148, height: 1434, fetchpriority: "high" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
        background: "linear-gradient(90deg, oklch(0.08 0.01 60 / 0.92) 0%, oklch(0.08 0.01 60 / 0.65) 35%, oklch(0.08 0.01 60 / 0.25) 70%, oklch(0.08 0.01 60 / 0.7) 100%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 mix-blend-overlay opacity-30", style: {
        backgroundImage: "radial-gradient(circle at 70% 30%, oklch(0.86 0.16 85 / 0.5), transparent 50%)"
      } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 lg:px-10 lg:pb-24 lg:pt-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex flex-wrap items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.32em] text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse" }),
            "Calendário Oficial · Edição 2026"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-muted-foreground", children: "09 — 13 Setembro · Caucaia/CE" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl leading-[0.95] text-foreground sm:text-5xl md:text-7xl lg:text-[5.5rem]", children: [
          "VEM AÍ MAIS UMA ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "GRANDE VAQUEJADA." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 max-w-xl text-base text-foreground/80 sm:text-lg", children: [
          "De ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "09 a 13 de setembro de 2026" }),
          ", a Arena Canindezinho recebe um dos maiores eventos de vaquejada da região — tradição, esporte e emoção em cinco dias inesquecíveis."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 inline-flex items-center gap-3 rounded-2xl border border-primary/30 bg-background/40 px-5 py-3 backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Premiação" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl sm:text-3xl font-bold text-gradient-gold", children: "+ R$ 200 MIL" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.suasenha.com.br/", className: "btn-gold rounded-full px-7 py-4 text-xs font-bold relative z-20", children: "COMPRE SUA SENHA" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#calendario", className: "rounded-full px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/80 transition hover:text-primary", children: "Ver Calendário →" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-6 text-[11px] uppercase tracking-[0.25em] text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "★ Haras Canindezinho" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "★ Caucaia · CE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "★ Arena Canindezinho" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 animate-fade-up [animation-delay:200ms]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-panel rounded-3xl p-6 sm:p-7 noise-overlay", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-label", children: "O Evento" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-display text-2xl font-bold text-foreground", children: "Contagem Regressiva" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex flex-col items-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl font-bold text-gradient-gold leading-none", children: "5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: "Dias de evento" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Countdown, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid grid-cols-3 gap-3 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-background/40 p-3 ring-1 ring-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-[0.25em] text-muted-foreground", children: "Início" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-display text-base text-foreground", children: "09 Set" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-background/40 p-3 ring-1 ring-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-[0.25em] text-muted-foreground", children: "Final" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-display text-base text-foreground", children: "13 Set" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-background/40 p-3 ring-1 ring-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-[0.25em] text-muted-foreground", children: "Local" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-display text-base text-foreground", children: "Caucaia/CE" })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 z-10 border-t border-border/50 bg-background/60 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between gap-4 overflow-hidden px-5 py-3 text-[10px] uppercase tracking-[0.32em] text-muted-foreground lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "★ Vaquejada Premium" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "★ Cultura Nordestina" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "★ +R$ 200 Mil em Prêmios" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline", children: "★ Arena Oficial" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden lg:inline", children: "★ Calendário 2026" })
    ] }) })
  ] });
}
function SectionHead({
  eyebrow,
  title,
  subtitle,
  align = "left"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-3xl sm:text-5xl lg:text-6xl leading-[1] text-foreground", children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base text-muted-foreground sm:text-lg", children: subtitle })
  ] });
}
function VideoPromocional({
  hasEntered
}) {
  const [isMuted, setIsMuted] = reactExports.useState(true);
  const [volume, setVolume] = reactExports.useState(1);
  const iframeRef = reactExports.useRef(null);
  const controlarVideo = (comando, valor) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage({
        action: comando,
        value: valor
      }, "*");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "video-oficial", className: "relative py-24 sm:py-32 px-5 lg:px-10 overflow-hidden bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-24 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-5 z-50 flex items-center gap-3 rounded-full bg-background/80 px-4 py-2 shadow-[0_0_20px_rgba(212,175,55,0.2)] backdrop-blur-md border border-primary/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        const nextMuted = !isMuted;
        setIsMuted(nextMuted);
        controlarVideo("setMuted", nextMuted);
      }, className: "flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-foreground transition hover:bg-primary/30", title: isMuted ? "Ligar som" : "Desligar som", children: isMuted || volume === 0 ? "🔇" : "🔊" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: "0", max: "1", step: "0.05", value: isMuted ? 0 : volume, onChange: (e) => {
        const v = parseFloat(e.target.value);
        setVolume(v);
        controlarVideo("setVolume", v);
        if (v === 0) {
          setIsMuted(true);
          controlarVideo("setMuted", true);
        } else if (isMuted) {
          setIsMuted(false);
          controlarVideo("setMuted", false);
        }
      }, className: "w-24 accent-primary cursor-pointer" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHead, { eyebrow: "Vídeo Oficial", align: "center", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "VIVA A ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "EXPERIÊNCIA" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 relative w-full max-w-5xl mx-auto overflow-hidden rounded-3xl border border-border/50 shadow-2xl bg-black flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { ref: iframeRef, src: "https://pulsetestes.online/player/31abbd8e-f17c-4eea-909e-34f9c4f5e9e3?autoplay=0&progress=0&icons=0&play_btn=0&speed=0", width: "100%", height: "100%", frameBorder: "0", allowFullScreen: true, allow: "autoplay; fullscreen", className: "w-full aspect-video min-h-[200px] md:min-h-[400px]" }) })
    ] })
  ] });
}
const TICKETS = [{
  name: "Ingresso Individual",
  price: "R$ 60",
  p: "por dia",
  perks: ["Acesso a 1 dia de evento", "Arquibancada geral", "Pulseira de identificação"],
  cta: "Comprar"
}, {
  name: "Passaporte Evento",
  price: "R$ 220",
  p: "5 dias",
  perks: ["Acesso aos 5 dias do evento", "Arquibancada geral", "Desconto em estacionamento"],
  cta: "Comprar",
  badge: "Mais escolhido"
}, {
  name: "Área VIP",
  price: "R$ 480",
  p: "5 dias",
  perks: ["Acesso VIP aos 5 dias", "Visão privilegiada da arena", "Welcome drink incluso"],
  cta: "Comprar",
  featured: true
}, {
  name: "Camarote Premium",
  price: "Sob consulta",
  p: "experiência completa",
  perks: ["Camarote exclusivo", "Open food & drink", "Estacionamento privativo"],
  cta: "Quero meu camarote"
}];
function Ingressos() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "ingressos", className: "relative py-24 sm:py-32 px-5 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHead, { eyebrow: "Garanta Seu Ingresso", align: "center", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "VIVA DE PERTO ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "A EMOÇÃO DA VAQUEJADA" })
    ] }), subtitle: "Escolha a experiência ideal para você na Arena Canindezinho." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4", children: TICKETS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative flex flex-col rounded-3xl border p-7 transition hover:-translate-y-1 ${t.featured ? "border-primary/70 bg-gradient-to-b from-primary/15 via-card to-card shadow-[var(--shadow-gold)]" : "border-border bg-card hover:border-primary/50"}`, children: [
      t.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-accent-foreground", children: t.badge }),
      t.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full btn-gold px-4 py-1 text-[10px]", children: "Recomendado" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl uppercase tracking-wider text-foreground", children: t.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex items-baseline gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl text-gradient-gold", children: t.price }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: t.p }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 flex-1 space-y-3 text-sm text-foreground/85", children: t.perks.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" }),
        p
      ] }, p)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.suasenha.com.br/", className: `mt-7 rounded-full px-5 py-3 text-[11px] text-center inline-block relative z-20 ${t.featured ? "btn-gold" : "btn-ghost-gold"}`, children: t.cta })
    ] }, t.name)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground", children: "Pagamento seguro · Pix, Cartão e Boleto" })
  ] }) });
}
const PACKS = [{
  name: "Bronze",
  price: "R$ 5.000",
  perks: ["Marca no telão", "Citação na locução", "Logo no site oficial"]
}, {
  name: "Prata",
  price: "R$ 15.000",
  perks: ["Marca em arena", "Material oficial", "Posts nas redes", "Locução premium"]
}, {
  name: "Ouro",
  price: "R$ 35.000",
  perks: ["Marca na arena central", "Camarote 6 lugares", "Vinheta exclusiva", "Campanhas digitais"],
  featured: true
}, {
  name: "Master",
  price: "Sob consulta",
  perks: ["Naming rights", "Marca em todos materiais", "Camarote master", "Ações exclusivas"]
}];
function Patrocinadores() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "patrocinadores", className: "relative py-24 sm:py-32 px-5 lg:px-10 bg-gradient-to-b from-background via-card/30 to-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHead, { eyebrow: "Patrocínio", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "SEJA UM ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "PATROCINADOR OFICIAL" })
      ] }), subtitle: "Associe sua marca a um dos maiores eventos de vaquejada da região e esteja presente diante de um público apaixonado por esporte, tradição e cultura nordestina." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-2 gap-3", children: [["+50k", "Público presencial"], ["+1M", "Alcance digital"], ["5", "Dias de exposição"], ["100%", "Cobertura mídia"]].map(([n, l]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-gradient-gold", children: n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: l })
      ] }, l)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 grid gap-4 sm:grid-cols-2", children: PACKS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative flex flex-col rounded-2xl border p-6 transition hover:-translate-y-1 ${p.featured ? "border-primary/70 bg-gradient-to-b from-primary/15 to-card" : "border-border bg-card hover:border-primary/50"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl uppercase tracking-wider text-foreground", children: p.name }),
        p.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary/20 px-2.5 py-0.5 text-[9px] uppercase tracking-[0.25em] text-primary", children: "Top" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display text-3xl text-gradient-gold", children: p.price }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 flex-1 space-y-2 text-sm text-foreground/85", children: p.perks.map((pp) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1 w-1 rounded-full bg-primary" }),
        pp
      ] }, pp)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `mt-5 rounded-full px-5 py-3 text-[11px] ${p.featured ? "btn-gold" : "btn-ghost-gold"}`, children: "Quero Patrocinar" })
    ] }, p.name)) })
  ] }) }) });
}
const TESTI = [{
  n: "Carlos Eduardo",
  r: "Vaqueiro Profissional",
  q: "Uma das vaquejadas mais bem estruturadas do Nordeste. Organização nota mil."
}, {
  n: "Mariana Sousa",
  r: "Visitante / Caucaia-CE",
  q: "Trouxe minha família e foi uma experiência inesquecível. Já garantimos presença em 2026."
}, {
  n: "AgroMax Patrocínios",
  r: "Patrocinador Master",
  q: "Retorno de marca surpreendente. Público engajado e cobertura impecável."
}, {
  n: "Equipe Garra Forte",
  r: "Competidores",
  q: "Arena de primeiro nível, premiação justa e respeito pelos atletas."
}];
function Depoimentos() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 sm:py-32 px-5 lg:px-10 bg-gradient-to-b from-background via-card/30 to-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHead, { eyebrow: "Autoridade", align: "center", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "QUEM VIVE" }),
      " A ARENA CANINDEZINHO"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4", children: TESTI.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-primary", children: Array.from({
        length: 5
      }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "★" }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-sm leading-relaxed text-foreground/90", children: [
        '"',
        t.q,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/40 to-accent/40 font-display text-sm text-foreground", children: t.n.split(" ").map((w) => w[0]).slice(0, 2).join("") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-sm text-foreground", children: t.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: t.r })
        ] })
      ] })
    ] }, t.n)) })
  ] }) });
}
function CTAFinal() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 sm:py-32 px-5 lg:px-10 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 -z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroAsset.url, alt: "", className: "h-full w-full object-cover object-[60%_30%]", loading: "lazy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background to-transparent" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label justify-center", children: "Edição Oficial 2026" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.95] text-foreground", children: [
        "PREPARE-SE PARA VIVER ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "A EMOÇÃO DA VAQUEJADA" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg", children: "De 09 a 13 de setembro de 2026 · Haras Canindezinho · Caucaia-CE" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-4 relative z-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.suasenha.com.br/", className: "btn-gold rounded-full px-7 py-4 text-xs font-bold", children: "COMPRE SUA SENHA" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#patrocinadores", className: "rounded-full border border-border px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/80 hover:text-primary", children: "Seja Patrocinador" })
      ] })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { id: "contato", className: "border-t border-border bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-16 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full border border-primary/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl font-bold text-gradient-gold", children: "HC" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg text-foreground", children: "HARAS CANINDEZINHO" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: "Arena Canindezinho · Caucaia-CE" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-md text-sm text-muted-foreground", children: "Um dos maiores eventos de vaquejada da região. Tradição, esporte e cultura nordestina em uma experiência premium." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex gap-3", children: [{
          label: "Instagram",
          href: "https://www.instagram.com/harascanindezinho/"
        }, {
          label: "Facebook",
          href: "#"
        }, {
          label: "YouTube",
          href: "#"
        }, {
          label: "WhatsApp",
          href: "https://wa.me/5585997832737"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: s.href, className: "flex px-4 h-10 items-center justify-center rounded-full border border-border text-xs font-semibold text-muted-foreground transition hover:border-primary hover:text-primary", children: s.label }, s.label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-primary", children: "Links Rápidos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: n.href, className: "hover:text-foreground", ...n.href.startsWith("http") ? {
          target: "_blank",
          rel: "noopener noreferrer"
        } : {}, children: n.label }) }, n.href)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-primary", children: "Contato" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Arena Canindezinho — Caucaia, Ceará" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "WhatsApp: +55 (85) 99783-2737" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "contato@harascanindezinho.com.br" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-foreground", children: "Evento: 09 a 13 de Setembro de 2026" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/5585997832737", className: "mt-5 inline-flex rounded-full btn-gold px-5 py-3 text-[11px]", children: "Falar no WhatsApp" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Haras Canindezinho · Todos os direitos reservados"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: "Calendário Oficial · Edição 2026" })
    ] })
  ] }) });
}
function WhatsAppButton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/5585997832737", className: "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] transition-transform hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)]", "aria-label": "Falar no WhatsApp", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "h-8 w-8 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12.031 0C5.385 0 0 5.385 0 12.031c0 2.128.552 4.161 1.6 5.966L.041 23.96l6.104-1.603a11.986 11.986 0 005.886 1.542c6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm5.955 17.067c-.255.719-1.464 1.344-2.046 1.411-.531.061-1.22-.058-3.414-.969-2.651-1.101-4.321-3.805-4.453-3.982-.131-.176-1.064-1.417-1.064-2.702 0-1.284.664-1.92.898-2.176.234-.255.51-.318.68-.318.17 0 .34.001.488.007.156.007.362-.061.564.428.212.51.722 1.764.786 1.892.064.128.106.277.021.447-.085.17-.128.277-.255.447-.128.17-.267.365-.382.492-.128.128-.262.269-.117.525.145.255.644 1.07 1.383 1.725.952.844 1.75 1.11 2.006 1.238.255.128.404.106.553-.064.149-.17.638-.745.808-1.001.17-.255.34-.213.574-.128.234.085 1.489.702 1.745.83.255.128.425.192.488.298.064.106.064.618-.191 1.337z" }) }) });
}
function WelcomeOverlay({
  onEnter
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/95 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-20 w-20 items-center justify-center rounded-full border border-primary/60 bg-background/40 shadow-[0_0_30px_rgba(212,175,55,0.3)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl font-bold text-gradient-gold", children: "HC" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl sm:text-3xl uppercase tracking-widest text-foreground text-center px-4", children: [
      "Bem-vindo ao ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "Haras Canindezinho" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onEnter, className: "mt-4 rounded-full btn-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,55,0.4)] transition hover:scale-105", children: "Viver a Experiência" })
  ] }) });
}
function Index() {
  const [hasEntered, setHasEntered] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!hasEntered) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [hasEntered]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground relative", children: [
    !hasEntered && /* @__PURE__ */ jsxRuntimeExports.jsx(WelcomeOverlay, { onEnter: () => {
      setHasEntered(true);
      const iframe = document.querySelector("iframe");
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage({
          action: "play"
        }, "*");
        iframe.contentWindow.postMessage({
          action: "setMuted",
          value: false
        }, "*");
        iframe.contentWindow.postMessage({
          action: "setVolume",
          value: 1
        }, "*");
      }
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, 100);
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(VideoPromocional, { hasEntered }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Ingressos, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Patrocinadores, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Depoimentos, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CTAFinal, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppButton, {})
  ] });
}
export {
  Index as component
};
