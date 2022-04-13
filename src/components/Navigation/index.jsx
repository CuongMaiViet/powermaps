import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  const navRef = useRef()
  const navToggle = () => {
    navRef.current.classList.toggle('active')
    document.querySelectorAll('section[class*=__section]').forEach((el) => {
      el.classList.toggle('active')
    })
  }
  return (
    <header className="header">
      <nav className="nav__content" ref={navRef}>
        <FontAwesomeIcon
          className="nav__menu"
          icon={faBars}
          color="#000"
          onClick={navToggle}
        />

        <NavLink
          exact="true"
          activeclassname="active"
          className="nav__link"
          to={'/'}
        >
          home
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="nav__link"
          to={'/about'}
        >
          about us
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="nav__link"
          to={'/services'}
        >
          services
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="nav__link"
          to={'/products'}
        >
          products
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="nav__link"
          to={'/contact'}
        >
          contact us
        </NavLink>
      </nav>
    </header>
  )
}

export default Navigation
