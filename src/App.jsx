import React, { useState, useEffect } from 'react';
import {
  Car,
  ShieldCheck,
  Sparkles,
  Droplets,
  MapPin,
  Phone,
  Instagram,
  MessageCircle,
  Menu,
  X,
  Star,
  CheckCircle,
  Clock,
  ChevronRight
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  // Handle Scroll for Navbar Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const car = formData.get('car');
    const service = formData.get('service');
    const message = formData.get('message');

    const whatsappMessage = `*Olá! Gostaria de um orçamento VIP.*\n\n*Nome:* ${name}\n*Telefone:* ${phone}\n*Carro:* ${car}\n*Serviço:* ${service}\n*Mensagem:* ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/5548991900176?text=${encodedMessage}`;

    // Simulate API call delay then redirect
    setTimeout(() => {
      setFormStatus('success');
      window.open(whatsappUrl, '_blank');
    }, 1000);
  };

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-gray-100 bg-zinc-950 selection:bg-blue-600 selection:text-white">

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <img src="/style/img/logo.png" alt="Lumina Detail Logo" className="h-20" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            <button onClick={() => scrollToSection('servicos')} className="hover:text-blue-500 transition-colors">SERVIÇOS</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-blue-500 transition-colors">PORTFÓLIO</button>
            <button onClick={() => scrollToSection('sobre')} className="hover:text-blue-500 transition-colors">SOBRE</button>
            <div className="relative group flex flex-col items-end">
              <button onClick={() => scrollToSection('contato')} className="bg-white text-black px-5 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 font-semibold shadow-lg shadow-blue-500/10">
                SOLICITAR ORÇAMENTO
              </button>
              {/* Future App Teaser */}
              <span className="absolute top-full mt-1 text-[10px] text-blue-500 font-light tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                App em breve
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 flex flex-col items-center py-6 space-y-6 animate-fade-in-down shadow-2xl">
            <button onClick={() => scrollToSection('servicos')} className="text-lg font-medium hover:text-blue-500">SERVIÇOS</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-lg font-medium hover:text-blue-500">PORTFÓLIO</button>
            <button onClick={() => scrollToSection('sobre')} className="text-lg font-medium hover:text-blue-500">SOBRE</button>
            <button onClick={() => scrollToSection('contato')} className="text-lg font-medium text-blue-400 font-bold border border-blue-500/30 px-6 py-2 rounded-full bg-blue-500/10">
              SOLICITAR ORÇAMENTO
            </button>
            <span className="text-xs text-gray-500 uppercase tracking-widest border px-2 py-1 rounded border-gray-800">
              App de Agendamento (Em Breve)
            </span>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/style/img/principal.png"
            alt="Porsche 911 Dark Detail"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center md:text-left mt-20">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
              Estética Automotiva Premium
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
              Seu carro com aparência de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">zero km</span> novamente.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 font-light leading-relaxed max-w-2xl">
              Especialistas em detalhamento automotivo, proteção de pintura e restauração. O cuidado que sua máquina merece, com a precisão que você exige.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <button onClick={() => scrollToSection('contato')} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2 group">
                Solicitar Orçamento <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="wa.me/5548" target="_blank" rel="noreferrer" className="px-8 py-4 bg-transparent border border-gray-600 hover:border-white text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 hover:bg-white/5">
                <MessageCircle size={18} /> Falar no WhatsApp
              </a>
            </div>

            {/* App Coming Soon Badge Hero */}
            <div className="mt-8 flex items-center justify-center md:justify-start gap-2 opacity-80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <p className="text-xs text-blue-300 tracking-wide font-light">
                <span className="font-bold">Novidade:</span> App de agendamento automático em breve.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Utilizamos produtos de classe mundial e técnicas avançadas para garantir resultados impecáveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="group bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:bg-zinc-900 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Sparkles className="text-blue-500 group-hover:text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Polimento Técnico</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Correção de riscos, swirls e marcas na pintura, restaurando o brilho profundo e original do verniz.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:bg-zinc-900 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <ShieldCheck className="text-blue-500 group-hover:text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Vitrificação</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Proteção cerâmica de alta dureza (9H). Hidrorepelência, proteção UV e brilho intenso por até 3 anos.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:bg-zinc-900 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Car className="text-blue-500 group-hover:text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Higienização Interna</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Limpeza detalhada de estofados, couro e painéis com produtos bactericidas e condicionadores premium.
              </p>
            </div>

            {/* Service 4 */}
            <div className="group bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:bg-zinc-900 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Droplets className="text-blue-500 group-hover:text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Detalhamento de Motor</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Limpeza técnica do cofre do motor e proteção de plásticos e borrachas contra ressecamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio/Gallery */}
      <section id="portfolio" className="py-24 bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Resultados Reais</h2>
              <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
            </div>
            <a href="https://www.instagram.com/brilhacar_esteticaac/" target="_blank" rel="noreferrer" className="hidden md:flex items-center text-blue-400 hover:text-blue-300 transition-colors mt-4 md:mt-0">
              Ver mais no Instagram <Instagram size={18} className="ml-2" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery Item 1 */}
            <div className="relative group overflow-hidden rounded-xl aspect-[4/3] bg-zinc-800">
              <img
                src="/style/img/porsche.png"
                alt="Lavagem detalhada Porsche"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-blue-400 text-sm font-bold uppercase tracking-wider">Lavagem detalhada</p>
                <h4 className="text-white text-xl font-semibold">Porsche Macan 2025</h4>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="relative group overflow-hidden rounded-xl aspect-[4/3] bg-zinc-800">
              <img
                src="/style/img/bmw.png"
                alt="Polimento BMW"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-blue-400 text-sm font-bold uppercase tracking-wider">Polimento técnico</p>
                <h4 className="text-white text-xl font-semibold">BMW Z4</h4>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="relative group overflow-hidden rounded-xl aspect-[4/3] bg-zinc-800">
              <img
                src="/style/img/tiger.png"
                alt="Lavagem detalhada Tiger"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-blue-400 text-sm font-bold uppercase tracking-wider">Lavagem detalhada</p>
                <h4 className="text-white text-xl font-semibold">Tiger</h4>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center md:hidden">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              Ver mais no Instagram <Instagram size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-zinc-950 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600/20 rounded-tl-3xl"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600/20 rounded-br-3xl"></div>
                <img
                  src="/style/img/detailer_trabalhando.jpg"
                  alt="Detailer trabalhando"
                  className="relative z-10 rounded-2xl shadow-2xl w-full bg-zinc-800 min-h-[300px]"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Mais que um serviço,<br />uma obsessão por detalhes.</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                A Brilha Car nasceu da paixão por automóveis e da busca incessante pela perfeição. Não tratamos seu carro apenas como um meio de transporte, mas como um ativo que merece o melhor cuidado.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Com anos de experiência e certificações, nossa equipe utiliza processos meticulosos para garantir que cada centímetro do seu veículo receba atenção especial.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-blue-500" size={20} />
                  <span className="text-gray-300">Produtos Importados</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-blue-500" size={20} />
                  <span className="text-gray-300">Equipe Certificada</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-blue-500" size={20} />
                  <span className="text-gray-300">Ambiente Climatizado</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-blue-500" size={20} />
                  <span className="text-gray-300">Garantia nos Serviços</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-zinc-900 border-y border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2">O que nossos clientes dizem</h2>
            <div className="flex justify-center items-center gap-1 text-yellow-500 mb-2">
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
            </div>
            {/* <p className="text-gray-500 text-sm">Média de 5.0 estrelas no Google</p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
              <p className="text-gray-300 italic mb-4">"Incrível o resultado da vitrificação no meu carro. Parece que acabou de sair da concessionária, ou melhor. Atendimento nota 10."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">R</div>
                <div>
                  <p className="font-semibold text-white">Ricardo Silva</p>
                  <p className="text-xs text-gray-500">BMW 320i</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
              <p className="text-gray-300 italic mb-4">"Profissionais extremamente cuidadosos. A higienização interna removeu manchas que eu achava impossíveis. Recomendo muito!"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">F</div>
                <div>
                  <p className="font-semibold text-white">Fernanda Costa</p>
                  <p className="text-xs text-gray-500">Jeep Compass</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
              <p className="text-gray-300 italic mb-4">"O melhor polimento da cidade. O atendimento é premium do início ao fim. Vale cada centavo pelo nível de detalhe."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">M</div>
                <div>
                  <p className="font-semibold text-white">Marcelo Almeida</p>
                  <p className="text-xs text-gray-500">Audi A5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="contato" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Contact Info & Map */}
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Onde Estamos</h2>
                <p className="text-gray-400">Visite nosso estúdio ou agende uma avaliação gratuita.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center shrink-0 text-blue-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Endereço</h3>
                    <p className="text-gray-400">Av. João Antônio Besen, S/N - Antônio Carlos, Santa Catarina - SC</p>
                    <p className="text-gray-500 text-sm mt-1">Fácil acesso e estacionamento próprio.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center shrink-0 text-blue-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Contato</h3>
                    <p className="text-gray-400">(48) 991900176</p>
                    {/* <p className="text-gray-400">contato@luminadetail.com.br</p> */}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center shrink-0 text-blue-500">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Horário</h3>
                    <p className="text-gray-400">Seg - Sex: 08:30 - 12:00 | 13:00 - 18:00</p>
                    <p className="text-gray-400">Sáb: 07:30 - 14:00</p>
                  </div>
                </div>
              </div>

              {/* Fake Map */}
              <div className="w-full h-64 bg-zinc-800 rounded-xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.0126462967666!2d-48.76999768494056!3d-27.514300399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDMwJzUxLjUiUyA0OMKwNDYnMDIuNyJX!5e0!3m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Maps"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                ></iframe>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-1/2">
              <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-xl relative overflow-hidden">
                {/* Badge no Form */}
                <div className="absolute top-0 right-0 bg-blue-900/30 px-4 py-2 rounded-bl-xl border-l border-b border-blue-500/20">
                  <p className="text-[10px] text-blue-300 font-bold tracking-wider uppercase">App em Breve 🚀</p>
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white">Solicite um Orçamento</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Enquanto finalizamos nosso App de agendamento, utilize o formulário abaixo para atendimento prioritário.
                </p>

                {formStatus === 'success' ? (
                  <div className="flex flex-col items-center justify-center h-80 animate-fade-in text-center">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="text-green-500" size={40} />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Solicitação Enviada!</h4>
                    <p className="text-gray-400">Em breve nossa equipe responderá sua mensagem via WhatsApp para finalizar seu atendimento.</p>
                    <button onClick={() => setFormStatus('idle')} className="mt-6 text-blue-500 hover:text-white underline">Enviar novo pedido</button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Nome Completo</label>
                      <input type="text" name="name" required className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600" placeholder="Ex: João Silva" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Telefone / WhatsApp</label>
                        <input type="tel" name="phone" required className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600" placeholder="(11) 99999-9999" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Modelo do Carro</label>
                        <input type="text" name="car" required className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600" placeholder="Ex: BMW 320i" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Serviço de Interesse</label>
                      <select name="service" className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all">
                        <option>Selecione uma opção</option>
                        <option>Polimento Técnico</option>
                        <option>Vitrificação de Pintura</option>
                        <option>Higienização Interna</option>
                        <option>Lavagem Detalhada</option>
                        <option>Outro / Não tenho certeza</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Mensagem (Opcional)</label>
                      <textarea name="message" rows="3" className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600" placeholder="Conte mais detalhes sobre o estado do carro..."></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-900/30 flex justify-center items-center"
                    >
                      {formStatus === 'submitting' ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        "QUERO MEU ORÇAMENTO VIP"
                      )}
                    </button>
                    <p className="text-xs text-center text-gray-500 mt-2">Seus dados estão seguros. Retornamos em até 2 horas.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center animate-bounce-subtle"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={32} />
      </a>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-zinc-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <div className="mb-2">
                <img src="/style/img/logo.png" alt="Lumina Detail Logo" className="h-20" />
              </div>
              <p className="text-gray-500 text-sm max-w-xs">
                Transformando veículos em obras de arte através da estética automotiva de alto padrão.
              </p>
            </div>

            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="https://www.instagram.com/brilhacar_esteticaac/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><Instagram size={24} /></a>
              <a href="https://wa.me/5548991900176" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><MessageCircle size={24} /></a>
              <a href="https://www.google.com/maps/search/?api=1&query=Av.+João+Antônio+Besen,+S/N+-+Antônio+Carlos,+Santa+Catarina+-+SC" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><MapPin size={24} /></a>
            </div>
          </div>

          <div className="border-t border-zinc-900 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <p>&copy; 2026 Brilha Car Estética Automotiva. Todos os direitos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-400">Termos de Uso</a>
              <a href="#" className="hover:text-gray-400">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;