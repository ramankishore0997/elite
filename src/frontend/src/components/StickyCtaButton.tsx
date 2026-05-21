import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export function StickyCtaButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.open(
      "https://chat.whatsapp.com/GAjk7yjiLG125WpJ8yLixd",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div
      data-ocid="sticky_cta.button"
      aria-label="Join Free WhatsApp Community"
      className={`fixed bottom-6 right-4 sm:right-6 z-40 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <button
        type="button"
        onClick={handleClick}
        aria-label="Join Free WhatsApp Community"
        className="btn-gold rounded-full flex items-center gap-2 px-4 sm:px-5 py-3 text-xs sm:text-sm font-display font-bold shadow-elevated"
      >
        <MessageCircle className="w-4 h-4 flex-shrink-0" />
        <span className="hidden sm:inline">Join Free WhatsApp Community</span>
        <span className="sm:hidden">WhatsApp</span>
      </button>
    </div>
  );
}
