import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar position="sticky" sx={{ background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(10px)' }} elevation={0} className="border-b border-slate-700">
      <Toolbar className="justify-between container mx-auto px-4">
        <Typography variant="h6" component={Link} to="/" className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500 font-bold no-underline cursor-pointer">
          Ezequiel Portfolio
        </Typography>
        <Box className="flex gap-4">
          <Button 
            component={Link} 
            to="/" 
            color="inherit"
            className={`relative overflow-hidden transition-colors ${location.pathname === '/' ? 'text-pink-400' : 'text-slate-300 hover:text-white'}`}
          >
            Inicio
            {location.pathname === '/' && (
              <motion.div layoutId="navbar-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-400" />
            )}
          </Button>
          <Button 
            component={Link} 
            to="/historia" 
            color="inherit"
            className={`relative overflow-hidden transition-colors ${location.pathname === '/historia' ? 'text-pink-400' : 'text-slate-300 hover:text-white'}`}
          >
            Mi Historia
            {location.pathname === '/historia' && (
              <motion.div layoutId="navbar-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-400" />
            )}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
