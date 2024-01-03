import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Home from "./pages/Home";
import Catagories from "./pages/Catagories";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Home></Home>
        <Catagories></Catagories>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
