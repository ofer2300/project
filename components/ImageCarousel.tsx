"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  '/revit/1.png',
  '/revit/2.png',
  '/revit/3.png',
  '/revit/4.png',
  '/revit/5.png',
  '/revit/6.png',
  '/revit/7.png',
  '/revit/13.png',
  '/revit/image_(1).png',
  '/revit/image_(3).png',
  '/revit/image (4).png',
  '/revit/image (5).png',
  '/revit/image (6).png',
  '/revit/image (7).png',
  '/revit/image (8).png',
  '/revit/image (9).png',
  '/revit/image (10).png',
  '/revit/image (11).png',
  '/revit/image (12).png',
]

export default function ImageCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        setIsTransitioning(false)
      }, 500) // Half of the transition time
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-lg">
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Image
          src={images[currentImageIndex]}
          alt={`Portfolio image ${currentImageIndex + 1}`}
          fill
          style={{ objectFit: 'cover' }}
          priority={currentImageIndex === 0}
          quality={90}
        />
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  )
} 