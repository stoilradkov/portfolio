import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './about/About'
import Contact from './contact/Contact'
import Education from './education/Education'
import Experience from './experience/Experience'
import Home from './home/Home'
import Navbar from './navbar/Navbar'
import NotFound from './notFound/NotFound'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <main className="px-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
