import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

const Header = () => {
  const navigation = [
    { name: "Главная", href: "#" },
    { name: "Наши авто", href: "#" },
    { name: "Услуги", href: "#" },
    { name: "О компании", href: "#" },
    { name: "Контакты", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Car" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-dark font-rubik">
              Автопрокат
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-700">
              <Icon name="Phone" size={16} />
              <span className="font-medium">+7 (495) 123-45-67</span>
            </div>
            <Button>Забронировать</Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Icon name="Menu" size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Car" size={20} className="text-white" />
                  </div>
                  <span className="text-xl font-bold text-dark font-rubik">
                    Автопрокат
                  </span>
                </div>

                <nav className="flex flex-col gap-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-700 hover:text-primary transition-colors font-medium py-2"
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>

                <div className="border-t pt-6">
                  <div className="flex items-center gap-2 text-gray-700 mb-4">
                    <Icon name="Phone" size={16} />
                    <span className="font-medium">+7 (495) 123-45-67</span>
                  </div>
                  <Button className="w-full">Забронировать</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
