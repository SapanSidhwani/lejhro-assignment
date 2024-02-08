import { useEffect, useState } from 'react';
import './App.css';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import FixNavbar from './components/FixNavbar';

function App() {
  const [fixNavbar, setFixNavbar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      // Change component after scrolling 20vh
      if (scrollY > 0.2 * window.innerHeight) {
        setFixNavbar(true);
      } else {
        setFixNavbar(false);
      }
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='bg-body-tertiary'>
      <div style={{ backgroundColor: '#D6932C' }}>
        <div className='top-section width-setter'>
          {fixNavbar ? <div className="container-fluid bg-body-tertiary fixed-top"> <FixNavbar /> </div> : <Navbar />}
          <div className='mt-auto mb-5 ms-3'>
            <h2 className='text-white font-title'>Blogs</h2>
          </div>
        </div>
      </div>
      <Blog />
      <div className="b-example-divider" />
      <Footer />
    </div>
  );
}

export default App;
