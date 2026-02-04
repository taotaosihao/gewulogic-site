# Refactor Gewulogic Site to Kingdee Style

**Context**: The current site (`src/pages/index.astro`) is a dark-themed "cyberpunk/neon" style. We need to refactor it to a professional **Corporate B2B Light Theme**, inspired by Kingdee (https://www.kingdee.com/cn).

**Goal**: Professional, Clean, Trustworthy.

## 1. Visual Design Specs
*   **Theme**: Light Mode (White/Light Gray backgrounds).
*   **Primary Color**: **Royal Blue** (e.g., Tailwind `blue-700` or `blue-600`).
*   **Secondary Color**: Light Blue / Sky Blue (e.g., `blue-50`, `sky-500` for accents).
*   **Typography**:
    *   Headings: Dark Slate (`text-slate-800` or `text-gray-900`).
    *   Body: Medium Gray (`text-slate-600` or `text-gray-600`).
*   **Backgrounds**:
    *   Main: White.
    *   Alt Sections: Very Light Gray (`bg-slate-50` or `bg-gray-50`).
    *   Footer: Deep Navy/Dark Blue (`bg-slate-900` or `bg-blue-950`).

## 2. Component Design
*   **Navbar**: White background, `shadow-sm`, sticky top. Links: Dark Gray, Blue on hover.
*   **Hero**:
    *   Clean background (no dark glowing orbs).
    *   Maybe a subtle geometric pattern or very soft gradient (`bg-gradient-to-b from-blue-50 to-white`).
    *   Headline: Large, Bold, Dark Blue.
    *   CTA Button: Solid Blue (`bg-blue-600 hover:bg-blue-700`), rounded-md (not pill).
*   **Cards (Solutions/Products)**:
    *   White background.
    *   Border: Thin light gray (`border-gray-200`).
    *   Shadow: Soft (`shadow-sm` -> `hover:shadow-md`).
    *   Icons: Blue text/bg.

## 3. Implementation
*   **Target File**: `/home/sihao/work/gewulogic-site/src/pages/index.astro`
*   **Constraint**: **Keep all existing data constants** (`company`, `nav`, `products`, `solutions`, etc.) exactly as they are. Only change the HTML template and CSS classes.
*   **Tech**: Astro + Tailwind.

## 4. Execution
1.  Read `src/pages/index.astro`.
2.  Rewrite the template section to match the new design.
3.  Ensure responsiveness (mobile menu, grids).
