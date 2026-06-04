import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SavoirFaire from './pages/SavoirFaire'
import Conception from './pages/Conception'
import Realisations from './pages/Realisations'
import Entretien from './pages/Entretien'
import Contact from './pages/Contact'
import MentionsLegales from './pages/MentionsLegales'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paysagiste-charente-maritime" element={<SavoirFaire />} />
          <Route path="/conception-espace-vert-oleron" element={<Conception />} />
          <Route path="/amenagement-paysager-oleron" element={<Realisations />} />
          <Route path="/entretien-annuel-jardin-17" element={<Entretien />} />
          <Route path="/contact-paysagiste-17" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
