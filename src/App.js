import './App.css';
// Import Routes from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/aboutUs/About';
import Service from './pages/service/Service';
import Gallery from './pages/gallery/Gallery';
import Strangth from './pages/strangth/Strangth';
import ContactUs from './pages/contact/ContactUs';

function App() {
  return (
    <Router>
      <Routes> {/* Replace Switch with Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/strength" element={<Strangth />} />
        <Route path="/contactUs" element={<ContactUs />} />


        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
