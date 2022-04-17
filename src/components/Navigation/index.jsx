import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import resources from '../../utils/resources'

const Navigation = () => {
  const [img, setImg] = useState(resources.img1)
  const navRef = useRef()

  const navToggle = (ef) => {
    navRef.current.classList[ef]('active')
    document.querySelectorAll('section[class*=__section]').forEach((el) => {
      el.classList[ef]('active')
    })
  }

  document.onclick = (e) => {
    e.target.classList.contains('nav__link') && navToggle('remove')
    // !e.target.classList.contains('nav__menu') && navToggle('remove')
  }

  return (
    <header className="header">
      <nav className="nav__content" ref={navRef}>
        <div className="nav__menu" onClick={() => navToggle('toggle')}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="link__navarea">
          <NavLink
            exact="true"
            activeclassname="active"
            className="nav__link"
            to={'/'}
            onMouseEnter={() => setImg(resources.img1)}
          >
            home
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="nav__link"
            to={'/about'}
            onMouseEnter={() => setImg(resources.img2)}
          >
            about us
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="nav__link"
            to={'/services'}
            onMouseEnter={() => setImg(resources.img3)}
          >
            services
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="nav__link"
            to={'/products'}
            onMouseEnter={() => setImg(resources.img4)}
          >
            products
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="nav__link"
            to={'/contact'}
            onMouseEnter={() => setImg(resources.img5)}
          >
            contact us
          </NavLink>
        </div>

        <div className="img__navarea">
          <img src={img} alt="img" />
        </div>
      </nav>
    </header>
  )
}

export default Navigation
