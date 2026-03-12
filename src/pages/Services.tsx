import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Wrench, Zap, Package, Paintbrush, Flame, MoreHorizontal } from "lucide-react";

const services = [
  { icon: Wrench, title: "Сантехника", desc: "Установка, ремонт и замена сантехники. Устранение протечек, монтаж труб." },
  { icon: Zap, title: "Электрика", desc: "Монтаж проводки, установка розеток и светильников, замена щитков." },
  { icon: Package, title: "Грузчики", desc: "Переезды, подъём мебели, погрузка/разгрузка. Аккуратно и быстро." },
  { icon: Paintbrush, title: "Ремонт квартир", desc: "Косметический и капитальный ремонт. Штукатурка, покраска, обои." },
  { icon: Flame, title: "Сварка", desc: "Сварочные работы любой сложности. Ворота, решётки, трубы." },
  { icon: MoreHorizontal, title: "Другие услуги", desc: "Не нашли нужную услугу? Оставьте заявку — мы найдём мастера." },
];

const Services = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container">
          <h1 className="text-heading-lg font-extrabold text-center mb-4">Наши услуги</h1>
          <p className="text-body-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Проверенные мастера по всем видам домашних работ
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-card border-2 border-border rounded-lg p-8 flex flex-col"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-5">
                  <s.icon size={32} className="text-primary" strokeWidth={2.5} />
                </div>
                <h2 className="text-heading-sm font-bold mb-3">{s.title}</h2>
                <p className="text-body text-muted-foreground mb-6 flex-1">{s.desc}</p>
                <Button asChild size="lg">
                  <Link to={`/request?service=${encodeURIComponent(s.title)}`} aria-label={`Вызвать мастера: ${s.title}`}>
                    Вызвать мастера
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
