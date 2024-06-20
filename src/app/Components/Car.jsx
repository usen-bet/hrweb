"use client"
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import "./Styles/Car.scss"
import Image from 'next/image'
import Fade from 'embla-carousel-fade'

 useEmblaCarousel.globalOptions = { loop: true }
export default function Car() {

  const [emblaRef] = useEmblaCarousel([Fade()], [Autoplay()])
  const Images = [
    "https://i.ibb.co/ZYCM6Y9/mav1.png",
    "https://i.ibb.co/6JpTLbJ/Mav3.png",
    "https://i.ibb.co/SmN0VpH/mav2.png"
  ]
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {Images.map((src, index) => (
          <div className="embla__slide image" key={index}>
          <img src={src} alt="" />
        </div>
        ))}
      </div>
    </div>
  )
}
