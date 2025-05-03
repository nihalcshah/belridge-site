import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import './App.css'

// Import pages
import Home from './pages/Home'

// Import components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="overflow-hidden">
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />

      </div>
    </Router>
  )
}

export default App
