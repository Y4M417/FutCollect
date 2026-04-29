import type { ReactNode } from "react";

type PhoneMockupProps = {
  children: ReactNode;
  glowColor?: string;
  className?: string;
  scale?: string;
};

/**
 * Renders children inside a minimal phone frame silhouette.
 * Accepts a glowColor (CSS value) to add a soft radial glow behind the device.
 */
export function PhoneMockup({
  children,
  glowColor = "var(--color-brand)",
  className = "",
  scale = "1",
}: PhoneMockupProps) {
  return (
    <div className={`phone-mockup-wrapper ${className}`} style={{ "--phone-scale": scale } as React.CSSProperties}>
      {/* Glow behind device */}
      <div
        className="phone-glow"
        style={{
          background: `radial-gradient(ellipse at center, color-mix(in srgb, ${glowColor} 35%, transparent) 0%, transparent 70%)`,
        }}
      />
      {/* Phone frame */}
      <div className="phone-frame">
        {/* Dynamic Island */}
        <div className="phone-notch" />
        {/* Screen content */}
        <div className="phone-screen">
          {children}
        </div>
      </div>
    </div>
  );
}
