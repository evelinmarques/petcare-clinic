import { motion } from 'motion/react';
import { 
  Stethoscope, 
  Scissors, 
  Syringe, 
  TestTube, 
  Home, 
  Pill,
  Heart,
  Bone
} from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: 'Consultas Gerais',
      description: 'Atendimento clínico completo com profissionais especializados.',
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: Syringe,
      title: 'Vacinação',
      description: 'Protocolo completo de vacinas para manter seu pet sempre protegido.',
      color: 'bg-secondary/10 text-secondary-foreground',
    },
    {
      icon: Scissors,
      title: 'Banho e Tosa',
      description: 'Serviços de estética e higiene com produtos de qualidade.',
      color: 'bg-accent/20 text-accent-foreground',
    },
    {
      icon: TestTube,
      title: 'Exames Laboratoriais',
      description: 'Laboratório próprio para diagnósticos rápidos e precisos.',
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: Pill,
      title: 'Cirurgias',
      description: 'Centro cirúrgico equipado para procedimentos de alta complexidade.',
      color: 'bg-secondary/10 text-secondary-foreground',
    },
    {
      icon: Home,
      title: 'Atendimento Domiciliar',
      description: 'Levamos cuidado e conforto até a sua casa.',
      color: 'bg-accent/20 text-accent-foreground',
    },
    {
      icon: Heart,
      title: 'Internação',
      description: 'Estrutura completa para internação e monitoramento 24h.',
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: Bone,
      title: 'Nutrição',
      description: 'Orientação nutricional personalizada para cada pet.',
      color: 'bg-secondary/10 text-secondary-foreground',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Tudo que seu <span className="text-secondary">Pet</span> precisa
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços veterinários com equipamentos modernos e profissionais qualificados
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-4">Plantão 24 horas</h3>
            <p className="text-lg mb-6 opacity-90">
              Emergências podem acontecer a qualquer momento. Estamos sempre prontos para ajudar!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <p className="text-sm opacity-90">Plantão emergencial</p>
                <p className="text-2xl font-bold">(11) 9999-9999</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <p className="text-sm opacity-90">WhatsApp</p>
                <p className="text-2xl font-bold">(11) 9888-8888</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
