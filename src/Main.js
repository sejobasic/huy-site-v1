import './Main.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Releases from './pages/Releases'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className='main-container'>
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path='/'>
              <Home />
            </Route>
            <Route path='/About'>
              <About />
            </Route>
            <Route path='/Releases'>
              <Releases />
            </Route>
            <Route path='/Contact'>
              <Contact />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
