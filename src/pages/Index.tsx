import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);
  const [isDarkTheme] = useState(true);

  const pcComponents = [
    { id: "cpu", name: "Процессор", icon: "Cpu", position: "top-[20%] left-[30%]" },
    { id: "gpu", name: "Видеокарта", icon: "MonitorPlay", position: "top-[45%] left-[25%]" },
    { id: "ram", name: "ОЗУ", icon: "MemoryStick", position: "top-[25%] right-[30%]" },
    { id: "ssd", name: "SSD", icon: "HardDrive", position: "top-[55%] right-[25%]" },
    { id: "psu", name: "Блок питания", icon: "Zap", position: "bottom-[15%] left-[35%]" },
    { id: "cooling", name: "Охлаждение", icon: "Wind", position: "top-[15%] left-[50%]" },
  ];

  const categories = [
    { name: "Видеокарты", icon: "MonitorPlay", color: "from-green-500 to-emerald-500" },
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
      badge: "Топ продаж",
      discount: "-11%"
    },
    {
      name: "AMD Ryzen 9 7950X",
      image: "https://cdn.poehali.dev/projects/a4932794-156b-471c-ae32-8094d1739cb8/files/4b96d70d-bcbb-47b3-8dee-e269cb0b8dce.jpg",
      oldPrice: 54990,
      price: 49990,
      rating: 4.8,
      badge: "Выгодно",
      discount: "-9%"
    },
    {
      name: "Intel Core i9-14900K",
      image: "https://cdn.poehali.dev/projects/a4932794-156b-471c-ae32-8094d1739cb8/files/4b96d70d-bcbb-47b3-8dee-e269cb0b8dce.jpg",
      oldPrice: 62990,
      price: 57990,
      rating: 4.7,
      badge: "Хит",
      discount: "-8%"
    },
  ];

  const builds = [
    {
      name: "Игровой ПК до 100к",
      specs: ["AMD Ryzen 5 7600X", "RTX 4060 Ti 8GB", "16GB DDR5", "1TB NVMe SSD"],
      price: 99990,
      image: "https://cdn.poehali.dev/projects/a4932794-156b-471c-ae32-8094d1739cb8/files/1bcc71ce-35c4-4539-877e-d413e540644a.jpg",
      badge: "Популярная"
    },
    {
      name: "Бюджетная офисная сборка",
      specs: ["Intel Core i3-13100", "Integrated Graphics", "16GB DDR4", "512GB SSD"],
      price: 45990,
      image: "https://cdn.poehali.dev/projects/a4932794-156b-471c-ae32-8094d1739cb8/files/1bcc71ce-35c4-4539-877e-d413e540644a.jpg",
      badge: "Хит цены"
    },
    {
      name: "Мощная рабочая станция",
      specs: ["AMD Ryzen 9 7950X", "RTX 4080 16GB", "64GB DDR5", "2TB NVMe SSD"],
      price: 289990,
      image: "https://cdn.poehali.dev/projects/a4932794-156b-471c-ae32-8094d1739cb8/files/1bcc71ce-35c4-4539-877e-d413e540644a.jpg",
      badge: "Премиум"
    },
  ];

  const benefits = [
    { icon: "CheckCircle2", text: "Гарантия совместимости", desc: "Все компоненты протестированы" },
    { icon: "TestTube", text: "Тест перед отправкой", desc: "Каждая сборка проходит проверку" },
    { icon: "Truck", text: "Быстрая доставка", desc: "От 1 дня по Москве" },
    { icon: "Headphones", text: "Поддержка 24/7", desc: "Ответим на любые вопросы" },
  ];

  const reviews = [
    { 
      name: "Алексей М.", 
      text: "Собрал игровой ПК по конфигуратору. Всё работает идеально! Цены приятно удивили.", 
      rating: 5,
      avatar: "AM"
    },
    { 
      name: "Мария К.", 
      text: "Отличный сервис, быстрая доставка. Рекомендую всем, кто собирает ПК!", 
      rating: 5,
      avatar: "МК"
    },
    { 
      name: "Дмитрий В.", 
      text: "Цены ниже чем у конкурентов, качество на высоте. Техподдержка топ!", 
      rating: 5,
      avatar: "ДВ"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/95">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center neon-glow">
              <Icon name="Box" className="text-primary-foreground" size={24} />
            </div>
            <span className="text-2xl font-bold neon-text">TechBox</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
            <a href="#configurator" className="text-sm font-medium hover:text-primary transition-colors">Конфигуратор</a>
            <a href="#builds" className="text-sm font-medium hover:text-primary transition-colors">Сборки</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary relative">
              <Icon name="ShoppingCart" size={20} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full text-xs flex items-center justify-center text-primary-foreground font-bold">3</span>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Icon name="User" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-gradient" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <Badge variant="secondary" className="text-sm px-6 py-2 neon-glow border-primary/30">
              🚀 Новое поколение комплектующих 2024
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight">
              Собери свой<br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                легендарный
              </span> ПК
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              Подбор комплектующих с гарантией совместимости и лучшей цены на рынке
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="text-lg px-10 py-7 neon-glow hover:scale-105 transition-all font-semibold group">
                <Icon name="Cpu" className="mr-2 group-hover:rotate-12 transition-transform" size={24} />
                Конфигуратор ПК
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-primary/30 hover:bg-secondary/80 hover:scale-105 transition-all font-semibold group">
                <Icon name="Grid3x3" className="mr-2 group-hover:scale-110 transition-transform" size={24} />
                Каталог товаров
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">10К+</div>
                <div className="text-sm text-muted-foreground">Товаров</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">50К+</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">Средний рейтинг</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section id="configurator" className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-primary/30 text-primary">Интерактивно</Badge>
            <h2 className="text-5xl font-bold tracking-tight">Конфигуратор ПК</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Подбери комплектующие мечты за 5 минут
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-border/50 max-w-6xl mx-auto hover:shadow-2xl hover:shadow-primary/10 transition-all">
            <div className="relative aspect-video bg-gradient-to-br from-secondary via-secondary/80 to-secondary rounded-xl overflow-hidden mb-8">
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[300px] h-[400px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border-2 border-primary/30 relative shadow-2xl shadow-primary/20">
                  {pcComponents.map((component) => (
                    <div
                      key={component.id}
                      className={`absolute ${component.position} transition-all duration-300`}
                      onMouseEnter={() => setHoveredComponent(component.id)}
                      onMouseLeave={() => setHoveredComponent(null)}
                    >
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all ${
                          hoveredComponent === component.id
                            ? "bg-primary scale-125 neon-glow"
                            : "bg-secondary border border-primary/30 hover:border-primary/60"
                        }`}
                      >
                        <Icon 
                          name={component.icon as any} 
                          size={24} 
                          className={hoveredComponent === component.id ? "text-primary-foreground" : "text-primary"} 
                        />
                      </div>
                      {hoveredComponent === component.id && (
                        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                          <Badge className="neon-glow animate-scale-in">{component.name}</Badge>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {hoveredComponent && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in">
                  <Button className="neon-glow">
                    Выбрать {pcComponents.find(c => c.id === hoveredComponent)?.name}
                  </Button>
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {categories.slice(0, 6).map((category, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  className="h-auto p-5 flex items-center gap-3 justify-start hover:bg-secondary/80 hover:border-primary/50 transition-all group border-border/50"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon name={category.icon as any} className="text-white" size={20} />
                  </div>
                  <span className="font-semibold text-left">{category.name}</span>
                  <Icon name="ChevronRight" size={18} className="ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
                </Button>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section id="catalog" className="py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold tracking-tight">Категории товаров</h2>
            <p className="text-xl text-muted-foreground font-light">Всё для твоей идеальной сборки</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {categories.map((category, idx) => (
              <Card
                key={idx}
                className="p-8 text-center cursor-pointer hover:bg-secondary/80 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/10 border-border/50 group"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform shadow-lg`}>
                  <Icon name={category.icon as any} className="text-white" size={36} />
                </div>
                <h3 className="font-semibold text-lg">{category.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
            <div className="space-y-4">
              <Badge variant="outline" className="border-primary/30 text-primary">Акции</Badge>
              <h2 className="text-5xl font-bold tracking-tight">Хиты продаж</h2>
              <p className="text-xl text-muted-foreground font-light">Лучшие предложения этой недели</p>
            </div>
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-secondary/80 group">
              Все товары
              <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {topProducts.map((product, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all group border-border/50 bg-card/50 backdrop-blur hover:scale-105 duration-300">
                <div className="relative overflow-hidden aspect-square bg-secondary/50">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <Badge className="absolute top-6 left-6 neon-glow bg-primary text-primary-foreground font-semibold">{product.badge}</Badge>
                  <Badge className="absolute top-6 right-6 bg-red-500 text-white font-bold">{product.discount}</Badge>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="font-bold text-xl">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">(142 отзыва)</span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-primary">{product.price.toLocaleString()} ₽</span>
                    <span className="text-sm text-muted-foreground line-through">{product.oldPrice.toLocaleString()} ₽</span>
                  </div>
                  <Button className="w-full neon-glow hover:scale-105 transition-transform font-semibold text-base py-6">
                    <Icon name="ShoppingCart" className="mr-2" size={18} />
                    В корзину
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="builds" className="py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-primary/30 text-primary">Готовые сборки</Badge>
            <h2 className="text-5xl font-bold tracking-tight">Сборки недели</h2>
            <p className="text-xl text-muted-foreground font-light">Готовые конфигурации от экспертов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {builds.map((build, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all hover:scale-105 border-border/50 bg-card/50 backdrop-blur duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <img src={build.image} alt={build.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <Badge className="absolute top-6 left-6 neon-glow">{build.badge}</Badge>
                  <h3 className="absolute bottom-6 left-6 text-2xl font-bold">{build.name}</h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="space-y-3">
                    {build.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Icon name="Check" size={14} className="text-primary" />
                        </div>
                        <span className="text-muted-foreground">{spec}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-3xl font-bold text-primary">{build.price.toLocaleString()} ₽</div>
                  <Button className="w-full hover:scale-105 transition-transform font-semibold text-base py-6">
                    <Icon name="ShoppingCart" className="mr-2" size={18} />
                    Добавить в корзину
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-primary/30 text-primary">Преимущества</Badge>
            <h2 className="text-5xl font-bold tracking-tight">Почему мы?</h2>
            <p className="text-xl text-muted-foreground font-light">Работаем для вашего удобства</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="p-10 text-center hover:bg-secondary/50 transition-all hover:scale-105 border-border/50 group">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:neon-glow transition-all">
                  <Icon name={benefit.icon as any} className="text-primary" size={36} />
                </div>
                <p className="font-semibold text-lg mb-2">{benefit.text}</p>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-primary/30 text-primary">Отзывы</Badge>
            <h2 className="text-5xl font-bold tracking-tight">Что говорят клиенты</h2>
            <p className="text-xl text-muted-foreground font-light">Реальные отзывы реальных людей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, idx) => (
              <Card key={idx} className="p-8 border-border/50 bg-card/50 backdrop-blur hover:shadow-xl hover:shadow-primary/5 transition-all hover:scale-105">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">{review.avatar}</span>
                  </div>
                  <span className="font-semibold text-lg">{review.name}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <Card className="p-12 bg-card/80 backdrop-blur border-border/50 max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">Не нашли нужную конфигурацию?</h2>
            <p className="text-xl text-muted-foreground">Наши эксперты помогут собрать идеальный ПК под ваши задачи и бюджет</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 neon-glow">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Связаться с экспертом
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Icon name="Phone" className="mr-2" size={20} />
                +7 (999) 123-45-67
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border/50 py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center neon-glow">
                  <Icon name="Box" className="text-primary-foreground" size={22} />
                </div>
                <span className="text-xl font-bold neon-text">TechBox</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Твой магазин компьютерных комплектующих с гарантией качества
              </p>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-secondary/80">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-secondary/80">
                  <Icon name="Send" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-secondary/80">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Каталог</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Видеокарты</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Процессоры</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Материнские платы</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Охлаждение</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Покупателям</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Гарантия</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Возврат товара</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="Phone" size={16} className="text-primary" />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="Mail" size={16} className="text-primary" />
                  info@techbox.ru
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="MapPin" size={16} className="text-primary" />
                  Москва, ул. Технологическая, 1
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 TechBox. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Договор оферты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
