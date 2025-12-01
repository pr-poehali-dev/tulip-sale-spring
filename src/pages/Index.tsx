import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("main");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const catalog = [
    {
      id: 1,
      name: "Розовый рассвет",
      price: "1 500 ₽",
      image: "https://cdn.poehali.dev/projects/ace967d9-d7b8-47d5-8430-5bb0ed8e9fd5/files/e1b44e70-a9f6-4fae-8219-0ccd5af6c304.jpg",
      season: "Март - Май",
      available: true,
      delivery: "1-2 дня"
    },
    {
      id: 2,
      name: "Солнечное утро",
      price: "1 200 ₽",
      image: "https://cdn.poehali.dev/projects/ace967d9-d7b8-47d5-8430-5bb0ed8e9fd5/files/ea316aca-8783-4c31-ad76-cee6bfd8d836.jpg",
      season: "Апрель - Май",
      available: true,
      delivery: "1-2 дня"
    },
    {
      id: 3,
      name: "Фиолетовая мечта",
      price: "1 800 ₽",
      image: "https://cdn.poehali.dev/projects/ace967d9-d7b8-47d5-8430-5bb0ed8e9fd5/files/28db233e-8b39-447c-82ff-72b4a2d57706.jpg",
      season: "Март - Апрель",
      available: true,
      delivery: "2-3 дня"
    },
    {
      id: 4,
      name: "Весенний микс",
      price: "2 000 ₽",
      image: "https://cdn.poehali.dev/projects/ace967d9-d7b8-47d5-8430-5bb0ed8e9fd5/files/e1b44e70-a9f6-4fae-8219-0ccd5af6c304.jpg",
      season: "Март - Май",
      available: true,
      delivery: "1-2 дня"
    },
    {
      id: 5,
      name: "Коралловый закат",
      price: "1 600 ₽",
      image: "https://cdn.poehali.dev/projects/ace967d9-d7b8-47d5-8430-5bb0ed8e9fd5/files/ea316aca-8783-4c31-ad76-cee6bfd8d836.jpg",
      season: "Апрель - Июнь",
      available: false,
      delivery: "Скоро в наличии"
    },
    {
      id: 6,
      name: "Белоснежное чудо",
      price: "1 700 ₽",
      image: "https://cdn.poehali.dev/projects/ace967d9-d7b8-47d5-8430-5bb0ed8e9fd5/files/28db233e-8b39-447c-82ff-72b4a2d57706.jpg",
      season: "Март - Май",
      available: true,
      delivery: "1-2 дня"
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Анна К.",
      rating: 5,
      text: "Потрясающие тюльпаны! Простояли две недели, очень свежие. Доставка точно в срок.",
      date: "15 марта 2024"
    },
    {
      id: 2,
      name: "Михаил С.",
      rating: 5,
      text: "Заказывал на 8 марта, всё было идеально. Букет превзошёл ожидания!",
      date: "10 марта 2024"
    },
    {
      id: 3,
      name: "Елена В.",
      rating: 5,
      text: "Лучшие тюльпаны в городе! Яркие, крупные бутоны. Обязательно закажу ещё.",
      date: "5 марта 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[hsl(var(--spring-green))] to-white">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🌷</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Тюльпаны
              </span>
            </div>
            <div className="hidden md:flex gap-6">
              {[
                { id: "main", label: "Главная" },
                { id: "catalog", label: "Каталог" },
                { id: "about", label: "О товаре" },
                { id: "gallery", label: "Галерея" },
                { id: "delivery", label: "Доставка" },
                { id: "reviews", label: "Отзывы" },
                { id: "contacts", label: "Контакты" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? "text-primary" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="main" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Первые гонцы
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  весны
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Тюльпаны — яркие вестники весны и символ любви. Объяснитесь в чувствах своим прекрасным половинам с помощью нежных букетов.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8"
                  onClick={() => scrollToSection("catalog")}
                >
                  Выбрать букет
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-2"
                  onClick={() => scrollToSection("delivery")}
                >
                  Условия доставки
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600 mt-1">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary">24ч</div>
                  <div className="text-sm text-gray-600 mt-1">Свежесть гарантируем</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent">15+</div>
                  <div className="text-sm text-gray-600 mt-1">Сортов тюльпанов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
              <img
                src="https://cdn.poehali.dev/projects/ace967d9-d7b8-47d5-8430-5bb0ed8e9fd5/files/e1b44e70-a9f6-4fae-8219-0ccd5af6c304.jpg"
                alt="Тюльпаны"
                className="relative rounded-3xl shadow-2xl w-full animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Каталог букетов</h2>
            <p className="text-xl text-gray-600">Выберите идеальный букет для особенного момента</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalog.map((item, index) => (
              <Card
                key={item.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover"
                  />
                  {item.available ? (
                    <Badge className="absolute top-4 right-4 bg-green-500">В наличии</Badge>
                  ) : (
                    <Badge className="absolute top-4 right-4 bg-gray-400">Нет в наличии</Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <Icon name="Calendar" size={16} />
                    <span>Сезон: {item.season}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <Icon name="Truck" size={16} />
                    <span>Доставка: {item.delivery}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary">{item.price}</span>
                    <Button className="bg-primary hover:bg-primary/90" disabled={!item.available}>
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-r from-[hsl(var(--spring-green))] to-[hsl(var(--spring-yellow))]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">Почему наши тюльпаны?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Flower2" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Голландские сорта</h3>
                    <p className="text-gray-700">Прямые поставки от ведущих производителей Нидерландов</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Icon name="Droplets" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Максимальная свежесть</h3>
                    <p className="text-gray-700">Цветы срезаются за 24 часа до доставки</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Heart" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">С любовью к деталям</h3>
                    <p className="text-gray-700">Каждый букет упаковывается флористами вручную</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://cdn.poehali.dev/projects/ace967d9-d7b8-47d5-8430-5bb0ed8e9fd5/files/ea316aca-8783-4c31-ad76-cee6bfd8d836.jpg"
                alt="Тюльпаны"
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
              <img
                src="https://cdn.poehali.dev/projects/ace967d9-d7b8-47d5-8430-5bb0ed8e9fd5/files/28db233e-8b39-447c-82ff-72b4a2d57706.jpg"
                alt="Тюльпаны"
                className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
              />
              <img
                src="https://cdn.poehali.dev/projects/ace967d9-d7b8-47d5-8430-5bb0ed8e9fd5/files/e1b44e70-a9f6-4fae-8219-0ccd5af6c304.jpg"
                alt="Тюльпаны"
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
              <img
                src="https://cdn.poehali.dev/projects/ace967d9-d7b8-47d5-8430-5bb0ed8e9fd5/files/ea316aca-8783-4c31-ad76-cee6bfd8d836.jpg"
                alt="Тюльпаны"
                className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Галерея</h2>
            <p className="text-xl text-gray-600">Наши лучшие композиции</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={item}
                className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={`https://cdn.poehali.dev/projects/ace967d9-d7b8-47d5-8430-5bb0ed8e9fd5/files/${
                    index % 3 === 0
                      ? "e1b44e70-a9f6-4fae-8219-0ccd5af6c304"
                      : index % 3 === 1
                      ? "ea316aca-8783-4c31-ad76-cee6bfd8d836"
                      : "28db233e-8b39-447c-82ff-72b4a2d57706"
                  }.jpg`}
                  alt={`Галерея ${item}`}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-1">Букет №{item}</h3>
                    <p className="text-sm">Весенняя коллекция</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Доставка</h2>
            <p className="text-xl text-gray-600">Быстро и бережно привезём весеннее настроение</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Truck" size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Стандартная доставка</h3>
              </div>
              <p className="text-gray-600 mb-4">Доставим в течение 1-2 дней с момента заказа</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>По городу — 300 ₽</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Пригород — 500 ₽</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Бесплатно при заказе от 3000 ₽</span>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Icon name="Zap" size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Экспресс доставка</h3>
              </div>
              <p className="text-gray-600 mb-4">Доставим в течение 3-4 часов после заказа</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>По городу — 600 ₽</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Точное время доставки</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Доступна с 9:00 до 20:00</span>
                </div>
              </div>
            </Card>
          </div>
          <Card className="mt-8 p-6 bg-gradient-to-r from-[hsl(var(--spring-yellow))] to-[hsl(var(--spring-green))] border-0">
            <div className="flex items-start gap-4">
              <Icon name="Info" size={24} className="text-primary mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Сезонность доставки</h3>
                <p className="text-gray-700">
                  Обратите внимание: некоторые сорта тюльпанов доступны только в определённые месяцы. 
                  Сроки доставки могут варьироваться в зависимости от сезона и наличия цветов. 
                  Мы гарантируем свежесть каждого букета!
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Отзывы</h2>
            <p className="text-xl text-gray-600">Что говорят наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card
                key={review.id}
                className="p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-bold">{review.name}</span>
                  <span className="text-gray-500">{review.date}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-b from-[hsl(var(--spring-green))] to-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами любым удобным способом</p>
          </div>
          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Наши контакты</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="Phone" size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Телефон</div>
                      <div className="font-bold">+7 (999) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <Icon name="Mail" size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Email</div>
                      <div className="font-bold">info@tulips.ru</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                      <Icon name="MapPin" size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Адрес</div>
                      <div className="font-bold">ул. Весенняя, 123</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="Clock" size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Режим работы</div>
                      <div className="font-bold">Ежедневно 9:00 - 21:00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea
                    placeholder="Сообщение"
                    rows={4}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                    Отправить сообщение
                  </Button>
                </form>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl">🌷</span>
            <span className="text-2xl font-bold">Тюльпаны</span>
          </div>
          <p className="text-gray-400 mb-6">Первые гонцы весны — объяснитесь в любви!</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
          </div>
          <p className="text-sm text-gray-500">© 2024 Тюльпаны. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
