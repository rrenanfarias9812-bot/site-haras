import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, useRef } from "react";
import heroAsset from "@/assets/vaquejada-hero.png.asset.json";
import arenaImg from "@/assets/arena.jpg";
import vaqueiroImg from "@/assets/vaqueiro.jpg";
import actionImg from "@/assets/action.jpg";
import crowdImg from "@/assets/crowd.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Haras Canindezinho — Grande Vaquejada 2026 | Caucaia-CE" },
      {
        name: "description",
        content:
          "De 09 a 13 de setembro de 2026, a Arena Canindezinho recebe um dos maiores eventos de vaquejada da região. +R$ 200 mil em prêmios. Garanta seu ingresso.",
      },
      { property: "og:title", content: "Grande Vaquejada Haras Canindezinho 2026" },
      {
        property: "og:description",
        content:
          "5 dias de vaquejada, tradição e emoção na Arena Canindezinho — Caucaia-CE. +R$ 200 mil em prêmios.",
      },
      { property: "og:image", content: heroAsset.url },
      { property: "og:url", content: "/" },
      { name: "twitter:image", content: heroAsset.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: "Grande Vaquejada Haras Canindezinho 2026",
          startDate: "2026-09-09",
          endDate: "2026-09-13",
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          location: {
            "@type": "Place",
            name: "Arena Canindezinho — Haras Canindezinho",
            address: { "@type": "PostalAddress", addressLocality: "Caucaia", addressRegion: "CE", addressCountry: "BR" },
          },
          image: [heroAsset.url],
          description:
            "Um dos maiores eventos de vaquejada da região, com +R$ 200 mil em prêmios.",
          organizer: { "@type": "Organization", name: "Haras Canindezinho" },
        }),
      },
    ],
  }),
  component: Index,
});

/* ============ HEADER ============ */
const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Ingressos", href: "#ingressos" },
  { label: "Fotos", href: "/fotos" },
  { label: "Patrocinadores", href: "#patrocinadores" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "glass-panel py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-10">
        <a href="#inicio" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/60 bg-background/40">
            <span className="font-display text-xl font-bold text-gradient-gold">HC</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-bold tracking-wide text-foreground">
              HARAS <span className="text-gradient-gold">CANINDEZINHO</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              Caucaia · Ceará
            </div>
          </div>
        </a>

        <nav className="hidden xl:flex items-center gap-7">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[12px] font-semibold uppercase tracking-[0.18em] text-foreground/80 transition hover:text-primary"
              {...(n.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://www.instagram.com/harascanindezinho/" className="text-muted-foreground hover:text-primary transition" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.834a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
          </a>
          <a href="https://www.suasenha.com.br/" className="btn-gold rounded-full px-6 py-2.5 text-[11px] font-bold">
            COMPRE SUA SENHA
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="xl:hidden flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background/40"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
          </div>
        </button>
      </div>

      {open && (
        <div className="xl:hidden mx-5 mt-3 glass-panel rounded-2xl p-5">
          <div className="flex flex-col gap-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground/90 hover:text-primary"
                {...(n.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {n.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <a href="https://www.suasenha.com.br/" className="btn-gold rounded-full px-5 py-3 text-center text-xs font-bold">
                COMPRE SUA SENHA
              </a>
              <a href="https://www.instagram.com/harascanindezinho/" className="rounded-full border border-border px-5 py-3 text-center text-xs font-bold text-foreground hover:bg-white/5 transition">
                Siga nosso Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ============ COUNTDOWN ============ */
function useCountdown(target: Date) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const i = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(i);
  }, []);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

function Countdown() {
  const target = useMemo(() => new Date("2026-09-09T18:00:00-03:00"), []);
  const { d, h, m, s } = useCountdown(target);
  const items = [
    { k: "Dias", v: d },
    { k: "Horas", v: h },
    { k: "Min", v: m },
    { k: "Seg", v: s },
  ];
  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3">
      {items.map((it) => (
        <div
          key={it.k}
          className="glass-panel rounded-xl px-2 py-3 sm:px-4 sm:py-4 text-center"
        >
          <div className="font-display text-2xl sm:text-4xl font-bold text-gradient-gold tabular-nums">
            {String(it.v).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {it.k}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ============ HERO ============ */
function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroAsset.url}
          alt="Vaqueiro e cavalo na Arena Canindezinho"
          className="h-full w-full object-cover object-[60%_center] animate-slow-zoom"
          width={1148}
          height={1434}
          fetchpriority="high"
        />
        {/* cinematic overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.08 0.01 60 / 0.92) 0%, oklch(0.08 0.01 60 / 0.65) 35%, oklch(0.08 0.01 60 / 0.25) 70%, oklch(0.08 0.01 60 / 0.7) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div
          className="absolute inset-0 mix-blend-overlay opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 30%, oklch(0.86 0.16 85 / 0.5), transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 lg:px-10 lg:pb-24 lg:pt-40">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-end">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.32em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Calendário Oficial · Edição 2026
              </span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                09 — 13 Setembro · Caucaia/CE
              </span>
            </div>

            <h1 className="font-display text-4xl leading-[0.95] text-foreground sm:text-5xl md:text-7xl lg:text-[5.5rem]">
              VEM AÍ MAIS UMA <br />
              <span className="text-gradient-gold">GRANDE VAQUEJADA.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base text-foreground/80 sm:text-lg">
              De <strong className="text-foreground">09 a 13 de setembro de 2026</strong>, a
              Arena Canindezinho recebe um dos maiores eventos de vaquejada da região —
              tradição, esporte e emoção em cinco dias inesquecíveis.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-primary/30 bg-background/40 px-5 py-3 backdrop-blur">
              <span className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Premiação
              </span>
              <span className="font-display text-2xl sm:text-3xl font-bold text-gradient-gold">
                + R$ 200 MIL
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="https://www.suasenha.com.br/" className="btn-gold rounded-full px-7 py-4 text-xs font-bold relative z-20">
                COMPRE SUA SENHA
              </a>
              <a
                href="#calendario"
                className="rounded-full px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/80 transition hover:text-primary"
              >
                Ver Calendário →
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              <span>★ Haras Canindezinho</span>
              <span>★ Caucaia · CE</span>
              <span>★ Arena Canindezinho</span>
            </div>
          </div>

          {/* Floating event card + countdown */}
          <div className="lg:col-span-5 animate-fade-up [animation-delay:200ms]">
            <div className="glass-panel rounded-3xl p-6 sm:p-7 noise-overlay">
              <div className="flex items-center justify-between">
                <div>
                  <div className="section-label">O Evento</div>
                  <div className="mt-2 font-display text-2xl font-bold text-foreground">
                    Contagem Regressiva
                  </div>
                </div>
                <div className="hidden sm:flex flex-col items-end">
                  <div className="font-display text-4xl font-bold text-gradient-gold leading-none">
                    5
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Dias de evento
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <Countdown />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl bg-background/40 p-3 ring-1 ring-border">
                  <div className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                    Início
                  </div>
                  <div className="mt-1 font-display text-base text-foreground">09 Set</div>
                </div>
                <div className="rounded-xl bg-background/40 p-3 ring-1 ring-border">
                  <div className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                    Final
                  </div>
                  <div className="mt-1 font-display text-base text-foreground">13 Set</div>
                </div>
                <div className="rounded-xl bg-background/40 p-3 ring-1 ring-border">
                  <div className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                    Local
                  </div>
                  <div className="mt-1 font-display text-base text-foreground">Caucaia/CE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-border/50 bg-background/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 overflow-hidden px-5 py-3 text-[10px] uppercase tracking-[0.32em] text-muted-foreground lg:px-10">
          <span>★ Vaquejada Premium</span>
          <span className="hidden sm:inline">★ Cultura Nordestina</span>
          <span>★ +R$ 200 Mil em Prêmios</span>
          <span className="hidden md:inline">★ Arena Oficial</span>
          <span className="hidden lg:inline">★ Calendário 2026</span>
        </div>
      </div>
    </section>
  );
}

/* ============ SECTION HEADER ============ */
function SectionHead({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <span className="section-label">{eyebrow}</span>
      <h2 className="mt-4 font-display text-3xl sm:text-5xl lg:text-6xl leading-[1] text-foreground">
        {title}
      </h2>
      {subtitle && <p className="mt-5 text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
    </div>
  );
}

/* ============ VIDEO PROMOCIONAL ============ */
function VideoPromocional({ hasEntered }: { hasEntered?: boolean }) {
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const controlarVideo = (comando: string, valor: any) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage({ action: comando, value: valor }, '*');
    }
  };

  // O som inicial agora é disparado globalmente no Index (clique do WelcomeOverlay)
  // para evitar bloqueios assíncronos do navegador.

  return (
    <section id="video-oficial" className="relative py-24 sm:py-32 px-5 lg:px-10 overflow-hidden bg-background">
      {/* Controles de Volume Fixos na Tela */}
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-5 z-50 flex items-center gap-3 rounded-full bg-background/80 px-4 py-2 shadow-[0_0_20px_rgba(212,175,55,0.2)] backdrop-blur-md border border-primary/20">
        <button
          onClick={() => {
            const nextMuted = !isMuted;
            setIsMuted(nextMuted);
            controlarVideo('setMuted', nextMuted);
          }}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-foreground transition hover:bg-primary/30"
          title={isMuted ? "Ligar som" : "Desligar som"}
        >
          {isMuted || volume === 0 ? "🔇" : "🔊"}
        </button>
        <input 
          type="range" 
          min="0" max="1" step="0.05" 
          value={isMuted ? 0 : volume} 
          onChange={(e) => {
            const v = parseFloat(e.target.value);
            setVolume(v);
            controlarVideo('setVolume', v);
            if (v === 0) {
              setIsMuted(true);
              controlarVideo('setMuted', true);
            } else if (isMuted) {
              setIsMuted(false);
              controlarVideo('setMuted', false);
            }
          }}
          className="w-24 accent-primary cursor-pointer"
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <SectionHead
          eyebrow="Vídeo Oficial"
          align="center"
          title={
            <>
              VIVA A <span className="text-gradient-gold">EXPERIÊNCIA</span>
            </>
          }
        />
        <div className="mt-12 relative w-full max-w-5xl mx-auto overflow-hidden rounded-3xl border border-border/50 shadow-2xl bg-black flex justify-center">
          <iframe 
            ref={iframeRef}
            src="https://pulsetestes.online/player/31abbd8e-f17c-4eea-909e-34f9c4f5e9e3?autoplay=0&progress=0&icons=0&play_btn=0&speed=0" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            allowFullScreen
            allow="autoplay; fullscreen"
            className="w-full aspect-video min-h-[200px] md:min-h-[400px]"
          />
        </div>
      </div>
    </section>
  );
}

/* ============ EVENTO ============ */
function Evento() {
  const cards = [
    { n: "05", l: "Dias de Evento", d: "De 09 a 13 de setembro de 2026" },
    { n: "200K+", l: "Em Premiação", d: "Mais de R$ 200 mil distribuídos" },
    { n: "01", l: "Arena Oficial", d: "Arena Canindezinho · Caucaia/CE" },
    { n: "∞", l: "Tradição", d: "Cultura nordestina e família" },
  ];
  return (
    <section id="evento" className="relative py-24 sm:py-32 px-5 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="O Evento"
              title={
                <>
                  GRANDE VAQUEJADA <br />
                  <span className="text-gradient-gold">HARAS CANINDEZINHO</span> 2026
                </>
              }
              subtitle="Uma experiência completa de competição, esporte e tradição. Cinco dias que reúnem famílias, vaqueiros e apaixonados pela cultura nordestina em uma das maiores arenas da região."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://www.suasenha.com.br/" className="btn-gold rounded-full px-6 py-3 text-xs relative z-20">
                Garantir presença
              </a>
              <a href="#calendario" className="btn-ghost-gold rounded-full px-6 py-3 text-xs">
                Programação
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {cards.map((c) => (
                <div
                  key={c.l}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary/60"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-primary/20" />
                  <div className="font-display text-5xl font-bold text-gradient-gold">{c.n}</div>
                  <div className="mt-4 font-display text-lg uppercase tracking-wider text-foreground">
                    {c.l}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{c.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Competição", d: "Provas das principais categorias com vaqueiros de alto nível." },
            { t: "Música & Festa", d: "Atrações regionais, forró e shows todas as noites do evento." },
            { t: "Família", d: "Estrutura completa, segurança e experiência para todas as idades." },
          ].map((b) => (
            <div
              key={b.t}
              className="rounded-2xl border border-border/70 bg-gradient-to-b from-card to-background p-7"
            >
              <div className="font-display text-2xl text-foreground">{b.t}</div>
              <div className="mt-3 text-sm text-muted-foreground">{b.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ CALENDARIO ============ */
const CAL = [
  {
    d: "09",
    weekday: "Quarta",
    title: "Abertura Oficial",
    items: ["19h — Cerimônia de Abertura", "20h — Apresentações", "22h — Show de Abertura"],
  },
  {
    d: "10",
    weekday: "Quinta",
    title: "Eliminatórias I",
    items: ["16h — Provas Iniciantes", "19h — Eliminatórias", "22h — Forró Pé de Serra"],
  },
  {
    d: "11",
    weekday: "Sexta",
    title: "Eliminatórias II",
    items: ["16h — Categoria Aspirante", "19h — Categoria Profissional", "23h — Show Nacional"],
  },
  {
    d: "12",
    weekday: "Sábado",
    title: "Semifinais",
    items: ["15h — Semifinais", "20h — Apresentação Premium", "23h — Show Principal"],
  },
  {
    d: "13",
    weekday: "Domingo",
    title: "Grande Final",
    items: ["14h — Grande Final", "19h — Premiação Oficial", "22h — Encerramento"],
  },
];

function Calendario() {
  return (
    <section id="calendario" className="relative py-24 sm:py-32 px-5 lg:px-10 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            eyebrow="Calendário Oficial"
            title={
              <>
                CINCO DIAS <br />
                <span className="text-gradient-gold">DE EMOÇÃO</span>
              </>
            }
            subtitle="Programação oficial da Grande Vaquejada Haras Canindezinho 2026."
          />
          <div className="hidden lg:block text-right">
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Edição</div>
            <div className="font-display text-5xl font-bold text-gradient-gold">2026</div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {CAL.map((day, i) => (
            <div
              key={day.d}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_30px_60px_-30px_oklch(0.78_0.14_78/0.4)]"
            >
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="font-display text-5xl font-bold leading-none text-gradient-gold">
                    {day.d}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Setembro · {day.weekday}
                  </div>
                </div>
                <span className="rounded-full border border-primary/40 px-2.5 py-1 text-[9px] uppercase tracking-[0.25em] text-primary">
                  Dia {i + 1}
                </span>
              </div>
              <div className="mt-5 font-display text-xl text-foreground">{day.title}</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {day.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {it}
                  </li>
                ))}
              </ul>
              <button className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary transition hover:text-foreground">
                Ver programação →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ INGRESSOS ============ */
const TICKETS = [
  {
    name: "Ingresso Individual",
    price: "R$ 60",
    p: "por dia",
    perks: ["Acesso a 1 dia de evento", "Arquibancada geral", "Pulseira de identificação"],
    cta: "Comprar",
  },
  {
    name: "Passaporte Evento",
    price: "R$ 220",
    p: "5 dias",
    perks: ["Acesso aos 5 dias do evento", "Arquibancada geral", "Desconto em estacionamento"],
    cta: "Comprar",
    badge: "Mais escolhido",
  },
  {
    name: "Área VIP",
    price: "R$ 480",
    p: "5 dias",
    perks: ["Acesso VIP aos 5 dias", "Visão privilegiada da arena", "Welcome drink incluso"],
    cta: "Comprar",
    featured: true,
  },
  {
    name: "Camarote Premium",
    price: "Sob consulta",
    p: "experiência completa",
    perks: ["Camarote exclusivo", "Open food & drink", "Estacionamento privativo"],
    cta: "Quero meu camarote",
  },
];

function Ingressos() {
  return (
    <section id="ingressos" className="relative py-24 sm:py-32 px-5 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          eyebrow="Garanta Seu Ingresso"
          align="center"
          title={
            <>
              VIVA DE PERTO <br />
              <span className="text-gradient-gold">A EMOÇÃO DA VAQUEJADA</span>
            </>
          }
          subtitle="Escolha a experiência ideal para você na Arena Canindezinho."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {TICKETS.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-3xl border p-7 transition hover:-translate-y-1 ${
                t.featured
                  ? "border-primary/70 bg-gradient-to-b from-primary/15 via-card to-card shadow-[var(--shadow-gold)]"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              {t.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-accent-foreground">
                  {t.badge}
                </span>
              )}
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full btn-gold px-4 py-1 text-[10px]">
                  Recomendado
                </span>
              )}
              <div className="font-display text-xl uppercase tracking-wider text-foreground">
                {t.name}
              </div>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-4xl text-gradient-gold">{t.price}</span>
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.p}</div>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-foreground/85">
                {t.perks.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#ingressos"
                onClick={(e) => e.preventDefault()}
                className={`mt-7 rounded-full px-5 py-3 text-[11px] text-center inline-block relative z-20 ${
                  t.featured ? "btn-gold" : "btn-ghost-gold"
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Pagamento seguro · Pix, Cartão e Boleto
        </p>
      </div>
    </section>
  );
}

/* ============ INSCRICOES ============ */
function Inscricoes() {
  const [sent, setSent] = useState(false);
  return (
    <section
      id="inscricoes"
      className="relative py-24 sm:py-32 px-5 lg:px-10 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <img src={vaqueiroImg} alt="" className="h-full w-full object-cover opacity-25" loading="lazy" width={1024} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
      </div>

      <div className="mx-auto max-w-7xl grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHead
            eyebrow="Inscrição de Competidores"
            title={
              <>
                PARTICIPE DE UMA DAS <span className="text-gradient-gold">MAIORES VAQUEJADAS</span> DA REGIÃO
              </>
            }
            subtitle="Inscreva-se nas categorias oficiais e dispute mais de R$ 200 mil em prêmios na Arena Canindezinho."
          />
          <div className="mt-8 space-y-4">
            {[
              { t: "Categorias Oficiais", d: "Aspirante · Iniciante · Amador · Profissional · Master" },
              { t: "Premiação Garantida", d: "Mais de R$ 200 mil distribuídos entre as categorias" },
              { t: "Atendimento Direto", d: "Fale com a organização via WhatsApp para tirar dúvidas" },
            ].map((b) => (
              <div key={b.t} className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur">
                <div className="font-display text-lg text-foreground">{b.t}</div>
                <div className="text-sm text-muted-foreground">{b.d}</div>
              </div>
            ))}
            <a
              href="https://wa.me/5585997832737"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary hover:text-foreground"
            >
              Falar com a organização →
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="glass-panel rounded-3xl p-7 sm:p-9"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nome do competidor" name="nome" />
              <Field label="Telefone / WhatsApp" name="tel" />
              <Field label="Cidade" name="cidade" />
              <SelectField
                label="Categoria"
                name="cat"
                options={["Aspirante", "Iniciante", "Amador", "Profissional", "Master"]}
              />
              <Field label="Nome do cavalo" name="cavalo" />
              <Field label="Nome da equipe" name="equipe" />
              <Field label="Documento (CPF)" name="doc" />
              <Field label="E-mail" name="email" type="email" />
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Observações
              </label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
                placeholder="Conte algo importante para a organização"
              />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Vagas limitadas · Inscrições oficiais
              </p>
              <button type="submit" className="btn-gold rounded-full px-7 py-3.5 text-xs">
                {sent ? "Inscrição enviada ✓" : "Enviar Inscrição"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
      />
    </div>
  );
}
function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </label>
      <select
        name={name}
        className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
      >
        <option value="">Selecione</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

/* ============ PATROCINADORES ============ */
const PACKS = [
  {
    name: "Bronze",
    price: "R$ 5.000",
    perks: ["Marca no telão", "Citação na locução", "Logo no site oficial"],
  },
  {
    name: "Prata",
    price: "R$ 15.000",
    perks: ["Marca em arena", "Material oficial", "Posts nas redes", "Locução premium"],
  },
  {
    name: "Ouro",
    price: "R$ 35.000",
    perks: [
      "Marca na arena central",
      "Camarote 6 lugares",
      "Vinheta exclusiva",
      "Campanhas digitais",
    ],
    featured: true,
  },
  {
    name: "Master",
    price: "Sob consulta",
    perks: [
      "Naming rights",
      "Marca em todos materiais",
      "Camarote master",
      "Ações exclusivas",
    ],
  },
];

function Patrocinadores() {
  return (
    <section
      id="patrocinadores"
      className="relative py-24 sm:py-32 px-5 lg:px-10 bg-gradient-to-b from-background via-card/30 to-background"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="Patrocínio"
              title={
                <>
                  SEJA UM <span className="text-gradient-gold">PATROCINADOR OFICIAL</span>
                </>
              }
              subtitle="Associe sua marca a um dos maiores eventos de vaquejada da região e esteja presente diante de um público apaixonado por esporte, tradição e cultura nordestina."
            />
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                ["+50k", "Público presencial"],
                ["+1M", "Alcance digital"],
                ["5", "Dias de exposição"],
                ["100%", "Cobertura mídia"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-2xl border border-border bg-card p-5">
                  <div className="font-display text-3xl text-gradient-gold">{n}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
            {PACKS.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-2xl border p-6 transition hover:-translate-y-1 ${
                  p.featured
                    ? "border-primary/70 bg-gradient-to-b from-primary/15 to-card"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-display text-2xl uppercase tracking-wider text-foreground">
                    {p.name}
                  </div>
                  {p.featured && (
                    <span className="rounded-full bg-primary/20 px-2.5 py-0.5 text-[9px] uppercase tracking-[0.25em] text-primary">
                      Top
                    </span>
                  )}
                </div>
                <div className="mt-3 font-display text-3xl text-gradient-gold">{p.price}</div>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-foreground/85">
                  {p.perks.map((pp) => (
                    <li key={pp} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-primary" />
                      {pp}
                    </li>
                  ))}
                </ul>
                <button className={`mt-5 rounded-full px-5 py-3 text-[11px] ${p.featured ? "btn-gold" : "btn-ghost-gold"}`}>
                  Quero Patrocinar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ GALERIA ============ */
const GAL_TABS = ["Vaquejada", "Arena", "Bastidores", "Público", "Campeões", "Patrocinadores"];

function Galeria() {
  const [tab, setTab] = useState(GAL_TABS[0]);
  const imgs = [actionImg, arenaImg, vaqueiroImg, crowdImg, heroAsset.url, actionImg];
  return (
    <section id="galeria" className="py-24 sm:py-32 px-5 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="Galeria"
            title={
              <>
                MOMENTOS DE <span className="text-gradient-gold">EMOÇÃO E TRADIÇÃO</span>
              </>
            }
          />
          <div className="flex flex-wrap gap-2">
            {GAL_TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] transition ${
                  tab === t
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:border-primary/60 hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid auto-rows-[200px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[220px]">
          {imgs.map((src, i) => {
            const big = i === 0 || i === 3;
            return (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl border border-border ${
                  big ? "col-span-2 row-span-2" : ""
                }`}
              >
                <img
                  src={src}
                  alt={`Galeria ${tab} ${i + 1}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/90">
                    {tab}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-primary">
                    0{i + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============ NOTICIAS ============ */
const NEWS = [
  {
    img: heroAsset.url,
    cat: "Oficial",
    t: "Lançamento oficial da Vaquejada 2026",
    r: "Haras Canindezinho anuncia datas, premiação e estrutura da edição 2026.",
    date: "01 Mar 2026",
  },
  {
    img: arenaImg,
    cat: "Premiação",
    t: "Premiação ultrapassa R$ 200 mil",
    r: "Edição 2026 traz a maior premiação da história do evento.",
    date: "15 Mar 2026",
  },
  {
    img: actionImg,
    cat: "Arena",
    t: "Arena Canindezinho se prepara para grande evento",
    r: "Estrutura ganha reforço para receber milhares de visitantes.",
    date: "02 Abr 2026",
  },
  {
    img: crowdImg,
    cat: "Inscrições",
    t: "Inscrições abertas para competidores",
    r: "Vaqueiros já podem garantir vaga nas categorias oficiais.",
    date: "20 Abr 2026",
  },
];

function Noticias() {
  return (
    <section id="noticias" className="py-24 sm:py-32 px-5 lg:px-10 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          eyebrow="Notícias"
          title={
            <>
              NOTÍCIAS DO <span className="text-gradient-gold">HARAS CANINDEZINHO</span>
            </>
          }
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {NEWS.map((n) => (
            <article
              key={n.t}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary/60"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={n.img}
                  alt={n.t}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <span className="absolute top-3 left-3 rounded-full bg-background/70 px-3 py-1 text-[9px] uppercase tracking-[0.25em] text-primary backdrop-blur">
                  {n.cat}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {n.date}
                </div>
                <h3 className="mt-2 font-display text-xl leading-tight text-foreground">{n.t}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{n.r}</p>
                <button className="mt-4 text-left text-[11px] font-semibold uppercase tracking-[0.2em] text-primary hover:text-foreground">
                  Ler mais →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ ESTRUTURA ============ */
const STRUCT = [
  { t: "Arena Central", d: "Pista profissional, iluminação cinematográfica e som de alta qualidade.", img: arenaImg },
  { t: "Estacionamento", d: "Amplo, monitorado e com acesso facilitado para todos os dias do evento.", img: crowdImg },
  { t: "Camarotes Premium", d: "Áreas exclusivas com vista privilegiada, food & drink incluso.", img: vaqueiroImg },
  { t: "Área dos Competidores", d: "Estrutura completa de suporte para vaqueiros, equipes e cavalos.", img: actionImg },
];

function Estrutura() {
  return (
    <section className="py-24 sm:py-32 px-5 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          eyebrow="Estrutura"
          title={
            <>
              UMA ARENA <span className="text-gradient-gold">FEITA PARA GRANDES EVENTOS</span>
            </>
          }
          subtitle="O Haras Canindezinho oferece estrutura completa para competidores, público, patrocinadores e parceiros."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {STRUCT.map((s, i) => (
            <div
              key={s.t}
              className={`group relative overflow-hidden rounded-3xl border border-border ${
                i % 3 === 0 ? "md:row-span-2 md:aspect-[4/5]" : "aspect-[16/10]"
              }`}
            >
              <img
                src={s.img}
                alt={s.t}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary">0{i + 1}</div>
                <div className="mt-2 font-display text-2xl text-foreground">{s.t}</div>
                <div className="mt-2 max-w-md text-sm text-muted-foreground">{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ DEPOIMENTOS ============ */
const TESTI = [
  {
    n: "Carlos Eduardo",
    r: "Vaqueiro Profissional",
    q: "Uma das vaquejadas mais bem estruturadas do Nordeste. Organização nota mil.",
  },
  {
    n: "Mariana Sousa",
    r: "Visitante / Caucaia-CE",
    q: "Trouxe minha família e foi uma experiência inesquecível. Já garantimos presença em 2026.",
  },
  {
    n: "AgroMax Patrocínios",
    r: "Patrocinador Master",
    q: "Retorno de marca surpreendente. Público engajado e cobertura impecável.",
  },
  {
    n: "Equipe Garra Forte",
    r: "Competidores",
    q: "Arena de primeiro nível, premiação justa e respeito pelos atletas.",
  },
];

function Depoimentos() {
  return (
    <section className="py-24 sm:py-32 px-5 lg:px-10 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          eyebrow="Autoridade"
          align="center"
          title={
            <>
              <span className="text-gradient-gold">QUEM VIVE</span> A ARENA CANINDEZINHO
            </>
          }
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {TESTI.map((t) => (
            <div key={t.n} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">"{t.q}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/40 to-accent/40 font-display text-sm text-foreground">
                  {t.n.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div className="font-display text-sm text-foreground">{t.n}</div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {t.r}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ CTA FINAL ============ */
function CTAFinal() {
  return (
    <section className="relative py-24 sm:py-32 px-5 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroAsset.url} alt="" className="h-full w-full object-cover object-[60%_30%]" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>
      <div className="mx-auto max-w-5xl text-center">
        <span className="section-label justify-center">Edição Oficial 2026</span>
        <h2 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.95] text-foreground">
          PREPARE-SE PARA VIVER <br />
          <span className="text-gradient-gold">A EMOÇÃO DA VAQUEJADA</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          De 09 a 13 de setembro de 2026 · Haras Canindezinho · Caucaia-CE
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 relative z-20">
          <a href="https://www.suasenha.com.br/" className="btn-gold rounded-full px-7 py-4 text-xs font-bold">
            COMPRE SUA SENHA
          </a>
          <a href="#patrocinadores" className="rounded-full border border-border px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/80 hover:text-primary">
            Seja Patrocinador
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============ FOOTER ============ */
function Footer() {
  return (
    <footer id="contato" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/60">
                <span className="font-display text-xl font-bold text-gradient-gold">HC</span>
              </div>
              <div>
                <div className="font-display text-lg text-foreground">HARAS CANINDEZINHO</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Arena Canindezinho · Caucaia-CE
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm text-muted-foreground">
              Um dos maiores eventos de vaquejada da região. Tradição, esporte e cultura
              nordestina em uma experiência premium.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { label: "Instagram", href: "https://www.instagram.com/harascanindezinho/" },
                { label: "Facebook", href: "#" },
                { label: "YouTube", href: "#" },
                { label: "WhatsApp", href: "https://wa.me/5585997832737" }
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex px-4 h-10 items-center justify-center rounded-full border border-border text-xs font-semibold text-muted-foreground transition hover:border-primary hover:text-primary"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-primary">Links Rápidos</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a 
                    href={n.href} 
                    className="hover:text-foreground"
                    {...(n.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-primary">Contato</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Arena Canindezinho — Caucaia, Ceará</li>
              <li>WhatsApp: +55 (85) 99783-2737</li>
              <li>contato@harascanindezinho.com.br</li>
              <li className="text-foreground">Evento: 09 a 13 de Setembro de 2026</li>
            </ul>
            <a
              href="https://wa.me/5585997832737"
              className="mt-5 inline-flex rounded-full btn-gold px-5 py-3 text-[11px]"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            © {new Date().getFullYear()} Haras Canindezinho · Todos os direitos reservados
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Calendário Oficial · Edição 2026
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============ WHATSAPP BUTTON ============ */
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5585997832737"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] transition-transform hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)]"
      aria-label="Falar no WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-8 w-8 text-white"
      >
        <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.128.552 4.161 1.6 5.966L.041 23.96l6.104-1.603a11.986 11.986 0 005.886 1.542c6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm5.955 17.067c-.255.719-1.464 1.344-2.046 1.411-.531.061-1.22-.058-3.414-.969-2.651-1.101-4.321-3.805-4.453-3.982-.131-.176-1.064-1.417-1.064-2.702 0-1.284.664-1.92.898-2.176.234-.255.51-.318.68-.318.17 0 .34.001.488.007.156.007.362-.061.564.428.212.51.722 1.764.786 1.892.064.128.106.277.021.447-.085.17-.128.277-.255.447-.128.17-.267.365-.382.492-.128.128-.262.269-.117.525.145.255.644 1.07 1.383 1.725.952.844 1.75 1.11 2.006 1.238.255.128.404.106.553-.064.149-.17.638-.745.808-1.001.17-.255.34-.213.574-.128.234.085 1.489.702 1.745.83.255.128.425.192.488.298.064.106.064.618-.191 1.337z" />
      </svg>
    </a>
  );
}

/* ============ WELCOME OVERLAY ============ */
function WelcomeOverlay({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/95 backdrop-blur-xl">
      <div className="flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/60 bg-background/40 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
          <span className="font-display text-3xl font-bold text-gradient-gold">HC</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-widest text-foreground text-center px-4">
          Bem-vindo ao <br />
          <span className="text-gradient-gold">Haras Canindezinho</span>
        </h2>
        <button
          onClick={onEnter}
          className="mt-4 rounded-full btn-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,55,0.4)] transition hover:scale-105"
        >
          Viver a Experiência
        </button>
      </div>
    </div>
  );
}

/* ============ PAGE ============ */
function Index() {
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (!hasEntered) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [hasEntered]);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {!hasEntered && (
        <WelcomeOverlay onEnter={() => {
          setHasEntered(true);
          
          // Dispara o áudio imediatamente no momento do clique (síncrono)
          const iframe = document.querySelector('iframe');
          if (iframe && iframe.contentWindow) {
              iframe.contentWindow.postMessage({ action: 'play' }, '*');
              iframe.contentWindow.postMessage({ action: 'setMuted', value: false }, '*');
              iframe.contentWindow.postMessage({ action: 'setVolume', value: 1 }, '*');
          }

          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 100);
        }} />
      )}
      <Header />
      <main>
        <Hero />
        <VideoPromocional hasEntered={hasEntered} />
        <Ingressos />
        <Patrocinadores />
        <Depoimentos />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
