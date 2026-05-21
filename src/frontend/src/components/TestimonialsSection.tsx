import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Arjun Mehta",
    role: "Aspiring Trader, Mumbai",
    initials: "AM",
    rating: 5,
    text: "I joined Elite Market Community as a complete beginner. The educational sessions are well-structured and the members are incredibly supportive. The trading journal templates have helped me develop a consistent routine for tracking my learning.",
  },
  {
    name: "Priya Sharma",
    role: "Working Professional, Bengaluru",
    initials: "PS",
    rating: 5,
    text: "The community discussions here are gold. People share insights without being condescending to beginners. I've learned more about market psychology and risk management in 3 months here than in the past two years on my own.",
  },
  {
    name: "Karan Patel",
    role: "Finance Student, Ahmedabad",
    initials: "KP",
    rating: 5,
    text: "The weekly market updates keep me informed without overwhelming me. What I appreciate most is that nobody here promises quick money — it's purely about learning and growing your understanding of how markets work.",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      data-ocid="testimonials.section"
      className="py-20 sm:py-28 bg-background"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-gold text-xs font-display font-bold tracking-widest uppercase mb-3 block">
            Community Voices
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            What Members Say
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Hear from real members about their learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ name, role, initials, rating, text }, i) => (
            <div
              key={name}
              data-ocid={`testimonials.card.${i + 1}`}
              className="glass-card gold-border rounded-2xl p-6 sm:p-7 card-hover slide-up flex flex-col"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].slice(0, rating).map((starNum) => (
                  <Star
                    key={`star-${starNum}`}
                    className="w-4 h-4 text-gold fill-current"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.7 0.18 55), oklch(0.58 0.2 45))",
                    color: "oklch(0.1 0.01 280)",
                  }}
                >
                  {initials}
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground text-sm">
                    {name}
                  </div>
                  <div className="text-muted-foreground text-xs">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
