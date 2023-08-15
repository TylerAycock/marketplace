import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="wep-page">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path={"/details/:id"} element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
