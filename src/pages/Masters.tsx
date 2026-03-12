import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

// Temporary mock data — will be replaced with Supabase
const mockMasters = [
  {
    id: "1",
    name: "Иван Петров",
    services: ["Сантехника", "Ремонт квартир"],
    city: "Москва",
    experience: 12,
    bio: "Опытный сантехник и мастер по ремонту. Работаю аккуратно и в срок.",
    discount_percent: 15,
    photo_url: null,
  },
  {
    id: "2",
    name: "Сергей Козлов",
    services: ["Электрика"],
    city: "Санкт-Петербург",
    experience: 8,
    bio: "Электрик с допуском. Монтаж проводки, установка щитков, розеток.",
    discount_percent: 20,
    photo_url: null,
  },
  {
    id: "3",
    name: "Алексей Сидоров",
    services: ["Грузчики"],
    city: "Москва",
    experience: 5,
    bio: "Переезды, подъём мебели. Бригада из 3 человек. Быстро и бережно.",
    discount_percent: 10,
    photo_url: null,
  },
  {
    id: "4",
    name: "Дмитрий Волков",
    services: ["Сварка", "Ремонт квартир"],
    city: "Казань",
    experience: 15,
    bio: "Сварщик 6-го разряда. Ворота, решётки, перила — любая сложность.",
    discount_percent: 18,
    photo_url: null,
  },
];

const allCities = [...new Set(mockMasters.map((m) => m.city))];
const allServices = [...new Set(mockMasters.flatMap((m) => m.services))];

const Masters = () => {
  const [cityFilter, setCityFilter] = useState("");
  const [serviceFilter, setServiceFilter] = useState("");

  const filtered = mockMasters.filter((m) => {
    if (cityFilter && m.city !== cityFilter) return false;
    if (serviceFilter && !m.services.includes(serviceFilter)) return false;
    return true;
  });

  return (
    <Layout>
      <section className="py-16">
        <div className="container">
          <h1 className="text-heading-lg font-extrabold text-center mb-4">Наши мастера</h1>
          <p className="text-body-lg text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            Все мастера проверены лично. Контакты не публикуются — заявки проходят через нас.
          </p>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 max-w-2xl mx-auto">
            <select
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="flex-1 min-h-btn border-2 border-input rounded-lg px-4 text-body bg-background focus:outline-none focus:ring-4 focus:ring-ring"
              aria-label="Фильтр по городу"
            >
              <option value="">Все города</option>
              {allCities.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <select
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
              className="flex-1 min-h-btn border-2 border-input rounded-lg px-4 text-body bg-background focus:outline-none focus:ring-4 focus:ring-ring"
              aria-label="Фильтр по услуге"
            >
              <option value="">Все услуги</option>
              {allServices.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Masters grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((m) => (
              <div
                key={m.id}
                className="bg-card border-2 border-border rounded-lg p-8"
              >
                <div className="flex items-start gap-5 mb-5">
                  <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    {m.photo_url ? (
                      <img src={m.photo_url} alt={m.name} className="w-20 h-20 rounded-full object-cover" />
                    ) : (
                      <User size={36} className="text-primary" />
                    )}
                  </div>
                  <div>
                    <h2 className="text-heading-sm font-bold">{m.name}</h2>
                    <p className="text-body text-muted-foreground">{m.city} • Опыт: {m.experience} лет</p>
                  </div>
                </div>

                <p className="text-body mb-3">{m.bio}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {m.services.map((s) => (
                    <span key={s} className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-md text-lg">
                      {s}
                    </span>
                  ))}
                </div>

                <p className="text-body-lg font-bold text-primary mb-5">
                  Скидка для наших клиентов: {m.discount_percent}%
                </p>

                <Button asChild size="lg" className="w-full">
                  <Link
                    to={`/request?master=${encodeURIComponent(m.name)}`}
                    aria-label={`Оставить заявку на мастера ${m.name}`}
                  >
                    Оставить заявку на этого мастера
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-body-lg text-muted-foreground text-center py-10">
              Мастера не найдены. Попробуйте изменить фильтры.
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Masters;
