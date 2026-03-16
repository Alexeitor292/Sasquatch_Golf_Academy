export type ControlType =
  | "text"
  | "richText"
  | "button"
  | "image"
  | "video"
  | "embed"
  | "color"
  | "spacing"
  | "boolean"
  | "select"
  | "repeater";

export type SectionTemplate = {
  id: string;
  label: string;
  category: "hero" | "commerce" | "content" | "social" | "utility";
  description: string;
  controls: Array<{
    key: string;
    label: string;
    type: ControlType;
  }>;
};

export const sectionTemplates: SectionTemplate[] = [
  {
    id: "heroVideo",
    label: "Hero Video",
    category: "hero",
    description: "Fullscreen launch section with video, buttons, overlays, and animated brand treatment.",
    controls: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "subheading", label: "Subheading", type: "richText" },
      { key: "primaryButton", label: "Primary Button", type: "button" },
      { key: "backgroundVideo", label: "Background Video", type: "video" },
      { key: "posterImage", label: "Poster Image", type: "image" },
      { key: "overlayColor", label: "Overlay Color", type: "color" },
    ],
  },
  {
    id: "scrollStory",
    label: "Scroll Story",
    category: "content",
    description: "Sticky section with cinematic media, staged text reveals, and Apple-style motion pacing.",
    controls: [
      { key: "fragments", label: "Text Fragments", type: "repeater" },
      { key: "backgroundImage", label: "Background Image", type: "image" },
      { key: "zoomAmount", label: "Zoom Amount", type: "spacing" },
      { key: "revealTiming", label: "Reveal Timing", type: "repeater" },
    ],
  },
  {
    id: "carousel",
    label: "Carousel",
    category: "content",
    description: "Slides, cards, logos, testimonials, or gallery content with per-slide actions.",
    controls: [
      { key: "slides", label: "Slides", type: "repeater" },
      { key: "autoplay", label: "Autoplay", type: "boolean" },
      { key: "interval", label: "Interval", type: "spacing" },
    ],
  },
  {
    id: "productGrid",
    label: "Product Grid",
    category: "commerce",
    description: "Merchandise, memberships, lesson packs, or simulator services tied to catalog items.",
    controls: [
      { key: "collection", label: "Collection", type: "select" },
      { key: "columns", label: "Columns", type: "spacing" },
      { key: "showPricing", label: "Show Pricing", type: "boolean" },
    ],
  },
  {
    id: "splitFeature",
    label: "Split Feature",
    category: "content",
    description: "Two-column layout for lessons, events, fittings, or promotional content.",
    controls: [
      { key: "headline", label: "Headline", type: "text" },
      { key: "body", label: "Body", type: "richText" },
      { key: "media", label: "Media", type: "image" },
      { key: "cta", label: "CTA", type: "button" },
    ],
  },
];

