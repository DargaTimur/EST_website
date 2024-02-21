import React from 'react'
import "./SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.facebook.com/EternalSkyTour"><img src="/facebook.png" alt="Facebook" style={{marginBottom: "1%"}}/></a>
      <a href="https://www.instagram.com/"><img src="/instagram.png" alt="Instagram" style={{marginBottom: "1%"}}/></a>
      <a href="https://web.telegram.org/"><img src="/telegram.png" alt="Telegram" /></a>
    </div>
  )
}

export default SocialIcons