import { Link, useLocation } from "react-router-dom";
import { Clock } from "lucide-react";
import logo from "@/assets/logo-header.jpg";

const navItems = [
  { label: "Главная", path: "/" },
  { label: "Услуги", path: "/services" },
  { label: "Оставить заявку", path: "/request" },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="relative z-50 bg-background border-b-2 border-border">
      <div className="container flex items-center justify-between py-2 lg:py-4 overflow-x-auto">
        <Link to="/" className="flex items-center gap-1 shrink-0" aria-label="Ваши ручки — главная">
          <img src={logo} alt="ВАШИ РУЧКИ" className="h-8 w-8 lg:h-16 lg:w-16 object-contain bg-[#ffffff] rounded" />
          <span className="text-sm lg:text-heading-sm font-extrabold text-primary whitespace-nowrap">ВАШИ РУЧКИ</span>
        </Link>

        <div className="flex items-center gap-1 shrink-0">
          <Clock size={14} className="text-primary lg:w-[18px] lg:h-[18px]" />
          <span className="text-xs lg:text-body font-semibold text-primary whitespace-nowrap">08-22</span>
        </div>

        <nav className="flex items-center gap-3 lg:gap-8 shrink-0" aria-label="Основная навигация">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xs lg:text-body font-semibold py-1 lg:py-2 border-b-2 transition-colors whitespace-nowrap ${
                location.pathname === item.path
                  ? "border-primary text-primary"
                  : "border-transparent text-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
