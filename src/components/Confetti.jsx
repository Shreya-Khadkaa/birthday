import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Confetti() {
  const [confettiPieces, setConfettiPieces] = useState([])

  useEffect(() => {
    const pieces = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: ['#ec4899', '#f43f5e', '#fb7185', '#fda4af'][
        Math.floor(Math.random() * 4)
      ],
      delay: i * 0.03,
      duration: Math.random() * 2 + 3,
    }))
    setConfettiPieces(pieces)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[999]">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute w-2 h-2 rounded-full shadow-lg"
          style={{
            left: `${piece.left}%`,
            backgroundColor: piece.color,
            boxShadow: `0 0 10px ${piece.color}`,
          }}
          initial={{ y: -20, opacity: 1, scale: 1.5 }}
          animate={{
            y: '100vh',
            opacity: 0,
            scale: 0,
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: 'easeIn',
          }}
        />
      ))}
    </div>
  )
}
