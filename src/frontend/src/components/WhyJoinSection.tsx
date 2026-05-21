import { ArrowRight } from "lucide-react";

const WHY_JOIN = [
  {
    num: "01",
    title: "Learn Market Concepts",
    desc: "Structured content covering technical analysis, fundamental principles, and market mechanics for all levels.",
  },
  {
    num: "02",
    title: "Community Interaction",
    desc: "Connect with thousands of active learners, ask questions, and participate in daily discussions.",
  },
  {
    num: "03",
    title: "Structured Learning",
    desc: "Follow curated learning paths and session recordings at your own pace, from beginner to advanced.",
  },
  {
    num: "04",
    title: "Resources Access",
    desc: "Download trading journal templates, checklists, and educational guides shared by our mentors.",
  },
  {
    num: "05",
    title: "Market Updates",
    desc: "Stay current with weekly summaries, sector highlights, and key events that matter to your learning journey.",
  },
];

export function WhyJoinSection() {
  const handleJoin = () => {
    window.open(
      "https://chat.whatsapp.com/GAjk7yjiLG125WpJ8yLixd",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="why-join"
      data-ocid="why_join.section"
      className="py-20 sm:py-28 bg-section-alt"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-gold text-xs font-display font-bold tracking-widest uppercase mb-3 block">
            Why Choose Us
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            5 Reasons to Join
          </h2>
        </div>

        <div className="space-y-4">
          {WHY_JOIN.map(({ num, title, desc }, i) => (
            <div
              key={num}
              data-ocid={`why_join.item.${i + 1}`}
              className="glass-card gold-border rounded-2xl p-6 sm:p-7 flex items-start gap-5 card-hover slide-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span className="font-display font-bold text-3xl sm:text-4xl text-gold/30 flex-shrink-0 leading-none mt-1">
                {num}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-bold text-lg sm:text-xl text-foreground mb-1">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {desc}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gold/50 flex-shrink-0 mt-1 hidden sm:block" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            type="button"
            data-ocid="why_join.cta_button"
            onClick={handleJoin}
            className="btn-gold rounded-full px-8 py-4 font-display text-base md:text-lg"
          >
            Join the Community Now
          </button>
        </div>
      </div>
    </section>
  );
}
