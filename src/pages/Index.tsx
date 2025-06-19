
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Star, Users, Award, Zap, Eye, Video, Palette, Share2, ChevronRight, Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";


const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: Share2,
      title: "Social Media",
      description: "Estratégias completas para redes sociais que engajam e convertem seu público.",
      features: ["Gestão de Redes", "Conteúdo Criativo", "Campanhas", "Análise de Métricas"]
    },
    {
      icon: Palette,
      title: "Identidade Visual",
      description: "Criamos marcas que se destacam no mercado e conectam com seu público.",
      features: ["Logo Design", "Design Gráfico", "Design para Redes Sociais", "Rebranding"]
    },
    {
      icon: Video,
      title: "Produção de Vídeo",
      description: "Vídeos profissionais que contam histórias e impulsionam resultados.",
      features: ["Videos Institucionais", "Linha Editorial", "Edição Profissional", "Roteirização"]
    }
  ];

  const portfolio = [
    { category: "Social Media", image: "infabrazil.png", title: "Carrosel INFABRAZIL" },
    { category: "Identidade Visual", image: "vagnermoraes.png", title: "Logo Consultor Comercial" },
    { category: "Vídeo", image: "onemove.png", title: "Recap Conferência" },
    { category: "Social Media", image: "ricardopiza.png", title: "Reels Ricardo Piza" },
    { category: "Identidade Visual", image: "domingo-noite.png", title: "YouTube Verbo da Vida" },
    { category: "Vídeo", image: "clinicagraciela.png", title: "Filme Empresarial" }
  ];

  const testimonials = [
    {
      name: "Vagner Moraes",
      company: "Consultor Comercial",
      content: "A agência me colocou no digital completamente. Um preço acessível com toda certeza!",
      rating: 5
    },
    {
      name: "Diogo Garcia",
      company: "CEO e Líder de Mídia",
      content: "Agência excepcional! Os designs, edições de vídeos, captação de imagens foram feitos com excelência!",
      rating: 5
    },
    {
      name: "André Gaspar",
      company: "Infabrazil",
      content: "Trabalho espetacular, transmitiu exatamente o que queriamos para nosso público. Equipe talentosa!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
               <img src="/verseone_png1.png" alt="Logo VerseOne 1" className="h-10 sm:h-10 md:h-10 lg:h-10 xl:h-10 w-auto"  />
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-text-blue-500 transition-colors">Início</a>
              <a href="#services" className="text-foreground hover:text-text-blue-500 transition-colors">Serviços</a>
              <a href="#portfolio" className="text-foreground hover:text-text-blue-500 transition-colors">Portfolio</a>
              <a href="#about" className="text-foreground hover:text-text-blue-500 transition-colors">Sobre</a>
              <a href="#contact" className="text-foreground hover:text-blue-500 transition-colors">Contato</a>
            </nav>
            <Button className="bg-gradient-to-r from-orange-200 to-blue-500 hover:from-orange-200 hover:to-blue-600"
            onClick={() => window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSe8PV_LBJ-rcygRkL_bt2EZZ_TIKpYgUg2HXLhRtNPYj46c_g/viewform?usp=sharing&ouid=104710543885835370507'}>
              Reunião Gratuita
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-orange-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                  Agência Digital Premium
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Damos forma ao que
                  <span className="bg-gradient-to-r from-orange-200 to-blue-600 bg-clip-text text-transparent">
                    {" "}você imagina.
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Social media estratégico, identidade visual marcante e vídeos que convertem. 
                  Sua marca merece destaque no mundo digital.
                </p>
              </div>
              <section id="blog"></section>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-orange-200 to-blue-500 hover:from-orange-300 hover:to-blue-600"
                onClick={() => window.location.href = 'https://wa.link/f8os24'}>
                  Começar Projeto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="group"
                  onClick={() => window.location.href = 'https://drive.google.com/drive/folders/1qDGVQ1s-zcL3g8WdbiIypPQzHn6Am79W?usp=sharing'}>
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              
                  Ver Nosso Trabalho
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">+100</div>
                  <div className="text-sm text-muted-foreground">Designs feitos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">+150</div>
                  <div className="text-sm text-muted-foreground">Horas de vídeo editadas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">Premium</div>
                  <div className="text-sm text-muted-foreground">Qualidade</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="/agenda.png" 
                  alt="Creative workspace" 
                  className="rounded-lg w-full h-64 object-cover"
                />
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Status Agenda</span>
                    <Badge className="bg-green-100 text-green-700">Em Progresso</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-gradient-to-r from-orange-200 to-blue-500 rounded-full w-2/4"></div>
                    </div>
                    <p className="text-sm text-muted-foreground">Vagas Limitadas - 45% Preenchidas</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-orange-400 to-blue-400 rounded-full opacity-20 blur-3xl"></div>
            </div>
        
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700">Nossos Serviços</Badge>
            <h2 className="text-4xl font-bold mb-4">Soluções Completas para seu o Negócio</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos um ecossistema completo de serviços digitais para levar seu negócio ao próximo nível
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-orange-200 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <ChevronRight className="h-4 w-4 text-blue-700 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
                  onClick={() => window.location.href = 'https://wa.link/f8os24'}>
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700">Portfolio</Badge>
            <h2 className="text-4xl font-bold mb-4">Nossos Trabalhos Recentes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça alguns dos projetos que desenvolvemos para nossos clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <Badge className="mb-2 bg-white/20 text-white hover:bg-white/30">
                        {item.category}
                      </Badge>
                      <h3 className="font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-orange-200 to-blue-500 hover:from-orange-300 hover:to-blue-600"
              onClick={() => window.location.href = 'https://drive.google.com/drive/folders/1qDGVQ1s-zcL3g8WdbiIypPQzHn6Am79W?usp=sharing'}>
              Ver Todos os Projetos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-700">Depoimentos</Badge>
            <h2 className="text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-300 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Pronto para dar forma ao seu negócio?
          </h2>
          <p className="text-xl text-purple-50 mb-8">
            Entre em contato conosco para levar sua presença digital ao próximo nível!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100"
            onClick={() => window.location.href = 'https://wa.link/f8os24'}>
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <img src="/verseone_png2.png" alt="Logo VerseOne" className="h-10 w-auto" />
              <p className="text-gray-400">
                Damos forma ao que você imagina.
              </p>
              <div className="flex space-x-4">
                <Instagram className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" 
                onClick={() => window.location.href = 'https://www.instagram.com/verseone.media/?hl=pt'}/>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Serviços</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Social Media</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Identidade Visual</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Produção de Vídeos</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contato</h3>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>(11) 94242-8114</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>contato@verseonemedia.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Verse One Media. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
