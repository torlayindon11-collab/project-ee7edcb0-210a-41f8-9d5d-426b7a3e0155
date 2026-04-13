import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Clock } from "lucide-react";
import logo from "@/assets/logo-header.jpg";

const navItems = [
  { label: "Главная", path: "/" },
  { label: "Как это работает", path: "/how-it-works" },
  { label: "Услуги", path: "/services" },
  { label: "Оставить заявку", path: "/request" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-50 bg-background border-b-2 border-border">
      <div className="container flex items-center justify-between py-3 lg:py-4">
        <div className="flex items-center gap-2 min-w-0">
          <Link to="/" className="flex items-center gap-1 shrink-0" aria-label="Ваши ручки — главная">
            <img src={logo} alt="ВАШИ РУЧКИ" className="h-10 w-10 lg:h-16 lg:w-16 object-contain bg-[#ffffff] rounded" />
            <span className="text-base lg:text-heading-sm font-extrabold text-primary whitespace-nowrap">ВАШИ РУЧКИ</span>
          </Link>
          <div className="flex items-center gap-1 ml-1 shrink-0">
            <Clock size={14} className="text-primary lg:hidden" />
            <Clock size={18} className="text-primary hidden lg:block" />
            <span className="text-sm lg:text-body font-semibold text-primary whitespace-nowrap">08-22</span>
          </div>
        </div>

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
          className="lg:hidden p-2 flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
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
