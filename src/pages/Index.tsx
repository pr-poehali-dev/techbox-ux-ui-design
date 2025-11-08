import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);

  const pcComponents = [
    { id: "cpu", name: "Процессор", icon: "Cpu", position: "top-[20%] left-[30%]" },
    { id: "gpu", name: "Видеокарта", icon: "Cpu", position: "top-[45%] left-[25%]" },
    { id: "ram", name: "ОЗУ", icon: "MemoryStick", position: "top-[25%] right-[30%]" },
    { id: "ssd", name: "SSD", icon: "HardDrive", position: "top-[55%] right-[25%]" },
    { id: "psu", name: "Блок питания", icon: "Zap", position: "bottom-[15%] left-[35%]" },
    { id: "cooling", name: "Охлаждение", icon: "Wind", position: "top-[15%] left-[50%]" },
  ];

  const categories = [
    { name: "Видеокарты", icon: "Cpu", color: "from-green-500 to-emerald-500" },
    { name: "Процессоры", icon: "Cpu", color: "from-blue-500 to-cyan-500" },
    { name: "Материнские платы", icon: "CircuitBoard", color: "from-purple-500 to-pink-500" },
    { name: "ОЗУ", icon: "MemoryStick", color: "from-yellow-500 to-orange-500" },
    { name: "SSD", icon: "HardDrive", color: "from-red-500 to-rose-500" },
    { name: "Блоки питания", icon: "Zap", color: "from-indigo-500 to-blue-500" },
    { name: "Охлаждение", icon: "Wind", color: "from-teal-500 to-cyan-500" },
    { name: "Периферия", icon: "Gamepad2", color: "from-violet-500 to-purple-500" },
  ];

  const topProducts = [
    {
      name: "NVIDIA RTX 4090",
      image: "https://cdn.poehali.dev/projects/a4932794-156b-471c-ae32-8094d1739cb8/files/ff0ad0d5-ef78-46aa-9110-02218d0c369d.jpg",
      oldPrice: 189990,
      price: 169990,
      rating: 4.9,
      badge: "Топ продаж"
    },
    {
      name: "AMD Ryzen 9 7950X",
      image: "https://cdn.poehali.dev/projects/a4932794-156b-471c-ae32-8094d1739cb8/files/4b96d70d-bcbb-47b3-8dee-e269cb0b8dce.jpg",
      oldPrice: 54990,
      price: 49990,
      rating: 4.8,
      badge: "Выгодно"
    },
    {
      name: "Intel Core i9-14900K",
      image: "https://cdn.poehali.dev/projects/a4932794-156b-471c-ae32-8094d1739cb8/files/4b96d70d-bcbb-47b3-8dee-e269cb0b8dce.jpg",
      oldPrice: 62990,
      price: 57990,
      rating: 4.7,
      badge: "Хит"
    },
  ];

  const builds = [
    {
      name: "Игровой ПК до 100к",
      specs: ["AMD Ryzen 5 7600X", "RTX 4060 Ti", "16GB DDR5", "1TB NVMe SSD"],
      price: 99990,
      image: "https://cdn.poehali.dev/projects/a4932794-156b-471c-ae32-8094d1739cb8/files/bbc329e5-3143-49ca-8e33-595088a97054.jpg"
    },
    {
      name: "Бюджетная офисная сборка",
      specs: ["Intel Core i3-13100", "Integrated Graphics", "16GB DDR4", "512GB SSD"],
      price: 45990,
      image: "https://cdn.poehali.dev/projects/a4932794-156b-471c-ae32-8094d1739cb8/files/bbc329e5-3143-49ca-8e33-595088a97054.jpg"
    },
    {
      name: "Мощная рабочая станция",
      specs: ["AMD Ryzen 9 7950X", "RTX 4080", "64GB DDR5", "2TB NVMe SSD"],
      price: 289990,
      image: "https://cdn.poehali.dev/projects/a4932794-156b-471c-ae32-8094d1739cb8/files/bbc329e5-3143-49ca-8e33-595088a97054.jpg"
    },
  ];

  const benefits = [
    { icon: "CheckCircle2", text: "Гарантия совместимости" },
    { icon: "TestTube", text: "Тест всех компонентов" },
    { icon: "Truck", text: "Быстрая доставка" },
    { icon: "Headphones", text: "Поддержка 24/7" },
  ];

  const reviews = [
    { name: "Алексей М.", text: "Собрал игровой ПК по конфигуратору. Всё работает идеально!", rating: 5 },
    { name: "Мария К.", text: "Отличный сервис, быстрая доставка. Рекомендую!", rating: 5 },
    { name: "Дмитрий В.", text: "Цены ниже чем у конкурентов, качество на высоте", rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center neon-glow">
              <Icon name="Box" className="text-primary-foreground" size={24} />
            </div>
            <span className="text-2xl font-bold neon-text">TechBox</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
            <a href="#configurator" className="hover:text-primary transition-colors">Конфигуратор</a>
            <a href="#builds" className="hover:text-primary transition-colors">Сборки</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="ShoppingCart" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="User" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <Badge variant="secondary" className="text-sm px-4 py-2 mb-4 neon-glow">
                Новое поколение комплектующих
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Собери свой <span className="neon-text text-primary">легендарный</span> ПК
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Подбор комплектующих с гарантией совместимости и лучшей цены
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-lg px-8 py-6 neon-glow hover:scale-105 transition-transform">
                <Icon name="Cpu" className="mr-2" size={24} />
                Конфигуратор ПК
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:bg-secondary hover:scale-105 transition-transform">
                <Icon name="Grid3x3" className="mr-2" size={24} />
                Каталог товаров
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section id="configurator" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Конфигуратор ПК</h2>
            <p className="text-muted-foreground text-lg">Подбери комплектующие мечты за 5 минут</p>
          </div>
          <Card className="p-8 bg-card/50 backdrop-blur border-border/50 max-w-4xl mx-auto hover:shadow-xl transition-shadow">
            <div className="grid md:grid-cols-2 gap-6">
              {categories.slice(0, 6).map((category, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  className="h-auto p-6 flex items-center justify-between hover:bg-secondary/80 hover:border-primary/50 transition-all group"
                  onClick={() => setActiveCategory(category.name)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon name={category.icon as any} className="text-white" size={24} />
                    </div>
                    <span className="font-semibold text-left">{category.name}</span>
                  </div>
                  <Icon name="ChevronRight" size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </Button>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Категории товаров</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, idx) => (
              <Card
                key={idx}
                className="p-6 text-center cursor-pointer hover:bg-secondary/50 transition-all hover:scale-105 hover:shadow-lg border-border/50 group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform`}>
                  <Icon name={category.icon as any} className="text-white" size={32} />
                </div>
                <h3 className="font-semibold">{category.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Хиты продаж и акции</h2>
              <p className="text-muted-foreground">Лучшие предложения этой недели</p>
            </div>
            <Button variant="outline">
              Все товары
              <Icon name="ArrowRight" className="ml-2" size={16} />
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {topProducts.map((product, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow group border-border/50 bg-card/50 backdrop-blur">
                <div className="relative overflow-hidden aspect-square bg-secondary/50">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <Badge className="absolute top-4 left-4 neon-glow">{product.badge}</Badge>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{product.rating}</span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-primary">{product.price.toLocaleString()} ₽</span>
                    <span className="text-sm text-muted-foreground line-through">{product.oldPrice.toLocaleString()} ₽</span>
                  </div>
                  <Button className="w-full neon-glow hover:scale-105 transition-transform">
                    <Icon name="ShoppingCart" className="mr-2" size={16} />
                    В корзину
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="builds" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Сборки недели</h2>
            <p className="text-muted-foreground text-lg">Готовые конфигурации от экспертов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {builds.map((build, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all hover:scale-105 border-border/50 bg-card/50 backdrop-blur">
                <div className="relative aspect-video overflow-hidden">
                  <img src={build.image} alt={build.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold">{build.name}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-2 mb-4">
                    {build.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-primary mb-4">{build.price.toLocaleString()} ₽</div>
                  <Button className="w-full hover:scale-105 transition-transform">
                    <Icon name="ShoppingCart" className="mr-2" size={16} />
                    Добавить в корзину
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Почему мы?</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="p-8 text-center hover:bg-secondary/50 transition-all hover:scale-105 border-border/50 group">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:neon-glow transition-all">
                  <Icon name={benefit.icon as any} className="text-primary" size={32} />
                </div>
                <p className="font-semibold">{benefit.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-muted-foreground text-lg">Что говорят о нас</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, idx) => (
              <Card key={idx} className="p-6 border-border/50 bg-card/50 backdrop-blur hover:shadow-lg transition-shadow">
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Icon name="User" className="text-primary-foreground" size={20} />
                  </div>
                  <span className="font-semibold">{review.name}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center neon-glow">
                  <Icon name="Box" className="text-primary-foreground" size={20} />
                </div>
                <span className="text-xl font-bold neon-text">TechBox</span>
              </div>
              <p className="text-sm text-muted-foreground">Твой магазин компьютерных комплектующих</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Видеокарты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Процессоры</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Материнские платы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Покупателям</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гарантия</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@techbox.ru
                </li>
              </ul>
              <div className="flex gap-3 mt-4">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            <p>© 2024 TechBox. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;