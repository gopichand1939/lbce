import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const HeroCarousel = () => {
  const images = [
    { url: 'https://i.postimg.cc/HWz0xm8N/e621e54c-fdfe-413d-b751-bd0262152787.png', alt: 'College Welcome' },
    { url: 'https://bullayyacollege.org/media/jrcollege/slides/3.png', alt: 'College Campus' },
    { url: 'https://bullayyacollege.org/media/jrcollege/slides/4.png', alt: 'College Event' },
    { url: 'https://bullayyacollege.org/media/jrcollege/slides/5_l6JEF02.png', alt: 'College Activities' },
    { url: 'https://bullayyacollege.org/media/jrcollege/slides/7_pmaNZFZ.png', alt: 'College Programs' }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const isPaused = useRef(false)

  useEffect(() => {
    if (images.length <= 1) return
    const interval = setInterval(() => {
      if (!isPaused.current) {
        setDirection(1)
        setCurrentIndex(prev => (prev + 1) % images.length)
      }
    }, 10000)
    return () => clearInterval(interval)
  }, [images.length])

  const slideVariants = {
    enter: direction => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: direction => ({ zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset, velocity) => Math.abs(offset) * velocity

  const paginate = newDirection => {
    setDirection(newDirection)
    if (newDirection === 1) setCurrentIndex(prev => (prev + 1) % images.length)
    else setCurrentIndex(prev => (prev - 1 + images.length) % images.length)
  }

  return (
    <div
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden shadow-2xl"
      onMouseEnter={() => (isPaused.current = true)}
      onMouseLeave={() => (isPaused.current = false)}
      onTouchStart={() => (isPaused.current = true)}
      onTouchEnd={() => (isPaused.current = false)}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)
            if (swipe < -swipeConfidenceThreshold) paginate(1)
            else if (swipe > swipeConfidenceThreshold) paginate(-1)
          }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover"
            onError={e => (e.target.src = 'https://via.placeholder.com/1200x600/0ea5e9/ffffff?text=College+Image')}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-12 lg:pb-16 px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-center text-white max-w-4xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 drop-shadow-lg">
                Dr. Lankapalli Bullayya College of Engineering
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 drop-shadow-md">Autonomous College</p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button onClick={() => paginate(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full glass bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all duration-300 hover-glow">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button onClick={() => paginate(1)} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full glass bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all duration-300 hover-glow">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default HeroCarousel
