import { TrendingUp } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
    typeof window !== "undefined"
      ? window.location.hostname
      : "elitemarketcommunity",
  )}`;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      data-ocid="footer.section"
      className="bg-deep border-t gold-border py-12 sm:py-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center btn-gold">
                <TrendingUp className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-foreground text-lg">
                Elite Market <span className="text-gold">Community</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              India's growing market education community. Learn, connect, and
              grow together.
            </p>
          </div>

          {/* Quick links */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-6 gap-y-2"
          >
            {[
              { label: "What We Offer", id: "members-get" },
              { label: "Benefits", id: "benefits" },
              { label: "Stats", id: "stats" },
              { label: "Testimonials", id: "testimonials" },
            ].map(({ label, id }) => (
              <button
                type="button"
                key={id}
                onClick={() => scrollTo(id)}
                className="text-muted-foreground hover:text-gold text-sm transition-colors duration-200 font-body"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t gold-border mb-8" />

        {/* Disclaimer */}
        <div className="glass-card gold-border rounded-xl p-4 sm:p-5 mb-8">
          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed text-center">
            <span className="text-gold font-semibold">
              Educational Disclaimer:{" "}
            </span>
            This community is for educational and informational purposes only.
            We do not provide investment advice or guaranteed returns. Trading
            and investing involve risk. Past discussions are not indicative of
            future market performance.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {year} Elite Market Community. All rights reserved.</span>
          <a
            href={utmLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors duration-200"
          >
            Built with love using{" "}
            <span className="text-gold font-semibold">caffeine.ai</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
