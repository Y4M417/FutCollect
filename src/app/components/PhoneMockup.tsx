import type { ReactNode } from "react";

type PhoneMockupProps = {
  children: ReactNode;
  glowColor?: string;
  className?: string;
  scale?: string;
};

export function PhoneMockup({
  children,
  glowColor = "var(--color-brand)",
  className = "",
  scale = "1",
}: PhoneMockupProps) {
  return (
    <div className={`phone-mockup-wrapper ${className}`} style={{ "--phone-scale": scale } as React.CSSProperties}>
      <div
        className="phone-glow"
        style={{
          background: `radial-gradient(ellipse at center, color-mix(in srgb, ${glowColor} 35%, transparent) 0%, transparent 70%)`,
        }}
      />
      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-screen">
          {children}
        </div>
      </div>
    </div>
  );
}
