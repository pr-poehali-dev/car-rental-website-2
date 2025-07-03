import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const CarCatalog = () => {
  const cars = [
    {
      id: 1,
      name: "Toyota Camry",
      class: "Комфорт",
      price: "2 800",
      image: "/placeholder.svg",
      features: ["Автомат", "Кондиционер", "5 мест"],
      rating: 4.8,
      available: true,
    },
    {
      id: 2,
      name: "BMW 3 Series",
      class: "Бизнес",
      price: "4 500",
      image: "/placeholder.svg",
      features: ["Автомат", "Кожа", "Навигация"],
      rating: 4.9,
      available: true,
    },
    {
      id: 3,
      name: "Kia Rio",
      class: "Эконом",
      price: "1 800",
      image: "/placeholder.svg",
      features: ["Механика", "Кондиционер", "5 мест"],
      rating: 4.5,
      available: false,
    },
    {
      id: 4,
      name: "Mercedes E-Class",
      class: "Премиум",
      price: "6 200",
      image: "/placeholder.svg",
      features: ["Автомат", "Кожа", "Люк"],
      rating: 5.0,
      available: true,
    },
    {
      id: 5,
      name: "Hyundai Solaris",
      class: "Эконом",
      price: "2 100",
      image: "/placeholder.svg",
      features: ["Автомат", "Кондиционер", "5 мест"],
      rating: 4.6,
      available: true,
    },
    {
      id: 6,
      name: "Audi A6",
      class: "Премиум",
      price: "5 800",
      image: "/placeholder.svg",
      features: ["Автомат", "Кожа", "Quattro"],
      rating: 4.9,
      available: true,
    },
  ];

  const getClassColor = (carClass: string) => {
    switch (carClass) {
      case "Эконом":
        return "bg-green-100 text-green-800";
      case "Комфорт":
        return "bg-blue-100 text-blue-800";
      case "Бизнес":
        return "bg-purple-100 text-purple-800";
      case "Премиум":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4 font-rubik">
            Наш автопарк
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Современные и надежные автомобили для любых потребностей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <Card
              key={car.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <CardHeader className="p-0">
                <div className="relative">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge
                    className={`absolute top-4 left-4 ${getClassColor(car.class)}`}
                  >
                    {car.class}
                  </Badge>
                  {!car.available && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-medium">Недоступен</span>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-rubik">
                    {car.name}
                  </CardTitle>
                  <div className="flex items-center gap-1">
                    <Icon
                      name="Star"
                      size={16}
                      className="text-yellow-500 fill-current"
                    />
                    <span className="text-sm font-medium">{car.rating}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {car.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">
                      {car.price}
                    </span>
                    <span className="text-gray-500 ml-1">₽/день</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button
                  className="w-full"
                  disabled={!car.available}
                  variant={car.available ? "default" : "outline"}
                >
                  {car.available ? "Забронировать" : "Недоступен"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Показать все автомобили
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCatalog;
