import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Naslovna from './components/Naslovna';
import Prijava from "./components/Prijava";
import Provera from "./components/Provera";
import ContactPage from './components/ContactPage'
import NavBar from "./navBar";
import Stats from './components/Stats'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
  <Router>
    <NavBar />
    <Routes>
    <Route exact path="/" element={<Naslovna />}/>
    <Route exact path="/prijava" element={<Prijava />}/>
    <Route path="/provera" element={<Provera />}/>
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/stats" element={<Stats />} />
    </Routes>
  </Router>  
  
  </div>
  );
}

export default App;
