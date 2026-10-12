// Components.d.ts — the complete catalog of the 15 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.CustomIcons) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Custom icons" (node 8620:5328)
export interface CustomIconsProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Data Dashboard - V1" (node 10682:805)
export interface DataDashboardV1Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Data Dashboard - V2" (node 10664:885)
export interface DataDashboardV2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Data Dashboard - V3" (node 10683:1078)
export interface DataDashboardV3Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Data Dashboard - V4" (node 10745:807)
export interface DataDashboardV4Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Data Management - V4" (node 10869:4734)
export interface DataManagementV4Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Frame 1" (node 10683:478)
export interface Frame1Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "at risk" | "secure";
  /** Text content; defaults to "At Risk". */
  text1?: string;
}

// figma layer: "Nav item - Dashboard" (node 10744:51)
export interface NavItemDashboardProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "active" | "inactive";
  /** Text content; defaults to "Dashboard". */
  text1?: string;
}

// figma layer: "Nav item - Management" (node 10744:60)
export interface NavItemManagementProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "active" | "inactive";
  /** Text content; defaults to "Management". */
  text1?: string;
}

// figma layer: "Nav item - Settings" (node 10744:77)
export interface NavItemSettingsProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "active" | "inactive";
  /** Text content; defaults to "Settings". */
  text1?: string;
}

// figma layer: "Navigation Bar" (node 10745:776)
export interface NavigationBarProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "dashboard" | "management" | "settings";
}

// figma layer: "Onboarding - Screen 1" (node 10838:97)
export interface OnboardingScreen1Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Onboarding - Screen 2" (node 10840:102)
export interface OnboardingScreen2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Onboarding - Screen 3" (node 10840:106)
export interface OnboardingScreen3Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Settings - V4" (node 10745:942)
export interface SettingsV4Props {
  className?: string;
  style?: React.CSSProperties;
}

declare const CustomIcons: React.FC<CustomIconsProps>;
declare const DataDashboardV1: React.FC<DataDashboardV1Props>;
declare const DataDashboardV2: React.FC<DataDashboardV2Props>;
declare const DataDashboardV3: React.FC<DataDashboardV3Props>;
declare const DataDashboardV4: React.FC<DataDashboardV4Props>;
declare const DataManagementV4: React.FC<DataManagementV4Props>;
declare const Frame1: React.FC<Frame1Props>;
declare const NavItemDashboard: React.FC<NavItemDashboardProps>;
declare const NavItemManagement: React.FC<NavItemManagementProps>;
declare const NavItemSettings: React.FC<NavItemSettingsProps>;
declare const NavigationBar: React.FC<NavigationBarProps>;
declare const OnboardingScreen1: React.FC<OnboardingScreen1Props>;
declare const OnboardingScreen2: React.FC<OnboardingScreen2Props>;
declare const OnboardingScreen3: React.FC<OnboardingScreen3Props>;
declare const SettingsV4: React.FC<SettingsV4Props>;
declare global {
  interface Window {
    CustomIcons: React.FC<CustomIconsProps>;
    DataDashboardV1: React.FC<DataDashboardV1Props>;
    DataDashboardV2: React.FC<DataDashboardV2Props>;
    DataDashboardV3: React.FC<DataDashboardV3Props>;
    DataDashboardV4: React.FC<DataDashboardV4Props>;
    DataManagementV4: React.FC<DataManagementV4Props>;
    Frame1: React.FC<Frame1Props>;
    NavItemDashboard: React.FC<NavItemDashboardProps>;
    NavItemManagement: React.FC<NavItemManagementProps>;
    NavItemSettings: React.FC<NavItemSettingsProps>;
    NavigationBar: React.FC<NavigationBarProps>;
    OnboardingScreen1: React.FC<OnboardingScreen1Props>;
    OnboardingScreen2: React.FC<OnboardingScreen2Props>;
    OnboardingScreen3: React.FC<OnboardingScreen3Props>;
    SettingsV4: React.FC<SettingsV4Props>;
  }
}
