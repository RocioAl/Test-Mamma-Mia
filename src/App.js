import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './views/Home';
import Carrito from './views/Carrito';
import Pizza from './views/Pizza';
import 'bootstrap/dist/css/bootstrap.min.css';
import PizzaProvider from "./myContextPizza";

function App() {
  return (
    <PizzaProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/pizza/:id" element={<Pizza />} />

        </Routes>
      </BrowserRouter>
    </PizzaProvider>
  );
}

export default App;

