import { Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ParticleButton from '../components/ParticleButton';
import PageTransition from '../components/PageTransition';

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <Container maxWidth="md" className="py-20 text-center min-h-[calc(100vh-64px)] flex flex-col justify-center items-center">
        <Box className="relative mb-10">
          {/* Animated background blob behind image */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full blur-2xl opacity-60"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.img 
            src="/profile.png" 
            alt="Ezequiel Olivar" 
            className="w-48 h-48 rounded-full object-cover border-4 border-slate-800 relative z-10 mx-auto shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </Box>

        <Box className="bg-slate-800/80 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-slate-700/50 w-full">
          <Typography variant="h2" component="h1" gutterBottom className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 font-extrabold">
            Hola, soy Ezequiel Olivar
          </Typography>
          
          <Typography variant="h5" className="text-slate-300 mb-8 leading-relaxed">
            Bienvenido a mi rincón digital. Aquí comparto mi trayectoria, mis pasiones y las experiencias que me han formado. ¡Gracias por visitarme y acompañarme en este viaje!
          </Typography>

          <Box className="flex justify-center mt-8">
            <ParticleButton 
              variant="contained" 
              size="large"
              onClick={() => navigate('/historia')}
              sx={{ 
                background: 'linear-gradient(45deg, #f43f5e 30%, #6366f1 90%)',
                color: 'white',
                px: 4,
                py: 1.5,
                borderRadius: '9999px',
                fontWeight: 'bold',
                textTransform: 'none',
                fontSize: '1.1rem'
              }}
            >
              Conóceme más
            </ParticleButton>
          </Box>
        </Box>
      </Container>
    </PageTransition>
  );
};

export default Home;
