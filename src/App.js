import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <Home />
      {/* Footer Start */}
      <div className="footer">
        <Footer />
      </div>
      {/* Footer Ends */}
    </div>
  );
}

export default App;
