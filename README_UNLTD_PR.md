# UNLTD dark theme deck bundle

This bundle adds a dark-themed UNLTD pitch deck to the Shadcn-based template with glassmorphism cards and Geist Mono fonts. It includes nine slides (cover through business model), router wiring, a single-page fallback, a dynamic Open Graph image, brand tokens, and the AEGNTIC logo.

## Files included

| Path | Description |
| --- | --- |
| `src/presentation/slides/UNLTD.tsx` | Nine slides styled with a dark theme and glassmorphism containers using Geist Mono and minimal color accents. |
| `src/presentation/router.unltd.example.ts` | Example router configuration wiring the slides together. |
| `app/unltd/page.tsx` | Optional single-page fallback with keyboard navigation. |
| `app/opengraph-image.tsx` | Dynamic Open Graph image route for social sharing. |
| `styles/brand.css` | CSS variables defining the primary brand colors. |
| `public/aelogo.svg` | AEGNTIC logo for the deck's cover. |
| `README_UNLTD_PR.md` | This instruction file. |

## Installation steps

1. **Extract / Copy:** Unzip this bundle or copy its files into the root of your fork, preserving the directory structure.

2. **Router registration:** If your deck uses a slide router (e.g., `src/presentation/router.ts`), import the UNLTD slides and register them in the slides array. Refer to `router.unltd.example.ts` for an example.

3. **Fallback page:** If your template doesn't have a router, copy `app/unltd/page.tsx`. You can visit `/unltd` to view the deck with navigation.

4. **Brand tokens & fonts:** Import `../styles/brand.css` in your global CSS or layout (e.g. `app/layout.tsx`). Extend your Tailwind config to expose the `brand` and `brand-foreground` colors. The slides use `font-mono` to approximate Geist Mono; adjust your font stack or import Geist Mono as needed.

5. **Metadata & OG image:** In `app/layout.tsx`, set the `metadata` property for your site and reference `/opengraph-image` to generate social previews. See the example in the earlier instructions.

6. **Run locally:** Install dependencies and start the dev server with:

   ```bash
   pnpm install
   pnpm dev
   # open http://localhost:3000 or /unltd to view your deck
   ```

7. **Deploy:** Commit the changes to GitHub and deploy via your preferred platform (Vercel works well). The deck will be fully functional with a dark theme and glassmorphism styling.

Feel free to modify the copy, adjust styling, or swap in your own logos. Enjoy your new UNLTD deck!
