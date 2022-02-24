import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className='content'>
       <Routes>
       <Route path="/" element={<Home/>}></Route>
       {/* <Route path="/about" element={<About/>}></Route>
       <Route path="/blogs" element={<Blogs/>}></Route>
       <Route path="/gallery" element={<Gallery/>}></Route> */}
       </Routes>
      </div>
   
    </div>
    </Router>
  );
}

export default App;
