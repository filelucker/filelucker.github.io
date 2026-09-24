# Md Moniruzzaman — Senior Mobile Engineer & Systems Architect Portfolio

[![Astro](https://img.shields.io/badge/Astro-v5.3.0-orange.svg)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0.9-blue.svg)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A high-performance, developer-first portfolio website and system architecture playbook for **Md Moniruzzaman** (Senior Mobile Engineer & Systems Architect / Fintech Specialist with 11+ years of production engineering experience).

Architected using **Astro v5**, **Tailwind CSS v4**, **TypeScript**, and **Vite 6**. Displays high-concurrency fintech engine runtime diagnostics, clean architecture enclave diagrams, flagship production project case studies, open-source packages, and verifiable Architectural Decision Records (ADRs).

---

## ⚡ Key Highlights & Features

- **Interactive Runtime Diagnostics Viewport**:
  - Live **Fintech Engine Simulator** (MYCash 2.0 & DGePay Runtime) with live metric timers: Handshake Cryptography (`43ms`), Local WAL Queue (`12ms`), Data Pack Compression (`21ms`), and Total Execution Time (`76ms`).
  - Interactive **"Simulate Offline Transaction Execution"** button with real-time state progress & terminal execution logs.

- **Single-Page Tabbed Architecture & Hash Navigation**:
  - `01. Overview`: Executive Hero section, impact metrics grid, Fintech Engine Viewport, Flagship summary cards, Clean Architecture Enclave breakdown.
  - `02. Flagship Projects`: Deep-dive production case studies (MYCash DFS 1M+ active users, DGePay 10K+ POS fleet, CPTU National Procurement 100K+ bidders, UNICEF Field Tech 25K+ workers) and Hardware HAL utilities.
  - `03. Skills & Timeline`: Technical Skills Matrix (Android NDK, Flutter/Dart, Swift/Secure Enclave, Rust), Pub.dev Open Source packages (`dge_radio_button`, `flutter_biometric_vault`), work timeline, and strategic collaboration CTA.
  - `04. System Deep Dives`: Zero-trust offline relay topologies, Swift/iOS Secure Enclave code viewports, empirical production benchmarks, and Architectural Decision Records (ADRs).

- **Theme Engine & Sleek Design Tokens**:
  - Cyber-tech Dark Mode ("Terminal Core" dark obsidian with glowing emerald/cyan highlights) and Light Mode ("Senior Systems Architect" cool slate).
  - Custom design system tokens, cyber grid background overlays, glassmorphism panels, and smooth scroll behaviors.

- **Symmetrical UI & Interactive Components**:
  - Matching equal-width primary action buttons (`DOWNLOAD RESUME (PDF)` with left-aligned download tray icon).
  - Natural portrait avatar frame without boxy letterboxing crop (`public/profile.jpg`).
  - Full-featured modal for PDF resume previewing and direct download.

---

## 🛠️ Technology Stack

| Component | Technology / Library |
| :--- | :--- |
| **Framework** | [Astro v5](https://astro.build/) (Static Site Generation - SSG) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite` |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict Mode) |
| **Build Tool** | [Vite 6](https://vitejs.dev/) |
| **Typography** | JetBrains Mono & Plus Jakarta Sans |
| **Icons** | Custom inline SVG icons |

---

## 📂 Project Architecture & Directory Structure

```
portfolio_website/
├── astro.config.mjs              # Astro v5 config with @tailwindcss/vite plugin
├── package.json                  # Dependencies (Astro v5, Tailwind CSS v4)
├── tsconfig.json                 # Strict TypeScript configuration
├── README.md                     # Project documentation
├── public/
│   ├── profile.jpg               # Professional portrait photo
│   └── favicon.svg               # Site favicon
└── src/
    ├── data/
    │   └── portfolioData.ts      # Structured data layer (Metrics, Projects, Skills, ADRs)
    ├── styles/
    │   └── global.css            # Tailwind CSS v4 design tokens, matrix grids & animations
    ├── components/
    │   ├── Header.astro          # Sticky top bar, status pills, tab switcher, theme toggle
    │   ├── HeroOverview.astro    # Hero headline, profile photo card, 4-metric grid
    │   ├── FintechViewport.astro # Mobile terminal mockup & live execution simulator
    │   ├── FlagshipProjectsOverview.astro # 4-Card Flagship overview grid
    │   ├── CleanArchitectureDiagram.astro # Production Clean Architecture & enclave layers
    │   ├── FlagshipDeepDives.astro        # Case studies, architecture highlights & HAL SDKs
    │   ├── SkillsAndTimeline.astro        # Skills matrix, pub.dev packages, work history
    │   ├── SystemDeepDives.astro          # Topology flows, Swift code viewer, ADRs
    │   ├── ResumeModal.astro              # Resume preview & download modal
    │   └── Footer.astro                  # Terminal specs footer with system uptime
    └── pages/
        └── index.astro           # Main page assembling all viewports
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v20.0.0` or higher (Tested on Node `v24.18.0`)
- **NPM**: `v10.0.0` or higher

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd portfolio_website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server with live reload:
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### Production Build

Build the optimized static bundle for deployment:
```bash
npm run build
```

Preview the static production build locally:
```bash
npm run preview
```

---

## 📊 Performance & Optimization Metrics

- **Static Generation**: 100% static HTML routes built in `<1.5s`.
- **Zero Heavy JS Bundles**: Pure Astro zero-JS baseline with light interactive scripts.
- **CSS Footprint**: Tailored Tailwind CSS v4 utilities with minimal bundle size.
- **Accessibility & SEO**: Semantic HTML5 elements, descriptive ARIA attributes, structured meta titles, OpenGraph data, and dynamic theme switching without layout flicker.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---
*Created for **Md Moniruzzaman** — Senior Mobile Engineer & Systems Architect.*
