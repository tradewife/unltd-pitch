// Fallback page for the UNLTD deck that works without the presentation router.
// This component cycles through the slides defined in `src/presentation/slides/UNLTD.tsx`.

"use client";

import React, { useState } from "react";
import {
  Cover,
  Problem,
  MarketShift,
  Solution,
  HowItWorks,
  Proof,
  Components,
  WhyNow,
  BusinessModel,
} from "../../src/presentation/slides/UNLTD";

const slideComponents = [
  Cover,
  Problem,
  MarketShift,
  Solution,
  HowItWorks,
  Proof,
  Components,
  WhyNow,
  BusinessModel,
];

export default function UnltdPage() {
  const [index, setIndex] = useState(0);
  const SlideComponent = slideComponents[index];

  const go = (delta: number) => {
    setIndex((prev) => (prev + delta + slideComponents.length) % slideComponents.length);
  };

  return (
    <main className="relative h-dvh overflow-hidden">
      <SlideComponent />
      <div className="absolute bottom-4 left-0 right-0 flex justify-between px-8 text-sm">
        <button onClick={() => go(-1)} className="px-4 py-2 bg-muted rounded">
          ← Prev
        </button>
        <button onClick={() => go(1)} className="px-4 py-2 bg-muted rounded">
          Next →
        </button>
      </div>
    </main>
  );
}
