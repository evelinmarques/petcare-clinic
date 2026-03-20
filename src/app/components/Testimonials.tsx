import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './helpers/ImageWithFallback';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Santos',
      pet: 'Rex (Golden Retriever)',
      image: 'https://images.unsplash.com/photo-1706745262357-5ecaa3154433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcHVwcHklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQwMTA0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      text: 'Equipe extremamente atenciosa e competente. O Rex foi tratado com todo carinho e cuidado. A clínica é moderna e muito limpa. Super recomendo!',
    },
    {
      name: 'João Silva',
      pet: 'Luna (Gato Persa)',
      image: 'https://images.unsplash.com/photo-1509205477838-a534e43a849f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMGNhdCUyMHRvZ2V0aGVyfGVufDF8fHx8MTc3Mzk1OTI0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      text: 'A Dra. Mariana é incrível com felinos! A Luna sempre ficou nervosa em outras clínicas, mas aqui ela se sente tranquila. Excelente atendimento!',
    },
    {
      name: 'Carla Mendes',
      pet: 'Bob (Shih Tzu)',
      image: 'https://images.unsplash.com/photo-1625321171045-1fea4ac688e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBleGFtaW5pbmclMjBkb2d8ZW58MXx8fHwxNzczOTc2MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      text: 'Melhor clínica veterinária da região! Profissionais super capacitados e preço justo. O Bob adora vir aqui para o banho e tosa.',
    },
    {
      name: 'Roberto Lima',
      pet: 'Thor (Pastor Alemão)',
      image: 'https://images.unsplash.com/photo-1770836037793-95bdbf190f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwY2xpbmljJTIwcmVjZXB0aW9ufGVufDF8fHx8MTc3NDAxMDQyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      text: 'Atendimento emergencial 24h salvou a vida do Thor! Equipe muito preparada e ágil. Gratidão eterna a toda equipe da PetCare!',
    },
    {
      name: 'Ana Costa',
      pet: 'Mel (Labrador)',
      image: 'https://images.unsplash.com/photo-1676552055618-22ec8cde399a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB2ZXRlcmluYXJpYW4lMjBzbWlsaW5nfGVufDF8fHx8MTc3NDAxMDQyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      text: 'Acompanho a Mel na PetCare há 5 anos. São profissionais que realmente amam o que fazem. Confiança total!',
    },
    {
      name: 'Pedro Oliveira',
      pet: 'Simba (Gato Vira-Lata)',
      image: 'https://images.unsplash.com/photo-1509205477838-a534e43a849f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMGNhdCUyMHRvZ2V0aGVyfGVufDF8fHx8MTc3Mzk1OTI0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      text: 'Resgatei o Simba da rua e trouxe direto para a PetCare. Cuidaram dele com todo amor e atenção. Hoje ele está saudável e feliz!',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            O que dizem nossos <span className="text-secondary">Clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A satisfação e confiança dos tutores é nossa maior conquista
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Quote className="w-10 h-10 text-secondary/30" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Tutor(a) de {testimonial.pet}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-full border border-border shadow-md">
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <div className="text-left">
              <div className="text-2xl font-bold text-foreground">4.9/5.0</div>
              <div className="text-sm text-muted-foreground">
                Baseado em 1.200+ avaliações
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
