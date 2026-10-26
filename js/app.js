(() => {
  const { $, $$, copy, store, tabs } = Prism;
  const st = store.get("shadow:state", null) || { mode: "shadow", layers: structuredClone(Core.PRESETS.Lifted), smooth: { layers: 5, distance: 28, blur: 48, alpha: 0.5, color: "#000000", angle: 90 }, glass: { blur: 16, opacity: 0.12, saturation: 160, border: 0.2, tint: "#ffffff", radius: 20 }, bg: "#1a2140" };
  let out = "css";
  $$("#mode button").forEach((b) => b.classList.toggle("on", b.dataset.v === st.mode));
  $("#bg").value = st.bg;
  $("#presets").innerHTML = Object.keys(Core.PRESETS).map((n) => `<button class="pill acc" data-n="${n}">${n}</button>`).join("");
  $("#presets").onclick = (e) => { const b = e.target.closest("button"); if (!b) return; st.mode = "shadow"; st.layers = structuredClone(Core.PRESETS[b.dataset.n]); $$("#mode button").forEach((x) => x.classList.toggle("on", x.dataset.v === "shadow")); panel(); render(); };
  const slider = (key, label, min, max, step, val, unit = "") => `<label class="sl">${label}<input type="range" data-k="${key}" min="${min}" max="${max}" step="${step}" value="${val}" /><output>${val}${unit}</output></label>`;
  function panel() {
    const p = $("#panel");
    if (st.mode === "shadow") {
      p.innerHTML = `<div class="card-title"><h2>Layers</h2><button class="btn small" id="addL">+ Layer</button></div>` + st.layers.map((l, i) => `<div class="lay" data-i="${i}">
        <div class="lay-head">LAYER ${i + 1}<input type="color" data-k="color" value="${l.color}" /><label class="check"><input type="checkbox" data-k="inset" ${l.inset ? "checked" : ""}/> inset</label><button class="x" data-del="${i}">✕</button></div>
        ${slider("x", "X", -60, 60, 1, l.x, "px")}${slider("y", "Y", -60, 80, 1, l.y, "px")}${slider("blur", "Blur", 0, 120, 1, l.blur, "px")}${slider("spread", "Spread", -40, 40, 1, l.spread, "px")}${slider("alpha", "Opacity", 0, 1, 0.01, l.alpha)}</div>`).join("");
    } else if (st.mode === "smooth") {
      const s = st.smooth;
      p.innerHTML = `<div class="card-title"><h2>Smooth shadow</h2><input type="color" data-k="color" value="${s.color}" /></div><div class="lay">${slider("layers", "Layers", 2, 8, 1, s.layers)}${slider("distance", "Distance", 0, 80, 1, s.distance, "px")}${slider("blur", "Blur", 0, 160, 1, s.blur, "px")}${slider("alpha", "Strength", 0.05, 1, 0.01, s.alpha)}${slider("angle", "Angle", 0, 360, 1, s.angle, "°")}</div><p class="muted small">Stacks several shadows with doubling offsets for a natural, soft falloff.</p>`;
    } else {
      const g = st.glass;
      p.innerHTML = `<div class="card-title"><h2>Glass</h2><input type="color" data-k="tint" value="${g.tint}" /></div><div class="lay">${slider("blur", "Blur", 0, 40, 1, g.blur, "px")}${slider("opacity", "Opacity", 0, 0.6, 0.01, g.opacity)}${slider("saturation", "Saturate", 100, 250, 5, g.saturation, "%")}${slider("border", "Border", 0, 0.6, 0.01, g.border)}${slider("radius", "Radius", 0, 40, 1, g.radius, "px")}</div>`;
    }
  }
  function css() {
    if (st.mode === "glass") return Core.toCSS(Core.glass(st.glass), ".glass");
    const layers = st.mode === "smooth" ? Core.smooth(st.smooth) : st.layers;
    return `.card {\n  box-shadow:\n    ${Core.boxShadow(layers)};\n}`;
  }
  function render() {
    store.set("shadow:state", st);
    const demo = $("#demo");
    $("#stage").style.background = st.bg;
    $("#stage").classList.toggle("glass-on", st.mode === "glass");
    demo.removeAttribute("style");
    if (st.mode === "glass") { const g = Core.glass(st.glass); demo.style.background = g.background; demo.style.backdropFilter = g["backdrop-filter"]; demo.style.webkitBackdropFilter = g["backdrop-filter"]; demo.style.border = g.border; demo.style.borderRadius = g["border-radius"]; }
    else demo.style.boxShadow = Core.boxShadow(st.mode === "smooth" ? Core.smooth(st.smooth) : st.layers).replace(/\n\s*/g, " ");
    const layers = st.mode === "smooth" ? Core.smooth(st.smooth) : st.layers;
    $("#code").textContent = out === "tw" && st.mode !== "glass" ? Core.tailwind(layers) : out === "tw" ? `bg-white/[${st.glass.opacity}] backdrop-blur-[${st.glass.blur}px] backdrop-saturate-[${st.glass.saturation / 100}] border border-white/[${st.glass.border}] rounded-[${st.glass.radius}px]` : css();
  }
  $("#panel").addEventListener("input", (e) => {
    const k = e.target.dataset.k; if (!k) return;
    const v = e.target.type === "checkbox" ? e.target.checked : e.target.type === "color" ? e.target.value : +e.target.value;
    if (st.mode === "shadow") st.layers[+e.target.closest(".lay").dataset.i][k] = v; else st[st.mode][k] = v;
    const o = e.target.parentElement.querySelector("output"); if (o) o.textContent = v + (o.textContent.match(/[a-z%°]+$/)?.[0] || "");
    render();
  });
  $("#panel").addEventListener("click", (e) => {
    if (e.target.id === "addL") { st.layers.push({ x: 0, y: 8, blur: 24, spread: 0, color: "#000000", alpha: 0.3 }); panel(); render(); }
    if (e.target.dataset.del != null && st.layers.length > 1) { st.layers.splice(+e.target.dataset.del, 1); panel(); render(); }
  });
  tabs($("#mode"), (v) => { st.mode = v; panel(); render(); });
  tabs($("#out"), (v) => { out = v; render(); });
  $("#bg").oninput = (e) => { st.bg = e.target.value; render(); };
  $("#copy").onclick = () => copy($("#code").textContent);
  panel(); render();
})();
