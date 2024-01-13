import React from "react";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Cart from "./components/cart/cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catagory from "./components/product/catagory";
import Deals from "./components/product/deals";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/*" element={<Home />}></Route>
          <Route path="/account/*" element={<Account />}></Route>{" "}
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/catagories" element={<Catagory />}></Route>
          <Route path="/deals" element={<Deals />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
