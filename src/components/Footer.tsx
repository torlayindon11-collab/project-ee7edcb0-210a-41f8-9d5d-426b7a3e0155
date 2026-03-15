import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t-2 border-border mt-16">
      <div className="container py-12">
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex items-center gap-3 justify-center">
            <img src={logo} alt="ВАШИ РУЧКИ" className="h-20 w-20 object-contain" />
            <p className="text-heading-md font-bold text-primary">ВАШИ РУЧКИ</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-3 text-body-lg font-semibold">
              <Phone size={24} className="text-primary" />
              <a href="tel:+79991116156" className="hover:text-primary">+7 (999) 111-61-56</a>
            </div>
            <a href="https://wa.me/79991116156" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">WhatsApp: +7 (999) 111-61-56</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
