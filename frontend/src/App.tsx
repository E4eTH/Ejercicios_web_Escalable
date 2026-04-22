import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MyStory from './pages/MyStory';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0f172a', // slate-900
      paper: '#1e293b', // slate-800
    },
    primary: {
      main: '#ec4899', // pink-500
    },
    secondary: {
      main: '#6366f1', // indigo-500
    },
  },
  typography: {
    fontFamily: '"Inter", "system-ui", "Avenir", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col relative selection:bg-pink-500/30">
          {/* Fondo decorativo */}
          <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
          
          <Navbar />
          <main className="flex-grow z-10 relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/historia" element={<MyStory />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
