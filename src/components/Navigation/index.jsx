import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  const [menu, setMenu] = useState(false)

  const navRef = useRef()

  const navToggle = (ef) => {
    navRef.current.classList[ef]('active')
    document.querySelectorAll('section[class*=__section]').forEach((el) => {
      el.classList[ef]('active')
      setMenu(!menu)
    })
  }

  document.onclick = (e) => {
    if (
      e.target.classList.contains('nav__link')
      // !e.target.classList.contains('nav__content')
    ) {
      navToggle('remove')
    }
  }

  return (
    <header className="header">
      <nav className="nav__content" ref={navRef}>
        <FontAwesomeIcon
          className="nav__menu"
          icon={menu ? faClose : faBars}
          color="#000"
          onClick={() => navToggle('toggle')}
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
