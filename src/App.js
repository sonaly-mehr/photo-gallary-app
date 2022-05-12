import { createTheme, Paper, ThemeProvider } from '@material-ui/core';
import { createContext } from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Components/Home';
export const ImageContext = createContext();

function App() {
  const [gallery, setGallery] = useState([]);
  const [darkMode, setDarkMode] = useState(false)

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    },
  });
  const value = {
    gallery, setGallery,
    darkMode, setDarkMode
  }
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Paper>
          <ImageContext.Provider value={value}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </ImageContext.Provider>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
