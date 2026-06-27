"use client";

import { useState } from "react";
import { SpotlightCard, SpotlightGroup } from "@rehamaasar/react-spotlight-card";

export default function Home() {
  const [color, setColor] = useState("rgba(120, 80, 255, 0.25)");
  const [size, setSize] = useState(300);

  return (
    <main style={{
      minHeight: "100vh",
      background: "#0f0f1a",
      fontFamily: "system-ui, sans-serif",
      color: "white",
      padding: "60px 20px",
    }}>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <h1 style={{ fontSize: "3rem", margin: "0 0 12px", letterSpacing: "-1px" }}>
          ✨ react-spotlight-card
        </h1>
        <p style={{ color: "#888", fontSize: "1.1rem", margin: "0 0 24px" }}>
          Mouse-tracking spotlight glow for React & Next.js
        </p>
        <code style={{
          background: "#1a1a2e",
          border: "1px solid rgba(255,255,255,0.1)",
          padding: "10px 20px",
          borderRadius: "8px",
          fontSize: "0.9rem",
          color: "#a78bfa",
        }}>
          npm install @rehamaasar/react-spotlight-card
        </code>
      </div>

      {/* Section 1 - Basic */}
      <section style={{ maxWidth: "900px", margin: "0 auto 80px" }}>
        <h2 style={{ color: "#666", fontSize: "0.85rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "24px" }}>
          Basic Usage
        </h2>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <SpotlightCard spotlightColor="rgba(120, 80, 255, 0.25)" style={{ padding: "32px", flex: 1, minWidth: "200px" }}>
            <h3 style={{ margin: "0 0 10px" }}>🚀 Fast</h3>
            <p style={{ color: "#aaa", margin: 0, lineHeight: 1.6 }}>Zero dependencies. Pure React hooks and TypeScript.</p>
          </SpotlightCard>
          <SpotlightCard spotlightColor="rgba(0, 200, 255, 0.25)" style={{ padding: "32px", flex: 1, minWidth: "200px" }}>
            <h3 style={{ margin: "0 0 10px" }}>🎨 Customizable</h3>
            <p style={{ color: "#aaa", margin: 0, lineHeight: 1.6 }}>Control color, size, border and styles via props.</p>
          </SpotlightCard>
          <SpotlightCard spotlightColor="rgba(255, 100, 150, 0.25)" style={{ padding: "32px", flex: 1, minWidth: "200px" }}>
            <h3 style={{ margin: "0 0 10px" }}>🧩 Easy</h3>
            <p style={{ color: "#aaa", margin: 0, lineHeight: 1.6 }}>Drop into any React or Next.js project instantly.</p>
          </SpotlightCard>
        </div>
      </section>

      {/* Section 2 - Spotlight Border */}
      <section style={{ maxWidth: "900px", margin: "0 auto 80px" }}>
        <h2 style={{ color: "#666", fontSize: "0.85rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "24px" }}>
          Spotlight Border
        </h2>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <SpotlightCard
            spotlightBorder
            borderColor="rgba(120, 80, 255, 0.8)"
            spotlightColor="rgba(120, 80, 255, 0.1)"
            style={{ padding: "32px", flex: 1, minWidth: "200px" }}
          >
            <h3 style={{ margin: "0 0 10px" }}>Purple Border</h3>
            <p style={{ color: "#aaa", margin: 0, lineHeight: 1.6 }}>The border glows where your cursor is.</p>
          </SpotlightCard>
          <SpotlightCard
            spotlightBorder
            borderColor="rgba(0, 200, 255, 0.8)"
            spotlightColor="rgba(0, 200, 255, 0.1)"
            style={{ padding: "32px", flex: 1, minWidth: "200px" }}
          >
            <h3 style={{ margin: "0 0 10px" }}>Cyan Border</h3>
            <p style={{ color: "#aaa", margin: 0, lineHeight: 1.6 }}>Combine border glow with fill glow.</p>
          </SpotlightCard>
          <SpotlightCard
            spotlightBorder
            borderColor="rgba(255, 200, 0, 0.8)"
            spotlightColor="rgba(255, 200, 0, 0.1)"
            style={{ padding: "32px", flex: 1, minWidth: "200px" }}
          >
            <h3 style={{ margin: "0 0 10px" }}>Gold Border</h3>
            <p style={{ color: "#aaa", margin: 0, lineHeight: 1.6 }}>Any color works — fully customizable.</p>
          </SpotlightCard>
        </div>
      </section>

      {/* Section 3 - SpotlightGroup */}
      <section style={{ maxWidth: "900px", margin: "0 auto 80px" }}>
        <h2 style={{ color: "#666", fontSize: "0.85rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>
          Spotlight Group
        </h2>
        <p style={{ color: "#555", marginBottom: "24px", fontSize: "0.95rem" }}>
          One shared spotlight across all cards — move your cursor slowly between them.
        </p>
        <SpotlightGroup style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <SpotlightCard spotlightColor="rgba(120, 80, 255, 0.2)" style={{ padding: "32px", flex: 1, minWidth: "200px" }}>
            <h3 style={{ margin: "0 0 10px" }}>Card One</h3>
            <p style={{ color: "#aaa", margin: 0, lineHeight: 1.6 }}>All cards share the same spotlight source.</p>
          </SpotlightCard>
          <SpotlightCard spotlightColor="rgba(120, 80, 255, 0.2)" style={{ padding: "32px", flex: 1, minWidth: "200px" }}>
            <h3 style={{ margin: "0 0 10px" }}>Card Two</h3>
            <p style={{ color: "#aaa", margin: 0, lineHeight: 1.6 }}>The glow follows your cursor across the group.</p>
          </SpotlightCard>
          <SpotlightCard spotlightColor="rgba(120, 80, 255, 0.2)" style={{ padding: "32px", flex: 1, minWidth: "200px" }}>
            <h3 style={{ margin: "0 0 10px" }}>Card Three</h3>
            <p style={{ color: "#aaa", margin: 0, lineHeight: 1.6 }}>Just like Linears homepage grid effect.</p>
          </SpotlightCard>
        </SpotlightGroup>
      </section>

      {/* Section 4 - Live Playground */}
      <section style={{ maxWidth: "900px", margin: "0 auto 80px" }}>
        <h2 style={{ color: "#666", fontSize: "0.85rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "24px" }}>
          Live Playground
        </h2>
        <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", minWidth: "200px" }}>
            <label style={{ color: "#aaa", fontSize: "0.9rem" }}>
              Spotlight Color
              <input
                type="color"
                defaultValue="#7850ff"
                onChange={(e) => {
                  const hex = e.target.value;
                  const r = parseInt(hex.slice(1, 3), 16);
                  const g = parseInt(hex.slice(3, 5), 16);
                  const b = parseInt(hex.slice(5, 7), 16);
                  setColor("rgba(" + r + ", " + g + ", " + b + ", 0.3)");
                }}
                style={{ display: "block", marginTop: "8px", width: "100%", height: "40px", borderRadius: "8px", border: "none", cursor: "pointer" }}
              />
            </label>
            <label style={{ color: "#aaa", fontSize: "0.9rem" }}>
              Spotlight Size: {size}px
              <input
                type="range"
                min={100}
                max={600}
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                style={{ display: "block", marginTop: "8px", width: "100%" }}
              />
            </label>
          </div>
          <SpotlightCard
            spotlightColor={color}
            spotlightSize={size}
            style={{ padding: "40px", flex: 1, minWidth: "200px" }}
          >
            <h3 style={{ margin: "0 0 10px" }}>🎮 Interactive</h3>
            <p style={{ color: "#aaa", margin: 0, lineHeight: 1.6 }}>
              Use the controls to customize the spotlight in real time.
            </p>
          </SpotlightCard>
        </div>
      </section>

      {/* Footer */}
      <div style={{ textAlign: "center", color: "#333", fontSize: "0.85rem" }}>
        Made by Rahim Ansar · MIT License
      </div>

    </main>
  );
}