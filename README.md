# ✨ react-spotlight-card

> A React component that adds a **mouse-tracking spotlight glow effect** to cards — the kind you see on [Linear](https://linear.app) and [Vercel](https://vercel.com).

![npm version](https://img.shields.io/npm/v/@rehamaasar/react-spotlight-card)
![license](https://img.shields.io/npm/l/@rehamaasar/react-spotlight-card)
![bundle size](https://img.shields.io/bundlephobia/minzip/@rehamaasar/react-spotlight-card)

---

## 🎯 What it does

When a user hovers over the card, a soft radial glow follows their cursor in real time — creating a depth and interactivity effect with **zero external dependencies**, built entirely with React hooks and TypeScript.

🧪 🧪 **[Live Demo →](https://react-spotlight-card-ten.vercel.app)**

---

## 📦 Installation

```bash
npm install @rehamaasar/react-spotlight-card
# or
yarn add @rehamaasar/react-spotlight-card
```

---

## 🔧 Usage

```tsx
"use client"; // if using Next.js App Router

import { SpotlightCard } from "@rehamaasar/react-spotlight-card";

export default function App() {
  return (
    <SpotlightCard
      spotlightColor="rgba(120, 80, 255, 0.25)"
      spotlightSize={300}
      style={{ padding: "32px", width: "300px" }}
    >
      <h2>Hello World</h2>
      <p>Hover over me to see the magic ✨</p>
    </SpotlightCard>
  );
}
```

---

## 🗂️ SpotlightGroup

Share one spotlight across multiple cards:

```tsx
import { SpotlightCard, SpotlightGroup } from "@rehamaasar/react-spotlight-card";

<SpotlightGroup style={{ display: "flex", gap: "20px" }}>
  <SpotlightCard spotlightColor="rgba(120, 80, 255, 0.2)">
    <p>Card One</p>
  </SpotlightCard>
  <SpotlightCard spotlightColor="rgba(120, 80, 255, 0.2)">
    <p>Card Two</p>
  </SpotlightCard>
</SpotlightGroup>
```

---

## ⚙️ Props — SpotlightCard

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Content inside the card |
| `spotlightColor` | `string` | `rgba(255,255,255,0.15)` | Spotlight glow color |
| `spotlightSize` | `number` | `300` | Spotlight radius in px |
| `spotlightBorder` | `boolean` | `false` | Enable glowing border effect |
| `borderColor` | `string` | `rgba(255,255,255,0.4)` | Border glow color |
| `disabled` | `boolean` | `false` | Disable the effect |
| `className` | `string` | `""` | Custom CSS class |
| `style` | `CSSProperties` | `{}` | Inline styles for the card |

---

## 🎨 Examples

### Glowing border
```tsx
<SpotlightCard
  spotlightBorder
  borderColor="rgba(120, 80, 255, 0.8)"
  spotlightColor="rgba(120, 80, 255, 0.1)"
>
  <p>Glowing border card</p>
</SpotlightCard>
```

### Disabled effect
```tsx
<SpotlightCard disabled>
  <p>No spotlight here</p>
</SpotlightCard>
```

---

## 🛠 Local Development

```bash
git clone https://github.com/Rehamaasar/react-spotlight-card.git
cd react-spotlight-card

npm install
npm run build

cd example
npm install
npm run dev
```

---

## 🧩 Features

- ⚡ **Zero dependencies** — only React as a peer dependency
- 🎯 **Mouse-tracking** — smooth spotlight follows cursor in real time
- 🎨 **Fully customizable** — color, size, border, style, className
- 🔲 **SpotlightGroup** — shared spotlight across multiple cards
- 💙 **TypeScript** — fully typed with exported interfaces
- 🧱 **SSR safe** — works with Next.js App Router
- 📦 **Tiny bundle** — just hooks and components

---

## 📝 License

MIT © [Rehamaasar](https://github.com/Rehamaasar)