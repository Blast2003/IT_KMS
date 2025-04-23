import { motion } from 'framer-motion'
import Image from 'next/image'
import Blogo from '../public/Big_Logo.jpg'
import Blogo1 from '../public/Big_Logo1.jpg'

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-[1224px] mx-auto mt-12 px-6 py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-2xl shadow-2xl overflow-hidden flex flex-col-reverse md:flex-row items-center gap-8 perspective-1000">
      {/* Decorative background blobs */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-yellow-400 rounded-full filter blur-2xl opacity-20" />

      <div className="md:w-1/2 text-center md:text-left z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 animate-bounce">
          Unlock Your IT Potential
        </h1>
        <p className="text-lg md:text-xl mb-6 opacity-90 transform transition-transform duration-700 hover:-translate-y-2 hover:rotate-x-2">
          Learn, grow, and level up with free, expert-led online courses.
        </p>
        <button className="relative inline-block bg-yellow-400 text-gray-900 font-semibold py-4 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-x-2 focus:outline-none focus:ring-4 focus:ring-yellow-200">
          Get Started
        </button>
      </div>

      <div className="md:w-1/2 flex justify-center md:justify-end z-10">
        
        {/* Flip-card wrapper */}
        <motion.div
            className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
            style={{
            transformStyle: 'preserve-3d',
            }}
            animate={{ rotateY: [0, 180, 360] }}
            transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
        >
            {/* Front face */}
            <div
            className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl"
            style={{ backfaceVisibility: 'hidden' }}
            >
            <Image
                src={Blogo}
                alt="Logo Front"
                layout="fill"
                objectFit="cover"
            />
            </div>
            {/* Back face */}
            <div
            className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl"
            style={{
                transform: 'rotateY(180deg)',
                backfaceVisibility: 'hidden',
            }}
            >
            <Image
                src={Blogo1}
                alt="Logo Back"
                layout="fill"
                objectFit="cover"
            />
            </div>
        </motion.div>
      </div>
    </section>
  )
}
