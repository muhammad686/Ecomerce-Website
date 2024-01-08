import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Home from "./pages/Home";
import Account from "./pages/Account";
// import Login from "./pages/Login";s
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Account></Account>
      </header>
      <body>
        <Home></Home>
      </body>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
