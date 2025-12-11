import { motion } from 'framer-motion'

const wishes = [
  '✨ Hope this year brings you everything you have been working towards',
  '💝 Hope you know how much you mean to me',
  '🌟 Hope all the good things you deserve come your way',
  '💕 Hope we get to experience more awesome moments together',
  '❤️ Hope you have an amazing year ahead',
]

export default function Page4({ onSurprise }) {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border-2 border-pink-400/30 p-8 overflow-hidden min-h-[600px] shadow-2xl shadow-pink-500/20">
      <motion.h2
        className="text-4xl font-bold text-pink-200 mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Birthday Wishes For You
      </motion.h2>

      {/* Heart-shaped photo frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-6 relative"
      >
        <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-rose-400 shadow-2xl shadow-rose-500/50">
          <img 
            src="/bebu/1000095968.jpg" 
            alt="Bebu" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-rose-500/20" />
        </div>
      </motion.div>

      <div className="space-y-3 mb-6 max-w-2xl mx-auto">
        {wishes.map((wish, index) => (
          <motion.div
            key={index}
            className="group"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <div className="p-4 bg-gradient-to-r from-pink-900/30 to-rose-900/30 rounded-lg border border-pink-500/30 hover:border-pink-400/50 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
              <p className="text-base text-pink-100">
                {wish}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="max-w-2xl mx-auto mb-6 space-y-3 bg-gradient-to-br from-pink-900/40 to-rose-900/40 backdrop-blur-sm rounded-2xl p-6 border-2 border-pink-400/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <p className="text-xl text-pink-200 font-bold text-center">
          Bebu, 💕
        </p>
        <p className="text-base text-pink-100 leading-relaxed text-center">
          You really do make everything better. Thanks for being such an important part of my life
          and for all the good times we share together.
        </p>
        <p className="text-lg text-pink-200 font-semibold text-center">
          I'm not going anywhere - you're stuck with me. ❤️
        </p>
        <p className="text-base text-pink-100 text-center">
          Love you. Happy Birthday! 🎂💖
        </p>
      </motion.div>

      <motion.button
        onClick={onSurprise}
        className="block mx-auto px-10 py-4 text-white font-semibold text-lg bg-gradient-to-r from-pink-500 to-rose-500 rounded-full hover:from-pink-600 hover:to-rose-600 shadow-lg hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        One More Thing 💌
      </motion.button>
    </div>
  )
}
