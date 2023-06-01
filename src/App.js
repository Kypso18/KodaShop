import { Header } from "./components/Header";
// import { AllRoutes } from "./routes/AllRoutes";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <AllRoutes /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
