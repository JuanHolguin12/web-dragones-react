import { BrowserRouter } from "react-router-dom"
import { AuthRouter } from "./router/AuthRouter"
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // duración de la animación (en ms)
      once: true,     // si quieres que se ejecute solo una vez
    });
  }, []);
  return (
    <BrowserRouter>
      <AuthRouter />
    </BrowserRouter>
  )
}

export default App
