// Components.d.ts — the complete catalog of the 3 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Explore) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Explore" (node 2283:2813)
export interface ExploreProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "label" (node 1:84)
export interface LabelProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Travel". */
  text1?: string;
}

// figma layer: "Vector" (node 1:762)
export interface VectorProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
}

declare const Explore: React.FC<ExploreProps>;
declare const Label: React.FC<LabelProps>;
declare const Vector: React.FC<VectorProps>;
declare global {
  interface Window {
    Explore: React.FC<ExploreProps>;
    Label: React.FC<LabelProps>;
    Vector: React.FC<VectorProps>;
  }
}
