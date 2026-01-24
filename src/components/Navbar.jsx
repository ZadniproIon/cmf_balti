import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navItems = [
  {
    to: '/index.html',
    label: 'Acasă',
  },
  {
    to: '/despre-cmf.html',
    label: 'Despre noi',
  },
  {
    to: '/info-pentru-beneficiari.html',
    label: 'Generale',
  },
  {
    to: '/transparenta.html',
    label: 'Transparență',
  },
  {
    to: '/contacte.html',
    label: 'Contacte',
  },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const location = useLocation()
  const lastScrollY = useRef(0)
  const scrollDirection = useRef('up')

  useEffect(() => {
    document.body.classList.toggle('menu-lock', menuOpen)

    return () => {
      document.body.classList.remove('menu-lock')
    }
  }, [menuOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1100 && menuOpen) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY <= 0) {
        scrollDirection.current = 'up'
        setIsHidden(false)
        lastScrollY.current = 0
        return
      }

      const delta = currentScrollY - lastScrollY.current
      if (Math.abs(delta) < 5) {
        return
      }

      const nextDirection = delta > 0 ? 'down' : 'up'
      if (nextDirection !== scrollDirection.current) {
        scrollDirection.current = nextDirection
        setIsHidden(nextDirection === 'down')
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (menuOpen) {
      setIsHidden(false)
    }
  }, [menuOpen])

  const navLinkClassName = ({ isActive }) => (isActive ? 'active' : undefined)

  return (
    <header className={`navbar${isHidden ? ' navbar-hidden' : ''}`}>
        <Link className="left-side" to="/index.html">
          <img src="/images/logo-cmf.png" alt="Logo-ul CMF Balti" />
          <p>
            Centrul Medicilor de
            <br />
            Familie mun. Balți
          </p>
        </Link>

        <nav className="right-side" aria-label="Navigare principala">
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={navLinkClassName} end={item.to === '/index.html'}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Închide meniul' : 'Deschide meniul'}
        >
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </button>

        <nav id="mobile-menu" className={`mobile-menu${menuOpen ? ' menu-open' : ''}`} aria-label="Navigare mobilă">
          <ul>
            {navItems.map((item) => (
              <li key={`${item.to}-mobile`}>
                <NavLink
                  to={item.to}
                  className={navLinkClassName}
                  end={item.to === '/index.html'}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
    </header>
  )
}

export default Navbar
