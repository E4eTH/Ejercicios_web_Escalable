import { Button, type ButtonProps } from '@mui/material';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

interface ParticleButtonProps extends ButtonProps {
  children: React.ReactNode;
}

// Convert MUI Button to a motion component for hover effects
const MotionButton = motion(Button);

const ParticleButton = ({ children, onClick, ...props }: ParticleButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // Get click coordinates to fire confetti from there
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { x: (e.clientX / window.innerWidth), y: (e.clientY / window.innerHeight) },
      colors: ['#6366f1', '#f43f5e', '#10b981', '#fbbf24']
    });

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <MotionButton
      {...props}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`transition-shadow hover:shadow-lg hover:shadow-pink-500/30 ${props.className || ''}`}
    >
      {children}
    </MotionButton>
  );
};

export default ParticleButton;
