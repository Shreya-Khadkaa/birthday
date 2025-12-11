import { motion, AnimatePresence } from 'framer-motion'

export default function Modal({ show, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-w-lg w-full rounded-3xl overflow-hidden shadow-2xl shadow-pink-500/50"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 text-white hover:text-pink-200 text-3xl font-bold transition-colors bg-black/40 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm"
            >
              ×
            </button>

            {/* Photo taking most of the space */}
            <div className="relative">
              <img 
                src="/bebu/us.jpg" 
                alt="Us" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
            </div>

            {/* Text overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/85 to-transparent p-8 space-y-3">
              <div className="space-y-2 text-center">
                <p className="text-lg text-pink-100 leading-relaxed drop-shadow-md">
                  Every moment with you is a gift. Every day with you is a blessing.
                </p>

                <p className="text-lg text-white leading-relaxed drop-shadow-md">
                  I plan to be with you forever.
                </p>

                <p className="text-base text-pink-200 font-semibold pt-2 drop-shadow-md">
                  Love you endlessly ❤️
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
