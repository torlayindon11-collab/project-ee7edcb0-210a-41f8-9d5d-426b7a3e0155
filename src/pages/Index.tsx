import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Tag, Banknote, Award, Heart, UserCheck, FileText, Search, CreditCard } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Проверенные мастера",
    desc: "Мы лично отбираем каждого специалиста и проверяем качество работы",
  },
  {
    icon: Tag,
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

const steps = [
  {
    icon: UserCheck,
    num: 1,
    title: "Мы лично отбираем и проверяем мастеров",
    desc: "Каждый мастер проходит проверку квалификации и качества работы. Мы берём только надёжных специалистов.",
  },
  {
    icon: FileText,
    num: 2,
    title: "Вы оставляете заявку",
    desc: "Заполните простую форму — опишите проблему, укажите город и удобное время. Это займёт 2 минуты.",
  },
  {
    icon: Search,
    num: 3,
    title: "Мы подбираем лучшего мастера",
    desc: "Выбираем подходящего специалиста под вашу задачу и сообщаем цену со скидкой.",
  },
  {
    icon: CreditCard,
    num: 4,
    title: "Вы платите мастеру напрямую",
    desc: "Оплата только после выполнения работы. Мы получаем разницу как вознаграждение — всё прозрачно.",
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
              Вызвать мастера
            </Link>
          </Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-card py-16">
        <div className="container max-w-7xl">
          <h2 className="text-heading-md font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-background border-2 border-border rounded-lg p-5 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <b.icon size={28} className="text-primary" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-bold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-background py-16">
        <div className="container max-w-7xl">
          <h2 className="text-heading-md font-bold text-center mb-4">Как это работает</h2>
          <p className="text-body-lg text-muted-foreground text-center mb-12">
            Всего 4 простых шага — и мастер у вас дома
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {steps.map((s) => (
              <div
                key={s.num}
                className="bg-card border-2 border-border rounded-lg p-5 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary mb-4">
                  <span className="text-lg font-extrabold text-primary-foreground">{s.num}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Index;
