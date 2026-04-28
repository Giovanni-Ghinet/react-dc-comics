import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import './App.css';
function App() {
  

  return <div>
    <div className="container-header"><Header/></div>
    <div ><Main/></div>
    <div className="container-footer"><Footer/></div>
  </div>
}

export default App
