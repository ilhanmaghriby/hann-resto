import { BrowserRouter, Routes, Route } from "react-router-dom";
import FastFood from "./components/Menu/FastFood";
import IceCream from "./components/Menu/IceCream";
import SideBar from "./components/SideBar/SideBar";
import Cart from "./components/Cart/Cart";
import Noodles from "./components/Menu/Noodles";
import Rice from "./components/Menu/Rice";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <SideBar />
        <Routes>
          <Route path="/" element={<Rice />} />
          <Route path="/rice" element={<Rice />} />
          <Route path="/noodles" element={<Noodles />} />
          <Route path="/fastfood" element={<FastFood />} />
          <Route path="/icecream" element={<IceCream />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
