import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navItems = [
  { label: "Главная", path: "/" },
  { label: "Услуги", path: "/services" },
  { label: "Как это работает", path: "/how-it-works" },
  { label: "Оставить заявку", path: "/request" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b-2 border-border">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="text-heading-sm font-extrabold text-primary" aria-label="Ваши ручки — главная">
          🛠 ВАШИ РУЧКИ
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Основная навигация">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-body font-semibold py-2 border-b-2 transition-colors ${
                location.pathname === item.path
                  ? "border-primary text-primary"
                  : "border-transparent text-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden min-h-btn min-w-[64px] flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {mobileOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t-2 border-border bg-background" aria-label="Мобильная навигация">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-5 text-body-lg font-semibold border-b border-border ${
                location.pathname === item.path
                  ? "bg-card text-primary"
                  : "text-foreground hover:bg-card"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
