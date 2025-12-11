import { motion } from 'framer-motion'

const reasons = [
  { title: '😊 Your Energy', text: 'You bring so much life and happiness to every moment we share. Being around you just feels right.' },
  { title: '💭 Your Mind', text: 'I love our conversations and how you see the world. You always know how to make me think and smile.' },
  { title: '🤗 Your Warmth', text: 'You make me feel comfortable being myself. With you, I never have to pretend to be anyone else.' },
  { title: '❤️ Your Heart', text: 'The way you care about people and the things you love shows what an amazing person you are.' },
]

export default function Page2() {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border-2 border-pink-400/30 p-8 overflow-hidden min-h-[600px] shadow-2xl shadow-pink-500/20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Photo Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden border-4 border-pink-400/50 shadow-2xl shadow-pink-500/50">
            <img 
              src="/bebu/1000095968.jpg" 
              alt="Bebu" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent" />
          </div>
        </motion.div>

        {/* Content Section */}
        <div>
          <motion.h2
            className="text-4xl font-bold text-pink-200 mb-6 text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            What I Appreciate About You
          </motion.h2>

          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.15 }}
              >
                <div className="p-4 bg-gradient-to-r from-pink-900/40 to-rose-900/40 backdrop-blur-sm rounded-xl border border-pink-500/30 hover:border-pink-400/60 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
                  <h3 className="text-lg font-bold text-pink-200 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-pink-100/90 leading-relaxed">
                    {reason.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
