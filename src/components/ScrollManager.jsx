import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollManager = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash)
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' })
        }, 25)
        return
      }
    }

    window.scrollTo({ top: 0 })
  }, [location.pathname, location.hash])

  return null
}

export default ScrollManager
