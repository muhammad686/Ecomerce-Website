import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Cart from "./components/cart/cart";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      {/* <Account></Account> */}
      <Cart></Cart>
      <Footer></Footer>
    </div>
  );
}

export default App;
