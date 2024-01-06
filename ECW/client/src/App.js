import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Home from "./pages/Home";
import SignUpLogin from "./pages/SignUp_Login";
// import Login from "./pages/Login";s
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Home></Home>
        <SignUpLogin></SignUpLogin>
        <Footer></Footer>
        {/* <Login></Login> */}
      </header>
    </div>
  );
}

export default App;
