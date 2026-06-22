import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Domestic from './components/Domestic'
import International from './components/International'
import Services from './components/Services'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/domestic" element={<Domestic />} />
        <Route path="/international" element={< International />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
