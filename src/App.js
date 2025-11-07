import './App.css';
import ContactUs from './components/ContactUs';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app-container">
      <Navbar/>
      <ContactUs />
    </div>

  );
}

export default App;
