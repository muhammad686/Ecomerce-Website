import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Home from "./pages/Home";
import Account from "./pages/Account";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Account></Account>
      <Footer></Footer>
    </div>
  );
}

export default App;
