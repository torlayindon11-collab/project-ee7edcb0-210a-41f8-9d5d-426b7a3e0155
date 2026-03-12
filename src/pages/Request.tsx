import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const serviceOptions = [
  "Сантехника",
  "Электрика",
  "Грузчики",
  "Ремонт квартир",
  "Сварка",
  "Другое",
];

const Request = () => {
  const [searchParams] = useSearchParams();
  const prefilledMaster = searchParams.get("master") || "";
  const prefilledService = searchParams.get("service") || "";

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    service: prefilledService,
    description: "",
    when: "",
    master: prefilledMaster,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Simple phone formatting
    let value = e.target.value.replace(/[^\d+\-() ]/g, "");
    setForm({ ...form, phone: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will be replaced with Supabase insert
    console.log("Request submitted:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <section className="py-24">
          <div className="container max-w-2xl text-center">
            <CheckCircle size={80} className="text-primary mx-auto mb-6" />
            <h1 className="text-heading-lg font-extrabold mb-4">Заявка отправлена!</h1>
            <p className="text-body-lg text-muted-foreground">
              Спасибо! Мы свяжемся с вами в течение 30 минут.
            </p>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-16">
        <div className="container max-w-2xl">
          <h1 className="text-heading-lg font-extrabold text-center mb-4">Оставить заявку</h1>
          <p className="text-body-lg text-muted-foreground text-center mb-10">
            Заполните форму — мы перезвоним и подберём мастера
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Имя */}
            <div>
              <label htmlFor="name" className="block text-body font-semibold mb-2">Ваше имя</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full min-h-btn border-2 border-input rounded-lg px-4 text-body bg-background focus:outline-none focus:ring-4 focus:ring-ring"
                placeholder="Например, Мария"
              />
            </div>

            {/* Телефон */}
            <div>
              <label htmlFor="phone" className="block text-body font-semibold mb-2">Телефон <span className="text-primary">*</span></label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handlePhoneChange}
                className="w-full min-h-btn border-2 border-input rounded-lg px-4 text-body bg-background focus:outline-none focus:ring-4 focus:ring-ring"
                placeholder="+7 (___) ___-__-__"
              />
            </div>

            {/* Город */}
            <div>
              <label htmlFor="city" className="block text-body font-semibold mb-2">Город / район</label>
              <input
                id="city"
                name="city"
                type="text"
                value={form.city}
                onChange={handleChange}
                className="w-full min-h-btn border-2 border-input rounded-lg px-4 text-body bg-background focus:outline-none focus:ring-4 focus:ring-ring"
                placeholder="Например, Москва, Южное Бутово"
              />
            </div>

            {/* Услуга */}
            <div>
              <label htmlFor="service" className="block text-body font-semibold mb-2">Категория услуги</label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full min-h-btn border-2 border-input rounded-lg px-4 text-body bg-background focus:outline-none focus:ring-4 focus:ring-ring"
              >
                <option value="">Выберите услугу</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Описание */}
            <div>
              <label htmlFor="description" className="block text-body font-semibold mb-2">Описание проблемы</label>
              <textarea
                id="description"
                name="description"
                rows={5}
                value={form.description}
                onChange={handleChange}
                className="w-full border-2 border-input rounded-lg p-4 text-body bg-background focus:outline-none focus:ring-4 focus:ring-ring resize-y"
                placeholder="Опишите, что нужно сделать"
              />
            </div>

            {/* Когда */}
            <div>
              <label htmlFor="when" className="block text-body font-semibold mb-2">Когда нужно</label>
              <input
                id="when"
                name="when"
                type="text"
                value={form.when}
                onChange={handleChange}
                className="w-full min-h-btn border-2 border-input rounded-lg px-4 text-body bg-background focus:outline-none focus:ring-4 focus:ring-ring"
                placeholder="Например, завтра утром или 15 марта"
              />
            </div>

            {/* Мастер */}
            {form.master && (
              <div>
                <label htmlFor="master" className="block text-body font-semibold mb-2">Выбранный мастер</label>
                <input
                  id="master"
                  name="master"
                  type="text"
                  value={form.master}
                  onChange={handleChange}
                  className="w-full min-h-btn border-2 border-input rounded-lg px-4 text-body bg-background focus:outline-none focus:ring-4 focus:ring-ring"
                  readOnly
                />
              </div>
            )}

            <Button type="submit" variant="hero" size="lg" className="w-full" aria-label="Отправить заявку">
              Отправить заявку
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Request;
