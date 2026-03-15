import { Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-card border-t-2 border-border mt-16">
      <div className="container py-12">
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex items-center gap-3 justify-center">
            <img src={logo} alt="ВАШИ РУЧКИ" className="h-14 w-14 rounded-full object-cover" />
            <p className="text-heading-md font-bold text-primary">ВАШИ РУЧКИ</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-3 text-body-lg font-semibold">
              <Phone size={24} className="text-primary" />
              <a href="tel:+79991116156" className="hover:text-primary">+7 (999) 111-61-56</a>
            </div>
            <p className="text-muted-foreground">WhatsApp: +7 (999) 111-61-56</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
