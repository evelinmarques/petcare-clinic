import { PawPrint, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Serviços', href: '#services' },
    { label: 'Nossa Equipe', href: '#team' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Contato', href: '#contact' },
  ];

  const services = [
    'Consultas Gerais',
    'Vacinação',
    'Cirurgias',
    'Exames Laboratoriais',
    'Banho e Tosa',
    'Internação',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary-foreground rounded-full p-2">
                <PawPrint className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">PetCare</h3>
                <p className="text-sm opacity-80">Clínica Veterinária</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Cuidando com amor e dedicação do seu melhor amigo há mais de 15 anos.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-sm opacity-90">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="opacity-90">
                  Rua das Flores, 123 - Centro<br />São Paulo - SP
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="opacity-90">(11) 9999-9999</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="opacity-90">contato@petcare.com.br</span>
              </li>
            </ul>
            <div className="mt-4 bg-white/20 p-3 rounded-lg">
              <p className="text-xs font-semibold mb-1">Plantão 24h</p>
              <p className="text-sm">(11) 9999-9999</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">
              © {currentYear} PetCare - Clínica Veterinária. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm opacity-80">
              <button className="hover:opacity-100 transition-opacity">
                Política de Privacidade
              </button>
              <button className="hover:opacity-100 transition-opacity">
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
