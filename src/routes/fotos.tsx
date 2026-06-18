import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroAsset from "@/assets/vaquejada-hero.png.asset.json";
import arenaImg from "@/assets/arena.jpg";
import vaqueiroImg from "@/assets/vaqueiro.jpg";
import actionImg from "@/assets/action.jpg";
import crowdImg from "@/assets/crowd.jpg";

export const Route = createFileRoute("/fotos")({
  component: FotosPage,
});

const GAL_TABS = ["Último Evento", "Campeões", "Arena", "Público", "Patrocinadores"];

function FotosPage() {
  const [tab, setTab] = useState(GAL_TABS[0]);
  
  // Carrega as 10 fotos reais da pasta public/fotos/
  const allImgs = Array.from({ length: 10 }, (_, i) => `/fotos/foto-${i + 1}.jpg`);
  
  // Exibe as fotos apenas nas abas 'Último Evento' e 'Campeões', conforme solicitado
  const imgs = (tab === "Último Evento" || tab === "Campeões") ? allImgs : [];

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <div className="fixed top-0 z-50 w-full glass-panel py-4 px-5 lg:px-10 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 transition hover:opacity-80">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/60 bg-background/40">
            <span className="font-display text-lg font-bold text-gradient-gold">HC</span>
          </div>
          <span className="font-display text-sm font-bold tracking-wide text-foreground">
            VOLTAR AO INÍCIO
          </span>
        </Link>
      </div>

      <section className="py-24 sm:py-32 px-5 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <span className="section-label">Galeria Oficial</span>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1] text-foreground">
              MOMENTOS DE <span className="text-gradient-gold">EMOÇÃO E TRADIÇÃO</span>
            </h1>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-10">
            {GAL_TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                  tab === t
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:border-primary/60 hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {imgs.length === 0 ? (
            <div className="py-20 text-center text-muted-foreground">
              <p>As fotos desta categoria serão adicionadas em breve.</p>
            </div>
          ) : (
            <div className="grid auto-rows-[250px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[300px]">
              {imgs.map((src, i) => {
                // Deixa algumas fotos maiores no grid (ex: foto 1, 5 e 8)
                const big = i === 0 || i === 4 || i === 7;
                return (
                  <div
                    key={i}
                    className={`group relative overflow-hidden rounded-3xl border border-border ${
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
                    <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                      <span className="text-xs uppercase tracking-[0.25em] text-foreground/90">
                        {tab}
                      </span>
                      <span className="text-xs uppercase tracking-[0.25em] text-primary">
                        0{i + 1}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
