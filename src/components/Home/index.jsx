import React from 'react'
import Chat from '../Chat'
import resources from '../../utils/resources'
import ScrollIndicator from './ScrollIndicator'

const Home = () => {
  return (
    <div className="home__container">
      <div className="section__wrapper">
        <section className="home__section">
          <video
            className="video"
            poster={resources.banner}
            autoPlay
            muted
            loop
            type="video/mp4"
          >
            <source src={resources.video1} type="video/mp4" />
          </video>

          <ScrollIndicator />

          <Chat />
        </section>
      </div>
      <div className="section__wrapper">
        <section className="home__section">
          <Chat />
        </section>
      </div>
    </div>
  )
}

export default Home
