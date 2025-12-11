import { motion } from 'framer-motion'

const memories = [
  'All the random moments that turn into the best memories 🌟',
  'Our late night talks about everything and nothing 💭',
  'The way we can make each other laugh no matter what 😄',
  'All the little inside jokes only we understand 😊',
  'Every adventure we go on together, big or small 🎉',
]

export default function Page3() {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border-2 border-pink-400/30 p-8 overflow-hidden min-h-[600px] shadow-2xl shadow-pink-500/20">
      <motion.h2
        className="text-4xl font-bold text-pink-200 mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Our Best Moments Together
      </motion.h2>

      {/* Photo with Polaroid Style */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <div className="relative max-w-sm mx-auto">
          <div className="bg-white p-4 pb-16 rounded-lg shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
            <img 
              src="/bebu/1000096514.png" 
              alt="Memory" 
              className="w-full h-64 object-cover rounded"
            />
            <p className="text-center mt-4 text-slate-800 font-handwriting text-lg">Us 💕</p>
          </div>
        </div>
      </motion.div>

      <div className="space-y-4 max-w-2xl mx-auto">
        {memories.map((memory, index) => (
          <motion.div
            key={index}
            className="group text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-pink-900/30 to-transparent rounded-lg border-l-4 border-pink-500/50 hover:border-pink-400 hover:from-pink-900/40 transition-all duration-300">
              <span className="text-2xl font-bold text-pink-400 min-w-[35px]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="text-base text-pink-100 leading-relaxed pt-0.5">
                {memory}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-lg text-pink-200 mt-6 font-semibold text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        Can't wait for all the memories we'll make this year 💗
      </motion.p>
    </div>
  )
}
