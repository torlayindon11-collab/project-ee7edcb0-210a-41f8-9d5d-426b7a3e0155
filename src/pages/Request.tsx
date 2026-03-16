import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const serviceOptions = [
  "Сантехника",
  "Электрика",
  "Грузоперевозки",
  "Мелкий ремонт",
  "Сварка",
  "Клининг",
  "Компьютерный мастер",
  "Другое",
];

const cityOptions = ["Москва", "Краснодар"];

const Request = () => {
  const [searchParams] = useSearchParams();
  const prefilledMaster = searchParams.get("master") || "";
  const prefilledService = searchParams.get("service") || "";
  const prefilledCity = searchParams.get("city") || "";

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: prefilledCity,
    address: "",
    service: prefilledService,
    description: "",
    when: "",
    master: prefilledMaster,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formatPhone = (digits: string) => {
    // digits = only numeric chars after "7"
    let result = "+7";
    if (digits.length > 0) result += " (" + digits.substring(0, 3);
    if (digits.length >= 3) result += ") " + digits.substring(3, 6);
    if (digits.length >= 6) result += "-" + digits.substring(6, 8);
    if (digits.length >= 8) result += "-" + digits.substring(8, 10);
    return result;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    // Remove leading 7 or 8 if present
    const digits = raw.startsWith("7") ? raw.slice(1) : raw.startsWith("8") ? raw.slice(1) : raw;
    const trimmed = digits.slice(0, 10);
    setForm({ ...form, phone: formatPhone(trimmed) });
  };

  const handlePhoneFocus = () => {
    if (!form.phone) {
      setForm({ ...form, phone: "+7" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
                onFocus={handlePhoneFocus}
                className="w-full min-h-btn border-2 border-input rounded-lg px-4 text-body bg-background focus:outline-none focus:ring-4 focus:ring-ring"
                placeholder="+7 (___) ___-__-__"
              />
            </div>

            {/* Город */}
            <div>
              <label htmlFor="city" className="block text-body font-semibold mb-2">Город <span className="text-primary">*</span></label>
              <select
                id="city"
                name="city"
                required
                value={form.city}
                onChange={handleChange}
                className="w-full min-h-btn border-2 border-input rounded-lg px-4 text-body bg-background focus:outline-none focus:ring-4 focus:ring-ring"
              >
                <option value="">Выберите город</option>
                {cityOptions.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Адрес */}
            <div>
              <label htmlFor="address" className="block text-body font-semibold mb-2">Адрес <span className="text-primary">*</span></label>
              <input
                id="address"
                name="address"
                type="text"
                required
                value={form.address}
                onChange={handleChange}
                className="w-full min-h-btn border-2 border-input rounded-lg px-4 text-body bg-background focus:outline-none focus:ring-4 focus:ring-ring"
                placeholder="Улица, дом, квартира"
              />
            </div>

            {/* Услуга */}
            <div>
              <label htmlFor="service" className="block text-body font-semibold mb-2">Категория услуги <span className="text-primary">*</span></label>
              <select
                id="service"
                name="service"
                required
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
              <label htmlFor="description" className="block text-body font-semibold mb-2">Описание проблемы <span className="text-primary">*</span></label>
              <textarea
                id="description"
                name="description"
                rows={5}
                required
                value={form.description}
                onChange={handleChange}
                className="w-full border-2 border-input rounded-lg p-4 text-body bg-background focus:outline-none focus:ring-4 focus:ring-ring resize-y"
                placeholder="Опишите, что нужно сделать"
              />
            </div>

            {/* Когда */}
            <div>
              <label htmlFor="when" className="block text-body font-semibold mb-2">Когда нужно <span className="text-primary">*</span></label>
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
