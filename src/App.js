import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from './views/Home'
import About from './views/About'
import Work from './views/Work'
import Testimonials from './views/Testimonials'
import Price from './views/Price'
import Count from './views/Count'
import Blog from './views/Blog'
import Contact from './views/Contact'
import Footer from './views/Footer'

function App() {
  useEffect(() => {
    AOS.init({ duration: 700, anchorPlacement: 'top-center', once: true })

    const refresh = () => AOS.refresh()
    window.addEventListener('load', refresh)
    return () => window.removeEventListener('load', refresh)
  }, [])

  return (
    <div className="overflow-x-clip">
      <Home />
      <About />
      <Work />
      <Testimonials />
      <Price />
      <Count />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
