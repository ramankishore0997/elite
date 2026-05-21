const STATS = [
  { value: "10,000+", label: "Members" },
  { value: "100+", label: "Educational Sessions" },
  { value: "Active", label: "Community" },
  { value: "Beginner", label: "Friendly" },
];

export function StatsSection() {
  return (
    <section
      id="stats"
      data-ocid="stats.section"
      className="py-14 sm:py-18"
      style={{ background: "oklch(0.1 0.015 280)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map(({ value, label }, i) => (
            <div
              key={label}
              data-ocid={`stats.item.${i + 1}`}
              className="glass-card gold-border rounded-2xl p-6 text-center card-hover slide-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-gold gold-glow-text mb-1">
                {value}
              </div>
              <div className="text-muted-foreground font-body text-xs sm:text-sm uppercase tracking-wider">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
