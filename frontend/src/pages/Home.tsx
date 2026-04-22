import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="md" className="py-20 text-center">
      <Box className="bg-slate-800 p-10 rounded-2xl shadow-xl">
        <Typography variant="h2" component="h1" gutterBottom className="text-white font-bold">
          Bienvenido a la Web Escalable
        </Typography>
        <Typography variant="h5" className="text-slate-300 mb-8">
          Construida con React, Tailwind CSS y Material UI.
        </Typography>
        <Box className="flex justify-center gap-4">
          <Button variant="contained" color="primary" component={Link} to="/about" size="large">
            Ver Más
          </Button>
          <Button variant="outlined" color="inherit" className="text-white border-white" size="large">
            Contacto
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
