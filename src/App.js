import './App.css';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import {Route, Routes} from 'react-router-dom';
import Contact from './pages/contact/Contact';


function App() {
  return (
    // <div className='page'>
      <>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
      </>
    // </div>
  );
}

export default App;
