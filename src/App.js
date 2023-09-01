import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <Home />
    </div>
  );
}

export default App;
