import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}
export default App;
