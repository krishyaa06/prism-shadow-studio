<!-- ═════════════ HEADER ═════════════ -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:07060f,50:5EE7FF,100:D7A8FF&height=200&section=header&text=Prism%20Shadow%20Studio&fontSize=48&fontColor=ffffff&animation=fadeIn&fontAlignY=36&desc=Box%20shadow%20%C2%B7%20Smooth%20shadow%20%C2%B7%20Glassmorphism&descAlignY=58&descSize=16" width="100%" alt="Prism Shadow Studio" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=19&duration=2600&pause=800&color=5EE7FF&center=true&vCenter=true&width=680&lines=Layered+shadows+that+look+real;Glassmorphism+in+10+seconds;Neon%2C+Brutal%2C+Lifted+presets;Copy+CSS+or+Tailwind" alt="Typing SVG" />
</p>

<p align="center">
  <a href="https://github.com/krishyaa06/prism-shadow-studio/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/krishyaa06/prism-shadow-studio/ci.yml?branch=main&style=for-the-badge&label=CI&logo=githubactions&logoColor=white" alt="CI" /></a>
  <a href="https://krishyaa06.github.io/prism-shadow-studio/"><img src="https://img.shields.io/badge/Live_Demo-Open-5EE7FF?style=for-the-badge&logo=githubpages&logoColor=black" alt="Live demo" /></a>
  <img src="https://img.shields.io/badge/Vanilla-HTML%20%7C%20CSS%20%7C%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="Vanilla JS" />
  <img src="https://img.shields.io/badge/dependencies-0-5EE7FF?style=for-the-badge" alt="Zero dependencies" />
  <a href="LICENSE"><img src="https://img.shields.io/github/license/krishyaa06/prism-shadow-studio?style=for-the-badge&color=D7A8FF" alt="License" /></a>
</p>

<p align="center">
  <img src="assets/screenshots/desktop.png" width="90%" alt="Prism Shadow Studio screenshot" />
</p>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png" width="100%" alt="" />

## ⚡ Overview

**Prism Shadow Studio** is a visual playground for depth in UI. Stack multiple box-shadow layers with full control, generate smooth multi-layer shadows from a few sliders, or design frosted-glass cards with backdrop blur. The preview updates live and the code is ready to paste.

## ✨ Features

- **Multi-layer box-shadow** editor: X, Y, blur, spread, color, opacity, inset
- **Smooth shadow** generator with doubling layers for natural falloff
- **Glassmorphism** with blur, saturation, tint, border and radius
- **Presets**: Soft, Neon, Lifted, Inner, Brutal, Sunset glow
- **CSS and Tailwind** output, custom stage background
- State saved locally

## 📸 Screenshots

<table>
  <tr>
    <td width="68%"><img src="assets/screenshots/desktop.png" width="100%" alt="Prism Shadow Studio on desktop" /></td>
    <td width="32%"><img src="assets/screenshots/mobile.png" width="100%" alt="Prism Shadow Studio on mobile" /></td>
  </tr>
</table>

## 🚀 Quick Start

**Use it online:** [https://krishyaa06.github.io/prism-shadow-studio/](https://krishyaa06.github.io/prism-shadow-studio/)

**Run locally:**

```bash
git clone https://github.com/krishyaa06/prism-shadow-studio.git
cd prism-shadow-studio
# open index.html in your browser, or serve it:
npx serve .
```

## 🛠️ Usage

- **Box shadow**: add layers and tune each one; toggle inset for inner shadows.
- **Smooth shadow**: pick layers, distance, blur and strength.
- **Glassmorphism**: adjust blur and opacity over the colorful background.
- Switch **CSS / Tailwind** and hit **Copy**.

## 📁 Project Structure

```text
prism-shadow-studio/
├── assets/
│   ├── logo.png
│   └── logo.svg
├── css/
│   ├── app.css
│   └── prism.css
├── js/
│   ├── app.js   # editor UI
│   ├── core.js   # shadow + glass CSS generation — tested in Node
│   └── prism.js
├── test/
│   └── core.test.js
├── .gitignore
├── LICENSE
├── README.md
├── index.html
└── package.json
```

## 🧪 Tests

```bash
npm test
```

Tests use the built-in `node:test` runner, so there is nothing to install. CI runs them on Node 20 and 22.

## 🤝 Contributing

1. Fork the repo and create a branch: `git checkout -b feature/my-idea`
2. Make your change and add a test in `test/`
3. Run `npm test` and open a Pull Request

## 🔷 Part of Prism Protocol

Prism Shadow Studio is one of the open-source tools built by [Prism Protocol](https://dc.gg/prismprotocol), a tech community where young builders learn, ship and compete together.

## 👤 Author

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/krishyaa06"><img src="https://github.com/krishyaa06.png" width="90" style="border-radius:50%" alt="Soumya Bhandare" /><br><b>Soumya Bhandare</b></a><br>
      <sub>Founder @ Prism Protocol</sub>
    </td>
    <td>
      <a href="https://dc.gg/prismprotocol"><img src="https://img.shields.io/badge/Discord-Prism%20Protocol-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" /></a><br>
      <a href="https://instagram.com/prism_protocol_"><img src="https://img.shields.io/badge/Instagram-@prism__protocol__-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" /></a><br>
      <a href="https://x.com/krishyaa06"><img src="https://img.shields.io/badge/X-@krishyaa06-000000?style=for-the-badge&logo=x&logoColor=white" alt="X" /></a>
    </td>
  </tr>
</table>

## 📄 License

Released under the [MIT License](LICENSE).

<p align="center">
  <b>If you like this project, consider giving it a ⭐</b><br>
  <sub>"Build. Create. Compete." · Made with ⚡ by Prism Protocol</sub>
</p>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:D7A8FF,50:5EE7FF,100:07060f&height=110&section=footer" width="100%" alt="" />
