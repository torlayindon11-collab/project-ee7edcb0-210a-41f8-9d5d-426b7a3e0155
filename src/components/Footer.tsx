import { Phone } from "lucide-react";
import logo from "@/assets/logo-footer.jpg";

const Footer = () => {
  return (
    <footer className="bg-card border-t-2 border-border mt-16">
      <div className="container py-12">
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex items-center gap-3 justify-center">
            <img src={logo} alt="ВАШИ РУЧКИ" className="h-20 w-20 object-contain bg-[#f5f5f5] rounded" />
            <p className="text-heading-md font-bold text-primary">ВАШИ РУЧКИ</p>
          </div>

          <div className="flex items-center justify-between w-full flex-wrap text-body-lg font-semibold">
            <a
              href="https://vk.com/vashiruchkii"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              ВКонтакте: vk.com/vashiruchkii
            </a>
            <div className="flex items-center gap-2">
              <Phone size={24} className="text-primary" />
              <a href="tel:+79991116156" className="hover:text-primary">+7 (999) 111-61-56</a>
            </div>
            <a
              href="https://t.me/vashiruchki"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Telegram: @vashiruchki
            </a>
            <a
              href="https://guns.lol/vashiruchki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold hover:opacity-80 transition-opacity"
            >
              Сотрудничество
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
