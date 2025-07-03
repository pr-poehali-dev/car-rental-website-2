import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Search } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  return (
    <div className="relative bg-gradient-to-br from-light to-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-dark mb-6 font-rubik">
            Аренда авто
            <span className="text-primary"> просто</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-rubik">
            Выберите идеальный автомобиль для вашей поездки из нашего
            современного автопарка
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Класс автомобиля
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите класс" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="economy">Эконом</SelectItem>
                  <SelectItem value="comfort">Комфорт</SelectItem>
                  <SelectItem value="business">Бизнес</SelectItem>
                  <SelectItem value="premium">Премиум</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Дата начала
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !startDate && "text-muted-foreground",
                    )}
                  >
                    <Icon name="Calendar" size={16} />
                    {startDate
                      ? format(startDate, "dd.MM.yyyy")
                      : "Выберите дату"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Дата окончания
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !endDate && "text-muted-foreground",
                    )}
                  >
                    <Icon name="Calendar" size={16} />
                    {endDate ? format(endDate, "dd.MM.yyyy") : "Выберите дату"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Город</label>
              <Input placeholder="Москва" />
            </div>
          </div>

          <Button
            size="lg"
            className="w-full md:w-auto px-8 py-3 text-lg font-medium"
          >
            <Icon name="Search" size={20} />
            Найти автомобиль
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
