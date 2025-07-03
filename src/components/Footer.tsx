import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-rubik">Автопрокат</h3>
            <p className="text-gray-300 mb-4">
              Надежный сервис аренды автомобилей с 2020 года. Более 10 000
              довольных клиентов.
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-300"
              >
                <Icon name="Phone" size={16} />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-300"
              >
                <Icon name="Mail" size={16} />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-300"
              >
                <Icon name="MessageCircle" size={16} />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-rubik">Услуги</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Аренда авто
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Страхование
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Водитель
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-rubik">Компания</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Вакансии
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Отзывы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-rubik">Контакты</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@autorent.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Примерная, 15</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Автопрокат. Все права защищены.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-primary text-sm transition-colors"
            >
              Условия использования
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary text-sm transition-colors"
            >
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
