import React, { useEffect } from 'react'
import resources from '../../utils/resources'
import {
  faAward,
  faCar,
  faCarAlt,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import counterUp from 'counterup2'
import ScrollIndicator from '../ScrollIndicator'
import Typed from 'typed.js'
import CustomHook from '../../utils/CustomHook'
import { clientsData } from '../../utils/ClientData'

const DEFAULT_OPTION = {
  strings: [
    ` PM Tuning Have Been Providing <br /> <span>The Best And Safest Tuning
    Solutions</span>  <br /> For Over 15 Years`,
    `By developing the most thoroughly tested upgrades <br/> We have earned an enviable reputation for the best`,
    `We create some of the most sought after upgrades <br/> and offer our services worldwide`,
    `Call us on <span>070 8966 832</span> <br/> or email: <span>sales@powermap.vn</span>`,
  ],
  typeSpeed: 50,
  backSpeed: 0,
  startDelay: 1000,
  backDelay: 1000,
  loop: true,
  loopCount: 2,
}

const Home = () => {
  const { ScrollReveal } = CustomHook()

  const count = () => {
    return () =>
      document.querySelectorAll('.number').forEach((e) => {
        counterUp(e, {
          duration: 2000,
          delay: 16,
        })
      })
  }
  const type = (section, string, typeSpeed) => {
    return () => {
      const type = new Typed(document.querySelector(`${section}-title`), {
        strings: [string],
        typeSpeed: typeSpeed,
        showCursor: false,
      })
      return () => {
        type.destroy()
      }
    }
  }

  useEffect(() => {
    ScrollReveal('.statistic__section', '.statistic__box', 0.5, count())
    ScrollReveal(
      '.offer__section',
      '.offer__card',
      1,
      type('.offer__section', 'what we do', 80)
    )
    ScrollReveal(
      '.client__section',
      '.client__section-item',
      1,
      type(
        '.client__section',
        `Clients <br />
      <span>We've been working with teams around the world.</span>`,
        50
      )
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

      <section className="offer__section">
        <h2 className="offer__section-title"></h2>

        <div className="offer__content">
          <div className="offer__card">
            <div className="offer__image">
              <img src={resources.img3} alt="" />
            </div>
            <h3 className="title">upgrades</h3>
            <p className="description">
              We have have thoroughly developed upgrades for many cars, the most
              popular is our ECU software recalibrations, which will completely
              transform your car. We also offer additional modifications to
              further enhance the performance and style of your vehicle.
            </p>
          </div>

          <div className="offer__card">
            <div className="offer__image">
              <img src={resources.img7} alt="" />
            </div>
            <h3 className="title">our service</h3>
            <p className="description">
              Our fully trained and highly experienced engineers can visit you
              anywhere, at your convenience, your car will be fully tested
              before and after tuning, with the latest genuine, professional
              tools.
            </p>
          </div>

          <div className="offer__card">
            <div className="offer__image">
              <img src={resources.img8} alt="" />
            </div>
            <h3 className="title">our products</h3>
            <p className="description">
              We also supply performance and cosmetic upgrades for many makes
              and models. Additionally, we have some of the very latest
              diagnostic equipment, specialising in European manufacturers like
              Mercedes, BMW, Audi and Porsche.
            </p>
          </div>

          <div className="offer__card">
            <div className="offer__image">
              <img src={resources.img6} alt="" />
            </div>
            <h3 className="title">all makes</h3>
            <p className="description">
              We are able to upgrade the performance of cars from many
              manufacturers, such as Ferrari, Porsche, BMW, Audi, VW, Jeep,
              Ford, Toyota, Nissan and many more. Our service is available for
              most petrol and turbo diesel engines.
            </p>
          </div>
        </div>
      </section>

      <section className="client__section">
        <h2 className="client__section-title"></h2>

        <div className="client__section-row">
          {clientsData.map((clients, index) => (
            <div className="client__section-column" key={index}>
              {clients.map((c, i) => (
                <div className="client__section-item" key={i}>
                  <img src={resources[c.name]} alt={c.name} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
