import { CheckCircle2 } from "lucide-react";

const MEMBER_BENEFITS = [
  "Market Learning Sessions",
  "Strategy Discussions",
  "Trading Journal Templates",
  "Weekly Market Updates",
  "Community Support",
  "Beginner Friendly Resources",
];

export function MembersGetSection() {
  return (
    <section
      id="members-get"
      data-ocid="members_get.section"
      className="py-20 sm:py-28 bg-section-alt"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-gold text-xs font-display font-bold tracking-widest uppercase mb-3 block">
            Member Benefits
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            What Members Get
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Everything you need to grow your market knowledge and connect with
            fellow learners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {MEMBER_BENEFITS.map((benefit, i) => (
            <div
              key={benefit}
              data-ocid={`members_get.item.${i + 1}`}
              className="glass-card gold-border rounded-xl px-6 py-4 flex items-center gap-4 card-hover slide-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
              <span className="text-foreground font-body font-medium text-sm sm:text-base">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
