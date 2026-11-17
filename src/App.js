import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Home/Products" element={<Products />} />
        <Route exact path="/Home/AboutUs" element={<AboutUs />} />
        <Route exact path="/Home/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
