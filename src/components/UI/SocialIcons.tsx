import React from 'react'
import "./SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.facebook.com/profile.php?id=61555792408403" target="_blank"><img src="/facebook.png" alt="Facebook" style={{marginBottom: "1%"}}/></a>
      <a href="https://www.instagram.com/saibaitour" target="_blank"><img src="/instagram.png" alt="Instagram" style={{marginBottom: "1%"}}/></a>
      <a href='http://pf.kakao.com/Saibaitour/chat' target="_blank"><img src="/telegram.png" alt="Kakao" /></a>
    </div>
  )
}

export default SocialIcons