// Example router wiring for the UNLTD deck. Import your slides and define
// their order here. If your project already has a router.ts file, you can
// copy the contents of this example into it or merge as appropriate.

import { Cover, Problem, MarketShift, Solution, HowItWorks, Proof, Components, WhyNow, BusinessModel } from "./slides/UNLTD";

export const slides = [
  { id: "1", path: "/1", component: Cover, title: "UNLTD" },
  { id: "2", path: "/2", component: Problem, title: "Problem" },
  { id: "3", path: "/3", component: MarketShift, title: "Market shift" },
  { id: "4", path: "/4", component: Solution, title: "Solution" },
  { id: "5", path: "/5", component: HowItWorks, title: "How it works" },
  { id: "6", path: "/6", component: Proof, title: "Proof" },
  { id: "7", path: "/7", component: Components, title: "Components" },
  { id: "8", path: "/8", component: WhyNow, title: "Why now" },
  { id: "9", path: "/9", component: BusinessModel, title: "Business model" },
];
