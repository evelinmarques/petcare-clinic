import { motion } from 'motion/react';
import { GraduationCap, Award, Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './helpers/ImageWithFallback';

export function Team() {
  const team = [
    {
      name: 'Dra. Ana Paula Silva',
      role: 'Médica Veterinária - Clínica Geral',
      image: 'https://images.unsplash.com/photo-1676552055618-22ec8cde399a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB2ZXRlcmluYXJpYW4lMjBzbWlsaW5nfGVufDF8fHx8MTc3NDAxMDQyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      credentials: 'CRMV-SP 12345',
      specialties: ['Clínica Geral', 'Dermatologia'],
    },
    {
      name: 'Dr. Carlos Eduardo',
      role: 'Médico Veterinário - Cirurgião',
      image: 'https://images.unsplash.com/photo-1625321171045-1fea4ac688e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBleGFtaW5pbmclMjBkb2d8ZW58MXx8fHwxNzczOTc2MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      credentials: 'CRMV-SP 23456',
      specialties: ['Cirurgia', 'Ortopedia'],
    },
    {
      name: 'Dra. Mariana Costa',
      role: 'Médica Veterinária - Especialista em Felinos',
      image: 'https://images.unsplash.com/photo-1770836037793-95bdbf190f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwY2xpbmljJTIwcmVjZXB0aW9ufGVufDF8fHx8MTc3NDAxMDQyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      credentials: 'CRMV-SP 34567',
      specialties: ['Medicina Felina', 'Comportamento'],
    },
  ];

  const stats = [
    { icon: GraduationCap, value: '15+', label: 'Anos de experiência' },
    { icon: Award, value: '50+', label: 'Certificações' },
    { icon: Heart, value: '10k+', label: 'Pets felizes' },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nossa Equipe
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Profissionais <span className="text-primary">Qualificados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa equipe é formada por veterinários especializados e apaixonados por cuidar dos animais
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl text-center border border-border/50"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 bg-white">
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-sm opacity-90">{member.credentials}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{member.role}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center bg-gradient-to-r from-secondary/10 to-accent/10 p-8 rounded-2xl border border-border/50"
        >
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Junte-se à nossa equipe!
          </h3>
          <p className="text-muted-foreground mb-6">
            Estamos sempre em busca de profissionais talentosos e apaixonados por cuidar de animais.
          </p>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
            Envie seu currículo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
