import { useState } from 'react'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTAForm from './components/CTAForm'
import Footer from './components/Footer'

function App() {
  const [open, setOpen] = useState(false)

  const openForm = () => setOpen(true)
  const closeForm = () => setOpen(false)

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gray-900 text-white flex items-center justify-center font-bold">D</div>
            <span className="font-semibold text-gray-900">Doryo</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <button onClick={openForm} className="rounded-md bg-gray-900 text-white px-3 py-1.5 font-semibold hover:bg-gray-800">Contact sales</button>
          </nav>
        </div>
      </header>

      <main>
        <Hero onCTAClick={openForm} />
        <Logos />
        <div id="features"><Features /></div>
        <Pricing onContact={openForm} />
      </main>

      <Footer />

      <CTAForm open={open} onClose={closeForm} />
    </div>
  )
}

export default App
