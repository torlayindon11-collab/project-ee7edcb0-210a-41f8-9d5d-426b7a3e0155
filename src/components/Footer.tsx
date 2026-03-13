import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t-2 border-border mt-16">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-heading-sm font-bold text-primary">🛠 ВАШИ РУЧКИ</p>
            <p className="text-body text-muted-foreground mt-1">Надёжные мастера за приятную цену</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-3 text-body-lg font-semibold">
              <Phone size={24} className="text-primary" />
              <a href="tel:+79001234567" className="hover:text-primary">+7 (900) 123-45-67</a>
            </div>
            <p className="text-muted-foreground">WhatsApp: +7 (900) 123-45-67</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
