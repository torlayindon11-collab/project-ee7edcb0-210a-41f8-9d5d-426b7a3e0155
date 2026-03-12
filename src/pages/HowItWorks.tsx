import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { UserCheck, FileText, Search, CreditCard } from "lucide-react";

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
    title: "Вы платите мастеру напрямую по сниженной цене",
    desc: "Оплата только после выполнения работы. Мы получаем разницу как вознаграждение — всё прозрачно.",
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container max-w-4xl">
          <h1 className="text-heading-lg font-extrabold text-center mb-4">Как это работает</h1>
          <p className="text-body-lg text-muted-foreground text-center mb-14">
            Всего 4 простых шага — и мастер у вас дома
          </p>

          <div className="space-y-10">
            {steps.map((s) => (
              <div
                key={s.num}
                className="flex items-start gap-6 bg-card border-2 border-border rounded-lg p-8"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-heading-sm font-extrabold text-primary-foreground">{s.num}</span>
                </div>
                <div>
                  <h2 className="text-heading-sm font-bold mb-2">{s.title}</h2>
                  <p className="text-body text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Button variant="hero" size="lg" asChild>
              <Link to="/request">Оставить заявку</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
