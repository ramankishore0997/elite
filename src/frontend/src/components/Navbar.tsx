import { Button } from "@/components/ui/button";
import { Menu, TrendingUp, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleJoin = () => {
    window.open(
      "https://chat.whatsapp.com/GAjk7yjiLG125WpJ8yLixd",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <header
      data-ocid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-card shadow-elevated border-b gold-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-18">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center btn-gold flex-shrink-0">
            <TrendingUp className="w-4 h-4" />
          </div>
          <span className="font-display font-bold text-foreground text-base sm:text-lg leading-tight">
            Elite Market
            <span className="text-gold block sm:inline sm:ml-1">Community</span>
          </span>
        </div>

        {/* Desktop CTA */}
        <Button
          data-ocid="navbar.join_button"
          onClick={handleJoin}
          className="hidden sm:flex btn-gold rounded-full px-6 h-10 font-display text-sm"
        >
          Join Free
        </Button>

        {/* Mobile menu button */}
        <button
          type="button"
          data-ocid="navbar.menu_toggle"
          aria-label="Toggle menu"
          className="sm:hidden text-foreground p-2"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="sm:hidden glass-card border-t gold-border px-4 pb-4">
          <Button
            data-ocid="navbar.mobile_join_button"
            onClick={() => {
              handleJoin();
              setMenuOpen(false);
            }}
            className="w-full btn-gold rounded-full mt-3 h-11 font-display"
          >
            Join Free Community
          </Button>
        </div>
      )}
    </header>
  );
}
