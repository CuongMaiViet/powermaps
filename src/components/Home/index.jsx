import React, { useEffect, useState } from 'react'
import resources from '../../utils/resources'
import {
  faAward,
  faCar,
  faCarAlt,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import VanillaTilt from 'vanilla-tilt'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import counterUp from 'counterup2'
import ScrollIndicator from '../ScrollIndicator'
import Typed from 'typed.js'

const DEFAULT_OPTION = {
  strings: [
    ` PM Tuning Have Been Providing <br /> <span>The Best And Safest Tuning
    Solutions</span>  <br /> For Over 15 Years`,
  ],
  typeSpeed: 50,
  backSpeed: 50,
  startDelay: 1000,
  backDelay: 2000,
  loop: true,
}

const Home = () => {
  const [counter, setCounter] = useState(false)

  useEffect(() => {
    if (counter) {
      document.querySelectorAll('.number').forEach((e) => {
        counterUp(e, {
          duration: 2000,
          delay: 16,
        })
      })
    }
  }, [counter])

  //   useEffect(() => {
  //     VanillaTilt.init(document.querySelectorAll('.statistic__box'), {
  //       max: 10,
  //       speed: 400,
  //       scale: 1.05,
  //       glare: true,
  //       'max-glare': 0.8,
  //     })
  //   }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.statistic__section',
        toggleActions: 'play none restart reset',
        onEnter: () => setCounter(true),
        onEnterBack: () => setCounter(true),
        onLeave: () => setCounter(false),
        onLeaveBack: () => setCounter(false),
      },
    })

    tl.fromTo(
      '.statistic__box',
      { opacity: 0, yPercent: 100, duration: 0.5 },
      { opacity: 1, yPercent: 0, duration: 0.5, stagger: 0.25 }
    )
  }, [])

  useEffect(() => {
    const type = new Typed(
      document.querySelector('.typing-intro'),
      DEFAULT_OPTION
    )

    return () => {
      type.destroy()
    }
  }, [])

  return (
    <div className="home__container">
      <section className="video__section">
        <video className="video" autoPlay muted loop playsInline>
          <source src={resources.video1} type="video/mp4" />
        </video>

        <div className="typing-intro"></div>

        <ScrollIndicator />
      </section>

      <section className="statistic__section">
        <div className="statistic__box brands">
          <div className="icon brand">
            <FontAwesomeIcon icon={faAward} />
          </div>
          <div className="content">
            <span className="number">10</span>
            <span>brands</span>
          </div>
        </div>
        <div className="statistic__box cars-sold">
          <div className="icon">
            <FontAwesomeIcon icon={faCar} />
          </div>
          <div className="content">
            <span className="number">3500</span>
            <span>cars sold</span>
          </div>
        </div>

        <div className="statistic__box happy-client">
          <div className="icon">
            <FontAwesomeIcon icon={faUserGroup} />
          </div>
          <div className="content">
            <span className="number">320</span>
            <span>happy clients</span>
          </div>
        </div>

        <div className="statistic__box new-cars">
          <div className="icon">
            <FontAwesomeIcon icon={faCarAlt} />
          </div>
          <div className="content">
            <span className="number">100</span>
            <span>new cars</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
