import React from "react";

// A reusable slide wrapper that centers its children.
const Slide = ({ children }: { children: React.ReactNode }) => (
  <section className="h-dvh grid place-items-center p-10 text-center">
    <div className="max-w-4xl mx-auto space-y-4">{children}</div>
  </section>
);

// Cover slide introducing the deck.
export const Cover = () => (
  <Slide>
    <h1 className="text-5xl font-bold tracking-tight">UNLTD</h1>
    <p className="text-xl opacity-80">Reproducible Amplification for Enterprise</p>
    <p className="text-sm opacity-60">Born from the AEGNTIC ecosystem • Computational Amplification (June 2025)</p>
  </Slide>
);

// Problem slide highlighting limitations of traditional workflows.
export const Problem = () => (
  <Slide>
    <h2 className="text-3xl font-semibold">Linear teams in an exponential world</h2>
    <ul className="text-left list-disc pl-6 space-y-2 opacity-90">
      <li>Headcount ≠ output; context switches + handoffs cap velocity</li>
      <li>Sequential cycles block exploration — innovation stalls</li>
    </ul>
  </Slide>
);

// Market shift slide that reframes the AI coordination challenge.
export const MarketShift = () => (
  <Slide>
    <h2 className="text-3xl font-semibold">From prompting → orchestration</h2>
    <ul className="text-left list-disc pl-6 space-y-2 opacity-90">
      <li>Coordinate humans + multiple models/tools, not just “generate code”</li>
      <li>Governance, auditability, predictable throughput</li>
    </ul>
  </Slide>
);

// Solution slide introducing the amplification framework.
export const Solution = () => (
  <Slide>
    <h2 className="text-3xl font-semibold">UNLTD: The Enterprise Amplification Framework</h2>
    <ul className="text-left list-disc pl-6 space-y-2 opacity-90">
      <li>Amplification Stack (Levels 1→5)</li>
      <li>Aegntic MCP orchestration • AegntiX visual multi-agent flows</li>
    </ul>
  </Slide>
);

// Slide describing how the system works across different levels.
export const HowItWorks = () => (
  <Slide>
    <h2 className="text-3xl font-semibold">From chaos to reproducibility</h2>
    <ol className="text-left list-decimal pl-6 space-y-2 opacity-90">
      <li>Isolate parallel branches (L3)</li>
      <li>Automated evaluation selects best (L4)</li>
      <li>Infinite learning loops w/ guardrails (L5)</li>
    </ol>
    <p className="text-sm opacity-70">Safety controller • multi-criteria QA • human review gates</p>
  </Slide>
);

// Proof slide summarizing research and signals.
export const Proof = () => (
  <Slide>
    <h2 className="text-3xl font-semibold">Proof & Signals</h2>
    <ul className="text-left list-disc pl-6 space-y-2 opacity-90">
      <li>Documented patterns: parallelization, automated evaluation, infinite learning</li>
      <li>Internal experiments: material productivity/ROI lifts</li>
    </ul>
  </Slide>
);

// Slide enumerating key platform components.
export const Components = () => (
  <Slide>
    <h2 className="text-3xl font-semibold">Platform components</h2>
    <div className="grid md:grid-cols-2 gap-4 text-left">
      <ul className="list-disc pl-6 space-y-2 opacity-90">
        <li>Multi-CLD-Code (parallel code terminals)</li>
        <li>Aegntic-MCP (safe action surfaces)</li>
        <li>Project4Site (auto docs/site/video)</li>
      </ul>
      <ul className="list-disc pl-6 space-y-2 opacity-90">
        <li>DailyDoco Pro (zero-edit documentation)</li>
        <li>Aegnt-27 (Human Peak authenticity)</li>
        <li>Neural Orchestration (routing/consensus)</li>
      </ul>
    </div>
  </Slide>
);

// Slide articulating why this moment is ripe for the product.
export const WhyNow = () => (
  <Slide>
    <h2 className="text-3xl font-semibold">Why now</h2>
    <ul className="text-left list-disc pl-6 space-y-2 opacity-90">
      <li>Tools exist; patterns are proven</li>
      <li>Shift to governed, reproducible throughput</li>
    </ul>
  </Slide>
);

// Business model slide summarizing pricing structure.
export const BusinessModel = () => (
  <Slide>
    <h2 className="text-3xl font-semibold">Business model</h2>
    <ul className="text-left list-disc pl-6 space-y-2 opacity-90">
      <li>Platform license: per‑org base + per‑workspace seats</li>
      <li>Add‑ons: MCP orchestration, eval compute packs, private models</li>
      <li>Services: onboarding, workflow design, governance integration</li>
    </ul>
    <p className="text-sm opacity-70">GTM (notes): Land → Prove → Expand</p>
  </Slide>
);
