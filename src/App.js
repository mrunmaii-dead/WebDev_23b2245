import Navbar from './Navbar';
import Home from './Home';
import Overview from './Overview';
import Started from './Started';
import Highlights from './Highlights';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <div className = "site-name"> <h1></h1></div>
       
      <div className="App">

        
        <Navbar/>
        <div className = 'content'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/highlights" element={<Highlights />} />
            <Route path="/started" element={<Started />} />
          </Routes>
        </div>
    
    </div>
   
    </Router>
  );
}

export default App;
