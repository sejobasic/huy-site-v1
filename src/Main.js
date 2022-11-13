import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Releases from './pages/Releases'
import Contact from './pages/Contact'
import Loader from './components/Loader'

// Styles
import './Main.css'

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 6000)
  }, [])
  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <div className='main-container'>
          <Navbar />
          <div className='content-container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/About' element={<About />} />
              <Route path='/Releases' element={<Releases />} />
              <Route path='/Contact' element={<Contact />} />
            </Routes>
          </div>
        </div>
      )}
    </Router>
  )
}

export default App
