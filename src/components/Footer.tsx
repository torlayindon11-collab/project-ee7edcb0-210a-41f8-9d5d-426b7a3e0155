import { Phone } from "lucide-react";
import logo from "@/assets/logo-footer.jpg";

const Footer = () => {
  return (
    <footer className="bg-card border-t-2 border-border mt-16">
      <div className="container py-12">
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex items-center gap-3 justify-center">
            <img src={logo} alt="ВАШИ РУЧКИ" className="h-20 w-20 object-contain rounded bg-transparent" />
            <p className="text-heading-md font-bold text-primary">ВАШИ РУЧКИ</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between w-full flex-wrap text-body-lg font-semibold gap-2 sm:gap-0">
            <div className="flex flex-col gap-1 sm:-ml-4 items-center sm:items-start">
              <a
                href="https://t.me/vashiruchki"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors">
                
                Telegram: @vashiruchki
              </a>
              <a
                href="https://vk.com/vashiruchkii"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors">
                
                ВКонтакте: vashiruchkii
              </a>
            </div>
            <div className="flex flex-col items-center sm:items-end gap-1">
              <a
                href="https://guns.lol/vashiruchki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:opacity-80 transition-opacity">
                
                Сотрудничество
              </a>
              <div className="flex items-center gap-2">
                <Phone size={24} className="text-primary" />
                <a href="tel:+79991116156" className="hover:text-primary">+7 (999) 111-61-56</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;