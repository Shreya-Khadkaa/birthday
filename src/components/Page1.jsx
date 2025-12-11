import { motion } from 'framer-motion'

export default function Page1({ onSurprise }) {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border-2 border-pink-400/30 p-8 overflow-hidden min-h-[600px] shadow-2xl shadow-pink-500/20">
      {/* Photo Display */}
      <motion.div
        className="mb-8 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-pink-400 shadow-2xl shadow-pink-500/50">
          <img 
            src="/bebu/1000096514.png" 
            alt="Bebu" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-transparent" />
        </div>
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-6xl font-bold text-pink-200 mb-3 tracking-tight text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Happy Birthday
      </motion.h1>
      
      <motion.div
        className="text-4xl font-bold text-rose-300 mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Bebu ❤️
      </motion.div>

      {/* Message */}
      <motion.div
        className="max-w-xl mx-auto mb-8 space-y-3 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        <p className="text-xl text-pink-100 leading-relaxed font-semibold">
          Happy Birthday to my favorite person
        </p>
        <p className="text-base text-pink-200/80 leading-relaxed">
          Thank you for all the laughs, the memories, and for just being you.
          Here's to another amazing year together.
        </p>
      </motion.div>

      {/* Surprise Button */}
      <motion.button
        onClick={onSurprise}
        className="block mx-auto px-10 py-4 text-white font-semibold text-lg bg-gradient-to-r from-pink-500 to-rose-500 rounded-full hover:from-pink-600 hover:to-rose-600 shadow-lg hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Continue 💕
      </motion.button>
    </div>
  )
}
