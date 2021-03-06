import React, { useEffect, useRef, useState } from 'react'
import './index.scss'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import Splitting from 'splitting'
import resources from '../../utils/resources'

const Banner = () => {
  const bannerRef = useRef()
  if (sessionStorage.getItem('banner')) {
    console.log('Too tired!!! No more banner plz')
  } else {
    useEffect(() => {
      const results = Splitting({
        target: '.image',
        by: 'cells',
        rows: 20,
        columns: 20,
        image: true,
      })
      for (let i = 1; i < 400; i++) {
        const duration = Math.random() * 3
        results[0].cells[i].style.animationDuration = 2 + duration + 's'
        results[0].cells[i].style.animationDelay = duration + 's'
      }
    }, [])

    useEffect(() => {
      setTimeout(() => {
        bannerRef.current.classList.add('disappear')
        sessionStorage.setItem('banner', true)
      }, 10000)
    }, [])
  }

  return (
    <>
      {!sessionStorage.getItem('banner') && (
        <section className="banner" ref={bannerRef}>
          <div className="image">
            <img src={resources.banner} />
          </div>
        </section>
      )}
    </>
  )
}

export default Banner
