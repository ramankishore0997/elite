import {
  BarChart2,
  BookOpen,
  Brain,
  Globe,
  ShieldCheck,
  Users,
} from "lucide-react";

const BENEFIT_CARDS = [
  {
    icon: BarChart2,
    title: "Daily Market Insights",
    desc: "Stay informed with curated market observations and chart analysis shared by the community.",
  },
  {
    icon: BookOpen,
    title: "Educational Content",
    desc: "Access structured learning resources covering trading fundamentals and advanced concepts.",
  },
  {
    icon: Brain,
    title: "Trading Psychology Notes",
    desc: "Understand the mental aspects of trading — discipline, patience, and emotional control.",
  },
  {
    icon: Users,
    title: "Community Discussions",
    desc: "Engage with thousands of like-minded learners, share ideas, and ask questions freely.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Management Learning",
    desc: "Learn how to protect your capital through proper position sizing and risk frameworks.",
  },
  {
    icon: Globe,
    title: "Market Awareness Content",
    desc: "Broaden your perspective with global market context, sector trends, and macro awareness.",
  },
];

export function BenefitCardsSection() {
  return (
    <section
      id="benefits"
      data-ocid="benefits.section"
      className="py-20 sm:py-28 bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-gold text-xs font-display font-bold tracking-widest uppercase mb-3 block">
            Community Benefits
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Built for Every Learner
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Six pillars that make Elite Market Community the go-to place for
            market education.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFIT_CARDS.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              data-ocid={`benefits.card.${i + 1}`}
              className="glass-card gold-border rounded-2xl p-6 sm:p-7 card-hover slide-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "oklch(var(--accent) / 0.12)" }}
              >
                <Icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
