import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" className="py-20">
      <Typography variant="h3" gutterBottom className="text-white">
        Sobre este Proyecto
      </Typography>
      <Typography variant="body1" paragraph className="text-slate-300">
        Esta aplicación es un ejercicio de programación diseñado para ser escalable,
        utilizando las mejores prácticas de desarrollo web moderno.
      </Typography>
      <Button variant="contained" onClick={() => navigate('/')}>
        Volver al Inicio
      </Button>
    </Container>
  );
};

export default About;
