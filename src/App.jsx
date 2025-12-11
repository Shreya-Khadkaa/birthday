import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Balloons from './components/Balloons'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Modal from './components/Modal'
import Confetti from './components/Confetti'

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    // Show confetti on load
    setTimeout(() => {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 3000)
    }, 500)
  }, [])

  useEffect(() => {
    // Show confetti on page change
    if (currentPage > 1) {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 3000)
    }
  }, [currentPage])

  const handleSurpriseClick = () => {
    setShowModal(true)
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
  }

  const pages = [
    <Page1 key="page1" onSurprise={handleSurpriseClick} />,
    <Page2 key="page2" />,
    <Page3 key="page3" />,
    <Page4 key="page4" onSurprise={handleSurpriseClick} />,
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-900/30 via-transparent to-transparent" />
      <Balloons />
      
      <div className="relative z-10 w-full max-w-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            {pages[currentPage - 1]}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-4 mt-10">
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`transition-all duration-300 rounded-full ${
                currentPage === page
                  ? 'w-10 h-3 bg-gradient-to-r from-pink-500 to-rose-500'
                  : 'w-3 h-3 bg-pink-900/40 hover:bg-pink-600/60'
              }`}
            />
          ))}
        </div>
      </div>

      <Modal show={showModal} onClose={() => setShowModal(false)} />
      {showConfetti && <Confetti />}
    </div>
  )
}

export default App
