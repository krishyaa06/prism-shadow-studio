/* Prism Shadow Studio · core logic (browser + Node) */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.Core = api;
})(typeof self !== "undefined" ? self : this, function () {
  function rgba(hex, alpha) {
    let h = hex.replace("#", ""); if (h.length === 3) h = [...h].map((c) => c + c).join("");
    const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
    return `rgba(${r}, ${g}, ${b}, ${+(+alpha).toFixed(2)})`;
  }
  const layer = (l) => `${l.inset ? "inset " : ""}${l.x}px ${l.y}px ${l.blur}px ${l.spread}px ${rgba(l.color, l.alpha)}`;
  const boxShadow = (layers) => layers.filter((l) => l.on !== false).map(layer).join(",\n    ") || "none";
  /** Smooth, layered shadow (inspired by the "layered shadows" technique). */
  function smooth({ layers = 5, distance = 24, blur = 40, alpha = 0.22, color = "#000000", angle = 90 }) {
    const rad = (angle * Math.PI) / 180;
    return Array.from({ length: layers }, (_, i) => {
      const t = Math.pow(2, i) / Math.pow(2, layers - 1);
      return { x: +(Math.cos(rad) * distance * t).toFixed(1) * 0 + Math.round(Math.cos(rad) * distance * t * 10) / 10, y: Math.round(Math.sin(rad) * distance * t * 10) / 10, blur: Math.round(blur * t * 10) / 10, spread: 0, color, alpha: +(alpha / Math.sqrt(layers) * (1.2 - t * 0.4)).toFixed(3), inset: false };
    });
  }
  function glass({ blur = 16, opacity = 0.12, saturation = 160, border = 0.18, tint = "#ffffff", radius = 20 }) {
    return { background: rgba(tint, opacity), "backdrop-filter": `blur(${blur}px) saturate(${saturation}%)`, "-webkit-backdrop-filter": `blur(${blur}px) saturate(${saturation}%)`, border: `1px solid ${rgba(tint, border)}`, "border-radius": `${radius}px` };
  }
  const toCSS = (obj, sel = ".card") => `${sel} {\n${Object.entries(obj).map(([k, v]) => `  ${k}: ${v};`).join("\n")}\n}`;
  function tailwind(layers) { return `shadow-[${layers.filter((l) => l.on !== false).map(layer).join(",").replace(/\s+/g, "_")}]`; }
  const PRESETS = {
    "Soft": [{ x: 0, y: 10, blur: 30, spread: -6, color: "#000000", alpha: 0.35 }],
    "Neon": [{ x: 0, y: 0, blur: 24, spread: 0, color: "#00d2ff", alpha: 0.6 }, { x: 0, y: 0, blur: 80, spread: 8, color: "#6c63ff", alpha: 0.35 }],
    "Lifted": [{ x: 0, y: 1, blur: 2, spread: 0, color: "#000000", alpha: 0.2 }, { x: 0, y: 12, blur: 24, spread: -4, color: "#000000", alpha: 0.35 }, { x: 0, y: 40, blur: 60, spread: -12, color: "#000000", alpha: 0.4 }],
    "Inner": [{ x: 0, y: 2, blur: 10, spread: 0, color: "#000000", alpha: 0.55, inset: true }, { x: 0, y: 1, blur: 0, spread: 0, color: "#ffffff", alpha: 0.08, inset: true }],
    "Brutal": [{ x: 8, y: 8, blur: 0, spread: 0, color: "#f5c561", alpha: 1 }],
    "Sunset glow": [{ x: -12, y: 0, blur: 50, spread: 0, color: "#ff6b8a", alpha: 0.5 }, { x: 12, y: 0, blur: 50, spread: 0, color: "#f5c561", alpha: 0.45 }],
  };
  return { rgba, layer, boxShadow, smooth, glass, toCSS, tailwind, PRESETS };
});
