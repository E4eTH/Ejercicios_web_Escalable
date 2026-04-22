import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const milestones = [
  {
    id: 1,
    title: "Mi Primer Línea de Código",
    description: "[Texto de ejemplo] Descubrí el mundo de la programación y escribí mi primer 'Hola Mundo'. Fue el inicio de una gran aventura tecnológica que cambiaría mi forma de pensar."
  },
  {
    id: 2,
    title: "Primer Proyecto Real",
    description: "[Texto de ejemplo] Desarrollé mi primera aplicación web funcional para solucionar un problema real. Aprendí a manejar bases de datos, APIs y el despliegue de software."
  },
  {
    id: 3,
    title: "Crecimiento Profesional",
    description: "[Texto de ejemplo] Comencé a trabajar en equipo, adoptando metodologías ágiles y mejores prácticas como control de versiones avanzado y testing automatizado."
  },
  {
    id: 4,
    title: "Dominando Nuevas Tecnologías",
    description: "[Texto de ejemplo] Me adentré en frameworks modernos como React, Next.js y el ecosistema Node.js, creando aplicaciones altamente escalables y dinámicas."
  }
];

const MyStory = () => {
  return (
    <PageTransition>
      <Container maxWidth="lg" className="py-20 min-h-[calc(100vh-64px)]">
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          className="text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400 font-extrabold mb-12"
        >
          Mi Historia
        </Typography>

        <Grid container spacing={4}>
          {milestones.map((milestone, index) => (
            <Grid item xs={12} md={6} key={milestone.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Card 
                  className="h-full bg-slate-800/80 backdrop-blur border border-slate-700 hover:border-pink-500/50 transition-colors duration-300"
                  elevation={0}
                  sx={{ borderRadius: '24px' }}
                >
                  <CardContent className="p-8">
                    <Typography variant="h5" component="h2" gutterBottom className="text-pink-300 font-bold">
                      {milestone.title}
                    </Typography>
                    <Typography variant="body1" className="text-slate-300 leading-relaxed">
                      {milestone.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </PageTransition>
  );
};

export default MyStory;
