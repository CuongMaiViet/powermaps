import React from 'react'
import Chat from '../Chat'

const Home = () => {
  return (
    <div className="home__container">
      <div className="section__wrapper">
        <section className="home__section">
          <Chat />
        </section>
      </div>
      <div className="section__wrapper">
        <section className="home__section">hello</section>
      </div>
    </div>
  )
}

export default Home
