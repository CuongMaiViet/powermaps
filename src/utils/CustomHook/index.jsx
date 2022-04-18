// import { useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const CustomHook = () => {
  const ScrollReveal = (trigger, el, duration, func) => {
    const section = document.querySelector(trigger)
    const element = section.querySelectorAll(el)
    gsap.registerPlugin(ScrollTrigger)
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        // toggleActions: 'play none none reset',
        // onEnter: func,
      },
    })

    tl.call(func)
    tl.fromTo(
      element,
      { opacity: 0, yPercent: 100, duration: duration },
      { opacity: 1, yPercent: 0, duration: duration, stagger: 0.25 }
    )
  }

  return { ScrollReveal }
}

export default CustomHook
