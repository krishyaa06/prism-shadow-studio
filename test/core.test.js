const test = require("node:test");
const assert = require("node:assert/strict");
const C = require("../js/core.js");

test("rgba conversion", () => {
  assert.equal(C.rgba("#00d2ff", 0.5), "rgba(0, 210, 255, 0.5)");
  assert.equal(C.rgba("#fff", 1), "rgba(255, 255, 255, 1)");
});
test("box-shadow joins layers and skips disabled", () => {
  const s = C.boxShadow([{ x: 0, y: 4, blur: 8, spread: 0, color: "#000", alpha: 0.2 }, { x: 1, y: 1, blur: 0, spread: 0, color: "#fff", alpha: 1, inset: true }, { x: 9, y: 9, blur: 9, spread: 9, color: "#000", alpha: 1, on: false }]);
  assert.equal(s, "0px 4px 8px 0px rgba(0, 0, 0, 0.2),\n    inset 1px 1px 0px 0px rgba(255, 255, 255, 1)");
  assert.equal(C.boxShadow([]), "none");
});
test("smooth shadows grow per layer", () => {
  const l = C.smooth({ layers: 4, distance: 32, blur: 40 });
  assert.equal(l.length, 4);
  assert.ok(l[3].y > l[0].y && l[3].blur > l[0].blur);
  assert.equal(l[3].y, 32);
});
test("glass css", () => {
  const css = C.toCSS(C.glass({ blur: 10 }), ".g");
  assert.match(css, /backdrop-filter: blur\(10px\)/);
  assert.match(css, /^\.g \{/);
});
test("tailwind arbitrary shadow", () => {
  assert.equal(C.tailwind([{ x: 0, y: 2, blur: 4, spread: 0, color: "#000", alpha: 0.1 }]), "shadow-[0px_2px_4px_0px_rgba(0,_0,_0,_0.1)]");
});
