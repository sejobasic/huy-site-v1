import Cursor from "react-special-cursor";
import './Main.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Releases from './pages/Releases'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Cursor borderClassName='cursor-border'>
      <div className='main-container'>
        <Navbar />
        <div className='content-container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Releases" element={<Releases />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        <Footer />
        </div>
      </div>
      </Cursor>
    </Router>
  )
}

export default App
