import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
import { ThemeProvider } from './context/DarkModeContext.jsx'

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ThemeProvider>
  
)
