import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Benefits = () => {
  const benefits = [
    {
      icon: "Shield",
      title: "Полная страховка",
      description:
        "Все автомобили застрахованы КАСКО и ОСАГО. Дополнительная защита от угона и ДТП.",
    },
    {
      icon: "Truck",
      title: "Бесплатная доставка",
      description:
        "Привезём автомобиль к вам в любую точку города в удобное время.",
    },
    {
      icon: "CreditCard",
      title: "Онлайн оплата",
      description:
        "Удобная оплата картой или через интернет-банк. Безопасные платежи.",
    },
    {
      icon: "Users",
      title: "Программа лояльности",
      description:
        "Накапливайте баллы за каждую поездку и получайте скидки до 15%.",
    },
    {
      icon: "Clock",
      title: "Круглосуточная поддержка",
      description: "Наши специалисты готовы помочь в любое время дня и ночи.",
    },
    {
      icon: "Calendar",
      title: "Гибкие условия",
      description:
        "Аренда от 1 часа до нескольких месяцев. Выгодные тарифы на длительную аренду.",
    },
  ];

  return (
    <div className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4 font-rubik">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем лучшие условия аренды автомобилей в городе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow bg-white"
            >
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Icon name={benefit.icon} size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl font-rubik text-dark">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
