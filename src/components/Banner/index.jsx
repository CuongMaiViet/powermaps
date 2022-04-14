import React, { useEffect, useRef } from 'react'
import './index.scss'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import Splitting from 'splitting'
import logo from '../../assets/images/logo.jpeg'

const Banner = () => {
  const bannerRef = useRef()

  useEffect(() => {
    const results = Splitting({
      target: '.image',
      by: 'cells',
      rows: 20,
      columns: 20,
      image: true,
    })
    for (let i = 1; i < 400; i++) {
      const duration = Math.random() * 5
      results[0].cells[i].style.animationDuration = 2 + duration + 's'
      results[0].cells[i].style.animationDelay = duration + 's'
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      bannerRef.current.classList.add('disappear')
    }, 13000)
  }, [])
  return (
    <section className="banner" ref={bannerRef}>
      <div className="image">
        <img src={logo} />
      </div>
    </section>
  )
}

export default Banner
