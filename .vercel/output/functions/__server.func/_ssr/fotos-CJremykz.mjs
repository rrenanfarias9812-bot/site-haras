import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
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
const GAL_TABS = ["Último Evento", "Campeões", "Arena", "Público", "Patrocinadores"];
function FotosPage() {
  const [tab, setTab] = reactExports.useState(GAL_TABS[0]);
  const allImgs = Array.from({
    length: 10
  }, (_, i) => `/fotos/foto-${i + 1}.jpg`);
  const imgs = tab === "Último Evento" || tab === "Campeões" ? allImgs : [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground pt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed top-0 z-50 w-full glass-panel py-4 px-5 lg:px-10 flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 transition hover:opacity-80", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full border border-primary/60 bg-background/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-bold text-gradient-gold", children: "HC" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm font-bold tracking-wide text-foreground", children: "VOLTAR AO INÍCIO" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 sm:py-32 px-5 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "section-label", children: "Galeria Oficial" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1] text-foreground", children: [
          "MOMENTOS DE ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-gold", children: "EMOÇÃO E TRADIÇÃO" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3 mb-10", children: GAL_TABS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab(t), className: `rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition ${tab === t ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:border-primary/60 hover:text-foreground"}`, children: t }, t)) }),
      imgs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-20 text-center text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "As fotos desta categoria serão adicionadas em breve." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid auto-rows-[250px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[300px]", children: imgs.map((src, i) => {
        const big = i === 0 || i === 4 || i === 7;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `group relative overflow-hidden rounded-3xl border border-border ${big ? "col-span-2 row-span-2" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: `Galeria ${tab} ${i + 1}`, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-5 right-5 flex items-end justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-foreground/90", children: tab }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs uppercase tracking-[0.25em] text-primary", children: [
              "0",
              i + 1
            ] })
          ] })
        ] }, i);
      }) })
    ] }) })
  ] });
}
export {
  FotosPage as component
};
