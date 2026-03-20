import { motion } from 'motion/react';
import { Calendar, Heart, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './helpers/ImageWithFallback';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { icon: Heart, text: 'Atendimento humanizado' },
    { icon: Shield, text: 'Equipe especializada' },
    { icon: Calendar, text: 'Disponível 24/7' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(45,95,63,0.1),transparent_50%)] -z-10" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  ✨ Cuidando com amor desde 2010
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
              >
                Cuidado e{' '}
                <span className="text-primary">Amor</span> para seu{' '}
                <span className="text-secondary">Pet</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-muted-foreground max-w-lg"
              >
                Somos especialistas em saúde animal, oferecendo atendimento de excelência com carinho e dedicação para seu melhor amigo.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
              >
                Agendar Consulta
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#services')}
                className="border-primary text-primary hover:bg-primary/10 text-lg px-8"
              >
                Nossos Serviços
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-border"
                >
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1509205477838-a534e43a849f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMGNhdCUyMHRvZ2V0aGVyfGVufDF8fHx8MTc3Mzk1OTI0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cachorro e gato felizes"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-border"
            >
              <div className="text-4xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Anos de experiência</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-border"
            >
              <div className="text-4xl font-bold text-secondary">10k+</div>
              <div className="text-sm text-muted-foreground">Pets atendidos</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
