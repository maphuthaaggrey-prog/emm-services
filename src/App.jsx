import Header from './assets/Components/Header'
import Hero from './assets/Components/Hero'
import About from './assets/Components/About'
import Services from './assets/Components/Services'
import Director from './assets/Components/Director'
import Footer from './assets/Components/Footer'
import SEO from './assets/Components/SEO'
import HashHandler from './assets/Components/Hooks/HashHandler'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import WorkHistory from './assets/Pages/WorkHistory'
import Gallery from './assets/Components/Gallery'

function App() {
  return (
    <Router>
      <SEO />
      <HashHandler />
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <section id="home">
              <Hero />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="services">
              <Services />
            </section>
            <section id="director">
              <Director />
            </section>
            <section id="contact">
              <Footer />
            </section>
          </>
        } />
      
        <Route path="/work-history" element={<WorkHistory />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  )
}

export default App