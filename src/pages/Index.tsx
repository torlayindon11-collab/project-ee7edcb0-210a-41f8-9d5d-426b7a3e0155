import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Tag, Banknote, Award, Heart } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Проверенные мастера",
    desc: "Мы лично отбираем каждого специалиста и проверяем качество работы",
  },
  {
    icon: BadgeRubleSign,
    title: "Лучшие цены",
    desc: "Мы договариваемся о лучших ценах — вы экономите на каждом вызове",
  },
  {
    icon: Banknote,
    title: "Без предоплаты",
    desc: "Вы платите только после выполнения работы. Никаких авансов",
  },
  {
    icon: Award,
    title: "Гарантия качества",
    desc: "Если что-то не так — мы решим вопрос. Ваше спокойствие — наш приоритет",
  },
  {
    icon: Heart,
    title: "Скидки пенсионерам",
    desc: "Скидка 10% для пенсионеров на все виды услуг. Забота о старшем поколении — наш принцип",
  },
];

const cities = ["Москва", "Краснодар"];

const Index = () => {
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-background py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-heading-lg md:text-heading-xl font-extrabold mb-6">
            Надёжные мастера<br />за приятную цену
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-10">
            Мы лично проверяем мастеров и договариваемся о скидках для вас.
          </p>

          {/* City selection */}
          <div className="max-w-md mx-auto mb-10">
            <label htmlFor="city-select" className="block text-body font-semibold mb-3">Выберите ваш город</label>
            <select
              id="city-select"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full min-h-btn border-2 border-input rounded-lg px-4 text-body bg-background focus:outline-none focus:ring-4 focus:ring-ring"
              aria-label="Выбор города"
            >
              <option value="">Все города</option>
              {cities.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <Button variant="hero" size="lg" asChild>
            <Link to={`/request${selectedCity ? `?city=${encodeURIComponent(selectedCity)}` : ''}`} aria-label="Перейти к форме заявки">
              Оставить заявку
            </Link>
          </Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-card py-16">
        <div className="container">
          <h2 className="text-heading-md font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-background border-2 border-border rounded-lg p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-5">
                  <b.icon size={32} className="text-primary" strokeWidth={2.5} />
                </div>
                <h3 className="text-heading-sm font-bold mb-3">{b.title}</h3>
                <p className="text-body text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Index;
