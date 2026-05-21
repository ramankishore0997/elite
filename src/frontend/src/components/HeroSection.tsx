import { Button } from "@/components/ui/button";

// Inline SVG finance decorative elements
function ChartDecoration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 80"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <polyline
        points="0,70 20,55 40,60 60,30 80,45 100,15 120,20"
        stroke="oklch(0.65 0.18 50 / 0.6)"
        strokeWidth="2"
        fill="none"
      />
      <polyline
        points="0,70 20,55 40,60 60,30 80,45 100,15 120,20"
        stroke="oklch(0.65 0.18 50 / 0.15)"
        strokeWidth="10"
        fill="none"
        strokeLinejoin="round"
      />
      {[20, 40, 60, 80, 100].map((x, i) => {
        const ys = [55, 60, 30, 45, 15];
        return (
          <circle
            key={x}
            cx={x}
            cy={ys[i]}
            r="3"
            fill="oklch(0.65 0.18 50)"
            opacity="0.8"
          />
        );
      })}
    </svg>
  );
}

function CandleDecoration({ className }: { className?: string }) {
  const candles = [
    { x: 10, high: 10, low: 70, open: 30, close: 20, up: true },
    { x: 30, high: 20, low: 65, open: 55, close: 25, up: true },
    { x: 50, high: 25, low: 60, open: 30, close: 50, up: false },
    { x: 70, high: 15, low: 55, open: 45, close: 18, up: true },
    { x: 90, high: 20, low: 58, open: 35, close: 22, up: true },
  ];
  return (
    <svg
      viewBox="0 0 110 80"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {candles.map((c, _i) => (
        <g key={c.x} opacity="0.7">
          <line
            x1={c.x}
            y1={c.high}
            x2={c.x}
            y2={c.low}
            stroke="oklch(0.65 0.18 50 / 0.5)"
            strokeWidth="1"
          />
          <rect
            x={c.x - 6}
            y={Math.min(c.open, c.close)}
            width="12"
            height={Math.abs(c.open - c.close)}
            fill={
              c.up ? "oklch(0.65 0.18 50 / 0.8)" : "oklch(0.55 0.22 25 / 0.7)"
            }
            rx="1"
          />
        </g>
      ))}
    </svg>
  );
}

export function HeroSection() {
  const WHATSAPP_URL = "https://chat.whatsapp.com/GAjk7yjiLG125WpJ8yLixd";
  const handleJoin = () => {
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  };

  const scrollDown = () => {
    document
      .getElementById("members-get")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      data-ocid="hero.section"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.07 0.02 50) 0%, oklch(0.10 0.03 50) 40%, oklch(0.12 0.05 50) 70%, oklch(0.09 0.02 45) 100%)",
      }}
    >
      {/* Background image with rich overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-market-bg.dim_1600x900.jpg')",
        }}
        aria-hidden="true"
      />
      {/* Deep multi-layer overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.07 0.02 50 / 0.96) 0%, oklch(0.09 0.03 50 / 0.88) 50%, oklch(0.07 0.02 45 / 0.95) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.65 0.18 50 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(0.65 0.18 50 / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Animated radial gold glow behind headline */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.65 0.18 50 / 0.08) 0%, oklch(0.65 0.18 50 / 0.04) 40%, transparent 70%)",
          animation: "goldPulse 4s ease-in-out infinite",
        }}
        aria-hidden="true"
      />

      {/* Decorative SVG charts — more visible */}
      <div
        className="absolute top-24 right-8 md:right-16 w-32 md:w-52 opacity-35 fade-in stagger-3"
        aria-hidden="true"
      >
        <CandleDecoration className="w-full h-auto" />
      </div>
      <div
        className="absolute bottom-32 left-4 md:left-12 w-28 md:w-44 opacity-30 fade-in stagger-4"
        aria-hidden="true"
      >
        <ChartDecoration className="w-full h-auto" />
      </div>
      <div
        className="absolute top-1/3 left-4 w-24 opacity-25 hidden lg:block fade-in stagger-5"
        aria-hidden="true"
      >
        <CandleDecoration className="w-full h-auto" />
      </div>
      <div
        className="absolute bottom-1/3 right-8 w-20 opacity-20 hidden lg:block fade-in stagger-4"
        aria-hidden="true"
      >
        <ChartDecoration className="w-full h-auto" />
      </div>

      {/* Ambient glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "oklch(0.65 0.18 50 / 0.06)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "oklch(0.65 0.18 50 / 0.05)",
          filter: "blur(100px)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-28 pb-20 flex flex-col items-center">
        {/* Floating badge with pulsing dot */}
        <div
          data-ocid="hero.badge"
          className="inline-flex items-center gap-2.5 glass-card gold-border px-4 py-2 rounded-full mb-8 slide-up"
          style={{ boxShadow: "0 0 20px oklch(0.65 0.18 50 / 0.15)" }}
        >
          <span
            className="w-2.5 h-2.5 rounded-full flex-shrink-0"
            style={{
              background: "oklch(0.65 0.18 50)",
              boxShadow: "0 0 8px oklch(0.65 0.18 50 / 0.8)",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          <span className="text-gold text-xs sm:text-sm font-display font-semibold tracking-widest uppercase">
            India's #1 Market Learning Community
          </span>
        </div>

        {/* Headline */}
        <h1
          data-ocid="hero.headline"
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6 slide-up stagger-1"
        >
          Join India's Growing
          <span
            className="block mt-2"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.75 0.18 55), oklch(0.65 0.22 48), oklch(0.78 0.16 58))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Market Learning
          </span>
          <span className="block">Community</span>
        </h1>

        {/* Subheadline */}
        <p
          data-ocid="hero.subheadline"
          className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed slide-up stagger-2"
        >
          Access market discussions, educational sessions, trading journal
          templates, strategy breakdowns, and a supportive community — all in
          one free space.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 slide-up stagger-3 w-full sm:w-auto">
          <button
            type="button"
            data-ocid="hero.join_button"
            onClick={handleJoin}
            className="btn-gold rounded-full px-8 py-4 font-display text-base md:text-lg w-full sm:w-auto relative overflow-hidden"
            style={{ animation: "btnShimmer 3s ease-in-out infinite" }}
          >
            <span className="relative z-10">Join Free Community</span>
          </button>
          <span className="text-muted-foreground text-sm">
            ✓ Free to join &nbsp;·&nbsp; No credit card required
          </span>
        </div>

        {/* Trust indicators */}
        <div className="flex items-center justify-center gap-6 mt-10 slide-up stagger-4">
          <div className="text-center">
            <div className="font-display font-bold text-xl text-gold">
              10,000+
            </div>
            <div className="text-muted-foreground text-xs">Members</div>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <div className="font-display font-bold text-xl text-gold">100+</div>
            <div className="text-muted-foreground text-xs">Sessions</div>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <div className="font-display font-bold text-xl text-gold">Free</div>
            <div className="text-muted-foreground text-xs">Always</div>
          </div>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <button
        type="button"
        onClick={scrollDown}
        aria-label="Scroll down"
        data-ocid="hero.scroll_indicator"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-muted-foreground hover:text-gold transition-colors duration-200"
        style={{ animation: "scrollBounce 2s ease-in-out infinite" }}
      >
        <span className="text-xs font-display tracking-widest uppercase opacity-60">
          Discover
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 4v12M10 16l-4-4M10 16l4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
