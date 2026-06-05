import { useState, useEffect } from 'react'
import './ScrollToTopBtn.css'


export default function ScrollToTopBtn() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`scroll-top-btn${visible ? ' visible' : ''}`}
      onClick={handleClick}
      aria-label="Retour en haut de page"
      title="Retour en haut"
    >
      <i className="fa-solid fa-chevron-up" aria-hidden="true" />
    </button>
  )
}
